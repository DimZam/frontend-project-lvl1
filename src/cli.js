import readlineSync from 'readline-sync';

const greeting = () => {
const userName = readlineSync.question('Your answer: ');

console.log('Hello, ' + userName + '!');
}

export default greeting;
