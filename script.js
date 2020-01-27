// The following script allows the hamburger drop-down menu functionality for the mobile site

// Query selector variables for various navigation tools
const hamburger = document.querySelector('.hamburger');
const topNavUl = document.querySelector('.top-nav ul');
const socialMediaNav = document.querySelector('.social-media-nav');
const navAnchors = document.querySelectorAll('.top-nav a');

// A function to toggle the .open class for the main navigation menu as well as the social media navigation menu
const toggleNav = () => {
    topNavUl.classList.toggle('open');
    socialMediaNav.classList.toggle('open');
};

// Init function adds event listeners to the hamburger icon as well as the anchors within the menu
// The purpose of adding event listeners to the anchors themselves is so that the menu will automatically close once the user has made a selection
const init = () => {
    hamburger.addEventListener('click', toggleNav);
    
    for (let i = 0; i < navAnchors.length; i++) {
        navAnchors[i].addEventListener('click', toggleNav);
    };
};

// Document Ready
if(document.readyState === 'complete') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
};