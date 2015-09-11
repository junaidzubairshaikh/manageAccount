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
		vm.testFunction = testFunction;
    vm.userAccountInfo={"AccountId":"","AccountTitle":"","AccountNumber":"","Balance":""};
    vm.userAccountInfoMaster=angular.copy(vm.userAccountInfo);


    vm.addAccount=function(){
      //  alert("account added");
      //var userId=$location.search().userId;

      if(vm.userAccountInfo.AccountTitle!='' && vm.userAccountInfo.AccountNumber!='' && vm.userAccountInfo.Balance!=''){

        account.AddAccount(userId,vm.userAccountInfo);
        vm.reset();
      }
      $('.modal.in').modal('hide');
    }

    vm.reset=function(){
      vm.userAccountInfo=angular.copy(vm.userAccountInfoMaster);

    }
    function testFunction(num){
			//console.info('This is a test function');
		}
	}

}());
