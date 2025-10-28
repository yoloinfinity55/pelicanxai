Title: Standard Operating Procedure for Pelicanxai
Date: 2025-10-28 19:30
Category: SOP

This document outlines the standard operating procedure (SOP) for the Pelicanxai project.

## Content Creation

1.  **Create a new post:** Create a new Markdown file in the `content/` directory.
2.  **Add metadata:** Add the following metadata to the top of the file:
    ```
    Title: Your Blog Post Title
    Date: YYYY-MM-DD HH:MM
    Category: Your Category
    ```
3.  **Write content:** Write the blog post in Markdown format.
4.  **Preview locally:** Preview the changes locally by running `make devserver`.
5.  **Commit and push:** Once you are satisfied with the changes, commit the file and push it to the `main` branch.

## Dependency Management

The project's dependencies are managed using `pip` and the `requirements.txt` file. To add a new dependency, add it to the `requirements.txt` file and then run `pip install -r requirements.txt`.

## Theme Customization

The blog's theme can be customized by modifying the files in the `theme/` directory. The theme uses the Jinja2 templating engine. After making changes to the theme, you need to rebuild the site to see the changes.

## Deployment

The site is deployed automatically to GitHub Pages whenever changes are pushed to the `main` branch. You can monitor the deployment process in the "Actions" tab of the GitHub repository.
