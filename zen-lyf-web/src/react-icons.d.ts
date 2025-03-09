// This file fixes TypeScript compatibility issues with react-icons

import { IconType } from 'react-icons';
import { SVGAttributes, ReactElement } from 'react';

declare module 'react-icons/fa' {
  export const FaLock: IconType;
  export const FaCode: IconType;
  export const FaExchangeAlt: IconType;
  export const FaFileAlt: IconType;
  export const FaKey: IconType;
  export const FaIdCard: IconType;
  export const FaExclamationTriangle: IconType;
  export const FaShieldAlt: IconType;
  export const FaClipboardCheck: IconType;
  export const FaUserShield: IconType;
  export const FaServer: IconType;
  export const FaDatabase: IconType;
  export const FaHospital: IconType;
  export const FaNetworkWired: IconType;
  export const FaMobileAlt: IconType;
  export const FaApple: IconType;
  export const FaGooglePlay: IconType;
  export const FaBell: IconType;
  export const FaWifi: IconType;
  export const FaHeartbeat: IconType;
  export const FaMobile: IconType;
  export const FaSyncAlt: IconType;
  export const FaChartLine: IconType;
  export const FaQuoteLeft: IconType;
  export const FaUserMd: IconType;
  export const FaCalendarAlt: IconType;
  export const FaMicrosoft: IconType;
  export const FaClipboardList: IconType;
}

declare module 'react-icons/fi' {
  export const FiUsers: IconType;
  export const FiActivity: IconType;
  export const FiAlertCircle: IconType;
  export const FiCalendar: IconType;
  export const FiSettings: IconType;
  export const FiLogOut: IconType;
  export const FiSearch: IconType;
  export const FiBell: IconType;
  export const FiHelpCircle: IconType;
  export const FiFileText: IconType;
  export const FiMail: IconType;
  export const FiMessageSquare: IconType;
  export const FiPhone: IconType;
  export const FiVideo: IconType;
  export const FiArrowRight: IconType;
}

declare module 'react-icons/md' {
  export const MdVerified: IconType;
  export const MdSecurity: IconType;
  export const MdHealthAndSafety: IconType;
  export const MdSyncAlt: IconType;
  export const MdMonitorHeart: IconType;
  export const MdDevices: IconType;
  export const MdNotifications: IconType;
  export const MdWatchLater: IconType;
}

declare module 'react-icons/si' {
  export const SiApple: IconType;
  export const SiFitbit: IconType;
  export const SiGooglefit: IconType;
  export const SiSamsung: IconType;
  export const SiAmazon: IconType;
  export const SiGoogle: IconType;
}

declare module 'react-icons/gi' {
  export const GiHealthNormal: IconType;
}

declare module 'react-icons/im' {
  export const ImLab: IconType;
}

declare module 'react-icons/ri' {
  export const RiGlobalLine: IconType;
} 