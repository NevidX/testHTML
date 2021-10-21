const contactsButton = document.querySelector('#contacts')
const contacts = document.querySelector('.contacts__adaptive')
const contactsArrow = document.querySelector('.services-link__arrow')
console.log(contactsArrow);

console.log(contactsButton);
contactsButton.addEventListener('click', () => {
	contacts.classList.toggle('contacts__adaptive-active')
	contactsArrow.classList.toggle('services-link__arrow-active')
})