const fs = require("fs");
const {faker} = require("@faker-js/faker");
const path = require("path");

const users = [];

for(let i=0; i<100; i++){
    users.push({
        id: i,
        name:faker.internet.username(),
        points:faker.number.int({  min:100 , max: 1000  }),
        rank:i,
    })
}


users.sort((a,b)=> b.points - a.points);  // highest to lowest .

users.forEach((user,index)=>{
    user.rank = index+1;
})


const dir = path.join(__dirname,"data");
const filepath = path.join(dir,"user.json");
fs.writeFileSync(filepath, JSON.stringify(users,null,2));
console.log("Fake user data gen..");
