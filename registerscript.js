let contactform = document.getElementById('Register')

let sendemail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_n7072m1', 'template_4vbwn68', '#Register', 'tF8nZKSPztLNsxiDD')
}

contactform.addEventListener('submit', sendemail);