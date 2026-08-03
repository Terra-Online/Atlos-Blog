---
title: API Terms of Use
description: Terms for using the Open Endfield Map API.
---

Welcome to the application programming interface (API) provided by **Open Endfield Map** ("we," "the project," "OEM," or "us"). By accessing, integrating, or otherwise using the OEM API, you ("developer" or "you") acknowledge that you have read and understood these API Terms of Use ("Terms") and agree to be legally bound by them. If you do not agree to any part of these Terms, stop accessing and using the API immediately.

---

## API scope and stability

1. **Public interfaces**: Only endpoints and fields expressly published by OEM as public developer interfaces are available for third-party integration. Account, progress, game-character binding, upload, moderation, and administration endpoints used by the map client do not become public APIs merely because they can be observed in a browser.
2. **Authenticated interfaces**: Interfaces requiring a signed-in session, Bearer token, or other user credential may be used only with the relevant user's affirmative authorization and through the intended product flow. You must not reuse or relay session cookies or game authorization tokens, or induce users to disclose such sensitive credentials.
3. **Possible changes**: Interfaces, response fields, rate limits, and cache policies without a stability commitment may be changed, migrated, or discontinued as the client and backend evolve. Third-party applications must handle errors and version changes themselves.

---

## Accounts and access credentials
1. **Credential security**: If OEM assigns you an API key or access token, you must keep it strictly confidential. You must not share, sell, transfer, or otherwise disclose your API credentials to any third party.
2. **Responsibility for credentials**: You are responsible for all activity conducted with your API credentials. If you suspect disclosure or unauthorized use, you must notify us promptly.

---

## Permitted use
You may access the OEM API for personal, educational, and non-commercial purposes. We encourage developers to build derivative tools that add meaningful new value to OEM data, such as game route planners, resource calculators, data-analysis tools, and Discord or QQ bots. Your application must provide end users with **additional value** beyond the official OEM platform.

---

## Prohibited use
When using the OEM API, you must not:
1. **Commercialize it in any form**: You must not use the OEM API or its data to generate direct or indirect revenue, including through advertising, paid subscriptions or paywalls, mandatory sponsorships or donations, or sale of an application. Commercial use requires prior written permission from the OEM team.
2. **Create a mirror, copy, or substitute**: You must not use the API to reproduce, display, or redistribute OEM's map content and interface substantially as-is. You must not build a wrapper or copy intended to replace OEM or divert traffic from its official website.
3. **Bulk scrape or resell datasets**: You must not download, scrape, or extract foundational API data at scale, including complete coordinate sets or catalog text, and package it as an independent offline dataset or redistribute it through your own API.
4. **Abuse or disrupt the service**: You must not use the API in a way that could damage, overload, or impair OEM's servers or networks, including through DDoS attacks or exploitation of vulnerabilities to inject malicious code.

---

## Rate limits and caching
1. **Observe rate limits**: You must comply with rate limits specified in API response headers or official documentation. Circumventing limits through IP rotation, forged User-Agent values, or similar means is prohibited.
2. **Cache reasonably**: To protect server resources, your application should implement reasonable local caching and avoid frequent repeated requests for static or rarely changing data.

---

## Intellectual property and branding
1. **Ownership of rights**: Game resources, original OEM content, and community UGC obtained through the API remain subject to the rights of their respective rightsholders, OEM, contributors, or submitters. API access transfers no rights and does not broaden any license to use that content.
2. **Brand boundaries**: Without prior written consent, you must not use "Open Endfield Map," its logo, or a confusingly similar name in your application name, logo, or domain. You must not imply that your application is an official OEM product or has OEM's endorsement.

---

## Attribution
If you build a public service with the API, you must provide clear attribution in a prominent part of the interface, such as the footer or About page, with an active link to OEM's official website.
*Example: "Terrain and coordinate data for this application is powered by [Open Endfield Map](https://opendfieldmap.org/)."*

---

## Privacy and user data
If your application processes end-user personal information, you must provide a lawful and compliant privacy policy. You must not use the OEM API to collect, reverse-engineer, or obtain another OEM user's private information or account data.

---

## Termination and revocation
OEM may limit, suspend, or permanently terminate your API access at any time and for any reason, including a reasonable belief that you have violated these Terms. We may take such action without prior notice and without liability to you or any third party.

---

## Disclaimer
The API and all related data are provided **"as is"** and **"as available."** OEM disclaims all express or implied warranties, including warranties of merchantability, fitness for a particular purpose, data accuracy, non-infringement, and uninterrupted service.

---

## Limitation of liability and indemnity
1. **Limitation of liability**: To the maximum extent permitted by applicable law, OEM and its contributors are not liable for direct, indirect, incidental, special, or punitive damages arising from your use of or inability to use the API, including loss of data or profits.
2. **Indemnity**: You agree to indemnify and hold OEM harmless from claims, proceedings, or demands, including reasonable legal fees, arising from your breach of these Terms, misuse of the API, or infringement of third-party rights by your application.

---

## Changes and contact

We may update these Terms as the project and applicable law evolve. Material changes will be announced prominently on the website or through an associated email address. Continuing to use the API after updated Terms are published constitutes acceptance of those changes.

For questions about these Terms, technical support, or commercial authorization, contact us through:

* **Support and compliance**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Project source code**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
