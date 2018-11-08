INSERT INTO zoomies_users(auth_id, first_name, last_name, user_email, sex)
VALUES($1, $2, $3, $4, $5);
SELECT *
FROM zoomies_users
WHERE auth_id = $1;