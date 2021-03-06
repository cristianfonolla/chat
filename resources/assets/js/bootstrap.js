
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

require('bootstrap-less');

require('admin-lte');
window.toastr = require('toastr');
require('icheck');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

// Use trans function in Vue (equivalent to trans() Laravel Translations helper). See htmlheader.balde.php partial.
Vue.prototype.trans = (key) => {
    return _.get(window.trans, key, key);
};

//Laravel AdminLTE login input field component
Vue.component('login-input-field', require('./components/LoginInputField.vue'));

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo"

import io from "socket.io-client"
window.io = io

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '9514e99e1ce7f8e6d8a9',
//     cluster: 'mt1',
//     encrypted: true
// });

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.Laravel.echoServerURL,
    namespace: 'Cristian.Events'
});

console.log(window.location.hostname)
