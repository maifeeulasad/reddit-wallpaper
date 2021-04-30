import axios from "axios";
import CValue from "../CValue";
import DownloadWallpaper from "./DownloadWallpaper";

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
    function functionFetchTem() {
        fetchWallpaper().then((res)=>{
            DownloadWallpaper.downloadWallpaper(res,wallpaperPath)
        })
    }
    setInterval(functionFetchTem, CValue.wallpaperDownloadInterval());
}

export default {fetchWallpaper,fetchWallpaperPeriodic}