const nr = require('newrelic');

const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');

const axios3001 = axios.create({
  baseURL: 'http://54.161.138.158',
});
const axios3002 = axios.create({
  baseURL: 'http://18.188.49.19',
});

//SIDEBAR
const axios3003 = axios.create({
  baseURL: 'http://localhost:3003',
});
const axios3004 = axios.create({
  baseURL: 'http://34.219.173.69',
});

app.get('/api/restaurants/:id/menus', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus/${req.params.menu}`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

//SIDEBAR
app.get('/api/restaurants/:id/info', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/info`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/overview`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/photos', (req, res) => {
  axios3002.get(`/api/restaurants/${req.params.id}/photos`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  axios3001.get(`/api/restaurants/${req.params.id}/reviews`)
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});


app.use('/restaurants/:id', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});