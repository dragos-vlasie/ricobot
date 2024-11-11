// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Typography Sizes
        'heading-large': '31px',  // Large Heading (Desktop)
        'heading-small': '17px',  // Large Heading (Mobile)
        'subheading-large': '14px',  // Subheading (Desktop)
        'subheading-small': '12px',  // Subheading (Mobile)
        'title-large': '49px',  // Title (Mobile)
        'title-small': '35px',  // Title (Desktop)
        'paragraph-large': '16px',  // Paragraph (Desktop)
        'paragraph-small': '14px',  // Paragraph (Mobile)
        'cta-large': '16px',  // CTA Button (Desktop)
        'cta-small': '14px',  // CTA Button (Mobile)
      },
      colors: {
        body: '#09101A',  // Body Background Color
        ctaBackground: '#fff',  // CTA Button Background Color
        ctaText: '#000',  // CTA Button Text Color
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },

  plugins: [],
};
