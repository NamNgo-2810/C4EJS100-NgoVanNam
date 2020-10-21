let username = prompt('Enter the username');
do {
    username = prompt('Your username is too long.');
} while (username.length > 15);
alert('Good username');