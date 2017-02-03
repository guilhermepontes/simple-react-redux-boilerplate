import indexReducer from '../../application/reducers'

const context = describe

context('Combine Reducers', () => {
  it('should combine all reducers available', ()=> {
    console.debug(
      indexReducer
    )
    debugger

    expect(indexReducer).toBe(Object)
  })
})