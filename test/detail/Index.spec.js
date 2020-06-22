import { shallowMount } from '@vue/test-utils'
import Detail from '@/components/detail/Index.vue'

describe('Detail', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Detail)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('computed property rating', () => {
    const wrapper = shallowMount(Detail, {
      propsData: {
        selectedProgram: { vote_average: 8 }
      }
    })

    expect(wrapper.vm.rating).toEqual(4)
  })
})
