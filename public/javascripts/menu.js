// Added for Mobile Integration

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle'); //Hamburger Menu Button
  const nav = document.querySelector('.nav-links'); //Navigation links

  toggle.addEventListener('click', () => { //Handles when the Hamburger button is pressed
    nav.classList.toggle('show');
  });
});
