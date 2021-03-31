export default {
  loadShows(context) {
    const shows = [];
    fetch("http://api.tvmaze.com/shows")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (responseData) {
        for (const id in responseData) {
          const object = {
            id: responseData[id].id,
            name: responseData[id].name,
            image: responseData[id].image.medium,
            network: responseData[id].network
              ? responseData[id].network.name
              : "NA",
            genre: responseData[id].genres[0],
            summary: responseData[id].summary,
            status: responseData[id].status,
            rating: responseData[id].rating.average,
            premiered: responseData[id].premiered,
            site: responseData[id].officialSite,
          };
          shows.push(object);
        }
        shows.sort(function (a, b) {
          return b.rating - a.rating;
        });
        context.commit("setShows", shows);
      });
  },
  loadTopComedyShows(context) {
    const shows = [];
    fetch("http://api.tvmaze.com/shows")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (responseData) {
        responseData.sort(function (a, b) {
          return b.rating.average - a.rating.average;
        });
        for (const id in responseData) {
          if (
            responseData[id].genres[0] === "Comedy" &&
            shows.length < 5 &&
            responseData[id].rating.average > 8.0
          ) {
            const object = {
              num: responseData[id].id,
              name: responseData[id].name,
              image: responseData[id].image.medium,
              network: responseData[id].network
                ? responseData[id].network.name
                : "NA",
              genre: "Comedy",
              summary: responseData[id].summary,
              status: responseData[id].status,
              rating: responseData[id].rating.average,
              premiered: responseData[id].premiered,
              site: responseData[id].officialSite,
            };
            shows.push(object);
          }
        }
        context.commit("setTopComedyShows", shows);
      });
  },
  loadTopDramaShows(context) {
    const shows = [];
    fetch("http://api.tvmaze.com/shows")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (responseData) {
        responseData.sort(function (a, b) {
          return b.rating.average - a.rating.average;
        });
        for (const id in responseData) {
          if (
            responseData[id].genres[0] === "Drama" &&
            shows.length < 5 &&
            responseData[id].rating.average > 8.0
          ) {
            const object = {
              num: responseData[id].id,
              name: responseData[id].name,
              image: responseData[id].image.medium,
              network: responseData[id].network
                ? responseData[id].network.name
                : "NA",
              genre: "Drama",
              summary: responseData[id].summary,
              status: responseData[id].status,
              rating: responseData[id].rating.average,
              premiered: responseData[id].premiered,
              site: responseData[id].officialSite,
            };
            shows.push(object);
          }
        }
        context.commit("setTopDramaShows", shows);
      });
  },
  loadTopActionShows(context) {
    const shows = [];
    fetch("http://api.tvmaze.com/shows")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (responseData) {
        responseData.sort(function (a, b) {
          return b.rating.average - a.rating.average;
        });
        for (const id in responseData) {
          if (
            responseData[id].genres[0] === "Action" &&
            shows.length < 5 &&
            responseData[id].rating.average > 8.0
          ) {
            const object = {
              num: responseData[id].id,
              name: responseData[id].name,
              image: responseData[id].image.medium,
              network: responseData[id].network
                ? responseData[id].network.name
                : "NA",
              genre: "Action",
              summary: responseData[id].summary,
              status: responseData[id].status,
              rating: responseData[id].rating.average,
              premiered: responseData[id].premiered,
              site: responseData[id].officialSite,
            };
            shows.push(object);
          }
        }
        context.commit("setTopActionShows", shows);
      });
  },
};
