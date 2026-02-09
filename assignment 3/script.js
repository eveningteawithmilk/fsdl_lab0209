
document.addEventListener("DOMContentLoaded", function () {

    let uname = document.getElementById("uname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let age = document.getElementById("age");
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    let form = document.getElementById("myForm");
    let msg = document.getElementById("msg");

    // Username
    uname.addEventListener("input", function () {
        if (uname.value.trim() === "") {
            setError(uname, "uerr", "Required");
        } else {
            setSuccess(uname, "uerr");
        }
    });

    // Email
    email.addEventListener("input", function () {
        let reg = /^[a-zA-Z]{2,}@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;

        if (!reg.test(email.value)) {
            setError(email, "eerr", "Invalid Email");
        } else {
            setSuccess(email, "eerr");
        }
    });

    // Phone
    phone.addEventListener("input", function () {
        if (!/^[0-9]{10}$/.test(phone.value)) {
            setError(phone, "perr", "10 digits only");
        } else {
            setSuccess(phone, "perr");
        }
    });

    // Age
    age.addEventListener("input", function () {
        let a = parseInt(age.value);

        if (isNaN(a) || a < 18 || a > 60) {
            setError(age, "aerr", "18–60 only");
        } else {
            setSuccess(age, "aerr");
        }
    });

    // Password
    pass.addEventListener("input", function () {

        let reg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;

        if (!reg.test(pass.value)) {
            setError(pass, "paerr", "Weak password");
        } else {
            setSuccess(pass, "paerr");
        }
    });

    // Confirm Password
    cpass.addEventListener("input", function () {

        if (pass.value !== cpass.value) {
            setError(cpass, "cerr", "Not matching");
        } else {
            setSuccess(cpass, "cerr");
        }
    });

    // Submit
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        if (checkAll()) {
            msg.innerHTML = "Registration Successful!";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Fix errors first!";
            msg.style.color = "red";
        }
    });

    // Helper Functions

    function setError(input, spanId, text) {
        input.className = "bad";
        document.getElementById(spanId).innerHTML = text;
    }

    function setSuccess(input, spanId) {
        input.className = "good";
        document.getElementById(spanId).innerHTML = "";
    }

    function checkAll() {
        return (
            uname.className === "good" &&
            email.className === "good" &&
            phone.className === "good" &&
            age.className === "good" &&
            pass.className === "good" &&
            cpass.className === "good"
        );
    }

});
