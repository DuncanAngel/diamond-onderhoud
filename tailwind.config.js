/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FFFFFF',
                    100: '#CEFBCD',
                    200: '#9CF79B',
                    300: '#6BF468',
                    400: '#39F036',
                    500: '#08ec04',
                    600: '#06bd03',
                    700: '#058E02',
                    800: '#035E02',
                    900: '#022F01',
                },
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
