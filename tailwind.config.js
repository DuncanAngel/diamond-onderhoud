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
                    50: '#f4f8fb',
                    100: '#e7f0f7',
                    200: '#cae0ed',
                    300: '#9cc6dd',
                    400: '#61a5c8',
                    500: '#438db4',
                    600: '#317298',
                    700: '#295b7b',
                    800: '#254e67',
                    900: '#244256',
                },
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
