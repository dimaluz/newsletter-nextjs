import { atom } from "jotai";
import { TbWriting } from "react-icons/tb";


export const sideBarActive = atom<string>('/dashboard')
export const reportFilterActiveItem = atom<string>('Overview')
export const emailEditorDefaultValue = atom<string>('')
export const settingsActiveItem = atom<string>('Profile')

export const navItems: NavItems[] = [
    {
        title: 'Features',
    },
    {
        title: 'Pricing',
    },
    {
        title: 'Resources',
    },
    {
        title: 'Docs',
    },
]

export const freePlan: PlanType[] = [
    {
        title: 'Upto 2500 subscribers',
    },
    {
        title: 'Unlimited sends',
    },
    {
        title: 'Custom newsletter',
    },
    {
        title: 'Newsletter analytics',
    },
]

export const growPlan: PlanType[] = [
    {
        title: 'Upto 2500 subscribers',
    },
    {
        title: 'Unlimited sends',
    },
    {
        title: 'Custom newsletter',
    },
    {
        title: 'Newsletter analytics',
    },
]

export const sideBarItems: DashboardSideBarTypes[] = [
    {
        title: "Dashboard",
        url: '/dashboard',
    },
    {
        title: "Write",
        url: '/dashboard/write',
    },
    {
        title: "Grow",
        url: '/dashboard/grow',
    },
    {
        title: "Audience",
        url: '/dashboard/audience',
    },
]

export const sideBarBottomItems: DashboardSideBarTypes[] = [
    {
        title: "Settings",
        url: '/dashboard/settings',
    },
    {
        title: "View Site",
        url: '/',
    },
]