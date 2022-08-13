import type { User } from "@prisma/client";

export type UserWithPhoto =
  | (Omit<User, "password"> & {
      photo: { path: string } | null;
    })
  | null;
