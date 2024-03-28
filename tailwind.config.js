/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slideColor: "#FBFAFF",
        hoverLi:"#EFF1FE"
      },
    },
  },
  plugins: [],
};
