import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/lib/prisma"

export const { auth, handlers, signIn, signOut } =  NextAuth({
    providers: [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapter: PrismaAdapter(prisma as any), 
})