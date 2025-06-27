"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex gap-2">
            <p>The current theme is: {theme}</p>
            <div className="flex gap-2">
                <Button color="primary" onPress={() => setTheme('light')}>Light Mode</Button>
                <Button onPress={() => setTheme('dark')}>Dark Mode</Button>
            </div>
        </div>
    )
};