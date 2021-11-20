/**
 * @jest-environment jsdom
 */
import {loop, toggle, request } from '../loop'
import {ctx} from '../init'
import { generateNoise } from '../generateNoise'

jest.mock('../generateNoise', () => ({
    __esModule: true,
    generateNoise: jest.fn(),
}));
jest.mock('../init', () => ({
    __esModule: true,
    ctx: jest.fn(),
}));

describe('testing loop', () => {         
    // @ts-ignore
    it('chiama due volte la funzione loop e ne verifica la logica', () => {
        let firstRequest
        loop()
        firstRequest = request

        expect(toggle).toBe(false)
        expect(Number(firstRequest)).not.toBe(undefined)
        expect(Number(firstRequest)).not.toBe(NaN)
        expect(generateNoise).toHaveBeenCalledWith(ctx)
        
        loop()
        expect(toggle).toBe(true)
        expect(Number(request)).not.toBe(NaN)
        expect(request).not.toEqual(firstRequest)
        expect(generateNoise).toHaveBeenCalledWith(ctx)
    })
   
    
})