$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

    const frontEnd = $("select#quest1").val();
    const start = $("select#quest2").val();

    if (frontEnd === "yes" || start === "twelve") {
      alert("dsfsd");
    }




  });
});


