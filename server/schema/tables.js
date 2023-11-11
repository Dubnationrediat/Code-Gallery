export let userInfo = `CREATE TABLE if not exists userInfo(
    user_id int auto_increment,
    user_first_name text not null,
    user_last_name text not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY(user_id)
)` 
        

export let imageTable = `CREATE TABLE if not exists image_table(
                image_id int auto_increment,
                picture_title varchar(255) not null,
                picture_description text not null,
                picture_path text not null,
                PRIMARY KEY(image_id)
)` 