import { mount } from "@vue/test-utils";

let ButtonLayout = {
    props:{
        mode: {
          type: String,
          required: false,
          default: null,
        },
        link: {
          type: Boolean,
          required: false,
          default: false,
        },
        to: {
          type: String,
          required: false,
          default: "/",
        },
    }
}

test("ButtonLayout", () => {
    const wrapper = mount(ButtonLayout);
})