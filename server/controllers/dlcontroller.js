module.exports = {
  getDataAfterLogin: (req, res, next) => {
    const db = req.app.get("db");
    console.log("seeeesions", req.user);
    db.get_user_info(req.user.auth_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  },

  submitDL: (req, res, next) => {
    const db = req.app.get("db");
    console.log("teeest", req.body, req.user.auth_id);
    // console.log('session', req.session)
    const {
      // first_name,
      // last_name,
      dob,
      // sex,
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
    } = req.body.e;

    db.submit_dl([
      req.user.auth_id,
      dob,
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
    // console.log("corndog", req.params.id);
    console.log("req.body>>>", req.body.e);
    console.log('req parrrrams', req.params)
    // console.log(req.params);
    const db = req.app.get("db");
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
    } = req.body.e;
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
}
