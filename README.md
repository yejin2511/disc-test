# 피플팀 DISC 진단 MVP

구성원들이 간단한 DISC 테스트를 수행하고, 개인 결과와 관리자 요약 리스트를 제공하는 웹 애플리케이션입니다.

## 실행 방법

### 방법 1: 직접 파일 열기
`index.html` 파일을 웹 브라우저에서 직접 열어 사용할 수 있습니다.

### 방법 2: 로컬 서버 실행 (권장)
```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```
이후 브라우저에서 `http://localhost:8080` 접속

## 주요 기능

### 1. 진단 페이지 (index.html)
- **로그인**: 부서명과 이름 입력
- **DISC 진단**: 12개 문항 단일 선택
- **결과 분석**: Gemini API를 활용한 상세 분석 제공
  - DISC 유형 (D/I/S/C)
  - 핵심 요약
  - 업무 스타일
  - 강점 및 주의점
  - 잘 맞는 유형

### 2. 관리자 페이지 (admin.html)
- 전체 직원 진단 결과 테이블 조회
- 정렬 기능: 최신순, 이름순, 부서순, 유형순
- 유형별 필터링
- 데이터 초기화 기능

## 기술 스택
- HTML5, CSS3, Vanilla JavaScript
- Gemini API (gemini-2.0-flash-lite)
- LocalStorage (데이터 저장)

## DISC 유형 설명
- **D (주도형, Dominance)**: 결단력 있고 추진력이 강한 리더형
- **I (사교형, Influence)**: 열정적이고 사교적인 소통의 달인
- **S (안정형, Steadiness)**: 차분하고 신뢰할 수 있는 지원군
- **C (신중형, Conscientiousness)**: 분석적이고 정확성을 추구하는 전문가형

## 파일 구조
```
├── index.html      # 메인 진단 페이지
├── admin.html      # 관리자 페이지
├── styles.css      # 스타일시트
├── app.js          # 메인 JavaScript
└── README.md       # 문서
```

