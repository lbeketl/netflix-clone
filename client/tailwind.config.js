module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-to-b':
                    'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
            },
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
        require('tailwind-scrollbar-hide'),
        require('tailwind-scrollbar'),
    ],

    // theme: {
    //   textShadow: {
    //      'default': '0 2px 0 #000',
    //      'md': '0 2px 2px #000',
    //      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
    //      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
    //   }
    // }
}
