const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
//const recipes_data = require('./recipes_data.json');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json());

app.get('/', (req, res) => {
    res.send('dhcjk!');
});

app.get('/recipes_data', (req, res) => {
    //res.send(recipes_data);
    fs.readFile(__dirname + '/' + 'recipes_data.json', 'utf-8', (err, data) => {
        res.send(JSON.parse(data));
    })
});

app.get('/books', (req, res) => {
    fs.readFile(__dirname + '/' + 'book_list.json', 'utf-8', (err, data) => {
        res.send(JSON.parse(data));
    })
})

app.get('/posts', (req, res) => {
    fs.readFile(__dirname + '/' + 'post_list.json', 'utf-8', (err, data) => {
        res.send(JSON.parse(data));
    })
})

app.get('/recipes_data/:id', (req, res) => {
    const recipe = recipes_data.find(c => c.id === parseInt(req.params.id))
    if (!recipe) res.status(404).send('Given id not found..')
    res.send(recipe);
})

app.post('/recipes_data', (req, res) => {

    fs.readFile(__dirname + '/' + 'recipes_data.json', 'utf-8', (err, data) => {
        let recipes_data = JSON.parse(data);
        const recipe = {
            id: recipes_data.length + 1,
            title: req.body.title,
            url: req.body.url,
            rating: req.body.rating,
            author: req.body.author,
            keywords: req.body.keywords
        };

        recipes_data = [...recipes_data, recipe]

        fs.writeFileSync(__dirname + '/' + 'recipes_data.json', JSON.stringify(recipes_data, null, 2), (err) => {
            if (err) consol.log(err);
        })
        let x = recipes_data;
        res.send(x);
    })

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});