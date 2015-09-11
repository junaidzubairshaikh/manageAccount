/**
 * @ngdoc controller
 * @name app.accounts.controller:Account
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .controller('Account', Account);

  /* @ngInject */
  function Account(account, $stateParams) {
    var vm = this;
    vm.userId = $stateParams.userId;
    vm.testFunction = testFunction;

    vm.accounts = [];

    vm.lastTransaction = {};
    vm.accountInfo = {};
    vm.editPanel = false;
    vm.accountName = "Account view";


    var loadUserAccounts = function () {

      if (vm.userId) {
        account.ViewAccount(vm.userId, function (response) {
          vm.accounts = response;
        })
      }
    }

    vm.viewUsrAccTransactions = function (accountId) {
      //var vm.userId=$location.search().vm.userId;
      if (accountId) {
        console.log($location.path());
        $location.path("/users/" + vm.userId + "/Accounts/" + accountId + "/Transactions");
      }
    }

    vm.viewLastTransaction = function () {
      //var vm.userId=$location.search().vm.userId;
      account.ViewLastTransaction(vm.userId, function (response) {
        if (response) {
          //var currentTransaction=  $filter('orderBy')(response,'-TransactionDate');
          alert("Last transaction made on:\n Transaction Date: " + response.TransactionDate + "\n Transaction Amount: " + response.TransactionAmount);
        }
      })
    }

    vm.deleteUserAccount = function (accountId) {
      //var vm.userId=$location.search().vm.userId;
      if (confirm("Do you want to delete this account.?"))
        account.DeleteAccount(vm.userId, accountId);
    }

    vm.editUserAccount = function (accountId) {
      //var vm.userId = $location.search().vm.userId;
      vm.editPanel = true;
      account.EditAccount(vm.userId, accountId, function (response) {
        vm.accountInfo = response;
      })
    }

    vm.updateUserAccount = function (accountId, accountInfo) {
      //var vm.userId=$location.search().vm.userId;
    }

    vm.cancelEdit = function () {
      vm.editPanel = false;
    }

    vm.back = function () {
      //$location.path('/')
    }
    loadUserAccounts();
    function testFunction(num) {
      //console.info('This is a test function');
    }
  }

}());
