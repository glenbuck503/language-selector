$(document).ready(function() {
  $("form#questions").submit(function(event){
    const quest1String = $("select#quest1").val();
    const quest1 = parseInt(quest1String);
    const quest2String = $("select#quest2").val();
    const quest2 = parseInt(quest2String);
    const quest3String = $("select#quest3").val();
    const quest3 = parseInt(quest3String);
    const quest4String = $("select#quest4").val();
    const quest4 = parseInt(quest4String);
    const quest5String = $("select#quest5").val();
    const quest5 = parseInt(quest5String);



  });
});