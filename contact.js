// success messsage 
const form = document.getElementById('form');
const success = document.getElementById('success');
// error element
const email = document.getElementById("email")
const error = document.getElementById("error")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    error.style.display = 'none';
    email.classList.remove('error');

    if (!email.validity.valid) {
        error.style.display = 'block';
        email.classList.add('error');
        return;
    }

    if (form.checkValidity()) {
        success.style.display = 'block';
        form.reset();

        setTimeout(() => {
            success.style.display = 'none';
        }, 3000);
    }
});

