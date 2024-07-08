const express = require("express");
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
const env = require('dotenv');
env.config();

const receipeRoutes = require("./routes/recipeRoutes");
const postRoutes = require("./routes/postRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("foodipes server is running successfully!");
});

app.use("/api/books", bookRoutes);
app.use("/api/recipes_data", receipeRoutes);
app.use("/api/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected To Database!'))
  .catch((err) => console.error(err.message));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
