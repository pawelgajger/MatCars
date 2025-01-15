const aboutLink = document.querySelector('nav ul li a[href="index.html"]')

aboutLink.addEventListener('click', function (event) {
	event.preventDefault() 
	console.log('Kliknięto w link "O nas"')
	// Tutaj możesz dodać dowolną logikę, którą chcesz, np. przenieść użytkownika do sekcji "O nas"
})
