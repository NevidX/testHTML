const contactsButton = document.querySelector('#contacts')
const contacts = document.querySelector('.contacts__adaptive')

console.log(contactsButton);
contactsButton.addEventListener('click', () => {
	contacts.classList.toggle('contacts__adaptive-active')
})