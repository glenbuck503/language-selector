$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

    const frontEnd = $("select#quest1").val();
    const start = $("select#quest2").val();
    const solve = $("select#quest3").val();

    if (frontEnd==="yes" && start==="yes" && solve ==="yes"){
      $("#python").show();
      
    }

    

    


  });
});


