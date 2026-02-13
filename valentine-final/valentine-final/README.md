# Valentine Invite - Complete Project 💖

## 📋 Complete Flow

1. **index.html** - Create Valentine link with QR code
2. **Scan QR / Open Link** → Opens valentine.html
3. **"Will you be my Valentine?"** - Question with YES/NO buttons + blue dino GIF
4. **Click YES** → "YAAAY 💖 I LOVE YOU!" celebration appears
5. **"Would you like to read something special?"** - Prompt below celebration with YES/NO buttons
6. **Click YES** → Envelope appears
7. **Click Envelope** → Opens to reveal your love letter inside

## 📁 Project Structure

```
valentine-invite/
├── index.html          # Valentine creator page
├── valentine.html      # Valentine experience page
├── css/
│   ├── index.css      # Main styles
│   └── valentine.css  # Valentine page styles with envelope animation
├── js/
│   ├── index.js       # Creator page logic
│   └── valentine.js   # Valentine page logic
└── media/
    ├── 200w.gif       # Blue dino GIF (YOU NEED TO ADD THIS)
    └── love_icon.ico  # Favicon (YOU NEED TO ADD THIS)
```

## 🚀 Setup Instructions

### 1. Add Media Files

You need to add these files to the `media/` folder:

- **200w.gif** - The blue dinosaur GIF for the question page
- **love_icon.ico** - The heart favicon for the browser tab

### 2. Update Base URL

Open `js/index.js` and change line 1:

```javascript
const base = "https://grvsnh.github.io/valentine-invite/";
```

Change to:
- **For local testing**: `const base = "./";`
- **For GitHub Pages**: `const base = "https://YOUR-USERNAME.github.io/YOUR-REPO/";`
- **For other hosting**: `const base = "https://your-domain.com/";`

### 3. Customize Letter Message

Open `js/valentine.js` and edit lines 11-15:

```javascript
document.getElementById("letterMessage").innerHTML = `
	YOUR MESSAGE HERE<br><br>
	Use <br> for line breaks!<br><br>
	Add emojis too! 💕
`;
```

## 💻 Run Locally with VS Code

1. **Install Live Server Extension** in VS Code
2. **Right-click** on `index.html`
3. **Select** "Open with Live Server"
4. **Test the flow**:
   - Create a Valentine link
   - Copy the link and open in new tab
   - Test: Question → YES → Celebration → Read Letter → Envelope opens

## 🌐 Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files (maintaining folder structure)
3. Go to **Settings** → **Pages**
4. Select **main branch** as source
5. Save and wait for deployment
6. Update the `base` URL in `js/index.js`

## 🎨 Customization Options

### Change Colors

Edit `css/index.css` - Look for `:root` variables:

```css
:root {
	--primary: #ff5fa2;  /* Main pink */
	--accent: #ff8fcf;   /* Light pink */
	--bg: linear-gradient(135deg, #ffe6f0, #ffd1e8);
}
```

### Change Envelope Colors

Edit `css/valentine.css`:

```css
.envelope {
	background: #d8c39b;  /* Envelope body */
}
.flap {
	background: #e5d4ad;  /* Envelope flap */
}
.heart {
	background: hotpink;  /* Heart seal */
}
```

### Change Celebration GIF

Edit `valentine.html` line 31:

```html
<img src="YOUR_GIF_URL_HERE" width="260">
```

## ✨ Features

✅ QR Code generation for easy sharing
✅ Personalized with names from URL parameters
✅ Dark/Light theme toggle with persistence
✅ Animated falling hearts background
✅ Growing YES button when NO is clicked
✅ Celebration screen after YES
✅ Letter reading prompt
✅ Beautiful envelope opening animation
✅ Hidden letter that reveals on click
✅ Fully responsive design
✅ Haptic feedback (vibration on mobile)
✅ Smooth transitions between sections

## 🐛 Troubleshooting

**Letter visible before opening?**
- Make sure you're using the latest `valentine.css` with the fixed envelope styles

**QR code not working?**
- Update the `base` URL in `js/index.js`
- Make sure the URL is correct for your hosting

**GIF not showing?**
- Add `200w.gif` to the `media/` folder
- Or update the path in `valentine.html`

**"Would you like to read something special?" not showing?**
- Make sure you're using the latest `valentine.html` and `valentine.js`
- Check browser console for errors (F12)

## 📱 Mobile Friendly

- Fully responsive on all devices
- Touch-friendly buttons
- Vibration feedback on interactions
- Optimized for mobile viewing

## 💝 Perfect For

- Valentine's Day proposals
- Anniversary surprises
- Special messages
- Long-distance relationships
- Just because! 💕

---

Made with 💖 for spreading love!
