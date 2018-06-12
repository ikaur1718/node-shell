process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();


  let workingDirectory = process.cwd();
  process.stdout.write(workingDirectory);

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

