# Frame — React Image Gallery

A responsive image gallery built with React and Vite. It demonstrates reusable components, props, array-of-objects data, the `map()` method, React Fragments, and responsive CSS Grid.

## Features

- Reusable `ImageCard` child component
- Image data stored in a separate array of objects
- Dynamic rendering with `images.map()`
- Props passed from `App` to `ImageCard`
- Responsive three/two/one-column gallery layout
- Lazy-loaded images and accessible image descriptions
- Clean editorial-style UI

## Tech stack

- React 18
- Vite
- CSS
- Lucide React icons

## Run locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` folder.

## Add a new image

Open `src/data/images.js` and add another object to the `images` array:

```js
{
  id: 7,
  url: "https://your-image-url.jpg",
  title: "New Image",
  category: "TRAVEL",
  description: "A short description of this image."
}
```

Use a unique `id`. The new card appears automatically; you do not need to change the JSX.

## Project structure

```text
react-image-gallery/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── components/
    │   └── ImageCard.jsx
    └── data/
        └── images.js
```

## GitHub

Create a new empty repository on GitHub, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build responsive React image gallery"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/react-image-gallery.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Image credits

Demo photographs are loaded from Unsplash image URLs. An internet connection is required for these remote images to display.
