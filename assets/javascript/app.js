// event listeners set timer
$(document).ready(function(){
// trivia questions/answers:
var trivia = [
  {
    question: "Who sings Let it go in the movie Frozen?",
    choices: ["Anna", "Elsa", "Olaf", "Sven"],
    answer: "Elsa"
  },
  {
    question: "In the movie Sing, what song does the Gorilla end with? ",
    choices: ["Wannabe", "Lucky", "I'm still standing", "Tearin' Up My Heart"],
    answer: "I'm Still Standing"
  },
  {
    question: "The main character in How to Train your Dragon is named? ",
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
    question: "In the movie Inside Out Riley relocates to what city? ",
    choices: ["San Francisco, New York, Dallas, Fargo"],
    answer: "San Francisco"
  }
];
}
// function to start the game -- CLICK BEGIN:

// Timer begins countdown:
