---
outline: deep
title: Lab 8 - Files
---

# Lab 08: Files

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Why Do We Need Files?

Launch **VS Code** and open the `sandbox.py` file in `/labs/lab08/`. We'll discover why storing data only in memory creates a fundamental problem.

### The Problem: Data Doesn't Persist

Imagine you're building a student grade tracker. Copy this code into your `sandbox.py`:

```python
scores = []
scores.append(85)
scores.append(92)
scores.append(78)

print("Scores:", scores)
```

Run this code. It works perfectly. But what happens when the program ends?

**Try this:** Run the program again. What do you see?

```python
# Second run starts here
print(scores)  # NameError: scores is not defined
```

Every time the program runs, it starts from scratch. All data in memory is erased when the program terminates.

::: warning PROBLEM
Data stored in variables exists only while the program runs. Once it stops, everything is lost. There's no way to save your work between sessions.
:::

### The Solution: Files

Files store data on disk. Data persists after the program ends.

Copy this code into your `sandbox.py`:

```python
# Write scores to a file
f = open("data/scores.txt", "w")
f.write("85\n")
f.write("92\n")
f.write("78\n")
f.close()

print("Scores saved to file!")
```

Run this code. Now check the `data/` folder. You'll see `scores.txt` with your data inside.

**The magic:** Close the program. Run it again. The file still exists. Your data survived!

Now read it back:

```python
# Read scores from the file
f = open("data/scores.txt", "r")
data = f.read()
print(data)
f.close()
```

**Output:**
```
85
92
78
```

The data persists. Files are permanent storage.

---

## The 4-Step File Workflow

Every file operation follows the same pattern:

```
1. OPEN   →   2. READ or WRITE   →   3. PROCESS   →   4. CLOSE
```

Let's break down each step.

### Step 1: Open

Open `demo_read.py` and type:

```python
f = open("data/demofile.txt", "r")
```

**Breaking it down:**
- `open()` - Built-in function to access a file
- `"data/demofile.txt"` - Path to the file (relative path from current folder)
- `"r"` - Mode (read-only)

**File Modes:**

| Mode | Name | Action | File Must Exist? |
|------|------|--------|------------------|
| `r` | Read | Read only | Yes (error if missing) |
| `w` | Write | Write only | No (creates or **overwrites**) |
| `a` | Append | Write to end | No (creates or appends) |

::: danger PRINCIPLE: Choose the Right Mode
`"w"` mode **destroys** existing content! Use `"a"` when you want to preserve and add to files. Always think about whether you need to replace (`"w"`) or add to (`"a"`) existing data.
:::

::: warning PRINCIPLE: Validate File Existence
If you try to open a file in `"r"` mode that doesn't exist, Python will crash with `FileNotFoundError`. Before reading a file, make sure it exists—or create it first using `"w"` mode.

**Example:**
```python
# Create the file first
f = open("data/scores.txt", "w")
f.write("85\n")
f.close()

# Now safe to read
f = open("data/scores.txt", "r")
data = f.read()
f.close()
```
:::

### Step 2a: Read

There are three ways to read a file:

```python
f = open("data/demofile.txt", "r")

# Method 1: Read entire file as one string
content = f.read()
print(content)
print(type(content))  # <class 'str'>

f.close()
```

**Output:**
```
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!
<class 'str'>
```

**Method 2: Read one line at a time:**

```python
f = open("data/demofile.txt", "r")
line1 = f.readline()
line2 = f.readline()
print(line1)
print(line2)
f.close()
```

Each call to `readline()` advances to the next line.

**Method 3: Read all lines into a list:**

```python
f = open("data/demofile.txt", "r")
lines = f.readlines()
print(lines)
f.close()
```

**Output:**
```
['Hello! Welcome to demofile.txt\n', 'This file is for testing purposes.\n', 'Good Luck!\n']
```

Each element is one line, with `\n` included.

### Step 2b: Write

Open `demo_write.py` and type:

```python
f = open("data/output.txt", "w")
f.write("Ali: 85\n")
f.write("Sara: 92\n")
f.write("Ahmad: 78\n")
f.close()

print("Data written to data/output.txt")
```

Run this code. Check `data/output.txt`. The file now contains your data.

::: warning PRINCIPLE: Include `\n` in Every Write
**Always** include `\n` at the end of each write! Without it, lines merge together into one continuous string.

**Wrong:**
```python
f.write("Ali: 85")
f.write("Sara: 92")
# Result: "Ali: 85Sara: 92" (merged!)
```

**Correct:**
```python
f.write("Ali: 85\n")
f.write("Sara: 92\n")
# Result: Two separate lines
```
:::

### Step 3: Process

Between reading and writing, you process the data using everything you've learned: lists, dictionaries, sets, functions.

```python
# Read
f = open("data/scores.txt", "r")
lines = f.readlines()
f.close()

# Process
scores = []
for line in lines:
    score = int(line.strip())
    scores.append(score)

average = sum(scores) / len(scores)

# Write
f = open("data/report.txt", "w")
f.write(f"Average: {average}\n")
f.close()
```

::: tip PRINCIPLE: Use a Modular Approach
Wrap file operations in functions to avoid repeating code throughout your program. This makes your code cleaner and easier to debug.

**Instead of repeating this everywhere:**
```python
f = open("data/scores.txt", "r")
lines = f.readlines()
f.close()
```

**Write a function once:**
```python
def read_scores(filename):
    f = open(filename, "r")
    lines = f.readlines()
    f.close()
    return lines

scores = read_scores("data/scores.txt")
```
:::

### Step 4: Close

**Always** call `f.close()` when you're done.

::: danger PRINCIPLE: Always Close Files
Every `open()` must have a matching `f.close()`. Unclosed files risk data loss.

**Why closing matters:**
- Releases the file from the program's control
- Ensures all written data is saved (flushed) to disk
- Prevents resource leaks
- Allows other programs to access the file

**Wrong:**
```python
f = open("data.txt", "w")
f.write("hello\n")
# File not closed — data may not be saved!
```

**Correct:**
```python
f = open("data.txt", "w")
f.write("hello\n")
f.close()  # ✅ Data guaranteed to be saved
```
:::

---

## Working with CSV Files

CSV (Comma Separated Values) files store structured tabular data. Python requires the `csv` module to work with them properly.

### CSV Structure

```csv
Name,Score,Grade
Ali,85,A
Sara,92,A+
Ahmad,78,B
```

**Components:**
- **Header** - First row describing columns
- **Records** - Each row is one entry
- **Fields** - Values separated by commas

### Reading CSV Files

Open `demo_csv.py` and type:

```python
import csv

# Read CSV file
f = open("data/students.csv", "r", newline="")
reader = csv.reader(f)

for row in reader:
    print(row)

f.close()
```

**Output:**
```
['Name', 'Score', 'Grade']
['Ali', '85', 'A']
['Sara', '92', 'A+']
['Ahmad', '78', 'B']
```

Each row is a **list of strings**.

::: tip PRINCIPLE: Use `newline=""` for CSV Files
Always use `newline=""` when opening CSV files. This prevents extra blank lines from appearing between rows on some operating systems (especially Windows).

**Wrong:**
```python
f = open("data.csv", "w")  # Missing newline=""
writer = csv.writer(f)
writer.writerow(["A", "B"])
# May create extra blank lines!
```

**Correct:**
```python
f = open("data.csv", "w", newline="")  # ✅ Prevents blank lines
writer = csv.writer(f)
writer.writerow(["A", "B"])
```
:::

**Saving CSV data to a list:**

```python
import csv

f = open("data/students.csv", "r", newline="")
reader = csv.reader(f)

content = []
for row in reader:
    content.append(row)

f.close()
print(content)
```

### Writing CSV Files

```python
import csv

f = open("data/output.csv", "w", newline="")
writer = csv.writer(f)

# Write header
writer.writerow(["Name", "Score"])

# Write data rows
writer.writerow(["Ali", 85])
writer.writerow(["Sara", 92])
writer.writerow(["Ahmad", 78])

f.close()
```

**Writing multiple rows at once:**

```python
import csv

records = [
    ["Name", "Score"],
    ["Ali", 85],
    ["Sara", 92],
    ["Ahmad", 78]
]

f = open("data/output.csv", "w", newline="")
writer = csv.writer(f)
writer.writerows(records)
f.close()
```

---

## Common Mistakes

Open `crash_test.py` to see common errors:

**1. Reading a file that doesn't exist:**
```python
f = open("data/missing.txt", "r")  # FileNotFoundError
```

**2. Wrong mode overwrites data:**
```python
f = open("data/scores.txt", "w")  # Destroys existing content
```

**3. Missing `\n` when writing:**
```python
f.write("Ali")
f.write("Sara")  # Result: "AliSara" (merged!)
```

**4. Missing `import csv` for CSV files:**
```python
reader = csv.reader(f)  # NameError: csv is not defined
```

**5. Missing `newline=""` for CSV:**
```python
f = open("data.csv", "w")  # Extra blank lines between rows
```

**6. Not closing the file:**
```python
f = open("data.txt", "w")
f.write("hello\n")
# File not closed — data may not be saved
```

---

## Exercise 1: Simple Score Filter <Badge type="warning" text="Task" />

Navigate to `/labs/lab08/exercise1/exercise1.py`.

**Situation:**

A teacher has a text file with student scores. You need to filter out only the students who passed (score >= 80) and write them to a new file.

**Data Format:**

`data/scores.txt`:
```
S001 85
S002 92
S003 78
S004 88
S005 65
S006 91
```

**Task:**

Your function `filter_passing_scores(input_file, output_file)` should:

- Read the scores file
- Find all students with score >= 80
- Write passing students to output file (same format: `student_id score`)
- Return the count of passing students

**Expected Output Format (`lab08/exercise1/data/passing.txt`):**
```
S001 85
S002 92
S004 88
S006 91
```
Each line contains the student ID, a space, then their score. Only students with score >= 80 are included.

---

## Exercise 2: Text File Merger <Badge type="warning" text="Task" />

Navigate to `/labs/lab08/exercise2/exercise2.py`.

**Situation:**

You have two text files containing names (one name per line). Some names appear in both files. You need to merge them into a single list with no duplicates, sorted alphabetically.

**Data Format:**

`data/list1.txt` and `data/list2.txt` each contain one name per line.

`data/list1.txt`:
```
Alice
Bob
Charlie
Alice
```

`data/list2.txt`:
```
Bob
David
Eve
```

**Task:**

Your function `merge_lists(file1, file2, output_file)` should:

- Read both files
- Combine all names and remove duplicates
- Sort names alphabetically
- Write unique sorted names to output file (one per line)
- Return the count of unique names

**Expected Output Format (`lab08/exercise2/data/merged.txt`):**
```
Alice
Bob
Charlie
David
Eve
```
All unique names from both files, sorted alphabetically, one per line.

---

## Exercise 3: Product Price Lookup <Badge type="warning" text="Task" />

Navigate to `/labs/lab08/exercise3/exercise3.py`.

**Situation:**

You have a products catalog CSV and an order CSV. You need to calculate the total cost for each product in the order.

**Data Format:**

`data/products.csv`:
```csv
product_id,product_name,price
P001,Laptop,1200.00
P002,Mouse,25.00
P003,Keyboard,75.00
```

`data/order.csv`:
```csv
product_id,quantity
P001,2
P002,5
P003,3
```

**Task:**

Your function `calculate_order_total(products_file, order_file, output_file)` should:

- Read products CSV and store prices in a dictionary
- Read order CSV
- For each order item, calculate total cost: `price * quantity`
- Write results to output CSV with header: `product_id,total_cost`
- Return the grand total (sum of all total costs)

**Expected Output Format (`lab08/exercise3/data/total.csv`):**
```csv
product_id,total_cost
P001,2400.00
P002,125.00
P003,225.00
```
CSV format showing product_id and its total cost (price × quantity).

---

## Exercise 4: Student Grade Calculator <Badge type="warning" text="Task" />

Navigate to `/labs/lab08/exercise4/exercise4.py`.

**Situation:**

You have a CSV file with student midterm and final exam scores. You need to calculate their final grade using a weighted formula.

**Data Format:**

`data/scores.csv`:
```csv
student_id,midterm,final
S001,85,90
S002,78,82
S003,92,88
S004,65,75
```

**Task:**

Your function `calculate_final_grades(input_file, output_file)` should:

- Read the scores CSV
- Calculate final grade for each student: `(midterm * 0.4) + (final * 0.6)`
- Write results to output CSV with header: `student_id,final_grade`
- Return the average of all final grades

**Expected Output Format (`lab08/exercise4/data/grades.csv`):**
```csv
student_id,final_grade
S001,88.00
S002,80.00
S003,90.40
S004,71.00
```
CSV format showing each student's calculated final grade based on the weighted formula.

---

## Exercise 5: Sales Summary <Badge type="warning" text="Task" />

Navigate to `/labs/lab08/exercise5/exercise5.py`.

**Situation:**

You have a CSV file with daily sales data. You need to calculate the total revenue and write a summary report.

**Data Format:**

`data/sales.csv`:
```csv
product,quantity,price
Laptop,5,1200.00
Mouse,20,25.00
Keyboard,10,75.00
Monitor,3,300.00
```

**Task:**

Your function `summarize_sales(input_file, output_file)` should:

- Read the sales CSV
- Calculate revenue for each row: `quantity * price`
- Calculate total revenue, average revenue, highest revenue, and lowest revenue
- Write summary to output text file with all four statistics
- Return a tuple: `(total, average, highest, lowest)`

**Expected Output Format (`lab08/exercise5/data/summary.txt`):**
```
Total Revenue: $8150.00
Average Revenue: $2037.50
Highest Revenue: $6000.00
Lowest Revenue: $500.00
```
A text file showing total, average, highest, and lowest revenue across all sales.

---

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 8: Files", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
