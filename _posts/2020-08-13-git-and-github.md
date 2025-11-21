---
title: How to Use Git and GitHub for Version Control
date: 2020-11-29 14:45:00 +0800
categories: [Linux]
tags: [git, github, version control]
description: How to using Git and GitHub for version control in your projects.
---

Git is a version control system that helps you manage your code and collaborate with others.

## Installing Git

Before using Git, you need to install it. You can install it on Linux, macOS, or Windows using the following commands:

```bash
# On Ubuntu
sudo apt-get install git
```

## Setting Up Git

Once Git is installed, you need to configure it with your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## Creating a Repository

To create a new Git repository, navigate to your project folder and run:

```bash
git init
```

## Git Commands

### Staging Changes

To stage changes for commit, use:

```bash
git add .
```

### Committing Changes

Once the changes are staged, commit them:

```bash
git commit -m "Initial commit"
```

### Pushing to GitHub

To push your changes to GitHub, follow these steps:

1. Create a new repository on GitHub.
2. Link your local repository to GitHub:

```bash
git remote add origin https://github.com/username/repository.git
```

3. Push your changes:

```bash
git push -u origin master
```

## Conclusion

Git and GitHub are essential tools for modern software development.

