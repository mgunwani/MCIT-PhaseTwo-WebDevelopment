
function update(element) {
    document.getElementById('desc').innerHTML = element.alt;
}

function undo() {
    document.getElementById('desc').innerHTML =
        "Hover over the image to display image description here..";
}

function openFunction() {
    element = document.getElementById('content');
    element.style.display = 'block';
}

function closeFunction() {
    element = document.getElementById('content');
    element.style.display = 'none';

}