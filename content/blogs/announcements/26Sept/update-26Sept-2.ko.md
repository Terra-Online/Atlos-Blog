---
title: "1.5 하반기 업데이트"
description: "1.5 업데이트 2부: 오른쪽 클릭 메뉴, 대폭 향상된 성능, 새로운 OEM SDK를 소개합니다."
date: 2026-09-24
---

항상 엔드필드 지도를 이용하고 응원해 주셔서 감사합니다.

지난 몇 주 동안 OEM에 여러 주요 업데이트를 적용하고, OEM 지도 데이터를 다른 애플리케이션에서도 사용할 수 있도록 공개했습니다. 이번 업데이트에서는 새로운 오른쪽 클릭 메뉴, 대량 포인트 렌더링 성능 개선, 더 편리해진 공유 링크, 모바일 사용성 개선과 엔드필드 지도 SDK를 소개합니다.

## 오른쪽 클릭 메뉴

![](/blogs/announcements/26Sept/fig3.webp)

* **포인트**를 오른쪽 클릭하면 해당 포인트와 소속 하위 지역에 대한 메뉴가 열립니다. 아카이브 포인트는 일괄 작업에서 같은 종류로 처리됩니다.
* **지도의 빈 곳**을 오른쪽 클릭하면 해당 좌표로 바로 이동하는 링크를 복사하고, 표시할 하위 지역을 바꾸고, 완료된 포인트 표시를 전환하거나 최근 지도 작업을 실행 취소 및 다시 실행할 수 있습니다.
* **포인트 필터**를 오른쪽 클릭하면 해당 카테고리의 필터를 한 번에 모두 선택하거나 해제할 수 있습니다.
* 데스크톱에서는 **Option (⌥)/Alt** 키를 누른 채 오른쪽 클릭하면 브라우저 기본 메뉴를 열 수 있습니다.

## 성능 개선

![](/blogs/announcements/26Sept/fig4.webp)

많은 포인트를 표시할 때의 렌더링을 전면 개선해 OEM의 성능을 크게 높였습니다. 포인트가 밀집한 지역에서도 지도를 한층 가볍고 부드럽게 탐색할 수 있습니다.

현재 포인트 규모에서는 모든 필터를 켜고 클러스터링을 꺼도 지도를 부드럽게 드래그하며 넓은 지역을 한눈에 살펴볼 수 있습니다.

## 공유 링크 및 원하는 콘텐츠 열기

이제 포인트와 지도 오른쪽 클릭 메뉴에서 공유 링크를 만들 수 있습니다. 포인트 링크는 특정 커뮤니티 이미지나 공개 댓글로 바로 연결할 수도 있습니다. 링크를 열면 해당 포인트 상세 화면이 표시되고 지정한 이미지 또는 댓글이 선택됩니다.

모바일에서는 적과 아카이브의 그룹별 필터를 더 쉽게 살펴볼 수 있습니다. 첫 사용자 안내도 간결하게 다듬었고, 페이지가 숨겨져 있을 때 위치 동기화 작업을 줄여 백그라운드 탭이 성능에 미치는 영향을 낮췄습니다.

## 내 사이트에 엔드필드 지도 추가하기

![](/blogs/announcements/26Sept/fig5.webp)

엔드필드 지도 SDK를 정식으로 공개했습니다. Open Endfield Map SDK를 사용하면 OEM의 인터랙티브 지도를 Wiki, 게임 데이터베이스, 플레이어용 도구 사이트에 넣을 수 있습니다. 직접 관리하는 공략과 데이터 페이지에 바로 쓸 수 있는 지도를 추가해 보세요. 포인트 데이터와 지도 리소스는 OEM이 계속 관리하므로, 지도를 처음부터 만들거나 데이터를 직접 갱신할 필요 없이 자체 도구와 공략을 만드는 데 집중할 수 있습니다.

SDK에서는 지역, 층, 표시 언어를 전환하고 포인트, 지명, 지역 경계 등 기본 지도 기능을 사용할 수 있습니다. 게임 버전별 과거 지도 타일도 원하는 버전을 골라 무료로 이용할 수 있습니다. 공략이나 데이터 항목에 나오는 위치에 자체 포인트를 추가하고 지도와 사이트 콘텐츠를 연결할 수도 있습니다. JavaScript 및 TypeScript 프로젝트를 지원하며 바로 사용할 수 있는 React 연동도 제공합니다.

[SDK 데모](https://sdk.opendfieldmap.org/demo)에서 페이지에 맞게 지도를 조정하고 바로 사용할 수 있는 연동 코드를 생성해 보세요. 자세한 내용은 [OEM-SDK 프로젝트](https://github.com/Terra-Online/OEM-SDK)에서 확인할 수 있으며, `@opendfieldmap/sdk`는 [npm](https://www.npmjs.com/package/@opendfieldmap/sdk)에서 설치할 수 있습니다.

---

이상으로 이번 업데이트 안내를 마칩니다. 지도 사용 중 문제가 발생하거나 이번 기능에 대한 의견 및 제안이 있으시면 아래 채널을 통해 연락해 주세요.

* **Discord 커뮤니티**: [Endfield Surveying Institute 참여하기](https://discord.gg/BFMAKZSUG7)
* **Bluesky**: [Open Endfield Map 팔로우하기](https://bsky.app/profile/opendfieldmap.bsky.social)
* **X**: [Open Endfield Map 팔로우하기](https://x.com/OpenEndfieldMap)
* **지원 이메일**: [support@opendfieldmap.org](mailto:support@opendfieldmap.org)
* **Atlos 소스 코드**: [Atlos on GitHub](https://github.com/Terra-Online/Atlos)
* **OEM-SDK 소스 코드**: [OEM-SDK on GitHub](https://github.com/Terra-Online/OEM-SDK)
