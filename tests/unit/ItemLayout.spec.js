import { shallowMount } from "@vue/test-utils";
import ItemLayout from "../../src/components/layout/ItemLayout.vue";
//jest .mock("")

describe("ItemLayout", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ItemLayout);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("does div exist", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });
});
test("renders slots content", () => {
  const wrapper = shallowMount(ItemLayout, {
    slots: {
      default: "Default",
      first: "<img>",
      second: "Show Information",
    },
  });

  expect(wrapper.html()).toContain("<div>");
});
