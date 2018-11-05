UPDATE dl_form
SET first_name = $2, last_name = $3, dob = $4, sex = $5, ssn = $6, dl_type = $7, dl_class = $8, dl_exp = $9, dl_num = $10, address_1 = $11, address_2 = $12, city = $13, state = $14, zipcode = $15, hair = $16, eyes = $17, height = $18, weight = $19, organ_donor = $20, voter_reg = $21
WHERE user_id = $1;