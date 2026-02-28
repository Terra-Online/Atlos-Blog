---
title: 内容来源
description: Open Endfield Map 的内容来源、版权声明、用户生成内容协议及支持平台。
---

欢迎使用 **Open Endfield Map**（以下简称“我们”、“本项目”或“OEM”）。OEM 的运营与发展依赖于游戏内容、开源软件生态以及广大用户的共建支持。本页面详细列明了项目的内容来源、版权归属、平台使用情况以及用户生成内容（UGC）的相关权利与义务协议。

---

## 游戏知识产权及资源归属

本项目为非官方、非营利性的社区开源项目。

* **版权归属**：本项目内所引用、展示的所有与《明日方舟：终末地》（Arknights: Endfield）相关的图像资源（包括但不限于地图底图、图标、UI 元素、插画）、文字说明、音效、世界观设定及游戏数据，其使用目的仅为更准确呈现游戏内元素及提升用户体验。上述内容的全部版权、商标权及其他知识产权均完全属于 **上海鹰角网络科技有限公司（Hypergryph）** 及/或其关联公司（如 Gryphline 等游戏服务提供者及著作权人）。
* **侵权处理与用户限制**：本项目无意侵犯官方任何权利。未经权利人明确授权，严禁任何用户擅自公开、商业化或再分发本网站所引用的官方美术资源。
  
---

## 用户生成内容 (UGC) 协议

我们在地图中提供了标记、第三视角截图等互动功能。当您在本项目中创建或同步任何数据时，需遵守以下协议：

1. **内容定义**：“用户生成内容”（UGC）是指您在使用本项目过程中主动创建、上传或通过云端同步的任何数据（如自定义点位、评论以及第三视角截图）。
2. **所有权与授权许可**：您对您的原创内容保留所有权。但当您提交 UGC 时，即表示您授予本项目一项全球性、免版税、非独占且永久有效的许可，允许我们在提供和优化地图服务的范围内使用、存储、展示或修改您的内容。如您上传任何公共内容，即同意其他用户访问并合理使用这些内容。
3. **内容限制与行为准则**：您必须对您账号下产生的所有 UGC 负完全责任。严禁提交侵犯第三方知识产权、违反法律法规、包含恶意代码、发布垃圾广告，或蓄意上传错误图片以误导他人的内容。
4. **审核与免责声明**：本项目不对 UGC 的准确性或合法性做出任何保证。我们保留在不事先通知的情况下，自行决定修改、隐藏或永久删除任何违规内容的权利，且不对因用户内容导致的纠纷或数据丢失承担责任。如果您提供改进建议（Feedback），我们有权无偿且不受限制地使用这些反馈来优化项目。
> **注意**：针对 UGC 内容的完整相关条款与限制，请查阅 [UGC 内容声明](../ugc)。

---

## 基础设施与平台支持

本项目的基础网络、数据存储与团队协作使用了以下平台的服务。在此特别感谢为本项目的开发与部署提供基础支撑的企业/平台：

* **Atlassian**：感谢 Atlassian 为本项目授予的开源许可（Open Source License），使开发团队得以免费使用 Jira 进行敏捷项目管理，并使用 Confluence 建设团队知识库。
* **Upstash**：感谢 Upstash 为本项目提供的开源项目支持计划（Open Source Support），其 Serverless Redis 服务支撑了本项目跨设备的高频数据同步与缓存。
* **Cloudflare**：本项目的核心网络架构使用了 Cloudflare 的付费服务，包括全球内容分发网络（CDN）、DDoS 防护、DNS 解析，Argo 智能路由，以及基于 Cloudflre Worker 与 D1 Database 的边缘结构化数据存储。

---

## 开源依赖使用情况

本项目的 Web 客户端构建于以下开源技术之上。我们在此向所有开源贡献者致谢。

### 框架与核心库

#### React

* Source: `https://github.com/facebook/react`
* License: MIT License

<details>
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

```text
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

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

### 地图引擎与可视化

#### Leaflet

* Source: `https://github.com/Leaflet/Leaflet`
* License: BSD-2-Clause License

<details>
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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

This Hippocratic License is an Ethical Source license (https://ethicalsource.dev)
and is offered for use by licensors and licensees at their own risk, on an
"AS IS" basis, and with no warranties express or implied, to the maximum extent
permitted by Laws.
```

</details>

#### d3

* Source: `https://github.com/d3/d3`
* License: ISC License

<details>
<summary>查看授权协议全文</summary>

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

### 用户界面与交互

#### motion

* Source: `https://github.com/motiondivision/motion`
* License: MIT License

<details>
<summary>查看授权协议全文</summary>

```text
The MIT License (MIT)

Copyright (c) 2024 Motion (https://motion.dev) B.V.

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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

### 工具与实用库

#### ahooks

* Source: `https://github.com/alibaba/hooks`
* License: MIT License

<details>
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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

### 测试框架

#### @testing-library/dom

* Source: `https://github.com/testing-library/dom-testing-library`
* License: MIT License

<details>
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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

### 构建工具与开发环境

#### Vite

* Source: `https://github.com/vitejs/vite`
* License: MIT License

<details>
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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
<summary>查看授权协议全文</summary>

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