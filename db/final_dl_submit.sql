UPDATE dl_form
SET id = $2,first_name = $3, last_name = $4, dob = $5, sex = $6, ssn = $7, dl_type = $8, dl_class = $9, dl_exp = $10, dl_num = $11, address_1 = $12, address_2 = $13, city = $14, state = $15, zipcode = $16, hair = $17, eyes = $18, height = $19, weight = $20, organ_donor = $21, voter_reg = $22
WHERE user_id = $1;