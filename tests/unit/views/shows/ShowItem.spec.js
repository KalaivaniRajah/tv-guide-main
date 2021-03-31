import { shallowMount } from "@vue/test-utils";
import ShowItem from "../../../../src/views/shows/ShowItem.vue";
import ButtonLayout from "../../../../src/components/layout/ButtonLayout.vue";

describe("ShowItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ShowItem);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("does button layout exist", () => {
    const bar = wrapper.findComponent(ButtonLayout);
    expect(bar.exists()).toBe(true);
  });
  it("triggers displayShowDetails with mock data with id and checks router path", () => {
    const wrapper1 = shallowMount(ShowItem, {
      propsData: {
        id: 8,
      },
    });
    expect(
      ShowItem.computed.displayShowDetails.bind(wrapper1.vm).call()
    ).toContain("/showdetails/");
  });
});
test("props", () => {
  const wrapper = shallowMount(ShowItem, {
    props: {
      items: [
        {
          id: "46",
          name: "Brooklyn Nine-Nine",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/235/587547.jpg",
          network: "NBC",
          genre: "Comedy",
          summary:
            "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it's about the men and women behind the badge.</p>",
          status: "Running",
          rating: 8.2,
          premiered: "2013-09-17",
          site: "https://www.nbc.com/brooklyn-nine-nine",
        },
      ],
    },
  });

  expect(wrapper.html()).toContain("/showdetails");
});
