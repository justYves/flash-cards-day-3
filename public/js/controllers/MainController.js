app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
  $scope.clicked = "All";

  // $scope.flashCards = whateverName;
  // $scope.flashCards = FlashCardsFactory.getFlashCards();
  FlashCardsFactory.getFlashCards()
    .then(function(data){
      $scope.flashCards = data;
    });

  $scope.answerQuestion = function(answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      if (answer.correct) {
        ++ScoreFactory.correct;
      } else {
        ++ScoreFactory.incorrect;
      }

      flashCard.answeredCorrectly = answer.correct;
    }
  };
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