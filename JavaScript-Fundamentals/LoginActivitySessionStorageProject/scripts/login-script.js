
function resetAll() {
    alert('reset Here..');
}

function userLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "" || password == "") {
        alert('Please Complete All Required Fields..');
    } else {
        if (username == "admin" && password == "admin") {

            if (sessionStorage) {
                sessionStorage.setItem('uname', username);
                location.href = './dashboard.html';
            } else {
                alert('sessionstorage is diasabled for this browser.');
            }
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

}