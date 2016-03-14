window.onload = function(){
var currentQuestion = 1;
var questionCount; 

var questionCountRequest = new XMLHttpRequest();
questionCountRequest.open("GET", "http://localhost:9292/questions");

questionCountRequest.addEventListener("load", function(event) {
  var questionCountResponse = event.target;
  questionCount = questionCountResponse.responseText;
 });
  questionCountRequest.send();
  console.log(questionCount)

var allQuestions = document.getElementById('questions'); //master div for most in-game elements
var startButton = document.getElementById('startButton'); 
var nextButton = document.getElementById('nextButton'); 
var restartButton = document.getElementById('restartButton');
var correctNotification = document.getElementById('correct');
var wrongtNotification = document.getElementById('wrong');
var questions = document.getElementById('question');
var scoreCountNotice = document.getElementById('scoreCountNotice'); //variable storing div that will be used to display number of questions answered correctly, number of remaining games, and eventually total number of games played
var gameEnded = document.getElementById('gameEnded'); //variable storing game over notifcation
var totalQuestions = questions.length; 



function getQuestions() {
  var questionRequest = new XMLHttpRequest();
  questionRequest.open("GET", "http://localhost:9292/questions/" + currentQuestion);
  questionRequest.addEventListener("load", function(event) {
    var the_request = event.target;
    alert(the_request.responseText);
    startButton.style.display = "none";
      // responseText is a built-in method for request objects.
  });

  questionRequest.send();
}

startButton.addEventListener("click", function(event) {
  getQuestions()
});
  

//   //event listener that is triggered when next button is clicked
//   nextButton.addEventListener("click", function() {
//     ++currentQuestion // increases value of currentQuestion to get now question

//     //triggers when user has interacted with all questions in the collection
//     if (currentQuestion >= totalQuestions) {
//       allQuestions.style.display = "none"; //hides all items in parent question div
//       scoreCountNotice.innerHTML = `WINS: ${scoreCount} OUT OF TOTAL GAMES: ${totalQuestions}.` //updates scoreCountNotice with end-game stats.
//       gameEnded.style.display = "block"; // displays end game message
//       restartButton.style.display = "block"; //dispalys restart button that will refresh page so that user can play again.

//     //triggers if user has not interacted with all questions
//     } else {
//         console.log('next');
//         //updates scoreCountNotice with current game stat information
//         scoreCountNotice.innerHTML = `WINS: ${scoreCount} - REMAINING QUESTIONS: ${totalQuestions - currentQuestion}`
//         nextButton.style.display = "none"; // hides next button
//         quizLoop() // calls quiz loop function
//     }
//   });

//   //event triggers when restartButton is clicked. Only visible when user is out of questions. WIll reload the page so that user can play again.
//   restartButton.addEventListener("click", function() {
//     location.reload();
//   });
};

