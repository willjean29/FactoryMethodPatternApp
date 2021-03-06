create database tienda;
use tienda;
drop table
if exists Productos;

create table Productos(
    id serial primary key,
    nombre varchar(50) not null,
    precio decimal not null,
    tipo varchar(25) not null,
    presentacion varchar(20) not null check(precio > 0)
);


insert into Productos(nombre, precio, tipo, presentacion) values('Coca cola', 2.5, 'Bebida', '500ml');
insert into Productos(nombre, precio, tipo, presentacion) values('Coca cola', 10.0, 'Bebida', '3L');
insert into Productos(nombre, precio, tipo, presentacion) values('Coca cola', 6.0, 'Bebida', '1.5L');
insert into Productos(nombre, precio, tipo, presentacion) values('Oreo', 0.8, 'Galleta', '60gr');
insert into Productos(nombre, precio, tipo, presentacion) values('Platano', 0.5, 'Fruta', '1 unidades');
insert into Productos(nombre, precio, tipo, presentacion) values('Lays', 9.0, 'Piqueo', '90gr');
insert into Productos(nombre, precio, tipo, presentacion) values('Vainilla ', 0.6, 'Galleta', '60gr');

select * from Productos;