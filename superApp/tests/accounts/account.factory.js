(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: account', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.accounts'));

    var account;

    beforeEach(inject(function($injector){

      account = $injector.get('account');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
