"use client"

import React from 'react'
import { Button, Input } from '@heroui/react'
import { loginUser } from '@/features/auth/actions/auth.action'

export function Login() {

    return (
        <div>
            <h1>Login</h1>
            <form action={loginUser}>
                <Input type="text" placeholder='Email' />
                <Input type="password" placeholder='Password' />
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}
