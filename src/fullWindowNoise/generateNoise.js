/**
 * genero noise random
 */
export const generateNoise = (ctx) => {
    let w = ctx.canvas.width,
        h = ctx.canvas.height,
        
    idata = ctx.createImageData(w, h),
        
    buffer32 = new Uint32Array(idata.data.buffer),
    buffer_len = buffer32.length,
    i = 0
    
    for (; i < buffer_len; i++){
        buffer32[i] = ((255 * Math.random()) | 0) << 24;
    }   
    
    ctx.putImageData(idata, 0, 0);
}