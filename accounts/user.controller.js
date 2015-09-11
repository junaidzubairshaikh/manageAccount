/**
 * @ngdoc controller
 * @name app.accounts.controller:User
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('User', User);

  /* @ngInject */
	function User(user){
		var vm = this;

    vm.list=[];

    vm.loadUser = function () {
      user.GetUsers(function (response) {
        vm.list = response;
      })
    }

    vm.loadUser();
	}

}());
