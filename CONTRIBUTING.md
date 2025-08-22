# Contributing to Mastering Data Visualization with Apache ECharts

Thank you for your interest in contributing to this comprehensive ECharts learning guide! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Content Improvements**: Fix typos, improve explanations, add examples
- **New Chapters**: Add new chart types or advanced techniques
- **Code Examples**: Enhance existing examples or add new ones
- **Documentation**: Improve README, add tutorials, or create guides
- **Bug Fixes**: Fix issues with charts, styling, or functionality
- **Feature Requests**: Suggest new features or improvements

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test your changes**: Ensure all charts work correctly
5. **Commit your changes**: `git commit -m "Add descriptive commit message"`
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a Pull Request**

## 📝 Content Guidelines

### Writing Style

- Use clear, concise language
- Include practical examples
- Provide step-by-step instructions
- Use consistent formatting
- Include code comments for complex examples

### Code Standards

- Follow existing code style and formatting
- Ensure all charts are interactive and responsive
- Include proper error handling
- Add comments for complex configurations
- Test across different browsers

### File Structure

```
chapters/
├── chapter1-introduction.html
├── chapter2-core-concepts.html
├── chapter3-line-area.html
├── chapter4-bar-column.html
├── chapter5-pie-donut.html
└── chapter6-scatter-bubble.html

projects/
├── business-dashboard.html
└── [other project files]

assets/
├── css/
│   └── style.css
└── js/
    └── [JavaScript files]
```

## 🎨 Design Guidelines

### Visual Consistency

- Use the existing color scheme and typography
- Maintain responsive design principles
- Ensure accessibility standards
- Keep charts visually appealing and professional

### Chart Design

- Use appropriate chart types for data
- Include proper titles and labels
- Add tooltips and interactive features
- Ensure good contrast and readability

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Clear description** of the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Browser and version** information
5. **Screenshots** if applicable

## 💡 Feature Requests

When suggesting new features:

1. **Describe the feature** in detail
2. **Explain the benefits** and use cases
3. **Provide examples** if possible
4. **Consider implementation** complexity

## 📚 Adding New Chapters

When adding new chapters:

1. Follow the existing chapter structure
2. Include interactive examples
3. Add practice exercises
4. Update navigation links
5. Include key takeaways
6. Test all functionality

### Chapter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter X: [Title] - Mastering ECharts</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <div class="container">
        <header class="chapter-header">
            <h1>Chapter X: [Title]</h1>
            <p class="chapter-subtitle">[Brief description]</p>
            <div class="chapter-navigation">
                <a href="previous-chapter.html" class="nav-btn prev">← Previous Chapter</a>
                <a href="next-chapter.html" class="nav-btn next">Next Chapter →</a>
            </div>
        </header>
        
        <div class="chapter-content">
            <!-- Content sections -->
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
    <script>
        // Chart implementations
    </script>
</body>
</html>
```

## 🔧 Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/echarts-mastery-guide.git
   cd echarts-mastery-guide
   ```

2. **Install dependencies** (if any):
   ```bash
   npm install
   ```

3. **Start local server**:
   ```bash
   npm start
   ```

4. **Open in browser**: `http://localhost:8000`

## 📋 Pull Request Checklist

Before submitting a pull request, ensure:

- [ ] All charts work correctly
- [ ] Code follows existing style
- [ ] Documentation is updated
- [ ] Navigation links are updated
- [ ] Mobile responsiveness is maintained
- [ ] No console errors
- [ ] All interactive features work

## 🏷️ Commit Message Guidelines

Use clear, descriptive commit messages:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

Example: `feat: add scatter plot chapter with interactive examples`

## 📞 Questions or Need Help?

If you have questions or need help:

1. Check existing issues and discussions
2. Create a new issue with your question
3. Join our community discussions

## 🙏 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- Contributor hall of fame

Thank you for contributing to making this ECharts learning guide better for everyone!
