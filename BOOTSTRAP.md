# Bootstrap starter documentation

Overview
- This workspace includes a minimal Bootstrap integration so you can start coding your design immediately.

Files
- [index.html](index.html): Main HTML scaffold. Edit this to change the page structure and add your content. Use Bootstrap classes for layout and components.
- [src/css/custom.css](src/css/custom.css): Your custom stylesheet. Put all design-specific styles here and override Bootstrap variables or classes as needed.
- [src/js/main.js](src/js/main.js): Custom JavaScript. Add interactive behavior here (event listeners, tiny scripts).
- [assets/images/](assets/images/) — **Store all images here.** Reference them in HTML as `<img src="assets/images/filename.jpg" alt="description">`

Files you should NOT edit
- `node_modules/bootstrap/...` — These are third-party library files installed by npm. Editing them will be lost on reinstall and will make upgrades difficult.

Quick workflow
1. Open `index.html` in the browser (right-click → Open with Live Server, or run `npx serve .`).
2. Edit the markup in `index.html` where content placeholders are located.
3. Put styles in `src/css/custom.css`. Avoid changing Bootstrap files — use overrides and custom classes.
4. Put scripts in `src/js/main.js`.

Bootstrap usage tips
- Layout: use the grid classes like `container`, `row`, `col`, and responsive variants `col-md-6`, etc.
- Spacing: use utility classes such as `m-3`, `p-4`, `mt-2`, `mb-4`.
- Components: use built-in components (cards, navbar, buttons) by adding their classes. For example, a button: `<button class="btn btn-primary">Buy</button>`
- Customization: override Bootstrap variables via CSS custom properties or by writing more specific selectors in `src/css/custom.css`.
- Images: Store all images in `assets/images/`. Always use relative paths like `assets/images/photo.jpg`. Always add an `alt` attribute for accessibility.

Image examples
```html
<!-- Simple image -->
<img src="assets/images/hero.jpg" alt="Hero banner" class="img-fluid">

<!-- Image in a card -->
<div class="card">
  <img src="assets/images/product.jpg" class="card-img-top" alt="Product">
  <div class="card-body">...</div>
</div>

<!-- Background image (in CSS) -->
```
```css
.hero-section {
  background-image: url('../../assets/images/bg.jpg');
  background-size: cover;
  height: 400px;
}
```

Local dev server (optional)
- Recommended: install the VS Code Live Server extension and open `index.html`.
- Or use `npx serve .` (install `serve` if needed):

```powershell
npx serve .
```

Notes
- The HTML currently links to Bootstrap from `node_modules` (`node_modules/bootstrap/dist/...`). This is fine for local development. If you later use a bundler, you can import Bootstrap from JS/CSS in your build pipeline.
- If you want me to wire a build step (Webpack/Vite) or add SASS variable support, tell me and I'll scaffold it.
