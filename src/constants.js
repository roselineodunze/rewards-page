import { MdHome, MdDiamond } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";

export const sidebarLinks = [
    {
        name: "Home",
        icon: MdHome,
        link: "/1"
    },
    {
        name: "Discover",
        icon: RiTimeFill,
        link: "/2"
    },
    {
        name: "Library",
        icon: FaBoxOpen,
        link: "/3"
    },
    {
        name: "Tech Stack",
        icon: BsStack,
        link: "/4"
    },
    {
        name: "Subscriptions",
        icon: FaCreditCard,
        link: "/5"
    },
    {
        name: "Rewards Hub",
        icon: MdDiamond,
        link: "/rewards"
    },
    {
        name: "Settings",
        icon: RiUserSettingsFill,
        link: "/6"
    }
]

export const lockedCards = [
    {
        title: "$5 Bank Transfer",
        desc: "The $5 equivalent will be transferred to your bank account.",
        points: 5000,
        status: "Locked",
        icon: "money"
    },
    {
        title: "$5 PayPal International",
        desc: "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
        points: 5000,
        status: "Locked",
        icon: "money"
    },
    {
        title: "$5 Virtual Visa Card",
        desc: "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
        points: 5000,
        status: "Locked",
        icon: "gift"
    },
    {
        title: "Free Udemy Course",
        desc: "Coming Soon!",
        points: 0,
        status: "Coming Soon",
        icon: "books"
    }
]