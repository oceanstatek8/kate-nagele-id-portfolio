# ID Portfolio

Static instructional design portfolio site ready for GitHub Pages.

## Local editing

- Update homepage content in `index.html`
- Update project page behavior in `project.html`
- Add project metadata in `projects.json`
- Drop Storyline exports into `projects/<project-id>/`

## Working in Ubuntu

Your project folder is:

- Windows: `C:\Users\katen\Projects\kate-nagele-id-portfolio`
- Ubuntu / WSL: `/mnt/c/Users/katen/Projects/kate-nagele-id-portfolio`

## Start the local site

Open your Ubuntu shortcut (the penguin icon), then run:

```bash
cd /mnt/c/Users/katen/Projects/kate-nagele-id-portfolio
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

Important:

- Leave that tab open while you work
- This is your server tab
- Stop the server with `Ctrl + C`

## When to use a new tab

If the server is already running, open a new Ubuntu tab for everything else.

Use the new tab for:

- checking files
- running git commands
- using `cp` to commit and push
- opening VS Code
- navigating folders

In the new tab, run:

```bash
cd /mnt/c/Users/katen/Projects/kate-nagele-id-portfolio
```

## Simple workflow

1. Open Ubuntu shortcut
2. In tab 1, start the server
3. Open `http://localhost:8000` in Chrome
4. Open a second Ubuntu tab
5. In tab 2, go to the project folder and run other commands there

## Useful commands

Check where you are:

```bash
pwd
```

List files:

```bash
ls
```

Open the project in VS Code:

```bash
code .
```

Save changes:

- `cp` means commit and push

## Publishing

This repo includes a GitHub Actions workflow in `.github/workflows/pages.yml`.

After you push to the `main` branch and enable GitHub Pages to use GitHub Actions, the site will deploy automatically.
