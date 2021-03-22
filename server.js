"use strict";

const estimatePi = (numberOfSamples) => {
  let numberOfSamplesInsideCirle = 0;

  for (let _ = 0; _ < numberOfSamples; _++) {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;

    if (x ** 2 + y ** 2 <= 1) {
      numberOfSamplesInsideCirle++;
    }
  }

  return (numberOfSamplesInsideCirle / numberOfSamples) * 4;
};

const PORT = 8080;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const iterations = req.query.iterations
    ? parseInt(req.query.iterations)
    : 100;

  res.json({
    estimate: estimatePi(iterations),
  });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
