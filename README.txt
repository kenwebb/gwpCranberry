gwpCranberry
December 4, 2020
based on GwpBerry

NOTE
----
This is a reduced version of GwpBerry, for use by Andrea to explore styles.

To setup the project
--------------------
- copy gwpBerry and rename it gwpCranberry
- delete .git
- edit app.json
cd ~/AAA_GatWldFlwr/Expo/Snack
expo --version   3.28.1
cd gwpCranberry
atom .
git init
git status
git add .
yarn install  success Already up-to-date.
- delete all the flower images except for one
- delete all items in plants.js, except for the one that refers to the flower image

To Run in browser
------
yarn start
http://localhost:19006/
http://192.168.0.39:19006/

To backup
---------
cd ~/AAA_GatWldFlwr/Expo/Snack
tar -pczf gwpCranberry_002.tar.gz --exclude=/home/ken/AAA_GatWldFlwr/Expo/Snack/gwpCranberry/.git/* --exclude=/home/ken/AAA_GatWldFlwr/Expo/Snack/gwpCranberry/assets/gwp/images/* --exclude=/home/ken/AAA_GatWldFlwr/Expo/Snack/gwpCranberry/node_modules/* --exclude=/home/ken/AAA_GatWldFlwr/Expo/Snack/gwpCranberry/.expo/*  /home/ken/AAA_GatWldFlwr/Expo/Snack/gwpCranberry
