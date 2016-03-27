angular.module('starter')

  .controller('IntroCtrl', function ($scope, $state) {

    $scope.data = {};
    $scope.data.items = [
      {
        url: "img/unsplash1.jpg",
        title: "Discover",
        icon: "ion-paper-airplane",
        button: "Discover and Explore",
        description: "Find and participate to activities that match your genre & preference"
      },
      {
        url: "img/unsplash2.jpg",
        title: "Discover",
        icon: "ion-paper-airplane",
        button: "Discover and Explore",
        description: "Find and participate to activities that match your genre & preference"
      },
      {
        url: "img/unsplash3.jpg",
        title: "Discover",
        icon: "ion-paper-airplane",
        button: "Discover and Explore",
        description: "Find and participate to activities that match your genre & preference"
      },
      {
        url: "img/unsplash4.jpg",
        title: "Share",
        icon: "ion-images",
        button: "Capture and Share",
        description: "Join the outdoor activities Community, capture and share your favorite experiences"
      },
      {
        url: "img/unsplash5.jpg",
        title: "Enjoy",
        icon: "ion-launcher",
        button: "Join Now",
        description: "What are you waiting for, come and join the Community"
      }
    ]

    $scope.goLogin = function() {
      $state.go('login')
    }


  });
