import readline from 'node:readline/promises';

// console.log(readline);

const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name? ',(ans)=>{
//     console.log(`Hello ${ans}`);

//     rl.question('What is Hobby ?' ,(hobby)=>{
//         console.log(`${hobby} is a good hobby`);

//         rl.question('Whst Is your age ? ',(age)=>{
//             console.log(`You are ${age} years old`);
//             rl.close();
//         });
//     });
// });

const name = await rl.question('What is your name? ');

console.log(`Hello ${name}`);

const hobby = await rl.question('What is your hobby? ');
console.log(`Hello ${hobby}`);