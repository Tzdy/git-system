const ProjectRepository = require('../model/Project');

const ProjectAttributeRepository = require('../model/Project_attribute');

class ProjectService{
    /**
     * 
     * @param {string} name - project name 
     * @param {string} author - project author
     * @returns {Promise<Model,boolean>} 
     */
    async create(name, author){
        let param = await ProjectRepository.findOrCreate({
            where:{
                name,author
            }
        })
        return param;
    }
    async deleteByName(name) {
        await ProjectRepository.destroy({
            where:{
                name
            }
        })
    }
    /**
     * @returns {Promise<Array<Model>>}
     */
    async list() {
        let param = await ProjectRepository.findAll();
        return param;
    }

    /**
     * 
     * @param {string} old_name 
     * @param {string} new_name 
     * @returns {Promise<Array<number>>} - 更新了第几行，如果数组中为0表示没有更新
     */
    async updateName(old_name, new_name) {
        let values = {
            name:new_name
        }
        let options = {
            where:{
                name:old_name
            }
        }
        let param = await ProjectRepository.update(values, options);
        return param;
    }
}
module.exports = ProjectService;