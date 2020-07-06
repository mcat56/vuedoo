import { shallowMount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue"
import HomeComponent from "@/components/HomeComponent.vue";
import store from "@/store";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe("HomeComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Welcome to your Vue.js App";
    const wrapper = shallowMount(HomeComponent, {
      localVue, propsData: { msg }, store
    });
    expect(wrapper.classes('HomeComponent'))

    expect(wrapper.text()).toMatch(msg);
  });
});
