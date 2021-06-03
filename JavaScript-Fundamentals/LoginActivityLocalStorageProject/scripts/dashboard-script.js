window.onload = function () {
    if (localStorage) {
        if (localStorage.getItem('uname')) {
            document.getElementById('welcomeMessage').textContent = "Welcome " +
                localStorage.getItem('uname') + "!!";
        } else {
            location.href = "./index.html"
        }
    }
}

function logout() {
    localStorage.clear();
    location.href = './index.html';
}