/**
 * @jest-environment jsdom
 */
import 'jest-canvas-mock'
  
import {startLoop } from '../startLoop' 
import {onResize } from '../onResize'
import {loop } from '../loop'

jest.mock('../onResize', () => ({
    __esModule: true, // this property makes it work
    onResize: jest.fn(),
}));

jest.mock('../loop', () => ({
    __esModule: true, // this property makes it work
    loop: jest.fn(),
}));

beforeEach(() => {
    document.body.innerHTML = ''
})

describe('testing startLoop', () => {         
    it('controlla che i side effects siano stati chiamati ', () => {
        startLoop()
        expect(onResize).toBeCalled(); 
        expect(loop).toBeCalled(); 
    })
})