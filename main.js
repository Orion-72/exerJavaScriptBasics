const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onsubmit(e) {
	e.preventDefault();

	if(nameInput.value === '' || emailIput.value === '') {
		msg.classList.add('error');
		msg.innerHTML = "Please enter all fields";

		setTimeout(() => msg.remove(), 3000);
	} 	else {
		const li = document.createElement('Li');
		li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value'));

		userList.appendChild(li);

		// Clear fields
		nameInput.value = '';
		emailInput.value = "";
	}
}
