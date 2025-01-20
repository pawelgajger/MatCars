document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hamburger')
	const navLinks = document.querySelector('.nav-links')

	hamburger.addEventListener('click', function () {
		// Przełączanie klas active
		this.classList.toggle('active')
		navLinks.classList.toggle('active')

		// Zapobieganie przewijaniu strony gdy menu jest otwarte
		document.body.classList.toggle('menu-open')
	})

	// Zamykanie menu po kliknięciu w link
	document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active')
			navLinks.classList.remove('active')
			document.body.classList.remove('menu-open')
		})
	})
})

// Zapewnienie, że menu działa po przewinięciu strony
window.addEventListener('scroll', function() {
	const navbar = document.querySelector('.navbar');
	navbar.style.top = '0';
  });
  