CREATE TABLE `user`(
    id INTEGER NOT NULL AUTOINCREMENT,
    username VARCHAR(32) UNIQUE PRIMARY NOTNULL,
    password VARCHAR(32) NOTNULL,
    public_key CHAR(512) NOTNULL,
    created_at DATETIME NOT NULL DEFAULT (datetime('now','localtime')),
    updated_at DATETIME NOT NULL DEFAULT (datetime('now','localtime'))
)
CREATE TABLE `user_attribute`(
    ID INTEGER DEFAULT 0 NOT NULL,
    user_amount INTEGER DEFAULT 0 NOT NULL
);