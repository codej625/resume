interface RoleData {
  company: string;
  type: string;
  period: string;
  duration: string;
  department: string;
  roles: string[];
}

export const workExperience: RoleData[] = [
  {
    "company": "나이콤",
    "type": "중소기업",
    "period": "2024.05 ~ 2024.10",
    "duration": "6개월",
    "department": "R&D 웹 개발팀 · 대리",
    "roles": [
      "Tech Lead",
      "Kiosk 개발",
      "Kiosk 사용 메뉴얼 작성",
      "자사 ERP 고도화",
      "클라이언트 커뮤니케이션",
      "기술지원"
    ]
  },
  {
    "company": "엠플랜잇",
    "type": "스타트업",
    "period": "2022.01 ~ 2024.04",
    "duration": "2년 4개월",
    "department": "연구개발전담부서 · 선임",
    "roles": [
      "클라이언트 솔루션 SI / SM",
      "자사 CRM 개발",
      "보안 감사 대응",
      "서버 관리(AWS)",
      "클라이언트 커뮤니케이션",
      "기술지원"
    ]
  },
  {
    "company": "컴퓨존",
    "type": "중견기업",
    "period": "2017.09 ~ 2021.01",
    "duration": "3년 5개월",
    "department": "전산팀 · 사원/팀원",
    "roles": [
      "자사 사이트 유지보수",
      "자사 ERP 유지보수",
      "시스템 사고 처리",
      "유저 / 단위 테스트 작성",
      "영향도 분석",
      "시스템 모니터링"
    ]
  }
];

export const option: boolean = true;