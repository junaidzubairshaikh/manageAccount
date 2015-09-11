/**
 * @ngdoc service
 * @name app.accounts.user
 * @description < description placeholder >
 */

(function() {

  'use strict';

  angular
    .module('app.accounts')
    .factory('user', user);

  /* @ngInject */
  function user(userData) {

    return {
      testFunction: testFunction,
      GetUsers: GetUsers,
      Add: AddUser,
      Delete: DeleteUser,
      ViewAccounts: ViewAccounts

    };


    function GetUsers(callback) {
      //var url = 'http://localhost:63342/Task4Accounts/data/data.json';

      //var users = userData.GetUsers();
      callback(userData.GetUsers());

      /* if(users.length>2){
       callback(userData.GetUsers());
       }
       else{
       $http.get(url).then(function (response) {
       if(callback) {
       userData.Set(response.data);
       callback(response.data);
       }
       })
       }*/
    }

    function AddUser(userInfo) {
      //var url = 'http://localhost:63342/Task4Accounts/data/data.json';

      var users = userData.GetUsers();

      var id = users.length + 1;
      var user = {
        'id': id,
        'name': userInfo.userName,
        'Address': userInfo.userAddress,
        'Account': [],
        'Transactions': []
      };
      users.push(user);

      userData.SetUsers(users);
      //use callback for the displaying message
      //if(callback) {
      //      callback(data);
      // }
    }

    function DeleteUser() {

    }

    function ViewAccounts(userId) {

    }

    function testFunction(id) {
      //console.info('This is a test function');
    }
  }

}());
