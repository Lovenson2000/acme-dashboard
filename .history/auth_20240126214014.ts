import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { string } from 'prop-types';

export const {auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
        const parsedCredentials = z
            .object({ email: z.string().email(), password: })
        }
    })],
});