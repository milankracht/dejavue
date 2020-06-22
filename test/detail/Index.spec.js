import { mount } from '@vue/test-utils'
import Detail from '@/components/detail/Index.vue'

describe('Detail', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Detail)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
