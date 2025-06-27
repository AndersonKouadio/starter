import { parseAsString, createSearchParamsCache } from 'nuqs/server'

export const adminSearchParams = createSearchParamsCache({
    search: parseAsString.withDefault(''),
})