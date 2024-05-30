import { title } from "process";

const projectslist = [
  {
    id: 1,
    type: "team",
    title: "GROW UP",
    description: "화면이나 캠을 공유하며 다른 사람과 함께 공부할 수 있는 웹 커뮤니티 사이트입니다.",
    descriptionDetail: `Grow Up은 IT 연합 동아리 UMC에서 진행한 팀 프로젝트로, 온라인 상에서 스터디 메이트를 찾아 함께 공부하며 성장할 수 있는 웹 커뮤니티 사이트입니다.\n
     WebRTC 기술을 활용하여 화면이나 웹캠을 공유하며 실시간으로 소통할 수 있어, 마치 같은 공간에 있는 것처럼 자유롭게 질문과 대답을 주고받으며 서로 배울 수 있습니다.
     또한 사이트 내 커뮤니티 기능을 통해 비슷한 목표와 관심사를 가진 사람들과 소통하며 정보를 공유하고 능력 향상에 도움을 받을 수 있습니다. 
     개인 플래너와 투두 리스트를 작성하여 일정을 관리할 수 있으며, '라이브업' 기능과 연동하여 작업한 시간을 측정하고 한 눈에 확인할 수 있어 시간 관리에도 용이합니다.`,
    skills: ["React", "Styled-components", "Redux"],
    image: "/assets/img1.png",
    mainFunction: ["WebRTC를 이용한 실시간 1대1 화상 통신 기능",
      "JWT 토큰 기반의 로그인, 회원가입 및 인증 기능",
      "커뮤니티 게시판 기능",
      "개인 일정 관리 및 작업 시간 관리 기능"],
    period: "2024.01.03 ~ 2024.02.21",
    participants: "프론트3, 백3, PM1, 다자인1",
    role: "FRONT-END",
    task: [
      {
        title: '프론트엔드 팀 리더',
        summary: ['전체 프론트엔드 파일 구조 설계 및 아키텍처 구축', 'Git을 통한 프론트엔드 코드 관리 및 병합', '프론트엔드 팀원들의 역할 분배, 작업 현황 파악 및 소통 총괄']
      },
      {
        title: '로그인, 회원가입 페이지 구현',
        summary: ['JWT 토큰 기반의 인증 시스템 구현 (액세스 토큰, 리프레시 토큰 발급 및 관리)', '회원가입, 이메일 인증 기능 구현', '새로고침 시에도 로그인 상태 유지를 위한 로직 구현']
      }, {
        title: '라이브 룸 페이지 구현',
        summary: ['현재 진행 중인 라이브 룸 목록 조회 및 표시 기능', '회원들의 누적 공부 시간에 따른 랭킹 표시 기능']
      },
    ],
    issue: [{
      title: '로그인 토큰 이슈',
      summary: ['문제: 개발 환경에서는 정상 작동하던 로그인, 회원가입이 팀원 환경에서는 작동하지 않음',
        '해결:  Axios 인터셉터를 활용하여 API 응답 시 에러 코드가 발생하면 자동으로 토큰 재발급 API를 요청하도록 구현']
    },
    {
      title: '백엔드 소통 이슈', summary: ['문제: PM과 백엔드 간 소통 문제로 라이브 룸 조회 관련 API가 중복 생성됨',
        '해결: PM, 백엔드와 협의 후 한 쪽의 API로 통일하고 다른 쪽에서 지원하기로 함']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/growup/growup (1).png', page: '메인 페이지' },
    { src: '/assets/screenshot/growup/growup (3).png', page: '로그인 페이지' },
    { src: '/assets/screenshot/growup/growup (10).jpg', page: '회원가입 페이지' },
    { src: '/assets/screenshot/growup/growup (8).jpg', page: '그로우룸 페이지' },
    { src: '/assets/screenshot/growup/growup (4).jpg', page: '라이브업 페이지1' },
    { src: '/assets/screenshot/growup/growup (5).jpg', page: '라이브업 페이지2' },
    { src: '/assets/screenshot/growup/growup (9).jpg', page: '라이브업 참가 페이지' },
    { src: '/assets/screenshot/growup/growup (7).jpg', page: '마이 페이지1' },
    { src: '/assets/screenshot/growup/growup (6).jpg', page: '마이 페이지2' },
    ],
    github: "https://github.com/sjpark1120/GrowUp-Frontend",
    liveLink: "https://growup-umc5th.netlify.app/",
  },
  {
    id: 2,
    type: "solo",
    title: "TNOVEL",
    description: "여행 기록을 공유하는 SNS 웹 사이트 입니다.",
    descriptionDetail: `TNOVEL은 그릿지에서 주최한 시뮬레이션 챌린지 '그릿지 테스트'를 통해 제작한 프로젝트입니다.\n
     개발 가이드라인, 화면 설계서, 피그마 에셋, API 등이 제공되었고, 주어진 기간 내에 핵심 기능을 구현하는 것이 목표였습니다.
      인스타그램과 유사한 여행 기록 SNS로, 로그인, 소셜 로그인(카카오), 회원가입, 게시글 작성/조회, 결제 시스템 등의 기능을 구현했습니다.
     챌린지 결과 상위 10% 안에 들어 합격하였습니다.`,
    skills: ["React", "Typescript", "Styled-components", "Recoil"],
    image: "/assets/img2.png",
    mainFunction: ["여행 기록 게시글 및 댓글 작성/공유 기능",
      "사진 업로드 기능",
      "게시글 무한 스크롤 기능",
      "포트원(구 아임포트) 결제 모듈 연동"],
    period: "2024.03.08 ~ 2024.03.21",
    participants: "개인 프로젝트",
    role: "FRONT-END",
    task: [
      {
        title: '인증 기능 구현',
        summary: ['로그인, 소셜 로그인(카카오) 기능 개발', '회원가입 시 생일 입력, 약관 동의 프로세스 구현']
      }, {
        title: '게시글 및 타임라인 기능',
        summary: ['게시글 CRUD 및 댓글 Read 기능 개발', '게시글 타임라인 무한 스크롤 기능 구현', '이미지 첨부 시 파일 업로드 용량 제한 적용']
      }, {
        title: '결제 모듈 연동',
        summary: ['포트원(구 아임포트) 결제 모듈 연동 및 화면 구현', 'PC 환경에서 결제 후 콜백 함수를 통한 결제 성공 확인', '모바일 환경에서 리다이렉트 URL로 이동 후 결제 성공 확인']
      },
    ],
    issue: [{
      title: '게시글 조회 순서 이슈',
      summary: ['문제: 게시글 조회 API를 사용하면 이미 페이지네이션된 결과가 반환되어, 전체 페이지 수를 알 수 없어 최신 순으로 조회할 수 없음',
        '해결: useEffect를 활용하여 첫 접속 시 첫 페이지를 조회하고 전체 페이지 수를 파악한 후, 마지막 페이지(최신)를 불러오도록 구현. 무한 스크롤 시 페이지를 1씩 줄여가며 이전 페이지를 불러옴']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/tnovel/tnovel (4).png', page: '로그인 페이지' },
    { src: '/assets/screenshot/tnovel/tnovel (5).png', page: '회원가입 페이지' },
    { src: '/assets/screenshot/tnovel/tnovel (2).png', page: '게시글 작성' },
    { src: '/assets/screenshot/tnovel/tnovel (3).png', page: '게시글 조회' },
    { src: '/assets/screenshot/tnovel/tnovel (8).png', page: '타임라인' },
    { src: '/assets/screenshot/tnovel/tnovel (1).png', page: '결제 페이지' },
    ],
    github: "https://github.com/sjpark1120/Gridge-Test-WEB",
    liveLink: "https://tnovel.vercel.app/",
  },
  {
    id: 3,
    type: "solo",
    title: "PORTFOLIO SITE",
    description: "현재 보고있는 포트폴리오 사이트입니다.",
    descriptionDetail: `이 사이트는 Next.js 14의 App Router 기능을 활용하여 제작한 개인 포트폴리오 웹사이트입니다. 
    자기소개와 프로젝트 포트폴리오를 소개하고 있으며, 디자인과 프론트엔드 개발을 모두 직접 담당했습니다.
    반응형 웹 디자인을 적용하여 모바일에서도 최적화된 경험을 제공합니다.`,
    skills: ["NEXTJS", "TYPESCRIPT", "CSS-MODULE"],
    image: "/assets/img3.png",
    mainFunction: ["자기소개 및 프로젝트 포트폴리오 소개",
      "이메일 문의 기능",
      "Full Page Scroll 기능"
    ],
    period: "2024.04.15 ~ 2024.05.31",
    participants: "개인 프로젝트",
    role: "DESIGN, FRONT-END",
    task: [{
      title: '웹 디자인',
      summary: ['Figma를 활용한 전체 사이트 디자인', '모바일 반응형 디자인 적용']
    }, {
      title: 'Full Page Scroll 기능 구현',
      summary: ['useRef, WheelEvent, currentSectionIndex 활용하여 직접 구현']
    }, {
      title: '이메일 전송 기능 구현',
      summary: ['Email.js API를 활용하여 Contact 페이지에서 이메일 전송 기능 구현']
    }, {
      title: '모달 라우팅 구현',
      summary: ['Next.js 14의 Intercepting Routes와 Parallel Routes 기능 활용',
        '모달 창 내에서 탐색 시 모달로 렌더링, 새로고침 시 독립 페이지로 렌더링하여 사용자 경험 향상']
    },
    ],
    issue: [{
      title: 'Full Page Scroll 기능 구현 이슈',
      summary: ['문제: react-fullpage 라이브러리 사용 시 모달 창 스크롤과 충돌하는 이슈 발생',
        '해결:useRef, WheelEvent, currentSectionIndex를 활용하여 직접 구현']
    },
    {
      title: '스크롤 이벤트 과다 발생 이슈',
      summary: ['문제: Full Page Scroll기능의 스크롤 이벤트가 과도하게 발생하여 성능 저하 초래.',
        '해결: Lodash 라이브러리의 throttle 기능을 적용하여 0.3초마다 이벤트 발생하도록 최적화.']
    },
    {
      title: '로딩 화면 이슈',
      summary: ['문제: Next.js의 loading.tsx 파일을 사용하면 모든 로딩 상황에서 로딩 화면이 표시됨',
        '해결:useState를 활용하여 초기 실행 시에만 로딩 화면이 표시되도록 구현']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/portfolio/portfolio (1).png', page: '메인 페이지' },
    { src: '/assets/screenshot/portfolio/portfolio (2).png', page: '자기소개 페이지' },
    { src: '/assets/screenshot/portfolio/portfolio (3).png', page: '프로젝트 목록 페이지' },
    { src: '/assets/screenshot/portfolio/portfolio (5).png', page: '프로젝트 소개 페이지' },
    { src: '/assets/screenshot/portfolio/portfolio (6).png', page: '사이드 메뉴' },
    { src: '/assets/screenshot/portfolio/portfolio (4).png', page: 'contact 페이지' },
    ],
    github: "https://github.com/sjpark1120/Portfolio",
    liveLink: "https://portfolio-sujin.vercel.app/",
  },
  {
    id: 4,
    type: "solo",
    title: "WeatherWear",
    description: "실시간 날씨에 맞춰 옷차림을 추천하는 사이트입니다.",
    descriptionDetail: `매일 외출하기 전 날씨를 확인할 때 기온만 보고 어떻게 옷을 입어야 할지 망설이거나 혼란스러운 상황이 자주 있습니다.
     때문에 실시간으로 제공되는 날씨 정보와 기온에 따른 옷차림을 추천해주는 서비스가 있다면 매우 편리할 것으로 생각하여 이번 프로젝트를 기획하게 되었습니다.
      이 프로젝트의 목적은 사용자에게 현재 날씨를 알려주고 그에 맞는 적절한 의상을 제안하는 직관적인 서비스를 제공함으로써, 매일 아침 옷차림으로 인한 추위나 더위에 대한 고민을 덜어주고자 하는 것입니다.`,
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "NODEJS"
    ],
    image: "/assets/img4.png",
    mainFunction: [
      "웹의 GPS 권한을 이용한 사용자 위치 정보 가져오기",
      "Google Places API를 이용한 주소 자동 완성 및 위도/경도 가져오기",
      "Open Weather Map API를 이용한 날씨 정보 제공",
      "온도에 따른 옷차림 추천 기능",
      "방명록 기능"
    ],
    period: "2023.06.10 ~ 2024.6.21",
    participants: "개인 프로젝트",
    role: "DESIGN, FRONT-END, BACK-END",
    task: [
      {
        title: "UX/UI 디자인",
        summary: ["단순하면서도 통일된 디자인 구성",
          "배경에는 그라데이션 효과를 사용하여 시간대별로 다른 분위기를 연출합니다.",
          "낮 시간대에는 밝은 하늘과 태양을 배경으로 하여 화창한 날씨를 나타내고, 저녁 8시부터 새벽 4시까지는 어두운 배경에 달을 활용하여 야간 모드를 표현합니다."]
      },
      {
        title: "프론트엔드 개발",
        summary: [
          "HTML, CSS, JavaScript를 사용하여 사이트 구조 구현",
          "Geolocation API와 Open Weather Map API, Google Geocoding API를 활용하여 현재 위치와 날씨 데이터 가져오기"
        ]
      },
      {
        title: "백엔드 개발",
        summary: [
          "Node.js와 Express를 사용하여 방명록 기능 구현",
          "방명록 작성, 삭제 기능 구현"
        ]
      }
    ],
    issue: [
      {
        title: "공유 버튼 사라짐 이슈",
        summary: [
          "문제: 광고 차단 프로그램으로 인한 버그 발견",
          "해결: 해당 버그 수정 및 해결"
        ]
      },
      {
        title: "방명록 작성 시간 이상 기록 이슈",
        summary: [
          "문제: toLocaleString 메소드 옵션값 미설정으로 인한 UTC 시간 표기 문제 발견",
          "해결: 옵션값 설정을 통해 한국 시간으로 표기되도록 수정"
        ]
      }
    ],
    screenshot: [
      {
        src: "/assets/screenshot/weatherwear/weatherwear (1).png",
        page: "메인 날씨 페이지(낮)"
      },
      {
        src: "/assets/screenshot/weatherwear/weatherwear (2).png",
        page: "메인 날씨 페이지(밤)"
      },
      {
        src: "/assets/screenshot/weatherwear/weatherwear (3).png",
        page: "옷차림 추천 페이지(낮)"
      },
      {
        src: "/assets/screenshot/weatherwear/weatherwear (4).png",
        page: "옷차림 추천 페이지(밤)"
      },
      {
        src: "/assets/screenshot/weatherwear/weatherwear (5).png",
        page: "공유 페이지"
      },
      {
        src: "/assets/screenshot/weatherwear/weatherwear (6).png",
        page: "방명록 페이지"
      }
    ],
    github: "https://github.com/sjpark1120/wp_final_project?tab=readme-ov-file",
    liveLink: "https://weather-wear1120.netlify.app/"
  }
  // 다른 프로젝트 정보들 추가
];


export default projectslist;