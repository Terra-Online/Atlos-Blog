---
title: Privacy Policy
description: Privacy Policy of Open Endfield Map.
---

## Introduction and Effective Terms

Welcome to **Open Endfield Map** (hereinafter referred to as "we", "this Project", or "OEM"). We are fully aware of the importance of personal privacy and data security to you, and we are committed to protecting your personal information to the highest standards. This *Privacy Policy* aims to clearly and transparently explain how we collect, use, store, share, and protect your personal data when you access and use the services of this Project, while defining the management rights you possess over such data.

**Please read this policy carefully. By accessing or using the services of this Project, you signify that you have read, understood, and agreed to the data processing practices described within this Privacy Policy.**

> **Note**: This Project adopts a "Local-First" design. By default and in an unregistered/logged-out state, all your usage data is **stored exclusively in your local browser**, and we will not actively collect, upload, or analyze core interaction data.
> 
> For a comprehensive overview of the data we collect, please refer to the [Personal Data Collection and Usage Checklist](./personal-info-checklist).

---

## Information We Collect and Methods of Collection

To provide you with secure, stable map services and interactive features, we solely collect the following types of information within a strictly necessary scope:

### Information You Proactively Provide

When you elect to use specific advanced features of this Project (such as content contribution, account synchronization, **location tracking**), we may require you to provide the following information:
* **Account Information**: Upon registering an account, we will collect your username, email address, and cryptographically hashed password credentials to create your user profile.
* **Third-Party Game Service Credentials (Skland Authorization)**: When you actively enable advanced features like "Real-time Location Sync", we require you to provide your Skland account identity credentials (e.g., `cred` or `token`). This credential is used exclusively to make **read-only requests** to official APIs to obtain real-time coordinates. We strictly define permission boundaries and **will never read your in-game assets, gacha records, or perform any unauthorized or tampering operations.** This data is strictly encrypted; you can unbind it at any time in your personal settings, and the data will be destroyed immediately upon unbinding.
* **User-Generated Content (UGC)**: When you proactively submit map markers, correction suggestions, edit records, or post comments, we will collect the aforementioned content data alongside associated account identifiers.
* **Communication Records**: When you contact us via email or GitHub Issues for support or to report problems, we will retain the relevant communication records.

### Telemetry and Operational Data We Automatically Collect

When you access this Project’s website, our servers and security mechanisms automatically record certain technical data to ensure service availability and security:

* **Network Log Data**: This includes your partial or full IP address, browser type and version, operating system, referring URL, accessed page paths, and timestamps.
* **Device and Session Information**: Identifiers used to maintain login status, language preferences, and basic performance monitoring.
* **Core Progress Data**: Including your map browsing progress and marker status, for the purpose of maintaining synchronization across devices and environments.

### Local Storage Data (Not Collected by Us)

* **Local Database**: Your custom preferences, filters, and other non-core data are stored locally on your device via `LocalStorage` or `IndexedDB` by default. **This data remains entirely under your control. Unless you actively enable cloud synchronization, we do not have access to it.**

---

## Third-Party Services and Data Flow

To deliver efficient and secure globalized services, this Project integrates certain third-party infrastructure and API services. These services may process minor portions of your data as Data Processors and are governed by their respective privacy policies:

| Third-Party Service Provider | Processed Data | Service Purpose | Description |
| :--- | :--- | :--- | :--- |
| **Cloudflare** | IP addresses, basic network request characteristics, encrypted account and progress data. | Global CDN acceleration, DDoS protection, Worker edge computing, and D1 database. | Used to protect the website from malicious attacks, accelerate content delivery, and achieve cross-platform persistent data storage. |
| **OpenAI (Moderation API)** | Public text content submitted by you (e.g., comments, marker descriptions) and marker screenshots. | Automated compliance and security moderation of user-generated content. | Used solely to ascertain whether content contains illicit/malicious information. Under OpenAI's API policy, such data **will not** be used to train their AI models. |
| **Upstash** | Hashed IP identifiers, temporary session tokens, and temporary coordinate circulation. | Serverless Redis caching and API request rate limiting. | Used to prevent interface abuse and safeguard the stability of backend services. |
| **Google (OAuth)** | Third-party unique identifier (UID), email address, public user avatar, and nickname. | Provides quick third-party registration, login, and account association for Google accounts. | Used solely for identity verification and simplifying the login process. We cannot access and will absolutely not access your Google account password or other private data. |
| **Discord (OAuth)** | Third-party unique identifier (Discord ID), email address, public user avatar, and nickname. | Provides quick third-party registration, login, and account association for Discord accounts. | Used solely for identity verification and convenient login. We cannot and will not send messages on Discord or access your private communications on your behalf. |

---

## How We Use Your Information

We process your personal data based on the following legitimate purposes and legal bases:

1. **Providing and Maintaining Services** (*Performance of a Contract*): Processing your account, credential, and content data to actualize core functionalities such as cross-device data synchronization, real-time coordinate fetching, and the display of map edits and marker uploads.
2. **Security and Content Moderation** (*Legitimate Interests*): Utilizing automated tools (e.g., OpenAI Moderation) and manual measures to review content, preventing the spread of spam, malicious scripts, or illegal material.
3. **Performance Optimization and Analytics** (*Legitimate Interests*): Analyzing de-identified log data to comprehend user access trends, thereby optimizing map loading speeds and system architecture.
4. **Service Notifications** (*Performance of a Contract*): Sending necessary transactional or security-related notifications to your email, such as password reset emails and account status change alerts.

---

## Data Storage, Security, and Retention Periods

### Data Security Protection Measures
We have implemented physical, technical, and administrative measures compliant with industry standards to protect your data. These include, but are not limited to:
* All data transmissions mandatorily utilize modern TLS/HTTPS encryption protocols.
* Passwords undergo one-way cryptographic hashing using robust algorithms (e.g., bcrypt/Argon2); no entity (including project maintainers) can retrieve your plaintext password.
* Strict database access privilege controls.

### Data Retention Periods
* **Account Data**: Provided your account remains active, we will retain your registration information and cloud-synchronized data indefinitely.
* **Third-Party Credential Data**: Retained only while actively bound by you; destroyed immediately upon unbinding.
* **Log and Telemetry Data**: Server access logs and security interception logs are typically automatically overwritten on a rolling basis or permanently deleted within 30 days of generation.
* **Content Contributions**: Due to the wiki/crowdsourced nature of the map project, public modifications or marker records you submit may coexist with the project to preserve the historical versioning of the map's evolution. Even if you terminate your account, such contributed content may be retained in an anonymized or archived format.

---

## Cookies and Similar Technologies

This Project strictly limits the abuse of Cookies, utilizing such technologies only under necessary circumstances:

* **Strictly Necessary Cookies**: Used to maintain your login session and defend against Cross-Site Request Forgery (CSRF) attacks.
* **Functional Local Storage**: We prioritize the use of HTML5 Web Storage (`LocalStorage` / `IndexedDB`) to save your UI preferences, map view zoom levels, and local markers.
* **Management Choices**: You may clear or disable Cookies and local storage at any time via your browser settings. Please note that disabling these features may compel you to reconfigure preferences or render you unable to use features like account synchronization. For more details, please see our [Cookie Policy](./cookie).

---

## Data Sharing and Disclosure

We pledge that we will **never sell or rent your personal data to any third party**. We only share data under the following exceedingly limited circumstances:

1. **Compliance with Service Providers**: Based on the "principle of minimum necessity", we share data required to sustain service operations with trusted third-party infrastructure mentioned in Section 3 of this policy.
2. **Legal Compliance and Mandatory Demands**: When we hold a good-faith belief that doing so is necessary to comply with applicable laws, regulations, valid subpoenas, court orders, or other legal processes.
3. **Protection of Legitimate Rights and Interests**: To investigate, prevent, or address potential security threats, fraudulent activities, malicious attacks on this Project's systems, or to protect the property and vital safety of this Project and the public.

---

## Your Data Rights

This section applies to relevant regulations such as the GDPR and CCPA; depending on your jurisdiction, you possess extensive control over your personal data. Regarding data stored on our databases and Redis caching layers, you hold the following rights:

* **Right of Access and Portability**: You have the right to request a copy of the personal data we hold about you.
* **Right to Rectification**: If your data is inaccurate or incomplete, you have the right to request that we correct it or modify it yourself in the personal panel.
* **Right to Erasure (Right to be Forgotten)**: You may unbind third-party credentials at any time, or request the deletion of your account and associated personally identifiable information.
* **Right to Withdraw Consent**: For data processing activities based on your consent, you have the right to withdraw such consent at any time.

**How to Exercise Your Rights**:
You can complete most management operations directly in the OEM personal profile panel. For further assistance, you can exercise the aforementioned rights by sending an email to `privacy@opendfieldmap.org` or by submitting an Issue in our GitHub open-source repository. We will respond within 180 business days upon receipt of your request. For data stored entirely within your local browser, you may independently delete it by clearing your browser cache.

---

## Modifications to Terms and Contact Information

As the project iterates and laws and regulations change, we may modify this statement at any time. Material changes will be notified through a prominent position on the website or via the associated email. Your continued use of the interactive and synchronization services of this project after the publication of such modifications shall be deemed as your acceptance of the revised terms.

If you have any questions regarding this Privacy Policy, or have any inquiries, suggestions, or complaints concerning our data processing practices, please contact us via the following methods:

* **Support and Privacy Team Email**: [privacy@opendfieldmap.org](mailto:privacy@opendfieldmap.org)
* **Project Open Source Code Repository**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord Player Community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)