CREATE TABLE project(
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name varchar(32) NOT NULL UNIQUE,
    author varchar(32) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT (datetime('now','localtime')),
    updated_at DATETIME NOT NULL DEFAULT (datetime('now','localtime'))
);

-- 项目总数
CREATE TABLE project_attribute(
    ID INTEGER DEFAULT 0 NOT NULL,
    project_amount INTEGER DEFAULT 0 NOT NULL
);



