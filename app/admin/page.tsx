import AdminDashboardLayout from "@/layouts/admin-dashboard"
import { redirect } from "next/navigation"

const AdminDashboard = async () => {

  redirect("/admin/orders")

  return (
    <AdminDashboardLayout />
  )
}

export default AdminDashboard