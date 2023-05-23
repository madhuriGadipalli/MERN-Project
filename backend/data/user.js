import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    password: bcrypt.hashSync("Admin", 10),
    isAdmin: true,
    email: "admin@example.com",
  },
  {
    name: "Madhuri",
    password: bcrypt.hashSync("Madhuri", 10),
    isAdmin: false,
    email: "madhuri@example.com",
  },
  {
    name: "Moby",
    password: bcrypt.hashSync("Moby", 10),
    isAdmin: false,
    email: "moby@example.com",
  },
];

export default user;
