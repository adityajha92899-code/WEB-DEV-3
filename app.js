//const cities = require('./data/data.js');
//console.log(cities);
//const fs = require('fs');
//fs.writeFileSync("text.txt", "This is a text file created using Node.js");//to read ,create , update and delete files importing fs module
        //const path = require('path');
       // const filename = path.join(__dirname, 'text.txt');
  //console.log(filename);
// const os = require('os');
// const userinfo = os.userInfo();
// const freememmory = os.freemem();
// const totalmemmory = os.totalmem();
// const uptime = os.uptime();
// console.log(userinfo);
// console.log(`Free Memory: ${freememmory}`);
// console.log(`Total Memory: ${totalmemmory}`);        
// console.log("Uptime:", uptime);
//-----------------------------------------------------------------------------------------
//chalk k bare m install kiya h chalk
// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red('This is an error message.'));
// console.log(chalk.green('Success!'));
// console.log(chalk.yellow('Warning!'));// common js m chalk working nhi h y sirf v 6 modules m chalengi
// common js m chalk working nhi h y sirf vS6 modules m chalengi 

// day 2 
// crypto module is uswd for security 
//crypto for password 
//dns k barre m it converts domain names into ip adress 
//process object 
//env are supar global data to access env variables

const process = require('process');
//console.log(process.argv[2]);
//command line s humesha string m jaega data agr terminal m number type krega to bhi string m jaega
//index 2 p milegi 
//dot env karengfe it act as a bridge to join process and env file
//structural digram 
//process->dotenv->env file
require('dotenv').config();
console.log(process.env.PORT);