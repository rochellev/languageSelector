

$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();

    // get user input for each question
    var name = $("input#name").val();
    var morning = $("input:radio[name=question1]:checked").val();
    var catDog = $("input:radio[name=question2]:checked").val();
    var popularLang = $("input:radio[name=question3]:checked").val();
    var memory = $("input:radio[name=question4]:checked").val();
    var epicodus = $("input:radio[name=question5]:checked").val();
    var gameDev = $("input:radio[name=question6]:checked").val();
    var threads = $("input:radio[name=question7]:checked").val();

    if(name){
      $(".nameOutput").text(name);
    }else {
      $(".nameOutput").text("Friend");
    }
     
    if(popularLang === "no" && memory === "no"){
      $("#javascript").hide();
      $("#java").hide();
      $("#cplusplus").hide();
      $("#python").show();
    }else if(memory === "yes" && gameDev === "yes"){
      $("#javascript").hide();
      $("#java").hide();
      $("#cplusplus").show();
      $("#python").hide();
    }else if(memory === "yes" && threads === "yes"){
      $("#javascript").hide();
      $("#java").show();
      $("#cplusplus").hide();
      $("#python").hide();
    }else if(memory === "no") {
      $("#javascript").show();
      $("#java").hide();
      $("#cplusplus").hide();
      $("#python").hide();
    }else{
      $("#javascript").show();
      $("#java").hide();
      $("#cplusplus").hide();
      $("#python").hide();
    }

    if(catDog === "cat"){
      $("#doglover").hide();
      $("#catlover").show();
    }else if(catDog === "dog"){
      $("#catlover").hide();
      $("#doglover").show();
    }else{
      $("#catlover").show();
      $("#doglover").show();
    }
    window.scrollBy(0,300);

    });
});
