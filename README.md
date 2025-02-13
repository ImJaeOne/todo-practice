# TodoList 프로젝트

## 브랜치별 구현 방식

### 1. main (Prop Drilling)

props를 통해 부모 → 자식 컴포넌트로 상태 전달
상태 관리 라이브러리 없이 React의 기본 상태(useState) 활용
단점: 깊은 구조에서는 props 전달이 번거로움

```
todo-practice
├─ index.html
└─ src
   ├─ App.jsx
   ├─ assets
   │  └─ react.svg
   ├─ components
   │  └─ TodoForm.jsx
   ├─ layout
   │  ├─ Layout.jsx
   │  └─ Nav.jsx
   ├─ main.jsx
   ├─ pages
   │  ├─ About.jsx
   │  ├─ Home.jsx
   │  └─ MyPage.jsx
   ├─ shared
   │  └─ Router.jsx
   └─ styled
      └─ StActionBtn.jsx

```
