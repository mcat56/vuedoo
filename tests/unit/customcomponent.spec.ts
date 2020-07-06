import { shallowMount, createLocalVue, createWrapper } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue"
import CustomComponent from "@/components/CustomComponent.vue";
import store from "@/store";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe("CustomComponent.vue", () => {
  it("renders props.name when passed", () => {
      const wrapper = shallowMount(CustomComponent, {
          localVue, propsData: { name: 'Navigation Bar', 
          img: 'https://i.imgur.com/wlwZgAT.png', 
          componentName: 'navbar'}, store
      })
      expect(wrapper.classes('CustomComponent'))
      expect(wrapper.text()).toMatch(name);
    });
    it("has a link", () => {
    const wrapper = shallowMount(CustomComponent, {
        localVue, propsData: { name: 'Navigation Bar', 
        img: 'https://i.imgur.com/wlwZgAT.png', 
        componentName: 'navbar'}, store
    })

    const row = document.querySelector('b-row')
    expect(row).toBeDefined
    expect(wrapper.html()).toContain('<b-row')
    expect(wrapper.findComponent({ name: 'BLink'}).exists()).toBe(true)
    // expect(wrapper.findComponent({ name: 'BRow').exists()).toBe(true)
    expect(wrapper.text()).toMatch('Navigation Bar')
  })
});
