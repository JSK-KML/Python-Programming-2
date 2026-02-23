---
outline: deep
title: Lab 7 - Dictionaries
---

# Lab 07: Dictionaries

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Introduction

In this lab, we will explore **Dictionaries** in Python — a data structure that stores values under descriptive **Keys** instead of numeric indices.

### The Problem with Position

You are building a student record. You decide to use a list:

```python
student = ["Ali", 20, "Computer Science", "A"]

print(student[2])  # What is index 2?
```

You have to *remember* what each position holds. If someone inserts a new field at position 0, everything shifts. Your code silently breaks.

### The Solution: Named Access

A dictionary maps each value to a **descriptive key**. You look up by *name*, not by position.

Navigate to `/labs/lab07/` and open `sandbox.py`. Type and run this:

```python
student = {
    "name": "Ali",
    "age": 20,
    "course": "Computer Science",
    "grade": "A"
}

print(student["course"])  # Computer Science — no guessing
```

Now try adding a new field. Nothing else breaks.

---

## How Dictionaries Work: Hashing

Dictionaries are fast because of **Hashing**. When you add a key, Python calculates a number from it (the hash) and stores the value at that "address". Lookup is instant — Python goes directly to the address without scanning anything.

### Speed Test

Open `speed_test.py` and run it. Compare searching in a list vs. a dictionary:

```python
import time

data_list = list(range(1_000_000))
data_dict = {i: True for i in range(1_000_000)}
target = 999_999

start = time.time()
target in data_list
print(f"List: {time.time() - start:.5f}s")

start = time.time()
target in data_dict
print(f"Dict: {time.time() - start:.5f}s")
```

The dictionary is near-instant. The list has to check every element one by one.

### Why Keys Must Be Immutable

For hashing to work, the key must be **stable** — it cannot change after being added. This is why Python **only allows immutable types** as keys.

Open `crash_test.py` and run it:

```python
# WRONG — list as key
config = {
    [192, 168, 1, 1]: "Router"   # TypeError!
}
```

> `TypeError: unhashable type: 'list'`

To use a sequence as a key, use a **tuple**:

```python
# CORRECT — tuple as key
config = {
    (192, 168, 1, 1): "Router"
}
```

---

## CRUD: Creating and Reading

Dictionaries support three ways to create:

```python
# Method 1: Literal
menu = {"coffee": 5.00, "tea": 3.50}

# Method 2: Empty and add
menu = {}
menu["coffee"] = 5.00

# Method 3: dict() constructor
menu = dict(coffee=5.00, tea=3.50)
```

### The KeyError Trap

Accessing a key that doesn't exist crashes your program:

```python
menu = {"coffee": 5.00}

print(menu["juice"])   # KeyError: 'juice'
```

::: warning PROBLEM
Unguarded access with `[]` will crash if the key is missing.
:::

### Safe Access with .get()

```python
price = menu.get("juice", 0.00)   # Returns 0.00 if not found — no crash
```

---

## CRUD: Updating and Deleting

Updating uses the same syntax as adding — if the key exists, it is overwritten; if not, it is added:

```python
menu["coffee"] = 6.00         # Update existing
menu["latte"] = 7.50          # Add new

# Batch update
menu.update({"tea": 4.00, "juice": 3.00})
```

Deleting:

```python
del menu["tea"]               # Remove (KeyError if missing)
removed = menu.pop("latte")   # Remove and capture the value
menu.clear()                  # Remove everything
```

---

## Iterating Over a Dictionary

```python
for key in menu:                      # Keys only
    print(key)

for value in menu.values():           # Values only
    print(value)

for key, value in menu.items():       # Both at once
    print(f"{key}: {value}")
```

---

## Exercise 1: Library Borrow System <Badge type="warning" text="Task" />

Navigate to `/labs/lab07/exercise1/exercise1.py`.

**Background:**

A library tracks available copies of each book using a catalog. Throughout the day, borrowers take books and return them — but not every action is valid.

**Data Format:**

- `catalog`: a dictionary `{isbn: copies_available}`
- `actions`: a list of tuples `(action, isbn)` where action is `"BORROW"` or `"RETURN"`

**Situation:**

Process every action against the catalog:
- `"BORROW"`: if the ISBN exists **and** copies > 0, decrement the count.
- `"RETURN"`: if the ISBN exists, increment the count.
- If the ISBN is not in the catalog, skip that action entirely.

Return the updated catalog.

**Example:**
```
catalog = {
    "978-A": 2,
    "978-B": 0,
    "978-C": 1,
}
actions = [
    ("BORROW", "978-A"),
    ("BORROW", "978-A"),
    ("BORROW", "978-B"),   ← 0 copies, skip
    ("RETURN", "978-B"),
    ("BORROW", "978-Z"),   ← not in catalog, skip
]

→ {"978-A": 0, "978-B": 1, "978-C": 1}
```

**Task:**

Write a function `process_actions(catalog, actions)` that applies every valid action to the catalog and returns the updated dictionary.

---

## Exercise 2: ATM Withdrawal System <Badge type="warning" text="Task" />

Navigate to `/labs/lab07/exercise2/exercise2.py`.

**Background:**

An ATM maintains a ledger mapping each card number to an account balance. When a customer makes a withdrawal, the system must handle three possible outcomes without crashing regardless of input.

**Data Format:**

`accounts` is a dictionary: `{card_number: balance}`.

**Situation:**

Given the accounts ledger, a card number, and the requested withdrawal amount, return the result of the transaction.

**Example:**
```
accounts = {
    "4111-1111": 500.00,
    "4222-2222": 80.00
}

withdraw(accounts, "4111-1111", 200.00)  → 300.0
withdraw(accounts, "4222-2222", 100.00)  → "Insufficient Funds"
withdraw(accounts, "9999-0000", 50.00)   → "Card Not Found"
```

**Task:**

Write a function `withdraw(accounts, card_number, amount)` that:
1. Checks if the card number exists. If not, return `"Card Not Found"`.
2. Checks if the balance is sufficient. If not, return `"Insufficient Funds"`.
3. Deducts the amount, updates the balance, and returns the new balance as a float.

Do not crash on any input.

---

## Exercise 3: Price Comparison Engine <Badge type="warning" text="Task" />

Navigate to `/labs/lab07/exercise3/exercise3.py`.

**Background:**

A price comparison website tracks the same products across two different stores. Shoppers want to know where each product is cheaper, and which products they can only buy from one store.

**Data Format:**

Both stores are represented as `{product: price}` dictionaries.

**Situation:**

Compare Store A against Store B and categorise every product in Store A into one of three groups. Products that are only in Store B are not tracked.

**Example:**
```
store_a = {"milk": 3.50, "bread": 2.00, "eggs": 5.00, "butter": 4.50}
store_b = {"milk": 3.00, "bread": 2.50, "eggs": 5.00, "coffee": 8.00}

milk:   A=3.50, B=3.00 → B is cheaper
bread:  A=2.00, B=2.50 → A is cheaper
eggs:   equal           → not listed in any group
butter: only in A       → "only_a"
coffee: only in B       → not tracked

→ {
    "only_a":    ["butter"],
    "a_cheaper": ["bread"],
    "b_cheaper": ["milk"]
}
```

**Task:**

Write a function `compare_prices(store_a, store_b)` that returns a dictionary with exactly three keys:
- `"only_a"` — products stocked only in Store A (sorted)
- `"a_cheaper"` — products in both stores where Store A is cheaper (sorted)
- `"b_cheaper"` — products in both stores where Store B is cheaper (sorted)

Products with equal prices in both stores are not included in any list.

---

## Exercise 4: User Permission Upgrade <Badge type="warning" text="Task" />

Navigate to `/labs/lab07/exercise4/exercise4.py`.

**Background:**

A security system stores each user's permissions as `{permission: access_level}` where higher numbers mean more access. Periodic upgrade batches are distributed to raise access levels — but a batch must **never lower** a permission that is already higher.

**Situation:**

Apply an upgrade batch to a user's current permissions. For each permission in the batch:
- If the new level is **higher** than the current level, update it.
- If the new level is **equal to or lower**, keep the current level.
- If the permission does not exist yet in current, always add it.

Do not modify the original `current` dictionary. Return a new merged result.

**Example:**
```
current = {"read": 2, "write": 1, "admin": 0}
upgrade = {"read": 1, "write": 3, "execute": 2}

"read"    → current=2, upgrade=1  → 1 < 2,  keep 2
"write"   → current=1, upgrade=3  → 3 > 1,  take 3
"execute" → not in current        → always add: 2
"admin"   → not in upgrade        → keep 0

→ {"read": 2, "write": 3, "admin": 0, "execute": 2}
```

**Task:**

Write a function `apply_upgrade(current, upgrade)` that produces the final merged permissions dictionary without modifying `current`.

---

## Exercise 5: Department Risk Report <Badge type="warning" text="Task" />

Navigate to `/labs/lab07/exercise5/exercise5.py`.

**Background:**

A university groups students by department. Each department holds its students' scores. The academic board flags any department where **more than half** the students are scoring below a threshold — these departments need intervention.

**Data Format:**

`departments` is a two-level nested dictionary: `{department: {student_name: score}}`.

**Situation:**

For each department, count how many students are below the threshold. If that count exceeds half the department's total students, the department is at risk. Do **not** use a nested `for` loop — use `.values()` on the inner dictionary.

**Example:**
```
departments = {
    "CS":      {"Ali": 85, "Sara": 55, "Zaki": 62},
    "Math":    {"Hana": 90, "Reza": 88},
    "English": {"Tom": 45, "Jay": 50, "Lin": 48},
}
threshold = 65

CS:       3 students, 2 below 65 → 2/3 > 0.5 → at risk ✓
Math:     2 students, 0 below 65 → 0/2 = 0   → fine
English:  3 students, 3 below 65 → 3/3 = 1   → at risk ✓

→ ["CS", "English"]
```

**Task:**

Write a function `find_at_risk_departments(departments, threshold)` that returns a **sorted list** of department names where more than half the students score below `threshold`. Do not use a nested `for` loop.

---

## Exercise 6: Exam Score Registry <Badge type="warning" text="Bug Hunt" />

Navigate to `/labs/lab07/exercise6/exercise6.py`.

**Background:**

A university's examination office consolidates scores from multiple marking sessions. Lecturers submit their results in batches — a student may appear in more than one batch if their paper was re-marked. The system always keeps the **highest score** on record. At the end, the office prints a list of students who have passed.

A developer wrote the registry, but the code is broken. It does not produce the correct output.

**Data Format:**

- `existing` — a dictionary of already-recorded scores: `{student_name: score}`
- `new_results` — a dictionary of newly submitted scores: `{student_name: score}`

**Situation:**

The office receives a new batch of results. After merging, they need to know which students passed.

**Example:**
```
existing    = {"Ali": 85, "Sara": 70}
new_results = {"Ali": 90, "Ahmad": 60}

After merging:
- Ali:   already has 85, new score 90 is higher → keep 90
- Sara:  not in new batch → keep 70
- Ahmad: new student → add 60

Merged: {"Ali": 90, "Sara": 70, "Ahmad": 60}

Passing students (>= 75): ["Ali", "Sara"]
```

**The Broken Code:**

```python
def merge_results(existing, new_results):
    for student, score in new_results:
        if student in existing:
            if score > existing[student]:
                existing[student] = score
        else:
            existing[student] = score
    return existing


def get_passing_students(scores, pass_mark):
    passing = []
    for student in scores:
        if scores[student] >= pass_mark:
            passing.append(scores[student])
    return sorted(passing)
```

**Task:**

1. Run the code and read all error messages and outputs carefully.
2. Identify what is wrong and why.
3. Fix the code so the output matches the expected results exactly.

---

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like `"Complete Lab 7: Dictionaries"`, and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
