/**
 * Created by harjeesi on 12/19/13.
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var Home = Backbone.View.extend({
        el: $("#main"),

        render: function () {

            this.$el.html(homeTemplate);
        }

    });

    return Home;

});