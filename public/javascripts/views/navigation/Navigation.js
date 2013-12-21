/**
 * Created by harjeesi on 12/19/13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/navigation.html'
], function ($, _, Backbone, navigationTemplate) {

    var Navigation = Backbone.View.extend({
        el: $("#main"),

        render: function () {

            this.$el.html(navigationTemplate);
        }

    });

    return Navigation;

});