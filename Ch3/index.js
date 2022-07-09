const http = require("http");
const host = "localhost";
const port = 8000;

class User {
  constructor(id, firstName, lastName, age, country) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }
}

const users = JSON.stringify([
  new User("1", "Facundo", "Campazzo", 31, "Argentina"),
  new User("2", "Dirk", "Nowitzki", 44, "Alemania"),
  new User("3", "LeBron", "James", 37, "EEUU"),
  new User("4", "Emanuel", "Ginobili", 44, "Argentina"),
  new User("5", "Stephen", "Curry", 34, "EEUU"),
]);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/usuarios":
      res.writeHead(200);
      res.end(users);
      break;
    default:
      res.writeHead(404);
      res.end(
        JSON.stringify({
          statusCode: 404,
          message:
            "No se pudo cargar la pagina.",
        })
      );
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});
