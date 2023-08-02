//generate and return random prompt
import { surpriseMePrompts } from "../constants";

export const getRandomPrompt:any=(promt:string)=>{
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    return promt === randomPromt ? getRandomPrompt(promt):randomPromt
}