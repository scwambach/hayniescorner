module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        90: '90%',
      },
      height: {
        90: '90%',
        video: '100%',
      },
      maxWidth: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      padding: {
        wrap: '0 40px',
        wrapMobile: '0 20px',
        video: '56.25%',
      },
      colors: {
        transparent: 'rgba(0,0,0,0)',
        overlay: 'rgba(0,0,0,0.5)',
        white: '#ebe9e1',
        black: '#001219',
        color1: '#005f73',
        color2: '#e9d8a6',
      },
      fontFamily: {
        display: ['Glamour Absolute'],
        body: ['monospace'],
      },
    },
  },
  plugins: [],
};
