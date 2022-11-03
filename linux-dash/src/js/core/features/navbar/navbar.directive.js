angular.module('linuxDash').directive('navBar', ['$location', function($location) {
  return {
    template: '\
      \
      <span class="title">Linux Dash</span>\
      \
      <ul> \
        <li ng-class="{active: isActive(navItem) }" ng-repeat="navItem in items"> \
          <a href="#/{{navItem}}" ng-bind="getNavItemName(navItem)"></a> \
        </li> \
      </ul> \
      <span class="right-content">\
        Resources:\
          <a target="_blank" href="https://github.com/afaqurk/linux-dash"><i class="fa-brands fa-github"></i></a> | \
          <a target="_blank" href="#"><i class="fa-solid fa-comments"></i></a> | \
          <a target="_blank" href="https://github.com/afaqurk/linux-dash/wiki"><i class="fa-brands fa-wikipedia-w"></i></a> | \
          <a target="_blank" href="https://coindataflow.com/de/aktie/UEC"><img src="./src/img/cdf.svg" alt="uranium energy corp aktie" class="cdf"></a> \
      </span>\
    ',
    link: function(scope) {
      scope.items = [
        'system-status',
        'basic-info',
        'network',
        'accounts',
        'apps'
      ]

      scope.getNavItemName = function(url) {
        return url.replace('-', ' ')
      }

      scope.isActive = function(route) {
        return '/' + route === $location.path()
      }
    }
  }
}])
