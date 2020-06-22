import { mount } from '@vue/test-utils'
import CarouselItem from '@/components/home/CarouselItem.vue'

describe('CarouselItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CarouselItem)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
