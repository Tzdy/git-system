const ProjectAttributeRepository = require('../model/Project_attribute');

class ProjectAttributeService{
    async increace() {
        let arr = (await ProjectAttributeRepository.findAll());
        let count = arr.length == 0?0:arr[0].dataValues.project_amount;

        await ProjectAttributeRepository.upsert({
            project_amount:count + 1
        })
    }

    async decrease() {
        
    }



}