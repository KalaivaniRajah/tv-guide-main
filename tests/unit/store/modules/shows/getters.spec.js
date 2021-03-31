import getters from "../../../../../src/store/modules/shows/getters.js";

describe("shows", () => {
  it("should return all shows", () => {
    const shows = [
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
    const result = [
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
    const state = { shows };
    expect(getters.shows(state)).toEqual(result);
  });
});

describe("topComedyShows", () => {
  it("should return top comedy shows", () => {
    const shows = [
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
      {
        id: "461",
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
    const topComedyShows = [
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
    const result = [
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
    const state = {
      shows,
      topComedyShows,
    };
    expect(getters.topComedyShows(state)).toEqual(result);
  });
});

describe("topDramaShows", () => {
  it("should return top drama shows", () => {
    const shows = [
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
      {
        id: "461",
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
    const topDramaShows = [
      {
        id: "461",
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
    const result = [
      {
        id: "461",
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
    const state = {
      shows,
      topDramaShows,
    };
    expect(getters.topDramaShows(state)).toEqual(result);
  });
});

describe("topActionShows", () => {
  it("should return top action shows", () => {
    const shows = [
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
      {
        id: "461",
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
    const topActionShows = [
      {
        id: "461",
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
    const result = [
      {
        id: "461",
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
    const state = {
      shows,
      topActionShows,
    };
    expect(getters.topActionShows(state)).toEqual(result);
  });
});
