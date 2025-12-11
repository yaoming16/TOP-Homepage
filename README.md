#  Pablo Perez - The Odin Project Portfolio

A modern, accessible portfolio website showcasing projects completed for [The Odin Project](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-homepage). Built with Webpack, vanilla JavaScript, and modern CSS with smooth animations.

## 🌐 Live Demo

[View Live Site](https://yaoming16.github.io/TOP-Homepage/)

## ✨ Features

- **Responsive Design** - Mobile-first approach with fluid layouts
- **Smooth Animations** - Sequential fade-in and slide animations on page load
- **Dynamic Project Cards** - Automatically generated from a projects array
- **Accessibility Focused** - ARIA labels, keyboard navigation, focus indicators
- **Modern Build System** - Webpack with dev server and hot module replacement
- **Dark Theme** - Eye-friendly dark color palette with teal accents

## 🎨 Design

The site uses a cohesive dark navy and teal color scheme inspired by modern developer portfolios:
- **Background**: Deep navy (#0a192f)
- **Accent**: Bright teal (#64ffda)
- **Typography**: Monospace fonts for developer aesthetic

Special visual effects include zig-zag borders between sections using CSS masks.

## 📁 Project Structure

```
TOP-Homepage/
├── src/
│   ├── index.js              # Main entry point
│   ├── template.html         # HTML template
│   ├── styles.css            # Global styles
│   ├── projects.js           # Projects data array
│   ├── icons/
│   │   └── icons.html        # Social media icons
│   ├── images/               # Project screenshots
│   └── projects/
│       ├── project.js        # Project card component
│       └── project.css       # Project card styles
├── webpack.config.js         # Webpack configuration
└── package.json
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, Grid, Flexbox
- **JavaScript (ES6+)** - Modular components
- **Webpack** - Module bundling and asset management

## ♿ Accessibility Features

- ARIA labels on all icon links
- Keyboard navigation support
- Focus-visible indicators
- Semantic HTML structure
- Alt text on all images
- Color contrast meets WCAG AA standards

## 📝 Adding New Projects

To add a new project, edit `src/projects.js`:

```javascript
{
    title: "Project Name",
    description: "Project description",
    technologies: ["HTML", "CSS", "JavaScript"],
    linkPage: "https://live-demo-url.com",
    linkRepo: "https://github.com/username/repo",
    image: ImageImport,
}
```

Don't forget to import the project image at the top of the file.

## 👤 Author

**Pablo Perez**
- Portfolio: [yaoming16.github.io](https://yaoming16.github.io/)
- LinkedIn: [pablo-javier-perez-gimenez](https://www.linkedin.com/in/pablo-javier-perez-gimenez/)
- GitHub: [@yaoming16](https://github.com/yaoming16)

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) - For the comprehensive web development curriculum
- [Devicons](https://devicons.github.io/devicon/) - For the technology icons
