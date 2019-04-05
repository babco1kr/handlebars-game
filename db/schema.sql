create database rollercoaster_db;
use rollercoaster_db;

create table coasters (
    id int(10) auto_increment not null,
    coaster_name varchar(255) not null,
    rode boolean default false,
    primary key(id)
);