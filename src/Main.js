import CurrentOs from "./CheckOs";
import * as os from "os";
import * as fs from "fs";
import FetchWallpaper from "./wallpaper/FetchWallpaper"
import DownloadWallpaper from "./wallpaper/DownloadWallpaper"

const start = () => {
    let path = os.homedir() + "/mua/reddit-wallpaper";
    let wallpaperPath = path+"/reddit_wallpaper.png";
    createDir(path)

    FetchWallpaper
        .fetchWallpaper()
        .then(res => {
            DownloadWallpaper.downloadWallpaper(res,wallpaperPath)
        })

    let currentOs = CurrentOs;
    if (currentOs === "linux") {

    }
}

function createDir(path, recursive = true) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {
            recursive: recursive
        });
    }
}

export default {start}