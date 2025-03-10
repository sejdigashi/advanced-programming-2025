# Development Environment Setup Guide
## Advanced Programming Course

This guide will help you set up all the necessary tools and accounts needed for the course.

## 1. GitHub Account Setup

1. **Create a GitHub account** (if you don't already have one)
   - Go to [GitHub.com](https://github.com/)
   - Click "Sign up" and follow the prompts
   - Choose a professional username that you won't mind sharing with future employers

2. **Install Git**
   - **Windows**: Download and install from [git-scm.com](https://git-scm.com/download/win)
   - **macOS**: 
     - Option 1: Install using Homebrew: `brew install git`
     - Option 2: Download from [git-scm.com](https://git-scm.com/download/mac)
   - **Linux**: Use your distribution's package manager
     - Ubuntu/Debian: `sudo apt install git`
     - Fedora: `sudo dnf install git`

3. **Basic Git Configuration**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```

4. **Generate and Add SSH Key to GitHub** (Optional but recommended)
   - Follow the [official GitHub guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

## 2. Install Visual Studio Code

1. **Download and Install VS Code**
   - Go to [code.visualstudio.com](https://code.visualstudio.com/)
   - Download the appropriate version for your operating system
   - Follow the installation instructions

2. **Install Essential Extensions**
   - Open VS Code
   - Go to Extensions view (Ctrl+Shift+X or Cmd+Shift+X on Mac)
   - Install the following extensions:
     - **GitHub Pull Requests and Issues** by GitHub
     - **Docker** by Microsoft
     - **ESLint** or other linters depending on language preference
     - **Python** (if you'll be using Python)
     - **GitHub Copilot** (if available to you - we'll discuss access options in class)

3. **Configure VS Code Settings**
   - Open Settings (Ctrl+, or Cmd+, on Mac)
   - Enable auto-save (recommended)
   - Configure formatter on save (recommended)

## 3. Docker Installation

1. **Install Docker Desktop**
   - **Windows/Mac**: Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - **Linux**: Follow the [official installation guide](https://docs.docker.com/engine/install/)

2. **Verify Installation**
   - Open a terminal/command prompt
   - Run: `docker --version`
   - Run: `docker run hello-world` to verify that Docker can pull and run images

3. **Docker Hub Account** (Optional)
   - Create a [Docker Hub](https://hub.docker.com/) account
   - This will be useful for pushing and sharing Docker images

## 4. Additional Tools & Accounts

1. **Postman** (for API Testing)
   - Download from [postman.com](https://www.postman.com/downloads/)
   - Create a free account when prompted

2. **Node.js and npm** (for JavaScript projects)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

3. **Python 3** (if needed for your projects)
   - Download from [python.org](https://www.python.org/downloads/)
   - Or use package managers (brew, apt, etc.)
   - Verify installation: `python --version` or `python3 --version`

## 5. Course GitHub Repository

1. **Join the Course Repository**
   - You'll receive an invitation to join our course GitHub Organization
   - Accept the invitation via email or through GitHub
   - Bookmark the repository URL for easy access

2. **Fork the Repository** (if instructed)
   - We'll go through this process together in class
   - This creates your own copy of the repository for your coursework

3. **Clone the Repository**
   ```bash
   git clone https://github.com/org-name/repo-name.git
   cd repo-name
   ```

## Troubleshooting

If you encounter any issues during setup:
1. Check our course forum for solutions
2. Google the error message (seriously, this works!)
3. Post your issue to our class discussion board
4. Come to office hours for help

## Next Steps

Once you have everything installed:
1. Open the course repository in VS Code
2. Explore the project structure
3. Read the README.md file for project-specific instructions
4. Complete the first assignment (details in repository)

We'll verify everyone's setup in the first lab session and troubleshoot any issues together.