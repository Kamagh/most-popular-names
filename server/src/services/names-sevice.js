module.exports = (namesDao) => {
    return {
        getAll: () => namesDao.getAll(),
        getMostPopular: () => namesDao.getMostPopular(),
    }
}