//@ts-check
import {canvas} from './init'
export const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}