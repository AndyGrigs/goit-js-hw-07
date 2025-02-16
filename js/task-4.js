const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
});