const crypto = require('crypto');

// object to be encrypted
const obj= {
    "name": "Darshan",
    "company": "Wipro"
};

// algorithm
const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data for init vector
const initVector = crypto.randomBytes(16);

// object converted to string
const message = JSON.stringify(obj);

// generate 32 bytes of random data for secret key 
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

// decrypt -

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

// convert string back to object 
decryptedData = JSON.parse(decryptedData);

console.log("Decrypted message: " + decryptedData.name + " " + decryptedData.company);