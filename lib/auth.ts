import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    // database: {
    //     adapter: "memory",
    // },
    emailAndPassword: {
        enabled: true,
        signInWithEmailAndPassword: async ({ email, password }: { email: string; password: string }) => {
            // const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password }),
            // });

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.message || 'Invalid credentials');
            // }

            // const user = await response.json();
            return {
                user: {
                    email,
                    password,
                    id: 1,
                    role: "admin",
                    name: "admin",
                    createdAt: "2025-06-23T03:04:03.000Z",
                    updatedAt: "2025-06-23T03:04:03.000Z",
                    token: "123"
                }
            };
        },
    },
    plugins: [nextCookies()],
    session: {
        expiresIn: 60 * 60 * 24 * 7, // Session valide 7 jours
        updateAge: 60 * 60 * 24, // Met à jour l'âge de la session toutes les 24h
    },
})