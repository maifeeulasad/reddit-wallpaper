import axios from "axios";

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

export default {fetchWallpaper}