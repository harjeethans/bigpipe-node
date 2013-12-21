
require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/backbone/underscore',
        backbone: 'libs/backbone/backbone',
        bootstrap: 'libs/bootstrap/js/bootstrap',
        templates: '../templates'
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['bootstrap', 'underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
    // Load our app module and pass it to our definition function
    'app',

], function (App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();

});
