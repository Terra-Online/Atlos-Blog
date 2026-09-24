---
title: "Version 1.5 Update II"
description: "Context menus, a major performance boost, and the new Open Endfield Map SDK."
date: 2026-09-24
---

Thank you for your continued use and support of Open Endfield Map.

Over the past few weeks, we have made several major updates to OEM and packaged our map data for use by other applications. This update introduces new context menus, a major improvement to large-scale marker rendering, more useful share links, a smoother mobile experience, and the Endfield Map SDK.

## Right-Click Menus

![](/blogs/announcements/26Sept/fig3.webp)

* Right-click a **marker** to open actions for that point and its subregion. Archive markers are treated as one type for these group actions.
* Right-click an **empty area of the map** to copy a link to the exact coordinates, change the visible subregion, toggle completed markers, or undo and redo recent map actions.
* Right-click a **marker filter** to quickly select or clear every filter in that category.
* On desktop, hold **Option (⌥)/Alt** while right-clicking to open the browser's native menu.

## Performance Improvements

![](/blogs/announcements/26Sept/fig4.webp)

We have made a comprehensive improvement to rendering large numbers of markers, giving OEM a major performance boost. Map interactions now feel lighter and smoother, even in areas packed with points.

With the current map content, you can enable every marker filter and turn clustering off, then drag smoothly across the map and take in the whole area.

## Share Links and Content Navigation

The marker and map context menus can now create share links. A marker link can also take you directly to a specific community image or public comment; opening it brings up the relevant marker details and selects the requested image or comment.

On mobile, grouped filters for enemies and archives are easier to browse. We have also streamlined the first-time guide and reduced location-sync work while the page is hidden, preventing background tabs from affecting performance.

## Bring the Endfield Map to Your Site

![](/blogs/announcements/26Sept/fig5.webp)

Our SDK is now officially available. The Open Endfield Map SDK brings OEM's interactive Endfield map to wikis, game databases, and player-tool websites. Add a ready-to-use map to your own guides and reference pages; OEM maintains the map data and assets, so you can focus on creating your tools and content instead of building a map and keeping its data up to date.

The SDK includes region, floor, and language switching, along with map markers, place names, and area boundaries. Historical map tiles from different game versions are also available for you to choose and use at no charge. Add your own points to mark locations in a guide or database entry, and connect map interactions to your website. The SDK supports JavaScript and TypeScript projects, with a ready-to-use React integration.

In the [live SDK demo](https://sdk.opendfieldmap.org/demo/), you can tailor the map to your page and generate ready-to-use integration code. Visit the [OEM-SDK project](https://github.com/Terra-Online/OEM-SDK) or install `@opendfieldmap/sdk` from [npm](https://www.npmjs.com/package/@opendfieldmap/sdk).

---

That concludes this update. If you encounter any issues while using the map or have feedback or suggestions, please contact us through the following channels:

* **Discord Community:** [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
* **Bluesky:** [Follow Open Endfield Map](https://bsky.app/profile/opendfieldmap.bsky.social)
* **X:** [Follow Open Endfield Map](https://x.com/OpenEndfieldMap)
* **Support Email:** [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Atlos Source Code:** [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **OEM-SDK Source Code:** [OEM-SDK on GitHub](https://github.com/Terra-Online/OEM-SDK)
