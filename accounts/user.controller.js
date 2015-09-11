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

		vm.testFunction = testFunction;
   // vm.list=user.userList;
    vm.loadUser = function () {
      user.GetUsers(function (response) {
        vm.list = response;
      })
    }

    vm.viewAccount=function(id){
      $location.path("/users/"+ id+"/Accounts").search({"userId":id});
      console.log($location.path());
    }


    vm.refreshList=function(){
      loadUser();
    }

    vm.loadUser();

    function testFunction(num){
			//console.info('This is a test function');
		}
	}

}());
