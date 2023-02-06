function generateManagerCard(data) {
  return `
  <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${data[0].getRole()}</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
   </ul>
   <div class="card-body">
     <a href="#" class="card-link">Card link</a>
     <a href="#" class="card-link">Another link</a>
   </div>
  </div>
  `;
};

function generateEngineerCard(data) {
  return `
  <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${data[0].getRole()}</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
   </ul>
   <div class="card-body">
     <a href="#" class="card-link">Card link</a>
     <a href="#" class="card-link">Another link</a>
   </div>
  </div>
  `;
};

function generateInternCard(data) {
  return `
  <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${data[0].getRole()}</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
   </ul>
   <div class="card-body">
     <a href="#" class="card-link">Card link</a>
     <a href="#" class="card-link">Another link</a>
   </div>
  </div>
  `;
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