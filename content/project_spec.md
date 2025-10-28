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

## Project Structure

The project is organized as follows:

*   `content/`: Contains the blog posts in Markdown format.
*   `output/`: The generated static website. This directory is not tracked by git.
*   `pelicanconf.py`: The main Pelican configuration file for development.
*   `publishconf.py`: The Pelican configuration file for publishing.
*   `Makefile`: Contains commands for building, serving, and deploying the site.
*   `tasks.py`: Contains invoke tasks for managing the site.
*   `.github/workflows/deploy.yml`: GitHub Actions workflow for automated deployment.

## Build and Deployment

The blog is built and deployed using a combination of `make`, `invoke`, and GitHub Actions.

*   **Local Development:** The site can be built and served locally using the `make devserver` command.
*   **Deployment:** The site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the deployment process. It uses the `make github` command, which in turn uses `ghp-import` to push the generated site to the `gh-pages` branch.

## Content Strategy

The blog will feature articles on various topics, starting with a review of a mechanical keyboard. New content will be added to the `content/` directory as Markdown files.
