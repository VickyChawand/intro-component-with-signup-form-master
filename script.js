const first = document.getElementById('First');
const last = document.getElementById('Last');
const password = document.getElementById('Password');
const email = document.getElementById('Email');
const btn = document.querySelector('#form-btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const first_name = first.value.trim();
    const last_name = last.value.trim();
    const emaill = email.value.trim();
    const passwordd = password.value.trim();

    if(first_name === '') {
        setError(first, 'First name is required');
    } else {
        setSuccess(first);
    }

    if(emaill === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emaill)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordd === '') {
        setError(password, 'Password is required');
    } else if (passwordd.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(last_name === '') {
        setError(last, 'Last name is required');
    }else {
        setSuccess(last);
    }

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
