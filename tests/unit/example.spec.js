import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuetify from 'vuetify'

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuetify)
  const msg = 'new message'
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg },
    localVue
  })
  it('renders props.msg when passed', () => {    
    expect(wrapper.text()).toMatch(msg)
  })
})
