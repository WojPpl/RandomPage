const initialSectionsData = [
    {
        id: 0,
        grid: 1,
        banner: true,
        heading: false,
        image: false,
        paragraph: false,
        button: false,
        link: false
    },
    {
        id: 1,
        grid: 4,
        banner: false,
        heading: true,
        image: false,
        paragraph: true,
        button: true,
        link: false
    },
    {
        id: 2,
        grid: 2,
        banner: false,
        heading: true,
        image: true,
        paragraph: false,
        button: false,
        link: true
    }
];

const contentData = [{
        paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt dolor. Donec ac luctus enim, eu malesuada neque. Morbi bibendum nec mi non semper.",
        header: "Welcome page",
        image: "/images/1.jpg",
        banner: "/banners/1.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ac sollicitudin magna.",
        header: "Our blog",
        image: "/images/2.jpg",
        banner: "/banners/2.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Praesent a consequat lacus. Aliquam erat volutpat. Pellentesque metus lorem, fringilla non mattis in, efficitur nec arcu.",
        header: "New games",
        image: "/images/3.jpg",
        banner: "/banners/3.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Proin tincidunt a risus nec pretium. Donec scelerisque tempor tincidunt. Sed consectetur mollis congue. ",
        header: "Competition",
        image: "/images/4.jpg",
        banner: "/banners/4.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Suspendisse rhoncus quam a pulvinar dapibus. Nam efficitur libero felis, et feugiat purus efficitur et. ",
        header: "Compare games",
        image: "/images/5.jpg",
        banner: "/banners/5.png",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Maecenas maximus, magna hendrerit gravida pharetra, elit risus aliquet eros, et convallis leo libero in felis.",
        header: "Ultimate",
        image: "/images/6.jpg",
        banner: "/banners/6.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Vestibulum luctus rhoncus nibh. Mauris in dapibus nisi. Nam lobortis lacus felis, nec sollicitudin felis imperdiet non.",
        header: "Graphic tests",
        image: "/images/7.jpg",
        banner: "/banners/7.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Curabitur mi mi, pellentesque at condimentum et, vehicula quis est. Curabitur malesuada arcu at lectus congue, ac venenatis sem mattis.",
        header: "Welcome page",
        image: "/images/8.jpg",
        banner: "/banners/8.png",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Integer viverra quam vitae enim feugiat, ut consectetur urna blandit. Praesent quis dolor eu eros pellentesque ullamcorper at eget risus.",
        header: "Prime of the Reach",
        image: "/images/9.jpg",
        banner: "/banners/9.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Nulla vitae varius leo, vitae blandit nunc. Nullam tempor pretium arcu a ornare.",
        header: "Grand Master of Hell",
        image: "/images/10.jpg",
        banner: "/banners/10.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "In pharetra quam ut ante fringilla, id posuere velit rutrum.",
        header: "Emperor of Nature",
        image: "/images/11.jpg",
        banner: "/banners/11.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Cras sit amet erat finibus est varius varius sit amet vitae purus.",
        header: "Chairman of Energy",
        image: "/images/12.jpg",
        banner: "/banners/12.png",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Aliquam blandit hendrerit ligula a aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        header: "Captain of Fish",
        image: "/images/13.jpg",
        banner: "/banners/13.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Duis nisi mauris, rhoncus vel magna quis, volutpat lobortis massa.",
        header: "Overlord of Aviation",
        image: "/images/14.jpg",
        banner: "/banners/14.jpg",
        button: "Details",
        link: "Show more >>"
    },
    {
        paragraphText: "Duis vel mollis dui. Fusce id orci est.",
        header: "Divine of the South",
        image: "/images/15.jpg",
        banner: "/banners/15.jpg",
        button: "Details",
        link: "Show more >>"
    }];


export { initialSectionsData , contentData };