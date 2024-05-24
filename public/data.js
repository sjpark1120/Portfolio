const projectslist = [
  {
    id: 1,
    type: "team",
    title: "GROW UP",
    description: "화면이나 캠을 공유하며 다른 사람과 함께 공부할 수 있는 웹 사이트입니다.",
    descriptionDetail: `GROWUP은 화면이나 캠을 공유하며 다른 사람과 함께 공부할 수 있는 웹 커뮤니티 사이트입니다.\n
    IT연합동아리인 UMC에서 진행한 팀 프로젝트입니다.\n
    스터디윗미를 하면서 나름의 질문도 하고 나름의 대답도 하며 같이 성장해나갈 수 있습니다.
커뮤니티를 제공하여 나와 뜻이 같은 사람들과 소통을 하며 나의 능력을 더욱 성장해나갈 수 있습니다.
나의 플래너, 투두리스트를 작성하고 ‘라이브업’과 연동하여 그 목록에 쏟은 시간을 재며 나의 작업 시간을 한 눈에 알아볼 수 있습니다.`,
    skills: ["React", "Styled-components", "Redux"],
    image: "/assets/img1.png",
    mainFunction: ["webRtc를 이용한 실시간 1대1 통신", "로그인, 회원가입 기능", "커뮤니티 기능", "일정 관리 기능"],
    period: "2024.01.01 ~ 2024.03.05",
    participants: "프론트3, 백3, PM1, 다자인1",
    role: "FRONT-END",
    task: [
      {
        title: '프론트엔드 팀장',
        summary: ['전체적인 파일 구조 만듬', '깃을 통한 전체 코드 관리', '팀원들의 역할분배 및 소통']
      },
      {
        title: '로그인, 회원가입 페이지',
        summary: ['토큰이용한..', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
      }, {
        title: '라이브 룸 페이지',
        summary: ['실시간 어쩌고', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
      },
    ],
    issue: [{
      title: '로그인 토큰 문제',
      summary: ['문제: 내 컴퓨터에서 정상 작동하던 로그인, 회원가입이 팀원 컴퓨터에선 안됨', '해결: 인터셉터']
    }, {
      title: '백엔드와의 소통 문제',
      summary: ['문제: PM과 백엔드 간의 소통 문제로 라이브룸 방 조회 관련 api가 중복되어 만들어짐', '해결:뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/growup (1).png', page: '메인 페이지' },
    { src: '/assets/screenshot/growup (2).png', page: '로그인 페이지' },
    { src: '/assets/screenshot/growup (3).png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    ],
    github: "https://github.com/sjpark1120/GrowUp-Frontend",
    liveLink: "https://growup-umc5th.netlify.app/",
  },
  {
    id: 2,
    type: "solo",
    title: "TNOVEL",
    description: "여행 기록을 공유하는 SNS 웹 사이트 입니다.",
    descriptionDetail: `간단한 사이트소개입니다. 
    그로우업은 어쩌고 저쩌고한 사이트입니다. IT동아리인 UMC에서 팀프로젝트로 진행한 어쩌고 저쩌고
    프로젝트 설명입니다. 어쩌고 저쩌고
    이런 저런 간단한 설명을 써넣어야 겠습니다.`,
    skills: ["React", "Typescript", "Styled-components", "Recoil"],
    image: "/assets/img2.png",
    mainFunction: ["게시글, 댓글을 작성하며 여행기록을 공유하는 웹사이트"],
    period: "2024.01.01 ~ 2024.03.05",
    participants: "개인 프로젝트",
    role: "FRONT-END",
    task: [{
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    }, {
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    issue: [{
      title: '어떤 특정한 경우에 생겼던 문제',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 해결', '뭐어쩌고를 이용한 해결!']
    }, {
      title: '어떤 특정한 경우에 생겼던 문제2',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/tnovel (3).png', page: '로그인 페이지' },
    { src: '/assets/screenshot/tnovel (2).png', page: '게시글 조회 페이지' },
    { src: '/assets/screenshot/tnovel (1).png', page: '프로필 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },],
    github: "https://github.com/sjpark1120/Gridge-Test-WEB",
    liveLink: "",
  },
  {
    id: 3,
    type: "solo",
    title: "PORTPOLIO SITE",
    description: "현재 보고있는 포트폴리오 사이트입니다.",
    descriptionDetail: `간단한 사이트소개입니다. 
    그로우업은 어쩌고 저쩌고한 사이트입니다. IT동아리인 UMC에서 팀프로젝트로 진행한 어쩌고 저쩌고
    프로젝트 설명입니다. 어쩌고 저쩌고
    이런 저런 간단한 설명을 써넣어야 겠습니다.`,
    skills: ["NEXTJS", "TYPESCRIPT", "CSS-MODULE"],
    image: "/assets/img3.png",
    mainFunction: ["포트폴리오 사이트입니다."],
    period: "2024.01.01 ~ 2024.03.05",
    participants: "개인 프로젝트",
    role: "DESIGN, FRONT-END",
    task: [{
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    }, {
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    issue: [{
      title: '어떤 특정한 경우에 생겼던 문제',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 해결', '뭐어쩌고를 이용한 해결!']
    }, {
      title: '어떤 특정한 경우에 생겼던 문제2',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    screenshot: [{ src: '/assets/screenshot/portfolio (1).png', page: '메인 페이지' },
    { src: '/assets/screenshot/portfolio (2).png', page: '메인 페이지' },
    { src: '/assets/screenshot/portfolio (3).png', page: '메인 페이지' },
    { src: '/assets/screenshot/portfolio (4).png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },],
    github: "https://github.com/sjpark1120/Portfolio",
    liveLink: "",
  },
  {
    id: 4,
    type: "solo",
    title: "WeatherWear",
    description: "실시간 날씨에 맞춰 옷차림을 추천하는 사이트입니다.",
    descriptionDetail: `간단한 사이트소개입니다. 
    그로우업은 어쩌고 저쩌고한 사이트입니다. IT동아리인 UMC에서 팀프로젝트로 진행한 어쩌고 저쩌고
    프로젝트 설명입니다. 어쩌고 저쩌고
    이런 저런 간단한 설명을 써넣어야 겠습니다.`,
    skills: ["HTML", "CSS", "JAVASCRIPT", "NODEJS"],
    image: "/assets/img4.png",
    mainFunction: ["gps와 날씨api를 이용해 실시간 날씨에 맞는 옷차림을 추천하는 웹사이트"],
    period: "2024.01.01 ~ 2024.03.05",
    participants: "개인 프로젝트",
    role: "DESIGN, FRONT-END, BACK-END",
    task: [{
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    }, {
      title: '로그인, 회원가입 페이지',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    issue: [{
      title: '어떤 특정한 경우에 생겼던 문제',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 해결', '뭐어쩌고를 이용한 해결!']
    }, {
      title: '어떤 특정한 경우에 생겼던 문제2',
      summary: ['뭐어쩌고를 이용한 뭐 어쩌고 기능', '뭐어쩌고를 이용한 뭐 어쩌고 기능이이이이이']
    },
    ],
    screenshot: [{ src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },
    { src: '/assets/img1.png', page: '메인 페이지' },],
    github: "https://github.com/sjpark1120/wp_final_project?tab=readme-ov-file",
    liveLink: "",
  },
  // 다른 프로젝트 정보들 추가
];


export default projectslist;