import '@/polyfills';
import {configure, extend} from 'vee-validate';
import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
import SideBar from '@/components/SidebarPlugin';

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
// vue-bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// asset imports
import '@/assets/scss/argon.scss';
import '@/assets/vendor/nucleo/css/nucleo.css';
import * as rules from 'vee-validate/dist/rules';
import {messages} from 'vee-validate/dist/locale/en.json';

locale.use(lang);

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});
export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    configure({
      classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: ['is-dirty', 'is-dirty'],
      }
    })
  }
};
