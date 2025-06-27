import { AdminSearch } from "@/components/app/admin/AdminSearch";
import Link from "next/link";
import { adminSearchParams } from "@/features/admin/filters/admin-searchParams";
import { AdminPageProps } from "@/features/admin/types/admin-page.type";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { CalendarComponent } from "@/components/app/admin/CalendarComponent";

import { redirect } from "next/navigation";
import { getSession } from "@/features/auth/helpers/get-session";

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const { search } = await adminSearchParams.parse(searchParams);
  console.log(search);

  const session = await getSession()

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <div className="flex justify-between">
        <AdminSearch />
        <ThemeSwitcher />
      </div>
      <CalendarComponent />
      <Link href="/">Home</Link>
    </div>
  )
}