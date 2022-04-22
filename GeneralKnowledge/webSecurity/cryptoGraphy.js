//? Cryptography is a thing that base on math that makes the internet secure
// without it, there'll be no privacy/security
// In the past, there's ceaser cipher, now with the advance of tech...cryptography is always evolving
//* Don't have to know it all, but there are some essential key concepts need to know how it works.

//? 1. Hashing(Same input -> Same output, it's fast) | Same as culinary, it means chop and mix

const {createHash, scryptSync, randomBytes, timingSafeEqual, createHmac, createCipheriv, createDecipheriv, 
    generateKeyPairSync, privateDecrypt, privateEncrypt, publicEncrypt, createSign, createVerify} = require('crypto')

const hash = (input) => {
    return createHash('sha256').update(input).digest('hex'); //256-Bit Digest(Hashing function) -> update -> digest(output to the format we want)
}

const password1 = '1234567',
    hash1 = hash(password1),
    password2 = '1234567',
    hash2 = hash(password2)

console.log(hash1===hash2 ? 'good' : 'not good at all');

//? 2. Salt (Since hash always return same output, it causes problem something to like password as it's predictable)
// hacker could use rainbow table easily to figure out the predictable hash with pre-computed hashes and common password
//* Simply put, a salt is just a random value added to the password before it's being hash

let users = [];

const signUp = (email, password) => {
    const salt = randomBytes(16).toString('hex'),
    hashedPassword = scryptSync(password, salt, 64).toString('hex'), //makes it harder to crack with brute force
    user = {email, password: `${salt}:${hashedPassword}`}

    users = [...users, user]

    return user
}

const login = (email, password) => {
    const user = users.find(userResult => userResult.email === email),
        [salt, keys] = user.password.split(':'),
        hashedBuffer = scryptSync(password, salt, 64),
        keyBuffer = Buffer.from(keys, 'hex'),
        match = timingSafeEqual(hashedBuffer, keyBuffer) //prevent timing attack(hacker could measure amt of time to perform an operation)

    return match ? 'login success!' : 'login fail!'
}

console.log(signUp("hello", "12345678"))
console.log(login("hello", "12345667"))
console.log(login("hello", "12345678"))

//? 3 HMAC(Hash-based message authetication code) Similar to hash which also required a shared key
// E.g. fav JWT^^

const secretKey = 'simple-secret!',
    message = 'thismessagedoesnothaveanything',
    hmac = createHmac('sha256', secretKey).update(message).digest('hex'),
    secretKey2 = 'another-secret!',
    hmac2 = createHmac('sha256', secretKey2).update(message).digest('hex');

console.log(hmac, hmac2);

//? 4. Symmetric Encryption
//IV means Initialization Vector

//* Cipher is randomized =)

const messageSE = 'i like animals',
    key = randomBytes(32), //Allow encrypt/decrypt it with key
    iv = randomBytes(16), //prevent identical sequences of text
    cipher = createCipheriv('aes256', key, iv),
    encryptCipherMessage = cipher.update(messageSE, 'utf-8', 'hex') + cipher.final('hex'),
    decipher = createDecipheriv('aes256', key, iv),
    decryptedMessage = decipher.update(encryptCipherMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log(`Encrypt :${encryptCipherMessage} | Decrypt :${decryptedMessage}`);

//? 5. Keypairs(Think of it as mailbox, public is where you put in your mail, which private is opening up the mailbox)
// The above limitation is that both party uses same key
// Public key cryptosystem....both private key and public key are mathematically linked

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding:{
        type:'spki',
        format:'pem',
    },
    privateKeyEncoding:{
        type:'pkcs8',
        format:'pem', //Privacy enchanced mail
        // cipher:'aes-256-cbc',
        // passphrase: 'top-secret'
    }
})

console.log(`${publicKey} | ${privateKey}`)

//? 6. Asymmetric encryption
// Encrypt with public key then decrypt with private key

const messageAE = 'kyarun~~',
    encryptedData = publicEncrypt(
        publicKey,
        Buffer.from(messageAE)
    ), // think of it as drop in mailbox
    decryptedData = privateDecrypt(
        privateKey,
        encryptedData
    ); // think of it as unlock mailbox

console.log(encryptedData.toString('hex'))
console.log(decryptedData.toString('utf-8'))

//? 7. Signing (Validate that it comes from trusted party instead of encrypt data)

const messageSign = 'this damn data must be signed',
    signer = createSign('rsa-sha256').update(messageSign), 
    signature = signer.sign(privateKey, 'hex'), //Sign the hash with the message
    verifier = createVerify('rsa-sha256').update(messageSign),
    isVerified = verifier.verify(publicKey, signature, 'hex'); //if signature's being tapered/message change will throw error
 
console.log(isVerified)