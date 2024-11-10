type ColorScheme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  tertiary?: string;
  quaternary?: string;
  background: string;
  text: string;
  primaryHighlightText: string;
  secondaryHighlightText: string;
};

export const socialMediaThemes: ColorScheme[] = [
  {
    name: 'tiktok',
    primary: '#ff0050',     // TikTok Pink/Red
    secondary: '#00f2ea',   // TikTok Cyan
    accent: '#69c9d0',      // TikTok Light Blue
    background: '#010101',  // TikTok Dark Mode Black
    text: '#ffffff',        // White text for dark background
    primaryHighlightText: '#ffffff',
    secondaryHighlightText: '#000000',
  },
  {
    name: 'instagram',
    primary: '#833AB4',     // Instagram Purple
    secondary: '#FD1D1D',   // Instagram Red/Orange
    accent: '#F77737',      // Instagram Orange
    tertiary: '#FCAF45',    // Instagram Yellow/Orange
    quaternary: '#C13584',  // Instagram Magenta
    background: '#ffffff',  // Instagram White Background
    text: '#000000',        // Instagram Dark Text
    primaryHighlightText: '#ffffff',
    secondaryHighlightText: '#ffffff',
  },
  {
    name: 'facebook',
    primary: '#1877F2',     // Facebook Blue
    secondary: '#4267B2',   // Facebook Dark Blue
    accent: '#42b72a',      // Facebook Green (from sign-up button)
    background: '#f0f2f5',  // Facebook Gray Background
    text: '#1c1e21',        // Facebook Text Color
    primaryHighlightText: '#ffffff',
    secondaryHighlightText: '#ffffff',
  },
  {
    name: 'snapchat',
    primary: '#000000',     // Snapchat Black
    secondary: '#FFFC00',   // Snapchat Yellow
    accent: '#00F5FF',      // Snapchat Blue
    background: '#ffffff',  // Snapchat White Background
    text: '#000000',        // Snapchat Dark Text
    primaryHighlightText: '#ffffff',  // For dark backgrounds
    secondaryHighlightText: '#000000', // For light backgrounds (like the blue accent sections)
  },
  {
    name: 'discord',
    primary: '#5865F2',     // Discord Blurple (Brand Color)
    secondary: '#3BA55C',   // Discord Online Green
    accent: '#FAA61A',      // Discord Idle/Away
    tertiary: '#ED4245',    // Discord DND Red
    quaternary: '#9146FF',  // Twitch Purple (instead of Discord Invisible)
    background: '#36393f',  // Discord Dark Theme Background
    text: '#ffffff',        // Discord Light Text
    primaryHighlightText: '#ffffff',
    secondaryHighlightText: '#000000',
  },
  {
    name: 'youtube',
    primary: '#FF0000',     // YouTube Red (Brand Color)
    secondary: '#FFFFFF',   // Changed to white for better visibility
    accent: '#FF0000',      // Another YouTube Red accent
    background: '#0f0f0f',  // YouTube Dark Theme Background
    text: '#ffffff',        // Changed to white for better contrast
    primaryHighlightText: '#ffffff',
    secondaryHighlightText: '#000000',  // For text on white backgrounds
  }
]; 