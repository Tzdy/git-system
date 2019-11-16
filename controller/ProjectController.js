var exec = require('child_process').execSync;
var fs = require('fs');
var shell_path = JSON.parse(fs.readFileSync('./shell/shell.json')).project_path;
var inquirer = require('inquirer');
var ProjectService = require('../service/ProjectService');
var public = require('../public/searcher')

class ProjectController {
    async createProject() {
        let projectService = new ProjectService;
        let message = await inquirer.prompt([
            {
                type: 'input',
                message: '新建项目>项目名称',
                name: 'name',
            },
            {
                type: 'input',
                message: '新建项目>项目作者',
                name: 'author',
            }
        ])

        if ((await projectService.create(message.name, message.author))[1]){
            exec(shell_path.create + ' ' +message.name);
            return true;
        }
        return false;

    }
    async deleteProject() {
        //间隔符号
        let projectService = new ProjectService;
        let all_message = await projectService.list();
        let choices = [];

        all_message.forEach(item => {
            choices.push({
                value: item.dataValues.name,
                name: `${item.dataValues.name}`,
            });
        })
        if (all_message.length == 0)
            choices.push(new inquirer.Separator(` = 项目为空 enter继续 = `))

        let message = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'message',
                message: '项目名称',
                choices,
            }
        ])

        message.message.forEach(async item => {
            await projectService.deleteByName(item);
            exec(shell_path.delete + ' ' + item);
        })
    }
    async displayProject() {
        let projectService = new ProjectService;
        let all_message = await projectService.list();
        return all_message
    }

    async updateProjectName() {
        let projectService = new ProjectService;
        let choices = [];
        let all_message = await projectService.list();

        all_message.forEach(item => {
            choices.push({
                value: item.dataValues.name,
                name: `${item.dataValues.name}`,
            });
        })
        //防止choices为空造成list类型inquirer抛出异常
        if(choices.length == 0)
            return;
        let message = await inquirer.prompt([
            {
                type: 'list',
                message: '请选择对象',
                name: 'message',
                choices
            }
        ])

        let input = await inquirer.prompt([
            {
                type:'input',
                message:'新名字>',
                name:'input'
            }
        ])

        await projectService.updateName(message.message, input.input);
        exec(shell_path.uptate + ' ' + message.message + ' ' + input.input);
        
    }

}
module.exports = ProjectController;