[![Netlify Status](https://api.netlify.com/api/v1/badges/df7898b5-e0f9-409e-a7d0-f230862fe8f5/deploy-status)](https://app.netlify.com/sites/quatre-foil/deploys)

# 💡 라이프 스타일 편집샵 quatre-foil 입니다.

[배포 주소](https://quatre-foil.netlify.app/)

### 개발 기간

2023.01.15 - 2023.05.19

## 구현 기능

레이아웃

- react-router-dom의 중첩 라우팅을 활용한 공통 레이아웃 구성
- framer-motion을 활용한 모바일 aside 구현
- redux-toolkit의 useSelector를 사용해 유저 정보에 따른 조건부 랜더 구현
- redux-toolkit을 사용해 aside의 토글 상태 관리
- react의 portal을 사용한 scroll top button 구현

메인 페이지

- Suspense를 활용한 비동기 처리
- useGetAllProductsQuery 훅을 통한 전체 상품 목록 조회
- react-slick 라이브러리를 활용한 슬라이더 UI 구현
  - 배열의 sort 메서드를 활용해 상품 조회

상품 페이지

- Suspense를 활용한 비동기 처리
- IntersectionObserver를 활용한 무한 스크롤 구현
- query string을 통한 카테고리 필터 구현
- useGetAllProductsQuery 훅을 통한 카테고리에 따른 상품 목록 조회
  - useQuery의 select를 사용해 필터링 구현

상품 디테일 페이지

- Suspense를 활용한 비동기 처리
- useGetProductQuery 훅을 통한 상품 상세 정보 조회
- redux-toolkit과 redux-persist를 활용한 장바구니 및 구매 상태 관리 구현

장바구니 페이지

- redux-toolkit과 redux-persist를 활용한 장바구니 상태 관리 구현
- 장바구니 상태에 따른 조건부 랜더 구현

---

구매 페이지

- Suspense를 활용한 비동기 처리
- 구매 위치(개별 상품, 장바구니)에 따른 조건부 렌더링
- 카카오 오픈 API를 활용한 주소 찾기

마이페이지

- Suspense를 활용한 비동기 처리
- react-router-dom의 outlet을 사용하여 레이아웃 구성

1. 계좌 추가 페이지
   - styled-component를 이용한 동적 스타일링
   - react-hook-form을 사용하여 비제어 양식을 만들어 관리
   - 계좌 추가 시 은행 선택하여 정보를 입력하는 모달 구현
2. 구매 목록 페이지
   - react-query의 useMutation 함수를 사용하여 주문을 취소, 확정
   - react-query의 select 옵션을 통한 필터링
   - useSearchParam로 새로고침에도 정보를 유지
   - errorElement를 활용하여 에러 처리
3. 정보 변경 페이지
   - react-hook-form과 yup을 사용해 유효성 검사

## 기술 스택

react, typescript, redux-toolkit, react-query, react-hook-form, yup, styled-components, vite

## 회고

**유지석**

- keep
  - 여러 주제의 프로젝트를 꾸준히 진행한 점
  - 다양한 라이브러리를 사용하고 프로젝트에 직접 적용한 점
  - 디자인 컨퍼런스를 삼고 그대로 사용하는 것이 아닌 프로젝트와 맞게 수정한 점
  - useEffect로 처리하던 서버 상태를 react-query를 통해 리팩토링한 점
  - Suspense를 활용해 선언적으로 비동기를 처리한 점
  - 일반적인 데스크탑 버전으로 스타일링이 하는 것이 아닌 모바일이 우선인 mobile first design을 적용한 점
- problem
  - 여러 프로젝트와 겹치게 되면서, 다른 프로젝트들 보다 먼저 시작했음에도 후순위로 밀리게 되어서 개발 기간이 엄청나게 길어졌다. 그러다 보니 내가 작성한 게 맞을까 싶을 정도로 생소한 코드들이 많았다. 생소한 만큼 코드를 왜 그렇게 작성했는지 생각하는 시간이 생기게 되고 개발 능률과 프로젝트에 대한 흥미가 떨어지게 되었다. 사실 가장 애정 하는 프로젝트였는데, 공백이 생기다 보니 애증의 프로젝트가 된 거 같다.
  - 항상 낙관적인 상황만을 고려하고 개발해, 에러 처리하는 부분이 아직도 부족한 것 같다.
  - 리액트의 특징이자 장점인 컴포넌트 기반의 개발을 충분히 활용하지 못한 것 같다. 또 커스텀 훅으로 충분히 분리하지 못한 점도 아쉽다.
- try
  - 프로젝트 기한을 확실히 지키기, 기한이 지연되어도 프로젝트의 코드를 항상 살펴보는 습관을 길러야겠다.
  - 인증과 관련된 부분과 에러 핸들링에서 익숙지 않고 나 스스로도 어렵다고 생각하기에 이 부분을 공부를 해야겠다.
  - 기획의 중요성을 느끼게 되었다. 개발을 하면서 “이런 기능이 필요하겠다”와 같이 계속 기획 관련된 안건이 나왔는데, 그때마다 개발 시간이 또 지연되었다. 100% 완벽한 기획을 할 수는 없어도, 최소한의 필요 기능과 조건을 충족한 기획을 하도록 노력해야겠다.
  - 완성도 높은 코드를 작성해 프로젝트의 완성도를 높이도록 해야겠다.

**조효림**

- keep
  1. 처음 과제할 때 너무 어려웠던 기억에 이번 프로젝트 잘 할 수 있을지 처음에는 걱정도 됐다. 하지만 똑같은 api를 사용하는데 이번에는 '할 만 한데?!' 하는 생각이 들었다. 계속 열심히 공부하기.
  2. 프로젝트 설정부터 배포까지의 한 싸이클을 또 완료해 봤다. 사이트 색은 뭘로 할지 어떤 기술 스택을 사용할지 아무것도 없는 0에서 마음대로(~~어느정도..마음대로..~~) 이렇게 뚝딱뚝딱 만들어 뭔가 완성된다는 게 여전히 신기하고 재밌다.
  3. 요즘은 많은 사람들이 어쩌면 데스크탑, 랩탑보다 모바일으로 웹서핑하는 시간이 더 길지도 모르겠다. 특히 쇼핑몰의 경우에는! 작은 화면에서 큰 화면으로 구현하는 것이 쉽다고 하여, 모바일 화면일 때부터를 먼저 생각하여 개발했다. 앞으로도 어떤 서비스이냐에 따라 mobile first design을 하면 좋을 것 같았다.
- problem
  1. 만들어져 있는 api를 사용하기만 되어서 어떤 기능을 구현할지는 거의 다 나와있었다. 하지만 '만들다 보니 부족해서', '만들다 보니 필요할 것 같아서' 추가한 기능도 있다. 그렇게 덧붙이다 보니 데이터를 새로 받아 가공해야 할 경우도 있었고, 아예 처음부터 새로 손을 봐야 할 때도 있었다. 처음부터 잘 생각했더라면 하는 아쉬움이 남는다.
  2. 잘 작동할 때만 생각했기에 신나게 개발했는데, 갖가지 데이터를 마주하자 에러도 가지각색으로 마주할 수 있었다. 처리도 다 다르게 해주어야 해서 너무도 비효율적이었다. [다룬 글](https://velog.io/@hyorimm/react-router-dom%EC%9D%98-errorElement%EB%A1%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0). 이 외에도 많은 에러를 만났고 고민을 했으나 제대로 글을 다 못남긴 것이 아쉽다.
  3. 애초에 프로젝트 기간은 한 달로 정했지만 이런저런 변명이 더해져 기간이 엄청나게 길어졌다.
- try
  1. 기획의 100% 근처까지 가보려고 노력하기.
  2. 이번 쇼핑몰을 예로 든다면, 주문 목록이 없다거나, 계좌 목록이 없을 때 어떻게 화면에 나타낼지 먼저 생각해 보기. 분기 처리를 잘 한 코드를 쓰기. 그리고 글로 남기기.
  3. 설정한 프로젝트 배포 날을 꼭 맞출 수 있도록 일정 관리를 잘 해보기.

## 팀원

<table border> <tbody> <tr> <td align="center" width=""> <img width="200" src="https://avatars.githubusercontent.com/u/83855636?v=4"  alt="유지석"/><br /> <br/> <a href="https://github.com/yujiseok"> <img src="https://img.shields.io/badge/유지석-000?style=flat-round&logo=GitHub&logoColor=white"/> </a> </td> <td align="center" width=""> <img width="200" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림"/><br/> <br/> <a href="https://github.com/hyorimcho"> <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/> </a> </td> </tr> </tbody> </table>
