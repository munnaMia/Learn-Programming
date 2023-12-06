const nameArray = [
  "Md munna mia",
  "Rony ahamed shawon",
  "Joshna begum",
  "Md monsur alam",
  "Tarif razi",
  "Rima",
  "Anas",
  "Kazi",
  "Asif",
  "Cumilla",
  "Dhaka",
  "Sopna",
  "Md munna mia",
  "Rony ahamed shawon",
  "Joshna begum",
  "Md monsur alam",
  "Tarif razi",
  "Rima",
  "Anas",
  "Kazi",
  "Asif",
  "Cumilla",
  "Dhaka",
  "Sopna",
  "Md munna mia",
  "Rony ahamed shawon",
  "Joshna begum",
  "Md monsur alam",
  "Tarif razi",
  "Rima",
  "Anas",
  "Kazi",
  "Asif",
  "Cumilla",
  "Dhaka",
  "Sopna",
];

const namesGrouped = nameArray.reduce((acu, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acu) {
    acu[firstLetter].push(cur);
  } else {
    acu[firstLetter] = [cur]; //array notation that mean we just create an new key;
  }
  return acu;
}, {});

console.log(namesGrouped);

// {
//     M: [
//       'Md munna mia',
//       'Md monsur alam',
//       'Md munna mia',
//       'Md monsur alam',
//       'Md munna mia',
//       'Md monsur alam'
//     ],
//     R: [
//       'Rony ahamed shawon',
//       'Rima',
//       'Rony ahamed shawon',
//       'Rima',
//       'Rony ahamed shawon',
//       'Rima'
//     ],
//     J: [ 'Joshna begum', 'Joshna begum', 'Joshna begum' ],
//     T: [ 'Tarif razi', 'Tarif razi', 'Tarif razi' ],
//     A: [ 'Anas', 'Asif', 'Anas', 'Asif', 'Anas', 'Asif' ],
//     K: [ 'Kazi', 'Kazi', 'Kazi' ],
//     C: [ 'Cumilla', 'Cumilla', 'Cumilla' ],
//     D: [ 'Dhaka', 'Dhaka', 'Dhaka' ],
//     S: [ 'Sopna', 'Sopna', 'Sopna' ]
//   }

Object.keys(namesGrouped).forEach((group) => {
    console.log('======', group, '======')
    namesGrouped[group].forEach(values => console.log(values))
    console.log("\n")
})
