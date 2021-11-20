//@ts-check
import { onResize } from "./onResize"
import { loop } from "./loop"
export const startLoop = () => {
    onResize()
    window.addEventListener('resize', onResize) 
    loop()
}