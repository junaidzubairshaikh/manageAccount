/**
 * @ngdoc service
 * @name app.accounts.userData
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .factory('userData', userData);

  /* @ngInject */
  function userData() {
    var userList = [];

    return {
      userList: userList,
      SetUsers: SetUserData,
      GetUsers: GetUsersData
    };


    function SetUserData(users) {
      userList = users;
    }

    function GetUsersData() {
      return userList;
    }
  }

}());
