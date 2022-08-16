import prisma from "@src/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    // 인증 방식 선택 ( 현재는 "id" + "password" )
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: {
          label: "아이디",
          type: "text",
          placeholder: "아이디를 입력하세요.",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholder: "비밀번호를 입력하세요.",
        },
      },

      // 로그인 유효성 검사

      async authorize(credentials, req) {
        if (!credentials)
          throw new Error("잘못된 입력값으로 인한 오류가 발생했습니다.");

        const { id, password } = credentials;

        const exUser = await prisma.user.findUnique({
          where: { id },
          include: { photo: true },
        });
        if (!exUser) throw new Error("존재하지 않는 아이디입니다.");

        const result = await bcrypt.compare(password, exUser.password);
        if (!result) throw new Error("비밀번호가 불일치합니다.");

        return exUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    // 세션에 로그인한 유저 데이터 입력
    async session({ session }) {
      const exUser = await prisma.user.findUnique({
        where: { name: session.user?.name },
        select: {
          idx: true,
          id: true,
          name: true,
          email: true,
          phone: true,
          photo: {
            select: {
              path: true,
            },
          },
        },
      });

      session.user = exUser;

      return session;
    },
  },
  secret: process.env.SECRET,
});
