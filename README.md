# Gemini IT Courses

A modern, responsive web application for an IT courses company built with React and TypeScript.

## Features

- 🎓 **Course Listings**: Browse and filter IT courses by category and level
- 📚 **Course Details**: Detailed course pages with full information
- 🎨 **Modern UI**: Beautiful, responsive design with gradient accents
- 🚀 **Fast Performance**: Built with Vite for optimal development and build times
- 📱 **Mobile Responsive**: Works seamlessly on all device sizes

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/      # Reusable components (Header, Footer, CourseCard)
├── pages/          # Page components (Home, Courses, CourseDetail, About, Contact)
├── data/           # Course data and utilities
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component with routing
└── main.tsx        # Entry point
```

## Pages

- **Home** (`/`) - Landing page with hero section, features, and featured courses
- **Courses** (`/courses`) - Browse all courses with filtering
- **Course Detail** (`/courses/:id`) - Individual course information
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

## Customization

### Adding New Courses

Edit `src/data/courses.ts` to add or modify courses. Each course should follow the `Course` interface defined in `src/types/course.ts`.

### Styling

The app uses CSS modules with a consistent design system. Colors and styles can be customized in the respective component CSS files.

## License

Private project - All rights reserved
# web
# web
