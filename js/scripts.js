$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

    const frontEnd = $("select#quest1").val();
    const start = $("select#quest2").val();
    const solve = $("select#quest3").val();
    const work = $("select#quest4").val();
    const ready = $("select#quest5").val();

    if (frontEnd==="yes" && start==="yes" && solve ==="yes"){
      $("#python").show();

    } else if (frontEnd==="yes" && start==="yes" && solve ==="no"){
      $("#ruby").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="no"){
      $("#swift").show();
    } else if (frontEnd==="no" && start==="yes" && solve ==="yes"){
      $("#python").show();
    } else if (frontEnd==="no" && start==="yes" && solve ==="no"){
      $("#swift").show();
    } else if (frontEnd==="no" && start==="no" && solve ==="yes"){
      $("#python").show();
    } else if (frontEnd==="no" && start==="no" && solve ==="no"){
      $("#swift").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="yes"){
      $("#javascript").show();
    } else if (frontEnd==="no" && start==="yes" && solve ==="no"){
      $("#python").show();
    } 
    
    


  });
});


