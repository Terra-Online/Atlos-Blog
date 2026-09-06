---
title: Karma and User Groups
description: Learn about the Karma system and user group design of Open Endfield Map.
---

Karma (**IPA:** [ˈkɐr.mɐ], Sanskrit: **कर्म**) is a method to measure a user's activity level on Open Endfield Map. Generally, users with high Karma frequently use our map and actively maintain marker screenshots and descriptions.

User Groups are a type of community identity we use to better encourage user contribution and community co-creation; anyone can become an OEM contributor.

## How to see your User Group?

![](/media/community/karma/fig1.webp)

On the Open Endfield Map user identity card, the user group tag is located to the right of the username and is distinguished by a single letter. The details are as follows:
| User Group (Abbr.) | Icon | Permissions and Description |
| :---: | :---: | :--- |
| Normal User (N) | ![](/media/community/karma/n.svg) | Acquired upon registering with OEM. Can use map features normally, upload marker screenshots, post comments, and maintain content; when Karma is below 1, cannot post links to external domains in OEM's normal discussion areas. |
| Pioneer User (P) | ![](/media/community/karma/p.svg) | Trusted early contributors or long-term active users. Typically granted early access to experimental features, and participate in community building and feature testing. |
| Admin User (A) | ![](/media/community/karma/a.svg) | OEM management members, responsible for content moderation, user management, system maintenance, and community order. |
| Guest User (G) | ![](/media/community/karma/g.svg) | Unregistered users, only allowed to browse public content and basic map information; related upload features require registration. |
| Suspended User (S) | ![](/media/community/karma/s.svg) | Accounts restricted from access due to violations of community rules or system agreements; cannot upload content or participate in community interaction during the suspension. |

## How to see your Karma?

The Karma level is displayed below the user group tag as a battery-like icon. The more charge bars the battery has, the higher the Karma. The details are as follows:
| Bars | Icon | Level |
| :---: | :---: | :---: |
| 0 | ![](/media/community/karma/Karma0.png) | None |
| 1 | ![](/media/community/karma/Karma1.png) | Low |
| 2 | ![](/media/community/karma/Karma2.png) | Medium |
| 3 | ![](/media/community/karma/Karma3.png) | High |
| 4 | ![](/media/community/karma/Karma4.png) | Very High |
| 5 | ![](/media/community/karma/Karma5.png) | Guru |

Through general activity, you can easily reach Medium or High Karma. However, the top tier (Guru) is strictly reserved for highly active members.

## How to improve my Karma?

Generally, the more active you are, the higher the Karma on your account. You can improve your Karma in the following ways, including but not limited to:

* Uploading valid marker screenshots;
* Leaving valid annotations or descriptions for marker screenshots;
* Becoming a Pioneer user or participating in OEM's feature development;
* Inviting others to use and register for OEM;
* **Continuously and persistently using our map!**

## What are the benefits of having high Karma?

The primary benefit is that other users can instantly recognize you as an influential figure or a map expert.

We will also provide additional features for top Karma users; for instance, users with very high Karma will be invited to beta test our new features.

## Frequently Asked Questions

#### Q: Will my user group change as my Karma increases? And vice versa? Will my Karma be affected by my user group?

No. Currently, user groups (e.g., changing from Normal to Pioneer) are typically issued automatically by the system based on your recent performance, whereas Karma solely reflects activity levels. The two do not interfere with each other.

User groups do not provide a direct bonus to Karma itself, but some user groups may have additional policy exemptions. For example, Pioneer users have an exemption from point decay, as they might upload hundreds of images a day! This design is meant to thank them for their contributions; if their contribution volume does not reach a certain level, the Karma calculation behavior remains identical across all user groups.

#### Q: If someone upvotes my marker screenshot, will that give me higher Karma?

No. Karma reflects your expertise and how much you help others in the community, not your popularity.

#### Q: Can I post links?

You may post internal OEM links with specific context at any time (for example, `https://oem.re/18LW1qX`). However, when your Karma is below 1, you may not post external links outside OEM's own domains[^own-domains] in normal discussion areas. Regardless of your Karma, do not post confusing, context-free links repeatedly or in bulk; this may result in account restrictions or a ban.

#### Q: I am very active, but my Karma is low. What should I do?

Activity and contributions are not the sole factors in calculating Karma. We have designed various evaluation metrics and, as is our standard practice, open-sourced the corresponding algorithms. You can review them in our [backend repository](https://github.com/Terra-Online/Bayes), but we will not publicly disclose specific thresholds and calculation cycles.

#### Q: Can my Karma level decrease?

Karma levels are recalculated periodically; your activity level and tier may experience a slight delay, and your Karma can go up or down. **There is one exception:** If you reach Guru, it will not decrease. However, this level is generally very difficult to achieve.

#### Q: Can people cheat the Karma system?

We will continuously improve the algorithm to measure true user activity. But we cannot think of a reason why people would cheat—even if someone could cheat to increase their activity value, other users can easily verify their contribution history to see if they are genuinely active.

[^own-domains]: OEM's own domains currently include `oem.re`, `opendfieldmap.org`, and `opendfieldmap.cn`.
