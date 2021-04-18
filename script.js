$(document).ready(function(){
    $(".design1").click(function() {
      $(".design1").toggle();
      $(".details1").toggle();
    });
    $(".details1").click(function() {
      $(".details1").toggle();
      $(".design1").toggle();
    });
    $(".design2").click(function() {
      $(".design2").toggle();
      $(".details2").toggle();
    });
    $(".details2").click(function() {
      $(".details2").toggle();
      $(".design2").toggle();
    });
    $(".design3").click(function() {
      $(".design3").toggle();
      $(".details3").toggle();
    });
    $(".details3").click(function() {
      $(".details3").toggle();
      $(".design3").toggle();
    });
    
    // HOVERING IMAGES
  
     $('.port_desc').hover(function(){
      $('.porttext',this).slideToggle('slow');
   }, function(){
      $('.porttext',this).slideToggle('slow');
   });
  
    // FORM SUBMISSION EFFECT
    $("#submission").submit(function(event){
      var data_1 = $("input:first").val();
      var data_2 = $("input#mail").val();
      if(data_1 && data_2 != ""  ){
       alert("Thank you " + data_1 + " Your message has been received!");
        $(".message").removeClass("error");
        $(".message").addClass("success");
      }else{
       alert("Error!!! Please fill in all the details correctly");
        $(".message").addClass("error");
      }
      event.preventDefault();
    });
  
    
  });