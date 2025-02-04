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
window.addEventListener('scroll', function () {
	const navbar = document.querySelector('.navbar')
	navbar.style.top = '0'
})

// Funkcja sprawdzająca, czy urządzenie jest mobilne
function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Obsługa kliknięcia przycisku
document.getElementById('reserveButton').addEventListener('click', function () {
	if (isMobileDevice()) {
		// Na urządzeniach mobilnych otwórz dialer
		window.location.href = 'tel:+48123456789'
	} else {
		// Na desktopie pokaż numer telefonu
		document.getElementById('phoneNumber').style.display = 'block'
	}
})
