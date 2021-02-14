import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(Button, {
    propsData: {
      label: 'Button',
      primary: true
    }
  });
})

afterEach(() => {
  wrapper.destroy();
})

describe('Button', () => {

  it('Renders label correctly', () => {
    expect(wrapper.props().label).toBe('Button');
  });

  it('Renders at the correct default size', () => {
    expect(wrapper.classes()).toContain('button--medium');
  });

  
  it('Renders at the correct selected size', async () => {

    await wrapper.setProps({
      size: 'small'
    })

    expect(wrapper.classes()).toContain('button--small');
  });

  it('Renders as a secondary button when selected', async () => {
    await wrapper.setProps({
      primary: false
    })

    expect(wrapper.classes()).toContain('button--secondary')
  })

  it('Emits an event when clicked', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted()).toBeTruthy();
  });
});