const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(require("./routers/index"))

const { PORT, MONGO_SERVER } = process.env;

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER);

    app.listen(PORT, () => {
      console.log(`Успешно соеденились. ПОРТ ${PORT}`);
    });
  } catch (e) {
    console.log(`Ошибка при подключении: ${e.toString()}`);
  }
};

connectAndStartServer();
