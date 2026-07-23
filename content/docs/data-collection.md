---
title: Personal Information Collection and Use List
description: Data Open Endfield Map processes for each feature.
---

This list supplements the [Privacy Policy](./privacy). We process the corresponding data only when you use a feature.

## Features and data

| Feature | Data | Purpose and storage |
| :--- | :--- | :--- |
| Account and sign-in | Email, nickname, avatar number, password hash, or basic identity information returned by Google, Discord, or GitHub | Account creation, authentication, recovery, and sessions in Cloudflare D1; passwords are not stored in plaintext. |
| Progress sync | Completed point IDs, version, checksum, update time, and conflict-resolution identifiers | Cross-device merge and recovery in D1, coordinated with Durable Objects; UI preferences and map browsing history are excluded. |
| Character binding | Skland or SKPORT token, character UID, server, nickname, and necessary device data | Binding, authorization refresh, and current-location retrieval; credentials are AES-GCM encrypted in D1 and temporary results may be briefly cached. |
| Live location | Current coordinates, location status, and necessary binding identifier | Map display and nearby-point reminders through requests or WebSocket; brief in-memory cache only, with no movement-history or heat-map plan. |
| Point images | File, type, size, point, submitter, review status, votes, and reports | Review and display; images are checked and stored in R2, metadata in D1. |
| Point comments | Text, replies, point, author data, votes, reports, edit snapshots, and review status | Discussion, correction, translation, and governance in D1; text may be moderated by OpenAI and translated by Google Cloud Translation after approval. |
| Security and limits | IP address, path, time, request ID, and necessary headers | Abuse prevention and diagnostics through Cloudflare logs and short-lived Upstash or Worker-memory limit/cache data. |

Map view, theme, language, filters, and sidebar state remain local by default.

## Third parties and public UGC

Cloudflare provides infrastructure and may process requests and stored data across regions. Upstash supplies limits and short caches. OpenAI moderates submitted comments and images; uncertain cases go to human review. Google Cloud Translation translates approved comments. Google, Discord, and GitHub are used only for chosen OAuth sign-in, and Resend sends account emails.

Approved images and comments are public. You can withdraw eligible submissions, edit comments with a new review, or request deletion; see the [Privacy Policy](./privacy) and [UGC Statement](./ugc).
