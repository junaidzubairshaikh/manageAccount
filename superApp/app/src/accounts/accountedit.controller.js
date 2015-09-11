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
	function AccountEdit(account,$state,$stateParams){
		var vm = this;

    vm.userId=$stateParams.userId;
    vm.accountId=$stateParams.accountId;

    vm.editUserAccount = function () {
      //var vm.userId = $location.search().vm.userId;
      vm.editPanel = true;
      account.EditAccount(vm.userId, vm.accountId, function (response) {
        vm.accountInfo = response;
      })
    }

    vm.updateUserAccount=function(accountInfo){
      account.UpdateAccount(vm.userId,vm.accountId,accountInfo);
      $state.go('Account',{userId:vm.accountId});
    }

    vm.editUserAccount()

	}

}());
