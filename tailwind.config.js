module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'group-focus'],
            divideColor: ['group-hover'],
            scale: ['focus-within'],
            animation: ['motion-reduce'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
