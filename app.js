console.log("Hello world!")



function getResult(){
  var url = "https://poller-kristian.herokuapp.com/result"
  $.getJSON(url, {question: 'test2'}, function(json, textStatus) {
    console.log('Result', json);
  });
}

function submitAnswer(element){
  var url = "https://poller-kristian.herokuapp.com/poll"
  $.getJSON(url, {question: 'test2', value: 'tjena tjohopp'}, function(json, textStatus) {
    console.log('Result', json);
  });
}
