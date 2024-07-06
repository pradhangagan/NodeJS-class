const properCase = () => {
  const fName = "gagan";
  const lName = "pradhan";
  // Output "Gagan Pradhan"

  const firstName = fName
    .slice(0, 1) //r
    .toUppercase() //R
    .concat(fName.slice(1, fName.length)); //aktim
  console.log(firstName); //R+aktim=Raktim
};

const slugify = () => {};

const truncate = () => {};

module.exports = {
  properCase,
  truncate,
  slugify,
};
