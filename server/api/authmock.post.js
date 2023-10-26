export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  const credentials = await readBody(event);
  console.log(credentials);
  const username = credentials?.username;
  const password = credentials?.password;

  const user = {
    id: "1",
    name: "Johan Larsson (credentials)",
    username: "xljoha",
    password: "xljoha",
  };

  if (username === user.username && password === user.password) {
    // Any object returned will be saved in `user` property of the JWT
    return user;
  } else {
    // eslint-disable-next-line no-console
    console.error(
      "Warning: Malicious login attempt registered, bad credentials provided"
    );
    return null;
  }
});
