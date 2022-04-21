# Content Security Policy (CSP)

- Added layer of security to detect and mitigate attacks such as data injection attacks and cross-site scripting (XSS).
- To enable CSP, web server requires to return the `Content-Security-Policy HTTP` header. Alternatively, the ***meta*** element can be used to configure a policy.

```<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">```
- HTTP header could be use to specify `Content-Security-Policy-Report-Only` to report any violations and to enabling reporting to specify the `report-uri` to provide at least one URI where to deliver the reports.
- With this policy defined, the browser simply throws an error instead of loading script from any other source.
###### Why CDN? Some attacks bypass SOP by tricking a site to deliver malicious code like XSS. Browser trusts the source of the content and XSS exploit the trust of content received from the server.

e.g. Wants all content to come from the site's own origin, restrict only allow audio or video media to trusted providers, but not JavaScript or other potentially dangerous content etc...

---

# Open Web Application Security Project (OWASP)

[Top10](https://sucuri.net/guides/owasp-top-10-security-vulnerabilities-2020/)
[CheckList](https://github.com/0xRadi/OWASP-Web-Checklist)
###### Common ones - SQL injection(1=1) / XSS (InnerHTML/img onError)