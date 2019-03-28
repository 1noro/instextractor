// main.js

function print_text(txt) {
    var
        body = document.getElementsByTagName('body')[0],
        pretxt = document.createElement("pre");
        // txtobj = document.createTextNode(txt);

    pretxt.innerText=txt;
    body.appendChild(pretxt);
}

function ajax (url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true); // true = asynchronous
    req.onload = function () {
        var value = this.responseText;
        callback(value);
    };
    req.send(null);
}

function main() {
    console.log('heyy');
    ajax('https://www.instagram.com/belategui_regueiro/',print_text)
}
