function generateHTML(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <header class = "jumbotron">
                <h1>My Team</h1>      
            </header>

            <div class="container">
                <div class="row">
                    <div class="card-header col-4 shadow p-3 mb-5 rounded" > <h5 class="card-title">${data.employeeName}</h5> </br> <h6 class="card-text">${data.employeeRole}</h6>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">E-Mail:</br> ${data.email}</li>
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">Office: ${data.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </body>
        </html>

    `
}

module.exports = generateHTML