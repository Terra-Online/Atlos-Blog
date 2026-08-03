---
title: Cookie and Local Storage Policy
description: How Open Endfield Map uses cookies, browser storage, and progress synchronization.
---

Welcome to **Open Endfield Map** ("we," "the project," "OEM," or "us"). This policy explains how the map client uses or manages `Cookie`, `LocalStorage`, `SessionStorage`, `IndexedDB`, and `Cache Storage`, and which data is sent to the server after sign-in.

> This policy supplements the [Terms of Use](./tos) and [Privacy Policy](./privacy).

---

## Uses of cookies and browser storage

The project uses the following browser storage mechanisms by purpose:

1. **Sign-in `Cookie`**: The account system uses secure cookies to maintain signed-in sessions. Relevant identity providers may also set necessary cookies during OAuth sign-in.
2. **`LocalStorage`**: Stores language, theme, sidebar state, filter order, map view, completed-point status, announcement-read state, and other client preferences.
3. **`SessionStorage`**: May store temporary state for the lifetime of the current tab. The in-app storage manager can also inspect and clear such data.
4. **`IndexedDB` and `Cache Storage`**: The browser or application may use these mechanisms to cache resources and structured data for faster later access. The in-app storage manager can inspect and clear same-origin databases and caches.

Specific keys and stored values may change between releases. Cloudflare security services and third-party sign-in services may also set necessary cookies under their control.

## Behavior while signed out

While signed out, completed-point status, map view, and UI preferences are stored in the current browser. They may not be recoverable after you clear site data, use a private window, or change browsers or devices.

Viewing the map still sends requests to our servers and CDN for map data, images, tiles, and public UGC. Storing interaction state locally therefore does not mean that ordinary network requests or security logs are absent.

---

## Progress synchronization after sign-in

After sign-in, the client can synchronize your **completed-point status** to the cloud so that exploration progress can be merged and restored across devices. Synchronized data is represented by point IDs and necessary metadata such as version, checksum, and update time.

The following data currently remains in browser storage and is outside the scope of cloud progress synchronization:

- Theme, language, and sidebar state;
- Filter order, layer visibility preferences, and map view;
- Announcement-read state and other UI preferences.

Public images and comments belong to a separate UGC service and are not a cloud backup of local preferences. Game-character location binding also follows a separate data flow; see the [Personal Information Collection and Use List](./data-collection).

---

## Server storage and caches

- **Cloudflare D1**: Stores account information, sessions, progress metadata, game-character binding records, and structured UGC records.
- **Cloudflare R2**: Stores processed point images submitted by users.
- **Cloudflare KV, Durable Objects, and Cache API**: Support public-read caching, progress synchronization coordination, statistics, and other operational purposes.
- **Upstash Redis**: Supports rate limiting and short-lived caches for some interfaces. It is not the primary durable database for UI preferences or point progress.

Data is transmitted over HTTPS/TLS. We do not sell synchronized data or use it for targeted advertising.

---

## Your controls

1. **Stop future synchronization**: After signing out, new point actions continue to be stored locally but are no longer synchronized under your account.
2. **Manage local data**: You can use the in-app storage manager or browser settings to clear project cookies, site data, and caches. Clearing them may also remove your signed-in state, local point progress, and interface preferences.
3. **Manage cloud data**: Clearing browser data does not automatically delete accounts, progress, or UGC already synchronized to the server. To access, correct, or delete server-side personal data, see the [Privacy Policy](./privacy).
4. **Restrict cookies**: Blocking necessary cookies may disable authenticated features such as sign-in, progress synchronization, UGC submission, and location binding. Public map browsing will generally remain available.

---

## Third-party infrastructure

The project uses Cloudflare for CDN delivery, DDoS protection, and edge computing. Cloudflare may set security cookies based on request risk and may process network information such as IP addresses and request headers. If you sign in with Google, Discord, or GitHub, that provider also processes the authentication request under its own privacy policy.

---

## Why we use these technologies

We use cookies and related storage technologies for four categories of purposes, each of which supports the operation or improvement of the service:

1. **Maintain core website functions (strictly necessary)**
   - **Session continuity**: Keep you signed in while navigating between pages so that repeated verification is not required.
   - **Security controls**: Use secure cookie attributes, origin checks, and authentication measures to reduce the risk of session misuse and cross-site requests.
   - **API authentication**: Verify that requests involving server data come from an authenticated and authorized client.

2. **Improve performance and user experience (functional)**
   - **Remember state**: Retain interface preferences such as dark or light theme, language choice, and the map level and coordinates from your last visit.
   - **Optimize resources**: Cache selected static resources or data indexes to reduce map and catalog loading time.

3. **Security and compliance**
   - **Detect abnormal traffic**: Identify and block bots, DDoS attacks, and other abnormal access to maintain platform stability.
   - **Support audits**: Provide necessary baseline logs when investigating a security incident.

4. **Aggregate statistics and service improvement**
   - **Progress statistics**: Cloud progress synchronization may generate completion totals for each point and a total number of synchronized users to improve map content and features.
   - **Usage analysis**: After providing legally required notice or obtaining consent, we may use de-identified visit and feature-use statistics to improve the service. If non-essential analytics cookies or third-party analytics tools are enabled, we will update this policy and the relevant controls.

---
## Changes and contact

We may update this policy as the project or applicable law evolves. Material changes will be announced prominently on the website or through an associated email address.

For questions, contact:

* **Support and compliance**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Project source code**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
