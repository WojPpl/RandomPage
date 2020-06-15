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

export default randomContent