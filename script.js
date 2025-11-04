document.getElementById('menuBtn').addEventListener('click', function(){
  const nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Demo form: message would be sent to the server in the full app.');
  this.reset();
});
