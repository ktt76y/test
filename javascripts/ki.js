



/*$(document).ready(function(){
 
  $(document).ready(function() {
    $('#button').click( function () {
      let rez = $('<div class="popup">HELLOW</div>');
      $('#main').append(rez);
      setTimeout( function() { rez.remove(); }, 500);
    });
  });
});

document.addEventListener("DOMContentLoaded", function(){
       let followCursor =() => {
        let el =document.getElementById("follow-cursor")

        window.addEventListener("mousemove", e => {
          let target = e.target;
          if(!target) return;

          el.style.left = e.pageX + "px";
          el.style.top = e.pageY + "px";
        })
       }

});

$(document).mousemove(function(e) {
  let body_size_x = $( window ).width();
  let body_size_y = $( window ).height();
  let half_body_size_x = parseInt(body_size_x / 2);
  let half_body_size_y = parseInt(body_size_y / 2);
  let left_dir = e.pageX;
  let top_dir = e.pageY;
  let eq1 = left_dir < half_body_size_x;
  let eq2 = left_dir > half_body_size_x;
  let eq3 = top_dir < half_body_size_y;
  let eq4 = top_dir > half_body_size_y;

  $('#body').html(half_body_size_x + ' + ' + half_body_size_y);
  $('#top').html(top_dir);
  $('#left').html(left_dir);
   if (eq1 && eq3) {
     $('#box').css('background', 'red');
   } else if (eq1 && eq4) {
     $('#box').css('background', 'orange');
   } else if (eq2 && eq3) {
     $('#box').css('background', 'green');
   } else if (eq2 && eq4) {
     $('#box').css('background', 'blue');
   }

});

*/




/*function changeImage() {
  let imge = document.getElementsByClassName('block_1_3')
  if (imge.src.match('./img/block_1_3.png')){
    imge.src = './img/block_1_3@.png'
  } else {
    imge.src = './img/block_1_3.png'
  }
    
}


//ГЛАЗА

document.addEventListener("DOMContentLoaded", function() {
  var draggableElement = document.getElementById("draggable");

  var isDragging = false;
  var offsetX, offsetY;

  draggableElement.addEventListener("mousedown", function(event) {
    isDragging = true;

    offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggableElement.getBoundingClientRect().top;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(event) {
    if (isDragging) {
      var x = event.clientX - offsetX;
      var y = event.clientY - offsetY;

      draggableElement.style.left = x + "px";
      draggableElement.style.top = y + "px";
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
});*/

document.onMouseMove = function(event){
  let x = event.x -50;
  let y = event.y - 50;
  console.log(x +' '+ y);
  document.querySelector('.y-1').style.transform = 'rotate(45deg)';
}