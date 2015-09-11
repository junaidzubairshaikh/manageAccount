/**
 * @ngdoc service
 * @name app.accounts.transaction
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.accounts')
		.factory('transaction', transaction);

  /* @ngInject */
  function transaction(userData){

		return {
			testFunction: testFunction,
      ViewTransactions:ViewUserTransactions,
      AddTransaction:AddUserTransaction,
      DeleteTransaction: DeleteUserTransaction,
      EditTransaction:EditUserTransaction
		};

    function ViewUserTransactions(userId,accountId,callback) {
      //var url = 'http://localhost:63342/Task4Accounts/data/data.json';

      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      if (user) {
        var transactions = _.where(user.Transactions, function (x) {
          return x.AccountId == accountId;
        });
        var accountIndex = _.forEach(user.Transactions, function (x) {
          return x.AccountId == accountId;
        })

          if (callback) {
            callback(_.uniq(user.Transactions,transactions));
          }
      }
    }

    function AddUserTransaction(userId,accountId,transaction) {
      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });

      var id = user.Transactions.length + 1;
      var transaction = {
        'TransactionId': id,
        'AccountId': accountId,
        'TransactionAmount': transaction.TransactionAmount,
        'TransactionDate': new Date().toUTCString()
      };


      var userIndex = _.findIndex(users, function (x) {
          return x.id == userId;
        }
      );
      if (userIndex > -1) {
        users[userIndex].Transactions.push(transaction);
        userData.SetUsers(users);
      }

      userData.SetUsers(users);
    }

    function DeleteUserTransaction(userId,accountId,transactionId){
      var users=userData.GetUsers();
      var user=_.find(users, function (x) {
        return x.id == userId;
      });

      var transactionLeft=_.remove(user.Transactions,function(x){
        return (x.AccountId==accountId && x.TransactionId==transactionId);
      });

      userData.SetUsers(users);
    }

    function EditUserTransaction(userId,accountId,transactionId,callback){
      var users = userData.GetUsers();
      var user = _.find(users, function (x) {
        return x.id == userId;
      });
      var transactionInfo=_.find(user.Transactions,function(x){
        return (x.AccountId==accountId && x.TransactionId==transactionId);
      });
      if(callback) {callback(transactionInfo);}
    }

		function testFunction(id){
			//console.info('This is a test function');
		}
	}

}());
