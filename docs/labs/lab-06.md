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

## Exercise 6: Class Roster Manager <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise6/exercise6.py`.

**Situation:**

A teacher manages a class roster with a maximum capacity of 7 students. Students drop throughout the week. If the class falls below 5 students, random students from the waitlist are added until the class reaches exactly 7 students (or runs out of waitlist).

**Example:**
```
enrolled = {"Alice", "Bob", "Charlie", "Diana", "Eva", "Frank", "George"}
drop_requests = ["Alice", "Charlie", "Diana", "Eva"]
waitlist = {"Henry", "Iris", "Jack"}

Processing drops:
- Alice drops → Removed
- Charlie drops → Removed  
- Diana drops → Removed
- Eva drops → Removed

After drops: {"Bob", "Frank", "George"} (3 students)

Check minimum: 3 < 5 → Need to add from waitlist
Target: 7 students (class limit)
Need to add: 7 - 3 = 4 students
Waitlist has: 3 students (Henry, Iris, Jack)
Randomly add all 3 from waitlist → {"Bob", "Frank", "George", "Henry", "Iris", "Jack"}

Final: 6 students (couldn't reach 7, ran out of waitlist)
Result: 6
```

**Task:**

Write `manage_roster(enrolled, drop_requests, waitlist)` that processes all drop requests, adds from waitlist if fewer than 5 students remain (using `.pop()` until class reaches 7 or waitlist is empty), and returns the count of final enrolled students.

---

## Exercise 7: Playlist Manager <Badge type="warning" text="Task" />

Navigate to `/labs/lab06/exercise7/exercise7.py`.

**Situation:**

A music app manages a playlist. Users add songs one by one from a list, import an entire playlist from Spotify, and remove banned songs. If the playlist gets too long (more than 6 songs), songs are randomly removed until there are exactly 6.

**Example:**
```
current_playlist = {"Song_A", "Song_B", "Song_C"}
add_songs = ["Song_D", "Song_E", "Song_F"]
import_playlist = {"Song_G", "Song_H", "Song_I"}
banned_songs = {"Song_B", "Song_E", "Song_H"}

Step 1 - Add songs individually:
- Song_D added → {"Song_A", "Song_B", "Song_C", "Song_D"}
- Song_E added → {"Song_A", "Song_B", "Song_C", "Song_D", "Song_E"}
- Song_F added → {"Song_A", "Song_B", "Song_C", "Song_D", "Song_E", "Song_F"}

Step 2 - Import entire Spotify playlist:
→ {"Song_A", "Song_B", "Song_C", "Song_D", "Song_E", "Song_F", "Song_G", "Song_H", "Song_I"} (9 songs)

Step 3 - Remove all banned songs at once:
→ {"Song_A", "Song_C", "Song_D", "Song_F", "Song_G", "Song_I"} (6 songs)

Step 4 - Check if playlist too long:
- Current: 6 songs, max: 6 → No random removal needed

Result: 6
```

**Task:**

Write `manage_playlist(current_playlist, add_songs, import_playlist, banned_songs)` that:
- Loops through add_songs and adds each song individually
- Adds all songs from import_playlist in one operation
- Removes all banned_songs in one operation
- While playlist size > 6, randomly removes songs one at a time
- Returns the count of final songs

---

## Exercise 8: Score Analyzer <Badge type="warning" text="Bug Hunt" />

Navigate to `/labs/lab06/exercise8/exercise8.py`.

**Situation:**

A high school teacher uses an automated grading system. After each exam, the system receives student performance data as a list of tuples: `(student_id, score)`. The teacher needs a quick statistical summary to understand class performance and identify high performers.

The system should calculate:
1. **Highest score** - The best performance in the class
2. **Average score** - The class mean to gauge overall performance  
3. **Above average count** - How many students exceeded the class average (for recognition)

**Example Scenario:**
```
Test results received:
("S1", 85) → Student S1 scored 85
("S2", 90) → Student S2 scored 90
("S3", 75) → Student S3 scored 75
("S4", 95) → Student S4 scored 95
("S5", 80) → Student S5 scored 80

Analysis:
- Highest score: 95 (Student S4)
- Class average: (85+90+75+95+80)/5 = 85.0
- Students above average (>85): S2(90), S4(95) = 2 students

Expected output: (95, 85.0, 2)
```

**The Problem:**

The `analyze_scores()` function has **3 bugs** that produce incorrect results. The function fails the automated tests and produces wrong statistics.

**Task:**

1. **Run the code** and observe the incorrect output or error
2. **Use the debugger** to step through the function line by line
3. **Identify all 3 bugs** by examining variable values at each step
4. **Fix the bugs** so all tests pass

---

## Exercise 9: Course Enrollment Checker <Badge type="warning" text="Bug Hunt" />

Navigate to `/labs/lab06/exercise9/exercise9.py`.

**Situation:**

A university's academic advising office needs to verify graduation eligibility. Each degree program has a set of **required courses** that ALL students must complete. The system receives enrollment records as a list of tuples: `(student_id, completed_courses_set)` where each student's completed courses are stored as a set.

The advisor needs to identify which students have completed **all required courses** for their program (students may have taken additional elective courses beyond the requirements).

**Example Scenario:**
```
Computer Science degree requires: {"Math", "Physics", "CS"}

Enrollment records:
("S1", {"Math", "Physics", "CS"}) 
  → Has Math ✓, Physics ✓, CS ✓
  → Completed all requirements → QUALIFIED

("S2", {"Math", "Physics"})
  → Has Math ✓, Physics ✓, but missing CS ✗
  → Incomplete requirements → NOT QUALIFIED

("S3", {"Math", "Physics", "CS", "English"})
  → Has Math ✓, Physics ✓, CS ✓ (plus extra: English)
  → Completed all requirements → QUALIFIED

Expected output: ["S1", "S3"] (sorted alphabetically)
```

**The Problem:**

The `find_qualified_students()` function has **3 bugs** related to set operations. The function returns an empty list when it should find qualified students, and the output isn't sorted.

**Task:**

1. **Run the code** and observe it returns wrong results (likely empty list)
2. **Use the debugger** to step through the set operations
3. **Identify all 3 bugs** by examining the set values
4. **Fix the bugs** so all tests pass

---

## Exercise 10: Event Attendance Tracker <Badge type="tip" text="Refactoring" />

Navigate to `/labs/lab06/exercise10/exercise10.py`.

**Situation:**

A conference organizer tracks attendance using a simple logging system. Each time someone checks into an event, their ID and the event name are recorded as a tuple: `(attendee_id, event_name)`. The organizer wants to identify "power attendees" - people who attended multiple different events - for special recognition.

A previous programmer created a working function to solve this, but the code is messy and hard to maintain. Your task is to **refactor** it into clean, modular helper functions.

**The Messy Code (Reference Only - DO NOT COPY):**

```python
def find_frequent_attendees(attendance_logs, min_events):
    """Find attendees who attended at least min_events unique events."""
    all_attendees = []
    for attendee_id, event_name in attendance_logs:
        if attendee_id not in all_attendees:
            all_attendees.append(attendee_id)
    
    qualified = []
    for attendee_id in all_attendees:
        events_attended = []
        for att_id, event_name in attendance_logs:
            if att_id == attendee_id and event_name not in events_attended:
                events_attended.append(event_name)
        
        if len(events_attended) >= min_events:
            qualified.append(attendee_id)
    
    return sorted(qualified)
```

**Example:**
```
attendance_logs = [
    ("A1", "Workshop_Python"),
    ("A1", "Workshop_Data"),
    ("A2", "Workshop_Python"),
    ("A1", "Workshop_Python"),  # duplicate
    ("A3", "Workshop_Data"),
    ("A2", "Workshop_Data"),
    ("A2", "Workshop_Web")
]

find_frequent_attendees(attendance_logs, 2)
→ ["A1", "A2"]

A1: attended 2 unique events (Python, Data) ✓
A2: attended 3 unique events (Python, Data, Web) ✓
A3: attended 1 event (Data) ✗
```

**Task:**

Refactor the messy code into 4 clean functions:
1. `get_unique_attendees()` - Extract all unique attendee IDs (use set!)
2. `count_unique_events()` - Count unique events for one attendee (use set!)
3. `filter_by_threshold()` - Filter and sort qualified attendees
4. `find_frequent_attendees()` - Main function orchestrating the above helpers

**Hint:** Replace lists with **sets** where appropriate for better performance and cleaner code.

---

## Exercise 11: Course Completion Tracker <Badge type="tip" text="Refactoring" />

Navigate to `/labs/lab06/exercise11/exercise11.py`.

**Situation:**

A university's academic department needs to track which students are at risk of not graduating due to incomplete course requirements. The system receives enrollment records as tuples: `(student_id, course_name)` each time a student completes a course. The department has a set of required courses that ALL students must complete.

The current function works but is messy and inefficient. Your task is to **refactor** it into clean, modular functions.

**The Messy Code (Reference Only - DO NOT COPY):**

```python
def find_incomplete_students(enrollments, required_courses):
    """Find students who haven't completed all required courses."""
    all_students = []
    for student_id, course in enrollments:
        if student_id not in all_students:
            all_students.append(student_id)
    
    incomplete = []
    for student in all_students:
        completed = []
        for sid, course in enrollments:
            if sid == student and course not in completed:
                completed.append(course)
        
        missing = []
        for required in required_courses:
            if required not in completed:
                missing.append(required)
        
        if len(missing) > 0:
            incomplete.append((student, len(missing)))
    
    return sorted(incomplete, key=lambda x: x[1], reverse=True)
```

**Example:**
```
enrollments = [
    ("S1", "Math"),
    ("S1", "Physics"),
    ("S1", "CS"),
    ("S2", "Math"),
    ("S3", "Math"),
    ("S3", "CS")
]
required = {"Math", "Physics", "CS"}

find_incomplete_students(enrollments, required)
→ [("S2", 2), ("S3", 1)]

S1: completed all 3 → 0 missing
S2: missing {Physics, CS} → 2 missing ✓
S3: missing {Physics} → 1 missing ✓
```

**Task:**

Refactor the messy code into 4 clean functions:
1. `get_student_courses()` - Get set of courses for one student
2. `find_missing_courses()` - Find missing courses using set difference
3. `build_student_report()` - Build and sort the report
4. `find_incomplete_students()` - Main function orchestrating the above helpers

**Hint:** Use **set difference** (`-`) to find missing courses efficiently.

---

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 6: Sets & Hashing", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
