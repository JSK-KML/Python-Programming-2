---
outline: deep
title: Lab 4 - List 2
---

# Lab 04: Lists 2

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## Introduction to the Debugger

Consider the following code. It contains a bug, but finding it by reading alone is difficult.

```python
def find_score_range(scores):
    """Find the highest and lowest scores."""
    highest = scores[0]
    lowest = scores[0]
    
    for i in range(1, len(scores)):
        score = scores[i]
        if score > highest:
            highest = score
        if score < highest:
            lowest = score
    
    return (highest, lowest)

test_scores = [72, 85, 90, 68, 95, 78, 88]
result = find_score_range(test_scores)
print(f"Highest: {result[0]}, Lowest: {result[1]}")
# Expected: Highest: 95, Lowest: 68
# Actual:   Highest: 95, Lowest: 88
```

The output is incorrect. The function reports the lowest score as `88` when it should be `68`. 

The bug exists in a single character. Tracing through this logic manually is error-prone and time-consuming - this is precisely where a **debugger** becomes invaluable.

A debugger allows you to:
- **Step through code line-by-line** and observe execution flow
- **Inspect variable values** at each step
- **Set breakpoints** to pause execution at specific lines
- **Identify exactly where** the logic deviates from expectations


### Using A Debugger

Navigate to `/labs/lab04/exercise1/exercise1.py`

To use a debugger, first you need to set a breakpoint. A breakpoint is a line of code where the debugger will pause execution. To set a breakpoint, click on the left side of the line number. If you try to hover you mouse over the area, you will see some red dot highlight appear.


Set a breakpoint on the line number as below.

<p align="center">
    <img src="/labs/lab-04/lab-4-1.png" alt="drawing" width="400"/>
</p>

Where should you set a breakpoint? Recall that Python read the program top to bottom. Putting the breakpoint at the first line inside a function allow you to "hang" the program at the start of the function. This allow you to see the how the whole function works.

However, if later on, when you know how to use the debugger properly, if you have determine that you only care on how the bottom part of the function works, then you can put the breakpoint a little lower.

For now we put it at the top of the function.

Next, on your VS Code sidebar, click on the rub and bug icon. Then proceed to click `Show automatic Python configurations`

<p align="center">
    <img src="/labs/lab-04/lab-4-2.png" alt="drawing" width="300"/>
</p>

This will promt you for configurations, choose the top one, the one named after your repo, which in this example is `cp125-class-repo`

<p align="center">
    <img src="/labs/lab-04/lab-4-3.png" alt="drawing" width="400"/>
</p>

Now that we have set up our debugger, we can use it . Finishing the configurations will automatically trigger the debugger. But in the case that it doenst, click the run debugger button as below. Next time you want to run the debugger, you can also the button to run the debugger.

<p align="center">
    <img src="/labs/lab-04/lab-4-4.png" alt="drawing" width="300"/>
</p>

Once the debugger is running, you can see a floating bar at the top of the code to control the debugger. You can also see that the line of which you set a breakpoint now is colour yellow. You have "hang" or stop the program at the breakpoint. 

The yellow line indicate the current code that is now being executed.

<p align="center">
    <img src="/labs/lab-04/lab-4-5.png" alt="drawing" width="400"/>
</p>

Try clicking the blue downward arrow to move the program.

<p align="center">
    <img src="/labs/lab-04/lab-4-6.png" alt="drawing" width="200"/>
</p>

You will notice that the yellow highlight has moved to the next line. This indicates that the debugger has successfully executed the previous line and is now paused, waiting to run the currently highlighted instruction. 

<p align="center">
    <img src="/labs/lab-04/lab-4-7.png" alt="drawing" width="400"/>
</p>

However, moving the code line by line is useless if you dont know the state of the program. 

What is the state of a program? State of the program is the value of the variable at any time during program execution. 

To see the state of the program, look that the left side of VS Code, you will see a section called `Variables`. Currently because we only go the second line of the program, only two variable have been declared, `scores` which is the passed argument and `highest` the line of code insdie the function. 

Remember, the highlighted line is the line that is about to be executed, not executed yet. Thats why the variable `lowest`, at this moment in the program, hasnt been declared yet.

<p align="center">
    <img src="/labs/lab-04/lab-4-8.png" alt="drawing" width="400"/>
</p>

You can also reverse the program execution, to do that , in the floating bar, click the arrow upward icon. This will cause the program to reverse its execution.

To stop the debugger, click the red square icon in the floating bar. 



## Exercise 1: Find the Bug <Badge type="warning" text="Task" />

Navigate to `/labs/lab04/exercise1/exercise1.py`.

Using the debugger, find and fix the bug in the `find_score_range` function shown earlier.

**Your Task:**

1. Use the debugger to step through the code line-by-line
2. Observe the values of `highest` and `lowest` as the loop iterates
3. Identify where the logic goes wrong
4. Fix the bug so the function correctly returns for the test case

::: tip

Eventhough some of you might be able to find the bug just by reading it. It is still highly recommended to use the debugger to train you skill as this is the first time you are using it.

:::

---

## Exercise 2: Grade Calculator <Badge type="warning" text="Task" />

Navigate to `/labs/lab04/exercise2/exercise2.py`.

This program calculates class statistics for student scores. However, it contains bugs.



**Your Task:**

1. Run the code and observe the incorrect output
2. Use the debugger to step through each function
3. Find and fix the bugs



## Exercise 3: Inventory Tracker <Badge type="warning" text="Task" />

Navigate to `/labs/lab04/exercise3/exercise3.py`.

This program tracks inventory and calculates restock costs. However, it contains bugs.


**Your Task:**

1. Run the code and observe the incorrect output
2. Use the debugger to step through each function
3. Find and fix the bugs

---

## List Functions

Python provides built-in functions that work directly on lists. These save you from writing loops for common operations.

### Getting List Size with len()

The `len()` function returns how many elements are in a list.

```python
scores = [85, 92, 78, 88, 95]
count = len(scores)
print(f"Number of scores: {count}")  # Output: 5
```

### Finding Extremes with min() and max()

The `min()` function returns the smallest value, `max()` returns the largest.

```python
temperatures = [28, 32, 25, 35, 30]

lowest = min(temperatures)
highest = max(temperatures)

print(f"Lowest: {lowest}")   # Output: 25
print(f"Highest: {highest}") # Output: 35
```

### Adding Values with sum()

The `sum()` function adds all numeric values in a list.

```python
prices = [19.99, 24.50, 15.00, 32.00]
total = sum(prices)
print(f"Total: ${total:.2f}")  # Output: $91.49
```

### Combining Functions

These functions work together for common calculations:

```python
scores = [85, 92, 78, 88, 95]

total = sum(scores)
count = len(scores)
average = total / count

print(f"Average: {average}")  # Output: 87.6
```


## Exercise 4: Split Performance Analyzer <Badge type="warning" text="Task" />

Navigate to `/labs/lab04/exercise4/exercise4.py`.

**Situation:**

A running coach tracks lap times for athletes. To evaluate pacing strategy, the coach compares the athlete's **first half** performance to their **second half**. An athlete "faded" if their second half average time is worse (higher) than their first half average.

If the number of laps is odd, the **first half includes the middle lap** (first half is larger).

**Example:**
```
Lap times: [60, 62, 61, 63, 65, 68, 70, 72]

First half: [60, 62, 61, 63] → Average: 61.5
Second half: [65, 68, 70, 72] → Average: 68.75

Second half average (68.75) > First half average (61.5)
→ Athlete faded → Return True
```

**Example (odd length):**
```
Lap times: [50, 55, 60, 65, 70]

First half: [50, 55, 60] → Average: 55.0
Second half: [65, 70] → Average: 67.5

→ Athlete faded → Return True
```

**Task:**

Write functions that:
1. Split the lap times into first and second halves (first half is larger if odd)
2. Calculate the average for each half
3. Return `True` if the athlete faded, `False` if they finished strong

---

## Building Lists with append()

So far you've created lists with values already inside. But what if you need to build a list piece by piece?

### The append() Method

The `append()` method adds an element to the end of a list.

```python
fruits = ["apple", "banana"]
print(fruits)  # ['apple', 'banana']

fruits.append("cherry")
print(fruits)  # ['apple', 'banana', 'cherry']

fruits.append("durian")
print(fruits)  # ['apple', 'banana', 'cherry', 'durian']
```

Notice the dot notation: `fruits.append()`. This is a **method** - a function that belongs to the list.

### Building Lists with Loops

The real power of `append()` comes when combined with loops. Start with an empty list and add items based on conditions.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = []

for num in numbers:
    if num % 2 == 0:
        evens.append(num)

print(evens)  # [2, 4, 6, 8, 10]
```

This pattern is extremely common:
1. Start with an empty list
2. Loop through data
3. If condition is met, append to the list

### Another Example: Filtering Scores

```python
all_scores = [45, 82, 67, 91, 55, 78, 88]
passing_scores = []

for score in all_scores:
    if score >= 60:
        passing_scores.append(score)

print(f"Passing scores: {passing_scores}")  # [82, 67, 91, 78, 88]
print(f"Count: {len(passing_scores)}")      # 5
```

Copy this code and run it. Try changing the passing threshold to 70 and see what happens.

## Exercise 5: Momentum Tracker <Badge type="warning" text="Task" />

Navigate to `/labs/lab04/exercise5/exercise5.py`.

**Situation:**

A stock analysis tool identifies "momentum days" - days where BOTH conditions are met:
1. The price increased from the previous day
2. The increase was LARGER than the previous day's increase

The system builds a list of indices for all momentum days.

**Example:**
```
Prices: [100, 102, 105, 107, 106, 108, 112, 114]
Changes:     [+2,  +3,  +2,  -1,  +2,  +4,  +2]

Day 2 (index 2): Change +3, Previous change +2
  → Positive AND bigger than previous → Momentum day

Day 5 (index 5): Change +2, Previous change -1
  → Positive AND bigger than previous → Momentum day

Day 6 (index 6): Change +4, Previous change +2
  → Positive AND bigger than previous → Momentum day

Momentum days: [2, 5, 6]
```

**Task:**

Write functions that:
1. Calculate the price change for a given day
2. Determine if a specific day is a momentum day
3. Build and return a list of all momentum day indices



## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 4: Lists 2", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
