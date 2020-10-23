$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

    const frontEnd = $("select#quest1").val();
    const start = $("select#quest2").val();
    const solve = $("select#quest3").val();

    if (frontEnd==="yes" && start==="yes" && solve ==="yes"){
      $("#python").show();

    } else if (frontEnd==="yes" && start==="yes" && solve ==="no"){
      $("#ruby").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="no"){
      $("#javascript").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="yes"){
      $("#javascript").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="no"){
      $("#javascript").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="no"){
      $("#javascript").show();
    } else if (frontEnd==="yes" && start==="no" && solve ==="no"){
      $("#javascript").show();
    } 
    
    

    

    


  });
});


