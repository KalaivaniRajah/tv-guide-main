import { shallowMount } from "@vue/test-utils";
import ShowList from "../../../../src/views/shows/ShowList.vue";

describe("ShowList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ShowList);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("does div exist", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });
});

test("props", () => {
  const wrapper = shallowMount(ShowList, {
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

  expect(wrapper.html()).toContain("NBC");
});
