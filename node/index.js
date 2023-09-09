const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) =>
  res.json(
    process.env.WELCOME_MESSAGE
      ? `${process.env.WELCOME_MESSAGE}`
      : `MIKI.TRAN.DOCKER - no welcome message env var`
  )
);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
