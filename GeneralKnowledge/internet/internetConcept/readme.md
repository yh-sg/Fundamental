# Internet

#### Some terminology to look out for....

- Network (Devices that are connected to each other....) whereas Internet (global network of networks communicate through a standardized set of protocols)
- Internet is just the network of the networks.
- Decentralization - Nobody owns/controls it.

---

## Domain Name System(DNS)
 - A domain name gets the IP address rather than you need to memorize address such as 111.111.111.111
 - First, when url is clicked. It will check DNS cache(aka DNS resolver cache which can be OS/browser/router) otherwise on internet it will check the 4 servers.
 - Recursive server - **(1)** DNS resolver which keeps on asking (***Iterative query***) starting from **(2)** root to **(3)** TLD to **(4)** Authoritative. Afterwards, it'll cache.
    1. A user types `example.com` into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.
    2. DNS Root Name Server(Index of all the servers that will have the information being queried.) 
    3. (Top level domain)TLD name server (.com) 
    4. Authoritative name server (google.com) 
    5. Get IP Address!! Cache it with common ones like browser/OS/Recursive Resolver. (Security issue -> Cache poisoning, placing false information in DNS cache)

- (wikipedia.org)domain name -> (en.wikipedia.org/zh.wikipedia.org/jp.wikipedia.org)subdomains

- 2 types of top level domain names.
    1. Generic top-level domains (TLDs) such as .com, .edu, .org, .gov --- Authority over these domains is usually delegated to private organizations.
    2. country-code top-level domains (ccTLDs) such as .sg .jp .io --- Administered by authorities in each country.

---

### URL(Uniform Resource Locator)

##### http://www.something.com:80/path/to/myfile.html?key1=value1&key2=value2#somewhereInTheDocument

- Scheme(http) -> ***Protocol*** (A set method for exchanging or transferring data around a computer network) that the browser must use to request the resource.
- Authority(www.something.com:80) -> www.something.com is the domain name | 80 is the port[Usually it's ommitted it using standard portocol 80(HTTP), 443(HTTPS)] to grant access to its resources. Otherwise, it's mandatory.
- Path to resource(/path/to/myfile.html)
- Parameters(?key1=value1&key2=value2) -> key/value pairs separated with the & symbol.
- Anchor(#somewhereInTheDocument) -> Anchor("bookmark") to another part of the resource(id). giving the browser the directions to kocat at that "bookmarked" spot

---

### IP(Internet protocol) address

 - IPv4(N.N.N.N where N is binary ranging 0-255 aka 32-bit(2^32) address) vs IPv6(X:X:X:X:X:X:X:X in hexadecimal whereas zeroes are omitted aka 128 bit address)
 - Dynamic IP addresses vs Static IP addresses

### Switch(Cannot use wireless technology, use access point(Big company/places) for wireless which gives Wi-Fi signal) 

- Allow computers in the same environment to communicate with each other with cables to lan ports...
- LAN (Local access network) connects devices within a restricted area

### Packet

- Data which were being chopped/divided into packets and being sent to other devices through the cables of the internet
- 2 parts -> 1) Header(Informations like source/destination/length of the packet) 2) Checksum value(Detect if a packet was damaged or not)

### Router

- Enable devices to connect to the internet. In home, it's connected with cable by ISP (Internet Service Provider) to ***modem(connects home network to internet)*** than to router(for wired/wireless devices)
- It has special table called the 'Routing table' to tell router which path should packet choose by looking at it's header destination(If path's not avaliable or too busy, choose another one)

### Wireless Access Point(sub-device)
- Internet -> Modem -> Router -> Wireless AP(Does not have WAN port while router have, thus it needs router)
- Theoritically, can just use wi-fi router but it's harder to manage. AP is much easier to manage.
- Does not have firewall and DHCP(Dynamic Host Configuration Protocol) service(assign different IP address to devices) compare to router

### Reliability

- Internet in simplified version is a structure have many router(distributed structure) connected with one another to communicate and connects all LANs in the world.
- If entire of the load is given to the single point, it's 'Single Point of Failure'
- Underwater cables that plays important part of the internet today(Intercontinental connections)
- Different servers to communicate around the world

### Wide Area Network(WAN)

- For companies which need to communicate as if it's like LAN(Same environment) from different places covers huge areas like cities/countries/continents, they need WAN with encapsulation+encryption
- Why? Because internet is a public network and everyone owns it. Hackers could tapered the packet on the internet easily as it could be seen or modified
- VPN provides tunneling feature(High-security end-to-end-encryption communication between two locations) to provide privacy, anonymity and security on the internet.

### Security protocols - Secure Sockets Layer(SSL) & TLS ***(Covers more on security)***

- The sercure lock signals that third parties won't be able to read any information was sent or receive. 
- Under the hood, SSL accomplishes that by transforming your data into a coded message that only the recipient knows how to decipher. 
- A third party will only see a random string of characters, not the actual contents of emails, credit card numbers, or other private information.

### Cloud

- By storing files on servers and delivering software over the internet, cloud computing provides users with a simpler, more reliable computing experience. 
- Cloud computing allows consumers and businesses to treat computing as a utility, leaving the technical details to technology companies.

### How does wireless internet work?

- Wifi networks uses electromagnetic frequencies that are available for devices to send and receive data.
- To prevent other networks from interfering with each other, there are strict limits on the power (and therefore the range) of wifi networks.
- Devices have a wireless adapter built into them. The wireless adapter is a component in the hardware referred to as a WiFi card. 
- The WiFi card picks up on the radio frequencies allowing the devices to connect to wireless internet.

### Internet Service Provider(ISP)

- Each ISP(Imagine inside, it have many routers) is responsible for specific routers. There are 3 types:
    - Local ISP (Think of it as connect neighbourhoods/small areas)
    - Regional ISP (Connect different cities within the same country)
    - Global ISP (Connects Different countries, it's the internet backbone with internet exchange point to work synchronously)

- Network of a Country => Local ISPs + Regional ISPs

- There's hierarchy for ISP communications, no local ISP is link to another. E.g. Local -> Regional -> Another Local
- There can be special cases where global ISP is connected to local but it has to be:
    1. Suitable location
    2. Extra cost to build an infrastructure to direct connection
- Each router in Regional will makes a choice, to determines which global isp the packet(can take different routes) will be sent. 
- Charge a certain fee for these services
- Point of presence(POP)/paths is an access point, or physical location at which two or more networks or communication devices share a connection
 - Acts like internet exchange points with routers, switches, servers, and other devices necessary for traffic to cross over networks are all present at PoPs

- Large companies want to communicate with customers in the fastest and most efficient way. Using:
    1. Distributed server
    2. Peering (Could connect almost direct connection with the users. Security will be better as due to direct connection, the packet passes through much less POP)

---

#### Some basic questions I would ask myself:

1. What is an IP address, a domain name and DNS?
2. How does the internet works as a whole?
3. Understanding of clients and servers, how they interact using request/response cycle?