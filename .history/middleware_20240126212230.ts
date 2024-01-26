import NextAuth from 'next-auth';
import { authConfig, NextAuthConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    
}

