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
                    50: '#fff6ed',
                    100: '#ffead4',
                    200: '#ffd1a8',
                    300: '#ffb071',
                    400: '#ff914d',
                    500: '#fe6211',
                    600: '#ef4707',
                    700: '#c63208',
                    800: '#9d290f',
                    900: '#7e2410',
                },
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
