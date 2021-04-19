$(document).ready(function(){

  $('.icons').click(function () {
      $(this).children('.toggle').slideToggle(400);
      $(this).children('.show').toggle();
    });


      $('.card').hover(function(event){
        $(".card").hover(function () {
          $(this).children(".card-1").fadeToggle('fast', "linear");
        });
        });


        $("#submit").click(function(){
   submit();

   event.preventDefault();
});
});


function submit(){
var name=document.getElementById("name").value;
var messages = document.getElementById("message").value;
if(name,messages == ''){
 alert("Make sure all field are filled")
}

else{
alert("Hello"+","+name+'!'+"We have received your message.Thank you for contacting us.We'll get in touch");
}
};