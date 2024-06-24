export function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


// let colorsInObj = [];
// let hashes = true;

// generate.addEventListener('click', () => {
//     colorsInObj = [];
//     addColorsOnPage();
//     if (colorsInObj.length > 0) {
//         window.location.hash = colorsToUUIDString(colorsInObj);
//     }
// });


// const addColorsOnPage = () => {

//     const colorsFromPage = document.querySelectorAll('.main .color');
//     //console.log(colorsFromPage[0].textContent);

//     let hashColors = [];

//     if (window.location.hash.length > 24 && hashes) {
//         // console.log('ok');
//         hashColors = UUIDStringToColors(window.location.hash.slice(1));
//     } else {
//         hashes = false;
//     }
//     for (let i = 1; i < 6; i++) {
//         if (i === 1) {

//             if (lockStatus(oneItem)) {
//                 let randomColor = generateRandomColor();
//                 if (hashes) { randomColor = hashColors[0]; }
//                 colorsInObj.push(randomColor);
//                 itemColorate(randomColor, oneColorTitle, oneColor, oneColorBtns, oneItem);
//             } else {
//                 colorsInObj.push(colorsFromPage[0].textContent);
//             }
//         }

//         if (i === 2) {
//             if (lockStatus(twoItem)) { // if not locked
//                 let randomColor = generateRandomColor();
//                 if (hashes) { randomColor = hashColors[1]; }
//                 colorsInObj.push(randomColor);
//                 itemColorate(randomColor, twoColorTitle, twoColor, twoColorBtns, twoItem);
//             } else {
//                 colorsInObj.push(colorsFromPage[1].textContent);
//             }
//         }
//         if (i === 3) {
//             if (lockStatus(threeItem)) {
//                 let randomColor = generateRandomColor();
//                 if (hashes) { randomColor = hashColors[2]; }
//                 colorsInObj.push(randomColor);
//                 itemColorate(randomColor, threeColorTitle, threeColor, threeColorBtns, threeItem);
//             } else {
//                 colorsInObj.push(colorsFromPage[2].textContent);
//             }
//         }
//         if (i === 4) {
//             if (lockStatus(fourItem)) {
//                 let randomColor = generateRandomColor();
//                 if (hashes) { randomColor = hashColors[3]; }
//                 colorsInObj.push(randomColor);
//                 itemColorate(randomColor, fourColorTitle, fourColor, fourColorBtns, fourItem);
//             } else {
//                 colorsInObj.push(colorsFromPage[3].textContent);
//             }
//         }
//         if (i === 5) {
//             if (lockStatus(fiveItem)) {
//                 let randomColor = generateRandomColor();
//                 if (hashes) { randomColor = hashColors[4]; }
//                 colorsInObj.push(randomColor);
//                 itemColorate(randomColor, fiveColorTitle, fiveColor, fiveColorBtns, fiveItem);
//             } else {
//                 colorsInObj.push(colorsFromPage[4].textContent);
//             }
//         }
//     }

//     hashes = false;
// };