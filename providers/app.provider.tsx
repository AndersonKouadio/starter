import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { HeroUIThemeProvider } from './heroui-theme.provider';

export const AppProvider = ({ children, locale }: { children: React.ReactNode, locale?: string }) => {
    return (<>
        <NuqsAdapter>
            <HeroUIThemeProvider locale={locale}>
                {children}
            </HeroUIThemeProvider>
        </NuqsAdapter>
    </>);
};