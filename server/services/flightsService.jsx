import fs from 'fs';

const flightsService = {
  getList() {
    return new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/../../data.json`, 'utf8', (readError, content) => {
        if (readError) {
          reject(readError);
        }

        const data = JSON.parse(content);
        resolve(data.flights);
      });
    });
  },
};
export default flightsService;
