---
title: Cookie and Local Storage Policy
description: How Open Endfield Map uses cookies, local storage, and progress sync.
---

This policy explains the use of `Cookie`, `LocalStorage`, `SessionStorage`, `IndexedDB`, and `Cache Storage`, as well as data sent to the server after sign-in. It supplements the [Terms of Use](./tos) and [Privacy Policy](./privacy).

## Browser storage

Login cookies maintain a secure session, and OAuth providers may set required cookies. LocalStorage can retain language, theme, sidebar state, filters, map view, completed-point status, announcement-read state, and other client preferences. SessionStorage can hold temporary tab state. IndexedDB and Cache Storage can cache resources and structured data. Keys and values can change with releases; browser extensions, Cloudflare security services, and identity providers may set their own required cookies.

Without sign-in, completed-point status, map view, and UI preferences remain in the current browser and may be lost when site data is cleared, private browsing is used, or a browser/device changes. Viewing the map still makes normal requests for map data, images, tiles, public UGC, and security logs.

## Progress synchronization and server storage

After sign-in, completed-point status can be synchronized across devices as a set of point IDs with necessary version, checksum, and update-time metadata. Theme, language, sidebar state, filters, layer preferences, map view, announcement-read state, and other UI settings remain local. Public images and comments are a separate UGC service; character binding has a separate data flow.

Cloudflare D1 stores accounts, sessions, progress metadata, character bindings, and structured UGC records. R2 stores processed point images. KV, Durable Objects, and Cache API support public caching, sync coordination, and operations. Upstash Redis supports rate limiting and short-lived caches, not primary durable storage for preferences or progress. Data uses HTTPS/TLS; we do not sell sync data or use it for targeted advertising.

## Your choices and third parties

Signing out stops future account-based sync, while new progress remains local. You can clear cookies, site data, and caches in the product or browser; doing so can remove the session, local progress, and preferences but does not automatically delete synchronized server data or UGC. You may request access, correction, or deletion of server data under the [Privacy Policy](./privacy). Blocking required cookies can disable sign-in, sync, UGC submission, and character binding.

Cloudflare provides CDN, DDoS protection, and edge computing and may process IP addresses and request headers or set security cookies. Google, Discord, and GitHub process their respective OAuth requests under their own policies. We may update this policy as functions, infrastructure, or law change.

* **Privacy and support**: [privacy@opendfieldmap.org](mailto:privacy@opendfieldmap.org)
