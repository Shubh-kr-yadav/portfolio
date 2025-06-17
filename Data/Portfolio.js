// Filters
const Crypto_Trading_Simulator = "filter-Trade";
const Virtual_Assistant = "filter-Assistant";
const To_Do_List = "filter-List";

const filters = [Crypto_Trading_Simulator, Virtual_Assistant, To_Do_List];

const generateFilterString = (...fils) => {
  return Array.from(fils).join(" ");
};

// URL Types
const Link = "Click Here";

// Category Types
const cat_types = {
  [Crypto_Trading_Simulator]: "Web App",
  [Virtual_Assistant]: "Web App",
  [To_Do_List]: "Web App",
};

// Projects
const projects = [
  {
    name: "Crypto Trading",
    filter: generateFilterString(),
    img: "project-1",
    desc: [
      "A passionate Full-Stack Developer and Creative Designer with experience in crypto trading, building secure, user-friendly blockchain apps and platforms.",
    ],
    urls: [[[Link], "https://local.host/3000/"]],
  },
  {
    name: "Virtual Assistant",
    filter: generateFilterString(),
    img: "project-2",
    desc: [
      "A reliable and efficient virtual assistant skilled in managing schedules, handling communication, organizing data, and supporting business operations remotely.",
    ],
    urls: [[[Link], "https://local.host/3000/"]],
  },
  {
    name: "To Do List",
    filter: generateFilterString(),
    img: "project-3",
    desc: [
      "A reliable and efficient virtual assistant skilled in managing schedules, handling communication, organizing data, and supporting business operations remotely.",
    ],
    urls: [[[Link], "https://local.host/3000/"]],
  },
];

// Get Details
const getDetails = (id) => {
  if (!id || id < 0 || id >= projects.length) return projects[0];

  const pr = projects[id];
  let fils_ = pr.filter.split(" ");
  let cats_ = [];
  fils_.forEach((el) => {
    cats_ = [...cats_, cat_types[el]];
  });
  let cat = cats_.join(", ");
  pr["category"] = cat;

  return pr;
};

export default { filters, projects, getDetails };
