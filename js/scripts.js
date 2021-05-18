$(document).ready(function() {
  $("form#form").submit(function(event) {
    const userSentence = $("#sentence").val();
    console.log(userSentence);
    const splitSentence = userSentence.split(" ");
    console.log(splitSentence);
    const bigWordsArray = [];
    splitSentence.forEach(function (word){
      if(word.length >= 3) {
        bigWordsArray.push(word);
      };
    });
    console.log(bigWordsArray);
    const reverseArray = bigWordsArray.reverse();
    console.log(reverseArray);
    event.preventDefault();
  });
});