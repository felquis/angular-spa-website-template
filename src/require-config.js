var require = {
  baseUrl: '/build/js',
  paths: {
	  '$routeProvider': '../../lib/angular-route/angular-route',
	  'angular': '../../lib/angular/angular'
  },
  shim: {
  	angular: {
  		exports: 'angular'
  	},
  	'$routeProvider': {
  		deps: ['angular']
  	}
  }
}
