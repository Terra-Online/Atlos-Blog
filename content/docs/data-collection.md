---
title: Data Collection and Usage Checklist
description: Detailed checklist of personal data collection and usage for Open Endfield Map.
---

Welcome to **Open Endfield Map**. To help you clearly and intuitively understand how we collect and use personal data when you use our core business features, we have developed this checklist.

> **Note**: This checklist is a summary and supplement to our [Privacy Policy](./privacy). We adhere to a "Local-First" and "Data Minimization" principle. We only collect corresponding data when you actively enable specific cloud or cross-device features.

## Core Business Features and Data Collection Details

| Business Feature | Personal Data Collected | Purpose of Collection | Legal Basis | Processing Method & Storage Location | Retention Period |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Account Registration & Management** | Username, Email address, Password credentials | To create and verify your exclusive OEM digital account, providing cross-device synchronization for settings and progress. | **Performance of a Contract** / **User Consent** | Passwords are encrypted using strong one-way hashing algorithms. Data is persistently stored in the Cloudflare D1 database. | Retained for the duration of the account; permanently deleted upon account cancellation. |
| **Skland or SKPORT Account Authorization** | Skland or SKPORT identity credentials (e.g., `cred` / `token`) | To obtain permission to access Hypergryph and Gryphline official APIs to enable advanced features like in-game coordinate synchronization. | **Explicit Consent** | Credentials are encrypted and proxied through our edge nodes. Credentials solely securely circulate within the D1 database or Upstash cache. **Never used to read any information or assets other than map locations.** | Retained only while the feature is active and bound. You can manually unbind at any time, after which the server will immediately and permanently destroy the credential. |
| **Real-time Location Sync (Visible Only to You)** | In-game Character UID, Server information, Single real-time coordinate (X, Y, Z) | To differentiate map progress across characters and render the player's current real-time location on the frontend interactive map. | **Performance of a Contract** / **Explicit Consent** | Circulates only as temporary states in memory and Serverless cache. **Unless you actively authorize participation in the Heatmap Project, we never persistently store historical movement trajectories.** | Automatically destroyed after the session ends, unbinding, or when the frontend page is closed. |
| **Route Recording & Community Heatmap Contribution** | Historical movement trajectories (coordinate sequences), Dwell time in specific areas | Used to analyze popular in-game exploration areas, optimize route recommendations, and generate global or regional aggregated heatmaps for community reference. | **Explicit Consent** | Before or upon uploading to the D1 database, trajectory data is immediately anonymized, strictly stripping any personal identifiers related to your OEM account or game UID, stored only as aggregated coordinate sets. | The original trajectory stream with identity markers is destroyed immediately after anonymization; anonymous aggregated heatmap baseline data is retained long-term. |
| **Map Interaction & UGC Contribution** | Custom marker coordinates, Comment text, Third-person screenshots, Edit history | To support the map's wiki and co-creation system, displaying community users' modification suggestions and route planning. | **User Consent** / **Legitimate Interests** | After automated compliance review (e.g., OpenAI Moderation), publicly displayed associated with your account identifier. For detailed guidelines, please refer to the [UGC Content Statement](./ugc). | Retained as long as the account exists or is not actively deleted; public contributions may be retained long-term in an archived form. |
| **Security Protection & Performance Monitoring** | IP address, Device model, Browser type (User-Agent), Access timestamp | To identify abnormal traffic (e.g., bots, DDoS attacks), defend against CSRF attacks, and optimize CDN edge node distribution strategies. | **Legitimate Interests** (Ensuring network and information security) | Log data is automatically generated at the infrastructure layer, used only for overall trend and security analysis, and is not directly linked to your real identity. | Typically automatically overwritten on a rolling basis or permanently deleted within 30 days of generation. |

---

## Third-Party Sharing and Cross-Border Data Transfer

This Project is deployed using a globally decentralized architecture (Serverless & Edge Computing). When you use our synchronization or interaction features, some of your encrypted data or request characteristics will be legally transferred to servers outside your country/region for processing:

1. **Infrastructure and Storage Circulation**: We rely on **Cloudflare** (global CDN and edge database) and **Upstash** (globally distributed Serverless Redis) to provide underlying services. Your data may be encrypted and persistently stored on offshore nodes based on optimal network routing strategies.
2. **Compliance Review Sharing**: When you submit public UGC content (such as comments), relevant text data may be briefly transferred to **OpenAI**'s Moderation API for automated safety screening. We promise that the above third-party providers are strictly bound by Data Processing Agreements (DPA) and will not use your data for unrelated commercial purposes or AI model training.

---

## UGC (User-Generated Content) Special Risk Warning

As an open-source project, the co-creation of community content is the foundation of our development. However, please be aware of the potential risks of providing such content:

* **Public Visibility**: Once you submit third-person screenshots, comments, and coordinate markers, you authorize us to display them publicly, and **all users accessing this project can view them**. Please strictly avoid including sensitive privacy information such as your real name, contact information, or plaintext official account passwords in screenshots.
* **Independent Responsibility**: You are fully legally responsible for all UGC you generate. This project is not responsible for any in-game losses or disputes caused by trusting erroneous UGC submitted by others.
* **Agreement Constraints**: Regarding the transfer of UGC content ownership, review and disposal permissions, and disclaimer clauses, please ensure you carefully read and agree to the complete **[UGC Content Statement](./ugc)** before submitting any content.

---

To understand your data management rights (such as export, deletion, withdrawal of consent, etc.) and complete privacy protection strategies, please refer to the full [Privacy Policy](./privacy).