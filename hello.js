const { exec } = require('child_process');

const command = 'node /home/prem/Desktop/Typescript/uu.js';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
