# TodoList 프로젝트

## 브랜치별 구현 방식
### main -(Prop Drilling)
useState를 활용하여 상태 관리
props를 통해 부모 → 자식으로 상태 전달
Redux나 Context API 없이 React 기본 상태만 사용

### context - (Context API)
Context API를 활용하여 상태 전달
Prop Drilling 문제를 해결

### redux-toolkit - (Redux Toolkit)
Redux Toolkit을 활용하여 상태 관리
전역 상태 관리로 컴포넌트 간 상태 공유
