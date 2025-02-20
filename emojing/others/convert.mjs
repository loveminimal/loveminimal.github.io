// 转换成 Rime 输入法中 opencc 中所需要的 jk_emoji.txt

import fs from "node:fs";
import {
    inbox,
    smileys,
    gestures_and_body_parts,
    people_and_fantasy,
    clothing_and_accessories,
    pale,
    cream_white,
    brown,
    dark_brown,
    black,
    animals_nature,
    food_drink,
    activity_and_sports,
    travel_places,
    objects,
    symbols,
    unicode_symbols,
    flags,
    dao,
} from "../assets/data.js";

const EMOJIS_ARR = [
    inbox,
    smileys,
    objects,
    animals_nature,
    food_drink,
    travel_places,
    symbols,
    unicode_symbols,
    dao,
    flags,
    activity_and_sports,
    clothing_and_accessories,
    gestures_and_body_parts,
    people_and_fantasy,
    pale,
    cream_white,
    brown,
    dark_brown,
    black,
];

// EMOJIS_ARR.map((item) => {
//     // console.log(`${item.title_zh}\t${item.value}`);
//     let data = `${item.title_zh}\t${item.value}\n`;
//     appendFile('jk_emoji.txt', data, 'utf8', error => {})
    
// });

let filePath = 'jk_emoji.txt'


if (fs.existsSync(filePath)) {
    console.log('文件存在！');
    fs.unlinkSync(filePath);
  } else {
    console.log('文件不存在！');
  }

for(let i = 0; i < EMOJIS_ARR.length; i++) {
    let item = EMOJIS_ARR[i];
    let data = `${item.title_zh}\t${item.value}\n`;
    fs.appendFile(filePath, data, 'utf8', error => {})
}
