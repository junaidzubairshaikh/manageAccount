/**
 * @ngdoc service
 * @name app.accounts.account
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .factory('account', account);

  /* @ngInject */
  function account(userData) {
    return {

      ViewAccount: ViewUserAccount,
      AddAccount: AddUserAccount,
      DeleteAccount: DeleteUserAccount,
      EditAccount: EditUserAccount,
      ViewLastTransaction: ViewLastTransaction
    };

    function ViewUserAccount(id, callback) {
      //var url = 'http://localhost:63342/Task4Accounts/data/data.json';

      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == id;
      });
      if (user) {
        if (callback) {
          callback(user.Account);
        }
      }
    }

    function ViewLastTransaction(userId, callback) {

      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      if (user) {
        var lastTransaction = _.last(user.Transactions);
        if (callback) {
          callback(lastTransaction);
        }
      }
    }

    function AddUserAccount(userId, accountInfo) {
      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      var id = user.Account.length + 1;
      var account = {
        'AccountId': id,
        'AccountTitle': accountInfo.AccountTitle,
        'AccountNumber': accountInfo.AccountNumber,
        'Balance': accountInfo.Balance
      };

      var userIndex = _.findIndex(users, function (x) {
          return x.id == userId;
        }
      );
      if (userIndex > -1) {
        users[userIndex].Account.push(account);

      }
      userData.SetUsers(users);
    }

    function DeleteUserAccount(userId, accountId) {
      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      var accountLeft = _.remove(user.Account, function (x) {
        return x.AccountId == accountId;
      });
      userData.SetUsers(users);
    }

    function EditUserAccount(userId, accountId, callback) {
      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      var accountinfo = _.find(user.Account, function (x) {
        return x.AccountId == accountId;
      });
      if (callback) {
        callback(accountinfo);
      }
    }

  }

}());
