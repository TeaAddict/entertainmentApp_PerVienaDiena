export const getUsers = (req, res) => {
  res.json({ message: "Got all users!" });
};

export const getUser = (req, res) => {
  res.json({ message: "Got one user!" });
};

export const postUser = (req, res) => {
  res.json({ message: "Registered user!" });
};
