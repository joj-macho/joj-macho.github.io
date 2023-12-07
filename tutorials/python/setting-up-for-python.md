---
layout: post
title: "Setting Up Your Python Programming Environment"
sub-title: "A Step-by-Step Guide to Configuring Your Coding Workspace"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/setting-up
---

When starting with programming, one of the first things you need to do is set up your programming environment. This involves installing the necessary tools and software to write and run your code. In this section, I'll walk you through how to install Python and set it up on both Linux and Windows operating systems. I'll also provide tips on running Python code in a terminal session.

A robust Python development environment typically includes the language interpreter, the pip package manager, a virtual environment, a Python-oriented code editor, and static analyzers to identify code errors and issues.

## Installing Python

---

Before you can do anything, you have to install Python itself, along with a couple of essential tools. As outlined in the [Getting Started with Python Programming tutorial](/workspace/python/getting-started), Python is an interpreted language. Hence, the installation involves obtaining its interpreter and the pip package manager for additional tools and libraries. The steps may vary by platform, but the major platforms are covered here.

### The Easiest Way to Run Python

For a quick start, leverage online platforms like <a href="https://replit.com/" target="_blank">Replit</a>, providing an interactive Python environment without local installations.

For beginners, Thonny IDE is recommended. It's bundled with the latest Python version, offering a beginner-friendly interface with code highlighting, autocomplete, and simplicity.

<div style="margin-bottom: 1rem;">
  <img src="../../assets/images/python-images/thonny-download.png" alt="Download Thonny" width="600" height="400">
</div>

- Download <a href="https://thonny.org/" target="_blank">Thonny IDE</a>.
- Run the installer and create a new Python file (e.g., `hello.py`).
- Write your code, save it, and run by clicking _Run_ or pressing _F5_.

If you prefer an alternative, install Python separately by visiting the official <a href="https://www.python.org/" target="_blank">Python website</a>.

<div style="margin-bottom: 1rem;">
  <img src="../../assets/images/python-images/python-site.png" alt="Python Installation" width="600" height="400">
</div>

For detailed installation instructions, refer to the <a href="https://docs.python.org/3/using/" target="_blank">official Python documentation</a>.

### Installing on Windows

If you're on Windows, Python isn't pre-installed. You can check by opening the command prompt and typing`py --version`. If you see `Python 3.x.x` it means it's installed. If not here's how you can install Python on your computer:

1. Visit the official Python website, go to downloads, and download the appropriate version for your OS.
2. During installation, ensure to check "Install the launcher for all users" and "Add Python to PATH."
3. Run the installer and follow the instructions to install Python.

<div style="align: center; margin-bottom: 1rem;">
  <img src="../../assets/images/python-images/python-download.png" alt="Download Python" width="600" height="400">
  <img src="../../assets/images/python-images/install-python.png" alt="Install Python" width="600" height="400">
</div>

Check Python version with `python --version` in Command Prompt. If you encounter issues, revisit the installation steps or consult the <a href="https://docs.python.org/3/" target="_blank">official documentation</a>.

After installation, create a new Python file in any text editor or IDE, write your code, and run it. Python is available on Windows, macOS, and Linux, with minor installation differences.

### Installing on macOS

On macOS, use MacPorts or Homebrew for installation.

With MacPorts:

{% highlight markdown %}
sudo port install python38 py39-pip
sudo port select --set python python39
sudo port select --set pip py39-pip
{% endhighlight %}

With Homebrew:

{% highlight markdown %}
brew install python
{% endhighlight %}

### Installing on Linux

If you're a Linux user, you're in luck as Python comes pre-installed on most Linux systems. To check which version of Python is currently installed on your computer, open a terminal window, type `python3`, and verify the version.

{% highlight markdown %}
 $ python3 --version
 Python 3.10.6
{% endhighlight %}

The output indicates that Python 3.10.6 is currently the default version of Python installed on this computer. Use your package manager for installation if needed.

- Ubuntu, Debian, or related:

{% highlight markdown %}
sudo apt install python3 python3-pip python3-venv
{% endhighlight %}

- Fedora, RHEL, or CentOS:

{% highlight markdown %}
sudo dnf python3 python3-pip
{% endhighlight %}

- Arch Linux:

{% highlight markdown %}
sudo pacman -S python python-pip
{% endhighlight %}

For other distributions, you'll need to search for the Python 3 and pip packages yourself.

### The Python Interpreter

Now that Python is installed, the interpreter allows running Python scripts and projects. Python is an interpreted scripting language, and it comes with a Python Shell for executing commands and viewing results.

#### Interactive Session

Start an interactive session in the command line:

{% highlight markdown %}
 $ python3
 Python 3.10.6 (main, Jan 03 2023, 11:10:38) [GCC 11.3.0] on linux
 Type "help", "copyright", "credits" or "license" for more information.
 >>> 
{% endhighlight %}

Exit the session using `exit()`.

This session is useful for testing code snippets but not extensively used in this tutorial.

{% highlight markdown %}
 $ python3
 Python 3.10.6 (main, Jan 03 2023, 11:10:38) [GCC 11.3.0] on linux
 Type "help", "copyright", "credits" or "license" for more information.
 >>> 1+1
 2
 >>> exit()
 $ 
{% endhighlight %}

You should be in the habit of specifying `python2` or `python3`, instead of using the python command, since the latter may refer to the wrong version (which comes preinstalled on many systems, even today). You can always check the exact version of Python invoked by any of those three commands with the `--version` flag (for example, `python3 --version`).

## Packages and Virtual Environments

---

In Python, a package is a collection of code, akin to a library in many other programming languages. While Python's "batteries included" philosophy facilitates basic functionality with a simple import statement, more advanced tasks, like creating a sophisticated user interface, often require installing additional packages. This process is simplified through the pip package manager tool.

Managing multiple third-party packages demands finesse due to dependencies, conflicts, and version-specific requirements. Virtual environments offer a solution by creating isolated sandboxes for each project. These sandboxes, labeled with names like `env` or `venv`, allow you to install only the necessary Python packages for a specific project, preventing clashes with other projects or the system.

### Creating and Activating a Virtual Environment

To create a virtual environment named `venv` in the current working directory, run:

{% highlight markdown %}
 $ python3 -m venv venv
{% endhighlight %}

The first `venv` is a command that creates a virtual environment, and the second `venv` is the desired path to the virtual environment. You can customize the path and name, such as creating a virtual environment called `myenv` in the `/opt` directory:

{% highlight markdown %}
 $ python3 -m venv /opt/myenv
{% endhighlight %}

To activate the virtual environment:

- On UNIX-like systems:

{% highlight markdown %}
 $ source venv/bin/activate
{% endhighlight %}

- On Windows:

{% highlight markdown %}
 > venv\Scripts\activate.bat
{% endhighlight %}

Once activated, your command prompt should display `(venv)`, indicating the use of the virtual environment. Inside it, you can install packages specific to the project without affecting the global system.

To deactivate the virtual environment:

- On UNIX-like systems:

{% highlight markdown %}
 $(venv) deactivate
{% endhighlight %}

- On Windows:

{% highlight markdown %}
 >(venv) venv\Scripts\deactivate.bat
{% endhighlight %}

### Managing Dependencies with pip

Use `pip` to handle Python package installation, upgrades, and management within your virtual environment. For example, to install numpy:

{% highlight markdown %}
 $ python3 -m pip install numpy
{% endhighlight %}

To upgrade an installed package, run:

{% highlight markdown %}
 $ python3 -m pip install --upgrade numpy
{% endhighlight %}

To uninstall a package:

{% highlight markdown %}
 $ pip uninstall package
{% endhighlight %}

Replace `package` with the specific package name. Managing dependencies in this manner ensures a clean and organized development environment tailored to your project's requirements.

## Configuring Your Development Environment

---

Before diving into my recommendations, let's first clarify the difference between a text editor and an IDE. A text editor is a basic application that allows you to write and edit plain text files, including code. It's like a digital notebook for your code. On the other hand, an IDE is a more comprehensive application that includes additional features like syntax highlighting, code completion, and debugging tools. Think of an IDE as a Swiss Army Knife for programming.

Selecting the right tools significantly impacts your productivity and workflow. While technically not mandatory, installing an editor or integrated development environment (IDE) for Python can greatly enhance your coding experience. Python comes with its IDE called <a href="https://docs.python.org/3/library/idle.html" target="_blank">IDLE</a>, a basic yet functional IDE with an editor and an interactive shell. For those not ready to explore other editors, starting with IDLE is a solid choice. However, consider exploring other options as many editors and IDEs offer advanced features that IDLE lacks.

### Choosing an Editor or IDE for Python

Numerous options exist for Python editing. The Python website lists various editors and IDEs:

- For enthusiasts of Emacs and Vim, both editors offer excellent Python support, but configuring them can be complex. Find tutorials for both online.

- If you're familiar with JetBrains IDEs, PyCharm is a robust choice. It demands more resources but provides powerful features. Explore the <a href="https://jetbrains.com/pycharm/" target="_blank">Community Edition</a> before opting for the paid version.

- <a href="https://sublimetext.com/" target="_blank">Sublime Text</a> is a fast, customizable code editor. The Anaconda plug-in transforms Sublime Text into a Python IDE, offering autocompletion, navigation, static analysis, autoformatting, and more. Download Sublime Text <a href="https://sublimetext.com/" target="_blank">here</a> and the Anaconda plug-in <a href="https://damnwidget.github.io/anaconda/" target="_blank">here</a>.

- For scientific programming or data analysis, consider <a href="https://spyder-ide.org/" target="_blank">Spyder</a>, a free and open-source Python IDE. It integrates with common Python libraries and offers features like a code profiler and variable explorer.

At the end of the day, the editor or IDE you choose should depend on your personal preference and workflow. However, if you're just starting with Python, I recommend a beginner-friendly option that's easy to use and offers a range of features to support your growth as a programmer.

#### My Top Pick: Visual Studio Code

After testing various editors and IDEs, I recommend Visual Studio Code (VS Code) as the best tool for Python programming. Here's why:

<div style="margin-bottom: 1rem;">
  <img src="../../assets/images/python-images/vscode.png" alt="VS Code Site" width="600" height="400">
</div>

- VS Code is a powerful, professional-quality text editor that's free and open-source.
- It supports most programming languages, including Python.
- Highly customizable with a range of extensions and themes.
- Offers features like debugging tools, code completion, and version control integration.
- Large and active developer community with regular updates and support.

If you're sold on using VS Code, the next step is to install it.

#### Installing VS Code

Download and install VS Code from the <a href="https://code.visualstudio.com/" target="_blank">official website</a>. Installation is straightforward; click "Download for Windows". Follow prompts for installation. Ubuntu Linux users can install VS Code directly from the Ubuntu Software Center.

Once installed, launch the app and commence coding. If you prefer a video guide, follow this <a href="https://www.youtube.com/watch?v=bn7Cx4z-vSo" target="_blank">Visual Studio Code for Python Video tutorial</a>.

Explore customization options in your chosen editor or IDE to tailor the environment to your needs.

### Setting Up Code Linters and Formatters

In a programmer's toolkit, a reliable static analyzer is a valuable asset. These tools scrutinize your source code for potential issues, errors, and style inconsistencies. If you haven't used one before, now is the time to incorporate it into your workflow. Among the widely used static analyzers for Python are linters and formatters, each serving a specific purpose.

#### Linters: Pylint and PyFlakes

Linters, such as _Pylint_ and _PyFlakes_, examine your code for common mistakes, errors, and style issues. Pylint, a versatile static analyzer, allows extensive customization according to your preferences. Install Pylint using pip within a virtual environment and analyze a file with:

{% highlight markdown %}
 $ pylint python_file.py
{% endhighlight %}

PyFlakes, part of the Flake8 tool, is a faster alternative focused on avoiding false positives. It works alongside pycodestyle, a style checker, and mccabe, which assesses code complexity. To analyze a file using Flake8:

{% highlight markdown %}
 $ flake8 python_file.py
{% endhighlight %}

#### Formatters: autopep8 and Black

Formatters like _autopep8_ and _Black_ automatically adjust your Python code to comply with PEP 8 standards, addressing spacing, indentation, and style preferences.

Autopep8, leveraging pycodestyle, fixes whitespace issues by default. For more extensive changes, use the `--aggressive` argument. To apply changes to a file in place:

{% highlight markdown %}
 $ autopep8 --in-place --aggressive --aggressive python_file.py
{% endhighlight %}

Refer to the <a href="https://pypi.org/project/autopep8/" target="_blank">documentation</a> for additional options.

Black is a straightforward formatter assuming full PEP 8 compliance. Install it with pip (Python 3.6 or later) and format a file with:

{% highlight markdown %}
 $ black python_file.py
{% endhighlight %}

Explore additional options using:

{% highlight markdown %}
 $ black --help
{% endhighlight %}

Integrating these tools into your workflow ensures code consistency and quality, contributing to an efficient and error-free development process.

## Running a Python Program

---

Once you've set up your Python environment, including the installation of Python, a text editor or IDE, virtual environment, linters, and formatters, the next step is to create and run a Python program within a project folder.

Select a location on your computer to store your project. Create a new folder with a descriptive name for your project. This folder will house all related files, including Python scripts, data files, and configurations.

### Writing Your First Python Program

With your programming environment and project folder set up, create a new file within the folder. Open your text editor or IDE, start a new file, and save it as `hello.py` (the `.py` extension denotes a Python file). Write a simple "Hello World" program:

{% highlight python %}
print("Hello Python!")
{% endhighlight %}

### Running Your Python Program

To run your program in your text editor or IDE, you can simply select _Run > Run Without Debugging_ or press _CTRL-F5_. Your program's output will be displayed in the console.

In your text editor or IDE, select _Run > Run Without Debugging_ or press _CTRL-F5_. View the program's output in the console.

Sometimes, you might prefer to run your Python program from a terminal. This can be useful when you want to execute an existing program without making further edits. Follow these steps to run your Python program from a terminal:

1. Open a terminal window.
2. Use the `cd` command to navigate to your project directory.
3. Enter `python3 hello.py` in the terminal and press Enter.
4. Observe the program's output in the terminal.
              
It's that simple!

Your Python program is up and running! The provided `hello.py` program prints "Hello World," but feel free to modify it with other phrases.

Running a Python program from the terminal allows quick execution without further edits, offering flexibility in various scenarios. Experiment with different words or phrases to see your computer display diverse outputs. If you're curious about how "Hello World" looks in other programming languages, check out Wikipedia's collection <a href="http://en.wikipedia.org/wiki/Hello_world_program_examples" target="_blank">here</a>. Explore the diversity of programming languages through the simplicity of the "Hello World" program.

## Troubleshooting Common Programming Errors

---

If you encounter issues running your Python program, don't worry—common errors have solutions:

- **Syntax errors**: Check for correct Python syntax, including quotes, parentheses, and semicolons. Review your code to ensure proper syntax usage.
- **Naming errors**: Verify that variable and function names in your code match those in your terminal or IDE. Consistent naming resolves these errors.
- **Indentation errors**: Ensure correct code indentation since Python relies on it. Correct any indentation errors for smooth execution.
- **Module not found errors**: For code using libraries/modules, confirm correct installation. Resolve "Module not found" errors by checking and installing necessary libraries/modules.
- **File not found errors**: Confirm you're running the program from the correct directory. Address "File not found" errors by ensuring the file exists in that directory.

By following these steps, you can troubleshoot and resolve common programming errors efficiently.

## Online Resources, Tutorials, and Courses

---

For beginners looking to dive deeper into Python programming, there are several online resources, tutorials, and courses available. Here are a few recommendations:

- <a href="https://www.python.org/" target="_blank">Python.org</a>: The official website of Python offers extensive documentation, tutorials, and guides for learners of all levels. It's a great starting point to understand the language and its features.
- <a href="https://www.codecademy.com/learn/learn-python" target="_blank">Codecademy</a>: Codecademy offers interactive Python courses that cater to beginners. Their hands-on approach allows you to practice writing code right in your browser.
- <a href="https://www.coursera.org/" target="_blank">Coursera</a>: Coursera hosts a variety of Python courses from universities and institutions worldwide. "Python for Everybody" by the University of Michigan and "Programming for Everybody" by the University of Washington are highly recommended.
- <a href="https://www.edx.org/" target="_blank">edX</a>: edX provides Python programming courses from renowned universities, including "Introduction to Python for Data Science" by Microsoft and "Introduction to Computer Science and Programming Using Python" by MIT.

## Summary

---

Congratulations on configuring your development environment! You've installed Python, set up your text editor or IDE, and created a virtual environment. Troubleshooting common errors and exploring valuable learning resources are essential steps in your Python journey.

In the upcoming section, [Python Definitions and Concepts](/workspace/python/definitions-and-concepts), delve into fundamental Python structures, covering variables, data types, and syntax. This knowledge will serve as a solid foundation for more advanced Python concepts.