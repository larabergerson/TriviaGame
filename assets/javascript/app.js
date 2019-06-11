// event listeners set timer button start:
$(document).ready(function() {
  // $("<button>").on("click");

  // start (thirtySeconds, 100 * 2)
  // function thirtySecond ()
  //   $("#start")(thirtySeconds, 1000 * 2);

  //   function thirtySeconds() {
  //     $(".timer").text(timer);
  //     console.log(thirtySeconds);
  //   }
  var correctAnswers = 0;
  var incorrectAnswers = 0;

  // countdown timer that initiates when user clicks start and resets when all questions asked or time runsout.
  var timer = 30;
  var intervalID;
  $(".start").on("click", start);
  function start() {
    intervalID = setInterval(decrement, 1000);
  }
  function decrement() {
    timer--;
    $(".timer").html("<h2>Time Remaining:</h2>" + "<h2>" + timer + "</h2>");
    if (timer === 0) {
      stop();
      alert("Time's up!");
    }
  }
  function stop() {
    clearInterval(intervalID);
  }
  start();

  // Array for trivia questions/answers:
  var trivia = [
    {
      question: "Which character 'Let it go' in the movie Frozen?",
      choices: ["Anna", "Elsa", "Olaf", "Sven"],
      answer: "Elsa"
    },
    {
      question:
        "In the movie 'Sing,' what song is featured in the Gorilla's final performance?",
      choices: [
        "Wannabe",
        "Lucky",
        "I'm still standing",
        "Tearin' Up My Heart"
      ],
      answer: "I'm Still Standing"
    },
    {
      question: "The main character in 'How to Train your Dragon' is named? ",
      choices: ["Teacup", "Sam", "FireStopper", "Hiccup"],
      answer: "Hiccup"
    },
    {
      question: "Moana goes on an epic adventure for what purpose? ",
      choices: [
        "To find herself.",
        "Just for fun.",
        "To find a magical potion that generates power.",
        "To restore the heart of Tafiki."
      ],
      answer: "To restore the heart of Tafiki."
    },
    {
      question: "In the movie 'Inside Out' Riley relocates to what city? ",
      choices: ["San Francisco, New York, Dallas, Fargo"],
      answer: "San Francisco"
    }
  ];
});
