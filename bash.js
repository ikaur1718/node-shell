const displayPWD = require('./pwd');
const displayFS = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
if (cmd === 'pwd') {
  displayPWD();
} else if (cmd === 'ls') {
  displayFS();
}

  

  // process.stdout.write('You typed: ' + cmd);
});

