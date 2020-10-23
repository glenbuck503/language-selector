$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();

const quest1String = $("select#quest1").val();
const quest3 = parseInt(quest3String);
const quest2String = $("select#quest2").val();
const quest3 = parseInt(quest3String);
const quest3String = $("select#quest3").val();
const quest3 = parseInt(quest3String);
const quest4String = $("select#quest4").val();
const quest4 = parseInt(quest4String);
const quest5String = $("select#quest5").val();
const quest5 = parseInt(quest5String);

const result = quest5 + quest4;

if (result >= 7) {
  alert("dfsd");
} else if( result < 7){
  alert("dsfsd");
}


  });
});


