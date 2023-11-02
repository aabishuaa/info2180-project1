//Javascript Code for INFO2180-project1
var starter = function () {
    var btn = document.getElementsByClassName("btn")[1]; 
    var entry = document.getElementById("email");
    var message = document.getElementsByClassName("message")[0];

    btn.addEventListener("click", function (e) {
        e.preventDefault(); 

        var input = entry.value;
        var emailFormat = /\S+@\S+\.\S+/; 

        if (input === "") {
            message.textContent = "Please enter a valid email address";
        } else if (!emailFormat.test(input)) {
            message.textContent = "Please enter a valid email address in the format name@example.com";
        } else {
            message.textContent = "Thank you! Your email address " + input + " has been added to our mailing list";
        }
    });
};

window.onload = starter;

