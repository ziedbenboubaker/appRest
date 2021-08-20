const { createServer } = require("http");

const app = require("./src/app");

const server = createServer(app);

const port = process.env.PORT || 5000;

server.listen(port);

server.on("listening", () => console.log(`Server is running on port ${port}`));

server.on("error", (error) => console.log(error));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});
