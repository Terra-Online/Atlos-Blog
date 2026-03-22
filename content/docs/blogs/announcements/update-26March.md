---
title: "Map Update Log"
description: "Version 1.1 update notes: archive markers and newly added features"
date: 2026-03-22
---

Thank you for using and supporting OEM.

Since the 1.1 release, the OEM development team has been focused on new features to make **Open Endfield Map** the most practical Endfield map tool. We are glad to share a major update focused on **map data and usage workflow**. The notes below can significantly improve your experience:

## Sidebar and Filter Updates
As the number of points and filter conditions grows, we added a resizable sidebar. You can drag the right edge of the sidebar to adjust its width (**Fig. 1**).

![Figure 1: Resizable sidebar](./26March/fig1.webp)
*Figure 1: Drag the right edge of the sidebar to resize it.*

- In wider mode, filters switch to a three-column layout.
- For point types with multi-dimensional attributes (such as "Enemies" and "Archives"), we added a category selector (**Fig. 2**) to group filters by shared attributes, so you can quickly pick related points.

![Figure 2: Filter category selector](./26March/fig2.webp)
*Figure 2: Use the category selector to switch between grouped filter sets quickly.*

In a future update, we will also add customizable aggregation logic, so you can filter enemies by faction and tier.

---

## New Archive Dataset
After careful data collection and cleanup, OEM now includes every collectible point from the in-game "Archive Library" that can be found on the map, with support for searching any individual archive entry.

Most existing maps (including the official one) are not convenient for archive completion because archive points are shown as one large merged category. In real use, players usually need to locate specific entries to fill gaps. OEM now provides a much easier solution:

- All collectible archives are now listed individually in the sidebar.
- Using the **category selector** mentioned above, archive attributes now align with in-game categories such as "Paper Records" and "Digital Files" for accurate filtering.
- Integrated global search lets you find points by archive **title or body text** (**Fig. 3**).
- In point details, you can click **View Full Content** to read full archive text without leaving the map (**Fig. 4**).

![Figure 3: Archive search in global search](./26March/fig3.webp)
*Figure 3: Search archives and map points by title or content keywords.*

![Figure 4: Full archive content in point details](./26March/fig4.webp)
*Figure 4: Open full archive content directly in point details and share target points quickly.*

---

## Global Search System
As shown in **Fig. 3**, search has been upgraded:

- Quickly search **any archive and point content**, with result snippets and distribution hints.
- For type results, clicking the result behaves like clicking the corresponding filter and selects that category.
- For unique point results, clicking will **jump directly to that point**.

---

## Deep Links and Point Sharing
As shown in **Fig. 4**:

- Every point now supports **copy share link**.
- You can send links to friends or save them as **bookmarks**. Opening a shared link navigates directly to the target point with a highlight animation.

---

If you have any questions, suggestions, or feedback, feel free to contact us:

* **Project QQ Group**: [Join Endfield Map Discussion](https://qm.qq.com/q/OQbocvQzCO)
* **Discord Player Community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
* **Support & Compliance Email**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Open-source Repository**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
