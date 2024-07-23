# 개인 포트폴리오 웹사이트

Next.js 14의 App Router 기능을 활용하여 제작한 개인 포트폴리오 웹사이트입니다. 자기소개와 프로젝트 포트폴리오를 소개하고 있으며, 반응형 웹 디자인을 적용하여 모바일에서도 최적화된 경험을 제공합니다.

## 프로젝트 기간

2024.04.15 ~ 2024.05.31

## 주요 기능 및 특징

- 자기소개 및 프로젝트 포트폴리오 소개
- 이메일 문의 기능
- Full Page Scroll 기능

## 사용 기술 및 언어

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

## 작업 기여도

### 웹 디자인

- Figma를 활용한 전체 사이트 디자인
- 모바일 반응형 디자인 적용

### 기능 구현

- **Full Page Scroll 기능**: useRef, WheelEvent, currentSectionIndex 활용하여 직접 구현
- **이메일 전송 기능**: Email.js API를 활용하여 Contact 페이지에서 구현
- **모달 라우팅**:
  - Next.js 14의 Intercepting Routes와 Parallel Routes 기능 활용
  - 모달 창 내에서 탐색 시 모달로 렌더링, 새로고침 시 독립 페이지로 렌더링하여 사용자 경험 향상

## 트러블 슈팅

1. **Full Page Scroll 기능 구현 이슈**

   - 문제: react-fullpage 라이브러리 사용 시 모달 창 스크롤과 충돌
   - 해결: useRef, WheelEvent, currentSectionIndex를 활용하여 직접 구현

2. **스크롤 이벤트 과다 발생 이슈**

   - 문제: Full Page Scroll 기능의 스크롤 이벤트가 과도하게 발생하여 성능 저하
   - 해결: Lodash 라이브러리의 debounce 기능을 적용하여 0.3초마다 이벤트 발생하도록 최적화

3. **로딩 화면 이슈**
   - 문제: Next.js의 loading.tsx 파일 사용 시 모든 로딩 상황에서 로딩 화면 표시
   - 해결: useState를 활용하여 초기 실행 시에만 로딩 화면이 표시되도록 구현

## 링크

[![Live Demo](https://img.shields.io/badge/Live_Demo-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://portfolio-sujin.vercel.app/)
