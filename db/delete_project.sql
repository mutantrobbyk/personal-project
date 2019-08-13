delete from project_gallery_pics
where project_id = ($1);
delete from project_gallery
where project_id = ($1);