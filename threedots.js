const ages = [14, 17, 16, 13, 18];
const ages2 = [16, 18, 20, 22];
const ages3 = [43, 36, 37, 29]
// const allAge = ages.concat(ages2);
const allAge = [...ages, ...ages2, 6, ...ages3];

// console.log(allAge);

const business = 650;
const minister = 450;
const sochib = 350;
const money = [750, 590, 630, 840, 920, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...money);
console.log(maximum);