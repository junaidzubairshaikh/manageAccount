/**
 * @ngdoc controller
 * @name app.accounts.controller:Transaction
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.controller('Transaction', Transaction);

  /* @ngInject */
	function Transaction(transaction,$stateParams){
		var vm = this;

		vm.testFunction = testFunction;

    vm.userId=$stateParams.userId;
    vm.accountId=$stateParams.accountId;
    vm.myTransactions = "Transaction View";
    vm.transactions = [];
    vm.editPanel=false;
    vm.transactionInfo={};

    vm.loadUserAccountTransactions = function () {
      //var userId = $location.search().userId;

      if (vm.userId) {
        transaction.ViewTransactions(vm.userId, vm.accountId, function (response) {
          vm.transactions = response;
        })
      }
    }



    vm.deleteTransactions = function (transactionId) {

      if (confirm("Do you want to delete this transaction.?")) {
        transaction.DeleteTransaction(vm.userId, vm.accountId, transactionId);
      }
    }

    vm.editUserTransaction=function(transactionId){

      vm.editPanel=true;
      transaction.EditTransaction(vm.userId,vm.accountId,transactionId,function(response){
        vm.transactionInfo=response;
      })
    }

    vm.updateUserTransaction=function(accountId,accountInfo){
      //var userId=$location.search().userId;
    }

    vm.cancelEdit=function(){
      vm.editPanel=false;
    }
    vm.back=function(){
      alert("back to account");
    }
    function testFunction(num){
			//console.info('This is a test function');
		}

    vm.loadUserAccountTransactions();
	}

}());
