---
title: "1.5 版本下半更新"
description: "1.5 版本更新（二）：右鍵選單、效能大幅提升，以及全新的 OEM SDK。"
date: 2026-09-24
---

感謝閣下持續使用及支持終末地地圖集。

過去數週，我們為 OEM 帶來了多項重大更新，並將 OEM 地圖資料封裝，開放予其他應用程式使用。本次更新將介紹全新的右鍵選單、大量點位繪製的效能提升、更實用的分享連結、流動版體驗改進，以及終末地地圖集 SDK。

## 右鍵操作選單

![](/blogs/announcements/26Sept/fig3.zh-cn.webp)

* 在**點位**上右鍵，即可開啟針對該點位及所在子區域的操作選單。進行批次操作時，檔案點位會按同一類點位處理。
* 在**地圖空白處**右鍵，可複製直達該座標的連結、切換目前顯示的子區域、切換已完成點位的顯示狀態，或復原／重做近期的地圖操作。
* 在**點位篩選器**右鍵，可快速全選或取消選取整個類別中的所有篩選器。
* 在桌面裝置按住 **Option (⌥)/Alt** 再按右鍵，即可繼續使用瀏覽器原生選單。

## 效能提升

![](/blogs/announcements/26Sept/fig4.zh-cn.webp)

我們全面改進了大量點位的繪製效能，讓 OEM 的整體使用體驗大幅提升。即使在點位密集的區域，地圖操作也變得更輕快流暢。

以目前的點位規模，即使啟用全部篩選器並關閉聚合，閣下仍可流暢拖動地圖，縱覽整片區域。

## 分享連結與內容定位

點位及地圖右鍵選單現在可以建立分享連結。點位分享連結亦可直接定位至指定的社群圖片或公開留言；開啟後會顯示相應點位詳情，並選取指定圖片或留言。

流動版的敵人及檔案分組篩選更易瀏覽。我們亦精簡了首次使用指引，並減少頁面隱藏期間的位置同步工作，避免背景分頁影響效能。

## 在您的網站中接入終末地地圖集

![](/blogs/announcements/26Sept/fig5.webp)

我們的 SDK 現已正式推出。Open Endfield Map SDK 可將 OEM 互動式終末地地圖帶到 Wiki、遊戲資料庫及玩家工具網站。閣下可為自己的攻略及資料頁加入即用地圖；點位資料與地圖資源由 OEM 持續維護，無須由零建立地圖或自行追蹤資料更新，便可專注於自己的工具及攻略內容。

SDK 提供地區、樓層及介面語言切換，以及點位、地名和區域邊界等地圖功能。閣下亦可自由選擇不同遊戲版本的歷史地圖圖磚，並免費取用。您可以加入自訂點位，標示攻略或資料條目中提及的位置，並將地圖操作與網站內容連結起來。SDK 支援 JavaScript／TypeScript 專案，亦提供可直接使用的 React 整合方式。

閣下可在[線上 SDK Demo](https://sdk.opendfieldmap.org/demo/)調整地圖並產生可直接使用的接入程式碼；亦可前往 [OEM-SDK 專案主頁](https://github.com/Terra-Online/OEM-SDK)，或透過 [npm](https://www.npmjs.com/package/@opendfieldmap/sdk) 安裝 `@opendfieldmap/sdk`。

---

以上為本次更新的全部內容。若閣下在使用地圖期間遇到任何疑問，或對上述功能有任何意見及建議，歡迎透過以下方式與我們聯絡：

* **Discord 玩家社群**：[加入【Endfield Surveying Institute】](https://discord.gg/BFMAKZSUG7)
* **Bluesky 帳戶**：[追蹤 Open Endfield Map](https://bsky.app/profile/opendfieldmap.bsky.social)
* **X 帳戶**：[追蹤 Open Endfield Map](https://x.com/OpenEndfieldMap)
* **支援團隊電郵**：[support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Atlos 代碼倉庫**：[在 GitHub 上查看 Atlos](https://github.com/Terra-Online/Atlos)
* **OEM-SDK 代碼倉庫**：[在 GitHub 上查看 OEM-SDK](https://github.com/Terra-Online/OEM-SDK)
