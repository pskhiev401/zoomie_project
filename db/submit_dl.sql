INSERT INTO dl_form
  ( user_id, dob, ssn, dl_type, dl_class, dl_exp, dl_num, address_1, address_2, city, state, zipcode, hair, eyes, height, weight, organ_donor, voter_reg, user_email, status)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, 'Pending');