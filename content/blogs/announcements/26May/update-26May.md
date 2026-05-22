---
title: "Account Binding Update"
description: "Version 1.2 Update Notes II: Account Binding, Location Sync, and Marker Tracking"

date: 2026-05-02
---

Thank you for your continued support and use of OEM.

We are thrilled to introduce the first batch of advanced features following the launch of the OEM account system: **Location Sync** and **Marker Tracking**. You can now bind your game account to your OEM account and enable location sync, allowing the map to provide timely, context-aware assistance based on your in-game position.

These features are still undergoing continuous refinement. If you encounter any issues, please report them through the channels provided at the end of this article. Reading the following guide may help improve your experience:

## Binding Your Game Account

You can enable location sync via the **Locator Entry** on the map. This action will guide you to register or sign in your OEM account. Afterward, simply follow the panel instructions to authorize and bind your game account.

![Fig 1: Binding Panel Overview](/blogs/announcements/26May/fig1.webp)

Once bound, you can view your currently linked character next to the locator entry and access the configuration panel at any time to switch or unbind characters.

---

## Location Sync

When location sync is enabled (see the image below, right side, top/bottom left), the map will display your current position marker based on your in-game position (left side). As you transition between game zones or enter different scenes, the map will attempt to follow you, reducing the need for manual panning or switching between regions.

If you temporarily pan or zoom the map to view other areas, the locator icon will switch to a "re-center" state (top right). Clicking the locator button again will snap the map back to your current in-game position.

![Fig 2: Location Sync Icons](/blogs/announcements/26May/fig2.webp)

Please note that location sync relies on game account authorization and real-time status. If your sync session expires, the game goes offline, or authorization is incomplete, a prompt will displayed on the page guiding you to re-bind or re-authorize.

We are still perfecting the automatic layer-switching feature, which is expected to launch soon alongside the marker layer categorization.

---

## Marker Tracking

We are also launching the **Marker Tracking** feature. When enabled, approaching noteworthy locations in-game will temporarily display these markers on the map with a highlight effect, making it easier for you to discover nearby objectives.

![Fig 3: Marker Tracking Configuration](/blogs/announcements/26May/fig3.webp)

Marker tracking is enabled by default using the **Balance** strategy. You can adjust the tracking scope in the configuration panel:

* **Balance**: Tracks a recommended set of markers curated for general exploration and gathering, ideal for most players' daily needs.
* **Collectibles**: Tracks collection and **Archive**-related markers, such as **Crates, Ether, Gather Points, and Guiding Butterflies**.
* **Craft Manual**: Tracks **rare markers listed in the Craft Manual**, including enemies (drops) and selected rare natural resource nodes.

Different strategies can be selected simultaneously and will merge their effects, allowing you to customize the tracking scope according to your exploration preferences.

To prevent an entire category filter from toggling on the moment a marker appears, we have also adjusted how marker alerts are displayed. Tracked markers within proximity will appear temporarily; if unclicked, they remain in the current area until the page is refreshed or the zone is switched. Only when you click the marker the corresponding filter will be selected automatically, keeping that category visible moving forward.

This means the alert feature functions more like "discovering nearby objectives" rather than directly altering your existing map filtering habits.

When you turn off marker tracking, the tracking strategy buttons at the top will enter a disabled state, indicating that these strategies will not currently trigger nearby marker alerts.

---

## Documentation Updates and Future Plans

**We deeply value your account security and game assets.** Following this update, we have revised the relevant clauses within the Open Endfield Map [Terms of Service](/docs/tos) and [Privacy Policy](/docs/privacy), and have added a [Data Collection and Usage Checklist](/docs/data-collection) and [Disclaimer of Liability](/docs/disclaimer) applicable to OEM. Please review these changes before enabling the new features, and continue only after acknowledging them.

Location sync and marker tracking form the foundation for OEM's upcoming in-game auxiliary features. We will continue to adjust the alert radius, marker strategies, and configuration experience based on user feedback. Guided by a strict commitment to privacy and data security, we plan to progressively roll out more features tied to game progression.

If you experience issues such as binding failures, location desyncs, or illogical marker alerts, please contact us via the channels below. Your feedback will directly help us improve future versions.

---

That's a wrap for this update announcement! If you have any questions, feedback, or suggestions while using the map, feel free to reach out to us through the following channels:

* **Discord Player Community**: [Join Endfield Surveying Institute](https://discord.gg/BFMAKZSUG7)
* **Support and Compliance Team Email**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Project Open Source Repository**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **Official Account on Bluesky**: [Follow Open Endfield Map](https://bsky.app/profile/opendfieldmap.bsky.social)