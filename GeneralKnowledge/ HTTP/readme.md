# What is HTTP?

- HTTP (Hypertext Transfer Protocol) is the foundation of the World Wide Web, and is used to load web pages using hypertext links(fetching resources).
- The flow a **request** to a server, which then sends a **response**. (Client <-> Server | ***request-response protocol***)

## HTTP request

- It is a way that how the internet communicate where the web browsers ask information that's needed to load a website.

- HTTP request contains:
    - HTTP version type to communicate with
    - URL
    - HTTP method
    - HTTP request headers
    - Optional HTTP body

What’s an HTTP method?
- HTTP verb(It indicates the action that the HTTP request expects from the queried server) - GET/POST/PUT(Entire content replacement)/PATCH(Partial Modification)/DELETE

What are HTTP request headers?
- Text information stored in key-value pairs
- Communicate core information such as what browser the client is using what data is being requested.
- Example:
    ```{Authorization: BASIC Z3Vlc3Q6Z3Vlc3QxMjM=, Cookie: name=value,  Allow: GET, HEAD, PUT, Accept: text/plain, Content-type: application/json  etc...}```

What’s in an HTTP request body?
- Body of an HTTP request contains any information being submitted to the web server like form data.

## HTTP response

- Web clients (often browsers) receive from server in answer to an HTTP request. 

HTTP response contains:
1. An HTTP status code
2. HTTP response headers
3. Optional HTTP body

What’s an HTTP status code?
- 3-digit codes most often used to indicate whether an HTTP request has been successfully completed. Status codes are broken into the following 5 blocks:
    - 1xx Informational
    - 2xx Success
    - 3xx Redirection
    - 4xx Client Error
    - 5xx Server Error

What are HTTP response headers?
- Convey important information such as the language and format of the data being sent in the response body.
- Example:
    ```{date: Thu, 21 Mar 2000 12:00:00 GMT, status: 200, content-type: text/html ,etc.....}```

What’s in an HTTP response body?
- In most web requests, this is HTML data which a web browser will translate into a web page.

What's a Protocol?
- A protocol is a system of rules that define how data is exchanged within or between computers. Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.

What is HTTPS? ***More will be covered on web security***
- HTTPS(Hypertext Transfer Protocol sercure)
- Data sent is encrypted (Secure Socket Layer[SSL]/Transport Layer Security[TLS])
- Install certificate on web host

---

## URL

What happen when a website is being clicked? e.g. https://en.wikipedia.org/wiki/The_Lord_of_the_Rings 
Let's break it(URL) down!
1. Scheme (https://) -> Tells browser to make a connection with TLS which encryptes the data... others like ftp://, mailto://, or file://. These are other protocols that browsers know how to handle.
2. Domain (en.wikipedia.org) -> Domain name of the site. It is the memorable address which points to a specific server’s IP address.
3. Path (/wiki) -> is the path on the server to the requested resource... think of it as directory structure of files and other directories on computer. It’s a way to organize resources regardless of static or dynamic files.
4. Resource (/The_Lord_of_the_Rings) -> name of the resource on the website you want to view

- Browser looks up and get DNS record with the IP address to find the server on the internet and establish a connection.
- DNS data is cached at different layers between your browser and at various places across the Internet. Starting from ISP(internet service provider) to recursive DNS lookup which ask multiple DNS servers around internet until DNS record is found.
- Browser initiates TCP connection with the server sending packets through the routers using TCP(Transmission control protocol) to find server with IP address

- Whole Cycle
    1. Click on URL
    2. Browser looks up IP address for the domain
    3. Browser initiates TCP connection with the server
    4. Browser sends the HTTP request to the server
    5. Server processes request and sends back a response
    6. Browser renders the content

## CDN

- Nowadays, content delivery network(CDN) is more popular as it cache static and dynamic content closer to the browser.
- A CDN is a globally distributed network of caching servers that improve the performance of your site or app.
- E.G. AWS CloudFront which is part of the AWS global network.
- Requests from the client browser get to take advantage of this private network that has ultra-low latency and high availability.
- Instead of relying on the public internet routing infrastructure and being subject to extra hops, redeliveries, and packet loss, the client browser request gets to take a ride on the AWS global network. The request is intelligently routed through the most performant location to deliver content to your browser.
- Once the browser finds the server on the Internet, it establishes a TCP connection with the server and if HTTPS is being used, a TLS handshake takes place to secure the communication. 

# Extras

---

## Bandwidth (Maximum amount(How much) of data transmitted over an internet connection in a given amount of time)

1. Bandwidth vs latency(internet speed)
    - Latency refers to delay/ping rate in milliseconds. Amount of time for data to travel between source and destination.
    - Bandwidth is amount of data can be transferred per second

2. Throughput
    - How much data can actually gets delivered in a certain amount of time....taking latency, netword speed, packet loss and other factors into account.

3. Analogy
    - Think bandwidth as motorway, 1 lane only can take 1 car but 5 lanes could take 5 cars(5 Mbps). But it doesn't mean that internet is any faster compare from 1 Mbps to 5 Mbps.

##### Nutshell

- Internet bandwidth is about how much data can be download or uploaded from your computer, while internet speed is how fast can the data be uploaded or downloaded on your computer.

- Transport Layer responsibilities(TCP vs UDP)

## Proxy server

- Intermediate program or computer used when navigating through different networks of the Internet.
- 2 types of proxies
    1. Forward proxy that handles requests from and to anywhere on the Internet.
    2. Reverse proxy taking requests from the Internet and forwarding them to servers in an internal network.

- Act as:
    1. caching (the cache can be public or private, like the browser cache)
    2. filtering (like an antivirus scan or parental controls)
    3. load balancing (to allow multiple servers to serve different requests)
    4. authentication (to control access to different resources)
    5. logging (allowing the storage of historical information)

---

### Some basic questions I would ask myself:

    1. What is HTTP?
    2. What are HTTP Request Methods and what does each do? 
    3. What are HTTP Request Messages? 3... 
    4. What are the Status Code? 1xx, 2xx, 3xx, 4xx, 5xx....
    5. What is HTTP Response?
    6. What is HTTPS? Difference between HTTP?
    7. What happen when an url was clicked?
    8. Why POST instead of GET? [HttpMethod](https://www.w3schools.com/tags/ref_httpmethods.asp)