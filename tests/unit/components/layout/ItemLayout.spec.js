import { shallowMount } from "@vue/test-utils";
import ItemLayout from "../../../../src/components/layout/ItemLayout.vue";

describe("ItemLayout", () => {
  test("by default contains div and slot", () => {
    const wrapper = shallowMount(ItemLayout);
    expect(wrapper.findAll("div")).toHaveLength(1);
    expect(wrapper.html()).toContain("<div></div>");
  });
});
