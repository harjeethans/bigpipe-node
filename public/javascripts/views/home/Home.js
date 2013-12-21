define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/home.html'
], function ($, _, Backbone, homeTemplate) {

    var Home = Backbone.View.extend({
        el: $("#main"),

        render: function () {

            this.$el.html(homeTemplate);
        }

    });

    return Home;

});
