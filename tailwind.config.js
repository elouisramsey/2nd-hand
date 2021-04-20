module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.js', './pages/**/*.js']
  },
  theme: {
    extend: {
      colors: {
        bg: '#FCFCFC',
        glighter: '#F0F0F0',
        glight: '#D6D6D6',
        gdark: '#707070',
        gdarker: '#0a0a0a',
        inputColor: '#444141',
        bordercr: '#696969'
      },
      fontSize: {
        three: '1.3rem',
        tiny: '0.5rem',
        two: '2rem'
      },
      width: {
        '8/11': '73%',
        '1/7': '39%'
      },
      height: {
        half: '50vh'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
