import type { SearchParams } from 'nuqs/server'

export interface AdminPageProps {
    searchParams: Promise<SearchParams>
}
