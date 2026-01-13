# Portfolio Website - Customization Guide

This is a pixel-perfect clone of danielautry.com that you can easily customize with your own content and images.

## How to Update Images and Content

### 1. Configuration File Location
All customizable content is located in: `/app/frontend/src/config/siteConfig.js`

### 2. Updating Your Profile Image

Open `/app/frontend/src/config/siteConfig.js` and find the `profileImage` property:

```javascript
profileImage: "https://danielautry.com/static/media/profile.3aaf58cfebb540d740ee.jpeg",
```

**Option A: Use an External Image URL**
Replace the URL with your own image URL:
```javascript
profileImage: "https://your-image-hosting.com/your-profile.jpg",
```

**Option B: Use a Local Image**
1. Place your image in `/app/frontend/public/images/` folder
2. Update the config:
```javascript
profileImage: "/images/your-profile.jpg",
```

### 3. Updating Personal Information

In the same config file, update:
```javascript
name: "Your Name",
location: "Your City, State",
tagline: "your custom tagline goes here",
```

### 4. Updating Social Links

Update your social media links:
```javascript
linkedIn: "https://www.linkedin.com/in/your-profile/",
medium: "https://medium.com/@your-handle",
// ... etc
```

### 5. Updating Work Experience

Modify the `workExperiences` array to add your own work history:
```javascript
workExperiences: [
  {
    id: "company1",
    company: "Your Company",
    logo: "YC", // 1-2 letter abbreviation
    title: "Your Job Title and Description",
    descriptions: [
      "Achievement 1",
      "Achievement 2"
    ],
    link: "#yourcompany"
  }
]
```

### 6. Updating About Sections

Modify the `aboutSections` array with your own story:
```javascript
aboutSections: [
  {
    title: "Your section title",
    description: "Your description",
    alignment: "right" // optional: "left" or "right"
  }
]
```

### 7. Updating Interests

Update your current interests:
```javascript
interests: {
  playing: ["Game 1", "Game 2"],
  listening: ["Artist 1", "Artist 2", "Podcast"],
  reading: ["Book 1", "Book 2"]
}
```

## Tips for Images

### Best Practices:
- **Profile Image**: 400x400px or larger, square format
- **Format**: JPG or PNG
- **File Size**: Keep under 500KB for fast loading
- **Style**: The original uses black & white (grayscale filter is applied automatically)

### Where to Host Images:
1. **Public folder** (recommended for local images):
   - Place in `/app/frontend/public/images/`
   - Reference as `/images/filename.jpg`

2. **External CDN**:
   - Upload to services like Imgur, Cloudinary, or AWS S3
   - Use the full URL

## After Making Changes

The website has hot-reload enabled, so changes will appear automatically. If they don't:
```bash
sudo supervisorctl restart frontend
```

## File Structure

```
/app/frontend/
├── src/
│   ├── config/
│   │   └── siteConfig.js          ← Edit this file to customize content
│   ├── components/
│   │   ├── Hero.jsx                ← Profile image and main heading
│   │   ├── WorkSection.jsx         ← Work experience
│   │   ├── AboutSection.jsx        ← About sections
│   │   ├── InterestsSection.jsx    ← Interests
│   │   └── Footer.jsx              ← Footer
│   └── pages/
│       └── Home.jsx                ← Main page layout
└── public/
    └── images/                     ← Place your images here
```

## Need Help?

If you encounter any issues or need to make more advanced customizations, feel free to ask!
