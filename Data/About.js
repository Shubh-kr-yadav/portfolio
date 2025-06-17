let currDate = new Date();
let year = currDate.getFullYear() - 2001;
let month = currDate.getMonth() - 7;
let date = currDate.getDate() - 25;

const givenDate = new Date(2001, 7 - 1, 25);
const birthday = givenDate
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  .replace(/ /g, "-");

if (month < 0) year -= 1;
else if (month === 0) {
  if (date < 25) year -= 1;
}

const about = {
  name: "Shubham Kumar",
  about: "Full-Stack Developer, Designer",
  bio: "Full-Stack Developer and Creative Designer building seamless, user-focused digital solutions.",
  longBio:
    "A versatile Full-Stack Developer and Creative Designer with a passion for building scalable web applications and engaging user experiences.",
  birthday,
  city: "Jamui",
  age: year,
  degree: "MCA",
};

export default about;
