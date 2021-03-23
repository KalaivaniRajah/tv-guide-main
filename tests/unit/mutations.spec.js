import mutations from "../../src/store/modules/shows/mutations.js";

describe("setShows", () => {
  it("should set shows and save them to store", () => {
    const state = { shows: [] };
    const items = [
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
    ];
    mutations.setShows(state, items);

    expect(state.shows).toEqual(items);
  });
});

describe("setTopComedyShows", () => {
  it("should set Top Comedy Shows and save them to store", () => {
    const state = { topComedyShows: [] };
    const items = [
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
    ];
    mutations.setTopComedyShows(state, items);

    expect(state.topComedyShows).toEqual(items);
  });
});

describe("setTopDramaShows", () => {
  it("should set Top Drama Shows and save them to store", () => {
    const state = { topDramaShows: [] };
    const items = [
      {
        id: "46",
        name: "Brooklyn Nine-Nine",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/235/587547.jpg",
        network: "NBC",
        genre: "Drama",
        summary:
          "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it's about the men and women behind the badge.</p>",
        status: "Running",
        rating: 8.2,
        premiered: "2013-09-17",
        site: "https://www.nbc.com/brooklyn-nine-nine",
      },
    ];
    mutations.setTopDramaShows(state, items);

    expect(state.topDramaShows).toEqual(items);
  });
});

describe("setTopActionShows", () => {
  it("should set Top Action Shows and save them to store", () => {
    const state = { topActionShows: [] };
    const items = [
      {
        id: "46",
        name: "Brooklyn Nine-Nine",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/235/587547.jpg",
        network: "NBC",
        genre: "Action",
        summary:
          "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it's about the men and women behind the badge.</p>",
        status: "Running",
        rating: 8.2,
        premiered: "2013-09-17",
        site: "https://www.nbc.com/brooklyn-nine-nine",
      },
    ];
    mutations.setTopActionShows(state, items);

    expect(state.topActionShows).toEqual(items);
  });
});
