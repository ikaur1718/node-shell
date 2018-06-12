
function displayPWD() { 
    let workingDirectory = process.cwd();
    process.stdout.write(workingDirectory);
    process.stdout.write('\nprompt > ');

}

module.exports = displayPWD