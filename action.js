// define the main variables

var pics = document.querySelectorAll('.image-box'),
    lightbox = document.getElementById('lightbox'),
    close = document.getElementById('close'),
    overlay = document.getElementById('overlay');

// open lightbox function

pics.forEach(function(el){
  el.onclick = function(){
    lightbox.classList.add('show-it');
    lightbox.children[1].setAttribute('src', el.children[0].getAttribute('src'));
  }
});

// close lightbox function

function closeLightbox (){
  lightbox.classList.remove('show-it');
}

close.onclick = closeLightbox;
overlay.onclick = closeLightbox;

// create the thumbnails images in lightbox

for(var i = 0; i < pics.length; i++){
  var thumb = document.createElement('img');
  thumb.className = 'thumbnail';
  document.getElementById('thumb').appendChild(thumb);
  thumb.setAttribute('src', pics[i].children[0].getAttribute('src'));
}

// navigate inside the lightbox with thumbnails

var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(el){
  el.onclick = function(){
    lightbox.children[1].setAttribute('src', el.getAttribute('src'));
  }
});
