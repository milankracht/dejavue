import { mount } from '@vue/test-utils'
import Poster from '@/components/generic/Poster.vue'

describe('Poster', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Poster)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
