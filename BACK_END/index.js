// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
