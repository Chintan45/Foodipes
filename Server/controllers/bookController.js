const fs = require("fs");

const getBooks = (req, res) => {
  try {
    fs.readFile(__dirname + "./../" + "book_list.json", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Unable to read book list");
        return;
      }
      res.status(200).send(JSON.parse(data));
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in getting books.");
  }
};

module.exports = { getBooks };
