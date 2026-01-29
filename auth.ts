import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/lib/prisma"
import GitHub from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } =  NextAuth({
    providers: [GitHub],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapter: PrismaAdapter(prisma as any), 
    trustHost: true,
    debug: true,
})