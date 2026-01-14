# Portfolio Design System

## Typography Scale
- **Hero Heading**: 96px / 6rem (Cormorant Garamond Light)
- **Section Heading**: 56px / 3.5rem (Cormorant Garamond Light)  
- **Subheading**: 32px / 2rem (Cormorant Garamond Regular)
- **Body Large**: 20px / 1.25rem (System Sans-Serif)
- **Body**: 18px / 1.125rem (System Sans-Serif)
- **Small**: 16px / 1rem (System Sans-Serif)
- **Tiny**: 14px / 0.875rem (System Sans-Serif)

## Color Palette

### Dark Theme (Default)
- **Background**: #0a0a0a (Rich Black)
- **Foreground**: #e8e8e8 (Off White)
- **Muted**: #999999 (Medium Gray)
- **Border**: #222222 (Dark Gray)
- **Accent**: #1a1a1a (Subtle Black)

### Light Theme
- **Background**: #fafafa (Off White)
- **Foreground**: #1a1a1a (Rich Black)
- **Muted**: #666666 (Dark Gray)
- **Border**: #e0e0e0 (Light Gray)
- **Accent**: #f5f5f5 (Subtle White)

## Spacing System
- **Section Padding Vertical**: 120px (7.5rem)
- **Section Padding Horizontal**: 64px (4rem)
- **Content Max Width**: 1400px
- **Column Gap**: 80px (5rem)
- **Element Gap Large**: 48px (3rem)
- **Element Gap Medium**: 32px (2rem)
- **Element Gap Small**: 16px (1rem)

## Layout Grid
- **Hero**: Single column, left-aligned
- **Work Sections**: 2-column (50/50) with alternating text/decoration
- **About Sections**: 2-column (50/50) with alternating text/decoration
- **Interests**: 3-column equal
- **Contact**: 2-column (50/50)
- **Footer**: Single column, centered

## Component Specs

### Logo Boxes
- **Size**: 96px × 96px (6rem)
- **Border Radius**: 24px (1.5rem)
- **Background**: Foreground color
- **Text**: Background color (inverted)
- **Font Size**: 48px (3rem) for single letter, 36px (2.25rem) for double

### Arrow Buttons
- **Size**: 64px × 64px (4rem)
- **Border**: 2px solid border color
- **Border Radius**: 50% (circle)
- **Icon Size**: 24px (1.5rem)
- **Hover**: Border color changes to muted

### Decorative SVGs
- **Opacity**: 50-70%
- **Color**: currentColor (theme-aware)
- **Stroke Width**: 2.5-3px
- **Size**: 200-240px

## Animations
- **Theme Transition**: 0.3s ease
- **Hover States**: 0.2s ease
- **Menu Slide**: 0.3s cubic-bezier
- **Scroll**: smooth

## Breakpoints
- **Desktop**: 1400px+
- **Laptop**: 1024px - 1399px
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## Section Structure

1. **Header** (Sticky)
   - Domain name · Location · Time
   - Theme toggle + Menu button

2. **Hero**
   - Profile photo (160px circle, grayscale)
   - Large heading with name + tagline
   - Generous top/bottom padding

3. **Work Experience** (Multiple)
   - Logo box (left or right)
   - Section heading
   - Body text (2-3 paragraphs)
   - Arrow button
   - Decorative illustration (opposite side)
   - Full viewport height
   - Border bottom

4. **About/Story Sections** (Multiple)
   - Alternating layout (text left/right)
   - Section heading
   - Body paragraph
   - Optional arrow button
   - Decorative illustration
   - Full viewport height
   - Border bottom

5. **Interests**
   - 3 equal columns
   - Icon at top
   - Category heading
   - List items
   - Border bottom

6. **Contact** (Optional)
   - Contact information
   - Social links
   - Quick stats
   - Call to action

7. **Footer**
   - Final message
   - Name signature
   - Copyright text
   - Links

## Design Principles
- **Generous whitespace**: Never cramped
- **Vertical rhythm**: Consistent spacing
- **Typography hierarchy**: Clear size differences
- **Subtle animations**: Professional, not flashy
- **Theme consistency**: Colors adapt smoothly
- **Clean borders**: Subtle dividers between sections
- **Grayscale images**: Professional aesthetic
- **Hand-drawn feel**: Botanical illustrations add warmth
