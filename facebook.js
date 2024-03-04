/* easy facebook exercise */
/* part 1 */
var database = [
  {
    username: 'Rituraj',
    password: 'Raj@2024',
  },
];

var timeline = [
  {
    username: 'Jyoti',
    timeline: 'Javascript being the most desirable language in 2024',
  },
  {
    username: 'Preetham',
    timeline: 'Making sure that what i do in life makes me good money',
  },
];

var usernamePrompt = prompt('Type your username');
var passwordPrompt = prompt('Type your password');

function facebookSignIn(usrnm, pwd) {
  if (usrnm === database[0].username && pwd === database[0].password) {
    console.log(timeline);
  } else {
    alert('something is wrong');
  }
}
facebookSignIn(usernamePrompt, passwordPrompt);
facebookSignIn(usernamePrompt, passwordPrompt);
