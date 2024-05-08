export const authFields = [
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
  },
  {
    label: "Username",
    name: "username",
    type: "text",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
];


