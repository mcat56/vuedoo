import { shallowMount, createLocalVue } from "@vue/test-utils";
import SideRail from "@/components/SideRail.vue";
import store from "@/store";

let wrapper: any; 

beforeEach(() => {
  wrapper =  shallowMount(SideRail, { propsData: { width: '320px', height: '720px'}, store });
});

afterEach(() => {
  wrapper.destroy();
})
describe("CustomComponent.vue", () => {
  it("renders siderail component", () => {
      expect(wrapper.classes('SideRail'))
      expect(wrapper.text()).toMatch('Side Rail Container');
    });
  it("has a button", () => {
      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
    })
  it("has props", () => {
      expect(wrapper.vm.width).toMatch('320px')
      expect(wrapper.vm.height).toMatch('720px')
  })
});
