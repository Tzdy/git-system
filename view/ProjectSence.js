var inquirer = require('inquirer');
var ProjectController = require('../controller/ProjectController')

module.exports = async function () {
    while (1) {
        let projectController = new ProjectController;
        let choice = '';
        choice = await inquirer.prompt([
            {
                type: 'list',
                message: '项目管理>',
                name: 'choice',
                choices: [
                    '新建项目',
                    '删除项目',
                    '列出所有项目',
                    '项目更名',
                    '返回'
                ]
            }
        ])
        switch (choice.choice) {
            case '新建项目':
                console.clear();
                if (await projectController.createProject()) {
                    console.clear();
                    console.log("创建成功！");
                }
                break;

            case '删除项目':
                console.clear();
                await projectController.deleteProject();
                console.clear();
                break;
            case '列出所有项目':
                (await projectController.displayProject()).forEach(item => {
                    console.log(`~ ${item.name}   ${item.author}`);
                })
                break;
            case '项目更名':
                await projectController.updateProjectName();
                break;
        }
        if (choice.choice == '返回')
            break;
    }
}
