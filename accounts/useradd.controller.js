/**
 * @ngdoc controller
 * @name app.accounts.controller:UserAdd
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .controller('UserAdd', UserAdd);

  /* @ngInject */
  function UserAdd(user) {
    var vm = this;
    vm.userInfo = {"userName": "", "userAddress": ""};
    vm.userInfoMaster = angular.copy(vm.userInfo);

    vm.addUser = function () {

      if (vm.userInfo.userName != '' && vm.userInfo.userAddress != '') {
        user.Add(vm.userInfo);
        vm.reset();
      }
      $('.modal.in').modal('hide');
    }

    vm.reset = function () {
      vm.userInfo = angular.copy(vm.userInfoMaster);

    }
  }

}());
