type ColorScheme = {
  name: string;
  theme: {
    primary: string;
    primaryText: string;
    secondary: string;
    secondaryText: string;
    accent: string;
    accentText: string;
    tertiary?: string;
    quaternary?: string;
    background: string;
    text: string;
    primaryHighlightText: string;
    secondaryHighlightText: string;
  };
};

export const socialMediaThemes: ColorScheme[] = [
  {
    name: "TikTok",
    theme: {
      primary: "#ff0050", // TikTok Pink/Red
      primaryText: "#ffffff",
      secondary: "#00f2ea", // TikTok Cyan
      secondaryText: "#000000",
      accent: "#69c9d0", // TikTok Light Blue
      accentText: "#000000",
      tertiary: "#FF005E", // TikTok Light Pink
      quaternary: "#ffffff", // TikTok White
      background: "#010101", // TikTok Dark Mode Black
      text: "#ffffff", // White text for dark background
      primaryHighlightText: "#ffffff",
      secondaryHighlightText: "#000000",
    },
  },
  {
    name: "Instagram",
    theme: {
      primary: "#833AB4", // Instagram Purple
      primaryText: "#ffffff",
      secondary: "#FD1D1D", // Instagram Red/Orange
      secondaryText: "#ffffff",
      accent: "#F77737", // Instagram Orange
      accentText: "#000000",
      tertiary: "#FCAF45", // Instagram Yellow/Orange
      quaternary: "#C13584", // Instagram Magenta
      background: "#ffffff", // Instagram White Background
      text: "#000000", // Instagram Dark Text
      primaryHighlightText: "#ffffff",
      secondaryHighlightText: "#ffffff",
    },
  },
  {
    name: "Facebook",
    theme: {
      primary: "#1877F2", // Facebook Light Blue (from logo)
      primaryText: "#ffffff",
      secondary: "#4267B2", // Facebook Dark Blue
      secondaryText: "#ffffff",
      accent: "#42b72a", // Facebook Green (from sign-up button)
      accentText: "#ffffff",
      tertiary: "#f02849", // Facebook Red (from notification)
      quaternary: "#1877F2", // Facebook Light Blue
      background: "#f0f2f5", // Facebook Gray Background
      text: "#1c1e21", // Facebook Text Color
      primaryHighlightText: "#ffffff",
      secondaryHighlightText: "#ffffff",
    },
  },
  {
    name: "Snapchat",
    theme: {
      primary: "#000000", // Snapchat Black
      primaryText: "#ffffff",
      secondary: "#FFFC00", // Snapchat Yellow
      secondaryText: "#000000",
      accent: "#00F5FF", // Snapchat Blue
      accentText: "#000000",
      tertiary: "#FF5E00", // Snapchat Orange
      quaternary: "#E6DB0A", // slightly darker Snapchat Yellow
      background: "#ffffff", // Snapchat White Background
      text: "#000000", // Snapchat Dark Text
      primaryHighlightText: "#ffffff", // For dark backgrounds
      secondaryHighlightText: "#000000", // For light backgrounds (like the blue accent sections)
    },
  },
  {
    name: "Discord",
    theme: {
      primary: "#5865F2", // Discord Blurple (Brand Color)
      primaryText: "#ffffff",
      secondary: "#3BA55C", // Discord Online Green
      secondaryText: "#ffffff",
      accent: "#FAA61A", // Discord Idle/Away
      accentText: "#000000",
      tertiary: "#ED4245", // Discord DND Red
      quaternary: "#9146FF", // Twitch Purple (instead of Discord Invisible)
      background: "#36393f", // Discord Dark Theme Background
      text: "#ffffff", // Discord Light Text
      primaryHighlightText: "#ffffff",
      secondaryHighlightText: "#000000",
    },
  },
  {
    name: "YouTube",
    theme: {
      primary: "#FF0000", // YouTube Red (Brand Color)
      primaryText: "#ffffff",
      secondary: "#FFFFFF", // Changed to white for better visibility
      secondaryText: "#000000",
      accent: "#FF0000", // Another YouTube Red accent
      accentText: "#ffffff",
      tertiary: "#FFFFFF", // Re-cycling from before
      quaternary: "#FF0000", // Maybe becomes YouTube Magenta?
      background: "#0f0f0f", // YouTube Dark Theme Background
      text: "#ffffff", // Changed to white for better contrast
      primaryHighlightText: "#ffffff",
      secondaryHighlightText: "#000000", // For text on white backgrounds
    },
  },
  {
    name: "GitHub",
    theme: {
      primary: "#24292e", // GitHub Dark Gray
      primaryText: "#ffffff",
      secondary: "#0366d6", // GitHub Blue
      secondaryText: "#ffffff",
      accent: "#28a745", // GitHub Green
      accentText: "#ffffff",
      tertiary: "#d73a49", // GitHub Red
      quaternary: "#000000", // White for contrast
      background: "#ffffff", // White Background
      text: "#24292e", // Dark Gray Text
      primaryHighlightText: "#ffffff", // White for dark backgrounds
      secondaryHighlightText: "#24292e", // Dark Grey for light backgrounds
    },
  },
  {
    name: "GitLab",
    theme: {
      primary: "#FC6D26", // GitLab Orange
      primaryText: "#ffffff",
      secondary: "#E24329", // GitLab Red
      secondaryText: "#ffffff",
      accent: "#554488", // GitLab Purple
      accentText: "#ffffff",
      tertiary: "#FCA326", // GitLab Yellow
      quaternary: "#FC6D26", // GitLab Orange
      background: "#ffffff", // White Background
      text: "#333333", // Dark Gray Text
      primaryHighlightText: "#ffffff", // White for dark backgrounds
      secondaryHighlightText: "#333333", // Dark Gray for light backgrounds
    },
  },
];
