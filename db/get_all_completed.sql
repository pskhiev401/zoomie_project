SELECT * FROM zoomies_users a
JOIN dl_form b
ON a.auth_id = b.user_id
WHERE status = 'Completed';