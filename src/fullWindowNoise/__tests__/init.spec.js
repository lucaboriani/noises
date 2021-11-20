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
describe('testing initLoop verificandone i side effects', () => {         
    
    it('initLoop con elemento già presente nel dom', () => {
        
        const cnvs = document.createElement('canvas')
        document.body.appendChild(cnvs)

        initLoop(cnvs)
        
        expect(canvas).not.toBe(undefined)
        expect(ctx).not.toBe(undefined)
        expect(startLoop).toBeCalled(); 

        expect(canvas.parentNode).toBe(document.body)
        
    })
    it('initLoop con elemento creato al volo', () => {
        
        initLoop(document.createElement('canvas'))
        
        expect(canvas).not.toBe(undefined)
        expect(ctx).not.toBe(undefined)
        expect(startLoop).toBeCalled(); 

        expect(canvas.parentNode).toBe(document.body)
        
    })
    it('initLoop senza elemento', () => {
        
        initLoop()
        
        expect(canvas).not.toBe(undefined)
        expect(ctx).not.toBe(undefined)
        expect(startLoop).toBeCalled(); 
        expect(canvas.parentNode).toBe(document.body)
    })
    
})