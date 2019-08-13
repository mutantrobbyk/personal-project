create table project_gallery (
project_id serial primary key,
title varchar(150),
sub_1 varchar(150),
sub_2 varchar(150),
sub_3 varchar(150),
body text,
cover_image text
);

create table project_gallery_pics (
id serial primary key,
project_id int references project_gallery(project_id),
image text
);

create table tech_tips (
tip_id serial primary key,
category varchar(30),
title varchar(150),
body text,
video_url text
);

create table tech_tips_pics (
id serial primary key,
tech_tips_id int references tech_tips(tip_id),
image text
);