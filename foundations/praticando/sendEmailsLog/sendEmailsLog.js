let emailAdress = [
    `luka9kw@hotmail.com`,
    `luka9kw@outlook.com`,
    `lukaralho@hotmail.com`,
    `sekiluka@hotmail.com`,
    `luka9kw@outlook.pt`
]


function sendEmails(email) {
    emailAdress.forEach((item) => {
        console.log(`Email enviado com sucesso para: ${item}.`)
    })
}

sendEmails()