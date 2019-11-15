// const ProjectService = require('../service/ProjectService');
var inquirer = require('inquirer');
(async function(){
    
    
    // const projectService = new ProjectService;
    // console.log("创建",await projectService.create('git', 'ydy'));
    // await projectService.deleteByName('git');
   
    // let date = new Date((await projectService.list())[0].dataValues.updated_at);
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // console.log((await projectService.updateName('git-book', 'git')))

    app = await inquirer.prompt([
        {
            type:'checkbox',
            message:'abc',
            name:'app',
            choices:[
                new inquirer.Separator(' = The Meats = '),
                'a','b',new inquirer.Separator(' = The Meats = '),
                'dv'
            ]
        }
    ])
    console.log(app)
}())


