import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const runtimeConfig = useRuntimeConfig();

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login",
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "(hint: jsmith)",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "(hint: hunter2)",
        },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        /*       const res = await fetch("http://localhost:3000/api/authmock", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json(); */

        const url =
          runtimeConfig.KOHA_AUTH_URL +
          `?userid=${runtimeConfig.KOHA_USER}&password=${runtimeConfig.KOHA_PWD}&cardnumber=${credentials.username}&personalnumber=${credentials.password}`;
        console.log(url);
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "text/xml" },
        });
        const xml = await res.text();
        let user = null;
        if (xml.includes("true")) {
          user = {
            id: "1",
            name: credentials.username,
          };
        }
        if (user) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
});
