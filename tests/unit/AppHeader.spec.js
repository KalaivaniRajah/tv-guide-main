import { shallowMount } from "@vue/test-utils";
import AppHeader from "../../src/components/layout/AppHeader.vue";
import ButtonLayout from "../../src/components/layout/ButtonLayout.vue";
//jest .mock("")

describe("AppHeader", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppHeader);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("does h1 exist", () => {
    expect(wrapper.find("h1").text()).toBe("TV Guide");
  });
  it("does input field exist", () => {
    expect(wrapper.find("input").text()).toBe("");
  });

  it("does search button exist", () => {
    const bar = wrapper.findComponent(ButtonLayout);
    expect(bar.exists()).toBe(true);
  });

  it("should render to a snapshot when list is empty", () => {
    const propsData = { searchedShow: null };
    const wrapper1 = shallowMount(AppHeader, { propsData });
    expect(wrapper1.element).toMatchSnapshot();
  });

  it("checking initial data value", () => {
    expect(wrapper.vm.searchedShow).toBe(null);
  });

  it("checking if the function findShow is called", () => {
    const wrapper1 = shallowMount(AppHeader);
    expect(wrapper1.vm.searchedShow).toBe(null);
    wrapper1.vm.findShow = jest.fn();
    wrapper1.find("input").text("The Simpsons");
    AppHeader.methods.findShow.bind(wrapper1.vm);
    expect(wrapper1.vm.searchedShow);
  });
});
