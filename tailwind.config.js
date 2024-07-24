module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '85': '85%',
        '100p': "100%", 
        '125': "125px", 
        '50p': "50%", 
        "200":"200px",
        "50": "50px",
        "747": "747px",
      },
      height: {
        '40': "40px",
        '50': "50px",
        '125': "125px", 
      },
      colors: {
        'pry': '#D68676',
      },
    },
    minHeight: {
      '1/6': '110vh',
      '1/5': '100vh',
      '1/4': '90vh',
      '1/3': '25vh',
      '1/2': '35vh',
    },
    screens: {
      "xs":"280px",
      'sm': '541px',
      'md': '550px',
      'lg': '1024px',
      'xl': '1200px',
    },
    colors:{
      "bk": "#12022F",
      "bt-primary":"#D68676",
      "para": "#594D6D",
      "para2": "#797B89",
      "fm": "#E7E5EA",
      "mtext": "#2D3748"
    },
    fontSize: {
      "56":"56px",
      "18":"18px",
      "21":"21px",
      "22":"22px",
      "16":"16px",
      "42":"42px",
      "14":"14px",
      "48":"48px"
    },
    fontFamily: {
      'paytone': ["Paytone One"],
      'fellix': ["fellix"],
    },
    backgroundImage: {
        "gradient": "url('/images/gradient_sm.png')",
    }
  },
  plugins: [],
}
