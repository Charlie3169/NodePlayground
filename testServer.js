const express = require('express');
//const app = require('express')();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./backend/routes/todoRoutes'))

app.get('/docker', (req, res ) =>
    res.json({ message: 'Docker is easy' })
);

app.get('/test', (req, res ) =>
    res.json({ message: 'Express is easy' })
);

const port = process.env.PORT || 5080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
