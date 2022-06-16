import { shallowMount } from '@vue/test-utils'
import FizzBuzz from '@/components/FizzBuzz.vue';

describe('FizzBuzz result count', () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = shallowMount(FizzBuzz);
  })

  it('Result count is zero by default', () => {
    expect(wrapper.vm.result.count).toBe(0)
  })

  it('Result count increase after click the button', async () => {
    await wrapper.find('.fizzBuzz__button').trigger('click');
    expect(wrapper.vm.result.count).toBe(1)
  })
})

describe('FizzBuzz result fizzBuzz', () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = shallowMount(FizzBuzz);
  })

  it('Result fizzBuzz is empty by default', () => {
    expect(wrapper.vm.result.fizzBuzz).toBe("")
  })

  it('Result fizzBuzz is Fizz when count is Multiple of 3', async () => {
    wrapper.vm.result.count = 2
    await wrapper.find('.fizzBuzz__button').trigger('click');
    expect(wrapper.vm.result.fizzBuzz).toBe("Fizz")
  })

  it('Result fizzBuzz is Buzz when count is Multiple of 5', async () => {
    wrapper.vm.result.count = 4
    await wrapper.find('.fizzBuzz__button').trigger('click');
    expect(wrapper.vm.result.fizzBuzz).toBe("Buzz")
  })

  it('Result fizzBuzz FizzBuzz when count is Multiple of 15', async () => {
    wrapper.vm.result.count = 14
    await wrapper.find('.fizzBuzz__button').trigger('click');
    expect(wrapper.vm.result.fizzBuzz).toBe("FizzBuzz")
  })

  it('Result fizzBuzz is empty other case', async () => {
    await wrapper.find('.fizzBuzz__button').trigger('click');
    expect(wrapper.vm.result.count).toBe(1)
  })
})