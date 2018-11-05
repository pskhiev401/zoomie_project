INSERT INTO dl_form(user_id, first_name, last_name, user_email, sex)
VALUES($1, $2, $3, $4, $5);
SELECT *
FROM dl_form
WHERE user_id = $1;