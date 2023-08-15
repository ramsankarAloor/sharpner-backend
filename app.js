const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text-html");
  if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome home!!</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome to about us page!!</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/node") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome to my Node JS project!!</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000);
