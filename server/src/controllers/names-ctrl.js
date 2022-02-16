module.exports = (namesService) => {
    return {
        getAll: async (req, res) => {
            const allTasks = await namesService.getAll();
            res.send({
                status: "OK",
                response: allTasks
            })
        },
        getMostPopular: async (req, res) => {
            const popularNames = await namesService.getMostPopular();
            res.send({
                status: "OK",
                response: popularNames
            })
        }
    }
}