(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: UserAdd', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.accounts'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('UserAdd', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
