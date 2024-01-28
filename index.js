const express = require("express");
const bodyParser =  require ("body-parser");
const categoryRoutes = require ("./src/routes/category");
const mooviesRoutes = require ("./src/routes/moovies");

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.get('/moovies', function(req, res ){
    res.send('entrei em moovies');
} );

app.use('/category', categoryRoutes);
app.use('/moovies', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})