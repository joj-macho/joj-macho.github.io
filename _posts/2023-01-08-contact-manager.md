---
layout: post
title: "Building a Simple Contact Management System in Python"
sub-title: "A Step-by-Step Guide"
tags: "python dict json"
category: "python"
---

In this tutorial, we will walk you through the development of a practical and straightforward Contact Management System using Python. This program provides a user-friendly interface to manage a dictionary of contacts efficiently. It encompasses essential features such as adding new contacts, updating information, searching, deleting, and saving/loading contacts to/from a file.

The Contact Management System serves as an illustrative example to demonstrate fundamental concepts of Python programming, including data manipulation, user input handling, file operations, and basic error handling. It showcases how to build a simple yet functional command-line application that can be a foundation for more complex projects.

Let's dive into the step-by-step guide to creating this Contact Management System.

### Prerequisites

Before we get started, make sure Python is installed on your machine. If you need assistance with installing and using Python, refer to the tutorial on [Setting Up Your Python Programming Environment](/workspace/python/setting-up), which also provides recommendations for user-friendly IDEs.

Or you can download Python from [python.org](https://www.python.org/downloads/).

### Setting up the Project

Let's start by setting up the project. Open your command line or terminal, create a new directory for your project, and navigate to it:

{% highlight bash %}
mkdir contact_manager
cd contact_manager
{% endhighlight %}

Now, create two Python files: `main.py` and `contact_manager.py`. Open these files in your preferred code editor.

## Creating the ContactManager Class

---

In `contact_manager.py`, we'll define the `ContactManager` class, which will encapsulate the functionality of our contact management system. This class will serve as a container for various functions and data structures needed to manage our contacts effectively.

{% highlight python %}
# contact_manager.py

import json

class ContactManager:
    def __init__(self):
        self.contacts = {}

{% endhighlight %}

We begin by importing the `json` module, offering capabilities for encoding and decoding JSON data, facilitating the saving and loading of contacts from a JSON file. Following that, we define the `ContactManager` class using the `class` keyword. This class serves as the encompassing structure for the entire contact management system, housing all related functions and data. The `__init__` method, a special method in Python classes called during object creation, is employed. Within this method, we initialize the `contacts` attribute—a dictionary (`{}`) designed to store our contacts, each associated with a unique name. The term `self` refers to the instance of the class, and `self.contacts` represents an attribute of the `ContactManager` class designated to store our contacts. It commences as an empty dictionary (`{}`) upon the creation of a new instance of `ContactManager`.

### Implementing Core Functionality

Now, let's add basic functionality to the `ContactManager` class. The objective is to enable the program to perform fundamental operations such as adding, updating, deleting, and saving/loading contacts from a JSON file. Following the previously defined initialization method, let's introduce these core methods.

{% highlight python %}
# contact_manager.py

import json

class ContactManager:
    def __init__(self):
        self.contacts = {}

    def add_contact(self, name, phone, email):
        self.contacts[name] = {'phone': phone, 'email': email}

    def update_contact(self, name, new_phone, new_email):
        if name in self.contacts:
            self.contacts[name]['phone'] = new_phone
            self.contacts[name]['email'] = new_email
            print(f'Contact information of {name} has been updated!\n')
        else:
            print(f'The name {name} is not in your contacts!\n')

    def search_contact(self, name):
        '''Search for a contact by name.'''
        return self.contacts.get(name)

    def delete_contact(self, name):
        '''Delete a contact by name.'''
        if name in self.contacts:
            del self.contacts[name]
            print(f'Contact {name} has been deleted\n')
        else:
            print(f'The name {name} is not in your contacts!\n')

    def display_contact(self, name):
        contact = self.contacts.get(name)
        if contact:
            print(f'Name: {name}\nPhone: {contact["phone"]}\nEmail: {contact["email"]}\n')
        else:
            print(f'Contact with name {name} not found.\n')

    def display_all_contacts(self):
        '''Display information for all contacts.'''
        if len(self.contacts) == 0:
            print('Address Book is Empty!\n')
        else:
            for name, contact_info in self.contacts.items():
                print(f'Name: {name}\nPhone: {contact_info["phone"]}\nEmail: {contact_info["email"]}\n')

{% endhighlight %}

In the `contact_manager.py` file, the following methods are added:

- `add_contact(self, name, phone, email)`: This method allows the addition of a new contact to the contacts dictionary. It takes parameters for the contact's name, phone number, and email address and creates a new entry in the dictionary with this information.

- `update_contact(self, name, new_phone, new_email)`: The `update_contact` method facilitates the modification of phone number and email address information for an existing contact in the address book. If the specified name exists in the contacts, it updates the corresponding information; otherwise, it notifies that the name is not in the contacts.

- `search_contact(self, name)`: The `search_contact` method looks for a contact by name and returns the contact information if found. It uses the `get` method to retrieve the contact associated with the provided name.

- `delete_contact(self, name)`: This method allows the deletion of an existing contact from the address book. If the specified name exists in the contacts, it removes the corresponding entry; otherwise, it notifies that the name is not in the contacts.

- `display_contact(self, name)`: The `display_contact` method shows the contact information for a given name. If the contact exists, it prints the name, phone number, and email address; otherwise, it notifies that the contact with the specified name was not found.

- `display_all_contacts(self)`: The `display_all_contacts` method provides an overview of information for all contacts in the address book. If the address book is empty, it displays a message indicating that it is empty; otherwise, it iterates through the contacts, printing the name, phone number, and email address for each contact.

### Archiving Contacts to a JSON File

Now, let's explore the implementation of methods for saving and loading contacts from a JSON file within the ContactManager class.

{% highlight python %}
# contact_manager.py

# ... (previous code)

class ContactManager:
    def __init__(self):
            self.contacts = {}

    # ... (previous methods)

    def save_to_file(self, filename):
        '''Save contacts to a JSON file.'''
        with open(filename, 'w') as file:
            json.dump(self.contacts, file)
        print(f'Your Contacts have been saved to {filename}')

    def load_from_file(self, filename):
        '''Load contacts from a JSON file.'''
        with open(filename, 'r') as file:
            self.contacts = json.load(file)
        print(f'Contacts have been loaded from {filename}')
{% endhighlight %}

In the `contact_manager.py` file, the following methods are added:

- `save_to_file(self, filename)`: The `save_to_file` method enables the user to persist the current contacts to a JSON file. It takes a filename as a parameter, opens the file in write mode (`'w'`), and uses the `json.dump` method to serialize the contacts dictionary into the file. A success message is printed, indicating that the contacts have been saved to the specified file.

- `load_from_file(self, filename)`: The `load_from_file` method allows the user to load contacts from a JSON file. It takes a filename as a parameter, opens the file in read mode (`'r'`), and uses the `json.load` method to deserialize the contacts from the file into the program's contacts dictionary. A success message is printed, indicating that the contacts have been loaded from the specified file.

These methods enhance the functionality of the Contact Management System by providing the capability to save the current state of contacts to a file and load contacts from a previously saved file. This is particularly useful for persistent storage of contact information between program runs.

## Implementing the Main Program

---

### Setting Up the Main Program

Now that we have our `ContactManager` class with core functionality, let's create the main program in `main.py` to interactively use and demonstrate the contact management system.

Starting with the menu of what our program can do:

First, open your code editor and open or create a new file named `main.py`. This file will contain the main program logic. Ensure that you import the `os` module to handle directory-related operations and the `ContactManager` class from the `contact_manager.py` file to utilize its functionality.

{% highlight python %}
# main.py

import os
from contact_manager import ContactManager

def main():
    path = os.path.dirname(os.path.realpath(__file__))
    os.chdir(path)
    contact_manager = ContactManager()

    while True:
        print('\nContact Management System\n')
        print('1. Add Contact')
        print('2. Update Contact')
        print('3. Search Contact')
        print('4. Delete Contact')
        print('5. Display All Contacts')
        print('6. Save Contacts to File')
        print('7. Load Contacts from File')
        print('8. Exit')

        choice = input('Enter your choice (1-8):> ')


if __name__ == '__main__':
    main()
{% endhighlight %}

Within the `main()` function, the working directory is set to the location of the `main.py` script using the `os.chdir()` function. This ensures that the script operates within its own directory.

An instance of the `ContactManager` class is then created, initializing the contact management system. The program enters a loop that continues until the user decides to exit (`choice == '8'`). Inside the loop, a menu of options is displayed, allowing the user to interact with the contact management system. The user enters a choice (a number between 1 and 8), and the program responds accordingly. The specific implementations for each menu choice is add below.

### Adding Functionality to Main Program

In `main.py`, complete the implementation of the menu choices by calling the appropriate methods from `ContactManager`  to perform various actions within the contact management system.

{% highlight python %}
# main.py

# ... (previous code)

def main():
    try:
        path = os.path.dirname(os.path.realpath(__file__))
        os.chdir(path)
        contact_manager = ContactManager()

        while True:
            # ... (previous code)

            if choice == '1':
                # Option 1: Add Contact
                name = input('Enter name:> ').title()
                phone = input('Enter phone:> ')
                email = input('Enter email:> ')
                contact_manager.add_contact(name, phone, email)
                print(f'Contact for {name} successfully added.')

            elif choice == '2':
                # Option 2: Update Contact
                name = input('Enter name to update:> ')
                new_phone = input('Enter new phone:> ')
                new_email = input('Enter new email:> ')
                contact_manager.update_contact(name, new_phone, new_email)

            elif choice == '3':
                # Option 3: Search Contact
                name = input('Enter name to search:> ')
                result = contact_manager.search_contact(name)
                if result:
                    contact_manager.display_contact(name)
                else:
                    print('Contact not found.')

            elif choice == '4':
                # Option 4: Delete Contact
                name = input('Enter name to delete:> ')
                contact_manager.delete_contact(name)

            elif choice == '5':
                # Option 5: Display All Contacts
                contact_manager.display_all_contacts()

            elif choice == '6':
                # Option 6: Save Contacts to File
                filename = input('Enter filename to save contacts:> ')
                contact_manager.save_to_file(filename)

            elif choice == '7':
                # Option 7: Load Contacts from File
                filename = input('Enter filename to load contacts from:> ')
                if os.path.exists(filename):
                    contact_manager.load_from_file(filename)
                else:
                    print(f'File {filename} does not exist.')

            elif choice == '8':
                # Option 8: Exit Program
                print('Exiting program.')
                break

            else:
                print('Invalid choice. Please enter a number between 1 and 8.')

    except Exception as e:
        print(f'An error occurred: {e}')

if __name__ == '__main__':
    main()
{% endhighlight %}

Each menu choice is associated with a specific action in the contact management system. The corresponding methods from the ContactManager class are called to perform the desired operations, such as adding, updating, searching, deleting, displaying, saving, and loading contacts. 

## Testing the Program

---

Run the `main.py` file and test the functionalities of your Contact Management System. Ensure that you can add, update, search, delete, and manage contacts as expected.

## Summary

---

Congratulations on completing the tutorial! You've successfully crafted a basic yet functional Contact Management System in Python. Throughout the tutorial, you've gained insights into fundamental programming concepts, including creating a command-line program, implementing classes, handling user input, and utilizing JSON for data persistence.

Feel free to delve into further enhancements and features for your contact manager, such as refining the user interface, adding validation checks, or incorporating additional functionalities. The skills acquired in this tutorial serve as a solid foundation for expanding and customizing your program based on specific project requirements.

While the focus has been on a command-line implementation, it's worth noting that the principles and techniques you've learned here are versatile. They can be adapted to various interfaces, such as graphical user interfaces (GUIs) or web applications. This adaptability allows you to explore different avenues and tailor your contact manager to suit different contexts and user preferences.

To view and download the complete Contact Management System program, you can find it on GitHub: [Contact Management System](<GitHub_Link>).