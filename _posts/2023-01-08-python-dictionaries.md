---
layout: post
title: "Dictionary Data Types"
sub-title: "Understanding Python Data Structures: A Guide, Examples and Best Practices"
tags: "python basics dict"
category: "python-101"
---

Welcome to another chapter in our tutorial series on Python data structures. In this tutorial, we will delve into the dictionary data type, a powerful tool for storing and manipulating data. Dictionaries play a vital role in Python programming, offering a versatile way to map unique keys to corresponding values, enabling efficient data access and modification.

## Understanding Python Dictionaries - Yet Another Library Analogy <hr>

Imagine you have a library, but instead of organizing books based on their physical order on shelves, you decide to create a special system using index cards. Each index card represents a unique topic or category, containing information about the books related to that topic. Just like in a traditional library, the index cards serve as keys, while the book information represents the values. This system allows you to quickly locate books related to a specific topic without searching through every shelf.

In Python, dictionaries resemble this index card catalog. The keys serve as the index cards, representing unique topics, while the values represent the associated data. Much like how you efficiently retrieve books by referring to the index cards, you can access and manipulate data in dictionaries using their keys.

### Why Use Dictionaries?

By utilizing dictionaries, you can create a powerful organizational structure for your data, enabling fast and efficient lookup based on unique identifiers. It's akin to having a personal knowledge management system that grants you rapid access to information without the need to search through every piece of data.

#### Fast Lookup

Dictionaries offer rapid access to data elements based on their keys. This allows for efficient retrieval and modification of values without the need for complex searching algorithms. Like having a well-organized catalog that allows you to quickly find the books you need by referring to the index cards.

#### Versatility

Dictionaries can store data of various types, including numbers, strings, lists, or even other dictionaries. This versatility enables you to create complex data structures that accurately represent real-world relationships. Much like being able to store not only books but also various types of media and additional information associated with each topic in our hypothetical library.

#### Dynamic Nature

Dictionaries are mutable, meaning you can modify them by adding, updating, or removing key-value pairs. This flexibility allows you to adapt and change the contents of dictionaries as your program evolves. Just like being able to add or remove books from the catalog or update the information on the index cards as needed.

#### More Properties of Dictionaries

To better understand dictionaries, let's explore their essential properties:

- **Non-Sequential**: Dictionaries are non-sequential, meaning the order of key-value pairs is not guaranteed. Unlike lists or tuples that rely on indexing, dictionaries use unique keys to access their corresponding values.
- **Key-Value Mapping**: Dictionaries establish a one-to-one correspondence between keys and values. Each key in a dictionary is associated with a specific value, forming a mapping relationship. Much like how each index card representing a topic is connected to the corresponding book information.
- **Uniqueness of Keys**: Every key in a dictionary must be unique. Duplicate keys are not allowed, as they would lead to ambiguity in accessing the corresponding values. Like ensuring that each index card represents a distinct topic, preventing confusion when searching for specific books.

## Creating and Initializing Dictionaries <hr>

To create a dictionary in Python, you enclose key-value pairs within curly brackets <code>{}</code>. Each key-value pair consists of a key, followed by a colon, and then the associated value. Individual key-value pairs are separated by commas. Here's a general syntax of creating a dictionary:

{% highlight markdown %}
dictionary_name = {key_1: value_1, key_2: value_2, ..., key_n: value_n}
{% endhighlight %}

An empty dictionary can be created by simply using a pair of curly brackets <code>{}</code>:

{% highlight python %}
>>> empty_dict = {}
>>> print(empty_dict)
{}
{% endhighlight %}

This creates an empty dictionary named <code>empty_dict</code>.

Here's an example of a non-empty dictionary:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
{% endhighlight %}

In this example, we create a dictionary named <code>book_details</code> with two key-value pairs. The keys are unique identifiers (ISBN numbers), and the values represent the corresponding book titles.

### Using Integer Keys 

Dictionaries in Python can use integer values as keys, similar to how lists use integers for indexes. The keys don't have to start at 0 and can be any integer. Here's an example:

{% highlight python %}
>>> book_reviews = {12345: 'Great book!', 42: 'Must-read'}
>>> print(book_reviews)
{12345: 'Great book!', 42: 'Must-read'}
{% endhighlight %}

In this case, we use integer keys (<code>12345</code> and <code>42</code>) to represent book review identifiers, and the values are the corresponding reviews.

### Creating a Dictionary with <code>dict()</code>

The <code>dict()</code> function can also be used to create a dictionary. You can pass different parameters to <code>dict()</code> to create dictionaries in various ways.

You can pass a pair of curly brackets to <code>dict()</code> with key-value pairs separated by commas:

{% highlight python %}
>>> book_genres = dict({'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'})
>>> print(book_genres)
{'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'}
{% endhighlight %}

This creates a dictionary named <code>book_genres</code> with the specified key-value pairs.

### Using a List of Tuples

You can pass a list of tuples to <code>dict()</code>, where each tuple contains a key-value pair separated by a comma:

{% highlight python %}
>>> book_genres = dict([('Sci-Fi', 'Dune'), ('Mystery', 'Sherlock Holmes')])
>>> print(book_genres)
{'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'}
{% endhighlight %}

In this example, the <code>dict()</code> function creates a dictionary named <code>book_genres</code> with the specified key-value pairs.

#### Using the <code>fromkeys()</code> Method

The <code>fromkeys()</code> method allows you to create a default dictionary where each key is associated with a default value:

{% highlight python %}
>>> book_ratings = {}.fromkeys(('ISBN123', 'ISBN456', 'ISBN789'), 5.0)
>>> print(book_ratings)
{'ISBN123': 5.0, 'ISBN456': 5.0, 'ISBN789': 5.0}
{% endhighlight %}

In this example, the <code>fromkeys()</code> method creates a dictionary named <code>book_ratings</code> with keys <code>'ISBN123'</code>, <code>'ISBN456'</code>, and <code>'ISBN789'</code>, and the default value <code>5.0</code>.

#### Creating a Dictionary with <code>zip()</code>

You can also pass a list of key-value pairs to <code>dict()</code> using the <code>zip()</code> function:

{% highlight python %}
>>> book_genres = dict(zip(['ISBN123', 'ISBN456', 'ISBN789'], ['Sci-Fi', 'Mystery', 'Fantasy']))
>>> print(book_genres)
{'ISBN123': 'Sci-Fi', 'ISBN456': 'Mystery', 'ISBN789': 'Fantasy'}
{% endhighlight %}

In this example, the <code>zip()</code> function combines the ISBN numbers <code>['ISBN123', 'ISBN456', 'ISBN789']</code> and the corresponding genres <code>['Sci-Fi', 'Mystery', 'Fantasy']</code>. The <code>dict()</code> function creates a dictionary named <code>book_genres</code> from those pairs.

### Creating Dictionaries using Comprehension Syntax

In addition to the methods discussed above, Python provides a concise way to create dictionaries called "dictionary comprehension." Dictionary comprehension allows you to create dictionaries using a compact syntax, similar to list comprehension. It allows you to transform and filter data while constructing dictionaries efficiently. 

Here's the general syntax of dictionary comprehension:

{% highlight markdown %}
{key_expression: value_expression for item in iterable}
{% endhighlight %}

Let's look at an example to understand how dictionary comprehension works:

{% highlight python %}
>>> books = ['Python Programming', 'Data Science 101', 'Machine Learning Basics']
>>> book_lengths = {book: len(book) for book in books}
>>> print(book_lengths)
{'Python Programming': 18, 'Data Science 101': 16, 'Machine Learning Basics': 23}
{% endhighlight %}

In this example, we have a list of books. Using dictionary comprehension, we create a dictionary <code>book_lengths</code> where the book titles are the keys, and the values are the lengths of the corresponding book titles.

The dictionary comprehension consists of the following parts:

- <code>book: len(book)</code>: This is the key-value expression that defines how each key-value pair is created. In this case, the book title is the key, and <code>len(book)</code> gives the length of the book title.
- <code>for book in books</code>: This is the iteration part, where we iterate over each book in the <code>books</code> list.

Dictionary comprehension provides a concise way to create dictionaries based on existing data or specific patterns. It can also include conditions using the <code>if</code> statement to filter the items before adding them to the dictionary.
Here's an example that demonstrates dictionary comprehension with a condition:

{% highlight python %}
>>> books = ['Python Programming', 'Data Science 101', 'Machine Learning Basics']
>>> book_lengths = {book: len(book) for book in books if len(book) > 15}
>>> print(book_lengths)
{'Python Programming': 18, 'Machine Learning Basics': 23}
{% endhighlight %}

In this example, we only include the books in the dictionary if their lengths are greater than 15 characters. The <code>if</code> statement acts as a filter to control which items are added to the dictionary.

## Accessing and Modifying Values <hr>

In Python dictionaries, accessing and modifying values is a common operation and is essential for working with data efficiently. By using keys to access values, adding or updating key-value pairs, and utilizing the various methods available, you can effectively manipulate and retrieve data from dictionaries. This section explains how to access dictionary values using keys, and how to add or update key-value pairs.

### Accessing Dictionary Values

To access the value associated with a key in a dictionary, you can use the key within square brackets. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> print(book_details['ISBN123'])
Python Programming
>>> 
>>> print('The book title is:', book_details['ISBN456'])
The book title is: Data Science 101
{% endhighlight %}

By providing the key, Python returns the corresponding value from the dictionary. It's similar to using the ISBN number to quickly find the corresponding book title in a library.

### Adding and Updating Key-Value Pairs

Dictionaries are mutable, which means you can add, update, or remove key-value pairs.

#### Adding a Key-Value Pair

To add a new key-value pair to a dictionary, you can simply assign a value to a new key:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details['ISBN789'] = 'Machine Learning Basics'
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101', 'ISBN789': 'Machine Learning Basics'}
{% endhighlight %}

In this example, we add a new key <code>'ISBN789'</code> with the corresponding value <code>'Machine Learning Basics'</code> to the <code>book_details</code> dictionary.

#### Updating a Value

To update the value of an existing key, you can reassign a new value to that key:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details['ISBN456'] = 'Advanced Data Science'
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Advanced Data Science'}
{% endhighlight %}

In this case, we update the value of the key <code>'ISBN456'</code> to <code>'Advanced Data Science'</code>. Now, when we access the value for that key, we get the updated value.

#### Accessing with the <code>keys()</code>, <code>values()</code>, and <code>items()</code> Methods

Python dictionaries provide three methods to access their keys, values, or both: <code>keys()</code>, <code>values()</code>, and <code>items()</code>.

The <code>keys()</code> method returns a list-like object containing all the keys in the dictionary. You can use it in a for loop or convert it to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> keys = book_details.keys()
>>> for key in keys:
        print(key)
ISBN123
ISBN456
{% endhighlight %}

In this example, the <code>keys()</code> method is used to obtain a view object containing the keys from the <code>book_details</code> dictionary. The keys are then iterated over and printed.

The <code>values()</code> method returns a list-like object containing all the values in the dictionary. Similar to <code>keys()</code>, you can iterate over the values or convert them to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> values = book_details.values()
>>> for value in values:
        print(value)
Python Programming
Data Science 101
{% endhighlight %}

In this example, the <code>values()</code> method is used to obtain a view object containing the values from the <code>book_details</code> dictionary. The values are then iterated over and printed.

The <code>items()</code> method returns a list-like object containing tuples of key-value pairs. Each tuple represents a key-value pair in the dictionary. You can use it to iterate over both keys and values or convert it to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> items = book_details.items()
>>> for key, value in items:
        print(key, value)
ISBN123 Python Programming
ISBN456 Data Science 101
{% endhighlight %}>

In this example, the <code>items()</code> method is used to obtain a view object containing the key-value pairs from the <code>book_details</code> dictionary. The tuples are then unpacked into separate variables (<code>key</code> and <code>value</code>) and printed.

#### Accessing with get()

The <code>get()</code> method allows you to retrieve the value associated with a key in a dictionary. It takes two arguments: the key to retrieve and a fallback value to return if the key doesn't exist. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_title = book_details.get('ISBN123', 'Title not found')
>>> print(book_title)
Python Programming
>>> 
>>> book_title = book_details.get('ISBN789', 'Title not found')
>>> print(book_title)
Title not found
{% endhighlight %}

In this example, the <code>get()</code> method retrieves the value associated with the key <code>'ISBN123'</code>. If the key exists, it returns the corresponding value. Otherwise, it returns the fallback value <code>'Title not found'</code>.

### Membership in Dictionary

You can use the <code>in</code> and <code>not in</code> operators to check whether a certain key or value exists in a dictionary. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> if 'ISBN123' in book_details:
        print('ISBN123 exists in book_details')
ISBN123 exists in book_details
>>> 
>>> if 'Data Science 101' not in book_details.values():
        print('Data Science 101 is not in book_details')
    else:
        print('Data Science 101 is in book_details')
Data Science 101 is in book_details
{% endhighlight %}

In this example, we check if the key <code>'ISBN123'</code> exists in the <code>book_details</code> dictionary using the <code>in</code> operator. Similarly, we check if the value <code>'Data Science 101'</code> is not present in the dictionary using the <code>not in</code> operator.

## Dictionary Methods and Functions <hr>

Python dictionaries provide a variety of useful methods that allow you to manipulate, add, remove, and check elements in dictionaries. In this section, we'll explore some of the commonly used dictionary methods. As discussed earlier in the section on "Accessing with the <code>keys()</code>, <code>values()</code>, and <code>items()</code> Methods," we have already covered the <code>keys()</code>, <code>values()</code>, <code>items()</code>, and <code>get()</code> methods for accessing dictionary elements. Now, let's delve into some additional dictionary methods.

### Updating values with the <code>update()</code> Method

The <code>update()</code> method allows you to update a dictionary with the key-value pairs from another dictionary. It takes another dictionary as a parameter and merges its key-value pairs into the original dictionary. If a key already exists in the original dictionary, its value will be updated. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> additional_books = {'ISBN789': 'Machine Learning Basics', 'ISBN101': 'Web Development'}
>>> book_details.update(additional_books)
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101', 'ISBN789': 'Machine Learning Basics', 'ISBN101': 'Web Development'}
{% endhighlight %}

In this example, the <code>update()</code> method merges the <code>additional_books</code> dictionary into the <code>book_details</code> dictionary, adding the new key-value pairs.

### Sorting values with the <code>sorted()</code> Function

The <code>sorted()</code> function can be used to sort the keys of a dictionary in ascending order. It returns a new list containing the sorted keys. Here's an example:

{% highlight python %}
>>> book_reviews = {'ISBN789': 'Informative', 'ISBN456': 'Must-read', 'ISBN123': 'Great book!'}
>>> sorted_keys = sorted(book_reviews)
>>> for key in sorted_keys:
        print(key, book_reviews[key])

ISBN123 Great book!
ISBN456 Must-read
ISBN789 Informative
{% endhighlight %}

In this example, the <code>sorted()</code> function is used to obtain a sorted list of keys from the <code>book_reviews</code> dictionary. The keys are then iterated over in the sorted order, and the corresponding values are accessed and printed.

### Retrieving values with the <code>setdefault()</code> Method

The <code>setdefault()</code> method allows you to retrieve the value associated with a key in a dictionary. If the key exists, it returns the corresponding value. If the key doesn't exist, it sets the key with a default value and returns the default value. Here's an example using book-related data:

{% highlight python %}
>>> book_ratings = {'ISBN123': 4.5, 'ISBN789': 3.8}
>>> rating = book_ratings.setdefault('ISBN456', 4.0)
>>> print(rating)
4.0
>>> print(book_ratings)
{'ISBN123': 4.5, 'ISBN789': 3.8, 'ISBN456': 4.0}
{% endhighlight %}

In this example, the <code>setdefault()</code> method is used to retrieve the rating for the key <code>'ISBN456'</code>. Since this key doesn't exist in the <code>book_ratings</code> dictionary, the method sets the key with a default value of 4.0 and returns the default value. The dictionary is then updated with the new key-value pair.

### Removing values with the <code>del</code> Statement, <code>pop()</code> Method, and <code>popitems()</code> Method

The <code>del</code> statement can be used to delete a specific key-value pair from a dictionary. Here's an example using book-related data:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> del book_details['ISBN456']
>>> print(book_details)
{'ISBN123': 'Python Programming'}
{% endhighlight %}

In this example, the <code>del</code> statement removes the key-value pair with the key <code>'ISBN456'</code> from the <code>book_details</code> dictionary.

The <code>pop()</code> method can be used to remove a specific key-value pair from a dictionary and also retrieve the corresponding value. Here's an example:

{% highlight python %}
>>> book_reviews = {'ISBN123': 'Great book!', 'ISBN456': 'Must-read'}
>>> review = book_reviews.pop('ISBN123')
>>> print(review)
Great book!
>>> print(book_reviews)
{'ISBN456': 'Must-read'}
{% endhighlight %}

In this example, the <code>pop()</code> method removes the key-value pair with the key <code>'ISBN123'</code> from the <code>book_reviews</code> dictionary and returns the corresponding value. The dictionary is then updated without the removed key-value pair.

The <code>popitem()</code> method removes and returns an arbitrary key-value pair from the dictionary as a tuple. This method is useful when you want to remove and process items from the dictionary in an arbitrary order. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> key, value = book_details.popitem()
>>> print(key, value)
ISBN456 Data Science 1
>>> print(book_details)
{'ISBN123': 'Python Programming'}
{% endhighlight %}

In this example, the <code>popitem()</code> method is used to remove an arbitrary key-value pair from the <code>book_details</code> dictionary. The removed key-value pair is returned as a tuple, which is then unpacked into separate variables (<code>key</code> and <code>value</code>). The dictionary is updated without the removed key-value pair.

### Clearing the Dictionary with the <code>clear()</code> Method

The <code>clear()</code> method allows you to remove all key-value pairs from a dictionary, effectively clearing it. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details.clear()
>>> print(book_details)
{}
{% endhighlight %}

In this example, the <code>clear()</code> method removes all key-value pairs from the <code>book_details</code> dictionary, resulting in an empty dictionary.

### Copying Dictionaries with the <code>copy()</code> Method

The <code>copy()</code> method creates a shallow copy of the dictionary. It returns a new dictionary with the same key-value pairs. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> new_book_details = book_details.copy()
>>> print(new_book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
{% endhighlight %}

In this example, the <code>copy()</code> method is used to create a new dictionary <code>new_book_details</code> that is a shallow copy of the <code>book_details</code> dictionary.

## Practical Applications and Use Cases <hr>

Dictionaries are versatile data structures that find applications in various real-world scenarios. Here are some practical use cases where dictionaries are commonly employed:

### Data Representation and Organization

Dictionaries are ideal for representing and organizing data that has a key-value structure. They are often used to store and retrieve information based on unique identifiers or keys. For example:

- Storing information about books, where ISBN numbers serve as keys and book titles serve as values.
- Managing user profiles in a web application, where user IDs are keys and user information (name, email, etc.) are values.

### Data Aggregation and Grouping

Dictionaries are useful for aggregating and grouping data based on specific criteria. They allow you to collect and organize related data elements efficiently. Some examples include:

- Grouping student grades by subject, where the subject name is the key and the list of grades is the value.
- Aggregating sales data by region, where the region serves as the key and the sales figures are stored as values.

### Counting and Frequency Analysis

Dictionaries are commonly employed for counting occurrences and performing frequency analysis on datasets. They provide an efficient way to tally and keep track of counts. Use cases include:

- Counting the frequency of words in a text document, where each word is a key and the count is the value.
- Analyzing the occurrence of specific events in a log file, where the events are stored as keys and their frequencies are the corresponding values.

### Configuration Management

Dictionaries are often used for managing configurations and settings in software applications. They allow you to store and retrieve configuration parameters based on keys. Examples include:

- Storing application settings such as database credentials, API keys, and feature flags.
- Managing system configurations like network settings, file paths, and application-specific configurations.

### Benefits and Considerations when Working with Dictionaries

When working with dictionaries, it's essential to consider the following factors based on the specific requirements of your application. Proper utilization of dictionaries can significantly enhance the efficiency and organization of your data.

### Benefits of using Dictionaries

- Efficient Retrieval: Dictionaries provide fast retrieval of values based on unique keys, making them suitable for applications requiring quick access to data.
- Flexible Key-Value Structure: Dictionaries allow for the storage of heterogeneous data types as values, making them versatile for representing complex relationships.
- Dynamic Nature: Dictionaries are mutable, enabling easy addition, modification, and removal of key-value pairs, making them adaptable to changing data requirements.
- Convenient Methods: Python provides a range of built-in methods and operations that simplify common dictionary operations, such as accessing, updating, and iterating over key-value pairs.

### Considerations

- Unordered Collection: Dictionaries are unordered, meaning they do not guarantee any specific order of the key-value pairs. If order preservation is essential, consider using an alternative data structure, such as an ordered dictionary.
- Memory Overhead: Dictionaries consume more memory compared to other data structures due to their internal hash table implementation. If memory usage is a concern for large-scale applications, alternative data structures may be more appropriate.
- Key Immutability: Dictionary keys must be immutable objects (strings, numbers, or tuples) since they are used as hash values. Mutable objects like lists cannot be used as keys.
- Iteration Order (Python 3.7+): Starting from Python 3.7, the insertion order of keys is preserved in dictionaries, making them ordered by default. However, relying on this order before Python 3.7 may lead to unexpected behavior.

## Summary <hr>

Congratulations! You've completed the tutorial on Python dictionaries. Dictionaries are essential for organizing data efficiently, and you've gained a deep understanding of their functionality. With this knowledge, you can tackle more complex data structures and address a wide range of real-world problems.

Your Python adventure continues with [Python Control Flow]({% post_url 2023-01-09-python-control-flow %}).