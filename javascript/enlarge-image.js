


    function somefunct (el) {
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = el;    
    var modalImg = document.getElementById("images");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = el.src;
    captionText.innerHTML = el.alt;
 /* img.onclick = function(){

    }
     */
     
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
}


