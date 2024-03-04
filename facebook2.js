/* part 2 with for loop and other databases */
var database = [
  {
    username: 'Rituraj',
    password: 'Raj@2024',
  },
  {
    username: 'Monalisha',
    password: 'Moxn123',
  },
  {
    username: 'Krishnam',
    password: 'ParisHilton24',
  },
];

var newsfeed = [
  {
    username: 'Sally',
    timeline: 'Jesus can help!',
  },
  {
    username: 'Jyoti',
    timeline: 'Javascript being the most desirable language in 2024',
  },
  {
    username: 'Preetham',
    timeline: 'Making sure that what i do in life makes me good money',
  },
];

function SignIN(usernm, pwd) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === usernm && database[i].password === pwd) {
      console.log(newsfeed);
      break; // use of break here is necessary because it breaks the code to run more thimes than necessary wich helps in not returning the else part
    } else {
      alert('Something is not right kindly check username or password');
    }
  }
}
var usernamePrompt = prompt('Enter your username');
var passwordPrompt = prompt('Enter your Password');
SignIN(usernamePrompt, passwordPrompt);
