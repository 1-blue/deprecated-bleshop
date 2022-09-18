import NextAuth from "next-auth";

// type
import type { SimpleUser } from "@src/types";

declare module "next-auth" {
  interface Session {
    user: SimpleUser;
  }
}
