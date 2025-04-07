import App from './App.vue'
import {mount} from '@vue/test-utils'
import ui from '@nuxt/ui/vue-plugin'

it("should rende button", ()=>{
    const wrapper = mount(App, {
        global: {
            plugins: [ui]
        }
    })
})