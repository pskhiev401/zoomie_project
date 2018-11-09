module.exports = {
  getAllPending: (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_pending()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },
  getAllCompleted: (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_completed()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
