import {resize} from "./resize.mjs";
onmessage=async({data:{log,data,sourceWidth,sourceHeight,targetWidth,targetHeight,hq}})=>postMessage(resize(log,data,sourceWidth,sourceHeight,targetWidth,targetHeight,hq));
postMessage('ready');
