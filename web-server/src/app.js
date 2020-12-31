const path = require('path');
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");


const app = express();
const port = process.env.PORT || 3000;

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {title: "Weather App", name: "Daniel Pataki"});
});

app.get("/about", (req, res) => {
    res.render("about", {title: "Weather App", name: "Daniel Pataki", img: "/img/avatar.jpeg", github: "https://github.com/dpataki92"});
});

app.get("/contact", (req, res) => {
    res.render("contact", {title: "Weather App", name: "Daniel Pataki", email: "ptamasdaniel92@gmail.com"});
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({"Error": "You must provide an address."})
    }
    else {
        geocode(req.query.address, (error, {location, latitude, longitude} = {}) => {
            if (error) {
                return res.send({error: error});
            }

            forecast(latitude, longitude, (error, {weather_description, temperature, feelslike} = {}) => {
                if (error) {
                    return res.send({error: error});
                }

                res.send({
                    location,
                    forecast: `${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees.`
                });
            })
        })
    }
});

app.get("/contact/*", (req, res) => {
    res.render("error", {title: "404", name: "Daniel Pataki", message: "Help article not found."});
});

app.get("*", (req, res) => {
    res.render("error", {title: "404", name: "Daniel Pataki", message: "Page not found."});
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});

