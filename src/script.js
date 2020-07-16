let i = 0;

var testimonials = [
  {
    description: "\“ I’ve been interested in coding for a while but never taken the jump, until now.  I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so   excited about the future. \” " ,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    src_image: "./assets/image-tanya.jpg",
    alt_image: "Tanya Sinclair"
  },
  {
    description: "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\” " ,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    src_image: "./assets/image-john.jpg",
    alt_image: "John Tarkpor"    
  }
];

function keyDown(e){
  console.log(e);
}

function btnClick(){
  if (i) {
    i = 0;
  }else{
    i = 1;
  }

  document.getElementById("description").innerText = testimonials[i].description;
  document.getElementById("name").innerText = testimonials[i].name;
  document.getElementById("job").innerText = testimonials[i].job;
  document.getElementById("authorImage").src = testimonials[i].src_image;
  document.getElementById("authorImage").alt = testimonials[i].alt_image; 
  
}

window.addEventListener('load', () =>{
  document.getElementById("description").innerText = testimonials[0].description;
  document.getElementById("name").innerText = testimonials[0].name;
  document.getElementById("job").innerText = testimonials[0].job;
  document.getElementById("authorImage").src = testimonials[0].src_image;  
  document.getElementById("authorImage").alt = testimonials[0].alt_image;  
});

window.addEventListener('keydown', (event) => {
  console.log(event);
    if((event.keyCode === 39) || (event.keyCode ===37)){
      btnClick();
    }    
  }
);