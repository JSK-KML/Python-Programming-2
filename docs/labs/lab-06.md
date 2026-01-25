---
outline: deep
title: Lab 6 - Sets & Hashing
---

# Lab 06: Sets & Hashing


## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Introduction

In this lab, we will learn about **Sets** in Python. You will learn how sets are used for tracking unique items and performing efficient mathematical operations.

### The Visitor Tracking Problem

In the lecture, we discussed a common problem: tracking unique visitors to a website. As your website grows from 10 visitors to 10 million, the way you store this data matters.

### The Problem with Lists

Navigate to `/labs/lab06/` and open `performance_test.py`. This script simulates a visitor log growing to 10 million users:

```python
import time

# 1. Simulating a database of 10 million visitor IDs
print("Generating visitor log...")
visitors_list = list(range(10_000_000))
print("Log generated.")

# 2. A new visitor arrives (User ID: 9,999,999)
new_visitor = 9_999_999

# 3. Check if they have visited before (Linear Search)
print(f"Checking if Visitor {new_visitor} exists...")
start_time = time.time()

if new_visitor in visitors_list:
    print("Visitor found!")

end_time = time.time()
print(f"List Search Time: {end_time - start_time:.5f} seconds")
```

Run this code. You will notice a significant delay. This is because the computer must scan every single ID in the list, one by one. This is called **Linear Time** or `O(n)`.

### The Solution: Sets and Hashing

Now, modify your code to use a **Set** instead of a List:

```python
# Change this line:
visitors_list = set(range(10_000_000))
```

Run it again. The result is instant (**0.00000 seconds**). This is because Sets use **Hashing** to find data in **Constant Time** or $O(1)$.

---

## The Constraint: Immutability

Hashing demands **stability**. If an object changes (mutates), its hash changes, and the Set loses track of it. Therefore, **you cannot put mutable items (like lists) into a Set.**

### The Crash Test

Open the file `crash_test.py`. It contains the following code:

```python
# A list of coordinates (mutable lists)
points = [
    [10, 20],
    [5, 5],
    [10, 20] # Duplicate
]

# Try to remove duplicates using a set
unique_points = set(points)
print(unique_points)
```

Run it. You will get: `TypeError: unhashable type: 'list'`.

### The Solution: Tuples

To store complex data in a Set, you must use **Tuples**. Tuples are immutable, so they have a stable hash. Change the code to use parentheses `()` instead of brackets `[]` and run it again to see it work.

---

## Set Methods

Sets are mutable, so you can dynamically add and remove items. Open `guest_manager.py` and observe how we manage a guest list:

```python
guests = {"Alice", "Bob"}

# 1. Adding items
guests.add("Charlie")
guests.update(["David", "Eve"]) # Add multiple from a list

# 2. Removing items
guests.remove("Alice")      # Must exist or CRASH
guests.discard("Zorro")     # Safe removal (no error)

print(f"Final guests: {guests}")
```

---

## Exercise 1: Advanced Visitor Behavior Auditor <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise1/exercise1.py`.

**Situation:**
A web analyst at an e-commerce platform monitors user engagement. You receive session logs as a list of tuples: `(timestamp, user_id, action_type)`. You must identify "Power Users"—real individuals (not in the `bot_ids` set) who have interacted with more than a specified `threshold` of **unique** action types.

**Example Scenario:**
- **Logs:** `[("10:01", "u1", "view"), ("10:02", "u2", "view"), ("10:05", "u1", "scroll"), ("10:10", "u1", "view"), ("10:12", "u9", "extract")]`
- **Known Bots:** `{"u9"}`
- **Threshold:** 1

**Analysis Logic:**
1.  **Filter Bots**: First, identify that user `u9` is in the `bot_ids` set. They are removed from the analysis.
2.  **Count Unique Actions**: 
    - Loop through the remaining logs. 
    - User `u2` has only one unique action: `{"view"}`.
    - User `u1` has two unique actions: `{"view", "scroll"}`.
3.  **Evaluate Threshold**: Compare each user's unique count to the threshold of 1.
    - `u2` has 1 action. Since 1 is not strictly greater than 1, they are omitted.
    - `u1` has 2 actions. Since 2 is greater than 1, they are a Power User.
4.  **Final Result:** `["u1"]` (The ID as a sorted list).

**Task:**
Write a function `get_legit_power_users(log_data, bot_ids, threshold)` that:
1. Loops through the log data to filter out any `user_id` found in the `bot_ids` set.
2. Uses a grouping strategy to find all **unique** `action_type` strings performed by each valid user.
3. Returns a **sorted list** of IDs for only those users who performed strictly more than `threshold` unique actions.

---

## Exercise 2: Personnel Merit Sync <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise2/exercise2.py`.

**Situation:**
A corporate HR department is identifying "Specialists" for a project. To qualify, an employee must possess **all** the project's `required_skills` and at least one **"Rarity Skill"**. A skill is considered "Rare" if it is held by **fewer than 3** people in the entire company `candidates_list`.

**Example Scenario:**
- **Candidates:** `[("Ali", {"Python", "Git"}), ("Sara", {"Git", "Cloud", "COBOL"}), ("Zaki", {"Git", "Cloud"})]`
- **Project Requirements:** `{"Git"}`
- **Rare Skills:** `{"Cloud", "Python", "COBOL"}` (held by < 3 people).

**Analysis Logic:**
1.  **Calculate Frequencies**: Loop through all candidate skills. Count how many people have each skill.
2.  **Filter Rare Skills**: Identify skills with a frequency of less than 3.
3.  **Evaluate Candidates**:
    - **Ali** has the requirement "Git". He also has "Python" which is a Rare Skill. Ali is a match.
    - **Sara** has the requirement "Git". She also has "Cloud" and "COBOL" which are Rare Skills. Sara is a match.
    - **Zaki** has the requirement "Git". He also has "Cloud" which is a Rare Skill. Zaki is a match.
4.  **Final Result:** `[("Ali", {"Python"}), ("Sara", {"Cloud", "COBOL"}), ("Zaki", {"Cloud"})]`

**Task:**
Write a function `match_specialists(candidates_list, project_requirements)` that:
1. Calculates global skill frequencies from the `candidates_list`.
2. Identifies which candidates possess a superset of the project requirements.
3. For those valid candidates, identifies their specific "Rare" skills (held by `< 3` people company-wide).
4. Returns a **List of Tuples** where each tuple contains the specialist's name and their set of rare skills.

---

## Set Operations

The true power of Sets comes from mathematical operations. These let you compare large datasets instantly—without using a single `for` loop.

Navigate to `/labs/lab06/` and open `set_math.py`. This script mimics a marketing analyst comparing user engagement between the **Homepage** and the **Checkout** page.

```python
# Visitors to different sections
homepage_visitors = {"user_1", "user_2", "user_3", "user_4"}
checkout_visitors = {"user_3", "user_4", "user_5", "user_6"}

# 1. Intersection (&): Who visited BOTH? (Loyal Users)
loyal = homepage_visitors & checkout_visitors
print(f"Loyal Users: {loyal}")

# 2. Difference (-): Who visited the homepage but NEVER reached checkout? (Lost Sales)
lost_sales = homepage_visitors - checkout_visitors
print(f"Lost Conversions: {lost_sales}")

# 3. Symmetric Difference (^): Who visited only ONE page (either home or checkout, but not both)?
one_pagers = homepage_visitors ^ checkout_visitors
print(f"Single Page Visitors: {one_pagers}")

# 4. Union (|): What is our total unique audience across both pages?
total_audience = homepage_visitors | checkout_visitors
print(f"Total Unique Reach: {total_audience}")
```

### Analysis of Operations
Observe how Python calculates these relationships:
- **Intersection (`&`)**: Identifies items present in BOTH sets.
- **Difference (`-`)**: Identifies items in the first set but NOT the second.
- **Symmetric Difference (`^`)**: Identifies items in either set, but NOT BOTH.
- **Union (`|`)**: Combines ALL unique items from both sets.

---

## Exercise 3: Blocklist Redundancy Auditor <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise3/exercise3.py`.

**Situation:**
A network administrator is merging three security blocklists (A, B, and C). To optimize the firewall, you need to categorize URLs based on their presence across these lists.

**Example Scenario:**
- **List A:** `{"malware.exe", "virus.zip"}`
- **List B:** `{"virus.zip", "adware.dmg"}`
- **List C:** `{"virus.zip", "spyware.exe"}`

**Analysis Logic:**
1.  **Universal Set**: Calculate the intersection of all three lists. Result: `{"virus.zip"}`.
2.  **Redundant Set**: Identify URLs present in at least two lists (A and B, B and C, or A and C). Result: `{"virus.zip"}`.
3.  **Unique A Set**: Subtract lists B and C from list A. Result: `{"malware.exe"}`.
4.  **Final Result:** `({"virus.zip"}, {"virus.zip"}, {"malware.exe"})`

**Task:**
Write a function `audit_blocklists(list_a, list_b, list_c)` that returns a **tuple** containing three sets in this exact order: 
1. The **Universal** set (URLs present in all three lists).
2. The **Redundant** set (URLs present in at least two lists).
3. The **Unique A** set (URLs present in only List A).

---

## Exercise 4: Database Reconciliation Bridge <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise4/exercise4.py`.

**Situation:**
During a database migration, you must reconcile `Legacy` records against a `Modern` system. The legacy data is a list of `(id, email)` tuples. You must also sanitize the data by removing any records belonging to a legal `blacklist`.

**Example Scenario:**
- **Legacy:** `[(101, "ali@mail.com"), (102, "sara@mail.com")]`
- **Modern IDs:** `{101, 105}`
- **Blacklist:** `{"sara@mail.com"}`

**Analysis Logic:**
1.  **Sanitization**: Loop through the legacy records. The record with the email `sara@mail.com` is blacklisted and removed. Only the ID `101` remains valid from Legacy.
2.  **Identify Lost IDs**: Compare the valid Legacy ID (`101`) to the Modern Set (`101, 105`). Since `101` is already in the modern system, no IDs are "lost".
3.  **Identify Ghost IDs**: Check if IDs exist in the Modern system that were never in the sanitized Legacy list. ID `105` is found in Modern but not in Legacy.
4.  **Final Result:** `(set(), {105})`

**Task:**
Write a function `synchronize_databases(legacy_list, modern_set, blacklist)` that:
1. Loops through the legacy list to create a set of IDs, excluding any record in the `blacklist`.
2. Identifies IDs present in the sanitized legacy set but missing from the modern system.
3. Identifies IDs present in the modern system but missing from the sanitized legacy set.
4. Returns a tuple: `(lost_set, ghost_set)`.

---

## Exercise 5: Zero-Trust Access Auditor <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise5/exercise5.py`.

**Situation:**
A "Zero-Trust" security system works on the principle: "Never trust, always verify." You are given a **Baseline set**—a master list of authorized `(user_id, ip_address)` pairs that are officially permitted. You must compare this against a list of **Current Logs** to detect unauthorized access.

**Example Scenario:**
- **Baseline:** `{( "u1", "192.168.1.1" ), ( "u2", "192.168.1.5" )}`
- **Current Logs:** `[( "u1", "192.168.1.1" ), ( "u3", "10.0.0.99" )]`

**Analysis Logic:**
1.  **Find Authorized (Intersection)**: Compare the authorized baseline against the logs. The tuple `( "u1", "192.168.1.1" )` is confirmed.
2.  **Find Alerts (In Logs but not Baseline)**: Identify log entries that were never authorized in the baseline. The login from `u3` at `10.0.0.99` creates an alert.
3.  **Find Inactive (In Baseline but not Logs)**: Identify authorized users who did not log in during this session. User `u2` at `192.168.1.5` is inactive.
4.  **Final Result:** `({("u1", "192.168.1.1")}, {("u3", "10.0.0.99")}, {("u2", "192.168.1.5")})`

**Task:**
Write a function `audit_zero_trust(baseline_set, current_log_list)` that:
1. Converts the current log list into a set of `(user, ip)` tuples.
2. Identifies authorized logins present in both sets.
3. Identifies alert logins present in the current logs but missing from the baseline.
4. Identifies inactive authorized pairs present in the baseline but missing from the current logs.
5. Returns a **tuple** of three sets: `(authorized, alerts, inactive)`.

---

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 6: Sets & Hashing", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
