module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    const {} = req.body;

    db.get_all()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  submitDL: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    const {
      first_name,
      last_name,
      dob,
      sex,
      ssn,
      dl_type,
      dl_class,
      dl_exp,
      dl_num,
      address_1,
      address_2,
      city,
      state,
      zipcode,
      hair,
      eyes,
      height,
      weight,
      organ_donor,
      voter_reg
    } = req.body;

    db.submit_dl([
      first_name,
      last_name,
      dob,
      sex,
      ssn,
      dl_type,
      dl_class,
      dl_exp,
      dl_num,
      address_1,
      address_2,
      city,
      state,
      zipcode,
      hair,
      eyes,
      height,
      weight,
      organ_donor,
      voter_reg
    ])
      .then(response => {
        console.log('test', response)
        res.status(200).json(response);
      })
      .catch(err => {console.log(err)
        res.status(500).send(err)
      });
  }
};
