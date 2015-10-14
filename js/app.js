console.log("Hello world!")



function getResult(){
  var url = "https://poller-kristian.herokuapp.com/result"
  $.getJSON(url, {question: 'whatisyourquest'}, function(json, textStatus) {
    console.log('Result', json);
    new Chartkick.ColumnChart('chartstuffs', json)
  });

}

function submitAnswer(element){
  var url = "https://poller-kristian.herokuapp.com/poll"
  var $el = $(element)
  var val = $el.attr('data-value')
  $.getJSON(url, {question: 'whatisyourquest', value: val}, function(json, textStatus) {
    console.log('Result', json);
  });
}
