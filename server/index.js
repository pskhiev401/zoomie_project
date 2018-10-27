require("dotenv").config();
// **** IMPORT DEPENDENCIES *****
const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const cors = require("cors");

// const {} = require("./controllers/controller");
// const { getHouses, addHouse, deleteHouse } = require("./controllers/controller");

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance.init();
  })
  .catch(err => console.log(err));

  

// *** ENDPOINTS *****
// app.get("/api/houses", getHouses);
// app.post("/api/houses", addHouse)
// app.delete("/api/houses/updated/:id", deleteHouse)

app.listen(port, () => {
  console.log(`BEEP Listenting on port ${port}`);
});
