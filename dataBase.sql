CREATE DATABASE IF NOT EXISTS candles ;

create table candlesToSell(
    id int primary key not null auto_increment ,
    price float not null,
    in offer float ,
    name varchar(255) not null,
    description varchar(255) not null,
);