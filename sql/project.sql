CREATE TABLE project(
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name varchar(32) NOT NULL,
    author varchar(32) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT (datetime('now','localtime')),
    updated_at DATETIME NOT NULL DEFAULT (datetime('now','localtime'))
);

-- 项目总数
CREATE TABLE attribute(
    ID INTEGER DEFAULT 0 NOT NULL,
    project_amount INTEGER DEFAULT 0 NOT NULL
);
INSERT INTO attribute(ID) VALUES(0);


-- CREATE TRIGGER update_time AFTER UPDATE
-- ON project
-- BEGIN
-- UPDATE project SET updated_at = (datetime('now','localtime')) where ID=old.ID;
-- END;

CREATE TRIGGER insert_project AFTER INSERT
ON project
BEGIN
UPDATE attribute SET project_amount = (project_amount + 1) WHERE ID=ID;
END;

CREATE TRIGGER delete_project AFTER DELETE
ON project
BEGIN
UPDATE attribute SET project_amount = (project_amount - 1) WHERE ID=ID;
END;