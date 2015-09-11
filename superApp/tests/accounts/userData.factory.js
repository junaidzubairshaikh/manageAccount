(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: userData', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.accounts'));

    var userData;

    beforeEach(inject(function($injector){

      userData = $injector.get('userData');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
