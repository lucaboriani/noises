/**
 * Versione bundle non test friendly
 */
let canvas
let ctx
let toggle = true
let request
export const initLoop = (canvasElement) => { 
    if(canvasElement){
        canvas = canvasElement
    } else {
        canvas = document.createElement('canvas')
    }
    
    ctx = canvas.getContext('2d')
    startLoop()
}

export const startLoop = () => {
    onResize()
    window.addEventListener('resize', onResize) 
    loop()
}

export const stopLoop = () => {
    window.removeEventListener('resize', onResize) 
    cancelAnimationFrame(request)
}

export const loop = () => {
    toggle = !toggle;
    if (toggle) {
        request = requestAnimationFrame(loop);
        return;
    }
    generateNoise(ctx);
    request = requestAnimationFrame(loop);
}

export const generateNoise = (ctx) => {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        
    idata = ctx.createImageData(w, h),
        
    buffer32 = new Uint32Array(idata.data.buffer),
    buffer_len = buffer32.length,
    i = 0
    
    for (; i < buffer_len; i++)
        buffer32[i] =
            ((255 * Math.random()) | 0) << 24;
    
    ctx.putImageData(idata, 0, 0);
}

export const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}