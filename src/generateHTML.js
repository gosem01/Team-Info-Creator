function generateCards(data) {
    let cardsInfo = "";

    console.log(data.length)

    for(let i = 0; i < data.length; i++) {
        // console.log(cards[i]);
        cardsInfo += `<div>
                        <h2>
                            ${data[i].getName()}
                            <br>
                            ${data[i].getRole()}
                        </h2>
                        <p>
                            ID: ${data[i].getId()}
                        </p>
                        <p>
                            Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a>
                        </p>
                            ${data[i].getRole() === 'Manager' ? '<p>Office number: '+data[i].getOfficeNumber()+'</p>' : ''}
                            ${data[i].getRole() === 'Engineer' ? '<p>Github: <a href="https://github.com/'+data[i].getGithub()+'">'+ data[i].getGithub() +'</a>'+'</p>' : ''}
                            ${data[i].getRole() === 'Intern' ? '<p>School: '+data[i].getSchool()+'</p>' : ''}
                        </div>`;
    }
    return cardsInfo;
}

function generateHTML(data){

    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="indexStyles.css" /> 
            <title>Document</title>
        </head>
        <header>My Team</header>
        <body>
            ${generateCards(data)}
        </body>
        </html>
    `;
}

module.exports = generateHTML;