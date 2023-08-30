# Github Issue Web

특정 리포지토리(facebook/react)의 이슈 목록을 확인하는 페이지입니다.


🗓️ 진행 기간: 약 2일 (2023.08.29 ~ 2023.08.31)

💡 개발 인원 : 1인 [@김현진](https://github.com/JJineu)

※ 본 과제는 [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)를 바탕으로 진행되었습니다. 

<br>

## 🧑🏻‍💻 프로젝트 정보
### 실행 방법

- 배포링크: [https://github-issue-web.vercel.app/](https://github-issue-web.vercel.app/)

- 링크가 실행되지 않는 경우 아래 명령어를 순차적으로 입력하여 실행해주세요.
  ```jsx
  git clone https://github.com/JJineu/github-issue-web.git
  npm install
  npm start
  ```
  - 실행하기 위해서는 Node.js가 설치된 환경이 필요합니다.



### 프로젝트 구조

```jsx
src
 ┣ 📂 api         네트워크 api 호출관련 로직
 ┣ 📂 components  컴포넌트 분리
 ┃ ┣ auth
 ┃ ┣ common
 ┃ ┗ issue
 ┣ 📂 constants   상수 처리
 ┣ 📂 context     전역 상태
 ┣ 📂 hooks       커스텀 훅
 ┣ 📂 pages       페이지 분리
 ┃ ┗ issue
 ┣ 📂 routes      라우팅
 ┣ 📂 types       타입 정의
 ┗ 📂 utils       분리되는 함수

```

### 기술 스택 및 사용한 라이브러리

- Create React App
  - "react": "^18.2.0"
  - "react-dom": "^18.2.0"
- Typescript "^4.9.5"
- react-router-dom "^6.15.0"
- styled-components "^6.0.7"

<br>

## 📝 구현 내용
### 주요 기능

- 지정한 조건에 맞는 데이터 요청 및 표시 (코멘트 수 많은 순, 열려있는 이슈 한정)
- 이슈 목록 및 상세 화면 기능 구현
- 에러 화면 구현
- Markdown 형식의 본문의 HTML 변환
- 무한 스크롤 및 데이터 요청 중 로딩 표시
- 특정 이슈 개수마다 정해진 광고 이미지 및 링크 표시




## 1. 무한 스크롤
### ✅ Assignment 1




<br>


## 🫱🏻‍🫲🏿 Commit Convention & Branch Strategy
### Commit Convention

e.g.  FEAT: 로그인 유효성 검증 기능 구현

| 태그 | 설명 (한국어로만 작성하기) |
| --- | --- |
| FEAT: | 새로운 기능 추가 (변수명 변경 포함) |
| FIX: | 버그 해결 |
| DESIGN: | CSS 등 사용자 UI 디자인 변경 |
| STYLE: | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| REFACTOR: | 프로덕션 코드 리팩토링 |
| COMMENT: | 필요한 주석 추가 및 변경 |
| DOCS: | 문서를 수정한 경우 |
| CHORE: | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME: | 파일 혹은 폴더명을 수정하거나 옮기는 작업 |
| REMOVE: | 파일을 삭제하는 작업만 수행한 경우 |
| INIT: | 초기 커밋을 진행한 경우 |

### Branch Strategy

브랜치는 아래의 브랜치만 사용하도록 협의했습니다.

| 브랜치 | 설명 |
| --- | --- |
| main | 배포 및 최종본, 출시 버전의 브랜치 |
| develop | 개발용 버전의 기준이 되는 브랜치 |
| feature/~ | 세부 기능 개발을 위한 브랜치 |
| refactor | 리팩토링을 위한 브랜치 |


<br>

## 추가 정보

### 배포

- 해당 프로젝트는 vercel 을 통해 배포되었습니다. [배포링크](https://github-issue-web.vercel.app/)
