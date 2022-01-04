$(document).ready(function () {

    //-------tootips de redes sociales-----
  $('[data-toggle="tooltip"]').tooltip();

  

  //---smooth scrolling desde navbar------

  $("a").click(function (event) {
    
    if (this.hash !== "") {
      
      event.preventDefault();
      
      console.log("funciona");
      var gato = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(gato).offset().top,
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    } 
  });
});
