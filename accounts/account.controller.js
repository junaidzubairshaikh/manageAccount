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

    vm.viewLastTransaction = function () {
      account.ViewLastTransaction(vm.userId, function (response) {
        if (response) {
          alert("Last transaction made on:\n Transaction Date: " + response.TransactionDate + "\n Transaction Amount: " + response.TransactionAmount);
        }
      })
    }

    vm.deleteUserAccount = function (accountId) {
      if (confirm("Do you want to delete this account.?"))
        account.DeleteAccount(vm.userId, accountId);
    }


    vm.updateUserAccount = function (accountId, accountInfo) {

    }

    loadUserAccounts();
  }

}());
