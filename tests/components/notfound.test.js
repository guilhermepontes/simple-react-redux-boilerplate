import React from 'react'
import { shallow } from 'enzyme'

const context = describe

import NotFoundComponent from '../../application/containers/NotFoundPage'

context('<NotFoundPage />', () => {
  describe('Content', () => {
    it('should render a not found text', () => {
      const wrapper = shallow(<NotFoundComponent />)
      expect(wrapper.text()).toEqual('Not found')
    })
  })
})