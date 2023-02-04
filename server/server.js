const express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

const baseUrl = "https://whoismyrepresentative.com/";
const jsonUrl = "&output=json";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.get("/getAllRepsByState/:state", cors(corsOptions), async (req, res) => {
  const state = req.params.state;
  const route = "getall_reps_bystate.php?state=" + state;
  try {
    const apiResponse = await fetch(baseUrl + route + jsonUrl);
    const apiResponseJson = await apiResponse.json();
    res.send(apiResponseJson);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/getAllSensByState/:state", cors(corsOptions), async (req, res) => {
  const state = req.params.state;
  const route = "getall_sens_bystate.php?state=" + state;
  try {
    const apiResponse = await fetch(baseUrl + route + jsonUrl);
    const apiResponseJson = await apiResponse.json();
    res.send(apiResponseJson);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(5000, () => {
  console.log("Server started :)");
});
