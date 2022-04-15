# Https

---

## What is HTTPS?

- Secure version of HTTP(Protocol to send data)
- Encryption for data transfer for sensitive data
- Modern web browsers/login credentials should use HTTPS

### Why HTTPS?

- Prevent intruders from tampering with the communications between websites and users browsers. Malicious attackers or legitimate but intrusive companies, such as ISPs can inject ads into pages. It eliminates the ability of third parties to inject advertising into web.
- Unprotected communications allow intruders to exploit and trick your into giving up sensitive information, installing malware, or to insert advertisements. Which potentially break user experiences and create security vulnerabilities.
- Intruders exploit every unprotected resource(Images, cookies, scripts, HTML…) that travels between your websites and your users. Intrusions can occur at any point in the network.
- Every unprotected HTTP request can potentially reveal information about the behaviors and identities of users. 

### How does it works?

- Using encryption protocol TLS to encrypt communications(HTTP protocol), formaly known as SSL
- Protocol secures communications by using ***asymmetric public key infrastructure***. This type of security system uses two different keys to encrypt communications between two parties:
    1. The private key - Controlled by the owner of a website. This key lives on a web server and is used to decrypt information encrypted by the public key.
    2. The public key - Available to everyone who wants to interact with the server in secured manner. Information that’s encrypted by the public key can only be decrypted by the private key.

---

## Transport Layer Protocols (TLP)

#### Transport Layer Security (TLS)

HTTPS is an implementation of TLS encryption on top of the HTTP protocols. Any website that uses HTTPS is therefore employing TLS encryption.

TLS does:
- Encryption: hides the data being transferred from third parties.
- Authentication: ensures that the parties exchanging information are who they claim to be.
- Integrity: verifies that the data has not been forged or tampered with.

#### TCP(Connection-oriented transport) and UDP(Connectionless transport)

[Differences 1](https://www.geeksforgeeks.org/differences-between-tcp-and-udp/)    
[Differences 2](https://www.lifesize.com/en/blog/tcp-vs-udp/#:~:text=TCP%20is%20a%20connection%2Doriented,is%20only%20possible%20with%20TCP)  

---

