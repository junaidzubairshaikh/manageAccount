/**
 * @ngdoc controller
 * @name app.accounts.controller:AccountAdd
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('AccountAdd', AccountAdd);

  /* @ngInject */
	function AccountAdd(account,$stateParams){
		var vm = this;

    var userId=$stateParams.userId;
    vm.userAccountInfo={"AccountId":"","AccountTitle":"","AccountNumber":"","Balance":""};
    vm.userAccountInfoMaster=angular.copy(vm.userAccountInfo);


    vm.addAccount=function(){

      if(vm.userAccountInfo.AccountTitle!='' && vm.userAccountInfo.AccountNumber!='' && vm.userAccountInfo.Balance!=''){

        account.AddAccount(userId,vm.userAccountInfo);
        vm.reset();
      }
      $('.modal.in').modal('hide');
    }

    vm.reset=function(){
      vm.userAccountInfo=angular.copy(vm.userAccountInfoMaster);

    }

	}

}());
