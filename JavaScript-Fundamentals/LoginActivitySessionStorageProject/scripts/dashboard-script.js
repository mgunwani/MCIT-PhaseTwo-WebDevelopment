window.onload = function () {
    if (sessionStorage) {
        if (sessionStorage.getItem('uname')) {
            document.getElementById('welcomeMessage').textContent = "Welcome " +
                sessionStorage.getItem('uname') + "!!";
        } else {
            location.href = "./index.html"
        }
    }
}

function logout() {
    localStorage.clear();
    location.href = './index.html';
}