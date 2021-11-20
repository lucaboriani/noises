import { startLoop } from "./startLoop"
export let canvas
export let ctx


export const initLoop = (canvasElement) => { 
    if(canvasElement){
        canvas = canvasElement
        if(!canvasElement.parentNode){
            document.body.appendChild(canvas)
        }
    } else {
        canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
    }
    
    ctx = canvas.getContext('2d')
    startLoop()
    return canvas
}