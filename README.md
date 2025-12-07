# 🌱 Thrift Better - Gen-Z Thrifting Platform

A beautifully designed, multi-page website for a sustainable secondhand fashion platform. Built for Gen-Z shoppers who want to thrift smarter, dress better, and contribute to a more sustainable future.

## 📋 Project Overview

**Thrift Better** is a curated thrifting platform with six main pages, comprehensive styling, interactive features, and a CMS-based content system. The site educates users about thrifting, showcases curated pieces, and collects enquiries—with absolutely **zero upcycling, DIY, repairs, or e-commerce functionality**.

## 📁 Project Structure

```
Demo/
├── index.html                    # Home page
├── pages/
│   ├── learn.html               # Learn About Thrifting
│   ├── curations.html           # Curations & Lookbook
│   ├── consign.html             # Sell & Consign
│   ├── about.html               # About Us
│   └── contact.html             # Contact & Get In Touch
├── css/
│   └── styles.css               # Complete styling system
├── js/
│   └── main.js                  # All JavaScript interactions
├── data/
│   ├── curations.json           # CMS data for featured items
│   └── faqs.json                # CMS data for FAQs
└── assets/
    ├── images/                  # Image placeholders
    └── icons/                   # Icon assets
```

## 🎨 Design System

### Color Palette
- **Primary Background**: Off-white (#faf8f5)
- **Accent Moss**: #556b42 (primary action color)
- **Accent Terracotta**: #c85a3a (secondary action color)
- **Text Primary**: #1a1a1a (charcoal)
- **Text Secondary**: #666666 (gray)
- **Light Accent**: #e8dcd3 (cream)

### Typography
- **Headings**: Playfair Display (serif) - modern, editorial feel
- **Body**: Inter (sans-serif) - clean, readable, contemporary

### Layout
- Magazine-style sections with large whitespace
- Mobile-first responsive design
- Smooth animations and transitions
- Sticky navigation with mobile menu toggle

## 📄 Pages & Sections

### 1. **Home Page** (`index.html`)
- Hero section: "Thrift Better. Dress Smarter."
- Why Thrifting? (3 benefit cards)
- Featured Pieces grid (6 items from CMS)
- FAQ accordion section (5-6 questions from CMS)
- Newsletter signup bar
- Full footer with links and social icons

### 2. **Learn About Thrifting** (`pages/learn.html`)
- What Is Thrifting? (explanation)
- Why Gen-Z Loves Thrifting (4 reasons)
- Benefits of Thrifting (environmental, financial, personal style, access)
- How Thrifting Works (5-step guide)
- Myths vs Facts (6 cards busting misconceptions)
- Newsletter signup
- FAQ section

### 3. **Curations & Lookbook** (`pages/curations.html`)
- Grid of curated thrift items (populated from CMS)
- Each item card includes:
  - Photo (click opens lightbox)
  - Item name
  - 1-2 line micro-story
  - Condition label (Excellent, Like New, etc.)
  - Style note (Timeless, Romantic, Edgy, etc.)
  - "Enquire About This Piece" button
- Image lightbox with close functionality
- Enquiry modal form

### 4. **Sell & Consign** (`pages/consign.html`)
- Header: "Sell Your Clothes With Us"
- 3-step process visualization:
  1. Submit photos
  2. Item evaluation
  3. Pickup or drop-off
- What We Accept / Don't Accept (2-column lists)
- Full consignment form with fields:
  - Name, Email, Phone
  - Item count
  - Photo upload (drag & drop enabled)
  - Condition dropdown (Like New → Fair)
  - Description textarea
  - Shipping method (Ship or Drop-off)
- Newsletter signup

### 5. **About Us** (`pages/about.html`)
- Brand story section (how it started)
- Mission & Values (6 value cards)
- Team section (3 team members with roles)
- Impact numbers (50K+ items, 25K+ community members, 2.5M gallons water saved)
- CTA for partnerships/media enquiries
- Newsletter signup

### 6. **Contact** (`pages/contact.html`)
- Contact form (Name, Email, Phone, Type, Message)
- Contact info sidebar (Email, Phone, 3 locations)
- Social media icons
- Location info placeholder (map area)
- Quick links section (Browse, Sell, Learn)
- FAQ section (5 accordion items)
- Newsletter signup

## ⚙️ JavaScript Features

### Navigation
- Mobile menu toggle with smooth animations
- Auto-close menu on link click
- Sticky header with smooth scroll

### Forms
- Newsletter subscription handling
- Consignment form submission
- Contact form submission
- Enquiry form (for curations)
- Form validation and notifications
- File upload with drag-and-drop support

### Accordion
- Single-open accordion (closing others when new item opens)
- Smooth height animations
- Icon rotation on toggle

### Lightbox
- Click image to open in modal
- Close button, click outside to close
- Keyboard support (ESC to close)
- Body scroll lock when open

### Interactions
- Notification system (success/error messages)
- Lazy loading with fade-in on scroll
- Smooth scroll anchor links
- File upload preview with file names

### CMS Integration
- Load `curations.json` and populate item grid
- Load `faqs.json` and populate accordion
- Automatic re-initialization of interactions after population

## 📊 CMS Collections

### `data/curations.json`
```json
{
  "items": [
    {
      "id": 1,
      "name": "Item Name",
      "image": "image-url",
      "story": "1-2 line micro-story",
      "condition": "Excellent|Like New|Very Good|Good",
      "style": "Style Tag",
      "price": "$XX"
    }
  ]
}
```

### `data/faqs.json`
```json
{
  "items": [
    {
      "question": "FAQ Question",
      "answer": "FAQ Answer text"
    }
  ]
}
```

## 🎯 Design Features

### Typography Scale
- H1: 3.75rem (hero titles)
- H2: 3rem (section titles)
- H3: 1.875rem (card titles)
- H4: 1.5rem (subsection titles)
- Body: 1rem (base text)

### Spacing System
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem
- 2XL: 4rem
- 3XL: 6rem

### Components
- **Buttons**: Primary (moss green), Secondary (outlined), Tertiary (light)
- **Cards**: White background, subtle border, hover effects with lift
- **Forms**: Clean inputs, file upload areas with drag-drop
- **Newsletter**: Gradient background, prominent CTA
- **Footer**: Dark background, multi-column layout, social icons

### Animations
- Fade-in on scroll (lazy loading)
- Smooth transitions (0.3s default)
- Button hover effects (lift up)
- Accordion smooth height change
- Modal zoom-in effect
- Lightbox fade-in

## 🚀 How to Use

### Running the Site
1. Open `index.html` in a web browser
2. All pages are linked via the navigation menu
3. No build process or server required (pure HTML/CSS/JS)

### Adding New Curations
1. Edit `data/curations.json`
2. Add new item objects with: `id`, `name`, `image`, `story`, `condition`, `style`, `price`
3. Curations page will automatically populate from CMS

### Adding New FAQs
1. Edit `data/faqs.json`
2. Add new objects with: `question` and `answer`
3. Home and Learn pages will automatically populate

### Customizing Styling
- Edit `css/styles.css`
- All variables are at the top in `:root` selector
- Color palette, spacing, typography all easily adjustable
- Responsive breakpoints at 768px and 480px

### Modifying JavaScript
- Edit `js/main.js`
- Functions are grouped by feature (Navigation, Accordion, Forms, etc.)
- Event listeners attach automatically on DOM load

## 📱 Responsive Design

The site is **mobile-first** and fully responsive:
- **Desktop**: Full multi-column layouts, hover effects active
- **Tablet (≤768px)**: Grid adapts to 2 columns, mobile menu appears
- **Mobile (≤480px)**: Single column layouts, optimized spacing, full-width buttons

## 🔍 SEO & Meta Tags

Each page includes:
- Unique page title
- Meta description
- Keywords
- Theme color
- Viewport settings
- Open Graph ready (structure in place)

## 📝 Tone & Copy

**Gen-Z Voice**:
- Short, punchy sentences
- Casual, conversational language
- No corporate jargon
- Aesthetic, simple, relatable
- Focuses on sustainability and originality

## ✨ Features Implemented

✅ All 6 pages built exactly as specified  
✅ Hero sections on every page  
✅ Magazine-style editorial layouts  
✅ Responsive mobile-first design  
✅ CMS-driven curations and FAQs  
✅ Image lightbox with modal  
✅ Working enquiry forms  
✅ Newsletter signup  
✅ Accordion FAQ sections  
✅ File upload with drag-drop  
✅ Form validation & notifications  
✅ Smooth animations & transitions  
✅ Social media integration  
✅ Sticky navigation  
✅ Mobile menu toggle  
✅ Lazy loading on scroll  
✅ Color palette matched to brief  
✅ Typography system (serif + sans)  
✅ Consistent design language  
✅ No upcycling/DIY/repairs content  
✅ No e-commerce functionality  

## 🎯 What's NOT Included

❌ Upcycling or DIY content  
❌ Repair guides  
❌ E-commerce functionality  
❌ Shopping cart or checkout  
❌ Payment processing  
❌ Inventory management  
❌ User accounts or authentication  

## 💡 Customization Notes

- **Images**: Replace placeholder SVGs with real product images in `assets/images/`
- **Team photos**: Add actual team member photos
- **Location details**: Update address and hours for your actual locations
- **Contact info**: Update email, phone, and social media links
- **Business details**: Customize team bios and company story
- **Colors**: Adjust color variables in CSS for brand variations

## 📦 Deployment

The site is static (HTML/CSS/JS) and can be deployed to:
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Traditional web hosting
- S3 + CloudFront
- Any static file hosting service

No backend, server, or build process required.

---

**Built with ❤️ for conscious shoppers everywhere.**

Made with attention to detail, sustainability, and Gen-Z aesthetics. Let's thrift better together.
