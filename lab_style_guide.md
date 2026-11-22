# Lab Style Guide

This document defines the standards for writing labs. Follow these rules to ensure all labs have a consistent look and feel.

---

## 1. Required Sections (In Order)

Every lab **must** include these sections in this exact order:

1.  **Title & Frontmatter**
    ```yaml
    ---
    outline: deep
    title: Lab X - [Topic Name]
    ---
    # Lab XX: [Topic Name]
    ```

2.  **Pull and Update in VS Code** (Boilerplate - copy verbatim)
    ```markdown
    ## Pull and Update in VS Code

    Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

    Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

    <p align="center">
        <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
    </p>
    ```

3.  **Concept Introduction** - Explain the "Why" and "What".
4.  **Guided Sandbox** - Students follow along in `exercise.py`.
5.  **Exercises** - Graded tasks, each in its own folder (`exerciseX/`).
6.  **Commit and Push Your Work** (Boilerplate - copy verbatim)
    ```markdown
    ## Commit and Push Your Work

    After completing all exercises, save all your files and commit them to your repository...
    ```

---

## 2. Badge Usage

Use **only one badge type** for questions and tasks:

```html
<Badge type="warning" text="Task" />
```

**Example:**
```markdown
### Exercise 1: Score Calculator <Badge type="warning" text="Task" />
```

**Do NOT use:** `<Badge type="tip" text="Question" />` or other badge variants for exercises.

---

## 3. Language & Tone

| Rule | Example |
|------|---------|
| **Use "you" (second person)** | "Before you start...", "You will see..." |
| **Give direct commands** | "Copy this code...", "Run this...", "Try changing..." |
| **Prompt reflection after code** | "What do you see?", "Can you figure out...?" |
| **Explain the "Why"** | "**Why 4 spaces?** The answer is..." |
| **Use analogies** | "Think of it like a toolbox..." |
| **Lower stakes** | "Don't worry about...", "Take it easy." |

---

## 4. Pedagogical Flow

### A. Staged Evolution
Start with simple/incomplete code. Evolve it step-by-step to reveal the need for new concepts.

**Pattern:**
1.  Show simple code.
2.  Ask a question that reveals its limitation.
    > ::: warning PROBLEM
    > Our program only handles the success case.
3.  Introduce the new feature that solves it.

### B. Show "Wrong Code"
Deliberately show broken code or common mistakes. Explain *why* it's wrong.

**Pattern:**
```python
# WRONG - This will cause an infinite loop!
while count < 5:
    print(count)
    # Forgot to increment count!
```
> "What do you think will happen?"

### C. Prompt Experimentation
After working code, tell students to try different values.

> "Test this with different values: `marks = 95`, `marks = 45`, `marks = 0`."

---

## 5. Visuals

### A. Screenshots
-   Centered with `<p align="center">`.
-   Fixed width: `width="300"` or `width="400"`.
-   Used for VS Code UI guidance.

### B. ASCII Diagrams
Use for abstract concepts that can't be captured in a screenshot.

### C. Tables
Use for summarizing operators, comparisons, or reference material.

---

## 6. Callout Blocks

Use VitePress `:::` blocks:

| Type | Usage |
|------|-------|
| `::: tip` | Best practices, helpful hints. |
| `::: warning` | Common mistakes, pitfalls, problems with current code. |
| `::: danger` | Critical information, things that will break. |
| `::: info` | General notes (use sparingly). |

---

## 7. Exercise Format

### A. Standard Exercise Format (Most Labs)

Each exercise should:
1.  Be in its own folder: `/labs/labXX/exerciseY/`.
2.  Have a main file: `exerciseY.py`.
3.  Provide skeleton code with `input()` and `print()` pre-written.
4.  Use the `# TODO: Your code here` comment.

**Example:**
```python
price = float(input())

# TODO: Your code here

print(item_count)
print(f"{total_cost:.2f}")
```

### B. File-Based Exercise Format (Lab 08 - Files)

For file operations, use functions with file paths as parameters:

**Example:**
```python
def process_data(filename):
    """
    Process data from file.

    Args:
        filename: path to input file (e.g., "data/input.txt")

    Returns:
        result
    """
    # TODO: Implement this function
    pass


# Test your code here
result = process_data("data/input.txt")
print(result)
```

**Key differences:**
- Use **relative paths** from exercise folder (e.g., `"data/file.txt"`)
- NO `os.path.join()` or `os.path.dirname(__file__)` - keep it simple
- NO `if __name__ == "__main__":` - just call the function directly
- Functions accept file paths as string parameters

---

## 8. Exercise Design Philosophy

### A. Non-Linear Problem Solving

Exercises **must require non-linear thinking**. Students should not be able to solve them by simply reading the problem statement.

**Bad (Linear/Obvious):**
```markdown
Exercise: Read a file and print its contents.
```
❌ Too straightforward - solution is in the description.

**Good (Non-Linear):**
```markdown
Exercise: Read student scores from `midterm.csv` and `final.csv`. Calculate final grades (0.4*midterm + 0.6*final) for students appearing in BOTH files. Exclude any students listed in `withdrawn.txt`. Write results sorted by score to `output.csv`.
```
✅ Requires combining multiple concepts: file I/O, CSV, dictionaries, sets, filtering, sorting.

### B. Multi-Concept Integration

Each exercise should combine **multiple topics** from previous labs:

**Required:**
- Build on ALL previous topics (functions, lists, dicts, sets, tuples)
- Require 3+ distinct operations/transformations
- No obvious single-step solutions

**Example Integration:**
- Files + Dictionaries (aggregate data from CSV)
- Files + Sets (find unique/duplicate entries)
- Files + Lists + Sorting (filter and sort data)
- Multiple file sources merged with dictionaries

### C. Real-World Scenarios

Every exercise must have a **realistic context**:

**Pattern:**
```markdown
**Situation:**
[Real-world context explaining WHY this task matters]

**Data Format:**
[Explain the structure of input data]

**Task:**
[What the student must accomplish]
```

**Example:**
> **Situation:** A university registrar merges grades from multiple professors. Some students withdrew mid-semester.
>
> **Task:** Calculate final grades only for active students appearing in all sources.

---

## 9. Testing Requirements (cp125-class-repo)

Same layout and output as `cp115-class-repo`. `labs/lab01` is the reference.

### A. Test File Structure

```
labs/labXX/
├── conftest.py                     # Clean output for the whole lab (copy from labs/lab01)
└── exerciseY/
    ├── exerciseY.py                # Student file
    ├── data/                       # Sample input files (if needed)
    └── test/
        └── test_labXX_exerciseY.py # Pytest file (10 cases)
```

### B. Test File Naming Convention

**Pattern:** `test_labXX_exerciseY.py`, lab number first, two digits.

**Examples:**
- Lab 1, Exercise 1: `test_lab01_exercise1.py`
- Lab 8, Exercise 5: `test_lab08_exercise5.py`

The name must be unique across the repository, so pytest never confuses two test files.

### C. Clean Output (`conftest.py`)

Every lab folder has a `conftest.py` (copy `labs/lab01/conftest.py` and change the lab number in its docstring). It hides tracebacks and pytest's own summary, and ends with one of:

```
ALL TESTS PASSED
```

```
SOME TESTS FAILED:
  - input one_way_km=100, budget=40 -> expected True but got None (did you forget to return the result?)
```

Each problem is one plain line, and repeated lines are shown once. A file that is empty or does not run is reported as a failure, never as a pass.

### D. Test File Template (function exercises)

Load the student file inside the test with `importlib.util`, under a unique module name (`labXX_exerciseY`). Never import it at the top of the test file: if the file is empty or has a syntax error, the whole test file fails to load and the student gets a traceback instead of a clear message.

```python
import importlib.util
import os

import pytest

EXERCISE = "exerciseY"
FUNCTION = "function_name"
PARAMETERS = ["first_param", "second_param"]


def load_function():
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), EXERCISE + ".py")
    if not os.path.isfile(path):
        pytest.fail(f"{EXERCISE}.py was not found in the {EXERCISE} folder")
    spec = importlib.util.spec_from_file_location("labXX_" + EXERCISE, path)
    module = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(module)
    except Exception as error:
        pytest.fail(f"{EXERCISE}.py did not run: {type(error).__name__}: {error}")
    if not callable(getattr(module, FUNCTION, None)):
        pytest.fail(f"no function called {FUNCTION} in {EXERCISE}.py - check the name in your def line")
    return getattr(module, FUNCTION)


CASES = [
    ((1, 2), 3),
    # ... 10 cases in total: (arguments, expected result)
]


@pytest.mark.parametrize("args,expected", CASES)
def test_function_name(args, expected):
    function = load_function()
    context = "input " + ", ".join(f"{name}={value!r}" for name, value in zip(PARAMETERS, args))
    try:
        actual = function(*args)
    except TypeError as error:
        if FUNCTION + "()" in str(error):
            pytest.fail(f"{context} -> the function could not be called: {error}")
        pytest.fail(f"{context} -> the function crashed: TypeError: {error}")
    except Exception as error:
        pytest.fail(f"{context} -> the function crashed: {type(error).__name__}: {error}")
    hint = " (did you forget to return the result?)" if actual is None else ""
    assert actual == expected, f"{context} -> expected {expected!r} but got {actual!r}{hint}"
```

**Requirements:**
- **Exactly 10 cases** per exercise, in `CASES`
- Every failure message starts with the input, then says what was expected and what came back
- Cover edge cases, empty inputs, boundary values
- Check the tests against a reference answer, and against at least one typical wrong answer

### E. VS Code Settings

`.vscode/settings.json` runs pytest quietly, the same as `cp115-class-repo`:

```json
"python.testing.pytestArgs": [".", "--tb=short", "--no-header", "-q", "--disable-warnings", "--color=yes"]
```

---

## 10. Naming Conventions

-   **Variables:** `snake_case` (e.g., `student_grade`, `total_bill`).
-   **Files:** Lowercase with hyphens for docs (e.g., `lab-01.md`), lowercase with underscores for Python (e.g., `exercise1.py`).
-   **Folders:** Lowercase, no spaces (e.g., `exercise1`, `lab08`).
-   **Test files:** `test_labXX_exerciseY.py` (lab number first, two digits, e.g. `test_lab01_exercise1.py`).
