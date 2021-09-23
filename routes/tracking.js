const express = require("express");
const Data = require("../controller/getData");
const router = express.Router();
const newData = require("../data/data.json");

router.get("/Vietnam", async (req, res) => {
  new Data().getData();
  const data = {
    confirmed: {
      value: newData.total.internal.cases,
    },
    recovered: {
      value: newData.total.internal.recovered,
    },
    deaths: {
      value: newData.total.internal.death,
    },
    todayConfirmed: {
      value: newData.today.internal.cases,
    },
    todayRecovered: {
      value: newData.today.internal.recovered,
    },
    todayDeaths: {
      value: newData.today.internal.death,
    },
    lastUpdate: new Date().toISOString().split("T")[0],
  };
  res.send(data);
});
router.get("/Global", async (req, res) => {
  new Data().getData();
  const data = {
    confirmed: {
      value: newData.total.world.cases,
    },
    recovered: {
      value: newData.total.world.recovered,
    },
    deaths: {
      value: newData.total.world.death,
    },
    todayConfirmed: {
      value: newData.today.world.cases,
    },
    todayRecovered: {
      value: newData.today.world.recovered,
    },
    todayDeaths: {
      value: newData.today.world.death,
    },
    lastUpdate: new Date().toISOString().split("T")[0],
  };
  res.send(data);
});

router.get("/location", async (req, res) => {
  const data = {
    countries: [
      {
        name: "Vietnam",
      },
      {
        name: "Global",
      },
    ],
  };
  res.send(data);
});

router.get("/", async (req, res) => {
  const data = {
    countries: [
      {
        name: "Vietnam",
      },
      {
        name: "Global",
      },
    ],
  };
  res.send(data);
});
module.exports = router;
