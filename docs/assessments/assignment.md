---
title: Assignment
outline: deep
---

# Assignment CP125

::: danger DEADLINE
**Submission Deadline: 30 January 2026**

Late submissions will **NOT** be accepted.
:::

## Document Specifications for `assignment_CP125.pdf`

### Document Settings
- **Font**: Arial, 12pt
- **Line spacing**: 1.5
- **Alignment**: Justify
- **Page Breaks**: Each major section must start on a new page
- **Page Numbering**:
  - Position: Bottom center
  - Start from page 1 (after cover page)
  - Cover page has no page number

### Document Structure

#### **1. Cover Page** 
- Use the provided Google Docs template [here](https://docs.google.com/document/d/1X3eD24x3_1D9p6KJ_wThF3cE2_efTEw0dFg8E4E08Qg/edit?usp=sharing)
- Make a copy to your Google Drive
- Fill in your personal information:
  - Full name
  - Matric number
  - Class (C01/C02)

#### **2. Table of Contents**
- Use Google Docs auto-generated table of contents


#### **3. Problem Analysis**
- **Problem Statement**: Copy from the "Assignment Problem" section below


#### **4. Python Code** 
- Full source code with detailed comments
- **MUST use code block formatting** in Google Docs

- Do **NOT** paste code as normal text


#### **5. Test Cases (minimum 4)** 

For each test case, include:
- **Test Case Number** (e.g., Test Case #1) in the title
- **Description** (e.g., "Valid input - Adding  2 new item, Delete 1 item, Search 1 item, Show Inventory, Exit")
- Take screenshots of your **terminal/console window**
- Screenshot must show **BOTH input and output**
- Make sure text is **clearly readable**
- All of the features and all of the error messages must be shown in the test cases. 
- Each test case can use or show multiple features and errors.

#### **6. Documentation**
Explain your program’s design and logic. Do **NOT** explain the code line-by-line. Instead, focus on:
- **General Logic**: A high-level explanation of how the program functions.
- **Data Structure**: What data structure(s) you chose to store the inventory and why.
- **Function Signatures**: Explain why you chose your function names, parameters, and return values.
- **Design Choices**: Any other important decisions you made during development such as what function or list principles that you used. 
- **Error Handling**: Explain how you handled errors and edge cases.
  

---

## Submission Guidelines

### Required Files

Submit **TWO** files:
1. `assignment_CP125.pdf` - Your complete documentation
2. `inventory_system.py` - Your Python source code


### File Naming 
- **PDF**: `assignment_CP125.pdf`
- **Python**: `inventory_system.py`
- Use exact filenames (case-sensitive)

### Resources

**Cover Page Template:**

- [Google Docs Template](https://docs.google.com/document/d/1X3eD24x3_1D9p6KJ_wThF3cE2_efTEw0dFg8E4E08Qg/edit?usp=sharing)
- Make a copy to your Google Drive before editing

**Submission Links:**

- **C01 Class**: [Submit Here](https://forms.gle/dgYjVGWRN9aXbRp87)
- **C02 Class**: [Submit Here](https://forms.gle/VfpZrwNGAbY68a3y7)

 

---

## Assignment Problem: COOPMART Inventory Management

### Situation
COOPMART is a small grocery store that currently tracks their inventory manually on paper. The store manager wants a simple console program to help staff add new items, remove discontinued products, check stock levels, and view all inventory. Your task is to build this program.

### Requirements
- Show a menu that repeats until the user selects **Exit**.
- **Add item** – prompt for an item name and a quantity. If the item already exists, add the new quantity to the existing one.
- **Delete item** – prompt for an item name to remove.
- **Search item** – prompt for an item name and display its quantity.
- **Show inventory** – list all stored items with their quantities.
- **Exit** – terminate the program with a goodbye message.
- **Assume the user always enters a numeric value for the menu choice** (no need to handle non‑numeric input).
- Validate input:
  - Menu choice must be a number 1‑5.
  - Quantity must be a non‑negative integer.
  - If an operation cannot be performed, display the exact error messages listed below.

### Exact Error Messages 
- **Invalid menu choice**: `Error: Invalid choice. Please enter a number between 1 and 5.`
- **Negative quantity**: `Error: Quantity cannot be negative.`
- **Item not found (delete/search)**: `Error: Item '<item_name>' not found.`
- **Duplicate add** (item already exists): `Item '<item_name>' already exists. Quantity updated to <new_quantity>.`
- **Empty inventory**: `Inventory is empty.`

### Sample Interactions

#### Sample 1: Basic Workflow
```
=== COOPMART INVENTORY SYSTEM ===
1. Add item
2. Delete item
3. Search item
4. Show inventory
5. Exit
Enter choice (1-5): 4
Inventory is empty.

Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 50
Item 'Apple' added.

Enter choice (1-5): 1
Enter item name: Banana
Enter quantity: 20
Item 'Banana' added.

Enter choice (1-5): 3
Enter item name: Apple
Quantity of 'Apple': 50

Enter choice (1-5): 4
Inventory:
Apple   50
Banana  20

Enter choice (1-5): 1
Enter item name: Cherry
Enter quantity: 15
Item 'Cherry' added.

Enter choice (1-5): 4
Inventory:
Apple   50
Banana  20
Cherry  15

Enter choice (1-5): 2
Enter item name: Banana
Item 'Banana' removed.

Enter choice (1-5): 4
Inventory:
Apple   50
Cherry  15

Enter choice (1-5): 5
Goodbye!
```

#### Sample 2: Updates and Error Handling
```
Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 20
Item 'Apple' added.

Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 10
Item 'Apple' already exists. Quantity updated to 30.

Enter choice (1-5): 1
Enter item name: Orange
Enter quantity: -5
Error: Quantity cannot be negative.

Enter choice (1-5): 3
Enter item name: Mango
Error: Item 'Mango' not found.

Enter choice (1-5): 2
Enter item name: Banana
Error: Item 'Banana' not found.

Enter choice (1-5): 7
Error: Invalid choice. Please enter a number between 1 and 5.

Enter choice (1-5): 5
Goodbye!
```
