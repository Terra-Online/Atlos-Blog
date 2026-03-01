---
title: Cookie Policy
description: Open Endfield Map Cookie and Local Data Synchronization Policy.
---

Welcome to **Open Endfield Map** (hereinafter referred to as "we", "this Project", or "OEM"). We deeply understand the importance of your privacy and data security. This policy is intended to detail how we utilize Cookies, local storage technologies (LocalStorage / IndexedDB), and data synchronization mechanisms when you access and use this website.

> **Note**: This policy acts as a supplementary document to the [Terms of Service](../tos) and, together with the [Privacy Policy](../privacy), constitutes the complete binding agreement governing your use of this Project's services, holding equal legal force.

---

## Overview of Cookies and Local Storage Technologies

To provide a smooth, personalized, and secure map interaction experience, we are required to store minor amounts of data on your device. We primarily rely on the following two technologies:

1. **Cookies**: Small text files sent by a website and stored within your browser. They are typically used to identify your device, maintain login session states, enhance security, or record your fundamental access preferences.
2. **Local Storage (LocalStorage / IndexedDB)**: Data storage mechanisms provided by modern browsers that allow us to save larger, more structurally complex data on your device than Cookies permit (such as markers you place on the map, layer filtering states, etc.).

**Differences in Data Behavior Before and After Login**
We categorize your data processing into two distinct states:
- **Logged Out**: All your map interaction data (e.g., markers, preference settings) is saved strictly on your current device and will not be uploaded to our servers.
- **Logged In**: To facilitate a cross-device experience, we will synchronize your local data with our servers.

---

## Why We Use These Technologies

The purposes for which we use Cookies and related storage technologies are classified into the following four broad categories, each vital to safeguarding and enhancing your user experience:

1. **Maintaining Core Website Functionality (Essential Operations)**
   - **Session Maintenance**: Ensuring you remain authenticated when navigating between different pages after logging in, negating the need for repeated verification.
   - **Security Defense**: Generating and validating XSRF-TOKENs to prevent malicious attacks such as Cross-Site Request Forgery (CSRF), thereby safeguarding your account security.
   - **API Verification**: Ensuring all data requests sent to the server originate from legitimate and authorized clients.

2. **Enhancing Performance and User Experience (Functional Operations)**
   - **State Retention**: Remembering your interface preferences (e.g., dark mode/light mode), language selection, and the map zoom level and coordinates from your previous session.
   - **Resource Optimization**: Caching specific static resources or data indexes to significantly reduce loading times for maps and indices.

3. **Security and Compliance Assurance**
   - **Abnormal Traffic Detection**: Identifying and intercepting abnormal access, such as automated scripts (Bots) and DDoS attacks, to maintain the overall stability of the platform.
   - **Compliance Auditing**: Providing necessary foundational log support in the event of security incidents.

4. **Analytics and Service Improvement (Analytical Operations)**
   - **Anonymous Statistics**: Utilizing de-identified methods to understand which map areas are most frequently visited or which features are predominantly used, assisting us in determining development priorities for subsequent versions.

---

## Cookie Categories and Detailed List

Below are the primary types of Cookies we currently use and their specific purposes:

| Type | Example Cookie | Purpose Description | Provider | Expiration |
| --- | --- | --- | --- | --- |
| **Strictly Necessary Cookies** | `__cf_bm` / `XSRF-TOKEN` / `Session` | **Cannot be disabled.** Used for login state maintenance, CSRF security protection, and Bot detection and mitigation provided by Cloudflare. | Cloudflare / This Project | 30 minutes to end of session |
| **Performance & Functional** | `_cfuvid` | Helps identify trusted traffic and limits access frequency to protect server performance. | Cloudflare | End of session |
| **Analytics & Customization** | `s7` | Collects de-identified information such as website browsing data and click events for generating traffic reports and optimizing performance. | Adobe Analytics | 2 hours to 11 months |
| **Unclassified Cookies** | (Random strings, e.g., `qzld...`) | Internal identifiers currently undergoing classification or in testing phases; these pose no additional risk to user privacy. | This Project | 2 hours or less |

> **Note**: Strictly Necessary Cookies are indispensable for the normal operation of the website. If you forcibly disable these Cookies via your browser, you will be unable to log into your account, and certain core interactive features of the map will cease to function.

---

## Logged Out State: Local Storage Mechanism

When you are not logged in, the substantial data generated as an interactive map will be retained entirely within your front-end device. We utilize LocalStorage and IndexedDB to store the following information on your device:

- **Map State**: Current Zoom Level, Center Coordinates, and view boundaries.
- **Content Filtering**: Visibility states of Layers and selected conditions of filters.
- **User-Generated Content (UGC)**: Your personal custom markers, bookmarked locations, route plans, etc.
- **Interface Preferences**: Sidebar expanded/collapsed state, theme color, and other UI settings.
- **Cached Data**: Temporarily imported data packages or map tile indices used for rendering acceleration.

> **Privacy Notice**: When logged out, the aforementioned data will absolutely not leave your device. You can permanently destroy this information simply by clearing your browser's site data or cache.

---

## Logged In State: Data Synchronization and Cloud Backup

When you proactively register and log into your Open Endfield Map account, to prevent data loss and allow seamless transition across different devices (e.g., mobile phones and computers), we will activate the data synchronization service.

**1. Scope of Synchronization**
- User-generated markers and coordinate data
- Layer settings and custom filtering configurations
- UI preference settings
- Map content editing or correction records

**2. Synchronization Infrastructure and Security**
We transmit your data via encrypted channels (HTTPS/TLS) and securely store it within the following cloud services:
- **Upstash Serverless Redis**: Used for high-frequency read caching and rapid state synchronization.
- **Cloudflare D1 Database**: Used for the persistent, secure storage of core structured data.

**3. Strict Limitations on Data Usage**
- **Service Provision Only**: Your synchronized data is utilized solely to provide "cross-device consistency" and "data backup and recovery" services.
- **Commercial Isolation**: This Project pledges that it will **never** sell your synchronized data, marking habits, or browsing history to any third party, nor will it **ever** be used for targeted advertising.

---

## Your Rights and Methods of Control

You maintain absolute control over your Cookies and local data:

1. **Stop Cloud Synchronization**: Simply execute a logout action. Your state will revert to the "Logged Out" mode, and all subsequently generated local data will cease to upload to the server.
2. **Clear Local Data**:
   - While Logged In: If you delete a marker on the web interface, that action will synchronize to the server.
   - Complete Wipe: You can navigate to your browser's "Settings -> Privacy and Security -> Clear browsing data" option and choose to clear all Cookies and site data for this Project (this will simultaneously reset all your local preferences).
3. **Browser-Level Cookie Blocking**: You can configure your browser settings to reject all third-party Cookies. This will not impede your use of the Project's map browsing features, but it may affect certain statistical functions reliant on third parties.

---

## Special Note Regarding Third-Party Infrastructure Cookies

This Project is deployed on the **Cloudflare** global Content Delivery Network (CDN). To defend against malicious attacks (e.g., DDoS) and accelerate web page loading, Cloudflare may inject specific security Cookies into your browser (such as the previously mentioned `__cf_bm`).

These Cookies are automatically managed by the infrastructure provider to verify that you are a genuine user rather than a malicious program. **These security Cookies strictly do not contain your personally identifiable information and are never used for any form of advertising or marketing tracking.**

---

## Modifications to Terms and Contact Information

As the project iterates and laws and regulations change, we may modify this statement at any time. Material changes (such as expansions in the scope of data synchronization or changes to the core purposes of Cookies) will be notified through a prominent position on the website or via the associated email. Your continued use of the interactive and synchronization services of this project after the publication of such modifications shall be deemed as your acceptance of the revised terms.

If you have any questions regarding this statement, or have any feedback concerning this Project's use of Cookies, please contact us via the following methods:

* **Support and Compliance Team Email**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Project Open Source Code Repository**: [Atlos on Github](https://github.com/Terra-Online/Atlos)
* **Discord Player Community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)