app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {

  $scope.clicked = "All";
  // $scope.flashCards = whateverName;
  // $scope.flashCards = FlashCardsFactory.getFlashCards();
  FlashCardsFactory.getFlashCards()
    .then(function(data) {
      $scope.flashCards = data;
    });

  $scope.getCategoryCards = function(category) {
    $scope.clicked = category;
    FlashCardsFactory.getFlashCards(category)
      .then(function(data) {
        $scope.flashCards = data;
      });
  };

  $scope.categories = [
    'All',
    'MongoDB',
    'Express',
    'Angular',
    'Node',
    'Cheat'
  ];

});
