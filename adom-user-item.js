(function () {
  'use strict';
  Polymer({

    is: 'adom-user-item',

    properties: {
      name: {
        type: String
      },
      lastName: {
        type: String,
      },
      email: {
        type: String
      },
      urlImage: {
        type: String
      },
      userRole: {
        type: String
      },
      showIconLeft: {
        type: Boolean,
        value: false
      },
      iconLeft: {
        type: String,
        value: String
      }
    },
    _userClick: function() {
      this.fire('adom-user-item-click-user');
    },
    _computedUserRole: function(userRole) {
      if(userRole==='administrator') {
        return 'icon'
      }
    }

  });
}());
