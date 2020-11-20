const router = require('express').Router();

const MongoService = require('../services/crudMongo');

const response = require('../utils/response');

router
  .get("/list", (req, res) => {

  })
  .post("/create", async (req, res) => {
    try {
      let data = req.body
      let result = await MongoService.create(data)
      response(res, 201, result, "Usuario creado")
    } catch (error) {
      console.log(error)
      response(res, 500, {}, "Internal server error")
    }
  })
  .put("/update", (req, res) => {

  })
  .delete("/delete", (req, res) => {

  })

module.exports = router