---
title: Files - Tutorial 1
outline: deep
---

# Files - Tutorial 1

## **Directory Structure**

```
📁 school_system/
├── 📁 students/
│   ├── 📁 2024/
│   │   ├── 📄 names.txt
│   │   └── 📄 attendance.csv
│   └── 📁 2025/
│       ├── 📄 enrollment.txt
│       └── 📄 new_students.csv
├── 📁 grades/
│   ├── 📄 midterm.csv
│   └── 📄 final.csv
├── 📁 reports/
│   ├── 📄 summary.txt
│   ├── 📄 statistics.txt
│   └── 📄 top_performers.csv
└── 📁 config/
    └── 📄 passing_grade.txt
```

---

## **Question 1: Student Counter** <Badge type="tip" text="Question" />

**Task:**
Read student names from `names.txt` in the 2024 folder. Count how many students are enrolled. Write the count to `summary.txt` in `reports`.

**File Contents:**

`names.txt`:
```
Ali Ahmad
Sara Hassan
Ahmad Ibrahim
Fatimah Omar
Hassan Yusof
```

**Function Signature:**
```python
def count_students(input_file, output_file):
    pass
```

**Expected output in `summary.txt`:**
```
Total Students: 5
```

---

## **Question 2: Attendance Checker** <Badge type="tip" text="Question" />

**Task:**
Read the attendance CSV from the 2024 folder. Find all students with attendance below 75%. Write their names to `statistics.txt` in `reports`.

**File Contents:**

`attendance.csv`:
```
Name,Attendance
Ali Ahmad,85.5
Sara Hassan,72.0
Ahmad Ibrahim,90.0
Fatimah Omar,68.5
Hassan Yusof,80.0
```

**Function Signature:**
```python
def check_low_attendance(input_file, output_file, threshold):
    pass
```

**Expected output in `statistics.txt`:**
```
Sara Hassan
Fatimah Omar
```

---

## **Question 3: Passing Grade Filter** <Badge type="tip" text="Question" />

**Task:**
Read the passing grade threshold from `passing_grade.txt` in `config`. Read midterm scores from `midterm.csv` in `grades`. Write all students who scored at or above the passing grade to `summary.txt` in `reports`.

**File Contents:**

`passing_grade.txt`:
```
80
```

`midterm.csv`:
```
Name,Score
Ali Ahmad,85
Sara Hassan,78
Ahmad Ibrahim,92
Fatimah Omar,88
Hassan Yusof,75
```

**Function Signature:**
```python
def filter_passing_students(config_file, scores_file, output_file):
    pass
```

**Expected output in `summary.txt`:**
```
Ali Ahmad: 85
Ahmad Ibrahim: 92
Fatimah Omar: 88
```

---

## **Question 4: Grade Average Calculator** <Badge type="tip" text="Question" />

**Task:**
Read both `midterm.csv` and `final.csv` from `grades`. Calculate each student's average (midterm and final weighted equally). Write results to `statistics.txt` in `reports`.

**File Contents:**

`midterm.csv`:
```
Name,Score
Ali Ahmad,85
Sara Hassan,78
Ahmad Ibrahim,92
```

`final.csv`:
```
Name,Score
Ali Ahmad,90
Sara Hassan,82
Ahmad Ibrahim,88
```

**Function Signature:**
```python
def calculate_averages(midterm_file, final_file, output_file):
    pass
```

**Expected output in `statistics.txt`:**
```
Ali Ahmad: 87.5
Sara Hassan: 80.0
Ahmad Ibrahim: 90.0
```

---

## **Question 5: Enrollment Report Generator** <Badge type="tip" text="Question" />

**Task:**
Read new enrollments from `enrollment.txt` in the 2025 folder. Read existing students from `names.txt` in the 2024 folder. Combine both lists (remove duplicates). Write the complete student list to `summary.txt` in `reports`, sorted alphabetically.

**File Contents:**

`enrollment.txt` (2025 folder):
```
Ahmad Ibrahim
Nurul Aina
Hassan Yusof
Zainab Ali
```

`names.txt` (2024 folder):
```
Ali Ahmad
Sara Hassan
Ahmad Ibrahim
Fatimah Omar
Hassan Yusof
```

**Function Signature:**
```python
def generate_enrollment_report(old_file, new_file, output_file):
    pass
```

**Expected output in `summary.txt`:**
```
Ahmad Ibrahim
Ali Ahmad
Fatimah Omar
Hassan Yusof
Nurul Aina
Sara Hassan
Zainab Ali
```

---

## **Question 6: Attendance Tracker Updater** <Badge type="tip" text="Question" />

**Task:**
Read attendance records from `attendance.csv` in the 2024 folder. Filter students with attendance >= 90%. Append these top performers to `top_performers.csv` in `reports` (file already exists with header). Return the count of students appended.

**File Contents:**

`attendance.csv` (in students/2024/):
```
Name,Attendance
Ali Ahmad,85.5
Sara Hassan,92.0
Ahmad Ibrahim,78.5
Fatimah Omar,88.0
Hassan Yusof,95.5
```

`top_performers.csv` (in reports/ - already exists):
```
Name,Attendance
Amira Tan,93.0
```

**Function Signature:**
```python
def append_top_performers(input_file, output_file):
    pass
```

**Expected output in `top_performers.csv` after appending:**
```
Name,Attendance
Amira Tan,93.0
Sara Hassan,92.0
Hassan Yusof,95.5
```

---

## **Question 7: Grade Consolidator** <Badge type="tip" text="Question" />

**Task:**
Read new student grades from `new_students.csv` in the 2025 folder. Append all students (skip the header) to `final.csv` in the `grades` folder. Return the total count of all students in the final CSV (excluding header).

**File Contents:**

`new_students.csv` (in students/2025/):
```
Name,Score
Nurul Aina,87
Zainab Ali,91
Aminah Ismail,85
```

`final.csv` (in grades/ - already exists):
```
Name,Score
Ali Ahmad,90
Sara Hassan,82
Ahmad Ibrahim,88
```

**Function Signature:**
```python
def append_new_students(new_file, target_file):
    pass
```

**Expected output in `final.csv` after appending:**
```
Name,Score
Ali Ahmad,90
Sara Hassan,82
Ahmad Ibrahim,88
Nurul Aina,87
Zainab Ali,91
Aminah Ismail,85
```
