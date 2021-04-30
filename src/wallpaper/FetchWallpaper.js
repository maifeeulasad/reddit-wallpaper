import axios from "axios";
import DownloadWallpaper from "./DownloadWallpaper";
import CValue from "../CValue";

const fetchWallpaper = () => {
    let url = "https://www.reddit.com/r/wallpaper/top.json"
    let backgroundImage
    return new Promise((resolve => {
        axios
            .get(url)
            .then((res)=>{
                let responseJson = JSON.parse(JSON.stringify(res.data)).data.children;
                let randomIndex = Math.random() * responseJson.length | 0;
                let randomImage = responseJson[randomIndex].data;
                backgroundImage = randomImage.url;
                resolve(backgroundImage)
            })
    }))
}

const fetchWallpaperPeriodic = (wallpaperPath) => {
    let wallpaperTimer = function wallpaperPeriodic(){
        fetchWallpaper()
            .then(res => {
                DownloadWallpaper.downloadWallpaper(res,wallpaperPath)
            })
        setTimeout( wallpaperPeriodic, CValue.wallpaperDownloadInterval );
    };
    wallpaperTimer();
}

export default {fetchWallpaper,fetchWallpaperPeriodic}