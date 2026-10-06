// 이 객체의 내용을 수정하면 포트폴리오 전체에 반영됩니다.
// 실제 콘텐츠로 모두 교체한 뒤 isSample을 false로 바꾸세요.
const portfolio = {
  isSample: true,
  name: '김개발',
  role: '프론트엔드 개발자',
  headline: ['문제를 이해하고,', '경험을 만듭니다'],
  description: '복잡한 문제를 단순한 인터페이스로 풀어냅니다. 사용자의 작은 불편을 발견하고, 동료와 함께 오래 쓰이는 서비스를 만드는 일을 좋아합니다.',
  skills: [
    { category: 'Frontend', symbol: '</>', technologies: ['JavaScript', 'TypeScript', 'React', 'HTML / CSS'], description: '재사용 가능한 UI와 접근성 있는 인터페이스를 설계하고, 다양한 화면 크기에 대응합니다.' },
    { category: 'Backend & Data', symbol: '{ }', technologies: ['Node.js', 'Express', 'PostgreSQL'], description: 'API와 데이터 흐름을 이해하고, 프론트엔드와 서버 사이의 연결을 구현합니다.' },
    { category: 'Tools & Collaboration', symbol: '↗', technologies: ['Git', 'GitHub', 'Figma', 'Vitest'], description: '작은 단위의 변경과 코드 리뷰로 협업하고, 테스트를 통해 변경의 신뢰도를 높입니다.' }
  ],
  projects: [
    { title: 'Flowboard', subtitle: '팀의 일을 한눈에, 협업을 더 가볍게.', category: '협업 도구', visual: 'board', technologies: ['React', 'TypeScript', 'Node.js'], problem: '여러 도구에 흩어진 업무 때문에 팀의 진행 상황을 파악하기 어려웠습니다.', role: '프론트엔드 개발 · 보드 UI 및 상태 관리 설계', solution: '업무 상태를 칸반 보드로 통합하고, 필터와 낙관적 업데이트로 탐색과 편집 흐름을 개선했습니다.', result: '예시 성과: 내부 사용성 테스트에서 업무 탐색 시간 30% 감소', github: '', demo: '' },
    { title: '오늘의 기록', subtitle: '작은 습관이 쌓이는 나만의 기록 공간.', category: '개인 서비스', visual: 'journal', technologies: ['JavaScript', 'CSS', 'LocalStorage'], problem: '복잡한 기록 앱에서는 짧은 메모도 작성하기까지 많은 단계가 필요했습니다.', role: '기획 · 디자인 · 프론트엔드 개발', solution: '한 화면에서 작성과 조회가 가능하도록 단순화하고, 로컬 저장과 날짜별 검색을 구현했습니다.', result: '예시 성과: 기록 작성 과정을 4단계에서 2단계로 단축', github: '', demo: '' },
    { title: 'Shoplight', subtitle: '원하는 상품에 더 빠르게 도착하는 경험.', category: '커머스', visual: 'shop', technologies: ['React', 'TypeScript', 'REST API'], problem: '상품 이미지 로딩과 복잡한 필터가 모바일 쇼핑 경험을 방해했습니다.', role: '프론트엔드 개발 · 검색 및 상품 목록 구현', solution: '이미지 지연 로딩, 검색 디바운스와 URL 기반 필터를 적용해 탐색 경험을 개선했습니다.', result: '예시 성과: 테스트 환경의 초기 이미지 전송량 40% 감소', github: '', demo: '' }
  ],
  experience: [
    { period: '2025 — 현재', title: '프론트엔드 개발자', organization: '샘플 테크 · 예시 경력', description: '서비스 UI 개발과 공통 컴포넌트 개선에 참여하며, 사용자 피드백을 제품에 반영했습니다.' },
    { period: '2024 — 2025', title: '함께 만드는 프로젝트', organization: '개발 커뮤니티 · 예시 활동', description: '팀 프로젝트에서 기획부터 배포까지 경험하고, 코드 리뷰와 기술 공유를 진행했습니다.' },
    { period: '2023 — 2024', title: '웹 개발의 기초를 단단하게', organization: '학습 과정 · 예시 학습', description: 'JavaScript와 웹 표준을 학습하며 작은 서비스를 직접 만들고 개선했습니다.' }
  ],
  contact: { email: '', github: '' }
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function webUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

function externalLink(label, value, className = 'text-link') {
  const href = webUrl(value);
  if (!href) return null;
  const link = element('a', className, `${label} ↗`);
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function chips(items) {
  const list = element('ul', 'chips');
  items.forEach(item => list.append(element('li', '', item)));
  return list;
}

// 장식용 미니 UI. 사용자 콘텐츠는 아래에서 textContent로 삽입합니다.
const previews = {
  board: '<div class="mini-board"><div class="mini-sidebar"><b>F.</b><i></i><i></i><i></i></div><div class="mini-board-main"><div class="mini-title">Workspace <span>+ New task</span></div><div class="mini-columns"><div><small>TO DO <b>2</b></small><article><i class="mini-tag blue"></i><strong>새로운 아이디어 정리</strong><p></p><span>◉ &nbsp; ◉</span></article><article><i class="mini-tag pink"></i><strong>사용자 피드백 분석</strong><p></p></article></div><div><small>IN PROGRESS <b>1</b></small><article><i class="mini-tag purple"></i><strong>대시보드 UI 개발</strong><p></p><span>◉</span></article></div><div><small>DONE <b>1</b></small><article><i class="mini-tag green"></i><strong>프로젝트 시작하기</strong><p></p><span>✓</span></article></div></div></div></div>',
  journal: '<div class="mini-journal"><div class="journal-top">오늘의 기록 <span>☀</span></div><small>MONDAY, OCTOBER 5</small><strong>오늘, 어떤 하루였나요?</strong><p>작은 순간들을 모아 나만의 이야기를 만들어 보세요.</p><div class="journal-entry"><span>✦ &nbsp; 오늘의 작은 성취</span><p>한 걸음 더 나아간 오늘을 기록합니다.</p><div class="journal-lines"></div><small># 일상 &nbsp; # 성장</small></div></div>',
  shop: '<div class="mini-shop"><div class="shop-top">shoplight<span>Discover &nbsp; Collection &nbsp; ♡</span></div><div class="shop-heading">Everyday essentials.<small>일상에 더하는 작은 취향</small></div><div class="shop-products"><div><div class="product-art"><i class="bottle"></i></div><small>Daily bottle</small><b>₩ 24,000</b></div><div><div class="product-art peach"><i class="lamp"></i></div><small>Warm table lamp</small><b>₩ 48,000</b></div><div><div class="product-art lavender"><i class="book"></i></div><small>Idea notebook</small><b>₩ 12,000</b></div></div></div>'
};

document.title = `${portfolio.name} | ${portfolio.role} 포트폴리오`;
document.querySelector('meta[name="description"]').content = portfolio.description;
document.getElementById('brand-name').textContent = portfolio.name;
const heading = document.getElementById('hero-title');
heading.replaceChildren();
portfolio.headline.forEach((line, index) => {
  if (index) heading.append(document.createElement('br'));
  heading.append(document.createTextNode(line));
});
heading.append(element('span', 'accent', '.'));
document.getElementById('hero-identity').textContent = `${portfolio.name} · ${portfolio.role}`;
document.getElementById('hero-description').textContent = portfolio.description;
document.getElementById('sample-note').hidden = !portfolio.isSample;
document.getElementById('project-note').hidden = !portfolio.isSample;

portfolio.skills.forEach(skill => {
  const card = element('article', 'skill-card');
  const icon = element('span', 'skill-icon', skill.symbol);
  icon.setAttribute('aria-hidden', 'true');
  card.append(icon, element('h3', '', skill.category), chips(skill.technologies), element('p', '', skill.description));
  document.getElementById('skills-list').append(card);
});

document.getElementById('project-count').textContent = String(portfolio.projects.length).padStart(2, '0');
portfolio.projects.forEach((project, index) => {
  const card = element('article', 'project-card');
  const preview = element('div', `project-preview preview-${project.visual}`);
  preview.setAttribute('aria-hidden', 'true');
  preview.innerHTML = previews[project.visual] || previews.board;
  const body = element('div', 'project-body');
  const meta = element('div', 'project-meta');
  meta.append(element('span', '', project.category), element('span', '', String(index + 1).padStart(2, '0')));
  body.append(meta, element('h3', '', project.title), element('p', 'project-subtitle', project.subtitle), chips(project.technologies));
  const details = element('dl', 'project-details');
  [['문제', project.problem], ['역할', project.role], ['해결', project.solution]].forEach(([label, text]) => {
    details.append(element('dt', '', label), element('dd', '', text));
  });
  body.append(details, element('p', 'project-result', project.result));
  const links = element('div', 'project-links');
  const github = externalLink(`${project.title} GitHub`, project.github);
  const demo = externalLink(`${project.title} 데모`, project.demo);
  if (github) links.append(github);
  if (demo) links.append(demo);
  if (links.childElementCount) body.append(links);
  card.append(preview, body);
  document.getElementById('projects-list').append(card);
});

portfolio.experience.forEach(experience => {
  const item = element('li', 'timeline-item');
  item.append(element('p', 'timeline-period', experience.period), element('h3', '', experience.title), element('p', 'timeline-organization', experience.organization), element('p', 'timeline-description', experience.description));
  document.getElementById('experience-list').append(item);
});

const contacts = document.getElementById('contact-links');
const email = portfolio.contact.email.trim();
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  const link = element('a', 'button primary', `${email} ↗`);
  link.href = `mailto:${encodeURIComponent(email)}`;
  contacts.append(link);
}
const github = externalLink('GitHub 방문하기', portfolio.contact.github, 'button secondary');
if (github) contacts.append(github);
if (!contacts.childElementCount) contacts.append(element('p', 'contact-placeholder', '연락처 준비 중 · 실제 이메일 또는 GitHub 주소를 입력하면 링크가 표시됩니다.'));
document.getElementById('footer-credit').textContent = `© ${new Date().getFullYear()} ${portfolio.name}.`;

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
