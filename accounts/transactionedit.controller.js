/**
 * @ngdoc controller
 * @name app.accounts.controller:TransactionEdit
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('TransactionEdit', TransactionEdit);

  /* @ngInject */
	function TransactionEdit(transaction,$stateParams){
		var vm = this;

    vm.userId=$stateParams.userId;
    vm.accountId=$stateParams.accountId;
    vm.transactionId=$stateParams.transactionId;

    vm.editUserTransaction=function(){
      vm.editPanel=true;
      transaction.EditTransaction(vm.userId,vm.accountId,vm.transactionId,function(response){
        vm.transactionInfo=response;
      })
    }

    vm.editUserTransaction();

	}

}());
