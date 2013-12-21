/**
 * Created by harjeesi on 12/19/13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login/login.html'
], function ($, _, Backbone, loginTemplate) {

    var Home = Backbone.View.extend({
        el: $("body"),

        render: function () {

            this.$el.html(loginTemplate);
        }

    });

    return Login;

});