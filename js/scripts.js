$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    debugger;
    // get user input for each question
    var morning = $("input:radio[name=question1]:checked").val();
    var catDog = $("input:radio[name=question2]:checked").val();
    var popularLang = $("input:radio[name=question3]:checked").val();
    var memory = $("input:radio[name=question4]:checked").val();
    var epicodus = $("input:radio[name=question5]:checked").val();
    var gameDev = $("input:radio[name=question6]:checked").val();
    var threads = $("input:radio[name=question7]:checked").val();

  });
});
