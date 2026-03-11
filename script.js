let contactform = document.getElementById('log')

let sendemail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_n7072m1', 'template_pe8knqa', '#log', 'tF8nZKSPztLNsxiDD')
}

contactform.addEventListener('submit', sendemail);