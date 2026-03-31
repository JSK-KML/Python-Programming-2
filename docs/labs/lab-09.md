---
outline: deep
title: Lab 9 - DataFrames & Data Analysis
---

# Lab 09: DataFrames & Data Analysis

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Introduction

DataFrames organize tabular data (rows and columns) with built-in methods for analysis. Instead of managing multiple lists and writing loops, DataFrames provide a single structure with automatic calculations.

**Installation (one-time setup):**

Open your terminal and run:
```bash
pip install pandas
```

Navigate to `/labs/lab09/` and open `sandbox.py` to experiment as you learn

---

## DataFrame Structure

A DataFrame has:
- **Columns**: vertical (e.g., Name, Score)
- **Rows**: horizontal records
- **Index**: row labels (default: 0, 1, 2...)

```python
import pandas as pd

df = pd.DataFrame({
    'Name': ["Ali", "Sara"],
    'Score': [85, 92]
})
print(df)
```

Output:
```
    Name  Score
0    Ali     85
1   Sara     92
```

---

## Creating DataFrames

**Method 1: Dictionary of Lists (Recommended)**
```python
df = pd.DataFrame({
    'Name': ["Ali", "Sara"],
    'Math': [85, 92],
    'Science': [78, 88]
})
```

**Method 2: List of Lists**
```python
data = [
    ["Ali", 85, 78],
    ["Sara", 92, 88]
]
df = pd.DataFrame(data, columns=['Name', 'Math', 'Science'])
```
- **Argument 1**: `data` (list of lists)
- **Argument 2**: `columns` (list of column names)
- Each inner list is one row

**Method 3: From CSV**
```python
df = pd.read_csv("data/students.csv")
```
- **Argument**: `filename` (string)
- **Returns**: DataFrame
- Use forward slashes `/` in paths

---

## DataFrame Metadata

### Attributes (No Parentheses)

| Attribute | Returns | Example |
|-----------|---------|---------|
| `df.shape` | (rows, columns) tuple | `(25, 6)` |
| `df.columns` | Column names | `['Name', 'Math']` |
| `df.index` | Row labels | `RangeIndex(0 to 24)` |

```python
print(df.shape)      # (25, 6)
print(df.columns)    # Index(['StudentID', 'Name', ...])
print(list(df.columns))  # ['StudentID', 'Name', ...]
```

---

### Methods (With Parentheses)

| Method | Arguments | Returns | Purpose |
|--------|-----------|---------|---------|
| `df.info()` | None | Prints structure | Shows dtypes, non-null counts |
| `df.head(n)` | n (default 5) | DataFrame | First n rows |
| `df.tail(n)` | n (default 5) | DataFrame | Last n rows |

```python
df.info()        # Prints DataFrame structure
df.head(3)       # Returns first 3 rows
df.tail()        # Returns last 5 rows (default)
```

---

## Column Selection

| Syntax | Returns | Example |
|--------|---------|---------|
| `df.ColumnName` | Series | `df.Math` |
| `df['ColumnName']` | Series | `df['Math']` |
| `df[['Col1', 'Col2']]` | DataFrame | `df[['Math', 'Science']]` |

```python
# Single column
math = df['Math']        # Returns Series

# Multiple columns (note double brackets)
subset = df[['Math', 'Science']]  # Returns DataFrame
```

---

## Row Selection with loc[]

**`loc[]`** uses **label-based** indexing (INCLUSIVE ranges).

| Syntax | Returns | Example |
|--------|---------|---------|
| `df.loc[row]` | Series | `df.loc[2]` |
| `df.loc[start:end]` | DataFrame | `df.loc[1:3]` (includes 3) |
| `df.loc[rows, cols]` | DataFrame | `df.loc[1:3, ['Name', 'Math']]` |
| `df.loc[condition]` | DataFrame | `df.loc[df['Math'] > 80]` |

```python
df.loc[2]                          # Single row
df.loc[1:3]                        # Rows 1, 2, 3 (INCLUSIVE)
df.loc[:, ['Math', 'Science']]     # All rows, specific columns
df.loc[df['Math'] > 80]            # Conditional selection
df.loc[df['Math'] > 80, ['Name']]  # Condition + specific columns
```

---

## Row Selection with iloc[]

**`iloc[]`** uses **position-based** indexing (EXCLUSIVE ranges).

| Syntax | Returns | Example |
|--------|---------|---------|
| `df.iloc[pos]` | Series | `df.iloc[2]` |
| `df.iloc[start:end]` | DataFrame | `df.iloc[1:3]` (excludes 3) |
| `df.iloc[rows, cols]` | DataFrame | `df.iloc[1:3, 0:2]` |

```python
df.iloc[2]          # Row at position 2
df.iloc[1:3]        # Rows 1, 2 (EXCLUSIVE of 3)
df.iloc[1:3, 0:2]   # Rows 1-2, columns 0-1
```

---

### loc vs iloc

| Feature | `loc[]` | `iloc[]` |
|---------|---------|----------|
| Uses | Labels | Positions |
| Range | INCLUSIVE | EXCLUSIVE |
| Example | `df.loc[1:3]` → rows 1,2,3 | `df.iloc[1:3]` → rows 1,2 |

---

## Statistical Methods

**Note:** Statistical methods only work on numeric columns.

| Method | Arguments | Returns | Example |
|--------|-----------|---------|---------|
| `df.describe()` | None | DataFrame | Summary statistics |
| `df.mean()` | None | Series | Average of each column |
| `df.max()` | None | Series | Maximum of each column |
| `df.min()` | None | Series | Minimum of each column |

```python
df.describe()              # Statistics for all numeric columns
df['Math'].mean()          # Average of Math column
df['Math'].max()           # Highest Math score
df['Math'].min()           # Lowest Math score

# With filtering
df.loc[df['Science'] > 80, 'Math'].mean()  # Avg Math where Science > 80
```

---

## Data Visualization with Matplotlib

Visualizations turn data into pictures to see patterns instantly. Matplotlib is Python's charting library.

**Installation (one-time setup):**

Open your terminal and run:
```bash
pip install matplotlib
```

**Import:**
```python
import matplotlib.pyplot as plt
```

::: info WHERE DOES THE CHART APPEAR?
When you run `plt.show()`, a **separate window** will pop up displaying your chart.
It won't appear in VS Code or the terminal - it's a standalone GUI window.
Close the window to continue running your code.
:::

**Two chart types:**
- **Line Chart**: Shows trends (values across sequence)
- **Histogram**: Shows distribution (how data spreads)

---

## Line Charts

Line charts connect points to show trends. Use for: scores across students, temperature over time.

**Basic example** (see `demo_line.py`):

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [85, 92, 78, 88, 95]

plt.plot(x, y)              # Create line (x=horizontal, y=vertical)
plt.xlabel("Student Number") # Label x-axis
plt.ylabel("Math Score")     # Label y-axis
plt.title("Math Scores")     # Add title
plt.show()                   # Display (required!)
```

**With DataFrame** (see `demo_line_df.py`):

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/students.csv")
plt.plot(df.index, df['Math'])  # df.index = row numbers (0,1,2...)
plt.xlabel("Student Index")
plt.ylabel("Math Score")
plt.title("Math Scores")
plt.show()
```

---

## Histograms

Histograms group data into ranges (bins) and count how many fall in each. Use to see: how scores are distributed.

**What are bins?**
If scores are 60-100 and `bins=10`, creates 10 ranges: 60-64, 64-68, 68-72, etc.
Taller bars = more values in that range.

**Basic example** (see `demo_histogram.py`):

```python
import matplotlib.pyplot as plt

scores = [85, 92, 78, 88, 95, 72, 68, 81, 87, 90]
plt.hist(scores, bins=10)  # bins=10 is standard
plt.xlabel("Score Range")
plt.ylabel("Frequency")
plt.title("Score Distribution")
plt.show()
```

**With DataFrame** (see `demo_histogram_df.py`):

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/students.csv")
plt.hist(df['Math'], bins=10)
plt.xlabel("Math Score")
plt.ylabel("Frequency")
plt.title("Math Score Distribution")
plt.show()
```

---

## Overlapping Histograms (Alpha & Legend)

**Problem**: Comparing two distributions on same chart - one hides the other.
**Solution**: Use `alpha` (transparency) so both visible.

**Alpha values**:
- `1.0` = solid (default)
- `0.5` = 50% transparent
- `0.0` = invisible

**Legend**: Shows which color = which data. Need both `label` in plot + `plt.legend()`.

**Example** (see `demo_alpha.py`):

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/students.csv")

plt.hist(df['Math'], bins=10, alpha=0.5, label="Math")
plt.hist(df['Science'], bins=10, alpha=0.5, label="Science")
plt.xlabel("Score")
plt.ylabel("Frequency")
plt.title("Math vs Science Distribution")
plt.legend()  # Shows color labels
plt.show()
```

---

## Quick Reference

| Function | Arguments | Purpose |
|----------|-----------|---------|
| `plt.plot(x, y)` | x-values, y-values | Line chart |
| `plt.hist(data, bins)` | data, bins (int) | Histogram |
| `plt.hist(data, bins, alpha, label)` | data, bins, alpha (0-1), label (str) | Transparent histogram with label |
| `plt.xlabel(text)` | string | Label x-axis |
| `plt.ylabel(text)` | string | Label y-axis |
| `plt.title(text)` | string | Add title |
| `plt.legend()` | None | Show legend |
| `plt.show()` | None | Display chart |

---

## Common Mistakes

See `crash_test.py` for examples. Common errors:
- Forgetting `import matplotlib.pyplot as plt`
- Missing `plt.show()` at the end
- Wrong data format (string instead of list)
- Using `label` without `plt.legend()`
- Alpha value outside 0.0-1.0 range

---

## Exercises

## Exercise 1: DataFrame Exploration <Badge type="warning" text="Task" />

Navigate to `/labs/lab09/exercise1/exercise1.py`.

**Background:**

A teacher needs to explore student exam scores and get basic statistics.

**Task:**

Write a function `explore_data(filename)` that:
1. Loads CSV into DataFrame
2. Calculates required statistics
3. Returns dictionary with:
   - `"total_students"`: number of rows
   - `"subjects"`: list of subject columns (Math, Science, English only)
   - `"math_average"`: average Math score (rounded to 1 decimal)
   - `"highest_math_student"`: name of student with highest Math score

**Example:**
```python
result = explore_data("data/students.csv")
print(result)
# {
#     "total_students": 25,
#     "subjects": ["Math", "Science", "English"],
#     "math_average": 84.0,
#     "highest_math_student": "Hassan"
# }
```

---

## Exercise 2: Subject Performance Comparison <Badge type="warning" text="Task" />

Navigate to `/labs/lab09/exercise2/exercise2.py`.

**Background:**

Compare which subject has the best and worst average performance.

**Task:**

Write a function `compare_averages(filename)` that:
1. Loads CSV
2. Calculates mean for Math, Science, English (rounded to 1 decimal)
3. Identifies best and worst subjects
4. Returns dictionary

**Example:**
```python
result = compare_averages("data/students.csv")
print(result)
# {
#     "Math": 84.0,
#     "Science": 82.9,
#     "English": 84.4,
#     "best_subject": "English",
#     "worst_subject": "Science"
# }
```

---

## Exercise 3: Visualize Math Scores <Badge type="warning" text="Task" />

Navigate to `/labs/lab09/exercise3/exercise3.py`.

**Background:**

Show how Math scores vary across all students using a line chart.

**Task:**

Write a function `show_math_trend(filename)` that:
1. Loads CSV
2. Extracts Math column
3. Creates line chart:
   - x-axis = student index (`df.index`)
   - y-axis = Math scores
   - xlabel = "Student Index"
   - ylabel = "Math Score"
   - title = "Math Score Trends"
4. Calls `plt.show()`
5. Returns number of students (for testing)

**Example:**
```python
count = show_math_trend("data/students.csv")
# Chart window appears showing Math scores
print(count)  # 25
```

---

## Exercise 4: Visualize Science Distribution <Badge type="warning" text="Task" />

Navigate to `/labs/lab09/exercise4/exercise4.py`.

**Background:**

Show how Science scores are distributed using a histogram.

**Task:**

Write a function `show_science_distribution(filename)` that:
1. Loads CSV
2. Extracts Science column
3. Creates histogram:
   - data = Science scores
   - bins = 10
   - xlabel = "Science Score"
   - ylabel = "Frequency"
   - title = "Science Score Distribution"
4. Calls `plt.show()`
5. Returns number of students (for testing)

**Example:**
```python
count = show_science_distribution("data/students.csv")
# Chart window appears showing Science score distribution
print(count)  # 25
```

---

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like `"Complete Lab 9: DataFrames & Data Analysis"`, and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
