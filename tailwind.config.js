/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'}
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "profile": '5px 5px 0px 0px rgba(50,25,110)',
        "multiple": '5px 5px rgba(50,25,110,0.4), 10px 10px rgba(50,25,110,0.3), 15px 15px rgba(50,25,110,0.2), 20px 20px rgba(50,25,110,0.1), 25px 25px rgba(50,25,110,0.05)'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "blue-500"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(15) infinite alternate, blink .8s infinite"
      },
    },
  },
  plugins: [],
};
