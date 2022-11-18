const form = document.getElementById("form")
const email = document.getElementById("email")
const error = document.getElementById("error-msg")


form.addEventListener("submit", event => {
    event.preventDefault();
    validateEmail(email.value)
})

email.addEventListener("click", () => {
    email.style.border = "1px solid hsl(223, 100%, 88%)"
})

function validateEmail(mail) {
    if(mail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = ""
        error.style.marginBottom = "0rem"
        return true
    }
    else {
        error.innerHTML = "Please provide a valid email adress"
        email.style.border = "1px solid hsl(354, 100%, 50%)"
        error.style.marginBottom = "1rem"
        return false
    }
}