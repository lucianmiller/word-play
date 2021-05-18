$(document).ready(function() {
  $("form#form").submit(function(event) {
    const userSentence = $("#sentence").val();
    const splitSentence = userSentence.split(" ");
    const bigWordsArray = [];
    splitSentence.forEach(function (word){
      if(word.length >= 3) {
        bigWordsArray.push(word);
      };
    });
    const reverseArray = bigWordsArray.reverse();
    const joinArray = reverseArray.join(' ');

    $("#output").text(joinArray);

    event.preventDefault();
  });
});