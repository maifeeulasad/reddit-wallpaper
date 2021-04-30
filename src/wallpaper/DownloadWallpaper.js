import * as fs from "fs";
import * as http from "http";
import * as https from "https";

const downloadWallpaper = (url, filePath) => {
    const file = fs.createWriteStream(filePath);
    if (url.includes("https")) {
        https.get(url, function (response) {
            response.pipe(file);
        });
    } else {
        http.get(url, function (response) {
            response.pipe(file);
        });
    }
}

export default {downloadWallpaper}