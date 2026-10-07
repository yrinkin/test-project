// 탭 전환
document.querySelectorAll('.tabs').forEach((tabs) => {
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab');
    if (!btn) return;
    const card = tabs.closest('.card');
    card.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === btn));
    card.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.id === btn.dataset.target));
  });
});

// 주제별 콘텐츠 채우기
const topics = {
  'topic-life': {
    colors: ['#f6d365', '#fda085'],
    items: [
      ['작은 방도 넓어 보이는 수납 인테리어 7가지', '리빙매거진'],
      ['가을 맞이 침구 교체, 이것만 알면 된다', '홈스타일'],
      ['베란다 홈가드닝 초보 가이드', '그린라이프'],
      ['미니멀 라이프 1년 차 솔직 후기', '오늘의집들이'],
    ],
  },
  'topic-food': {
    colors: ['#a1c4fd', '#c2e9fb'],
    items: [
      ['10분 완성 원팬 파스타 레시피', '쿡앤쿡'],
      ['제철 전어, 맛있게 먹는 법', '바다식탁'],
      ['동네 숨은 빵집 투어 BEST 5', '빵지순례'],
      ['에어프라이어 간식 모음', '집밥연구소'],
    ],
  },
  'topic-travel': {
    colors: ['#84fab0', '#8fd3f4'],
    items: [
      ['단풍 명소 드라이브 코스 추천', '트래블노트'],
      ['주말 1박 2일 강릉 여행 루트', '여행가방'],
      ['가성비 해외 여행지 TOP 10', '월드투어'],
      ['캠핑 초보를 위한 장비 체크리스트', '캠핑로그'],
    ],
  },
  'topic-tech': {
    colors: ['#cfd9df', '#e2ebf0'],
    items: [
      ['올해 하반기 스마트폰 비교 총정리', 'IT리뷰'],
      ['AI 비서 200% 활용법', '테크인사이트'],
      ['노트북 배터리 오래 쓰는 설정', '디지털팁'],
      ['무선 이어폰 고르는 기준', '기어랩'],
    ],
  },
};

Object.entries(topics).forEach(([id, { colors, items }]) => {
  const panel = document.getElementById(id);
  const list = document.createElement('div');
  list.className = 'content-list';
  items.forEach(([title, source], i) => {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'content-item';
    a.innerHTML = `
      <div class="thumb" style="background:linear-gradient(${120 + i * 40}deg, ${colors[0]}, ${colors[1]})"></div>
      <div><strong></strong><span></span></div>`;
    a.querySelector('strong').textContent = title;
    a.querySelector('span').textContent = source;
    list.appendChild(a);
  });
  panel.appendChild(list);
});

// 헤드라인 롤링
const rolling = document.getElementById('rolling');
const lines = rolling.querySelectorAll('li');
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % lines.length;
  lines.forEach((li) => (li.style.transform = `translateY(-${idx * 100}%)`));
}, 3000);

// 검색
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  if (!q) {
    document.getElementById('searchInput').focus();
    return;
  }
  alert(`"${q}" 검색 결과 페이지로 이동합니다. (데모)`);
});
