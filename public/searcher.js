let Searcher = {
    /**
     * 
     * @param {Array<Model>} array 
     * @param {string} name - 模糊搜索,可以少字不能错字
     */
    searchName(array, name) {
        let arr = [];
        function filterFun(val) {
            if(val.dataValues.includes(name, 0)){
                return val;
            }
        }
        return array.filter(filterFun);
    }
}

module.exports = Searcher;