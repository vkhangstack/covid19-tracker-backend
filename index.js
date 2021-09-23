const express = require("express");
const cors = require("cors");
const router = require("./routes/tracking");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.use(router);
app.listen(PORT, () => {
  console.log(`Server listen port ${PORT}`);
});
