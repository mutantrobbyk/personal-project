update tech_tips
set category = ${category}, title = ${title}, body = ${body}, url = ${url}
where tip_id = ${tip_id};
select * from tech_tips;