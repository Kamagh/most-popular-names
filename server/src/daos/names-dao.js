//data access object
const fs = require("fs/promises");

module.exports = () => {
    let fileData;
    const readFileData = async () => {
        if (!fileData) {
            fileData = JSON.parse(
                await fs.readFile("server/src/data/names.json", "utf-8")
            );
        }
        return fileData;
    }

    return {
        getAll: async () => {
            return readFileData();
        },
        getMostPopular: async () => {
            const names = {};
            const fileData = await readFileData();
            fileData.map((user) => {
                const name = user.full_name.split(" ")[0];

                !names.hasOwnProperty(name) ? names[name] = 1
                    : names[name]++;
            })
            const values = Object.values(names);
            const maxVal = Math.max(...values);
            Object.keys(names).forEach(key => {
                if (names[key] !== maxVal) delete names[key];
            })
            return names;
        },
        getMostPopularByCen: async () => {
            const fileData = await readFileData();
            const _20th = fileData.filter(user => user.age <= 2000 && user.age >= 1900);
            const _21th = fileData.filter(user => user.age >= 2000 && user.age <= 2100);
            console.log(this)

        }
    }
}