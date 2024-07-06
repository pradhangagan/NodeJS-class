const http = require("http");
/*
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //calculate your machine ram using os
    const myRam = os.totalmem();
    const fRam = os.freemem();
    const gbRam = myRam / (1024 * 1024 * 1024);
    const fGbram = fRam / (1024 * 1024 * 1024);
    res.end(
      JSON.stringify({
        data: `${gbRam.toFixed(2)} GB & ${fGbram.toFixed(2)} GB`,
      })
    );
  })
  .listen(3000);
  */

/* read file
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFileSync("file.txt", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);
*/

/*create new file .write file
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.writeFileSync(
      "test.txt",
      "Hello content! This is what i have written.i will add more",
      (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    );
  })
  .listen(3000);
*/

//module
//const textManipulator = require(""./string");
//const { properCase, slugify, truncate } = require("./string.js");

//events
/*
const events = require("events");
const eventEmitter = new events.EventEmitter();

const sayHi = () => {
  console.log("Hello");
};

//create a new Event +Listen
eventEmitter.on("scream", sayHi);

//fire
eventEmitter.emit("scream");
*/

/*
const item = {
  name: "tshirt",
  price: 100,
};

const events = require("events");
const eventEmitter = new events.EventEmitter();

const doCheckout = (pro) => {
  let calc = pro + 0.13 * pro;
  console.log(calc);
};

//create a new Event +Listen
eventEmitter.on("checkout", (pro) => {
  doCheckout(pro);
});

//fire
eventEmitter.emit("checkout", item.price);
*/

/*
const product = {
    name: "Tshirt",
    price: 100,
  };
  
  const events = require("events");
  const eventEmitter = new events.EventEmitter();
  
  const calculateVat = (cart) => {
    const totalAmount = 0.13 * cart.price + cart.price;
    console.log(`The total price is ${totalAmount}`);
  };
  
  //create a new event+listen
  eventEmitter.on("checkout", (item) => {
    calculateVat(item);
  });
  
  //fire
  eventEmitter.emit("checkout", product);

  */

const properCase = require("proper-upper-case");
const convert = (text) => {
  return properCase(text);
};

const result = convert("janak STHA");
console.log(result);

//slugify(slug generate)
//lodash(truncate)
//bcryptjs(password encrypt => hello output $@@33)
//bcryptjs(password verify => hello output $@@33)
//nodemailer

//slugify
const slugify = require("slugify");
const convert1 = (text) => {
  return slugify(text);
};
const result1 = convert1("heloo its a test for slugify");
console.log(result1);

//lodash
const lodash = require("lodash");
const convert2 = (text) => {
  return lodash.truncate(text);
};
const result2 = convert2(
  "hello i am going to check truncate function of lodash"
);
console.log(result2);

//bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;
const encryptPw = (text) => bcrypt.hashSync(text, saltRounds);
const verifyPw = (hashText, text) => bcrypt.compareSync(text, hashText);
const hashPw = encryptPw("Password");
const isValidPw = verifyPw("Password", hashPw);
console.log({ isValidPw });

/* 
// for bcrypt

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Corrected encryptPw function to return the hash
const encryptPw = (text) => {
  return bcrypt.hashSync(text, saltRounds);
};

// Corrected verifyPw function to take two arguments
const verifyPw = (hashText, text) => {
  return bcrypt.compareSync(text, hashText);
};

const hashPw = encryptPw("Password");
const isValidPw = verifyPw(hashPw, "Password"); // Corrected argument order
console.log({ isValidPw });
*/

const nodemailer = require("nodemailer");
require("dotenv").config();
//transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PW,
  },
});

transporter.verify((err) => {
  if (err) console.log(err);
  console.log("email is working");
});

const sendEmail = async ({ email, subject, message, attachments }) => {
  const info = await transporter.sendMail({
    from: `"Gagan Pradhan 👻" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: message, // html body
    attachments,
  });
  return info;
};

sendEmail({
  email: "gurunganjila27@gmail.com,chiragkuinkel3@gmail.com",
  subject: "k xa seucy tmro halkhabar?",
  message: "chiya khana niskiney ho ta aailey??",
  attachments: [
    {
      filename: "file.txt",
      path: "./file.txt",
      cid: "void",
    },
  ],
});
