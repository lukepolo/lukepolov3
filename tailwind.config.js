module.exports = {
  theme: {
    extend: {
      colors: {
        gray : {
          "100" : "#eeeeee",
          "200" : "#dadada",
          "300" : "#cccccc",
          "400" : "#989898",
          "500" : "#777777",
          "600" : "#555555",
          "700" : "#343434",
          "800" : "#131313",
          "900" : "#000000"

        }
      },
      boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
        md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
        lg: ' 10px 30px 10px rgba(0,0,0, .2)',
        xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(66,153,225,0.5)'
      }
    }
  },
  variants: {},
  plugins: [],
};
