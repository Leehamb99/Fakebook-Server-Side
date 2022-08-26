const app = require("./app");
const port = 3000;
const { restart } = require('nodemon');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
   
