# Portfolio Website - Annant Singh Saharan

A modern, minimalist portfolio website showcasing my work as a Web Developer and UI/UX Designer.

## 🚀 Features

- **Modern Minimalist Design** - Clean, new-generation style with smooth animations
- **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- **Dark Theme** - Easy on the eyes with a sleek dark interface
- **Contact Form** - Functional contact form using Formspree
- **Smooth Animations** - Intersection Observer animations for a polished experience
- **SEO Optimized** - Meta tags and Open Graph tags for better social sharing
- **Fast Loading** - Optimized for performance with preconnect hints

## 📋 Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A Formspree account (free) for contact form functionality
- A hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 🛠️ Setup Instructions

### 1. Get Your Formspree Form ID

1. Go to [Formspree.io](https://formspree.io) and sign up for a free account
2. Create a new form
3. Copy your form ID (it will look like: `xvgkqyzw`)
4. Open `index.html` and find this line:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### 2. Update Your Information

Edit `index.html` to customize:
- **Meta Tags**: Update URLs in Open Graph and Twitter meta tags (lines 18-28)
- **Contact Information**: Update email, phone, and location in the contact section
- **Social Links**: Update LinkedIn and other social media links
- **Projects**: Add your actual project links and descriptions
- **Content**: Customize all text content to match your information

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files (index.html, styles.css, script.js, README.md)
3. Go to Settings > Pages
4. Select your branch (usually `main` or `master`)
5. Your site will be live at `https://yourusername.github.io/repository-name`

### 4. Deploy to Netlify (Alternative)

1. Go to [Netlify](https://www.netlify.com)
2. Sign up/login
3. Drag and drop your project folder
4. Your site will be live instantly with a random URL
5. You can add a custom domain in settings

### 5. Deploy to Vercel (Alternative)

1. Install Vercel CLI: `npm i -g vercel`
2. In your project folder, run: `vercel`
3. Follow the prompts
4. Your site will be deployed

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css` (lines 1-9):

```css
:root {
    --bg-primary: #0a0a0a;      /* Main background */
    --bg-secondary: #111111;    /* Card backgrounds */
    --accent: #00ff88;           /* Accent color (green) */
    --text-primary: #ffffff;     /* Main text */
    --text-secondary: #a0a0a0;   /* Secondary text */
}
```

### Fonts

The site uses Inter font. To change it:
1. Update the Google Fonts link in `index.html`
2. Update the `font-family` in `styles.css`

### Sections

All sections are in `index.html`. You can:
- Add new sections
- Remove sections you don't need
- Reorder sections by moving them in the HTML

## 🔧 Troubleshooting

### Contact Form Not Working

- Make sure you've replaced `YOUR_FORM_ID` with your actual Formspree form ID
- Check that your Formspree form is active
- Verify the form action URL is correct
- Check browser console for errors

### Animations Not Working

- Ensure JavaScript is enabled in your browser
- Check that `script.js` is properly linked in `index.html`
- Look for JavaScript errors in the browser console

### Styling Issues

- Clear your browser cache
- Ensure `styles.css` is properly linked
- Check for CSS syntax errors

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📧 Contact

- **Email**: annantsaharan@gmail.com
- **LinkedIn**: [linkedin.com/in/annantsaharan](https://linkedin.com/in/annantsaharan)
- **Phone**: +91 8475829484

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Inter font
- Formspree for form handling

---

**Made with ❤️ by Annant Singh Saharan**

