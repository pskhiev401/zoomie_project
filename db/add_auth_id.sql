INSERT INTO dl_form
  (user_id)
VALUES
  ($1);
SELECT *
FROM dl_form
WHERE user_id = $1;