import { spider } from "./spider.js";
spider(process.argv[2], (err, filename, downloaded) => {
  if (err) {
    console.error(err);
  } else if (downloaded) {
    console.log(`completed the download of ${filename}`);
  } else {
    console.log(`the ${filename} was already downloaded`);
  }
});
