// let js = 'amazing';
// //console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// let first = "jonas";
// let firstNamePerson;
// let first_name_person
// console.log(firstName);
// console.log(firstName);
// // console.log(firstName);


// // variable name conevntions
// let PI = 3.1415;
// //better
// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';
// //worse
// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
//birthYear = 1990;

//MATH OPERATOR
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(now - 1991 > now - 2018);
//const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log(lastName);

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 do potęgi 3 co jest rowne 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';

// console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS

// let x = 10 + 5; //15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; x = x + 1;
// x--;
// x--;
// console.log(x);

//Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAage = ageSarah >= 18;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// markHigherBMI = (markBMI > johnBMI);

// console.log(markBMI, johnBMI, markHigherBMI);

// if(markBMI > johnBMI){
//     console.log(`mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})`)
// }

// const firstName = 'Jonas';
// const job ='teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonasNew);

// console.log(`just a regular string..`);
// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if(age >= 18)
// {
//     console.log(`Sara can start driving license 😊`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('23'- '10' - 3);

// let n = '1' + 1; // this is equal 11 because + triggers coercion
// n = n - 1;
// console.log(n);

// let n1 = '1' + 2 + '12';
// let n2 = '10' - '4' - '3' - 2 + '5';
// console.log(n1);
// console.log(n2);

// 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height = 158;

// if(height) {
//     console.log('YAY! height is defined');
// } else {
//     console.log("height is undefined");
// }

// const age = 18;
// if (age === 18) console.log('you just became an adult (strict)');


// if (age == 18) console.log('you just became an adult (loose)');

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23) { // 23 === 23
//     console.log(`cool! 23 is an amazing number`);
// } else if(favourite === 7) {
//     console.log(`7 is also a cool number`);
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('number is not 23 or 7');
// }

// if (favourite !== 23) console.log('why not 23?');

// const age = 16;

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('someone else should drive..')
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('someone else should drive..')
// }
// BONUS 0
// const avgDolphins = (96 + 108 + 98) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins won`);
// } else if (avgKoalas > avgDolphins){
//     console.log(`Koalas won`);
// } else if (avgDolphins === avgKoalas) {
//     console.log(`there is a draw`);
// }

//BONUS 1/2

// const avgDolphins = (97 + 112 + 80) / 3;
// const avgKoalas = (109 + 95 + 50) / 3;

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log(`Dolphins won`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100){
//     console.log(`Koalas won`);
// } else if (avgDolphins === avgKoalas && avgDolphins >=100 && avgKoalas >=100) {
//     console.log(`Both win trophy!`);
// } else {
//     console.log('no one wins the tropy :(')
// }


// const day = 'thursday';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// if(day === 'monday'){
//     console.log('plan course structure')
// } else if(day === 'tuesday'){
//     console.log('prepare theory videos');
// } else if(day === 'wednesday' || day === 'thursday'){
//     console.log('write code example');
// } else if (day === 'friday') {
//     console.log("record videos");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy weekend');
// } else {
//     console.log('Not a valid day');
// }

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// console.log(`I'm ${2037 - 1991} years old`);
