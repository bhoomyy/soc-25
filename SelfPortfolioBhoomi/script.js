const text = "Hi, I am Bhoomi...Welcome to my website!";
const typingElement = document.getElementById("typingtxt");
let index = 0;

function typetxt(){
    if(index < text.length){
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typetxt, 40);
    }
    else {
        setTimeout(() => {
            document.getElementById("home").scrollIntoView({ behavior: "smooth"});
        }, 1000);
    }
}
window.onload = typetxt;

const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

items.forEach(item => observer.observe(item));


