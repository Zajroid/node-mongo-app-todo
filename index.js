require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require('express-handlebars')

const router = require('./routes/router')

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.use(router);


async function start() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL.toString(),
      {
        useNewUrlParser: true,
      },
			console.log(`[+] Connect to mongo success`)
    )
    app.listen(PORT, (error) => {
      if (error) {
        throw new Error(`[-] NEW ERROR:${error}`);
      }

      console.log(`Server been started: http://localhost:${PORT}`);
    })
	} catch (e) {
    console.log(e);
  }
}

start();
