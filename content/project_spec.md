Title: Project Specification for Pelicanxai
Date: 2025-10-28 19:00
Category: Project

This document outlines the project specification for the Pelicanxai blog.

## Project Overview

Pelicanxai is a static blog generated using the Pelican static site generator. The blog is owned and authored by Infinity55. The production site is hosted on GitHub Pages.

## Technical Details

*   **Static Site Generator:** [Pelican](https://getpelican.com/)
*   **Content Format:** Markdown
*   **Programming Language:** Python
*   **Dependencies:**
    *   `pelican`: The static site generator.
    *   `ghp-import`: A tool to help deploy to GitHub Pages.
    *   `Markdown`: For processing Markdown content.
*   **Theme:** The blog uses the default Pelican theme. The theme can be customized by modifying the templates in the `theme` directory.

## Project Structure

The project is organized as follows:

*   `content/`: Contains the blog posts in Markdown format.
*   `output/`: The generated static website. This directory is not tracked by git.
*   `pelicanconf.py`: The main Pelican configuration file for development.
*   `publishconf.py`: The Pelican configuration file for publishing.
*   `Makefile`: Contains commands for building, serving, and deploying the site.
*   `tasks.py`: Contains invoke tasks for managing the site.
*   `.github/workflows/deploy.yml`: GitHub Actions workflow for automated deployment.

## Local Development

To set up the local development environment, follow these steps:

1.  Clone the repository: `git clone https://github.com/yoloinfinity55/pelicanxai.git`
2.  Create a virtual environment: `python -m venv .venv`
3.  Activate the virtual environment: `source .venv/bin/activate`
4.  Install the dependencies: `pip install -r requirements.txt`
5.  Start the development server: `make devserver`

The site will be available at `http://localhost:8000`. The server will automatically regenerate the site whenever you make changes to the content.

## Build and Deployment

The blog is built and deployed using a combination of `make`, `invoke`, and GitHub Actions.

*   **Local Development:** The site can be built and served locally using the `make devserver` command.
*   **Deployment:** The site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the deployment process. It uses the `make github` command, which in turn uses `ghp-import` to push the generated site to the `gh-pages` branch.

## Content Strategy

The blog will feature articles on various topics, starting with a review of a mechanical keyboard. New content will be added to the `content/` directory as Markdown files. Each file should have a title, date, and category.

## Standard Operating Procedure (SOP)

This section outlines the standard operating procedure for managing the Pelicanxai project.

### Content Creation

1.  Create a new Markdown file in the `content/` directory.
2.  Add the following metadata to the top of the file:
    ```
    Title: Your Blog Post Title
    Date: YYYY-MM-DD HH:MM
    Category: Your Category
    ```
3.  Write the blog post in Markdown format.
4.  Preview the changes locally by running `make devserver`.
5.  Once you are satisfied with the changes, commit the file and push it to the `main` branch.

### Dependency Management

The project's dependencies are managed using `pip` and the `requirements.txt` file. To add a new dependency, add it to the `requirements.txt` file and then run `pip install -r requirements.txt`.

### Theme Customization

The blog's theme can be customized by modifying the files in the `theme/` directory. The theme uses the Jinja2 templating engine. After making changes to the theme, you need to rebuild the site to see the changes.

### Deployment

The site is deployed automatically to GitHub Pages whenever changes are pushed to the `main` branch. You can monitor the deployment process in the "Actions" tab of the GitHub repository.
