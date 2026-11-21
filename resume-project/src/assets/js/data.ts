export interface ProjectBullet {
  text: string;
  children?: string[];
}

export interface ProjectTask {
  title: string;
  bullets: Array<string | ProjectBullet>;
}

export interface Project {
  title: string;
  company: string;
  period: string;
  tasks: ProjectTask[];
}

export interface Career {
  company: string;
  scale: string;
  domain: string;
  department: string;
  position: string;
  period: string;
  duties: string[];
}

export interface Advisory {
  organization: string;
  period: string;
  description: string;
}

export const advisories: Advisory[] = [
  {
    organization: "프로원",
    period: "2026.06 ~ 2026.06",
    description: "온라인 전환 중개 플랫폼 운영",
  },
  {
    organization: "한국카본데이터",
    period: "2026.01 ~ 2026.01",
    description: "한국형 녹색분류체계 기반 환경개선효과 산정방법론 개발 관련 업무 수행",
  },
];

export const careers: Career[] = [
  {
    company: "쿤텍",
    scale: "중소기업",
    domain: "공급망 보안",
    department: "SCS 연구개발팀 엔진 개발파트",
    position: "선임 연구원",
    period: "2025.01 ~ 재직 중",
    duties: [
      "사이버작전사령부 탐색시제 프로젝트 Tech Lead",
      "사이버작전사령부 탐색시제 프로젝트 보안 취약점 대응",
      "공급망 보안 관리 솔루션 AEZIZ 3.0 프론트엔드 개발",
      "자사 SBOM 엔진 최적화",
    ],
  },
  {
    company: "앤로보틱스",
    scale: "중소기업",
    domain: "키오스크",
    department: "R&D 웹 개발팀",
    position: "대리",
    period: "2024.05 ~ 2024.10",
    duties: [
      "Tech Lead",
      "Kiosk 개발",
      "Kiosk 사용자 매뉴얼 작성",
      "자사 ERP 고도화",
      "클라이언트 기술지원",
    ],
  },
  {
    company: "엠플랜잇",
    scale: "스타트업",
    domain: "웹 에이전시",
    department: "기업부설연구소",
    position: "선임 연구원",
    period: "2022.01 ~ 2024.04",
    duties: [
      "클라이언트 솔루션 및 웹사이트 SI / SM",
      "프로젝트 PM",
      "웹 접근성 개선",
      "보안 감사 대응",
      "클라우드 / 서버 관리",
    ],
  },
  {
    company: "컴퓨존",
    scale: "중견기업",
    domain: "이커머스",
    department: "전산팀",
    position: "사원",
    period: "2017.09 ~ 2021.01",
    duties: [
      "자사 이커머스 유지보수",
      "협력업체 기간계 시스템 (외부 WMS) 연동 및 미들웨어 개발",
      "ERP 재고 파트 관리 및 쿼리 최적화",
      "배포 점검 / 변경 영향도 분석",
      "장애 조치 및 시스템 상태 모니터링 ",
    ],
  },
];

function careerMonths(period: string) {
  const match = period.match(/^(\d{4})\.(\d{2}) ~ (.+)$/);
  if (!match) return 0;
  const startYear = Number(match[1]);
  const startMonth = Number(match[2]);
  const endMatch = match[3].match(/^(\d{4})\.(\d{2})/);
  const now = new Date();
  const endYear = endMatch ? Number(endMatch[1]) : now.getFullYear();
  const endMonth = endMatch ? Number(endMatch[2]) : now.getMonth() + 1;
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

function formatMonths(months: number) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (years > 0 && rest > 0) return `${years}년 ${rest}개월`;
  if (years > 0) return `${years}년`;
  return `${rest}개월`;
}

export const totalTenure = formatMonths(careers.reduce((sum, career) => sum + careerMonths(career.period), 0));

export const projects: Project[] = [
  {
    title: "MD 업무 자동화 플랫폼 및 브랜드 사이트 개발",
    company: "RAD.",
    period: "2026.03 ~ 2026.10",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: [
          "헤드 MD 및 실무자와의 요구사항 인터뷰를 통해 플랫폼 설계에 필요한 전체 업무 프로세스 분석 및 도메인 지식 체계화",
        ],
      },
      {
        title: "Cloudflare 기반 브랜드 사이트 구축",
        bullets: [
          "Cloudflare Workers 기반 SSG/SSR 렌더링 방식으로 호스팅 비용 절감 (Free-tier 활용으로 일정 트래픽 도달 시까지 인프라 비용 0원 운영)",
        ],
      },
      {
        title: "MD 플랫폼 개발",
        bullets: [
          "베어 메탈 서버 운영 (Windows 11 Pro Hyper-V 사용)",
          "K3s를 도입하여 로컬 환경 구축 및 향후 AWS 전환 시, 즉시 EKS로 마이그레이션 가능한 컨테이너 오케스트레이션 구조 설계",
        ],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: ["정규화 작업 및 Relation 최적화"],
      },
    ],
  },
  {
    title: "공급망 보안 관리 솔루션 AEZIZ 3.0",
    company: "쿤텍",
    period: "2025.12 ~ 2026.02",
    tasks: [
      {
        title: "자체개발 SBOM 엔진 개선",
        bullets: [
          "CVE 탐지 로직 디버깅 및 최적화를 통해 오탐지율을 낮추고, 탐지 정확도 85% 이상 달성",
        ],
      },
      {
        title: "프론트엔드 개발",
        bullets: [
          "CVE/CWE/CPE/CAPEC 등 보안 취약점 정보를 그리드 형태로 시각화하는 UI 구현",
        ],
      },
    ],
  },
  {
    title: "사이버작전사령부 탐색시제",
    company: "쿤텍",
    period: "2025.01 ~ 2026.01",
    tasks: [
      {
        title: "프론트엔드 Tech Lead 및 서버 구축",
        bullets: [
          "클라이언트사 (넥스원) PM과 요구사항 협의 및 기술 스택 선정",
          "서버 아키텍처 설계 및 프로젝트 리딩",
        ],
      },
      {
        title: "보안 취약점 대응",
        bullets: ["발견된 보안 취약점 조치를 통해 보안 심사 통과"],
      },
    ],
  },
  {
    title: "자사 ERP 고도화 작업",
    company: "앤로보틱스",
    period: "2024.08 ~ 2024.09",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: ["클라이언트 요구사항 분석 및 우선순위 설정"],
      },
      {
        title: "기존 시스템 분석 및 도메인 분리 (.NET -> Java 마이그레이션)",
        bullets: [
          ".NET 레거시 코드의 주요 도메인 로직을 분석하여 Java 기반으로 단계적 전환, 마이그레이션 초기 기반 구조 확립",
        ],
      },
      {
        title: "로그인 / 계정 도메인 API 개발",
        bullets: ["스프링 시큐리티 기반 세션 인증 방식 적용"],
      },
      {
        title: "개발 서버 구축",
        bullets: [],
      },
      {
        title: "DB 쿼리 최적화 및 인덱싱",
        bullets: [
          "쿼리 튜닝으로 응답 속도 개선 (최대 1분 → 2초 이내, 최대 30배 성능 향상)",
        ],
      },
      {
        title: "프론트엔드 그리드 모듈화",
        bullets: ["그리드 테이블 컴포넌트 모듈화로 보일러플레이트 최소화"],
      },
      {
        title: "반응형 디자인 적용",
        bullets: ["모바일/태블릿/데스크탑 대응 반응형 UI 구현"],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: [],
      },
      {
        title: "형상 관리",
        bullets: [
          "Git Flow 브랜치 전략 적용 (master, hotfix, release, develop, feature 등)",
        ],
      },
    ],
  },
  {
    title: "질병관리본부 의과학지식센터 좌석 예약 KIOSK 개발 및 유지보수",
    company: "앤로보틱스",
    period: "2024.06 ~ 2024.08",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: ["클라이언트 요구사항 분석 및 우선순위 설정"],
      },
      {
        title: "클라이언트 커뮤니케이션",
        bullets: ["추가 요청에 대한 지속적인 대응으로 기간 내 90% 이상 요구사항 충족"],
      },
      {
        title: "질병관리본부 API 연동 로그인 도메인 개발",
        bullets: [],
      },
      {
        title: "의과학지식센터 현장 세팅",
        bullets: ["현장에서 발생하는 세팅 문제 및 트러블슈팅 대응"],
      },
      {
        title: "기능 리뷰 및 매뉴얼 작성",
        bullets: ["프로그램 기능 리뷰 및 사용자 매뉴얼 작성"],
      },
      {
        title: "RFID 중계 프로그램 연동",
        bullets: ["WebSocket 기반 RFID 실시간 연동 개발"],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: [],
      },
      {
        title: "형상 관리",
        bullets: [
          "Git Flow 브랜치 전략 적용 (master, hotfix, release, develop, feature 등)",
        ],
      },
    ],
  },
  {
    title: "천재교육 모바일 광고 솔루션 / CRM 개발 및 유지보수",
    company: "엠플랜잇",
    period: "2023.12 ~ 2024.04",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: ["클라이언트 요구사항 분석 및 우선순위 설정"],
      },
      {
        title: "호스팅 센터 -> AWS 클라우드 전환",
        bullets: [
          "Scale-out 구조로 기존 호스팅 센터 비용 대비 40% 절감 (월 110만원 → 65만원), 가용성 99.9% 이상 유지",
        ],
      },
      {
        title: "모바일 반응형 템플릿 제작",
        bullets: [
          "공통 컴포넌트 기반으로 반응형 템플릿을 설계하여 디바이스별 중복 개발 최소화",
        ],
      },
      {
        title: "카카오 싱크 연동",
        bullets: ["기존 대비 DB 수집률 20% 증가"],
      },
      {
        title: "유입 유저 분석을 위한 CRM 구축 (Google Tag Manager 연동)",
        bullets: [],
      },
      {
        title: "모바일 특화 웹 퍼블리싱 작업",
        bullets: ["디자인팀과 협업하여 UI / UX 개선"],
      },
      {
        title: "크로스 브라우징 테스트",
        bullets: [
          "네이버 앱, 크롬, 사파리, 삼성 인터넷 등 주요 브라우저 대상 크로스 브라우징 테스트 및 호환성 이슈 대응",
        ],
      },
      {
        title: "네이버 스페셜 DA 트래픽 대응",
        bullets: [
          "Auto Scaling 정책 설정으로 부하량 기준 인스턴스 자동 확장, ELB 기반 트래픽 분산 처리, RDS Aurora로 데이터베이스 자동 확장 대응 (피크 기준 230,000 Request 처리)",
        ],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: [],
      },
      {
        title: "형상 관리 (AWS CodeCommit)",
        bullets: [],
      },
    ],
  },
  {
    title: "키움에셋플래너 DB Gathering사이트 / CRM개발 및 유지보수",
    company: "엠플랜잇",
    period: "2023.08 ~ 2024.04",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: ["클라이언트 요구사항 분석 및 우선순위 설정"],
      },
      {
        title: "API 서버 구축 (클라이언트 서버와 DB 데이터 연동)",
        bullets: [],
      },
      {
        title: "유입 유저 분석 CRM 구축 (Google Tag Manager 연동)",
        bullets: [],
      },
      {
        title: "SEO 최적화 작업 (pagespeed.web.dev 기준)",
        bullets: [
          "PageSpeed 기준으로 성능·SEO 점검 및 개선",
          "메타태그, 사이트맵, 시맨틱 마크업 등 개선을 통한 검색 노출 최적화",
        ],
      },
      {
        title: "보안 감사 대응",
        bullets: [],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: [],
      },
      {
        title: "형상 관리 (AWS CodeCommit)",
        bullets: [],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: ["디자인팀과 협업하여 UI / UX 개선"],
      },
    ],
  },
  {
    title: "Offerwall API Server 개발",
    company: "엠플랜잇",
    period: "2022.04 ~ 2024.04",
    tasks: [
      {
        title: "광고주, 광고 매체사, 자사 연동 오퍼월(Offerwall) 서버 개발",
        bullets: [
          "제휴 매체 (NBT)와 클라이언트 사이 인증 작업",
          "제휴 매체와 클라이언트 API 연동",
        ],
      },
      {
        title: "데이터베이스 관리 (AWS RDS)",
        bullets: [],
      },
      {
        title: "형상 관리 (AWS CodeCommit)",
        bullets: [],
      },
    ],
  },
  {
    title: "주요 보험사 공식다이렉트몰 웹 서비스 운영 및 보안 SM (롯데손보 / 흥국생명 / 한화손보)",
    company: "엠플랜잇",
    period: "2022.01 ~ 2024.04",
    tasks: [
      {
        title: "Proxy 서버 구축을 통한 악성 트래픽 차단 강화",
        bullets: [
          "Proxy 서버 기반 트래픽 필터링으로 악성 요청 차단, 운영 기간(2022~2024) 내 보안 사고 무발생",
        ],
      },
      {
        title: "금융권 정기 보안 감사 대응 및 취약점 조치",
        bullets: ["롯데손보, 흥국생명, 한화손보 정기 웹 보안 취약점 점검 및 보안 감사 대응"],
      },
      {
        title: "호스팅 서버 인프라 관리 (누리호스팅 IDC)",
        bullets: ["개발 서버, 운영 서버, 백업 서버 운영 및 SSL 인증서 정기 갱신/만료 관리"],
      },
      {
        title: "클라이언트 요청 대응 및 데이터 가공 지원",
        bullets: [
          "클라이언트 요청사항을 체계적으로 분담·스케줄 관리하여 지연 없이 대응",
          "타 부서 월간보고에 사용할 맞춤형 쿼리 출력 및 데이터 가공 지원",
        ],
      },
      {
        title: "네이버 SEO 최적화",
        bullets: ["네이버 서치어드바이저 기준 모든 조건 통과"],
      },
      {
        title: "형상 관리",
        bullets: ["AWS CodeCommit, SVN"],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [],
      },
    ],
  },
  {
    title: "자사 홈페이지 리뉴얼 / 어드민 개발",
    company: "엠플랜잇",
    period: "2022.01 ~ 2024.04",
    tasks: [
      {
        title: "클라이언트별 매출 / 실적 통계 기능 개발 (어드민)",
        bullets: [],
      },
      {
        title: "사내 팀 별 일정 관리 기능 개발 (어드민)",
        bullets: ["프로젝트 일정 관리 효율성 대폭 향상, 팀 내 작업 지연률 40% 이상 감소"],
      },
      {
        title: "형상 관리 (AWS CodeCommit)",
        bullets: [],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [],
      },
    ],
  },
  {
    title: "키딕 (Keydig) 키워드 분석 솔루션 개발",
    company: "엠플랜잇",
    period: "2022.01 ~ 2023.12",
    tasks: [
      {
        title: "협력업체 API 서버 연동",
        bullets: [],
      },
      {
        title: "서버리스 시스템 구축 (AWS Lambda 사용)",
        bullets: [],
      },
      {
        title: "네이버 크롤링을 통한 키워드 수집 기능 개발",
        bullets: ["배치, 스케줄링으로 네이버 검색 결과를 크롤링하고 키워드 데이터 수집"],
      },
      {
        title: "형상 관리 (AWS CodeCommit)",
        bullets: [],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [],
      },
    ],
  },
  {
    title: "프로원 광고사이트 및 CRM 개발",
    company: "엠플랜잇",
    period: "2023.06 ~ 2023.11",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: ["클라이언트 요구사항 분석 및 우선순위 설정"],
      },
      {
        title: "CRM 구축",
        bullets: [
          "DB Gathering을 통해 수집된 고객 데이터를 기반으로, 고객과 업무 담당자를 매칭 및 연동하는 시스템 개발",
        ],
      },
      {
        title: "일일 보고 시스템 개발",
        bullets: [],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [],
      },
    ],
  },
  {
    title: "용인공원 아너스톤 유지보수",
    company: "엠플랜잇",
    period: "2023.01 ~ 2023.06",
    tasks: [
      {
        title: "윈도우 서버 관리",
        bullets: [
          {
            text: "서버 상태 모니터링 및 정기 점검, 장애 발생 시 트러블슈팅 대응",
            children: ["인증서 만료와 백업 여부를 점검해 서비스 중단을 막음"],
          },
        ],
      },
      {
        title: "외부 CRM 솔루션 API 연동",
        bullets: [
          {
            text: "외부 CRM 데이터 연동을 통한 고객 정보 관리 자동화",
            children: [
              "외부 CRM 업체 API를 연동해 상담 신청 정보를 전달",
              "연동에 실패한 건은 로그로 남기고 다시 전송해 상담 누락을 줄임",
            ],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [
          {
            text: "네이버 앱, 크롬, 사파리, 삼성 인터넷 대상 크로스 브라우징 테스트",
            children: [
              "공원 소개, 시설 안내 화면의 레이아웃과 글자 깨짐을 확인",
              "상담 신청 버튼과 입력 영역이 브라우저마다 같은지 확인하고 어긋난 부분을 수정",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "자사 이커머스 및 ERP/WMS 운영·유지보수",
    company: "컴퓨존",
    period: "2017.09 ~ 2021.01",
    tasks: [
      {
        title: "협력업체 기간계 시스템 (외부 WMS) API 연동 및 미들웨어 개발",
        bullets: [],
      },
      {
        title: "이벤트 상품 DB 응답속도 개선 (쿼리 최적화)",
        bullets: [
          {
            text: "SQL 최적화하여 응답시간 단축 (최대 3초 → 2초 이하로 개선, 최대 약 33% 성능 향상)",
            children: [
              "이벤트 상품 목록에서 옵션과 재고까지 한 번에 끌어오던 조인을 빼고 목록에 필요한 상품 정보만 조회하고, 이벤트 번호와 노출 상태 조건에 인덱스를 맞춤",
            ],
          },
        ],
      },
      {
        title: "이벤트 페이지의 레이아웃 템플릿화",
        bullets: ["이벤트 페이지 레이아웃을 다양하게 커스텀 가능한 템플릿 개발"],
      },
      {
        title: "시스템 안정성 관리 및 영향도 분석",
        bullets: [
          "업데이트 배포 전 관련 기능을 직접 점검하여 예상치 못한 오류나 회귀 이슈 사전 발견",
          "시스템 장애 상황에서 주문 수량과 출고 수량을 DB에서 맞춰 보고, 어긋난 건을 바로잡아 사고 처리",
          "주기적인 서버 모니터링 및 로그 분석",
        ],
      },
      {
        title: "단위 테스트 및 유저 테스트 수행",
        bullets: ["주요 기능에 대한 단위 테스트 코드 작성, 테스트 커버리지 80% 이상 유지"],
      },
      {
        title: "SEO 최적화 작업",
        bullets: [
          {
            text: "상품, 이벤트 페이지의 제목과 설명을 페이지별로 구분해 검색 결과가 겹치지 않게 정리",
            children: [
              "같은 제목과 설명이 반복되던 페이지를 상품명, 이벤트명 기준으로 구분",
              "정렬, 필터가 붙은 주소가 따로 수집되지 않도록 대표 페이지를 지정",
            ],
          },
          {
            text: "검색에 잡히는 페이지와 이미지 정보를 정리",
            children: [
              "상품 이미지에 비어 있던 alt를 상품명 기준으로 채움",
              "검색 결과가 비거나 내용이 겹치는 목록은 검색 수집에서 제외",
              "신규 상품 주소를 사이트맵에 반영해 검색 수집 대상에 포함",
            ],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [],
      },
    ],
  },
];
