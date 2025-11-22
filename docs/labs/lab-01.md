---
outline: deep


title: Lab 1 - Set Up Your Development Environment and Revision
---

# Lab 01 - Set Up Your Development Environment and Revision

This lab walks you through setting up **Git** and **VS Code**, then using their graphical interfaces to manage the `class-cp125-repo` on **GitHub**.

## Install Git and VS Code

- Follow the [**Git** installation guide](/labs/installation#git) for details on downloading and configuring **Git**.
- Follow the [**VS Code** installation guide](/labs/installation#vs-code) to install the editor.
- In **VS Code**, open the `Extensions` panel and install the **Python** extension from **Microsoft**.

<br>


<p align="center">
    <img src="/public/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>



    

## Forking the Repository

When you fork a repository on **GitHub**, you create a fully independent copy under your own account. The original owner keeps their version; you now control yours and can set permissions, open issues, or adjust settings without affecting the source project.

On **GitHub**, fork the `class-cp125-repo` from this [link](https://github.com/JSK-KML/CP125-Class-Repo.git) by clicking the `Fork` button in **GitHub**. Proceed to the fork, without changing any default options.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-2.png" alt="drawing" width="400"/>
</p>

After you have done forking the repository, everything that you write is fully yours and only you can control it. So what is the difference between forking and simply copying?

The difference lies in the connection from the original copy. When you copy-paste something like a PDF documents, you have no connection to the original copy, meaning that if the original PDF changes, you will not know and you will not be notified. 

For forking, there are still connections to the original repository, so if the original repository updates, you will be notified and you can update accordingly.


## Cloning Your Repository

Now that you have done forking, the code is fully yours, but it only exists on **GitHub** web server. This is great, however, editing the code online, although feasible, is not a very smooth experience. 

To solve this, we need to clone the repository into your computer so you can edit and run the code using your IDE, which in this class we have chosen **VS Code**.

In your `class-cp125-repo`, click `Code` and copy the link.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-3.png" alt="drawing" width="400"/>
</p>

Back in **VS Code**, choose `Source Control` from the sidebar and click `Clone repository` and paste the link that you have copied in the box when prompted. Then choose `Clone from URL`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-4.png" alt="drawing" width="400"/>
</p>

After finishing that, your **GitHub** account needs to be set up. By `cloning` the repository, you are just copying the code into your own PC, but you need to tell **GitHub** that you are the rightful owner of the code. To do this, you need to use the terminal. Click `Terminal` and then `New Terminal`. 

<p align="center">
    <img src="/public/labs/lab-01/lab-1-8.png" alt="drawing" width="400"/>
</p>

A new terminal will appear at the bottom of **VS Code**.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-9.png" alt="drawing" width="400"/>
</p>


In the terminal, use the command below to setup your **GitHub** username and email. Refer back to your **GitHub** account for your username and email, the email is the email that you use for login. Replace `USERNAME` and `EMAIL` with your actual username and email.

```bash
git config --global user.name  "USERNAME"
git config --global user.email "EMAIL"
```

## Commit and Push 

When you have finished cloning the repository, you will see that the folder and file on the computer is exactly like in the **GitHub** web. Now let's try to update our code. In `labs/lab01/exercise.py`, change the code from 

```python
print("Hello, Lab 01")
```

to

```python
print("Hello everyone, Lab 01")
```

By changing the code, even if you add a space, **VS Code** will automatically detects the changes and will allow you to update the online repository that you have in **GitHub**.

On the sidebar, choose the `Source Control` and **VS Code** will automatically show you where the changes have been done. In the message box add appropriate message such as `Change the print in Lab 1` and click `Commit`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-5.png" alt="drawing" width="400"/>
</p>

But what exactly is `Commit`? A commit records a snapshot of your changes in the local repository. Each commit carries a unique ID and a message explaining what changed, letting you roll back or review history at any point.

`Push` is the **Git** action that copies your new commits from the local repository on your computer to the remote repository, which in our case is `cp115-class-repo`. Although the button shows `Sync`, behind the scene what it will do is `Push` and `Pull`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-6.png" alt="drawing" width="400"/>
</p>

Now go back to your **GitHub** account in the browser. You should see that the repository has been updated with the commit message that you have added.

## Syncing Fork

Once you fork a project, your copy starts aging the moment the original (“up-stream”) repo receives new commits. Syncing a fork is the act of pulling those new commits into your fork so it stays current—and so your pull requests don’t conflict with code that has already moved on.

To make sure your repository is up to date, go to you **GitHub** account and click `Sync Fork` and then choose `Update branch`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-7.png" alt="drawing" width="400"/>
</p>


## Recap

Congrats! You've just navigated your first **GitHub** workflow. Here's a quick recap:

- `Fork`: make a personal copy of any **GitHub** repository in your own account.

- `Clone`: bring that repository down to your computer, including its full history.

- `Commit`: record your local edits as a named snapshot with a clear message.

- `Push`: upload your committed snapshots from your machine to your **GitHub** repo.

- `Sync Fork`: pull in changes from the original project so your fork stays current.



