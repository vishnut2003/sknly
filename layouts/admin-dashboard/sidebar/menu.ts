import { RiDashboardLine, RiSurveyLine } from "@remixicon/react";
import { DashboardSidebarMenuItems } from "./menu-item";

export const adminSidebarMenuItems: (DashboardSidebarMenuItems | string)[] = [
    {
        label: "Overview",
        icon: RiDashboardLine,
        href: "/admin",
    },
    "Business Hub",
    {
        label: "Orders",
        icon: RiSurveyLine,
        href: "/admin/orders",
    },
]