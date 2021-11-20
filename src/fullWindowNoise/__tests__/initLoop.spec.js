/**
 * @jest-environment jsdom
 */
import 'jest-canvas-mock'
import {initLoop, canvas, ctx } from '../init' 
import {startLoop } from '../startLoop' 
jest.mock('../startLoop', () => ({
    __esModule: true, // this property makes it work
    startLoop: jest.fn(),
  }));
beforeEach(() => {
    document.body.innerHTML = ''
})
describe('testing initLoop', () => {         
    // @ts-ignore
    it('initLoop con elemento', () => {
        
        initLoop(document.createElement('canvas'))
        
        expect(canvas).not.toBe(undefined)
        expect(ctx).not.toBe(undefined)
        expect(startLoop).toBeCalled(); 
        
    })
    it('initLoop senza elemento', () => {
        
        initLoop()
        
        expect(canvas).not.toBe(undefined)
        expect(ctx).not.toBe(undefined)
        expect(startLoop).toBeCalled(); 
        
    })
    
})