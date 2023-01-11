import Image, { ImageProps } from "next/image"

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

interface ShimmerProps extends ImageProps {
    $shimmerWidth?: number
    $shimmerHeight?: number
}

const ShimmeredImage = (props: ShimmerProps) => {
    let alteredProps = { ...props }
    delete alteredProps.$shimmerHeight
    delete alteredProps.$shimmerWidth

    return <Image className="shimmered-image" {...alteredProps} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(props.$shimmerWidth || 100, props.$shimmerHeight || 100))}`} />
}

export default ShimmeredImage