/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-primary": "var(--red-primary)",
        "cyan-primary": "var(--cyan-primary)",
        "orange-primary": "var(--orange-primary)",
        "blue-primary": "var(--blue-primary)",
        "very-dark-blue": "var(--very-dark-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "very-light-gray": "var(--very-light-gray)",
      },
      fontFamily: {
        poppins: "var(--poppins)",
      },
    },
  },
  plugins: [],
};
