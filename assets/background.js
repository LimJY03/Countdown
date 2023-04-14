let i = 0;
const minute = .5;

const imageUrls = [
    './images/cover-image-2.jpg',
    './images/cover-image-3.jpg',
    '../images/cover-image-4.jpg',,
    '../images/cover-image-5.jpg',
    './images/cover-image-1.jpg',
];
const backgroundStyleArr = [
    'linear-gradient(135deg, rgba(27, 11, 21, 0.8), rgba(3, 14, 51, 0.8))',
    'linear-gradient(225deg, rgba(27, 21, 11, 0.8), rgba(6, 3, 51, 0.8))',
    'linear-gradient(315deg, rgba(27, 11, 11, 0.8), rgba(3, 20, 51, 0.8))',
    'linear-gradient(45deg, rgba(49, 18, 18, 0.8), rgba(2, 31, 7, 0.8))',
    'linear-gradient(45deg, rgba(20, 11, 27, 0.8), rgba(51, 3, 48, 0.8))',
];
const popColorArr = [
    'rgb(250, 202, 222)',
    'rgb(250, 221, 202)',
    'rgb(202, 211, 250)',
    'rgb(211, 230, 204)',
    'rgb(232, 202, 250)',
];
const popColorSubtitleArr = [
    'rgb(167, 142, 161)',
    'rgb(167, 152, 142)',
    'rgb(142, 154, 167)',
    'rgb(151, 158, 151)',
    'rgb(158, 142, 167)',
];

imageUrls.forEach((imgUrl) => new Image().src = imgUrl);

window.setInterval(() => {
    
    if (i == backgroundStyleArr.length) i = 0;

    document.body.style.backgroundImage = `${backgroundStyleArr[i]}, url(${imageUrls[i]})`;
    document.documentElement.style.setProperty('--color-pop', popColorArr[i]);
    document.documentElement.style.setProperty('--color-pop-subtitle', popColorArr[i]);
    i++;

}, minute * 60 * 1_000);