function setCookie(cookie_name, cookie_value, exp_days) {
    const date = new Date();
    date.setTime(date.getTime() + (exp_days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();

    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
}

function getCookie(cookie_name) {
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);

    let cookie_array = decodedCookie.split(';');

    for (let i = 0; i < cookie_array.length; i++) {

        let c = cookie_array[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
        document.getElementById("welcome").textContent = "Welcome again " + username;
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
            document.getElementById("welcome").textContent = "Welcome " + username;
        }
    }
}