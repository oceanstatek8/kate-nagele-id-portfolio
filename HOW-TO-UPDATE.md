# How to Update This Portfolio

## Adding a New Project

### Step 1 - Export from Articulate Storyline
- Publish for Web (HTML5)
- This creates a folder, e.g. `My New Module/`

### Step 2 - Drop the folder into `projects/`
```text
projects/
  my-new-module/       <- paste your Storyline export here
    story.html         <- Storyline's main entry file
    story_content/
    ...
```

### Step 3 - Add an entry to `projects.json`
Open `projects.json` and add a new object to the array:

```json
{
  "id": "my-new-module",
  "title": "My New Module Title",
  "description": "A one or two sentence description of what this module covers.",
  "thumbnail": "projects/my-new-module/thumbnail.jpg",
  "folder": "projects/my-new-module",
  "tags": ["Tag1", "Tag2"],
  "duration": "20 min",
  "tools": "Articulate Storyline 360"
}
```

> **id** must match the folder name and be URL-safe (lowercase, hyphens, no spaces).

That's it. The project will appear on the homepage automatically.

---

## Thumbnail Images
- Add a `thumbnail.jpg` inside the project folder (16:9 ratio recommended, about 600x340px)
- If missing, a placeholder icon shows instead - no broken images

---

## Editing Your Info
- **Name / tagline / hero text:** edit `index.html` (search for "Jane Smith")
- **About section:** edit the `<section class="about-section">` in `index.html`
- **Skills:** edit the `skill-chip` spans in `index.html`
- **Email / LinkedIn / Resume:** edit the links in `#contact` in `index.html`

---

## Hosting

This is a plain static site. It works on:
- **GitHub Pages** (free) - push the folder and enable Pages in repo settings
- **Netlify** (free) - drag and drop the folder at app.netlify.com/drop
- **Any web host** - upload via FTP

> Storyline modules must be served from a real web server (`http` / `https`), not opened as a local file.
> To test locally: `npx serve .` or use VS Code's Live Server extension.
