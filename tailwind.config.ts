import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { 
            transform: 'translateY(0px) translateZ(0)',
          },
          '50%': { 
            transform: 'translateY(-20px) translateZ(0)',
          },
          '100%': { 
            transform: 'translateY(0px) translateZ(0)',
          },
        },
        'float-slow': {
          '0%': { 
            transform: 'translateY(0px) translateZ(0)',
          },
          '50%': { 
            transform: 'translateY(-10px) translateZ(0)',
          },
          '100%': { 
            transform: 'translateY(0px) translateZ(0)',
          },
        }
      },
      animation: {
        'float': 'float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float-slow': 'float-slow 7s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config; 