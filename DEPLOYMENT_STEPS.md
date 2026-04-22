# 🚀 Deployment Steps - GitHub Pages

Follow these steps exactly to deploy your portfolio to GitHub Pages.

## ⚠️ BEFORE YOU START

- [ ] You have a GitHub account
- [ ] You have customized your portfolio (name, projects, etc.)
- [ ] You have tested it locally with `npm start`
- [ ] Git is installed on your computer

---

## 📋 Step-by-Step Deployment

### Step 1: Update Your GitHub Username

**File:** `package.json`

Find this line:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

Replace `YOUR-USERNAME` with your actual GitHub username. For example:
```json
"homepage": "https://john123.github.io/portfolio"
```

**Save the file!**

---

### Step 2: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Log in to your account
3. Click the **"+"** button in the top-right corner
4. Click **"New repository"**
5. Fill in the details:
   - **Repository name:** `portfolio`
   - **Description:** "My personal portfolio website" (optional)
   - **Public** ← Make sure this is selected!
   - **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

GitHub will show you a page with instructions - **keep this page open!**

---

### Step 3: Open Terminal in Your Project

**Windows:**
- Open the `portfolio` folder
- Hold Shift + Right-click in the folder
- Select "Open PowerShell window here" or "Open Command Prompt here"

**Mac/Linux:**
- Open Terminal
- Navigate to your portfolio folder:
  ```bash
  cd path/to/portfolio
  ```

---

### Step 4: Initialize Git and Push to GitHub

Copy and paste these commands **one at a time** (press Enter after each):

```bash
git init
```
(This initializes git in your project)

```bash
git add .
```
(This stages all your files)

```bash
git commit -m "Initial commit"
```
(This commits your files)

```bash
git branch -M main
```
(This renames the branch to main)

```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
```
**⚠️ IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

Example:
```bash
git remote add origin https://github.com/john123/portfolio.git
```

```bash
git push -u origin main
```
(This pushes your code to GitHub)

**If prompted for credentials:**
- Enter your GitHub username
- For password, use a **Personal Access Token** (not your account password)
- [How to create a token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

### Step 5: Verify Code is on GitHub

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/portfolio`
2. You should see all your files there
3. Check that `package.json`, `src` folder, etc. are all present

✅ **If you can see your code on GitHub, continue to Step 6!**

---

### Step 6: Deploy to GitHub Pages

In the same terminal, run:

```bash
npm run deploy
```

This will:
1. Build your project (create optimized production files)
2. Create a new branch called `gh-pages`
3. Deploy your site to GitHub Pages

**Wait for it to complete.** You'll see messages like:
```
Creating an optimized production build...
Published
```

---

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down the left sidebar and click **"Pages"**
4. Under **"Source"**, you should see:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. If not already selected, select `gh-pages` branch
6. Click **"Save"**

**You'll see a message:** "Your site is live at https://YOUR-USERNAME.github.io/portfolio"

---

### Step 8: Wait and Verify

1. **Wait 2-5 minutes** (GitHub needs time to build and publish)
2. Visit your site: `https://YOUR-USERNAME.github.io/portfolio`
3. Your portfolio should be live! 🎉

---

## 🔄 Making Updates After Deployment

Whenever you make changes to your portfolio:

1. **Save your changes**

2. **Add, commit, and push:**
   ```bash
   git add .
   git commit -m "Updated projects"
   git push origin main
   ```

3. **Deploy the updates:**
   ```bash
   npm run deploy
   ```

4. **Wait 1-2 minutes and refresh your live site**

---

## 🆘 Troubleshooting

### Problem: "git: command not found"
**Solution:** Install Git from [git-scm.com](https://git-scm.com/)

### Problem: Blank page after deployment
**Solution:** 
- Check that you're using `HashRouter` (already done in this project)
- Verify `homepage` in `package.json` matches your GitHub username
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Problem: Site not updating
**Solution:**
- Wait 5 minutes (GitHub Pages can be slow)
- Clear browser cache
- Check if `npm run deploy` ran without errors

### Problem: "Permission denied" when pushing
**Solution:**
- Make sure you're using the correct GitHub username
- Use a Personal Access Token instead of password
- Check your repository is public

### Problem: 404 error on live site
**Solution:**
- Check repository Settings > Pages
- Make sure `gh-pages` branch is selected
- Wait a few more minutes

### Problem: Changes not showing
**Solution:**
- Did you run `npm run deploy` after making changes?
- Hard refresh your browser (Ctrl+Shift+R)
- Check if the build was successful in terminal

---

## 📝 Submission Checklist

Before submitting your assignment:

- [ ] GitHub repository is **public**
- [ ] Repository link: `https://github.com/YOUR-USERNAME/portfolio`
- [ ] Live site link: `https://YOUR-USERNAME.github.io/portfolio`
- [ ] All navigation links work
- [ ] All project links work
- [ ] Personal information is updated
- [ ] Profile picture is added
- [ ] Tested on different devices/browsers

---

## 🎯 What to Submit

1. **GitHub Repository Link**
   ```
   https://github.com/YOUR-USERNAME/portfolio
   ```

2. **Live Website Link**
   ```
   https://YOUR-USERNAME.github.io/portfolio
   ```

**Deadline:** 22/04/2026 (Wednesday) before 11:59 PM

---

## 💡 Pro Tips

1. **Test locally before deploying** - Always run `npm start` and check everything works
2. **Commit often** - Make small commits with meaningful messages
3. **Keep it updated** - Your portfolio will be useful for internships and jobs
4. **Make it yours** - Customize the design and content to reflect your personality

---

**Good luck! 🚀**

Need help? Check the README.md or CUSTOMIZATION_GUIDE.md files!
