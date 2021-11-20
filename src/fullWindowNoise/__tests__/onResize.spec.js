/**
 * @jest-environment jsdom
 */
 import 'jest-canvas-mock'
  

 import {initLoop, canvas } from '../init'
 import {onResize } from '../onResize'

 beforeEach(() => {
     document.body.innerHTML = ''
 })
 describe('testing startLoop', () => {         
     // @ts-ignore
     it('controlla che le misure della finestra e del canvas si equivalgano al resize tramite dispatchEvent  ', () => {
        initLoop()
        const evt = new Event('resize')
        window.dispatchEvent(evt) 
        expect(canvas.width).toEqual(window.innerWidth)
        expect(canvas.height).toEqual(window.innerHeight)
     })
     it('controlla che le misure della finestra e del canvas si equivalgano con chiamata diretta della funzione  ', () => {
        initLoop()
        onResize() 
        expect(canvas.width).toEqual(window.innerWidth)
        expect(canvas.height).toEqual(window.innerHeight)
     })
 })