$(document).ready(function(){

  var flavors = ["Peanutbutter", "Pecan", "Cookies n Cream", "Vanilla", "Coco Beam"];

  flavors.forEach(function(flavor) {
        $("#my-favs").append("<li>" + flavor + "</li>");

  });

});
