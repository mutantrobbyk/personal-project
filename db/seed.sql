drop table if exists credentials;
drop table if exists user_info;
drop table if exists project_gallery;
drop table if exists project_gallery_pics;
drop table if exists tech_tips;
drop table if exists tech_tips_pics;
drop table if exists account;

create table user_info(
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100)
);

create table credentials(
user_id INT,
hash TEXT
is_admin boolean
);

CREATE TABLE account(
account_id SERIAL PRIMARY KEY,
user_id INT REFERENCES user_info(user_id)
);

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
url text
);

create table tech_tips_pics (
id serial primary key,
tip_id int references tech_tips(tip_id),
image text
);

update credentials 
set is_admin = true
where user_id = 1;

CREATE TABLE sd_services_headline(
id SERIAL PRIMARY KEY,
headline TEXT
);