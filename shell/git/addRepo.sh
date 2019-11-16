path="/var/git/$1.git"
mkdir $path
git init "$path/" --bare
chown -R git:git "$path/"
