const express = require("express");
const bodyParser =  require ("body-parser");
const cors = require("cors");
const categoryRoutes = require ("./src/routes/category");
const mooviesRoutes = require ("./src/routes/moovies");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());



app.use('/category', categoryRoutes);
app.use('/moovies', mooviesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})