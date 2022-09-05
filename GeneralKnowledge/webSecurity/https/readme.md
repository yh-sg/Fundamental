# HTTPS

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
- Protocol secures communications by using ***asymmetric public key infrastructure***. This type of security system uses two different keys to encrypt communications between two parties using ***CA(Certificate Authority)*** which is self-signed:
    1. The private key - Controlled by the owner of a website. This key lives on a web server and is used to decrypt information encrypted by the public key.
    2. The public key - Available to everyone who wants to interact with the server in secured manner. Information that’s encrypted by the public key can only be decrypted by the private key(Matching both private and public key)
- Client validates Server's Certificate in ***SSL/TLS Handshake*** that produces session keys which forms secure tunnel to protect communication.
### Secure Sockets Layer (SSL)
- Uses public key encryption to secure data
- Ask website to identify themselves by returning a copy of SSL certificate which authenticate the identity of website
- After identification, then allows exchange of encrypted data.

### Transport Layer Security (TLS)

- The latest industry standard of cryptographic protocol which is more updated and secure. Successor to SSL.

###### HTTPS is an implementation of TLS encryption on top of the HTTP protocols. Any website that uses HTTPS is therefore employing TLS encryption.

- Encryption: hides the data being transferred from third parties.
- Authentication: ensures that the parties exchanging information are who they claim to be.
- Integrity: verifies that the data has not been forged or tampered with.

#### TLS Handshake Basic steps((This example is one-way(server only) handshake, for ***two-way*** client also required to provide certificate)
1. TLS initiation - Telling server that it wants to establish secure communication between two, showing cipher suites and TLS version
2. Server confirmation of protocol - Telling client that is has checked and passes it's certification file together with public key, TLS version and cipher suite.
3. Certificate verification - Client will verify the certificate...after that it will verify private key and while doing it, it will generate and encrypt a pre-master(Shared secret key) with the server's public key.
4. Establish shared key(Session Keys) - Server will decrypt the pre-master with it's private key. They calculate a shared session key using pre-master secret and remembers it. Which sents in an encrypted form over the network.
5. Client Finished - Complete the TLS handshake by sending message to the server that is encrypted with the seesion key. The server decrypts and verifies it by checking if it's match or not.
6. Server Finished - Server will also do the same thing and client will decrypt, verify and proves to client that the server correctly calculated the session key.
7. Send secure data - Using symmetric encryption and the shared key.

###### HTTPS uses asymmetric encryption to establish the identity of the parties and to exchange a symmetric key. Afterwards, symmetric encryption is used since it's faster.

- Asymmetric encryption depends on two(private and public) keys. Encrypt with the public key ***(3)*** and decrypt it with the private key. ***(4)*** 
- In symmetric encryption, ***(7)*** the same session key is used to encrypt and decrypt the message. Unlike hashes, everytime the message is randomized to produce a different output.

---

## Links

[TLS - Computerphile](https://www.youtube.com/watch?v=0TLDTodL7Lc)