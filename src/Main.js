import CurrentOs from "./CheckOs";
import * as os from "os";
import * as fs from "fs";
import FetchWallpaper from "./wallpaper/FetchWallpaper"
import shelljs from "shelljs";

const start = () => {
    let path = os.homedir() + "/mua/reddit-wallpaper";
    let wallpaperPath = path+"/reddit_wallpaper.png";
    createDir(path)

    let currentOs = CurrentOs;
    if (currentOs === "linux") {
        let shellCommand = "gsettings set org.gnome.desktop.background picture-uri " + wallpaperPath
        shelljs.exec(shellCommand);
    }

    FetchWallpaper.fetchWallpaperPeriodic(wallpaperPath)
}

function createDir(path, recursive = true) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {
            recursive: recursive
        });
    }
}

export default {start}