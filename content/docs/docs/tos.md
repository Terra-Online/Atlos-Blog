---
title: Terms of Service
description: Terms of Service for users of Open Endfield Map.
---

## Definitions and Background

- **This Project**: Refers to the [Open Endfield Map](https://opendfieldmap.org/) website and associated services developed and maintained by the developer team (including contributors such as [cirisus](https://github.com/cirisus), [mwx0621](https://github.com/mwx0621), and [502y](https://github.com/502y) within [OEM-1](https://github.com/orgs/Terra-Online/teams/oem-1)), aiming to provide users with functionalities including map viewing, marker analysis, progress tracking, and cloud synchronization based on in-game data.
- **Services**: Refers to the map display, route planning, user interaction, account system services, and data storage and progress tracking functionalities provided by this Project.
- **User**: Refers to any individual or organization accessing and/or utilizing this Project.
- **User Account**: Refers to the exclusive digital credentials registered and owned by a user to utilize advanced features of this Project (such as cloud data synchronization, cross-device access, etc.).

> **Note:** For detailed information regarding our data collection standards, Cookies usage, API guidelines, and content attributions, please refer to our separate [Privacy Policy](./privacy), [Cookie Policy](./cookie), [API Terms](./api-terms), and [Credits](./credits). Accepting these Terms of Service indicates that you acknowledge and agree to the aforementioned affiliated policies.

---

## Terms of Use and Code of Conduct

### Account Registration, Security, and Management

When registering and using an account, you must abide by the following rules:
1. **Information Authenticity and Third-Party Login**: You may register using an email address or log in quickly via supported third-party accounts (e.g., Google, Discord). You guarantee that the information provided is legal and valid.
2. **Account Security**: Users must properly safe-keep their account passwords and other login credentials. This project and the developer team bear no responsibility for account loss or data leakage caused by the user's own negligence.
3. **Third-Party Game Credentials (Skland/SKPORT) Authorization**: When using the "Locator Sync" feature, **you must exclusively provide the Skland or SKPORT account credentials legally owned by you**. It is strictly prohibited to misappropriate others' credentials for binding. Since this feature involves proxying official APIs, you must independently bear any official risk control or account banning risks that may arise (see below and the "Disclaimer" for details).
4. **Account Restrictions**: Accounts are limited to personal use by the registrant. Gifting, borrowing, renting, transferring, or selling accounts in any form is prohibited.
5. **Disposal Rights**: If an account is found to involve malicious registration, API abuse, or any behavior violating these terms, the developer team reserves the right to **freeze, ban, or permanently delete the account and its associated data** without prior notice.

### Access Permissions and General Restrictions

Users must observe the following constraints when accessing and using this Project:
1. Do not copy, modify, distribute, or otherwise abuse in-game resources (such as unauthorized usage in other commercial, profit-generating projects).
2. Do not utilize this Project's resources, interfaces, bandwidth, or account systems to conduct any form of commercial profit generation or illicit (gray/black market) activities.
3. Do not engage in behaviors that disrupt, reverse-engineer, or interfere with the normal operations of this Project (including, but not limited to, maliciously dispatching massive volumes of requests, DDoS attacks, or maliciously scraping map tiles and server interface data).
4. Do not utilize personal profiles, comments, or custom marker features to upload or publish any illegal, harmful, infringing, or offensive content (including, but not limited to, politically sensitive information, pornography, promotion of cheat tools, or the private data of others).
5. Users must ensure their conduct complies with local laws and regulations. Users under the legal age of majority must use this Project under the guidance of a legal guardian.

### User-Generated Content (UGC) and Feedback

1. **Content Authorization**: When you submit custom markers, third-person screenshots, comments, or correction suggestions on the map, you retain ownership of them. However, you simultaneously grant this project a free, global, and perpetual license to display and use them for map development.
2. **Compliance Review**: It is strictly forbidden to upload content that is illegal, harmful, pornographic, infringing, or contains sensitive privacy information of others. This project may use automated tools (such as the OpenAI Moderation API) to conduct compliance reviews of your public text.
3. **Dispute Disclaimer**: You bear full legal responsibility for all UGC you publish. For details, please carefully read our [UGC Content Statement](./ugc).
4. **Feedback Adoption**: Bug reports or improvement suggestions you submit to the team are deemed as your consent to grant the developer team free authorization to use them to improve this project.

### User Feedback and Content Maintenance

- Users may submit feedback, report issues, or offer suggestions via official channels (e.g., GitHub Issues, Discord, or the support email).
- All feedback is for the reference of the developer team only. Developers make no promises to respond to all feedback or to inevitably take action.
- The submission of feedback and suggestions by a user shall be deemed as consent to grant the developer team an irrevocable, royalty-free license to utilize said feedback for the improvement of this Project.

---

## Intellectual Property and Copyright Statement

### Game IP and Resource Ownership

- This Project is an unofficial, non-profit, open-source community initiative.
- All image resources (including but not limited to base maps, icons, UI elements, illustrations), text descriptions, audio, worldview settings, and datamined game data related to *Arknights: Endfield* utilized and displayed within this Project are used solely for the purpose of accurately reflecting corresponding in-game elements and enhancing the user experience. All copyrights, trademarks, and other intellectual property rights to the aforementioned content belong wholly to **[Shanghai Hypergryph Network Technology Co., Ltd. (Hypergryph)](https://www.hypergryph.com/)** and/or its affiliated companies (such as game service providers and copyright holders like [Gryphline](https://www.gryphline.com/en-us/home)).
- This Project harbors no intent to infringe upon any official rights. Unauthorized public disclosure, commercialization, or redistribution of the official art resources referenced on this website by any user is strictly prohibited.

### Open Source Code Licensing

- The program source code, UI design (non-native game portions), and frontend/backend architectural implementations independently authored by this Project are governed by the **AGPL v3.0** open-source license as declared in the GitHub repository.
- Code contributions submitted by users or contributors are licensed under AGPL v3.0 by default, allowing the developer team to utilize them for the continuous development and refinement of this Project.

### Takedown Requests

- Should the copyright owner (Hypergryph) determine that this Project's use of specific content exceeds the boundaries of Fair Use, or demand the takedown of specific undisclosed data, they may mandate the removal of relevant content via the official contact email. The developer team will comply unconditionally and process the request promptly.

---

## Data Storage and Privacy Protection

Data storage strategies are contingent upon the user's operational state.

### Storage Conditions While Logged Out

- For users who have not logged into an account, data such as personal preference settings, marker progress, and filter states are **stored entirely within the local storage of the user's current browser (Local Storage / IndexedDB)**.
- Under this mode, switching devices, changing browsers, or activating incognito modes **will not inherit your data**. We advise guest users to periodically utilize the "Export/Import Data" feature for local backups.

### Storage Conditions While Logged In

- For users who have registered and logged into an account, their progress data and application settings will be **encrypted, synchronized, and stored in our D1 database** to enable cross-device interoperability.
- **Location Sync and Heatmap Project**:
   - By default, Your real-time location only circulates temporarily in memory and is not recorded.
   - **Only when you explicitly authorize and enable the "Heatmap Project"** will we collect your historical movement trajectories. This trajectory will be **de-identified (anonymized)** before entering the database, stripping its association with your OEM account and game UID, and will be retained long-term purely as aggregated statistical data.
- The developer team pledges that collected data (such as account identifiers, encrypted passwords, and encrypted game progress data) is **used exclusively to provide the map synchronization service**.
- This Project **will not** sell, share, or leak your personal data and operational logs to any third-party commercial entities.

### Data Security and Disclaimer

- The developer team employs industry-standard cryptographic measures to safeguard database security. However, given that this is a non-profit open-source project, we cannot provide guarantees of enterprise-grade absolute security.
- **In the event of data leaks or loss caused by force majeure, malicious hacker attacks, or third-party service (e.g., cloud provider) failures, this Project and its developer team shall be exempt from legal and financial indemnification liabilities.**

---

## Disclaimer of Warranties

### Services Provided "As Is"
- This Project and its Services are provided on an "As Is" and "As Available" basis.
- The developer team makes no warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or stability of the service.

### Data Accuracy
- While the developer team endeavors to maintain accurate and updated data, due to game version iterations, official temporary hotfixes, or limitations in datamining, we do not guarantee the 100% accuracy, completeness, or timeliness of map markers, descriptions, routes, or information. This Project bears no responsibility for in-game decision-making errors resulting from map marker inaccuracies.

### Service Alteration and Termination
- This Project does not guarantee that the service will be uninterrupted, secure, or error-free.
- Due to server maintenance, cloud service provider fluctuations, CDN failures, or the **depletion of project funds**, the developer team reserves the right to modify, suspend, or permanently terminate any or all parts of the Services at any time without prior notice.

---

## Limitation of Liability

To the maximum extent permitted by applicable law, this Project and its developer team shall not be liable to the user for any direct, indirect, incidental, special, punitive, or consequential damages (including, but not limited to, data loss, emotional distress, or financial loss) arising from the following circumstances:
1. The use of or inability to use the various services of this Project (including account system anomalies);
2. Unauthorized access, tampering, or destruction of the user's cloud or local data;
3. Misguidance caused by discrepancies between this Project's coordinate data and actual in-game conditions;
4. Any damages resulting from third-party links or third-party service providers (such as login authorization platforms).

---

## Third-Party Services and Links

- The frontend and backend architecture and daily operations of this Project may rely upon third-party services (such as GitHub, Cloudflare, cloud providers like Alibaba Cloud/AWS, third-party OAuth authorization login platforms, etc.), and may concurrently contain external links directing to official game wikis or communities.
- These third-party services operate under independent privacy policies and terms of service. This Project assumes no direct or joint liability for their content, privacy practices, or service stability.

---

## Governing Law and Dispute Resolution

- The formation, execution, interpretation of these Terms of Service and any supplementary policies, as well as the resolution of any disputes arising therefrom, shall not be governed by any specific applicable law
- Any dispute arising from these Terms shall primarily be resolved through amicable negotiation based on the principle of good faith. Should negotiations fail, either party possesses the right to submit the dispute to a competent court located in the **jurisdiction of the principal members of the developer team or the server deployment location** for litigation.

---

## Modifications to Terms and Contact Information

As the project iterates and laws and regulations change, we may modify this statement at any time. Material changes will be notified through a prominent position on the website or via the associated email. Your continued use of the interactive and synchronization services of this project after the publication of such modifications shall be deemed as your acceptance of the revised terms.

If you have any questions regarding this statement, or need to consult regarding any content related to these Terms of Service, please contact us via the following methods:

* **Support and Compliance Team Email**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Project Open Source Code Repository**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord Player Community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)