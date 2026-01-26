import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/lib/prisma"

export const { auth, handlers, signIn, signOut } =  NextAuth({
    providers: [],
    adapter: PrismaAdapter(prisma as any), 
})