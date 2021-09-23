const axios = require("axios");
const fs = require("fs");
class Data {
  async getData() {
    axios
      .get("https://static.pipezero.com/covid/data.json")
      .then(function (response) {
        fs.writeFileSync(
          "./data/data.json",
          JSON.stringify(response.data),
          (err) => {
            console.log("error");
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = Data;
