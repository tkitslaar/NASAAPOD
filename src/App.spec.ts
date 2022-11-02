import { mount, VueWrapper } from "@vue/test-utils";
import App from "./App.vue";

let wrapper: VueWrapper;

function createComponent() {
  wrapper = mount(App);
}

test("Component Exists", () => {
  createComponent();
  expect(wrapper.exists()).toBe(true);
});
