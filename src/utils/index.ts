//generate and return random prompt
import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver';

export const getRandomPrompt:any=(promt:string)=>{
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    return promt === randomPromt ? getRandomPrompt(promt):randomPromt
}

export const downloadImage = async (id:any, photo:any) => {
    FileSaver.saveAs(photo,`download-${id}.jpg`)
}