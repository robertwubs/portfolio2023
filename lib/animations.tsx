import { keyframes } from "styled-components"

export const animations = {
    shrink: keyframes`from {transform: rotateY(0deg);} to {transform: rotateY(90deg);}`,
    expand: keyframes`from {transform: rotateY(90deg);} to {transform: rotateY(0deg);}`,
    moveLeft: keyframes`from {transform: translateX(0em);}to {transform: translateX(-2.7em);}`,
    moveLeftTitle: keyframes`from {transform: translateX(0em);}to {transform: translateX(-9em);}`,
    moveRight: keyframes`from {transform: translateX(-2.7em);} to {transform: translateX(0em);}`,
    moveRightTitle: keyframes`from {transform: translateX(-9em);}to {transform: translateX(0em);}`
}