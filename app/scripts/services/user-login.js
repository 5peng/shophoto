'use strict';

/**
 * @ngdoc service
 * @name shophotoApp.userLogin
 * @description
 * # userLogin
 * Service in the shophotoApp.
 */
angular.module('shophotoApp')
  .service('UserLogin', function UserLogin(ipCookie) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      check: function() {
        if (AV.User.current()) {
          console.log('Welcome!');
        } else if (this.checkCookie) {
          this.login(this.getUsernameFromCookie());
        } else {
          this.register();
        }
      },

      register: function() {
        var username = this.makeUuid();
        console.log(username);

        var user = new AV.User();
        user.set('username', username);
        user.set('password', username);

        user.signUp(null, {
          success: function(result) {
            console.log(result);
            this.storeCookie(username);
          },
          error: function(result, error) {
            console.log(['Register', result, error]);
          }
        });
      },

      login: function(username) {

        var that = this;

        AV.User.logIn(username, username, {
          success: function(result) {
            console.log(result);
            this.storeCookie(username);
          },
          error: function(result, error) {
            console.log(['Login', result, error]);
            that.register();
          }
        });
      },

      getUsernameFromCookie: function() {
        return ipCookie('useruuid');
      },

      checkCookie: function() {
        return ipCookie('useruuid') ? true : false;
      },

      storeCookie: function(username) {
        ipCookie('useruuid', username, { expires: 3650 });
      },

      makeUuid: function() {
        var guid = (function() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                       .toString(16)
                       .substring(1);
          }
          return function() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                   s4() + '-' + s4() + s4() + s4();
          };
        })();

        return guid();
      }
    };
  });
