import NextAuth from "next-auth";

// type
import type { UserWithPhoto } from "@src/types";

declare module "next-auth" {
  interface Session {
    user: UserWithPhoto;
  }
}
