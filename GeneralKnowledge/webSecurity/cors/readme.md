## Same-Origin Policy (SOP)

- To understand CORS, one is required to first understand the existance of SOP.
- Browsers implemented SOP to protect cookies that are stored by browser to be exploited by malicious websites.
- Stored brower cookie can be used to make purchases/delete, fetch sensitive data etc...
- How they did it?? Webpage’s HTML may have small Javascript script which makes an AJAX request to make wire transaction to another account since session is still authenticated with the cookie that was stored earlier.
- To prevent response from readable, same-origin policy was implemented as a security mechanism to protect user(server-side) from a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

---

# CORS

- Mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.
- It's a behavior that is not an error, but rather a security mechanism.
- XMLHttpRequest and fetch follow the same-origin policy, thus, web app using APIs can only request HTTP resources from the same origin the application was accessed, unless the response from server of the other origin includes the correct CORS headers.
- When occurs, check for access-control-allow-origin in response header, if missing it required to enable CORS on the server.

##### Access-Control-Allow-Origin -> Response (Tells browser to use what!) 
- The whitelisted origin or ‘*’
- Needs to match the origin of request headers


###### Problem with The Wildcard?

- Obviously, it allows any site (including malicious phishing sites) can actually make a request to that resource as it doesn't filter origin...=(
- Browsers don't allow to set the `access-control-allow-credentials` header if the `access-control-allow-origins` is set to a wildcard. Which ultimately lead to the next bad idea that someone had: Sending authentication token as a custom header – completely exposing user data to any malicious code.

---

## Pre-Flight aka Sanity Check

- Non-standard headers like PUT, PATCH, DELETE
- Access-Control-Allow-Methods which allows whatever methods required.
- Preflight caching using access-control-max-age e.g. 86400

---

## Links
[What is CORS and good practices](https://www.stackhawk.com/blog/what-is-cors/)