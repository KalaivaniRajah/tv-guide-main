import { shallowMount } from "@vue/test-utils";
import AppHeader from "../../../../src/components/layout/AppHeader.vue";
import { createStore } from "vuex";

describe("AppHeader", () => {
  test("by default the input field should be empty and the searchedShow should be null", () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.vm.$data.searchedShow).toEqual(null);
  });

  test("if we click the Search button, it should call the findShow method and the searchedShow value should get changed", () => {
    const mockMethod = jest.spyOn(AppHeader.methods, 'findShow');
    const wrapper = shallowMount(AppHeader, {
    });
    wrapper.vm.store = createStore({
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
    const mockRouter = {
      push: jest.fn()
    }
    wrapper.find("#userInput").setValue("The Simpsons");
    wrapper.vm.$store = wrapper.vm.store;
    wrapper.vm.$router = mockRouter;
    wrapper.find("#searchButton").trigger("click");
    expect(mockMethod).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/showdetails/83");
  });
});