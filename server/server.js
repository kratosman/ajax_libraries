const express = require('express');
const app = express();
const conn = require('./database')

app.use(express.static('../client'));
app.use(express.json());

app.get('/data', async (req, res) => {
    let sql = 'SELECT * FROM name_table';
    conn.query(sql, (err, results) => {
        if (err) throw err;

        res.status(200).json(results);
    })
})

app.post('/data_post', async (req, res) => {
    try {
        const { username } = req.body;
        let sqlasd = 'INSERT INTO name_table (username) VALUES (?)';
    // let sql = 'INSERT INTO name_table (username) VALUES (?)';
    conn.query(sqlasd, [username], (err, results) => {
        if (err) throw err;

        res.status(200).json('Successfully inserted');  
    })
    } catch (error) {
      console.error(error);  
    }
})
app.get('/', async (req, res) => {
    res.redirect('index.html');
})
app.listen(3000, () => {
    console.log('Server listening to port 3000');
})

