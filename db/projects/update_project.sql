update project_gallery
set title = ${title}, sub_1 = ${sub_1}, sub_2 = ${sub_2}, sub_3 = ${sub_3}, body = ${body}, cover_image = ${cover_image}
where project_id = ${project_id};
select * from project_gallery;