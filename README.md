# Website Project Client Questionnaire 📋

A professional, interactive client questionnaire form for website projects with dynamic conditional logic and Airtable integration.

## 🌐 Live Demo

**Production:** https://client-questionnaire-9p23o0kkc-elsabilallis-projects.vercel.app

## ✨ Features

- **10 Comprehensive Sections** covering all aspects of website projects
- **Dynamic Conditional Logic** - Questions appear/disappear based on user responses
- **Professional Design** with gradient header and Font Awesome icons
- **Responsive Layout** - Works perfectly on mobile, tablet, and desktop
- **Airtable Integration** - Automatic submission storage
- **Smooth Animations** - Professional transitions for form interactions
- **Print-Friendly** - Can be printed as PDF
- **Client-Ready** - Professional and easy to understand

## 📊 Questionnaire Sections

1. 🏢 **Basic Business Information** - Name, domain, existing website
2. 🎯 **Goals & Purpose** - Website objectives and visitor actions
3. 👥 **Target Audience** - Demographics and ideal customers
4. 🎨 **Design & Style Preferences** - Colors, fonts, design style
5. 📄 **Pages & Structure** - Required pages and site structure
6. 📝 **Content** - Content creation and branding materials
7. ⚙️ **Functionality** - Features like e-commerce, booking, forms
8. 💻 **Technical Details** - SEO optimization requirements
9. 📅 **Timeline** - Project launch date
10. 🔧 **Maintenance & Updates** - Ongoing support needs

## 🚀 Setup & Deployment

### Prerequisites
- Node.js installed
- Git installed
- Airtable account (free)
- Vercel account (free)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/elsabilalli/client-questionnaire.git
cd client-questionnaire
```

2. **Open locally**
```bash
open index.html
```

3. **Set up Airtable** (see [AIRTABLE_SETUP.md](AIRTABLE_SETUP.md))

4. **Deploy to Vercel**
```bash
npx vercel login
npx vercel --prod
```

## 🔧 Configuration

### Airtable Integration

Edit `index.html` (around line 743):

```javascript
const AIRTABLE_API_KEY = 'YOUR_AIRTABLE_API_KEY';
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID';
const AIRTABLE_TABLE_NAME = 'Submissions';
```

See [AIRTABLE_SETUP.md](AIRTABLE_SETUP.md) for detailed setup instructions.

## 📱 Conditional Logic

The form includes smart conditional logic:

- **"Do you have an existing website?"** → If Yes, URL field appears
- **"Do you have brand assets?"** → If Yes, details field appears

More conditional questions can be easily added.

## 🎨 Customization

### Change Colors

Edit the gradient sections in `index.html`:

```css
.section-1 { border-left-color: #5B4AE2; }
.section-2 { border-left-color: #00BFA6; }
/* etc... */
```

### Add Questions

1. Add HTML for the question
2. Add conditional logic if needed (see existing examples)
3. Update Airtable fields

## 📦 Files Included

- `index.html` - Main questionnaire form
- `client-questionnaire.pdf` - PDF version
- `AIRTABLE_SETUP.md` - Setup guide
- `README.md` - This file

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **Vanilla JavaScript** - Conditional logic and form handling
- **Font Awesome** - Professional icons
- **Airtable API** - Data storage
- **Vercel** - Hosting and deployment

## 📈 Future Enhancements

- [ ] Email notifications on submission
- [ ] Multi-step form with progress bar
- [ ] File upload for logos/images
- [ ] Form validation messages
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 👤 Author

**Elsabila Lli**

- GitHub: [@elsabilalli](https://github.com/elsabilalli)
- Project: [client-questionnaire](https://github.com/elsabilalli/client-questionnaire)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ for better client onboarding**

