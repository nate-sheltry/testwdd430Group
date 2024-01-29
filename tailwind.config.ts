import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8026466 (Customized TailwindCSS colors, added google font and set metadata)

    colors: {

      'orange': 'hsl(26, 100%, 55%)',

      'pale-orange': 'hsl(25, 100%, 94%)',

      'very-dark-blue': 'hsl(220, 13%, 13%)',

      'dark-grayish-blue': 'hsl(219, 9%, 45%)',

      'grayish-blue': 'hsl(220, 14%, 75%)',

      'light-grayish-blue': 'hsl(223, 64%, 98%)',

      'white': 'hsl(0, 0%, 100%)',

      'black': 'hsl(0, 0%, 0%)',

      'transparent': 'hsl(0, 0%, 100% / 0)'

    },

<<<<<<< HEAD
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
<<<<<<< HEAD
<<<<<<< HEAD
=======
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
>>>>>>> f58ac01 (completed team setup)
=======
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
>>>>>>> 8026466 (Customized TailwindCSS colors, added google font and set metadata)
=======
      gridTemplateColumns: {
        'lg-body': '10rem 1fr',
        'md-body': '6rem 1fr',
        'sm-body': '4rem 1fr'
        
      },
      gridTemplateRows: {
        'body': '5rem 1fr'
      }
>>>>>>> b67351b (created header and implemented grid layout)
=======
      // gridTemplateColumns: {
      //   'lg-body': '10rem 1fr',
      //   'md-body': '6rem 1fr',
      //   'sm-body': '4rem 1fr'
        
      // },
      // gridTemplateRows: {
      //   'body': '5rem 1fr'
      // }
>>>>>>> c3afad1 (Added carousel, product, and review section)
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
