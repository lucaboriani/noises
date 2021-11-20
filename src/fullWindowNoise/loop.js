
import { generateNoise } from "./generateNoise";
import { ctx } from "./init";
/**
 *  l'id della richiesta al raf
 */
export let request

/**
 * Indicatore di stato
 */
export let toggle = true


export const loop = () => {
    toggle = !toggle;
    if (toggle) {
        request = requestAnimationFrame(loop);
        return;
    }
    generateNoise(ctx);
    request = requestAnimationFrame(loop);
}