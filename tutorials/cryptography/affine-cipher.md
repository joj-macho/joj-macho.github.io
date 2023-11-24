---
layout: post
title: "Affine Cipher"
sub-title: "A Brief Overview of the Affine Cipher"
tags: ["cryptography", "basics", "algorithm"]
category: "python-cryptography"
permalink: /workspace/cryptography/affine-cipher
---

The Affine Cipher is a historical encryption technique that involves using a combination of modular arithmetic and linear algebra to encrypt messages. In this guide, we will cover the history of the Affine Cipher, how it works, implementation in Python, and more.

## A Brief History of the Affine Cipher <hr>

The Affine Cipher derives its name from the mathematical concept of an affine transformation, employed for transforming coordinates in geometry. This cipher was initially elucidated by Al-Kindi, an Arab mathematician, in the 9th century AD. Subsequently, it garnered further attention and exploration from other mathematicians, including the Persian scholar Al-Khwārizmī. Its recognition received a boost in the mid-19th century when Augustus De Morgan, an English mathematician, popularized it.

The roots of the Affine Cipher extend into ancient history, particularly in its application to military and diplomatic communications. This substitution cipher incorporates mathematical transformations for the encryption and decryption of messages. Essentially a type of monoalphabetic substitution cipher, the Affine Cipher involves mapping each letter in an alphabet to its numeric equivalent, encrypting it using a straightforward mathematical function, and then converting it back to a letter.

### Mathematical Representation

The Affine Cipher operates on the principles of modular arithmetic. The encryption function is:

$$E(x) = (ax + b) \mod m$$

where:
- $E(x)$ is the encryption of the letter
- $a$ and $b$ are the key components
- $x$ is the numeric equivalent of the letter
- $m$ is the size of the alphabet

## How the Affine Cipher Works <hr>

The Affine Cipher works by applying a mathematical transformation to each letter in the plaintext. The transformation involves multiplying the numeric value of a letter by a key component, adding another key component, and taking the result modulo the size of the alphabet. Here's a step-by-step guide on how the Affine Cipher operates:

- Choose two key components, $a$ and $b$, where $a$ and $m$ are coprime.
- Assign each letter in the alphabet a numerical value.
- Apply the encryption function to each letter in the plaintext.
- Convert the numeric results back to letters to obtain the ciphertext.

For example, let's take a message and encode it using the Affine Cipher:

{% highlight markdown %}
Message: HELLO WORLD
Key: a = 5, b = 8
Encoded Message: MOJVS VTJVP
{% endhighlight %}

To decode the message, the same process is applied:

{% highlight markdown %}
Encoded Message: MOJVS VTJVP
Key: a = 5, b = 8
Decoded Message: HELLO WORLD
{% endhighlight %}

### Cryptographic Techniques Used in the Affine Cipher

The Affine Cipher is a substitution cipher that combines the simplicity of substitution with mathematical operations. Its use of modular arithmetic adds a layer of complexity, making it more secure than simple Caesar-like ciphers. However, it remains vulnerable to attacks, particularly when the key components are not carefully chosen.

## Implementation in Python <hr>

Python provides a straightforward way to implement the Affine Cipher. Here's an example Python code snippet:

{% highlight python %}
def affine_cipher(text, a, b, mode='encrypt'):
    result = ''
    m = 26  # size of the alphabet
    for char in text:
        if char.isalpha():
            x = ord(char) - ord('A' if char.isupper() else 'a')
            if mode == 'encrypt':
                new_x = (a * x + b) % m
            elif mode == 'decrypt':
                # Find the modular multiplicative inverse of a
                a_inv = pow(a, -1, m)
                new_x = a_inv * (x - b) % m
            new_char = chr(new_x + ord('A' if char.isupper() else 'a'))
        else:
            new_char = char
        result += new_char
    return result

# Example usage:
text = 'HELLO WORLD'
a = 5
b = 8
encoded_text = affine_cipher(text, a, b, mode='encrypt')
print('Encoded Text:', encoded_text)
decoded_text = affine_cipher(encoded_text, a, b, mode='decrypt')
print('Decoded Text:', decoded_text)
{% endhighlight %}

## Real-World Use Cases of the Affine Cipher <hr>

The Affine Cipher found applications in ancient military and diplomatic communications due to its simplicity and effectiveness. Its use of mathematical operations provided a level of security suitable for the contexts of its time. In contemporary settings, it serves as a historical example of cryptographic techniques.

## Summary <hr>

The Affine Cipher, with its historical significance and mathematical foundation, is a classic example of encryption. While not as complex as modern cryptographic methods, the Affine Cipher showcases the combination of substitution and mathematical operations. It stands as a testament to the evolution of cryptographic techniques.
