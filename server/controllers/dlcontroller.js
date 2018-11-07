module.exports = {
  getDataAfterLogin: (req, res, next) => {
    const db = req.app.get("db");
    db.get_user_info(req.user.user_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  submitDL: (req, res, next) => {
    const db = req.app.get("db");
    console.log('poop', req.user.user_id);
    // console.log('session', req.session)
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
      voter_reg} = req.body.e;

    db.submit_dl([
      req.user.user_id,
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
        console.log("test", response);
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getCompletedDlForm: (req, res, next) => {
    const db = req.app.get("db");
    db.get_completed_dl()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  finalDLsubmit: (req, res, next) => {
    console.log('corndog', req.params.id,);
    const db = req.app.get('db');
    console.log(req.body)
    console.log(req.params)
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
      voter_reg,
      user_email
    } = req.body; 
    db.final_dl_submit([
      req.params.id,
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
      voter_reg,
      user_email
    ])
      .then(response => {
        console.log("PUT successful", response);
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
