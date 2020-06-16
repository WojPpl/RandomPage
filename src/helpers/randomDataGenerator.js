import {initialSectionsData} from "../mockData/initialData";

const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
}

const randomContent = (data, type) => {
    let randomIndex = randomInt(0, 14);
    switch (type) {
        case 'paragraph':
            return data[randomIndex].paragraphText
        case 'header':
            return data[randomIndex].header
        case 'image':
            return data[randomIndex].image
        case 'banner':
            return data[randomIndex].banner
        case 'button':
            return data[randomIndex].button
        case 'link':
            return data[randomIndex].link
        default:
            console.log(`Sorry, we are out of data.`);
    }
}

const randomGrid = () => {
   return randomInt(1, 8);
}

const randomBool = () => {
    let randomNumber = randomInt(0, 5);
    return randomNumber<=2 ? false : true
}

const randomAll = (sections, fonts, colors, monoColors) => {
    let sectionData = [];
    sections.map((section, index) => {
        sectionData.push({
            id: index,
            grid: randomGrid(),
            banner: randomBool(),
            heading: randomBool(),
            image: randomBool(),
            paragraph: randomBool(),
            button: randomBool(),
            link: randomBool()
        })
    });

    let returnData = {
        currentFont: fonts[randomInt(0, 18)],
        headerSize: randomInt(14, 42),
        paragraphSize: randomInt(8, 22),
        activeColor: colors[randomInt(0, 14)],
        fontColor: monoColors[randomInt(0, 14)],
        sectionData: sectionData
    };
    return returnData
}


export {randomContent, randomAll}