select * from project_gallery p
left join project_gallery_pics pgp on pgp.project_id = p.project_id
where p.project_id = ($1);