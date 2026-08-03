---
title: Personal Information Collection and Use List
description: A detailed list of personal information processed by Open Endfield Map.
---

This list summarizes and supplements the [Privacy Policy](./privacy). We process the corresponding data only when you use the relevant feature.

## Core features and information processed

| Feature | Data processed | Purpose | Processing and storage | Retention |
| :--- | :--- | :--- | :--- | :--- |
| **Account registration and sign-in** | Email address, nickname, avatar number, and password hash; or account identifiers and basic profile data returned by Google, Discord, or GitHub | Create accounts, authenticate users, recover passwords, and maintain sessions | Account, linked-identity, and session records are stored in Cloudflare D1; only a one-way password hash is stored, never the plaintext password | Kept while the account exists; sessions expire at the end of their validity period or are revoked on sign-out |
| **Point progress synchronization** | Completed-point ID set and the version, checksum, update time, and identifiers needed to resolve synchronization conflicts | Merge and restore exploration progress across devices and generate aggregate progress statistics | Progress is persisted in D1 and synchronized serially through Durable Objects; it excludes UI preferences and map-browsing paths | Kept with the account or processed in response to a valid data-deletion request |
| **Game-character binding** | Skland or SKPORT authorization tokens, character UID, server, character nickname, and device information generated to access official interfaces | Bind a selected character, refresh authorization, and retrieve the character's current position | Credentials are AES-GCM encrypted in D1; temporary binding-flow data and decrypted results may be cached briefly | Kept while bound; unbinding deletes the persistent binding and related caches |
| **Live location display** | Current character coordinates, location status, and necessary binding identifiers | Display the character in the current map session and provide nearby-point reminders | Retrieved from an upstream service through requests or WebSocket and briefly cached in server memory; the current implementation does not collect or persist movement history | After cache invalidation, the Worker lifecycle ends, or unbinding, it is no longer used as valid location data |
| **Point images** | Image file, type and size, associated point, submitter account, moderation status, upvotes, and reports | Display real-world or guide images for points and support moderation and community governance | Images are format-checked, transcoded when necessary, and stored in Cloudflare R2; metadata is stored in D1; content may be sent to the OpenAI Moderation API | Managed according to content status and deletion requests; public content remains visible until withdrawn or removed |
| **Point comments** | Comment text, reply relationship, associated point, author information, votes, reports, edit snapshots, and moderation status | Support point discussion, replies, corrections, translation, and community governance | Structured records are stored in D1; text may be sent to OpenAI for moderation; approved text may be sent to Google Cloud Translation to pre-generate common translations or answer translation requests | Managed according to content status and deletion requests; necessary edit snapshots support moderation and rollback |
| **Security and rate limiting** | IP address, request path and time, request identifier, and necessary headers | Prevent interface abuse, diagnose failures, and protect the service | Cloudflare processes baseline network logs; Upstash Redis or Worker memory maintains rate-limit windows and short-lived caches | Kept briefly according to infrastructure configuration and security needs |

Map view, theme, language, filter order, sidebar state, and similar UI preferences are stored in the browser by default and are not included in point progress synchronization.

---

## Third-party processing and international transfers

1. **Cloudflare**: Provides CDN delivery, DDoS protection, Workers, D1, R2, KV, Durable Objects, Queue, and container processing. Requests and stored data may be processed at nodes outside your country or region.
2. **Upstash**: Processes rate-limit keys and values and selected short-lived caches. It is not the primary durable store for account progress or UGC.
3. **OpenAI**: Moderates comments and point images that you submit. If automated review fails or cannot make a determination, the content proceeds to human review instead of being published automatically.
4. **Google Cloud Translation**: Processes approved comment text to pre-generate selected common-language translations or answer user translation requests, and caches results to reduce repeated calls.
5. **Google, Discord, and GitHub**: Process authentication data only when you choose the corresponding OAuth sign-in method.
6. **Resend**: Sends verification codes, password-reset messages, and other necessary account email.

Each provider processes data under its own terms and privacy policy. We do not provide it with data unrelated to the corresponding function.

---

## Visibility and control of UGC

* Approved and published point images, comments, public author information, and interaction statistics can be viewed by all visitors.
* Before uploading an image, remove real names, contact details, account credentials, chat logs, and other information that should not be public.
* Submitters may withdraw pending content when its status allows or request removal of published content; some operations require human review.
* Other signed-in users can vote on or report public content. Reported content may change status and enter another review.

For content rules and license scope, see the [UGC Statement](./ugc) and [Community Guidelines](./community-guidelines).
