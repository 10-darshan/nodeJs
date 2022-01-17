const fs=require('fs');

const bio={
    name:'Darshan',
    age: 20,
    city: 'Almora'
};
console.log(bio);

const jsonBio=JSON.stringify(bio);
console.log(jsonBio);

const bio1=JSON.parse(jsonBio);
console.log(bio1);

fs.writeFile('./demo_write.json',jsonBio, function(err) {
    console.log("file created");
})

fs.readFile('./demo_write.json','utf-8',function(err,fileData) {
    console.log(fileData);
})