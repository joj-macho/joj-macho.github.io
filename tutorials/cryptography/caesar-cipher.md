---
layout: post
title: "Caesar Cipher"
sub-title: "A Brief Overview of the Caesar Cipher"
tags: ["cryptography", "basics", "algorithm"]
category: "python-cryptography"
permalink: /workspace/cryptography-101/caesar-cipher
---

The Caesar Cipher is a historical encryption technique that involves shifting the letters of the alphabet a certain number of positions to the right or left. This simple encryption method is easy to understand and implement, making it one of the most widely known historical encryption methods. In this guide, we will cover the history of the Caesar Cipher, how it works, implementation in Python, and more.

## A Brief History of the Caesar Cipher <hr>

The Caesar Cipher is named after Julius Caesar, who used this cipher to encrypt military messages. The encryption technique involved shifting all letters of the plain text three places to the right. According to the Roman historian Gaius Suetonius Tranquillus, Julius Caesar implemented this method during his campaigns.

Later on, it is claimed that other Caesars, such as Augustus, used variations of the Caesar cipher, such as shifting letters to the right by one place. It should be obvious that any shift of more than 26 (at least in English) would simply loop around the alphabet. So, a shift to the right of 27 is really just a shift of 1. Although the Caesar cipher is certainly not appropriate for modern cryptographic needs, it contains all the fundamental concepts needed for a cryptography algorithm.

### Mathematical Representation

The Caesar Cipher is a great example of how mathematics can be used to create and solve ciphers. In fact, the Caesar Cipher is a part of a larger family of ciphers known as shift ciphers, where the letters in the plaintext are shifted by a fixed number of positions.

To solve the Caesar Cipher, one can use frequency analysis, a technique that involves analyzing the frequency of each letter in the ciphertext to determine the shift used in the encryption. By identifying the most common letters in the ciphertext, such as "E" in English, one can determine the most likely shift used in the encryption.

The mathematical notation for the Caesar Cipher is:

$$C = (P + K) \mod 26$$

where:
- $C$ is the ciphertext
- $P$ is the plaintext
- $K$ is the key (i.e. the number of positions to shift)
- mod $26$ means "take the remainder when dividing by 26" (since there are 26 letters in the alphabet)

## How the Caesar Cipher Works <hr>

The Caesar Cipher works by taking each letter of the plaintext (the message that needs to be encrypted) and shifting it a certain number of positions to the right or left based on the key (the number of positions to shift). The resulting text, known as the ciphertext, can only be read by someone who knows the key and how to use it to decrypt the message.

Here's a step-by-step guide for designing and using a Caesar cipher:

- Choose a value to shift the alphabet by.
- Make a table where the top row contains letters in standard alphabetical order, and the bottom row is the new shifted alphabet.
- Encode the message by exchanging each letter in the message with the equivalent shifted letter.
- Make sure that the message’s intended recipient knows the shifting scheme you used to encode the message so they can decode it.
- To decrypt a message encoded with a Caesar cipher, simply take the value of 26 minus the shift value, and apply that new value to shift the encoded message back to its original form.

For example, if the key is 3, then each letter of the plaintext will be shifted 3 positions to the right. So, A will become D, B will become E, C will become F, and so on. To decrypt the message, the receiver simply needs to shift each letter in the ciphertext back by the same number of positions to the left.

Let's take an example message and encode it using the Caesar Cipher:

{% highlight markdown %}
Message: HELLO WORLD
Key: 5
Shifted Alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  V W X Y Z A B C D E F G H I J K L M N O P Q R S T U
Encoded Message: MJQQT BTWQI
{% endhighlight %}

To decode the message, the receiver needs to know the key used to encode the message, which in this case is 5. They then shift each letter in the encoded message 5 positions to the left to get the original message:

{% highlight markdown %}
Encoded Message: MJQQT BTWQI
Key: 5
Shifted Alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  V W X Y Z A B C D E F G H I J K L M N O P Q R S T U
Decoded Message: HELLO WORLD
{% endhighlight %}

### Cryptographic Techniques Used in the Caesar Cipher

The Caesar Cipher employs a substitution method of encryption, where each letter in the plaintext is replaced with a letter that is a certain number of positions down the alphabet. The key is the number of positions to shift the letters. This simple method of encryption is known as a monoalphabetic substitution cipher, as each letter in the plaintext is replaced by a single letter in the ciphertext. The Caesar Cipher can also be considered a symmetric encryption technique, as the same key is used for both encryption and decryption.

While the Caesar Cipher is a very basic encryption technique, it can be useful in situations where the message being encrypted is not sensitive or does not contain any confidential information. This can be useful in situations where a sender wants to communicate a message that can be easily shared but also kept away from prying eyes.

## Implementation in Python <hr>

Python is a popular programming language that can be used to implement the Caesar Cipher. Here's an example Python code that can be used to encode and decode messages using the Caesar Cipher:

In this Python implementation, the `caesar_cipher` function takes in a message (`text`) and a key (`shift`) as input and returns the encoded message as output. The function uses the `ord` and `chr` functions to convert each character to its corresponding ASCII code and back to its corresponding character after the shift.

{% highlight python %}
def caesar_cipher(text, shift):
    result = ''
    # loop through each character in the text
    for i in range(len(text)):
        char = text[i]
        # shift the character by the specified amount
        if char.isalpha():
            new_char = chr((ord(char) + shift - 65) % 26 + 65)
        else:
            new_char = char
        result += new_char
    return result

# Example usage:
text = 'HELLO WORLD'
key = 5
encoded_text = caesar_cipher(text, key)
print('Encoded Text:', encoded_text)
decoded_text = caesar_cipher(encoded_text, 26 - key)
print('Decoded Text:', decoded_text)
{% endhighlight %}

## Real-World Use Cases of the Caesar Cipher <hr>

While the Caesar Cipher is not appropriate for modern cryptographic needs, it has been used throughout history in various ways. In addition to military use, the Caesar Cipher has been used in diplomatic correspondences, personal letters, and even in the movie industry to hide spoilers from cast and crew members.

One famous example of the use of the Caesar Cipher is the famous case of Mary Queen of Scots. Mary Queen of Scots used the cipher to communicate with her allies during her imprisonment in England. However, the cipher was easily deciphered by the English authorities, who were able to read Mary Queen of Scots' messages and use the information against her.

Moreover, the Caesar Cipher has also been used as a teaching tool to introduce students to the concept of cryptography and encryption. The simplicity of the Caesar Cipher makes it an excellent starting point for students to understand the fundamental concepts of encryption before moving on to more complex cryptographic techniques.

## Summary <hr>

The Caesar Cipher is a simple yet historical encryption technique that has played an important role in the development of cryptography. While it may not be suitable for modern cryptographic needs, it still serves as an excellent teaching tool for students to understand the fundamental concepts of encryption.