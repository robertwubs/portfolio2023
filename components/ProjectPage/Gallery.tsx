import { useState } from "react"

import styled from "styled-components"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"

import { Project } from "lib/data/projects"
import { colors } from "lib/colors"

import ShimmeredImage from "components/ShimmeredImage"

interface GalleryProps {
    project: Project
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
        setTimeout(() => {
            const slideHeight = slider.slides[slider.track.details.rel]?.firstChild as HTMLImageElement

            slider.container.style.height = slideHeight.offsetHeight + "px"
        }, 100)
    }
    slider.on("created", updateHeight)
    slider.on("updated", updateHeight)
    slider.on("slideChanged", updateHeight)
}

const Gallery = ({ project }: GalleryProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
            created() {
                setLoaded(true)
            }
        },
        [AdaptiveHeight]
    )

    return <SliderStyle>
        {project.galleryImages && project.galleryImages.length > 0 && <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {project.galleryImages.map((image, index) => {
                        return <div key={`gallery-image-${image}-${index}`} className="keen-slider__slide">
                            <ShimmeredImage $shimmerHeight={500} $shimmerWidth={500} sizes="60vw" priority onLoad={() => instanceRef.current?.update()} src={`/images/gallery/${image}`} alt={`${project.title} image ${index}`} fill className="galleryImage" />
                        </div>
                    })}
                </div>
            </div>
            {loaded && instanceRef.current && <>
                <Arrow
                    left
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                />

                <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                />
            </>}
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>}

    </SliderStyle>
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

const SliderStyle = styled.div`
    position: relative;

    [class^="number-slide"],
    [class*=" number-slide"] {
        background: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #fff;
        font-weight: 500;
        height: 200px;
        max-height: 100vh;
    }

    .arrow {
        width: 15px;
        height: 15px;
        position: absolute;
        bottom: 0;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        fill: ${colors.black};
        cursor: pointer;
    }
    
    .arrow--left {
        left: 0;
    }
    
    .arrow--right {
        left: auto;
        right: 0px;
    }
    
    .arrow--disabled {
        fill: rgba(0,0,0, 0.5);
    }
    
    .navigation-wrapper {
        position: relative;
    }
    
    .dots {
        display: flex;
        padding: 10px 0;
        justify-content: center;
    }
    
    .dot {
        border: none;
        width: 10px;
        height: 10px;
        background: #c5c5c5;
        border-radius: 50%;
        margin: 0 5px;
        padding: 5px;
        cursor: pointer;
    }
    
    .dot:focus {
        outline: none;
    }
    
    .dot.active {
        background: #000;
    }
    
    .keen-slider {
        transition: height 0.3s;
        border-radius: 5px;
    }
    
    .keen-slider .keen-slider__slide {
        min-height: auto !important;
        min-width: 100% !important;
        max-width: 100% !important;
    }

    .galleryImage {
        position: unset !important;
        height: auto !important;
    }
`

export default Gallery