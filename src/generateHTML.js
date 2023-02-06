function generateManagerCard(data) {
  return `
  <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${data[0].name}</h5>
     <p class="card-text">${data[0].getRole()}</p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${data[0].id}</li>
     <li class="list-group-item"><a href="#" class="card-link">${data[0].email}</a></li>
     <li class="list-group-item">${data[0].officeNumber}</li>
   </ul>
  </div>
  `;
};

function generateEngineerCard(data) {
  const engineers = [];
  for (i = 0; i < data.length; i++) {
    let role = data[i].getRole();
    if (role == 'Engineer') {
      engineers.push(data[i])
    }
    console.log(role);
  }
  console.log(data);
  console.log(engineers)
  for (i = 0; i < engineers.length; i++) {
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${engineers[i].name}</h5>
       <p class="card-text">${engineers[i].getRole()}</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${engineers[i].id}</li>
       <li class="list-group-item"><a href="#" class="card-link">${engineers[i].email}</a></li>
       <li class="list-group-item">${engineers[i].gitHub}</li>
     </ul>
    </div>
    `;
  };
};

function generateInternCard(data) {
  const interns = [];
  for (i = 0; i < data.length; i++) {
    let role = data[i].getRole();
    if (role == 'Intern') {
      interns.push(data[i])
    }
    console.log(role);
  }
  console.log(data);
  console.log(interns)
  for (i = 0; i < interns.length; i++) {
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${interns[i].name}</h5>
       <p class="card-text">${interns[i].getRole()}</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${interns[i].id}</li>
       <li class="list-group-item"><a href="#" class="card-link">${interns[i].email}</a></li>
       <li class="list-group-item">${interns[i].school}</li>
     </ul>
    </div>
    `;
  };
};

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
     ${generateManagerCard(data)}
     ${generateEngineerCard(data)}
     ${generateInternCard(data)}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
  </html>
  `;
};

module.exports = generateHTML;