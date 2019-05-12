const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./routes/routes");

//example cors definition just to show you know
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(port, () => console.log(`App is running on port ${port}`));
