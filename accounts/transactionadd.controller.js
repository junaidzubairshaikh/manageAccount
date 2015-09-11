/**
 * @ngdoc controller
 * @name app.accounts.controller:TransactionAdd
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('TransactionAdd', TransactionAdd);

  /* @ngInject */
	function TransactionAdd(transaction,$stateParams,$rootScope){
		var vm = this;

		vm.testFunction = testFunction;

    vm.userId=$stateParams.userId;
    vm.accountId=$stateParams.accountId;
    vm.name="Transaction";
    vm.transaction={"TransactionAmount":''};

    vm.transactionMaster=angular.copy(vm.transaction);

    vm.addTransaction=function(){

      if(vm.transaction.TransactionAmount!='' && vm.userId!=null){
        transaction.AddTransaction( vm.userId,vm.accountId,vm.transaction);
        vm.reset();
      }
      $('.modal.in').modal('hide');
    }

    vm.reset=function(){
      vm.transaction=angular.copy(vm.transactionMaster);
      //vm.loadUserAccountTransactions();
      $rootScope.$broadcast();
    }
    function testFunction(num){
			//console.info('This is a test function');
		}
	}

}());
