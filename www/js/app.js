// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)


// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
	var b6 = new bit6.Client({
    apikey: 'a135-c1Cq1vlhz2fz'
});
	alert(window.b6);
	
var ident = 'usr:' + 'kumarvadde';
b6.login({identity: ident, password: 'secret'}, function(err) {
  if (err) {
    alert('login error', err);
  }
  else {
    alert('login successful');
  }
});

  });
})
