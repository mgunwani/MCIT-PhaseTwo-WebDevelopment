
// Create a 'close' button and append it to each list item
var myNodeList = document.getElementsByTagName('li');
for (var i = 0; i < myNodeList.length; i++) {
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}


// Add new list item when clicking on Add Button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue == '') {
        alert('You must write something');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = "";
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

// Clearing the List
function removeAll() {
    var list = document.getElementsByTagName('ul');
    list[0].innerHTML = "";
}

