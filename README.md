# 🐲 bleshop
공부를 목적으로 만든 쇼핑몰 사이트입니다.

- [bleshop](https://bleshop.shop/)
- [velog](https://velog.io/@1-blue/series/bleshop)
- [trello](https://trello.com/b/LB5XaYBq/bleshop)

<section align="center">
  <h2 style="text-align: center; margin: 0;">🛠️ 사용 라이브러리 🛠️</h2>
  <img src="https://img.shields.io/badge/Next.js-818CF8?style=flat-square&logo=Next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth-666666?style=flat-square&logo=NextAuth&logoColor=white" />
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=flat-square&logo=TailwindCss&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/AmazonS3-569A31?style=flat-square&logo=AmazonS3&logoColor=white" />
  <img src="https://img.shields.io/badge/AmazonAWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white" />
</section>

<section align="center">
  <h2 style="text-align: center; margin: 0;">💁‍♂️ 사용 툴 🙋‍♂️</h2>
  <a href="https://trello.com/b/LB5XaYBq/bleshop">
    <img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white" />
  </a>
  <a href="https://velog.io/@1-blue/series/bleshop">
    <img src="https://img.shields.io/badge/Velog-20C997?style=flat-square&logo=Velog&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white" />
  <a href="https://github.com/1-blue/bleshop">
    <img src="https://img.shields.io/badge/GitHub-609926?style=flat-square&logo=GitHub&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/Sourcetree-0052CC?style=flat-square&logo=Sourcetree&logoColor=white" />
  <img src="https://img.shields.io/badge/VsCode-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white" />
</section>

# 🙌 구현 기능
1. 유저 CRUD
1. 상품 CRD
1. 리뷰 CRD
1. 장바구니 CRD
1. 찜하기 CRD
1. 결제 기능 CRD
1. 결제 기록 CRD
1. 상품 검색
1. 카테고리, 필터링

# 🛠️ 제작환경
1. OS: `Window11`
2. editor: `VSCode`, `Sourcetree`
3. terminal: `git bash`
4. Database: `docker` - `mysql-server`
5. vcs: `Git` / `GitHub`
6. Front: `Next.js`
7. Back: `Next.js`
8. 배포: `AWS EC2 ubuntu 22.04`
9. 이미지 저장소: `AWS S3`
10. 도메인: 가비아

# 👇 가이드라인
## 1. 프론트엔드
- 종속성 설치
```bash
npm install

# npx 가능하다면 설치 안 해도 됨
sudo npm install -g pm2
```

- `.env` 생성
```
DATABASE_URL=
SECRET=
ANALYZE=

KAKAO_ID=
KAKAO_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=
```

- `.env.development`, `.env.production` 생성
```
NEXTAUTH_URL=

NEXT_PUBLIC_FRONT_URL=
NEXT_PUBLIC_PHOTO_URL=

NEXT_PUBLIC_IAMPORT_CODE=

BLESHOP_AWS_REGION=
BLESHOP_AWS_ACCESS_KEY=
BLESHOP_AWS_SECRET_KEY=

IAMPORT_REST_API_KEY=
IAMPORT_REST_API_SECRET=
```

- 빌드
```bash
npm run build
```

- 실행
```bash
# 개발 시
npm run dev

# 배포 시
sudo pm2 start npm -- start
```

# 👀 주의
1. 프로젝트의 결제 기능은 실제 결제가 아닌 테스트 결제입니다. ( 금액이 사용되지 않음 )
2. 현재 `AWS-S3`에서 빌드를 못해서 따로 `build` 브랜치를 만들어서 배포한 상태입니다.
