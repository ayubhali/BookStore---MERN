import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("MERN stack applications");
});

app.listen(PORT, () => {
  console.log(`App is listen to port: ${PORT}`);
});

// HTTP Routing
