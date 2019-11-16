apt install sqlite3
mkdir /var/git
adduser git
# chmod 777 /var/git
mkdir /var/git/dustbin
# sudo chown -R git:git /var/git
# 先用root将/var/git设置为chmod 777，
#谁调用的shell脚本，创建的文件，它就有资格读写。