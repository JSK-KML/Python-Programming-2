---
title: DataFrame & Data Analysis - Tutorial 1
outline: deep
---

# DataFrame & Data Analysis - Tutorial 1

## **Question 1: Student Performance Report**

File: `students.csv`

**df.info():**
```
RangeIndex: 100 entries, 0 to 99
Data columns (total 4 columns):
 #   Column           Non-Null Count  Dtype
---  ------           --------------  -----
 0   Student ID       100 non-null    object
 1   Student Name     100 non-null    object
 2   Final Score      100 non-null    int64
 3   Attendance %     100 non-null    float64
```

**df.describe():**
```
       Final Score  Attendance %
count   100.000000    100.000000
mean     75.500000     82.300000
min      45.000000     65.000000
max      98.000000     98.500000
```

**df.head(3):**
```
  Student ID Student Name  Final Score  Attendance %
0       S001    Ali Ahmad           85          90.5
1       S002  Sara Hassan           72          88.0
2       S003       Ahmad            90          95.0
```

A school wants to identify high-performing students for a scholarship program. They need students who have scored at least 80 marks and maintained at least 85% attendance throughout the semester. The scholarship office only needs the student IDs for processing.

**Write a function** `filter_high_performers(filename)` that loads the student data and returns a DataFrame containing only the "Student ID" column for students who meet both criteria for the scholarship.

---

## **Question 2: Product Stock Alert**

File: `inventory.csv`

**df.info():**
```
RangeIndex: 50 entries, 0 to 49
Data columns (total 4 columns):
 #   Column       Non-Null Count  Dtype
---  ------       --------------  -----
 0   Product.ID   50 non-null     object
 1   Product Name 50 non-null     object
 2   Unit Price   50 non-null     int64
 3   Stock.Level  50 non-null     int64
```

**df.describe():**
```
       Unit Price  Stock.Level
count   50.000000    50.000000
mean   450.000000    25.000000
min     25.000000     2.000000
max   3500.000000    80.000000
```

**df.head(3):**
```
  Product.ID Product Name  Unit Price  Stock.Level
0       P001       Laptop        3500            5
1       P002        Mouse          45           50
2       P003     Keyboard         120           30
```

A warehouse manager needs to identify products that are running low on stock. The company considers any product with stock below the average stock level as needing reorder. The purchasing department only needs the product IDs and current stock levels to process the reorder.

**Write a function** `get_low_stock(filename)` that loads the inventory data and returns a DataFrame showing only the "Product.ID" and "Stock.Level" columns for products that have stock levels below the average.

---

## **Question 3: Employee Salary Analysis**

File: `employees.csv`

**df.info():**
```
RangeIndex: 80 entries, 0 to 79
Data columns (total 4 columns):
 #   Column        Non-Null Count  Dtype
---  ------        --------------  -----
 0   Employee.ID   80 non-null     object
 1   Full Name     80 non-null     object
 2   Dept.Code     80 non-null     object
 3   Monthly Salary 80 non-null    int64
```

**df.describe():**
```
       Monthly Salary
count       80.000000
mean      4500.000000
min       3000.000000
max       7000.000000
```

**df.head(3):**
```
  Employee.ID  Full Name Dept.Code  Monthly Salary
0        E001  Ali Osman        IT            4500
1        E002       Sara        HR            5000
2        E003      Ahmad        IT            4000
```

The HR department is conducting a salary review for the IT department. They need to find out what the highest salary is among all IT employees to benchmark their compensation structure.

**Write a function** `analyze_it_salaries(filename)` that loads the employee data, filters only IT department employees, and returns the maximum salary in that department as a single number.

---

## **Question 4: Sales Performance Tracker**

File: `sales.csv`

**df.info():**
```
RangeIndex: 120 entries, 0 to 119
Data columns (total 4 columns):
 #   Column         Non-Null Count  Dtype
---  ------         --------------  -----
 0   Order.ID       120 non-null    object
 1   Product Type   120 non-null    object
 2   Qty.Sold       120 non-null    int64
 3   Total Revenue  120 non-null    float64
```

**df.describe():**
```
         Qty.Sold  Total Revenue
count  120.000000     120.000000
mean    15.000000     850.500000
min      1.000000      50.000000
max     50.000000    5000.000000
```

**df.head(3):**
```
  Order.ID Product Type  Qty.Sold  Total Revenue
0    O0001       Laptop         2         7000.0
1    O0002        Mouse        10          450.0
2    O0003      Monitor         1          800.0
```

A sales manager wants to identify high-value orders for special customer appreciation rewards. The company defines high-value orders as those generating more than RM1000 in revenue.

**Write a function** `get_big_orders(filename)` that loads the sales data and returns a DataFrame containing all orders that exceed RM1000 in revenue.

---

## **Question 5: Course Enrollment Report**

File: `courses.csv`

**df.info():**
```
RangeIndex: 30 entries, 0 to 29
Data columns (total 4 columns):
 #   Column          Non-Null Count  Dtype
---  ------          --------------  -----
 0   Course.Code     30 non-null     object
 1   Course Title    30 non-null     object
 2   Credit Hours    30 non-null     int64
 3   Students Count  30 non-null     int64
```

**df.describe():**
```
       Credit Hours  Students Count
count     30.000000       30.000000
mean       3.200000       45.000000
min        2.000000       15.000000
max        4.000000       80.000000
```

**df.head(3):**
```
  Course.Code    Course Title  Credit Hours  Students Count
0      CS101  Intro to Python             3              60
1      CS102     Data Science             4              45
2      IT101  Web Development             3              30
```

The university is planning to assign larger lecture halls for the next semester. They need to identify courses that have high enrollment, specifically those with 50 or more students enrolled. The scheduling office only needs the course codes and course titles to prepare the room assignments.

**Write a function** `find_popular_courses(filename)` that loads the course data and returns a DataFrame showing only the "Course.Code" and "Course Title" columns for courses that have at least 50 students enrolled.

---

## **Question 6: Weather Station Data**

File: `weather.csv`

**df.info():**
```
RangeIndex: 365 entries, 0 to 364
Data columns (total 4 columns):
 #   Column      Non-Null Count  Dtype
---  ------      --------------  -----
 0   Date.Stamp  365 non-null    object
 1   City Name   365 non-null    object
 2   Temp.C      365 non-null    int64
 3   Humidity %  365 non-null    int64
```

**df.describe():**
```
            Temp.C  Humidity %
count   365.000000  365.000000
mean     29.500000   78.000000
std       2.800000    6.500000
min      24.000000   65.000000
25%      27.000000   73.000000
50%      29.000000   77.000000
75%      32.000000   82.000000
max      36.000000   92.000000
```

**df.head(3):**
```
  Date.Stamp City Name  Temp.C  Humidity %
0 2024-01-01      Ipoh      28          75
1 2024-01-02      Ipoh      30          80
2 2024-01-03      Ipoh      29          78
```

A meteorologist is studying the relationship between hot days and humidity levels. They define hot days as those with temperatures of 32 degrees Celsius or higher, and want to know the average humidity on such days.

**Write a function** `find_hot_days(filename)` that loads the weather data, identifies all days with temperatures at or above 32 degrees, and returns the mean humidity value for those hot days as a single number.

---

## **Question 7: Exam Results Processor**

File: `exam_results.csv`

**df.info():**
```
RangeIndex: 150 entries, 0 to 149
Data columns (total 4 columns):
 #   Column          Non-Null Count  Dtype
---  ------          --------------  -----
 0   Candidate.ID    150 non-null    object
 1   Student Name    150 non-null    object
 2   Subject Code    150 non-null    object
 3   Exam Score      150 non-null    int64
```

**df.describe():**
```
       Exam Score
count  150.000000
mean    72.500000
min     40.000000
max     98.000000
```

**df.head(3):**
```
  Candidate.ID Student Name Subject Code  Exam Score
0        C0001    Ali Ahmad         Math          85
1        C0002         Sara      Science          78
2        C0003        Ahmad      English          92
```

The Science department wants to award a special prize to exceptional Science students. They're looking for Science students who scored above the overall average score across all subjects. Among these top Science performers, they want to know what the lowest score is to set the minimum benchmark for future awards.

**Write a function** `get_top_science_students(filename)` that loads the exam data, filters Science subject students who scored above the overall mean, and returns the minimum score among these top performers as a single number.

---

## **Question 8: Hotel Booking System**

File: `bookings.csv`

**df.info():**
```
RangeIndex: 90 entries, 0 to 89
Data columns (total 4 columns):
 #   Column       Non-Null Count  Dtype
---  ------       --------------  -----
 0   Booking.ID   90 non-null     object
 1   Guest Name   90 non-null     object
 2   Stay.Nights  90 non-null     int64
 3   Total.Price  90 non-null     float64
```

**df.describe():**
```
       Stay.Nights  Total.Price
count   90.000000    90.000000
mean     3.500000   850.000000
min      1.000000   200.000000
max      7.000000  2100.000000
```

**df.head(3):**
```
  Booking.ID Guest Name  Stay.Nights  Total.Price
0      BK001        Ali            3        900.0
1      BK002       Sara            2        600.0
2      BK003      Ahmad            5       1500.0
```

A hotel chain is analyzing their premium long-stay guests for a loyalty program. They're interested in bookings that lasted 4 nights or more and also had a total price above the average of all bookings. For these premium customers, they want to know what the longest stay duration was.

**Write a function** `analyze_premium_bookings(filename)` that loads the booking data, identifies bookings with 4 or more nights that also cost more than the average booking price, and returns the maximum number of nights among these premium bookings as a single number.

---

## **Question 9: Fitness Tracker Data**

File: `fitness.csv`

**df.info():**
```
RangeIndex: 60 entries, 0 to 59
Data columns (total 4 columns):
 #   Column          Non-Null Count  Dtype
---  ------          --------------  -----
 0   User.ID         60 non-null     object
 1   Member Name     60 non-null     object
 2   Daily Steps     60 non-null     int64
 3   Calories Burnt  60 non-null     int64
```

**df.describe():**
```
       Daily Steps  Calories Burnt
count    60.000000       60.000000
mean   8500.000000      450.000000
min    3000.000000      200.000000
max   15000.000000      800.000000
```

**df.head(3):**
```
  User.ID Member Name  Daily Steps  Calories Burnt
0   U0001         Ali        10000             550
1   U0002        Sara         7500             400
2   U0003       Ahmad        12000             650
```

A fitness app wants to identify their most dedicated users for a special achievement badge. They define elite performers as users who not only walked more steps than the average user, but also burned more calories than the average. The app needs a list of all users who meet both criteria.

**Write a function** `find_elite_performers(filename)` that loads the fitness data and returns a DataFrame containing all users who have both above-average steps and above-average calories burned.

---

## **Question 10: University Department Budget**

File: `departments.csv`

**df.info():**
```
RangeIndex: 25 entries, 0 to 24
Data columns (total 4 columns):
 #   Column         Non-Null Count  Dtype
---  ------         --------------  -----
 0   Dept.ID        25 non-null     object
 1   Faculty Name   25 non-null     object
 2   Budget.2024    25 non-null     int64
 3   Staff.Count    25 non-null     int64
```

**df.describe():**
```
       Budget.2024  Staff.Count
count    25.000000    25.000000
mean  350000.000000    18.000000
min   150000.000000     8.000000
max   800000.000000    35.000000
```

**df.head(3):**
```
  Dept.ID    Faculty Name  Budget.2024  Staff.Count
0    D001  Computer Science       650000           28
1    D002         Business       450000           22
2    D003      Engineering       800000           35
```

The university administration wants to review departments in the Science faculty that have budgets exceeding the overall average budget. They need to identify just the department IDs and staff counts for these well-funded Science departments.

**Write a function** `get_funded_science_depts(filename)` that loads the department data, filters only departments in "Science" faculty with budgets above the overall mean budget, and returns a DataFrame showing only the "Dept.ID" and "Staff.Count" columns for these departments.
