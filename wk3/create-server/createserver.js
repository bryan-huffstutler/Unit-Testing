
// dependencies
const http = require("http");

// server create
const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("YOUR NODE SERVER IS RUNNING ON PORT 3000, CONGRATULATIONS");
      res.end();
   } else {
      res.write("Not Found!");
      res.end();
   }
});

// server listen port #
server.listen(3000);
console.log(`Server is running on PORT: 3000`)