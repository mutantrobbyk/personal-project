delete from tech_tips_pics
where tip_id = ($1);
delete from tech_tips
where tip_id = ($1);
select * from tech_tips;