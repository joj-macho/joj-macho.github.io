---
layout: post
title: "Fundamental Concepts in Cryptography"
sub-title: "Understanding the Key Concepts and Definitions"
tags: ["cryptography", "basics"]
category: "python-cryptography"
permalink: /workspace/cryptography/cryptography-fundamentals
---

Have you ever wondered how you can protect your confidential information when you share it with someone over the internet? The answer lies in cryptography — a field that addresses this very concern. Cryptography, derived from the Greek words "kryptos" (meaning "hidden") and "graphein" (meaning "writing"), involves transforming a message from its original form (plaintext) into an indecipherable format (ciphertext) using various cryptographic techniques. This tutorial delves into the fundamental concepts of cryptography, such as plaintext, ciphertext, encryption, decryption, keys, and algorithms. Additionally, it introduces essential cryptography terms like key length, block size, and padding, while also discussing prevalent attacks on cryptography like brute force and dictionary attacks.

## Introduction to Secure Communication <hr>

Whenever we discuss cryptology, we dive into scenarios involving Alice and Bob. They're our symbols of secure communication. Let's keep them in mind as we explore these concepts.

Picture a friendly neighborhood spot where people meet to chat, say a cozy café where Alice and Bob are currently located. Now, imagine Alice has a special message for Bob. She doesn't want anyone else to know what it says and wants to make sure only Bob can understand it. Cryptography is her solution. It's like locking the message in a box only Bob has the key to. Even if someone tries to sneak a peek, they can't read it because it's all scrambled up. 

### Unscrambling Messages: Encryption and Decryption

Now, Bob is on the other end, ready to read Alice's message. But it's all jumbled up! Alice used encryption, which is transforming a regular message (called plaintext) into a secret code (ciphertext) using a secret key. Bob, with his secret key, can turn the secret code back into the original message.

### The Secret Key

You might wonder, what's this "key" everyone keeps mentioning? Think of it as a secret password only Alice and Bob know. The longer and more complicated the key, the safer the message.

### Trust and Verification: Authentication

Now how can be Bob know for sure he got the message from Alice and not someone else? How can he be sure the message hasn't been changed? And how can Alice be certain that Bob got her message? And how can Bob ensure Alice can't say she didn't send it? This is where authentication steps in. It's like a digital fingerprint, the unique mark that says, "Yes, Alice sent this, and no one has meddled with it." Authentication confirms who sent the message and guarantees the message's safety. Now Alice and Bob can use a few methods to achieve this:

- **Handwritten Signature**: Before Alice sends her secret message, she can physically sign the message with a unique signature, known only to her and Bob. When Bob receives the message, he can verify the handwritten signature to confirm that it's from Alice.
- **Secret Handshake**: Alice and Bob could have a secret handshake or gesture that accompanies their secret messages. If Bob receives a message with the correct secret handshake, he knows it's from Alice.
- **Code Word**: They might establish a secret code word or phrase that must be included in each message, known only to them. Bob checks for its presence to ensure it's from Alice.
- **Café Staff Witness**: Café staff who witness Alice handing the message to Bob confirm that it was indeed passed from Alice to Bob. This is similar to having a trusted third party in online security.
- **Shared Token**: Alice and Bob might use a physical token, like a special pen or an engraved coffee spoon. They can include a picture or a description of this token in their messages to authenticate them. Bob can then verify that the received token matches the one they share.

Each of these methods adds a unique mark to the message, known only to Alice and Bob. Bob checks for this mark in the café to confirm the message's authenticity. Now he can be certain that Alice sent it, and it's exactly as she intended.

### More Basic Terminology

Here are some additional cryptographic terms to enhance our understanding:

- **Cryptography**: Cryptography is the study of how to alter a message so that someone intercepting it cannot read it without the appropriate algorithm and key. It's a method of transforming information to make it unreadable to anyone except those who are authorized to access it.
- **Cryptology**: Cryptology is the formal study of cryptography, including the mathematics and methodologies used for constructing and solving ciphers. Cryptology is a more comprehensive term that includes both cryptography and cryptanalysis.
- **Cryptanalysis**: Cryptanalysis is the study of principles and methods of deciphering ciphertext without knowing the key for the specific purpose of identifying weaknesses and finding ways to break them or, conversely, ways to strengthen them. In other words, cryptanalysis is the art of breaking cryptography.
- **Cipher**: A Cipher is the algorithm used in transforming plaintext to ciphertext. Ciphers operate on individual characters or groups of characters in the text without regard for their meaning. Think of a cipher as a method of scrambling the message, it's the way Alice turns her plaintext into ciphertext, making it hard to understand.
- **Encryption and Decryption**: Encryption is the process of converting plaintext into ciphertext, decryption is the process of converting the ciphertext into a plaintext. Encryption is used to protect sensitive information from unauthorized access. That is, encryption is locking and decryption is unlocking messages.
- **Plaintext (Cleartext)**: The original message or the information you want to secure. Plaintext is transformed into ciphertext by encryption.
- **Ciphertext**: The secret-coded message or encrypted message (output of some encryption scheme).
- **Keyword (Keyphrase)**: A special code like a secret code word or a special phrase known only to Alice and Bob, which is used for encryption and decryption.
- **Key Length**: The key length is how long and complicated the secret key is. Longer keys provide better security, like having more twists and turns in the lock on the box.
- **Block Size**: Block Size is the size of the block of plaintext that is processed at one time. A larger block size increases security, but it also slows down the encryption process.
- **Padding**: Padding is the process of adding extra data to the plaintext to make it a multiple of the block size. Padding is necessary when the plaintext is not a multiple of the block size. Padding is like adding extra pieces to make sure all the puzzle pieces (message blocks) fit perfectly together.


## Common Attacks Against Cryptography <hr>

As Alice and Bob enjoy their coffee and decipher secret messages, they are aware that their cryptographic methods need to be secure against various attacks. Attackers are always looking for vulnerabilities in cryptography to exploit. Here are some common attacks that they need to be cautious of:

- **Brute Force Attack**: In a brute force attack, an eavesdropper attempts to decrypt the ciphertext by trying every possible key until the correct one is found. This is why having a long and complex key is essential for Alice and Bob; it makes the process of trying every possible key extremely time-consuming. For instance, AES-256 encryption has a key space of 2^256, which is an astronomically large number, making it infeasible to brute force the encryption.
- **Dictionary Attacks**: Attackers try to guess the key by using a pre-generated list of potential keys. These lists can be created using commonly used passwords or by analyzing patterns in previously used keys. Dictionary attacks are more effective than brute force attacks because they can significantly reduce the search space, making it easier for the attacker to guess the correct key.
- **Man-in-the-Middle Attack**: An attacker secretly intercepts and possibly alters the communication between Alice and Bob. To prevent this, Alice and Bob must authenticate each other securely, like with their secret handshake or code word.
- **Side-Channel Attacks**: Attackers exploit weaknesses in the implementation of cryptographic algorithms, rather than trying to crack the encryption itself. Side-channel attacks can involve monitoring power consumption, electromagnetic radiation, or other signals generated during the encryption or decryption process to infer the key.
- **Cryptanalysis**: Cryptanalysis involves the study of ciphers with the goal of breaking them. Attackers analyze patterns and weaknesses in the encryption method to decipher the ciphertext. To counter this, Alice and Bob need to choose strong ciphers and regularly update their encryption techniques.
- **Known-Plaintext Attack**: In a known-plaintext attack, the attacker has access to both the plaintext and ciphertext. This can lead to the discovery of the key used for encryption. To mitigate this risk, Alice and Bob should frequently change their key to keep the attacker from discovering patterns.

By being aware of these common attacks, Alice and Bob can better safeguard their secret messages their suspicious date.

## Summary <hr>

Understanding key concepts and definitions in cryptography is crucial for anyone looking to use encryption to protect sensitive information. With the prevalence of cyber attacks, it is essential to have a strong understanding of the various attacks that can be used to exploit vulnerabilities in cryptographic systems. By implementing strong encryption protocols, using secure communication channels, and regularly updating cryptographic systems, we can significantly reduce the risk of unauthorized access to sensitive data.