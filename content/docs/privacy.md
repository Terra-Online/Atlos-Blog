---
title: Privacy Policy
description: Privacy policy for Open Endfield Map.
---

## Introduction

Welcome to **Open Endfield Map** ("we," "the project," "OEM," or "us"). This policy explains how we process data when you browse the map, register an account, synchronize point progress, submit community content, or bind a game character.

The project uses a local-first design for client interaction state, but this does not mean that all access occurs offline. Map resources, public UGC, sign-in, and other API requests still pass through our servers and infrastructure providers.

For an overview of fields processed by each feature, see the [Personal Information Collection and Use List](./data-collection).

---

## Information we process

### Information you provide

* **Account information**: Email address, nickname, avatar number, and the password hash generated when you register with email and password.
* **Third-party sign-in information**: If you choose Google, Discord, or GitHub sign-in, the provider returns an account identifier, email address, and public profile information. We do not receive your password for that provider.
* **Game-character binding information**: When you choose to bind a Skland or SKPORT character, we process authorization tokens, character UID, server, character nickname, and device information needed to access official interfaces. Credentials are stored encrypted and used to retrieve character data and current location, refresh authorization, and maintain the binding.
* **User-generated content (UGC)**: Point images, comments, and replies that you submit, together with records relating to edits, votes, reports, withdrawal, and removal requests.
* **Communications**: Information you provide when contacting us through email, GitHub, or community channels.

### Information generated when you use the service

* **Network and security information**: IP address, request time and path, request identifier, User-Agent, and network characteristics processed by Cloudflare for security protection and troubleshooting.
* **Sign-in and session information**: Session records, cookies, and tokens used to maintain signed-in status.
* **Cloud point progress**: Completed-point IDs and the version, checksum, update time, and operation identifiers needed for synchronization.
* **Aggregate progress statistics**: Completion totals for each point and the total number of synchronized users. The statistics service updates aggregates from progress deltas and does not receive user IDs for producing them.
* **Live location**: Current character coordinates and connection status retrieved from the official service while location is enabled. The current implementation does not collect or persist movement history.

### State kept only in the browser

Theme, language, sidebar state, filter order, layer visibility preferences, map center and zoom, announcement-read state, and similar settings are stored in the browser by default. Signing in does not automatically upload these UI preferences to the cloud.

---

## Third-party services and data flows

| Provider | Data it may process | Purpose |
| :--- | :--- | :--- |
| **Cloudflare** | IP address, request information, account and session records, progress, binding records, UGC metadata, and images | CDN, DDoS protection, Workers, D1, R2, KV, Durable Objects, Queue, and image processing |
| **Upstash** | IP- or user-scoped rate-limit identifiers, time-window records, and selected short-lived caches | API rate limiting and operational caching |
| **OpenAI** | Comment text and point images awaiting moderation | Automated content-safety moderation; indeterminate results and failed calls proceed to human review |
| **Google Cloud Translation** | Approved public comment text | Pre-generated common-language translations, on-demand machine translation, and translation caching |
| **Google, Discord, and GitHub** | OAuth account identifier, email address, and public profile | Third-party sign-in selected by the user |
| **Resend** | Recipient email address, message content, and delivery information | Verification codes, password resets, and necessary account email |

We do not sell or rent your personal data to third parties. These providers have their own terms and privacy policies, and data may be processed outside your country or region.

---

## How we use information

1. Create and maintain accounts and send verification codes and password-reset messages;
2. Synchronize completed points across devices, resolve progress conflicts, and update aggregate completion statistics;
3. Bind game characters, refresh authorization, and display the character's location in the current session;
4. Receive, moderate, display, and manage point images, comments, and community interactions;
5. Pre-generate selected common-language translations of public comments and provide on-demand machine translation;
6. Apply rate limits, protect security, troubleshoot failures, and produce necessary service statistics;
7. Comply with applicable law, handle rights requests, and protect the lawful interests of users, the project, and the public.

---

## Storage, security, and retention

### Storage locations

Accounts, sessions, progress, bindings, and structured UGC records are primarily stored in Cloudflare D1. UGC images are stored in Cloudflare R2. KV, Durable Objects, Cache API, and Upstash Redis support coordination, rate limiting, and short-lived caches.

### Security measures

* Data is transmitted over HTTPS/TLS;
* Account passwords are stored as one-way hashes;
* Game authorization credentials are persisted with AES-GCM encryption;
* Interfaces use authentication, origin restrictions, rate limits, and content-moderation procedures.

No network service can guarantee absolute security. Do not disclose your password, verification code, session token, or game authorization credentials to anyone.

### Retention

* **Accounts and point progress**: Normally kept with the account until the account or relevant data is deleted.
* **Sign-in sessions**: Expire according to the session validity period or end when you sign out or revoke the session.
* **Game-character bindings**: Kept while bound. Unbinding deletes the D1 binding record and clears related caches.
* **Live location**: Processed only in the connection and short-lived cache and not persisted as movement history.
* **UGC**: Managed according to moderation status, withdrawal, and removal requests. Necessary comment-edit snapshots are retained to support moderation and rollback.
* **Security and rate-limit records**: Kept briefly according to infrastructure configuration and security needs.

---

## Cookies and local storage

Sign-in cookies maintain sessions. `LocalStorage` and other browser storage retain completed-point status and client preferences. Clearing browser site data does not automatically delete accounts, progress, bindings, or UGC already synchronized to the server.

For details, see the [Cookie and Local Storage Policy](./cookie).

---

## Data sharing and public display

We share or disclose data only within the following scope:

1. Transfer the minimum data necessary for the corresponding function to the providers listed above;
2. Publicly display approved point images, comments, public author information, and interaction statistics that you choose to submit;
3. Disclose information when required by law, valid legal process, or the need to protect users or service security;
4. Process data in other circumstances with your separate consent.

Do not include personal information in UGC if you do not want it to be public. Other people may view, quote, or retain public content.

---

## Your rights

Subject to applicable law, you may request access to, correction, export, or deletion of personal data that we hold, and you may withdraw consent where it can be withdrawn:

* Change your nickname and avatar in your profile;
* Disable or unbind a game character; unbinding deletes persistent credentials;
* Withdraw UGC awaiting review or request removal of published content;
* Clear browser storage to delete local preferences and local point progress;
* Contact `privacy@opendfieldmap.org` for account or data matters that cannot be completed in the product.

To prevent impersonation, we may require you to verify account ownership. Some public-content records may not be deleted immediately when needed for dispute handling, security audits, or legal duties; we will explain applicable restrictions.

---

## Changes and contact

We may update this policy as features, infrastructure, or legal requirements change. Material changes will be announced prominently on the website or through an associated email address.

* **Privacy and support**: [privacy@opendfieldmap.org](mailto:privacy@opendfieldmap.org)
* **Project source code**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Discord community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
