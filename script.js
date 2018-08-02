window.onload  = function() {

    document.getElementById("theImage").onclick = function(){
      changeImage();
    }

  var i = 0;

  function changeImage(){
      var list = ["cats.jpg", "obamas.jpg", "lebron james.jpg", "chocolate.jpg"];
      i++;
      if(i > 3){
        i = 0;
      }
      var newImg = list[i];
      document.getElementById("theImage").src = newImg;
    }
}
