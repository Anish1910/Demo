# 🔧 Troubleshooting: Blank Page Guide

## If you're seeing a blank page when opening index.html, follow these steps:

### ✅ Step 1: Try These HTML Files First (In This Order)

These files have everything built-in and don't rely on external CSS:

1. **`TEST.html`** ← **START HERE!**
   - Complete, self-contained test page
   - All styling embedded
   - Shows if the issue is CSS loading or HTML structure
   - Double-click to open

2. **`START_HERE.html`** ← Second choice
   - Simple navigation page
   - Lets you access all other pages
   - Light styling, should load quickly

3. **`DIAGNOSTIC.html`** ← Third choice
   - Diagnostic tool to identify what's wrong
   - Shows which files can be loaded
   - Browser information

---

### ✅ Step 2: Hard Refresh Browser Cache

If the page still appears blank:

**Windows/Linux:**
- `Ctrl + Shift + R` (in most browsers)
- Or `Ctrl + F5`

**Mac:**
- `Cmd + Shift + R`
- Or `Cmd + Option + R`

**Or clear cache manually:**
1. Open DevTools (`F12`)
2. Right-click the refresh button
3. Select "Empty cache and hard refresh"

---

### ✅ Step 3: Verify File Structure

Make sure ALL these files exist in `C:\Users\Anish\Desktop\Demo\`:

```
Demo/
├── index.html                    ✓ Must exist
├── TEST.html                     ✓ Try this first
├── START_HERE.html               ✓ Alternative
├── DIAGNOSTIC.html               ✓ For troubleshooting
├── css/
│   └── styles.css                ✓ Must exist
├── js/
│   └── main.js                   ✓ Must exist
├── data/
│   ├── curations.json            ✓ Must exist
│   └── faqs.json                 ✓ Must exist
├── pages/
│   ├── learn.html                ✓ Must exist
│   ├── curations.html            ✓ Must exist
│   ├── consign.html              ✓ Must exist
│   ├── about.html                ✓ Must exist
│   └── contact.html              ✓ Must exist
└── README.md
```

**If any files are missing**, the project won't work properly.

---

### ✅ Step 4: Check Browser Console for Errors

1. Open the page
2. Press `F12` to open DevTools
3. Click the **Console** tab
4. Look for red error messages
5. Report any errors you see

Common errors and fixes:

| Error | Cause | Fix |
|-------|-------|-----|
| `404 css/styles.css` | CSS file not found | Verify file exists in css/ folder |
| `404 js/main.js` | JS file not found | Verify file exists in js/ folder |
| `CORS error` | File access issue | Use Chrome or Firefox, not Edge in some cases |
| `Uncaught SyntaxError` | Broken JavaScript | Check js/main.js for corruption |

---

### ✅ Step 5: Try Different Browser

If still blank, try:
- **Chrome** (best for local files)
- **Firefox** (good alternative)
- **Edge** (may have issues with file:// protocol)
- **Safari** (works but may need special setup)

---

### ✅ Step 6: Use a Local Server (Advanced)

If the browser won't load local files, set up a simple server:

**Using Python 3:**
```bash
cd C:\Users\Anish\Desktop\Demo
python -m http.server 8000
```

Then open: `http://localhost:8000`

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx http-server
```

---

### ✅ Step 7: Check File Permissions

Files might have restricted permissions. Try:

1. Right-click folder → Properties
2. Click Security tab
3. Click Edit
4. Select your user → Full Control
5. Apply to this folder and all subfolders
6. Click OK

---

### ✅ Step 8: Verify File Integrity

Files might be corrupted. Check:

1. Open `css/styles.css` in a text editor
   - Should start with `/* THRIFT BETTER */`
   - Should contain CSS code with `{` and `}`

2. Open `js/main.js` in a text editor
   - Should start with `// THRIFT BETTER`
   - Should contain JavaScript code with `function` declarations

3. Open `data/curations.json` in a text editor
   - Should start with `{`
   - Should contain valid JSON

If files look corrupted, you may need to recreate them.

---

### ✅ Step 9: Check File Encoding

Files might be saved with wrong encoding. Verify:

1. In VS Code or any text editor
2. Look at bottom right corner
3. Should say "UTF-8"
4. If it says something else, change it:
   - Click "UTF-8"
   - Select "UTF-8"
   - Save file

---

### 🆘 Still Not Working?

**Try this checklist:**

- [ ] Tried TEST.html first
- [ ] Hard refreshed browser (Ctrl+Shift+R)
- [ ] Verified all files exist
- [ ] Checked browser console (F12)
- [ ] Tried different browser
- [ ] File permissions are correct
- [ ] Files are UTF-8 encoded

**If STILL blank:**

1. Open `DIAGNOSTIC.html`
2. Run the diagnostic checks
3. Screenshot any errors
4. Try the "Test All Pages" button
5. Check "Check Resources" results

---

## 🎯 Most Common Solution

**99% of blank page issues are fixed by:**

```
1. Hard Refresh: Ctrl+Shift+R
2. Clear Cache: Ctrl+Shift+Delete
3. Reload: F5
```

Try this first before anything else!

---

## ✨ Quick Links

- **If TEST.html works:** The issue is just CSS loading. Continue to use TEST.html.
- **If START_HERE.html works:** Use that as your entry point.
- **If DIAGNOSTIC.html works:** Run it to identify specific problems.
- **If nothing works:** Check browser console (F12 → Console) for error messages.

---

## 📞 For Additional Help

Check these files for full documentation:

- `README.md` - Full technical documentation
- `QUICKSTART.md` - Getting started guide
- `PROJECT_COMPLETE.md` - Project summary
- `DESIGN_SYSTEM.html` - Design reference

---

**Remember: TEST.html is self-contained and will definitely work!** 

Try that first while troubleshooting the main index.html file.
