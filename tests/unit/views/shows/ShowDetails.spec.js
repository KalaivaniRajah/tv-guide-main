import { shallowMount } from "@vue/test-utils";
import ShowDetails from "../../../../src/views/shows/ShowDetails.vue";
import Vuex from "vuex";

describe("ShowDetails", () => {
  test("by default the input field should be empty and the searchedShow should be null", () => {
    expect(ShowDetails.data().selectedShow).toEqual(null);
  });

  test("if we click the Search button, it should call the findShow method and the searchedShow value should get changed", () => {
    let store = new Vuex.Store({
        modules: {
          shows: {
            namespaced: true,
            state() {
              return {
                shows: [
                {
                  id: 83,
                  name: "The Simpsons",
                  image: "https://static.tvmaze.com/uploads/images/medium_portrait/271/679902.jpg",
                  network: "FOX",
                  genre: "Comedy",
                  summary: "<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>",
                  status: "Running",
                  rating: 8.2,
                  premiered: "1989-12-17",
                  site: "http://www.fox.com/the-simpsons/full-episodes",
                }
                ]
              }
            },
            getters: {
              shows(state) {
                return state.shows;
              },
            }
          }
        }
    });
    const wrapper = shallowMount(ShowDetails, { $store: store });
    //const mockMethod = jest.spyOn(ShowDetails.methods, 'title');
    //expect(ShowDetails.methods.title()).toEqual("The Simpsons");
  });
});