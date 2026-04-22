# Portfolio Customization Guide

This guide will help you customize your portfolio with your personal information.

## 🎯 Quick Customization Checklist

### 1. Personal Information (Home Page)

**File to edit:** `src/pages/Home.js`

Find and replace these sections:

#### Your Name and Tagline
```javascript
// Line ~14-15
<h1>Your Name</h1>
<p className="tagline">Full Stack Developer | React Enthusiast</p>
```
Replace with your actual name and your professional title/role.

#### About Me
```javascript
// Line ~20-25
<p>
  I'm a passionate developer with a keen interest in building modern web applications...
</p>
```
Write 2-3 sentences about yourself, your background, and what you're passionate about.

#### Research Interests
```javascript
// Line ~31-36
<ul>
  <li>Web Development & User Experience</li>
  <li>Machine Learning & Artificial Intelligence</li>
  <li>Cloud Computing & DevOps</li>
  <li>Mobile Application Development</li>
</ul>
```
Replace with your actual areas of interest (keep 3-5 items).

#### Contact Details
```javascript
// Line ~44-59
<span className="detail-value">Your Full Name</span>
<span className="detail-value">+91 XXXXX XXXXX</span>
<span className="detail-value">your.email@gmail.com</span>
<span className="detail-value">your.email@college.edu</span>
```
Update with your real contact information.

#### Skills
```javascript
// Line ~65-90
```
Modify the skills lists to match your actual skills. Keep them organized in categories.

---

### 2. Profile Picture

**File to edit:** `src/pages/Home.js`

**Option A: Upload to project**
1. Put your photo in the `public` folder (name it `profile.jpg`)
2. Update line ~9:
```javascript

```

**Option B: Use external URL**
```javascript
<img src="https://your-image-url.com/photo.jpg" alt="Profile" />
```

**Photo requirements:**
- Square aspect ratio (e.g., 500×500px)
- Professional headshot
- Clear and high quality
- File size under 1MB

---

### 3. Projects

**File to edit:** `src/pages/Projects.js`

Find the `projectsList` array (around line 6) and update it:

```javascript
const projectsList = [
  {
    id: 1,
    title: "Project 1 Title",                    // Your project name
    description: "Description here...",           // 2-3 sentences about the project
    technologies: ["React", "Node.js", "MongoDB"], // Technologies you used
    githubLink: "https://github.com/USERNAME/repo", // Your actual GitHub repo
    liveLink: "https://USERNAME.github.io/project"  // Live demo link
  },
  {
    id: 2,
    title: "Project 2 Title",
    // ... same structure
  }
  // Add more projects as needed
];
```

**How to add more projects:**
1. Copy the entire project object `{ id: 1, ... }`
2. Paste it below the last project
3. Change the `id` to the next number (3, 4, 5, etc.)
4. Update all fields with your project details
5. Make sure to add a comma between projects

**Example with 3 projects:**
```javascript
const projectsList = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/john123/ecommerce-app",
    liveLink: "https://john123.github.io/ecommerce-app"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather app with 7-day forecast using OpenWeather API.",
    technologies: ["React", "API Integration", "CSS"],
    githubLink: "https://github.com/john123/weather-app",
    liveLink: "https://john123.github.io/weather-app"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Productivity app with drag-and-drop features and local storage.",
    technologies: ["React", "React DnD", "LocalStorage"],
    githubLink: "https://github.com/john123/task-manager",
    liveLink: "https://john123.github.io/task-manager"
  }
];
```

---

### 4. GitHub Username (IMPORTANT!)

**File to edit:** `package.json`

Update line 4:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Also update in:** `src/pages/Projects.js`
- Replace all instances of `YOUR-USERNAME` in the example project links

---

### 5. Styling Customization (Optional)

If you want to change colors or fonts:

#### Change Main Color Scheme

**File:** `src/components/Navigation.css`, `src/pages/Home.css`, `src/pages/Projects.css`

Find and replace `#2c3e50` (dark blue) with your preferred color:
- `#2c3e50` - Main dark color
- `#f8f9fa` - Background color
- `#e8e8e8` - Light gray accents

#### Change Fonts

**File:** `src/index.css`

Update line 7-9 to use different fonts (Google Fonts recommended).

---

## 📝 Step-by-Step First-Time Setup

### Before You Start
- [ ] Have your profile photo ready
- [ ] Know your GitHub repository URLs
- [ ] Prepare your project descriptions
- [ ] Have your contact information handy

### Customization Steps

1. **Update package.json**
   - Replace `YOUR-USERNAME` with your GitHub username

2. **Customize Home Page**
   - Open `src/pages/Home.js`
   - Update your name
   - Write your About Me
   - Add your contact details
   - Update your skills
   - Add your profile picture

3. **Customize Projects Page**
   - Open `src/pages/Projects.js`
   - Replace example projects with your real projects
   - Update GitHub links
   - Add live demo links

4. **Test Locally**
   ```bash
   npm start
   ```
   - Check all pages
   - Verify all links work
   - Make sure everything looks good

5. **Deploy**
   - Follow the deployment steps in README.md

---

## 🎨 Color Palette Reference

Current clean & minimal theme uses:

- **Primary Dark:** `#2c3e50` (headings, active states)
- **Text:** `#333` (main text), `#555` (secondary text)
- **Background:** `#f8f9fa` (page), `#fff` (cards)
- **Borders:** `#e8e8e8` (light gray)
- **Accents:** `#f0f0f0` (hover states)

---

## ❓ Common Questions

**Q: How do I add a fourth or fifth project?**
A: Copy one of the existing project objects in `projectsList`, paste it at the end, change the `id`, and update the details.

**Q: Can I change the order of sections on the Home page?**
A: Yes! Just cut and paste the entire `<section>` blocks in `src/pages/Home.js`.

**Q: What if I don't have 2 projects yet?**
A: You can create placeholder/practice projects, or showcase coursework and assignments.

**Q: Can I add more pages?**
A: Yes! Create a new file in `src/pages/`, add a route in `src/App.js`, and add a NavLink in `src/components/Navigation.js`.

---

## 🚀 Ready to Deploy?

Once you've customized everything:

1. Test locally with `npm start`
2. Check all links and information
3. Follow the deployment steps in README.md
4. Submit your GitHub repo link and live site link

---

**Need help?** Check the README.md for troubleshooting tips!
