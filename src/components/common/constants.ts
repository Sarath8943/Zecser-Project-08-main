import {
    LayoutDashboard,
    Share2,
    Image,
    BarChart,
    FolderOpen,
} from "lucide-react";

export const SITE_DESCRIPTION =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact" },
];

export const ADDRESS =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export const SOCIAL_LINKS = [
    { href: "https://facebook.com", icon: "facebook" },
    { href: "https://linkedin.com", icon: "linkedin" },
    { href: "https://youtube.com", icon: "youtube" },
    { href: "https://instagram.com", icon: "instagram" },
];



export const ADMIN_NAV_LINKS = [
    {
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Services",
        path: "/admin/services",
        icon: Share2,
    },
    {
        label: "Gallery",
        path: "/admin/gallery",
        icon: Image,
    },
    {
        label: "Reports",
        path: "/admin/reports",
        icon: BarChart,
    },
    {
        label: "Projects",
        path: "/admin/projects",
        icon: FolderOpen,
    },
];
