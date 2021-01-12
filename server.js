const express = require("express");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
});