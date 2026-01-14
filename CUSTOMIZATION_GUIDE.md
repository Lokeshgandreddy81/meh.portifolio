# Portfolio Website - Complete Customization Guide

This is a pixel-perfect clone of danielautry.com that you can easily customize with your own content and images.

## 🎯 Quick Start - How to Add Your Photos

### Step 1: Prepare Your Images

**Profile Photo Requirements:**
- Size: 400x400px or larger (square format)
- Format: JPG or PNG
- Style: The site automatically applies grayscale filter
- File size: Keep under 500KB for fast loading

### Step 2: Choose Upload Method

**Option A: Use External Image URL (Easiest)**
1. Upload your image to any image hosting service (Imgur, Cloudinary, etc.)
2. Copy the direct image URL
3. Open `/app/frontend/src/config/siteConfig.js`
4. Replace the `profileImage` URL with your URL:
```javascript
profileImage: "https://your-image-host.com/your-photo.jpg",
```

**Option B: Use Local Image (Recommended)**
1. Create folder: `mkdir -p /app/frontend/public/images`
2. Place your image: `cp your-photo.jpg /app/frontend/public/images/profile.jpg`
3. Open `/app/frontend/src/config/siteConfig.js`
4. Update to use local path:
```javascript
profileImage: "/images/profile.jpg",
```

### Step 3: Customize Your Content

Open `/app/frontend/src/config/siteConfig.js` and update:

```javascript
export const siteConfig = {
  // Personal Information
  name: "Your Full Name",              // Your complete name
  firstName: "YourFirstName",           // Used in headline
  location: "Your City, Country",       // Display location
  timezone: "ist",                      // "et", "ist", "pst", "cst", "gmt"
  tagline: "your custom professional tagline here",
  
  // Profile Image
  profileImage: "/images/your-photo.jpg",  // Your image path
  
  // Social Links
  linkedIn: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",    // Add if needed
  twitter: "https://twitter.com/your-handle",    // Add if needed
  
  // Work Experiences
  workExperiences: [
    {
      id: "company1",
      company: "Your Company Name",
      logo: "YC",                        // 1-3 letter abbreviation
      title: "Your role and key achievements",
      descriptions: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ],
      link: "#yourcompany"
    },
    // Add more work experiences...
  ],
  
  // About Sections (alternates left/right automatically)
  aboutSections: [
    {
      title: "Your section heading",
      description: "Your story or information here"
    },
    // Add more sections...
  ],
  
  // Interests
  interests: {
    playing: ["Activity 1", "Activity 2"],
    listening: ["Artist/Podcast 1", "Artist/Podcast 2"],
    reading: ["Book/Article 1", "Book/Article 2"]
  },
  
  // Footer
  footer: {
    text: "Your footer message",
    linkText: "visit my LinkedIn.",
    copyright: "Copyright © Your Name. All rights reserved."
  }
};
```

## 🎨 Design Features

### Layout Structure:
- **Two-column grid layout** - Text on one side, decorative space on other
- **Alternating positions** - Left/right text positioning for visual flow
- **Full-height sections** - Each section fills viewport height
- **Vertical dividers** - Clean separators between columns
- **Responsive design** - Adapts to all screen sizes

### Interactive Elements:
- **Live time display** - Updates every second with your timezone
- **Smooth menu** - Side-sliding navigation panel
- **Hover effects** - Subtle animations on links and buttons
- **Arrow buttons** - For navigation to detailed work pages

## 📁 File Structure

```
/app/frontend/
├── src/
│   ├── config/
│   │   └── siteConfig.js          ← EDIT THIS FILE for all content
│   ├── components/
│   │   ├── Header.jsx              ← Top bar with time
│   │   ├── Hero.jsx                ← Profile photo and headline
│   │   ├── WorkSection.jsx         ← Work experience cards
│   │   ├── AboutSection.jsx        ← About/story sections
│   │   ├── InterestsSection.jsx    ← Interests with icons
│   │   ├── Footer.jsx              ← Footer info
│   │   └── SideMenu.jsx            ← Navigation menu
│   └── pages/
│       └── Home.jsx                ← Main page layout
└── public/
    └── images/                     ← Put your images here
        └── profile.jpg             ← Your profile photo
```

## 🔧 Advanced Customization

### Adding Decorative Illustrations:
The original site has hand-drawn botanical illustrations. You can add your own:

1. Create or source your SVG illustrations
2. Place them in `/app/frontend/public/images/illustrations/`
3. Update the empty decorative divs in components:

```javascript
<div className="px-16 py-24 flex items-center justify-center">
  <img 
    src="/images/illustrations/your-illustration.svg" 
    alt="Decoration"
    className="w-64 h-64 opacity-50"
  />
</div>
```

### Changing Colors:
Edit `/app/frontend/src/index.css` or component files:
- Background: `#0a0a0a` (near black)
- Text: `#e8e8e8` (off white)
- Muted text: `#999` (gray)
- Borders: `#222` (dark gray)

### Adding New Sections:
In `/app/frontend/src/config/siteConfig.js`, add to `aboutSections`:
```javascript
{
  title: "Your new section title",
  description: "Your content here",
  hasLink: true,              // Optional: add arrow button
  link: "https://your-link",   // Optional: link URL
  alignment: "right"           // Optional: "left" or "right"
}
```

## 🚀 Deployment Tips

### Before Deploying:
1. ✅ Replace placeholder images with your photos
2. ✅ Update all text content in `siteConfig.js`
3. ✅ Test all links (LinkedIn, GitHub, etc.)
4. ✅ Verify timezone displays correctly
5. ✅ Check mobile responsiveness

### Image Optimization:
```bash
# Optimize images before uploading (optional)
convert your-photo.jpg -resize 400x400 -quality 85 profile.jpg
```

## 🆘 Troubleshooting

**Image not showing?**
- Check file path is correct
- Ensure image is in `/app/frontend/public/images/`
- Verify image format (JPG, PNG, WebP)
- Clear browser cache

**Time not updating?**
- Check timezone code in config: "ist", "et", "pst", etc.
- Verify timezone is lowercase

**Layout broken on mobile?**
- The grid automatically adjusts for mobile
- Test on actual device or browser dev tools

**Need to restart?**
```bash
sudo supervisorctl restart frontend
```

## 💡 Pro Tips

1. **Keep sections concise** - Each section should be scannable
2. **Use high-quality images** - Blurry photos hurt professionalism
3. **Update regularly** - Keep content fresh and relevant
4. **Test on multiple devices** - Desktop, tablet, mobile
5. **Use action-oriented language** - "Built", "Led", "Architected"

## 📧 Need Help?

If you encounter issues or need custom modifications, feel free to ask!

---

**Ready to customize?** Open `/app/frontend/src/config/siteConfig.js` and start personalizing!
