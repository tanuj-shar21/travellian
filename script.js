
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});




document.querySelector('.book-now-btn').addEventListener('click', () => {
    const destination = document.getElementById('destination').value;
    const person = document.getElementById('person').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
  
    alert(`Booking Details:\nDestination: ${destination}\nPersons: ${person}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
  });
  




