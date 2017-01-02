import React from 'react'
import { shallow } from 'enzyme'

const context = describe

import HomeComponent from '../../application/components/home/HomeComponent'

context('<HomeComponent />', () => {
  describe('Content', () => {
    it('should render the hello world text', () => {
      const wrapper = shallow(<HomeComponent />)
      expect(wrapper.text()).toEqual('Hello')
    })
  })
})