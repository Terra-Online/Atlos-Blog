---
title: 內容來源
description: Open Endfield Map 的內容來源、版權聲明、用戶生成內容協議及支援平台。
---

Open Endfield Map（以下簡稱「本項目」）之營運與發展，有賴遊戲內容、開源軟件生態以及廣大用戶之共同建設與支持。本頁面詳列本項目的內容來源、版權歸屬、平台使用情況，以及用戶生成內容（UGC）之相關權利與義務協議。

## 遊戲知識產權及資源歸屬

本項目為非官方、非牟利之社群開源項目。

* **版權歸屬**：本項目內所引用及展示之所有與《明日方舟：終末地》（Arknights: Endfield）相關之圖像資源（包括但不限於地圖底圖、圖示、UI 元素、插畫）、文字說明、音效、世界觀設定及遊戲數據，其使用目的僅為更準確呈現遊戲內元素及提升用戶體驗。上述內容之全部版權、商標權及其他知識產權，均完全屬於 **上海鷹角網絡科技有限公司（Hypergryph）** 及／或其關聯公司（包括但不限於 Gryphline 等遊戲服務提供者及著作權人）。
* **侵權處理與用戶限制**：本項目無意侵犯官方任何權利。未經權利人明確授權，嚴禁任何用戶擅自公開、商業化使用或再次分發本網站所引用之官方美術資源。如權利人認為本項目內容構成侵權，請與我們聯絡以便處理。

---

## 用戶生成內容（UGC）協議

本項目於地圖中提供標記、第三視角截圖等互動功能。當閣下於本項目中建立、上傳或同步任何數據時，即表示閣下同意並須遵守以下協議條款：

1. **內容定義**：「用戶生成內容」（UGC）指閣下於使用本項目過程中主動建立、上傳或透過雲端同步之任何數據（包括但不限於自訂點位、留言及第三視角截圖）。

2. **所有權與授權許可**：閣下對閣下所創作之原創內容保留所有權。然而，當閣下提交任何 UGC 時，即表示閣下授予本項目一項全球性、免版稅、非專屬、可轉授且永久有效之授權，允許本項目於提供、維護及優化地圖服務之範圍內使用、儲存、展示、複製或修改該等內容。如閣下上傳任何公開內容，即表示閣下同意其他用戶於合理及合法範圍內存取及使用該等內容。

3. **內容限制與行為準則**：閣下須就閣下帳戶下所產生之一切 UGC 承擔全部責任。嚴禁提交任何侵犯第三方知識產權、違反適用法律法規、包含惡意程式碼、發佈垃圾廣告、虛假資訊，或蓄意上傳錯誤圖片以誤導他人之內容。如閣下違反上述規定，本項目有權暫停或終止閣下之帳戶。

4. **審核與免責聲明**：本項目不對任何 UGC 之準確性、完整性或合法性作出任何明示或默示保證。我們保留於毋須事先通知之情況下，自行決定修改、隱藏、限制或永久刪除任何違規內容之權利，且不對因用戶內容所引致之糾紛、損失或數據遺失承擔任何責任。如閣下向我們提供任何改進建議或回饋意見（Feedback），閣下同意本項目有權無償、無限制及不可撤回地使用該等意見以改進或發展本項目。

> **注意**：有關 UGC 內容之完整條款與限制，請參閱 [UGC 內容聲明](../ugc)。

---

## 基礎設施與平台支持

本項目之基礎網絡架構、數據儲存及團隊協作依賴以下平台之服務。在此謹向為本項目開發與部署提供基礎支援之企業／平台致謝：

* **Atlassian**：感謝 Atlassian 向本項目授予開源許可（Open Source License），使開發團隊得以免費使用 Jira 進行敏捷項目管理，並使用 Confluence 建立團隊知識庫。
* **Upstash**：感謝 Upstash 為本項目提供開源項目支援計劃（Open Source Support），其 Serverless Redis 服務支援本項目之跨裝置高頻數據同步及快取。
* **Cloudflare**：本項目之核心網絡架構採用 Cloudflare 之付費服務，包括全球內容分發網絡（CDN）、DDoS 防護、DNS 解析、Argo 智能路由，以及基於 Cloudflare Worker 與 D1 Database 之邊緣結構化數據儲存。

---

## 開源依賴使用情況

本項目之 Web 客戶端構建於多項開源技術之上。我們在此向所有開源貢獻者致以誠摯謝意。

### 框架與核心庫

#### React

* Source: `https://github.com/facebook/react`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### React DOM

* Source: `https://github.com/facebook/react`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### TypeScript

* Source: `https://github.com/microsoft/TypeScript`
* License: Apache-2.0 License

<details>
<summary>查看授權協議全文</summary>

```text
Apache License
Version 2.0, January 2004
[http://www.apache.org/licenses/](http://www.apache.org/licenses/)

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and
distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright
owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities
that control, are controlled by, or are under common control with that entity.
For the purposes of this definition, "control" means (i) the power, direct or
indirect, to cause the direction or management of such entity, whether by
contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the
outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising
permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including
but not limited to software source code, documentation source, and configuration
files.

"Object" form shall mean any form resulting from mechanical transformation or
translation of a Source form, including but not limited to compiled object code,
generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made
available under the License, as indicated by a copyright notice that is included
in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that
is based on (or derived from) the Work and for which the editorial revisions,
annotations, elaborations, or other modifications represent, as a whole, an
original work of authorship. For the purposes of this License, Derivative Works
shall not include works that remain separable from, or merely link (or bind by
name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version
of the Work and any modifications or additions to that Work or Derivative Works
thereof, that is intentionally submitted to Licensor for inclusion in the Work
by the copyright owner or by an individual or Legal Entity authorized to submit
on behalf of the copyright owner. For the purposes of this definition,
"submitted" means any form of electronic, verbal, or written communication sent
to the Licensor or its representatives, including but not limited to
communication on electronic mailing lists, source code control systems, and
issue tracking systems that are managed by, or on behalf of, the Licensor for
the purpose of discussing and improving the Work, but excluding communication
that is conspicuously marked or otherwise designated in writing by the copyright
owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf
of whom a Contribution has been received by Licensor and subsequently
incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this
License, each Contributor hereby grants to You a perpetual, worldwide,
non-exclusive, no-charge, royalty-free, irrevocable copyright license to
reproduce, prepare Derivative Works of, publicly display, publicly perform,
sublicense, and distribute the Work and such Derivative Works in Source or
Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License,
each Contributor hereby grants to You a perpetual, worldwide, non-exclusive,
no-charge, royalty-free, irrevocable (except as stated in this section) patent
license to make, have made, use, offer to sell, sell, import, and otherwise
transfer the Work, where such license applies only to those patent claims
licensable by such Contributor that are necessarily infringed by their
Contribution(s) alone or by combination of their Contribution(s) with the Work
to which such Contribution(s) was submitted. If You institute patent litigation
against any entity (including a cross-claim or counterclaim in a lawsuit)
alleging that the Work or a Contribution incorporated within the Work
constitutes direct or contributory patent infringement, then any patent licenses
granted to You under this License for that Work shall terminate as of the date
such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or
Derivative Works thereof in any medium, with or without modifications, and in
Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a
     copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating
     that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You
     distribute, all copyright, patent, trademark, and attribution notices from
     the Source form of the Work, excluding those notices that do not pertain to
     any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution,
     then any Derivative Works that You distribute must include a readable copy
     of the attribution notices contained within such NOTICE file, excluding
     those notices that do not pertain to any part of the Derivative Works, in
     at least one of the following places: within a NOTICE text file distributed
     as part of the Derivative Works; within the Source form or documentation,
     if provided along with the Derivative Works; or, within a display generated
     by the Derivative Works, if and wherever such third-party notices normally
     appear. The contents of the NOTICE file are for informational purposes only
     and do not modify the License. You may add Your own attribution notices
     within Derivative Works that You distribute, alongside or as an addendum to
     the NOTICE text from the Work, provided that such additional attribution
     notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may
     provide additional or different license terms and conditions for use,
     reproduction, or distribution of Your modifications, or for any such
     Derivative Works as a whole, provided Your use, reproduction, and
     distribution of the Work otherwise complies with the conditions stated in
     this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any
Contribution intentionally submitted for inclusion in the Work by You to the
Licensor shall be under the terms and conditions of this License, without any
additional terms or conditions. Notwithstanding the above, nothing herein shall
supersede or modify the terms of any separate license agreement you may have
executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names,
trademarks, service marks, or product names of the Licensor, except as required
for reasonable and customary use in describing the origin of the Work and
reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in
writing, Licensor provides the Work (and each Contributor provides its
Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied, including, without limitation, any warranties
or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
PARTICULAR PURPOSE. You are solely responsible for determining the
appropriateness of using or redistributing the Work and assume any risks
associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in
tort (including negligence), contract, or otherwise, unless required by
applicable law (such as deliberate and grossly negligent acts) or agreed to in
writing, shall any Contributor be liable to You for damages, including any
direct, indirect, special, incidental, or consequential damages of any character
arising as a result of this License or out of the use or inability to use the
Work (including but not limited to damages for loss of goodwill, work stoppage,
computer failure or malfunction, or any and all other commercial damages or
losses), even if such Contributor has been advised of the possibility of such
damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or
Derivative Works thereof, You may choose to offer, and charge a fee for,
acceptance of support, warranty, indemnity, or other liability obligations and/or
rights consistent with this License. However, in accepting such obligations, You
may act only on Your own behalf and on Your sole responsibility, not on behalf
of any other Contributor, and only if You agree to indemnify, defend, and hold
each Contributor harmless for any liability incurred by, or claims asserted
against, such Contributor by reason of your accepting any such warranty or
additional liability.

END OF TERMS AND CONDITIONS
```

</details>

### 地圖引擎與視覺化

#### Leaflet

* Source: `https://github.com/Leaflet/Leaflet`
* License: BSD-2-Clause License

<details>
<summary>查看授權協議全文</summary>

```text
BSD 2-Clause License

Copyright (c) 2010-2026, Volodymyr Agafonkin
Copyright (c) 2010-2011, CloudMade
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

</details>

#### leaflet.markercluster

* Source: `https://github.com/Leaflet/Leaflet.markercluster`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright 2012 David Leaver

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

#### react-leaflet

* Source: `https://github.com/PaulLeCam/react-leaflet`
* License: Hippocratic-2.1 License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright 2020-present Paul Le Cam and contributors ("Licensor")

Hippocratic License Version Number: 2.1.

Purpose. The purpose of this License is for the Licensor named above to permit
the Licensee (as defined below) broad permission, if consistent with Human
Rights Laws and Human Rights Principles (as each is defined below), to use and
work with the Software (as defined below) within the full scope of Licensor's
copyright and patent rights, if any, in the Software, while ensuring attribution
and protecting the Licensor from liability.

Permission and Conditions. The Licensor grants permission by this license
("License"), free of charge, to the extent of Licensor's rights under applicable
copyright and patent law, to any person or entity (the "Licensee") obtaining a
copy of this software and associated documentation files (the "Software"), to do
everything with the Software that would otherwise infringe (i) the Licensor's
copyright in the Software or (ii) any patent claims to the Software that the
Licensor can license or becomes able to license, subject to all of the following
terms and conditions:

- Acceptance. This License is automatically offered to every person and entity
  subject to its terms and conditions. Licensee accepts this License and agrees
  to its terms and conditions by taking any action with the Software that,
  absent this License, would infringe any intellectual property right held by
  Licensor.

- Notice. Licensee must ensure that everyone who gets a copy of any part of
  this Software from Licensee, with or without changes, also receives the
  License and the above copyright notice (and if included by the Licensor,
  patent, trademark and attribution notice). Licensee must cause any modified
  versions of the Software to carry prominent notices stating that Licensee
  changed the Software. For clarity, although Licensee is free to create
  modifications of the Software and distribute only the modified portion created
  by Licensee with additional or different terms, the portion of the Software
  not modified must be distributed pursuant to this License. If anyone notifies
  Licensee in writing that Licensee has not complied with this Notice section,
  Licensee can keep this License by taking all practical steps to comply within
  30 days after the notice. If Licensee does not do so, Licensee's License (and
  all rights licensed hereunder) shall end immediately.

- Compliance with Human Rights Principles and Human Rights Laws.

  1. Human Rights Principles.

     (a) Licensee is advised to consult the articles of the United Nations
     Universal Declaration of Human Rights and the United Nations Global Compact
     that define recognized principles of international human rights (the "Human
     Rights Principles"). Licensee shall use the Software in a manner consistent
     with Human Rights Principles.

     (b) Unless the Licensor and Licensee agree otherwise, any dispute,
     controversy, or claim arising out of or relating to (i) Section 1(a)
     regarding Human Rights Principles, including the breach of Section 1(a),
     termination of this License for breach of the Human Rights Principles, or
     invalidity of Section 1(a) or (ii) a determination of whether any Law is
     consistent or in conflict with Human Rights Principles pursuant to Section
     2, below, shall be settled by arbitration in accordance with the Hague
     Rules on Business and Human Rights Arbitration (the "Rules"); provided,
     however, that Licensee may elect not to participate in such arbitration, in
     which event this License (and all rights licensed hereunder) shall end
     immediately. The number of arbitrators shall be one unless the Rules
     require otherwise.

     Unless both the Licensor and Licensee agree to the contrary: (1) All
     documents and information concerning the arbitration shall be public and
     may be disclosed by any party; (2) The repository referred to under
     Article 43 of the Rules shall make available to the public in a timely
     manner all documents concerning the arbitration which are communicated to
     it, including all submissions of the parties, all evidence admitted into
     the record of the proceedings, all transcripts or other recordings of
     hearings and all orders, decisions and awards of the arbitral tribunal,
     subject only to the arbitral tribunal's powers to take such measures as
     may be necessary to safeguard the integrity of the arbitral process
     pursuant to Articles 18, 33, 41 and 42 of the Rules; and (3) Article
     26(6) of the Rules shall not apply.

  2. Human Rights Laws. The Software shall not be used by any person or entity
     for any systems, activities, or other uses that violate any Human Rights
     Laws. "Human Rights Laws" means any applicable laws, regulations, or rules
     (collectively, "Laws") that protect human, civil, labor, privacy,
     political, environmental, security, economic, due process, or similar
     rights; provided, however, that such Laws are consistent and not in
     conflict with Human Rights Principles (a dispute over the consistency or a
     conflict between Laws and Human Rights Principles shall be determined by
     arbitration as stated above). Where the Human Rights Laws of more than one
     jurisdiction are applicable or in conflict with respect to the use of the
     Software, the Human Rights Laws that are most protective of the individuals
     or groups harmed shall apply.

  3. Indemnity. Licensee shall hold harmless and indemnify Licensor (and any
     other contributor) against all losses, damages, liabilities, deficiencies,
     claims, actions, judgments, settlements, interest, awards, penalties,
     fines, costs, or expenses of whatever kind, including Licensor's reasonable
     attorneys' fees, arising out of or relating to Licensee's use of the
     Software in violation of Human Rights Laws or Human Rights Principles.

- Failure to Comply. Any failure of Licensee to act according to the terms and
  conditions of this License is both a breach of the License and an infringement
  of the intellectual property rights of the Licensor (subject to exceptions
  under Laws, e.g., fair use). In the event of a breach or infringement, the
  terms and conditions of this License may be enforced by Licensor under the
  Laws of any jurisdiction to which Licensee is subject. Licensee also agrees
  that the Licensor may enforce the terms and conditions of this License against
  Licensee through specific performance (or similar remedy under Laws) to the
  extent permitted by Laws. For clarity, except in the event of a breach of
  this License, infringement, or as otherwise stated in this License, Licensor
  may not terminate this License with Licensee.

- Enforceability and Interpretation. If any term or provision of this License is
  determined to be invalid, illegal, or unenforceable by a court of competent
  jurisdiction, then such invalidity, illegality, or unenforceability shall not
  affect any other term or provision of this License or invalidate or render
  unenforceable such term or provision in any other jurisdiction; provided,
  however, subject to a court modification pursuant to the immediately following
  sentence, if any term or provision of this License pertaining to Human Rights
  Laws or Human Rights Principles is deemed invalid, illegal, or unenforceable
  against Licensee by a court of competent jurisdiction, all rights in the
  Software granted to Licensee shall be deemed null and void as between Licensor
  and Licensee. Upon a determination that any term or provision is invalid,
  illegal, or unenforceable, to the extent permitted by Laws, the court may
  modify this License to affect the original purpose that the Software be used
  in compliance with Human Rights Principles and Human Rights Laws as closely as
  possible. The language in this License shall be interpreted as to its fair
  meaning and not strictly for or against any party.

- Disclaimer. TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES "AS IS,"
  WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR AND ANY OTHER
  CONTRIBUTOR SHALL NOT BE LIABLE TO ANYONE FOR ANY DAMAGES OR OTHER LIABILITY
  ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE,
  UNDER ANY KIND OF LEGAL CLAIM.

This Hippocratic License is an Ethical Source license ([https://ethicalsource.dev](https://ethicalsource.dev))
and is offered for use by licensors and licensees at their own risk, on an
"AS IS" basis, and with no warranties express or implied, to the maximum extent
permitted by Laws.
```

</details>

#### d3

* Source: `https://github.com/d3/d3`
* License: ISC License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright 2010-2023 Mike Bostock

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
```

</details>

### 用戶介面與互動

#### motion

* Source: `https://github.com/motiondivision/motion`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2024 Motion ([https://motion.dev](https://motion.dev)) B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### @use-gesture/react

* Source: `https://github.com/pmndrs/use-gesture`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright (c) 2018-present Paul Henschel <drcmda@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### react-hotkeys-hook

* Source: `https://github.com/JohannesKlauss/react-hotkeys-hook`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2018 Johannes Klauss

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### react-joyride

* Source: `https://github.com/gilbarbara/react-joyride`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2015, Gil Barbara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### react-window

* Source: `https://github.com/bvaughn/react-window`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2018 Brian Vaughn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### liquid-glass-react-positioning

* Source: `https://github.com/cirisus/liquid-glass-react-atlos`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright 2025 MAX ROVENSKY

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### progressive-blur

* Source: `https://github.com/AndrewPrifer/progressive-blur`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright (c) 2024 Andrew Prifer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### classnames

* Source: `https://github.com/JedWatson/classnames`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2018 Jed Watson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

### 工具與實用庫

#### ahooks

* Source: `https://github.com/alibaba/hooks`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2019-present ahooks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### accept-language-parser

* Source: `https://github.com/opentable/accept-language-parser`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2013-2017 Opentable

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

#### html-react-parser

* Source: `https://github.com/remarkablemark/html-react-parser`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License

Copyright (c) 2016 Menglin "Mark" Xu <mark@remarkablemark.org>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

#### zustand

* Source: `https://github.com/pmndrs/zustand`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2019 Paul Henschel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### react-ga4

* Source: `https://github.com/codler/react-ga4`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) Han Lin Yap

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

### 測試框架

#### @testing-library/dom

* Source: `https://github.com/testing-library/dom-testing-library`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)
Copyright (c) 2017 Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### @testing-library/jest-dom

* Source: `https://github.com/testing-library/jest-dom`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)
Copyright (c) 2017 Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### @testing-library/react

* Source: `https://github.com/testing-library/react-testing-library`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)
Copyright (c) 2017-Present Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### @testing-library/user-event

* Source: `https://github.com/testing-library/user-event`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)
Copyright (c) 2020 Giorgio Polvara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

### 構建工具與開發環境

#### Vite

* Source: `https://github.com/vitejs/vite`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2019-present, VoidZero Inc. and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### vite-plugin-svgr

* Source: `https://github.com/pd4d10/vite-plugin-svgr`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
MIT License

Copyright (c) 2021 Rongjian Zhang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### SCSS (sass)

* Source: `https://github.com/sass/dart-sass`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright (c) 2016, Google Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

#### Node.js

* Source: `https://github.com/nodejs/node`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
```

</details>

#### pnpm

* Source: `https://github.com/pnpm/pnpm`
* License: MIT License

<details>
<summary>查看授權協議全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2015-2016 Rico Sta. Cruz and other contributors
Copyright (c) 2016-2026 Zoltan Kochan and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>