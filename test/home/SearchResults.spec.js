import { shallowMount } from '@vue/test-utils'
import SearchResults from '@/components/home/SearchResults.vue'
import axios from 'axios'

jest.mock('axios')

describe('SearchResults', () => {
  let wrapper = shallowMount(SearchResults, {
    propsData: {
      showSearchResults: true,
      search: 'foo'
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.text()).toMatch('Search results')
  })

  test('initial settings when search is set', () => {
    expect(wrapper.vm.page).toEqual(1)
    expect(wrapper.vm.list.length).toEqual(0)
    expect(wrapper.vm.loadMore).toEqual(false)
  })

  describe ('searchForPrograms', () => {
    describe('succesful api call', () => {
      wrapper = null

      const response = { 
        data: {
          results: [{ id: 1, title: 'foo'}, { id: 2, title: 'bar' }]
        }
      }
  
      axios.get.mockResolvedValue(response)
  
      wrapper = shallowMount(SearchResults, {
        propsData: {
          showSearchResults: true,
          search: 'foo'
        }
      })
    })
  
    afterEach(() => {
      jest.resetModules()
      jest.clearAllMocks()
    })

    test('successful searchForPrograms api call', async() => {
      wrapper.vm.searchForPrograms()
      
      expect(axios.get).toBeCalledWith(expect.stringMatching(/foo/))
      expect(axios.get).toHaveBeenCalledTimes(1)

      wrapper.vm.$nextTick().then(function () {
        expect(wrapper.vm.list).toEqual([{ id: 1, title: 'foo'}, { id: 2, title: 'bar' }])
        expect(wrapper.vm.loadMore).toEqual(false)
      })
    })
  })
})
