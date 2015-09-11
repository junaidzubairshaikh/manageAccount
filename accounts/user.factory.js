/**
 * @ngdoc service
 * @name app.accounts.user
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .factory('user', user);

  /* @ngInject */
  function user(userData) {

    return {
      GetUsers: GetUsers,
      Add: AddUser
    };


    function GetUsers(callback) {
      if (callback) {
        callback(userData.GetUsers());
      }
    }

    function AddUser(userInfo) {
      var users = userData.GetUsers();

      var id = users.length + 1;
      var user = {
        'id': id,
        'name': userInfo.userName,
        'Address': userInfo.userAddress,
        'Account': [],
        'Transactions': []
      };
      users.push(user);

      userData.SetUsers(users);
    }

  }

}());
