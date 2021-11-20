import { startLoop } from "./startLoop"
export let canvas
export let ctx


export const initLoop = (canvasElement) => { 
    if(canvasElement){
        canvas = canvasElement
    } else {
        canvas = document.createElement('canvas')
    }
    
    ctx = canvas.getContext('2d')
    startLoop()
}