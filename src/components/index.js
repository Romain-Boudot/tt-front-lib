import Vue from 'vue';
import * as TTButton from './tt-button.vue'
import * as TTContainer from './tt-container.vue'
import * as TTIcon from './tt-icon.vue'
import * as TTInput from './tt-input.vue'

const components = [
  TTButton,
  TTContainer,
  TTIcon,
  TTInput
]

components.forEach((comp) => {
  Vue.component(comp.name, comp)
})
