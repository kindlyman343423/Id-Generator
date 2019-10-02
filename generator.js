const uuidv4 = require('uuid/v4');

let TOTAL_ID_GENERATION = 1;

if(process.argv.length > 2)
{
    TOTAL_ID_GENERATION = parseInt(process.argv[2]);
}

let randomId = "";
let Uuids = [];
let regex = /-/g;

for(let i=0;i<TOTAL_ID_GENERATION;i++)
{
    randomId = uuidv4();
    randomId = randomId.replace(regex,'');
    Uuids.push(randomId);
}

console.log(Uuids);