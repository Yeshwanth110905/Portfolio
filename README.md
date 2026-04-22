# Portfolio Website

A clean and minimal personal portfolio website built with React and React Router.

## Features

✅ **Home Page** with:
- Profile Picture
- About Me section
- Research Interests
- Personal Details (Name, Phone, Email)
- Skills showcase

✅ **Projects Page** with:
- Project cards
- GitHub repository links
- Live demo links
- Technology tags

✅ **Navigation** using NavLink
✅ **Responsive Design**
✅ **Ready for GitHub Pages Deployment**

## Prerequisites

- Node.js installed on your computer
- Git installed
- GitHub account

## How to Customize Your Portfolio

### 1. Update Personal Information

Edit `src/pages/Home.js`:
- Replace "Your Name" with your actual name
- Update the tagline/title
- Change the About Me text
- Update Research Interests
- Add your phone number and email addresses
- Modify the skills to match your skillset

### 2. Update Profile Picture

Replace the placeholder image in `src/pages/Home.js`:
```javascript
// Replace this line:
<img src="https://via.placeholder.com/200" alt="Profile" />

// With your actual image:
<img src="/path-to-your-image.jpg" alt="Profile" />
```

You can either:
- Put your image in the `public` folder and use: `src="/your-photo.jpg"`
- Use an external URL

### 3. Update Projects

Edit `src/pages/Projects.js` and modify the `projectsList` array:

```javascript
const projectsList = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description here",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/YOUR-USERNAME/your-repo",
    liveLink: "https://YOUR-USERNAME.github.io/your-project"
  },
  // Add more projects...
];
```

## Local Development

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `portfolio`
4. Make it **Public**
5. Click "Create Repository"

### Step 2: Update package.json

Replace `YOUR-USERNAME` with your GitHub username in `package.json`:

```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

### Step 3: Initialize Git and Push to GitHub

Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

**IMPORTANT**: Replace `YOUR-USERNAME` with your actual GitHub username!

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project
2. Create a `gh-pages` branch
3. Deploy your site

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" (in the left sidebar)
4. Under "Source", select branch: `gh-pages`
5. Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Making Updates After Deployment

Whenever you make changes:

```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## Troubleshooting

### Site not showing up?
- Make sure GitHub Pages is enabled in repository settings
- Check that the `gh-pages` branch exists
- Wait a few minutes after deployment

### Blank page after deployment?
- Verify you're using `HashRouter` (not `BrowserRouter`)
- Check that `homepage` in package.json is correct

### Changes not reflecting?
- Clear your browser cache
- Wait a few minutes (GitHub Pages can take time to update)
- Check if the build was successful

## Important Notes

- ✅ Repository must be **public**
- ✅ All links must work before submission
- ✅ Test locally before deploying
- ✅ Deadline: 22/04/2026 (Wednesday) before 11:59 PM

## Submission Checklist

- [ ] Updated all personal information
- [ ] Added profile picture
- [ ] Updated projects with real GitHub links
- [ ] Tested all navigation links
- [ ] Deployed to GitHub Pages
- [ ] Verified live site works
- [ ] Submitted GitHub repository link
- [ ] Submitted live website link

## Technologies Used

- React 19
- React Router DOM 7
- CSS3
- GitHub Pages

## License

This project is open source and available for educational purposes.
