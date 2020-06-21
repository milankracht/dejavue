import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase())

Vue.filter('capitalizeFirstLetter', val => val.charAt(0).toUpperCase() + val.slice(1))

Vue.filter('reduceLength', (val, maxLength) => val.length > maxLength ? val.substr(0, maxLength) + '...' : val)
