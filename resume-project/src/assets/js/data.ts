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

export interface ServiceLaunchItem {
  name: string;
  domain: string;
  role: string;
  period: string;
  duties: string[];
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
      "장애 대응 및 시스템 상태 모니터링",
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

export const serviceLaunches: ServiceLaunchItem[] = [
  {
    name: "RAD.",
    domain: "MD 플랫폼",
    role: "CTO",
    period: "2026.03 ~ 운영 중",
    duties: [
      "MD 업무 자동화 플랫폼 기획 (PM) 및 개발",
      "클라이언트 미팅 및 컨설팅",
      "베어메탈 서버 및 인프라 구축/운영",
      "데이터베이스 ERD 설계 및 정규화",
      "웹 퍼블리싱 및 UX 기획",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "MD 업무 자동화 플랫폼 및 브랜드 사이트 개발",
    company: "RAD.",
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
        title: "MD 플랫폼 설계 및 개발",
        bullets: [
          "단품 상품을 기준으로 재고와 원가를 관리하고, 조합, 옵션, 추가상품이 이를 참조하는 구조로 설계해 재고 일원화",
          "스마트스토어 대량등록 엑셀 생성 및 일괄수정 파싱, 채널(쇼핑몰) 정책별 마진 자동 계산, 어드민/클라이언트 양측 전자결재 구현",
          "베어메탈 서버 운영 (Windows 11 Pro Hyper-V 사용) 및 Kubernetes 기반 컨테이너 오케스트레이션 구축으로 향후 AWS 전환 시 즉시 EKS로 마이그레이션 가능한 구조 설계",
        ],
      },
      {
        title: "데이터베이스 ERD 작업",
        bullets: ["도메인 전반의 정규화 및 Relation 최적화"],
      },
    ],
  },
  {
    title: "프로원 광고사이트 및 CRM 개발",
    company: "RAD.",
    tasks: [
      {
        title: "프로젝트 기획 (PM)",
        bullets: [
          "중개 비즈니스 흐름(상담 유입 -> 대리점 배정 -> 견적 -> 수수료 정산) 정의 및 요구사항 우선순위 조율",
        ],
      },
      {
        title: "비로그인 (토큰 링크 인증) 및 스팸 차단 구현",
        bullets: [
          "대리점 배정 시 UUID 기반 workspaceToken을 발급해 비로그인 견적 작성을 지원하고, 대리점 변경 시 토큰 재발급으로 기존 링크 접근 차단 및 링크 내 수정 범위를 견적/정산 필드로 제한",
          "정산 완료 시 일회성 고객 평가용 reviewToken을 발급하고 제출 완료 후 중복 평가 차단",
          "공개 상담, 제휴 신청 API에 Cloudflare Turnstile 서버 검증(siteverify)을 연동해 봇, 스팸 DB 유입 차단",
        ],
      },
      {
        title: "정산 정합성 보장 및 권한 체계 구축",
        bullets: [
          "견적 저장 및 정산 완료 시점의 적용 수수료율을 스냅샷으로 고정 기록해, 추후 수수료 정책 변경 시 과거 정산 내역 불일치 방지",
          "HttpOnly Refresh Token 기반 인증과 3단계 역할 권한(SUPER, ADMIN, PARTNER) 분리로 운영, 파트너 접근 통제",
        ],
      },
    ],
  },
  {
    title: "공급망 보안 관리 솔루션 AEZIZ 3.0",
    company: "쿤텍",
    tasks: [
      {
        title: "자체개발 SBOM 엔진 개선",
        bullets: [
          "패키지 버전 범위 및 CPE 매칭 조건을 개선해 CVE 탐지 오탐률을 낮추고, 탐지 정확도 85% 이상 달성",
        ],
      },
      {
        title: "프론트엔드 개발",
        bullets: [
          "CVE/CWE/CPE/CAPEC 등 보안 취약점 정보를 그리드 형태로 시각화하는 UI 구현",
          "대용량 SBOM 컴포넌트, 취약점 목록에 서버 사이드 페이징 및 심각도(CVSS), 패키지 다중 필터링 적용",
        ],
      },
    ],
  },
  {
    title: "사이버작전사령부 탐색시제",
    company: "쿤텍",
    tasks: [
      {
        title: "프론트엔드 Tech Lead 및 폐쇄망 서버 구축",
        bullets: [
          "클라이언트사(넥스원) PM과 요구사항 협의, 기술 스택 선정 및 프로젝트 리딩",
          "인터넷이 차단된 국방 폐쇄망 VM 환경에서 Docker 대신 Podman 기반 rootless 컨테이너로 온프레미스 배포 환경 구축",
          "통합 UI 시스템과 연동되는 iframe 기반 화면의 레이아웃 및 렌더링 최적화",
        ],
      },
      {
        title: "보안 심사 대응 및 데이터 표준화 준수",
        bullets: [
          "사령부 보안 점검 가이드라인에 따라 root 권한 실행 제거, 취약 버전 DB 패치 등 보안 취약점을 전수 조치하여 보안 심사 통과",
          "기관 DBA 데이터 표준(테이블, 컬럼 명명 규칙 등)에 맞춰 스키마 및 연동 데이터 구조 정비",
        ],
      },
    ],
  },
  {
    title: "자사 ERP 고도화 작업",
    company: "앤로보틱스",
    tasks: [
      {
        title: "레거시 분석 및 마이그레이션 (.NET -> Java)",
        bullets: [
          "사내 요구사항 분석 및 우선순위 조율을 바탕으로 .NET 레거시 핵심 도메인을 Java 기반으로 단계적 전환, 마이그레이션 초기 기반 구조 확립",
          "스프링 시큐리티 기반 세션 인증과 부서, 직급별 Role 기반 접근 제어(RBAC) 및 메뉴, API 인가 처리 구현",
        ],
      },
      {
        title: "DB ERD 재설계 및 쿼리 최적화",
        bullets: [
          "레거시 테이블 스키마 역분석으로 중복 컬럼을 정리하고 업무 도메인 단위로 ERD 재설계",
          "과도하게 얽혀 있던 다중 조인 쿼리를 정리하고 조회 조건 컬럼 인덱싱을 적용해 응답 속도 개선 (최대 1분 -> 2초 이내, 최대 30배 향상)",
        ],
      },
      {
        title: "개발/검수 서버 구축",
        bullets: [
          "온프레미스 Linux 환경에 WAS, DB 개발/검수 서버를 분리 구축하고 환경별 설정 프로파일 구성",
        ],
      },
      {
        title: "프론트엔드 공통화 및 반응형 UI",
        bullets: [
          "그리드 테이블 컴포넌트 모듈화로 보일러플레이트 최소화 및 모바일/태블릿/데스크탑 대응 반응형 UI 구현",
        ],
      },
    ],
  },
  {
    title: "질병관리청 국립의과학지식센터 좌석 예약 KIOSK 개발 및 유지보수",
    company: "앤로보틱스",
    tasks: [
      {
        title: "프로젝트 기획 (PM) 및 클라이언트 커뮤니케이션",
        bullets: [
          "기관 요구사항 분석 및 우선순위 조율, 추가 요청에 대한 지속 대응으로 기간 내 90% 이상 요구사항 충족",
          "프로그램 기능 리뷰 진행 및 운영자/사용자 매뉴얼 작성",
        ],
      },
      {
        title: "기관 API 연동 및 RFID 실시간 중계 개발",
        bullets: [
          "기관 내부 회원 인증 API 연동 및 이용자 신분, 상태에 따른 좌석 예약 권한 검증 로직 구현",
          "키오스크 로컬 RFID 리더기 태깅 이벤트를 WebSocket 양방향 통신으로 연동해 인증, 좌석 배정, 반납 상태 실시간 동기화",
        ],
      },
      {
        title: "데이터베이스 ERD 설계",
        bullets: [
          "열람실, 좌석, 시간대별 예약 및 RFID 출입 로그 스키마 설계와 동시 예약 충돌 방지 제약조건 적용",
        ],
      },
      {
        title: "현장 세팅 및 트러블슈팅",
        bullets: [
          "기관 내부망 방화벽, 네트워크 환경에서의 단말기-중계서버 통신 이슈 및 하드웨어 연동 디버깅 대응",
        ],
      },
    ],
  },
  {
    title: "천재교육 모바일 광고 솔루션 / CRM 개발 및 유지보수",
    company: "엠플랜잇",
    tasks: [
      {
        title: "AWS 클라우드 전환 및 대규모 트래픽 대응",
        bullets: [
          "고정 단독 호스팅 서버를 AWS EC2 Scale-out 구조로 전환해 운영 비용 40% 절감 (월 110만원 -> 65만원), 가용성 99.9% 이상 유지",
          "네이버 스페셜 DA 집행 시 점심 피크 구간(30분) 트래픽 집중에 대응해 Auto Scaling, ELB 트래픽 분산, RDS Aurora 자동 확장 구조 구성 (230,000 Request 무중단 처리)",
        ],
      },
      {
        title: "카카오 싱크 연동 및 유입 분석 CRM 구축",
        bullets: [
          "카카오 싱크 간편 동의 도입으로 입력 단계를 단축해 기존 대비 DB 수집률 20% 증가",
          "Google Tag Manager(GTM)와 UTM 파라미터를 연동해 광고 매체, 캠페인별 유입 및 상담 전환 성과 수집",
        ],
      },
      {
        title: "데이터베이스 ERD 설계",
        bullets: [
          "캠페인, 매체 유입 로그, 고객 상담 데이터 간 테이블 관계 설계 및 기간, 매체별 집계 인덱스 설계",
        ],
      },
      {
        title: "모바일 반응형 템플릿 및 크로스 브라우징",
        bullets: [
          "공통 컴포넌트 기반 모바일 반응형 템플릿 제작 및 디자인팀 협업 UI/UX 개선",
          "네이버 앱, 크롬, 사파리, 삼성 인터넷 등 주요 브라우저 크로스 브라우징 대응",
        ],
      },
    ],
  },
  {
    title: "키움에셋플래너 DB Gathering 사이트 / CRM 개발 및 유지보수",
    company: "엠플랜잇",
    tasks: [
      {
        title: "클라이언트 CRM 연동 API 및 유입 분석 구축",
        bullets: [
          "랜딩 페이지로 유입된 고객 개인정보를 암호화해 클라이언트사 기간계 CRM 서버로 실시간 전송하는 REST API 구축",
          "Google Tag Manager(GTM) 전환 트리거와 유입 채널 파라미터를 연동해 매체별 전환 성과 분석 CRM 구현",
        ],
      },
      {
        title: "보안 감사 대응 및 데이터베이스 ERD 설계",
        bullets: [
          "개인정보 암호화 처리 및 SQL Injection, XSS 등 주요 웹 취약점 필터링 조치로 보안 감사 대응",
          "유입 매체, 상담 신청, 외부 전송 결과 이력을 분리 설계해 데이터 정합성 확보",
        ],
      },
      {
        title: "SEO 최적화 및 반응형 퍼블리싱",
        bullets: [
          "PageSpeed(pagespeed.web.dev) 기준 성능, SEO 점검 및 메타태그, 사이트맵, 시맨틱 마크업 개선",
          "디자인팀 협업 기반 PC/모바일 UI/UX 개선",
        ],
      },
    ],
  },
  {
    title: "Offerwall API Server 개발",
    company: "엠플랜잇",
    tasks: [
      {
        title: "광고주, 매체사(NBT), 자사 연동 오퍼월(Offerwall) 서버 개발",
        bullets: [
          "매체사별 발급 토큰 및 허용 IP 검증 로직을 적용해 비인가 콜백 요청 차단",
          "매체사 참여 완료 콜백(Postback) 데이터를 클라이언트사 API 규격에 맞게 변환 및 전달하는 중계 서버 구현",
          "참여 고유 키(Click ID) 중복 체크 로직으로 재호출 시 리워드 중복 적립 방지",
        ],
      },
      {
        title: "데이터베이스 관리 (AWS RDS)",
        bullets: [
          "캠페인 참여 및 리워드 지급 이력 테이블 설계/운영, 참여 고유 키 유니크 제약 및 조회 인덱스 적용으로 데이터 정합성 유지",
        ],
      },
    ],
  },
  {
    title: "주요 보험사 공식다이렉트몰 웹 서비스 운영 및 보안 SM 업무\n(롯데손보 / 흥국생명 / 한화손보)",
    company: "엠플랜잇",
    tasks: [
      {
        title: "보안 강화 및 인프라 운영",
        bullets: [
          "Proxy 서버 기반 트래픽 필터링으로 악성 요청 차단, 운영 기간(2022~2024) 내 보안 사고 무발생",
          "롯데손보, 흥국생명, 한화손보 정기 웹 보안 취약점 점검 및 금융권 보안 감사 대응",
          "AWS(롯데손보, 흥국생명) 및 누리호스팅 IDC(한화손보) 개발, 운영, 백업 서버 관리 및 SSL 인증서 정기 갱신/만료 관리",
        ],
      },
      {
        title: "운영 지원 및 네이버 SEO 최적화",
        bullets: [
          "클라이언트 요청사항 일정 관리 및 타 부서 월간보고용 맞춤형 쿼리 데이터 가공 지원",
          "네이버 서치어드바이저 기준 전 항목 통과",
        ],
      },
      {
        title: "전환율 개선 UI/UX 작업",
        bullets: [
          "전환율 하락 구간마다 신청 화면 레이아웃, 버튼, 안내 문구를 개편하고 A/B 테스트로 효과 검증",
        ],
      },
    ],
  },
  {
    title: "자사 홈페이지 리뉴얼 / 어드민 개발",
    company: "엠플랜잇",
    tasks: [
      {
        title: "클라이언트별 매출 / 실적 통계 기능 개발 (어드민)",
        bullets: [
          {
            text: "광고주, 캠페인, 담당 팀 단위의 기간별 매출 및 실적 통계 대시보드 구축",
            children: [
              "기간, 팀, 광고주 다중 조건 필터링 API 및 차트, 그리드 시각화 UI 구현으로 수기 엑셀 취합 및 월간 보고 업무 자동화",
            ],
          },
        ],
      },
      {
        title: "사내 팀 별 일정 관리 기능 개발 (어드민)",
        bullets: [
          {
            text: "프로젝트 일정 관리 효율성 대폭 향상, 팀 내 작업 지연률 40% 이상 감소",
            children: [
              "메신저, 구두로 흩어져 있던 업무 요청을 캘린더, 상태 기반(요청->진행->검수->완료) 일정 보드로 일원화",
              "마감 임박 및 기한 초과 업무를 상단 하이라이트, 알림으로 노출하여 담당자 작업 누락 방지",
            ],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: ["기업 브랜드 리뉴얼 반응형 UI 구현 및 크롬, 사파리, 삼성 인터넷 크로스 브라우징 대응"],
      },
    ],
  },
  {
    title: "키딕 (Keydig) 키워드 분석 솔루션 개발",
    company: "엠플랜잇",
    tasks: [
      {
        title: "협력업체 API 서버 연동",
        bullets: [
          {
            text: "외부 키워드, 광고 데이터 제휴사 REST API 연동 및 응답 데이터 통합 처리",
            children: [
              "제휴사별 상이한 검색량, 경쟁도, 연관 키워드 응답 포맷을 내부 스키마에 맞게 변환하여 자체 수집 데이터와 병합",
            ],
          },
        ],
      },
      {
        title: "서버리스 시스템 구축 (AWS Lambda 사용)",
        bullets: [
          "요청, 배치 시점에만 리소스가 구동되도록 AWS Lambda 기반 서버리스 환경을 구성하여 상시 유휴 서버 비용 절감",
        ],
      },
      {
        title: "네이버 크롤링을 통한 키워드 수집 기능 개발",
        bullets: [
          {
            text: "배치, 스케줄링으로 네이버 검색 결과를 크롤링하고 키워드 데이터 수집",
            children: [
              "호출 간격 조절 및 실패 건 재시도 로직을 적용하여 대량 키워드 수집 시 차단 방지 및 수집 안정성 확보",
              "연관 검색어 중복 제거 및 일자별 수집 이력 적재로 키워드 노출 순위, 트렌드 변동 추이 데이터화",
            ],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [
          {
            text: "키워드 분석 대시보드 반응형 퍼블리싱 및 크롬, 사파리, 삼성 인터넷 크로스 브라우징 테스트",
            children: ["키워드 데이터 그리드, 차트 및 필터 UI의 브라우저별 렌더링 호환성 확보"],
          },
        ],
      },
    ],
  },
  {
    title: "용인공원 아너스톤 유지보수",
    company: "엠플랜잇",
    tasks: [
      {
        title: "윈도우 서버 관리",
        bullets: [
          {
            text: "서버 상태 모니터링 및 정기 점검, 장애 발생 시 트러블슈팅 대응",
            children: ["IIS 웹 서버 프로세스, SSL 인증서 만료 주기 및 정기 백업 스케줄 관리로 무중단 운영 유지"],
          },
        ],
      },
      {
        title: "외부 CRM 솔루션 API 연동",
        bullets: [
          {
            text: "외부 CRM 데이터 연동을 통한 고객 정보 관리 자동화",
            children: ["상담 신청 인입 시 외부 CRM 업체 REST API 규격에 맞춰 고객 데이터를 실시간 전송하는 연동 모듈 구현"],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: [
          {
            text: "네이버 앱, 크롬, 사파리, 삼성 인터넷 대상 크로스 브라우징 테스트",
            children: [
              "디바이스, 브라우저별 뷰포트 렌더링 차이 및 레이아웃, 폰트 깨짐 이슈 디버깅",
              "상담 신청 폼 및 인터랙션 요소의 브라우저 간 동작 호환성 보정",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "자사 이커머스 및 ERP/WMS 운영/유지보수",
    company: "컴퓨존",
    tasks: [
      {
        title: "협력업체 기간계 시스템 (외부 WMS) API 연동 및 미들웨어 개발",
        bullets: [
          {
            text: "자사 이커머스, ERP와 외부 협력사 WMS 간 주문, 출고, 재고 상태를 동기화하는 연동 미들웨어 구축",
            children: [
              "협력사별 상이한 데이터 포맷(JSON/XML)과 상품, 송장 코드를 사내 규격에 맞게 매핑하는 연동 API 구현",
            ],
          },
        ],
      },
      {
        title: "이벤트 상품 DB 응답속도 개선 (쿼리 최적화)",
        bullets: [
          {
            text: "SQL 최적화하여 응답시간 단축 (최대 3초 -> 2초 이하로 개선, 최대 약 33% 성능 향상)",
            children: [
              "이벤트 상품 목록에서 옵션과 재고까지 한 번에 끌어오던 조인을 빼고 목록에 필요한 상품 정보만 조회하고, 이벤트 번호와 노출 상태 조건에 인덱스를 맞춤",
            ],
          },
        ],
      },
      {
        title: "이벤트 페이지의 레이아웃 템플릿화",
        bullets: [
          {
            text: "이벤트 페이지 레이아웃을 다양하게 커스텀 가능한 템플릿 개발",
            children: [
              "배너, 상품 진열 그리드, 탭, 유의사항 영역을 모듈형 블록으로 분리하여 어드민 설정만으로 신규 기획전을 구성하도록 개발 공수 단축",
            ],
          },
        ],
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
        bullets: [
          {
            text: "주요 기능에 대한 단위 테스트 코드 작성, 테스트 커버리지 80% 이상 유지",
            children: [
              "주문, 결제, 재고 차감 등 주요 비즈니스 로직의 정상/예외 케이스 테스트 코드를 작성하여 배포 시 사이드이펙트 방지",
            ],
          },
        ],
      },
      {
        title: "SEO 최적화 작업",
        bullets: [
          {
            text: "동적 메타태그 바인딩 및 Canonical URL 적용으로 중복 문서 이슈 해소",
            children: [
              "카테고리, 상품, 기획전 데이터 기반으로 title, meta description, Open Graph 태그를 동적 생성하여 고정 메타태그 중복 제거",
              "정렬, 필터 쿼리스트링이 붙은 파라미터 URL에 canonical 태그를 지정하여 검색엔진 중복 색인 방지",
            ],
          },
          {
            text: "크롤링 효율화 및 시맨틱 마크업 정비로 검색 노출 강화",
            children: [
              "상품명 기반 이미지 alt 속성 자동 바인딩 및 검색 가치가 낮은 빈 결과, 내부 페이지에 robots noindex 처리",
              "신규, 품절 상품 변동을 반영하는 동적 사이트맵(sitemap.xml) 구성으로 검색엔진 색인 반영 속도 개선",
            ],
          },
        ],
      },
      {
        title: "PC/모바일 웹 퍼블리싱 작업",
        bullets: ["기획전, 상품 상세, 주문서 등 주요 커머스 화면의 PC/모바일 마크업 구현 및 크로스 브라우징 대응"],
      },
    ],
  },
];
