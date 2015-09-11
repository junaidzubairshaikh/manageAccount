/**
 * @ngdoc overview
 * @name app.accounts
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider) {

    // $urlRouterProvider.otherwise('/');
    //add your state mappings here
    $stateProvider
      .state('User', {
        url: '/users',
        templateUrl: 'src/accounts/user.html',
        controller: 'User as vm'
      }).state('Account', {
        url: '/users/:userId/Account',
        templateUrl: 'src/accounts/account.html',
        controller: 'Account as vm'
      }
    ).state('Transaction', {
        url: '/users/:userId/Account/:accountId',
        templateUrl: 'src/accounts/transaction.html',
        controller: 'Transaction as vm'
      }
    ).state('Account.Edit', {
        url: '/edit/:accountId',
        templateUrl: 'src/accounts/accountEdit.html',
         controller: 'AccountEdit as vm'
      }
    ).state('Transaction.Edit', {
        url: '/edit/:transactionId',
        templateUrl: 'src/accounts/transactionEdit.html',
        controller: 'TransactionEdit as vm'
      }
    );
  }

}());
