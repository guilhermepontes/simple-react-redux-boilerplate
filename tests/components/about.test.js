import React from 'react'
import { shallow } from 'enzyme'

const context = describe

import AboutComponent from '../../application/components/about/AboutComponent'

context('<AboutComponent />', () => {
  describe('Content', () => { 
    it('should render the about text', () => {
      const wrapper = shallow(<AboutComponent />)
      expect(wrapper.text()).toEqual('About')
    })
  })
})