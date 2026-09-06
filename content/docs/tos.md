---
title: Terms of Use
description: Terms governing use of Open Endfield Map.
---

## Definitions and background

- **Project**: The [Open Endfield Map](https://opendfieldmap.org/) website and related services developed and maintained by the development team, including contributors in [OEM-1](https://github.com/orgs/Terra-Online/teams/oem-1) such as [cirisus](https://github.com/cirisus), [mwx0621](https://github.com/mwx0621), and [502y](https://github.com/502y). The project provides map viewing, point analysis, progress tracking, cloud synchronization, and related functions based on in-game data.
- **Service**: The current or future map display, point browsing, progress recording and synchronization, image upload, comments and community interactions, route planning, account system, live location, and related functions provided by the project.
- **User**: Any individual or organization that accesses and/or uses the project.
- **User account**: A unique digital credential registered and held by a user for advanced features such as cloud synchronization and cross-device access.

> **Note:** For detailed privacy and data-collection standards, cookie use, API rules, and content attribution, see the [Privacy Policy](./privacy), [Cookie and Local Storage Policy](./cookie), [API Terms of Use](./api-terms), and [Content Credits](./credits). By accepting these Terms, you acknowledge and agree to those supplemental policies.

---

## Terms of use and conduct

### Account registration, security, and management

When registering and using an account, you must follow these rules:
1. **Accurate information and third-party sign-in**: You may register with email or sign in with a supported Google, Discord, or GitHub account. You represent that the information you provide is lawful and valid.
2. **Account security**: You must safeguard your password and other sign-in credentials. The project and development team are not responsible for account loss or data disclosure caused by your failure to protect them.
3. **Third-party game credentials (Skland/SKPORT)**: When using live location synchronization, **you must provide credentials only for a Skland or SKPORT account that you lawfully own**. Binding another person's credentials is prohibited. Because this feature uses a proxy to official interfaces, you assume any resulting risk of official security controls or account bans. See the [Disclaimer](./disclaimer).
4. **Account restrictions**: An account may be used only by its registrant and must not be gifted, loaned, rented, transferred, or sold.
5. **Enforcement authority**: If an account is used for malicious registration, API abuse, or any violation of these Terms, the development team may **freeze, ban, or permanently delete the account and associated data**. Before banning an account, the project will send a warning or notice to the user through `moderation@opendfieldmap.org`.
6. **Notice and appeal**: Users have the right to receive a warning or notice from the project through `moderation@opendfieldmap.org` before a ban, and may appeal a specific enforcement action through that address. Appeals are assessed strictly against the specific conduct, records, and applicable terms; the project does not guarantee acceptance, a response, reversal, or any change to the original action.

### Permission to use and general restrictions

When accessing and using the project, you must:
1. Not copy, modify, distribute, or otherwise misuse in-game resources, including by using them in another commercial project without authorization.
2. Not use project resources, interfaces, bandwidth, or the account system for commercial profit or unlawful activity.
3. Not damage, reverse-engineer, or interfere with normal project operation, including by sending malicious request volumes, conducting DDoS attacks, or scraping map tiles or server-interface data.
4. Not use profiles, point images, comments, replies, votes, or reporting features to upload, publish, or manipulate unlawful, harmful, infringing, fraudulent, or offensive material.
5. Ensure that your conduct complies with local law. Users below the legal age must use the project under guardian supervision.

### User-generated content (UGC) and feedback

1. **Content license**: When you submit point images, comments, replies, or corrections, you retain rights that you lawfully hold in original content and grant the project the license necessary to provide, moderate, translate, display, and maintain the service.
2. **Compliance review**: You must not upload unlawful, harmful, sexual, infringing, or privacy-invasive material. The project may use the OpenAI Moderation API for both images and text and may conduct human review where necessary.
3. **Responsibility for disputes**: You are legally responsible for the UGC that you publish. Read the [UGC Statement](./ugc) for details.
4. **Use of suggestions**: By submitting a bug report or improvement suggestion to the team, you authorize the development team to use it without charge to improve the project.

### User feedback and content maintenance

- Users may submit feedback, problem reports, or suggestions through official channels such as GitHub Issues, Discord, or the support email address.
- Feedback is provided for the development team's consideration. Developers do not promise to answer every submission or take any particular action.
- By submitting feedback or a suggestion, you grant the development team a free, irrevocable license to use it to improve the project.

---

## Intellectual property and copyright

### Game IP and resources

- This is an unofficial, non-commercial, open-source community project.
- All images, text, icons, audio, base maps, and unpacked game data related to Arknights: Endfield are used only to represent corresponding game elements and improve user experience. Their copyright and intellectual-property rights belong entirely to **[Shanghai Hypergryph Network Technology Co., Ltd.](https://www.hypergryph.com/)** and/or its affiliates, including game-service providers and rightsholders such as [Gryphline](https://www.gryphline.com/en-us/home).
- The project does not intend to infringe official rights. Users must not publicly redistribute official resources referenced by this website without authorization.

### Open-source code license

- Source code, non-game-native UI implementation, and frontend and backend architecture written by the project are distributed under the **GNU Affero General Public License v3.0 (AGPL v3.0)** identified in the GitHub repository.
- Code submitted by a user or contributor is licensed under AGPL v3.0 by default and may be used by the development team for continued project development and improvement.

### Removal requests

- If a rightsholder, including Hypergryph, believes that use of content exceeds fair use or requests removal of specific unpublished data, it may contact us through the official email address. The development team will cooperate and address the request promptly.

---

## Data storage and privacy

Storage behavior depends on whether the user is signed in.

### Storage while signed out

- A signed-out user's completed-point status, map view, filter state, and UI preferences are stored in the current browser.
- Changing devices or browsers, clearing site data, or using private browsing will generally not preserve these states. Map resources and public content must still be loaded over the network and may produce baseline security logs.

### Storage after sign-in

- After registration and sign-in, cloud synchronization covers only **completed-point progress**. Theme, language, layers, filter order, map view, and other UI preferences remain in browser storage.
- Point progress, accounts, sessions, game-character bindings, and UGC metadata are persisted in Cloudflare D1. Point images are stored in `Cloudflare R2`. `Durable Objects`, `Workers KV`, `Cache API`, and `Upstash Redis` support synchronization coordination, public-content caching, rate limiting, and other operational needs.
- Live location is processed only in requests, WebSocket connections, and short-lived memory caches. The current implementation does not collect or persist movement history.
- If a movement-based heat-map program is offered in the future, we will collect the required data only after your separate and explicit authorization and will update our privacy notices before enabling it. Data retained for long-term aggregates will be disassociated from the OEM account and game UID.
- Game-character authorization credentials are stored with AES-GCM encryption until you unbind the character. Account passwords are stored as one-way hashes.
- The project does not sell or rent your personal data. It transfers necessary data to service providers or makes other disclosures only to provide the relevant function, fulfill legal duties, or protect service security within the scope described in the [Privacy Policy](./privacy).

### Data security and disclaimer

- The development team uses industry-standard encryption measures to protect the database. As a non-commercial open-source project, however, we cannot promise absolute enterprise-level security.
- **To the maximum extent permitted by applicable law, the project and development team are not liable for legal or financial damages resulting from data disclosure or loss caused by force majeure, malicious attack, or failure of a third-party service such as a cloud provider.**

---

## Disclaimers

### Service provided as-is
- The project and service are provided "as is" and "as available."
- The development team makes no express or implied warranties, including warranties of merchantability, fitness for a particular purpose, non-infringement, and service stability.

### Data accuracy
- We try to keep data accurate and current, but game releases, emergency hotfixes, and limits in unpacked data mean that map points, descriptions, routes, and other information may not be completely accurate, complete, or timely. The project is not responsible for game decisions based on incorrect map markings.

### Service changes and termination
- We do not guarantee that the service will be uninterrupted, secure, or error-free.
- The development team may modify, suspend, or permanently discontinue some or all services without prior notice because of maintenance, cloud-provider disruption, CDN failure, or **lack of project funding**.

---

## Limitation of liability

To the maximum extent permitted by applicable law, the project and development team are not liable for direct, indirect, incidental, special, punitive, or consequential damages, including data loss, distress, or financial loss, arising from:
1. Use of or inability to use any project service, including account-system failures;
2. Unauthorized access to, alteration of, or destruction of a user's cloud or local data;
3. Project point data that differs from the game and misleads the user;
4. Third-party links or services, including identity providers.

---

## Third-party services and links

- The project depends on services including `Cloudflare`, `Upstash`, `OpenAI`, `Google Cloud`, `Resend`, and third-party OAuth identity providers, and may link to official game websites or communities.
- These third-party services have independent privacy policies and terms. The project is not directly or jointly responsible for their content, privacy practices, or availability.

---

## Governing law and dispute resolution

- These Terms and supplemental policies do not designate the law of a particular jurisdiction to govern their formation, performance, interpretation, or disputes.
- The parties should first try in good faith to resolve disputes arising from these Terms through amicable discussion. If no resolution is reached, either party may bring proceedings in a court with jurisdiction where a principal development-team member is located or where the server is deployed.

---

## Changes and contact

We may update this notice as the project and applicable law evolve. Material changes will be announced prominently on the website or through an associated email address. Continuing to use interactive or synchronization services after an update is published constitutes acceptance of the revised Terms.

For questions about these Terms, contact:

* **Support and compliance**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Content moderation and ban appeals**: [moderation@opendfieldmap.org](mailto:moderation@opendfieldmap.org)
* **Project source code**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
