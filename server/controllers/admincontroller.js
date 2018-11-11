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
  },
  updateStatus: (req, res, next)=>{
    console.log(req.body.e)
    const db = req.app.get("db");
    const {auth_id} = req.body.e;
    db.update_status([auth_id, "Completed"])
      .then(response => {
        console.log("STATUS UPDATE OK", response)
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  deleteJob(req, res, next){
    console.log(req.params.id);
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_job(id)
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err))
  }
};
