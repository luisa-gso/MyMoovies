const express = require("express");
const bodyParser =  require ("body-parser");
const categoryRoutes = require ("./src/routes/category");
const mooviesRoutes = require ("./src/routes/moovies");

const app = express();

app.use(bodyParser.json());
app.get('/moovies', function(req, res ){
    res.send('entrei em moovies');
} );

app.use('/category', categoryRoutes);
app.use('/moovies', categoryRoutes);

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
})