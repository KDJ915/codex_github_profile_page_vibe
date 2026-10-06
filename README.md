# 개발자 포트폴리오

한국어 중심의 한 페이지 포트폴리오입니다. HTML·CSS·JavaScript만 사용하며 설치나 빌드 과정, 외부 API 호출이 없습니다.

## 콘텐츠 수정

`script.js` 상단의 `portfolio` 객체를 수정하세요.

- `name`, `role`, `headline`, `description`: 이름, 직무, 첫 화면 제목과 소개
- `skills`: 분야, 기술 목록, 활용 경험
- `projects`: 프로젝트명, 설명, 문제, 역할, 해결 과정, 성과, 링크
- `experience`: 기간, 활동명, 소속, 설명
- `contact.email`, `contact.github`: 실제 이메일과 GitHub 프로필 URL
- `isSample`: 모든 예시 콘텐츠를 실제 내용으로 교체한 뒤 `false`로 설정

이름·경력·프로젝트·성과는 모두 예시입니다. 샘플 수치를 실제 성과처럼 게시하지 말고 본인의 경험과 검증 가능한 결과로 교체하세요. `isSample`은 안내 문구만 숨깁니다. 각 항목의 “예시” 문구도 직접 수정해야 합니다.

프로젝트의 `visual`은 `board`, `journal`, `shop` 중 하나입니다. CSS로 만든 장식용 미니 화면이므로 실제 서비스 스크린샷은 아닙니다. 필요하면 해당 미리보기를 실제 이미지로 교체하고 의미 있는 대체 텍스트를 추가하세요. 이미지 경로는 `./assets/example.png`처럼 상대 경로를 사용합니다.

프로젝트의 `github`와 `demo`가 비어 있으면 링크는 표시되지 않습니다. 입력할 때는 `https://github.com/...`과 같은 완전한 URL을 사용하세요. 연락처도 비어 있거나 형식이 맞지 않으면 링크를 표시하지 않습니다. 이메일 또는 GitHub 주소 하나만 입력해도 사용할 수 있습니다.

색상은 `styles.css`의 `:root` 변수에서 변경할 수 있습니다. 메뉴와 섹션의 ID는 서로 일치해야 합니다.

## 로컬 확인

`index.html`을 브라우저로 직접 열 수 있습니다. 로컬 서버를 사용하려면 프로젝트 폴더에서 실행하세요.

```powershell
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 종료는 터미널에서 `Ctrl+C`를 누릅니다.

## GitHub 연결 및 Pages 배포

1. GitHub에서 비어 있는 공개 저장소를 만듭니다. 계정 대표 사이트라면 `사용자명.github.io`, 프로젝트 사이트라면 원하는 저장소 이름을 사용합니다.
2. 로컬 프로젝트 폴더에서 다음 명령을 실행합니다. 마지막 원격 주소는 만든 저장소의 실제 주소로 바꾸세요.

```powershell
git init -b main
git add index.html styles.css script.js README.md .nojekyll
git commit -m "Create developer portfolio"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

3. 저장소의 **Settings → Pages → Build and deployment**에서 **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**를 선택하고 저장합니다.
4. 배포가 끝나면 Pages 설정에 표시되는 주소로 접속합니다. 대표 사이트는 `https://USERNAME.github.io/`, 프로젝트 사이트는 `https://USERNAME.github.io/REPOSITORY/`입니다.
5. 수정한 파일을 커밋하고 `main`에 푸시하면 다시 배포됩니다.

`.nojekyll`은 정적 파일을 그대로 제공하기 위한 파일입니다. 프레임워크 빌드나 별도의 Actions 워크플로는 필요하지 않습니다. 저장소가 이미 연결되어 있다면 초기화·원격 추가 단계는 생략하세요.

공식 안내: [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 확인할 항목

- 모바일(375px), 태블릿(768px), 데스크톱(1440px)에서 가로 넘침과 글자 잘림 확인
- 메뉴 이동, 본문 바로가기, Tab 키 포커스, 동작 감소 설정 확인
- 실제 연락처와 프로젝트 링크의 목적지 확인
- 브라우저 콘솔 오류 및 파일 로딩 실패 확인
- GitHub Pages 저장소 하위 주소에서도 CSS와 JavaScript 로딩 확인

블로그, 다국어 전환, 프로젝트 상세 페이지, 문의 서버는 포함하지 않습니다.
