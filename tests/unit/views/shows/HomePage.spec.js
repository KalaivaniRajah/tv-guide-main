import { shallowMount } from "@vue/test-utils";
import HomePage from "../../../../src/views/shows/HomePage.vue";
import { createStore } from "vuex";

describe("HomePage", () => {
  test("by default, three show lists", () => {
    const $store = createStore({
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
            },
            actions: {
                loadShows: jest.fn,
                loadTopComedyShows: jest.fn,
                loadTopDramaShows: jest.fn,
                loadTopActionShows: jest.fn
            }
          }
        }
    });
    const spy = jest.spyOn(HomePage.methods, 'loadShows');
    const wrapper = shallowMount(HomePage, {
        mocks: {
          $store
        }
    });
    const mockActions = {
        dispatch: jest.fn()
    }
    wrapper.vm.$action = mockActions;
    expect(wrapper.findAll("h3")).toHaveLength(3);
  });
});