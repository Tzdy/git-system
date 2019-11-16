#!/bin/bash
# $1 old_name,
# $2 new_name
path="/var/git"
mv "$path/$1" "$path/$2"
# 修改名字后，客户端需要重新clone