import { shallowMount, createLocalVue, createWrapper } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue"
import CustomComponent from "@/components/CustomComponent.vue";
import store from "@/store";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

let wrapper: any; 

beforeEach(() => {
  wrapper =  shallowMount(CustomComponent, {
    localVue, propsData: { name: 'Navigation Bar', 
    img: 'https://i.imgur.com/wlwZgAT.png', 
    componentName: 'navbar'}, store
  });
});

afterEach(() => {
  wrapper.destroy();
})
describe("CustomComponent.vue", () => {
  it("renders props.name when passed", () => {
      expect(wrapper.classes('CustomComponent'))
      expect(wrapper.text()).toMatch(name);
    });
    it("has a link", () => {
    const row = document.querySelector('b-row')
    expect(row).toBeDefined
    expect(wrapper.html()).toContain('<b-row')
    expect(wrapper.findComponent({ name: 'BLink'}).exists()).toBe(true)
    // why doesnt BRow exist?
    // expect(wrapper.findComponent({ name: 'BRow').exists()).toBe(true)
    expect(wrapper.text()).toMatch('Navigation Bar')
  })
});
