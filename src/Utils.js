/* 

const Utils = {
    getResizeUrl:()=>{


    },
} */

export const getResizedImg = (imgPath, size) => {
  if (imgPath) {
    return imgPath.replace("media/", `media/resize/${size}/-/`);
  }
  return imgPath;
  /*     if(imgPath.contains("screenshots"){
        imgPath = imgPath.replace();
        return imgPath.replace();
    } else {
        return 
    } 
     https://media.rawg.io/media/screenshots/201/2014b82a9d924aebdbc386930b640726.jpg
     https://media.rawg.io/media/resize/420/-/screenshots/201/2014b82a9d924aebdbc386930b640726.jpg
     https://media.rawg.io/media/resize/100/-/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg
     https://media.rawg.io/media/resize/420/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
    https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
    https://media.rawg.io/media/resize/420/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
*/
};
