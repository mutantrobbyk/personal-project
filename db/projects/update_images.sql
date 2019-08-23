insert into project_gallery_pics (project_id, image)
values ($1, $2)
returning *;