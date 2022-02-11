// Login informations will be handle here
const loginBtn=document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('pass');
    const userPassword = passwordField.value;

    // validation
    if (userEmail == 'dhur@baal.com' && userPassword == 'dhurbaal') {
        window.location.href = 'banking.html'
    } else {
        console.log('dure gia mor!');
    }
});

// account information will be handle here
