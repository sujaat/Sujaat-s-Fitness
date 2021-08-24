const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sujaat fitness</title>
  </head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <body>
      <header class="header">
          <div class="left">
            <a href="#"><img src="img/logo.png"></a>
          </div>
          <div class="mid">
             <ul class="navbar">
                 <li><a href="#" class="active">Home</a></li>
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Fitness Coaches</a></li>
                 <li><a href="#">Contact Us</a></li>
             </ul>
          </div>
          <div class="right">
              <button class="btn">Call Us Now</button>
              <button class="btn">Email Us</button>
          </div>
      </header>
  
      <div class="container">
         <h1>Join us to the best fitness in town</h1>
         <form action="noaction.php">
             <div class="form-group">
                 <input type="text" name="" placeholder="Enter your name">
             </div>
             <div class="form-group">
              <input type="number" name="" placeholder="Enter your mobile number">
          </div>
          <div class="form-group">
              <input type="text" name="" placeholder="Enter your email id">
          </div>
          <div class="form-group">
              <input type="text" name="" placeholder="Enter your gender">
          </div>
          <button class="btn">Submit Now</button>
         </form>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});