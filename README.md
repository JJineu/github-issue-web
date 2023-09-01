# Github Issue Web

특정 리포지토리(facebook/react)의 이슈 목록을 확인하는 페이지입니다.


🗓️ 진행 기간: 약 3일(2023.08.29 ~ 2023.09.1)

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
- JavaScript / TypeScript / React
- 상태 관리: Context API
- HTTP Client: axios
- 라우팅: react-router-dom
- 스타일: styled-components, react-markdown

```jsx
- Create React App
  - "react": "^18.2.0"
  - "react-dom": "^18.2.0"
- axios: "^1.4.0",
- react-router-dom "^6.15.0"
- styled-components "^6.0.7"
- react-markdown": "^8.0.7",
- react-syntax-highlighter: "^15.5.0",
- remark-gfm: "^3.0.1",

- Typescript "^4.9.5"
```


<br>

## 📝 구현 내용
### 주요 기능

- Github API를 활용하여, 이슈 목록을 가져옵니다.
  - 데이터 요청 중 로딩 표시
  - 에러 화면 구현
  - Markdown 형식의 본문의 HTML으로 변환합니다.
- 이슈 목록을 정렬합니다.
  - open 상태의 이슈 중 코멘트가 많은 순으로 출력합니다.
  - 다섯 번째 셀마다 광고 이미지를 출력합니다.
- 화면을 아래로 스크롤 할 시 이슈 목록을 추가합니다.(인피니티 스크롤)


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

