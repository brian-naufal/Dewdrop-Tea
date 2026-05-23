# Dewdrop Tea - Bootstrap Web Project

A modern, responsive website for Dewdrop Tea built with Bootstrap 5 and custom CSS.

## Project Structure

```
Dewdrop-Tea/
├── index.html              # Home page
├── css/
│   └── style.css          # Custom styles and Bootstrap overrides
├── js/
│   └── main.js            # Custom JavaScript
├── pages/
│   ├── products.html      # Products page
│   ├── about.html         # About page
│   └── contact.html       # Contact page
├── images/                # Image assets (add your images here)
├── assets/                # Other assets
├── package.json           # Project dependencies
└── node_modules/          # Bootstrap and dependencies
```

## Features

✨ **Responsive Design** - Mobile-first Bootstrap 5 framework
✨ **Modern UI** - Clean and professional appearance
✨ **Custom Branding** - Custom color scheme and typography
✨ **Multi-page** - Home, Products, About, and Contact pages
✨ **Ready to Deploy** - Production-ready HTML structure

## Getting Started

### Prerequisites
- Node.js and npm installed
- A modern web browser

### Installation

1. Ensure Bootstrap is installed:
```bash
npm install
```

2. Open the project in your browser:
   - Simply open `index.html` in your browser
   - Or use a local server for better functionality

### Using a Local Server (Recommended)

With Python 3:
```bash
python -m http.server 8000
```

With Node.js:
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Pages

- **Home (index.html)** - Landing page with hero section and features
- **Products (pages/products.html)** - Product showcase
- **About (pages/about.html)** - Company information
- **Contact (pages/contact.html)** - Contact form and information

## Customization

### Colors
Edit the color variables in `css/style.css`:
```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #f4e7d7;
    --accent-color: #d4a574;
    --dark-color: #1a1a1a;
    --light-color: #f8f9fa;
}
```

### Adding Images
Place your images in the `images/` folder and reference them in HTML:
```html
<img src="images/your-image.jpg" alt="Description">
```

### Bootstrap Classes
This project uses Bootstrap 5. Visit [Bootstrap Documentation](https://getbootstrap.com/docs/) for available components and utilities.

## Development Tips

1. Keep custom CSS in `css/style.css`
2. Add custom JavaScript to `js/main.js`
3. Use Bootstrap's grid system for responsive layouts
4. Test on different screen sizes
5. Optimize images before adding them

## Deployment

To deploy your website:
1. Upload all files to your hosting provider
2. Update image paths if deploying to a subdirectory
3. Test all links and functionality
4. Ensure `.htaccess` or equivalent is configured for routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is ready for customization. Update the footer and all content to match your brand.

## Support

For Bootstrap documentation and support, visit: https://getbootstrap.com/

---

**Created:** 2026
**Framework:** Bootstrap 5.3.8
