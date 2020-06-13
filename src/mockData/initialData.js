const initialSectionsData = [
    {
        grid: 1,
        banner: true,
        heading: false,
        image: false,
        paragraph: false,
        button: false,
        link: false,
        headerIcons: false
    },
    {
        grid: 4,
        banner: false,
        heading: true,
        image: false,
        paragraph: true,
        button: true,
        link: false,
        headerIcons: false
    },
    {
        grid: 2,
        banner: false,
        heading: true,
        image: true,
        paragraph: false,
        button: false,
        link: true,
        headerIcons: true
    }
];

const contentData = {
    paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt dolor. Donec ac luctus enim, eu malesuada neque. Morbi bibendum nec mi non semper.",
    header: "Welcome page",
    image: "/images/image.jpg",
    banner: "images/banner.png",
    button: "Details",
    link: "Show more >>"
}

export { initialSectionsData , contentData };