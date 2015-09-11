(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: transaction', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.accounts'));

    var transaction;

    beforeEach(inject(function($injector){

      transaction = $injector.get('transaction');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
