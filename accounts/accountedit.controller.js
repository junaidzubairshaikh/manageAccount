/**
 * @ngdoc controller
 * @name app.accounts.controller:AccountEdit
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('AccountEdit', AccountEdit);

  /* @ngInject */
	function AccountEdit(account,$stateParams){
		var vm = this;

		vm.testFunction = testFunction;
    vm.userId=$stateParams.userId;
    vm.accountId=$stateParams.accountId;

    vm.editUserAccount = function () {
      //var vm.userId = $location.search().vm.userId;
      vm.editPanel = true;
      account.EditAccount(vm.userId, vm.accountId, function (response) {
        vm.accountInfo = response;
      })
    }

    vm.editUserAccount()
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
