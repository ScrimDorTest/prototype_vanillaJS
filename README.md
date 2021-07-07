# prototype_vanillaJS
make prototype only with HTML, CSS, vanilla JS

https://scrimdortest.github.io/prototype_vanillaJS/

## 핵심 기능 소개

> 회원가입

유저 회원가입 & 클랜 창설

1. 필요한 데이터 기입
2. 자신의 (클랜의) 성향에 맞는 태그 지정

> 유저들이 원하는 타입의 매칭 시스템

|Type|Friend Board| Clan Board & Scrim Board|
|:---:|:---:|:---:|
|속성|즉흥적인 만남|진지한 교류|
|로그인 필요 여부|X|O|
|성향데이터 필요 여부|X(로그인 없이는 예를 들어, 티어, 시간대, 하는 게임의 카테고리 별로 보이게)|O|
|view 형식|게시판 형식(최신순) -> 로그인 시에는 유저 맞춤 추천|유저 맞춤 추천|
|연락 방법|단순 보는 데에는 로그인이 필요 없지만, 실제 메시지를 보내거나 맞춤 추천을 받기 위해서는 회원가입 필요 | 해당 클랜에 직접 DM|

각 게시판에는 프로필 사진, 아이디(클랜 이름), 간단한 소개글, 성향을 보여주고 
상세보기로 들어가면 확인 가능.

유저는 자신이 같이 하고 싶은 사람 구할 때, 글을 등록. 최대한 바로 기존의 정보 가지고 <등록> 버튼만 누르면 되게.
만약 매칭 되면 *매칭완료* 표시

> 유저들이 직접 만드는 클랜

클랜에 속한 사람들이 활동할 수 있는 클랜 페이지.
자유도 높게 꾸밀 수 있고, 일정, 게시판 등등.

> 서로 연락을 주고 받을 수 있는 메시지

## 필요한 데이터

### 유저 데이터 
- **사이트 아이디** (--> SNS, 구글 로그인 가능??)
- **사이트 pwd**
- **닉네임**
- 성별 
- 나이
- 프로필 사진
- 자기소개 글
- **매너 레벨** (긍정 평가, 부정 평가-다른 사람은 상세 내용 모르게)
- **자주 하는 게임**
- 게임 아이디, 티어, 라인 등등
- 플레이 시간대
- **플레이 성향**

### 클랜 데이터
- **(DB저장용) 클랜 ID**
- **클랜 이름**
- 클랜 프로필 사진
- **클랜 약칭**
- **클랜원 수 (현재 / 최대)**
- **클랜에 속한 유저**
- **권한 유저** (->클랜장 만 표시되고, 내부적으로 역할 만들 수 있게.)
- **클랜 페이지**
- **클랜 성향** (클랜이 설정한 성향?? 클랜원 성향 최빈값?)
- **클랜 매너 레벨**
- **클랜소개글**
- 
