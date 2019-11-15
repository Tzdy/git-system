var inquirer = require('inquirer');
var projectRender = require('./view/ProjectSence')
var Sqlite = require('sqlite3');

(async function(){
  while(1){


      var answer = await inquirer.prompt([
          /* Pass your questions in here */
          {
              type:'list',
              message:'a',
              name:'sence',
              choices:[
                  "项目管理",
                  '权限管理'
                ]
            }
        ])
        console.clear();
        switch(answer.sence){
            case '项目管理':
                await projectRender();
                break;
            }

        }
}())
// async function allSync(db, sql, [...param]) {
//     console.log(param);
//     return pro = new Promise(function(resolve,reject){
//         db.all(sql, param, function(err, data) {
//             if(err)
//                 reject(err);
//             else
//                 resolve(data);   
//         });
//     })
// }   

// async function runSync(db, sql, [...param]) {
//     console.log(param);
//     return pro = new Promise(function(resolve,reject){
//         db.all(sql, param, function(err, data) {
//             if(err)
//                 reject(err);
//             else
//                 resolve(data);   
//         });
//     })
// }  


// (async function () {

//     var db = new Sqlite.Database('gitsystem.db');

//     // db.run('INSERT INTO project(project_name) VALUES(?)', "electronic");
//     try{

//         let t1 = (Date.parse((await allSync(db,"SELECT * from project",[]))[2].created_at));
//         runSync(db, "UPDATE project SET project_name=?",['lover']);
//         let t2 = (Date.parse((await allSync(db,"SELECT * from project",[]))[2].updated_at));
//         console.log((t2 - t1)/1000)



//     }catch(err) {
//         console.log(err)
//     }


//    db.close();
// }());
// (nbnb