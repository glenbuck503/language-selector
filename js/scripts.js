$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

    const frontEnd = $("select#quest1").val();
    const start = $("select#quest2").val();
    const solve = $("select#quest3").val();
    const work = $("select#quest4").val();
    const ready = $("select#quest5").val();

    if (frontEnd === "yes" & start==="yes" && solve==="yes" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="no" && solve==="no" && work==="no" && ready==="no"){
      $("#python").show();
     }else if (frontEnd === "yes" & start==="yes" && solve==="yes" && work==="yes" && ready==="no"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="yes" && solve==="yes" && work==="no" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="yes" && solve==="no" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="no" && solve==="yes" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="yes" && solve==="yes" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="no" && solve==="yes" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="yes" && solve==="no" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="yes" && solve==="yes" && work==="no" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "no" & start==="yes" && solve==="yes" && work==="yes" && ready==="no"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="no" && solve==="no" && work==="yes" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="no" && solve==="yes" && work==="no" && ready==="yes"){
      $("#python").show();
    } else if (frontEnd === "yes" & start==="no" && solve==="yes" && work==="yes" && ready==="no"){
      $("#python").show();
    }else if (frontEnd === "yes" & start==="yes" && solve==="no" && work==="no" && ready==="yes"){
      $("#python").show();
    }else if (frontEnd === "yes" & start==="yes" && solve==="no" && work==="yes" && ready==="no"){
      $("#python").show();
    }else if (frontEnd === "yes" & start==="yes" && solve==="yes" && work==="no" && ready==="no"){
      $("#python").show();
    }else if (frontEnd === "no" & start==="no" && solve==="no" && work==="yes" && ready==="yes"){
      $("#python").show();
    }
    


    
    


  });
});




