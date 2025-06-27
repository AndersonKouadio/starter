"use server"

import { auth } from "@/lib/auth"

export async function loginUser(formData: FormData) {
  
    const response = await auth.api.signInEmail({
        body: {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        },
        headers: {
            "Content-Type": "application/json",
        },
        asResponse: true,
    })

    console.log(response);
}