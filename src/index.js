import {default as TtButton} from './tt-button.vue'
import {default as TtContainer} from './tt-container.vue'
import {default as TtIcon} from './tt-icon.vue'
import {default as TtInput} from './tt-input.vue'

export function install(Vue) {
	if (install.installed) return;
  
	install.installed = true;
  
	const components = {
    'tt-button': TtButton,
    'tt-container': TtContainer,
    'tt-icon': TtIcon,
    'tt-input': TtInput
  }
  
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
  })
}