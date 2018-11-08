module.exports={
  getAllOrders: (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_orders().then(response => {
      res.status(200).json(response)
    }).catch(err => res.status(500).send(err))
  },



}