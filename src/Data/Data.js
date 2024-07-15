// Sidebar imports
import {
  UilEstate,
  UilTrophy,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChartLine,
  UilChart,
 // UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    page: '/' 
  },
  {
    icon: UilChartLine,
    heading: "TrendInvest",
    page: "/TrendInvest"
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Leaderboard",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 100,
    value: "Top 6 Items",
    png: UilTrophy,
    series: [
      {
        name: "Leaderboard",
        data: [30, 42, 50, 65, 80, 85, 97], // Your data values
      },
    ],
    labels: ['Alice', 'Ravi', 'Sanju', 'David', 'Anna', 'Lisa', 'Raj']
  },
  {
    title: "User Investments",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 90,
    value: "Top 6 Items",
    png: UilChart,
    series: [
      {
        name: "User Investments",
        data: [20, 30, 45, 60, 50, 90, 85], // Example data, adjust as necessary
      },
    ],
  },
];


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "My investment in that item paid off! Loving these 5 new supercoins!",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "I knew this item would trend today. My intuition paid off with 5 supercoins!",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Anna Davila",
    noti: "I predicted the right fashion trend! Got 5 extra coins, so excited!",
    time: "2 hours ago",
  },
];
