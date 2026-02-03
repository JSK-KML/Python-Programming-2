---
title: Integrated Data Structures - Tutorial 1
outline: deep
---

# Integrated Data Structures - Tutorial 1

## **Exercise 1: Real-World Scenarios** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using the appropriate data structures.**

---

### **Scenario 1: The Potluck Planner (Dictionary + Set)**

You are organizing a potluck dinner. You have a predefined set of food categories that *must* be covered (e.g., Main, Dessert, Drink). As guests sign up, they record their name and the category of food they are bringing. You need to identify which categories are still missing.

**Given:**
- `required_categories`: A Set of strings.
- `signups`: A Dictionary where Key is Guest Name and Value is Category.

**Task:** Write a function `check_missing_categories(required_categories, signups)` that returns a **Set** of categories that no one has signed up for yet.

**Example Input:**
```python
required = {"Main", "Dessert", "Drink", "Side"}
signups = {"Ali": "Main", "Sara": "Dessert"}
```

**Example Output:**
```python
{"Drink", "Side"}
```

---

### **Scenario 2: Student Grade Book Transformer (List + Dictionary)**

A teacher monitors student performance. She has a raw list of student records, where each record contains the student's name and a list of their test scores. She needs to convert these raw scores into a final Letter Grade for the report card.

**Grading Scale:**
- Average >= 90: "A"
- Average >= 80: "B"
- Average >= 70: "C"
- Below 70: "F"

**Given:**
- `students`: A List of Dictionaries containing "name" and "scores".

**Task:** Write a function `generate_report_card(students)` that returns a Dictionary mapping `Student Name -> Letter Grade`.

**Example Input:**
```python
students = [
    {"name": "Ali", "scores": [80, 85, 90]},
    {"name": "Sara", "scores": [60, 65, 70]}
]
```

**Example Output:**
```python
{"Ali": "B", "Sara": "F"}
```

---

### **Scenario 3: Marathon Lap Analyzer (Tuple Only)**

A professional runner records their time (in seconds) for each lap of a marathon in an immutable tuple. They want to know if their pace was "Consistent". A run is considered consistent if the difference between the fastest lap and the slowest lap is **less than or equal to 10 seconds**.

**Given:**
- `lap_times`: A Tuple of integers.

**Task:** Write a function `analyze_pace(lap_times)` that returns `True` if the pace was consistent, and `False` otherwise.

**Example Input:**
```python
lap_times = (120, 122, 119, 125)
```

**Example Output:**
```python
True
```

---

### **Scenario 4: E-Commerce Order Validator (List + Dictionary)**

A customer support agent needs to verify a claim. A customer says they ordered a specific item, but they "didn't receive it". The agent needs to search the entire order history to confirm if that item was ever virtually purchased by this customer.

**Given:**
- `order_history`: A List of Dictionaries, where each dictionary follows the structure `{"order_id": 101, "items": ["Item A", "Item B"]}`.
- `target_item`: A String representing the item to search for.

**Task:** Write a function `verify_purchase(order_history, target_item)` that returns `True` if the item is found in ANY order, and `False` otherwise.

**Example Input:**
```python
history = [
    {"order_id": 101, "items": ["Laptop", "Mouse"]},
    {"order_id": 102, "items": ["Monitor", "HDMI Cable"]}
]
target = "Mouse"
```

**Example Output:**
```python
True
```

---

### **Scenario 5: Daily Temperature Trend (Tuple Only)**

A weather station records hourly temperatures in an immutable tuple. Meteorologists want to know how often the temperature **dropped** compared to the previous hour, indicating a cooling trend.

**Given:**
- `temperatures`: A Tuple of floats.

**Logic:**
- If Temp[i] < Temp[i-1], count it as a drop.

**Task:** Write a function `count_temperature_drops(temperatures)` that returns the **count (integer)** of how many times the temperature decreased from one hour to the next.

**Example Input:**
```python
temps = (30.5, 31.0, 29.5, 28.0)
```

**Example Output:**
```python
2
```
*(Explanation: 31.0 -> 29.5 is a drop. 29.5 -> 28.0 is a drop.)*

---

### **Scenario 6: Library Overdue Checker (Dictionary + List)**

A library system tracks books checked out by users. The system stores the "Due Dates" (as simple day-of-year integers, 1-365) for every book a user currently has. If *any* of a user's books are past the `current_date`, the user is considered "Overdue".

**Given:**
- `loans`: A Dictionary mapping `User Email -> List of Due Dates`.
- `current_date`: An Integer.

**Task:** Write a function `find_overdue_users(loans, current_date)` that returns a **List** of emails for users who have at least one overdue book.

**Example Input:**
```python
loans = {
    "ali@email.com": [45, 50, 55],
    "sara@email.com": [40, 42]
}
current_date = 48
```

**Example Output:**
```python
["ali@email.com", "sara@email.com"]
```
*(Explanation: Ali has a book due on 45, which is before 48. Sara has books due on 40 and 42, both before 48.)*

---

### **Scenario 7: Discount Code Validator (List + Dictionary)**

An online store allows customers to use ONE discount code per order. You need to check if the discount code is valid and calculate the final price.

**How Discount Codes Work:**
- Each code has two properties: **minimum purchase amount** and **discount percentage**
- The discount is only applied if the cart total is **greater than or equal to** the minimum purchase
- If the code doesn't exist OR the cart total is too low, no discount is applied

**Given:**
- `cart`: A List of items. Each item is a dictionary with `"name"` (string), `"price"` (float), and `"qty"` (integer).
- `discount_code`: A string representing the code the customer entered (e.g., `"SAVE10"`).
- `codes`: A Dictionary where each key is a code name, and the value is another dictionary with `"min_purchase"` and `"discount"`.

**Task:** Write a function `apply_discount(cart, discount_code, codes)` that calculates and returns the final total price after applying the discount (if valid).

**Example Input:**
```python
cart = [
    {"name": "Laptop", "price": 1000, "qty": 1},
    {"name": "Mouse", "price": 50, "qty": 2}
]
discount_code = "SAVE10"
codes = {
    "SAVE10": {"min_purchase": 500, "discount": 0.10},
    "SAVE20": {"min_purchase": 2000, "discount": 0.20}
}
```

**Example Output:**
```python
990.0
```
*(Calculation: Cart total = 1000 + (50×2) = 1100. Code "SAVE10" requires min 500. 1100 >= 500, so apply 10% discount: 1100 × 0.90 = 990)*

---

### **Scenario 8: Playlist Artist Filter (List + Dictionary)**

A music streaming app wants to improve the listening experience by removing songs where the **same artist plays twice in a row**. 

**Rules:**
- Keep the first song always
- For each following song, check if its artist is the same as the **previous kept song**
- If the artist is the same, skip this song
- If the artist is different, keep this song

**Given:**
- `playlist`: A List of song IDs (integers).
- `song_artists`: A Dictionary mapping Song ID -> Artist Name (string).

**Task:** Write a function `remove_consecutive_artists(playlist, song_artists)` that returns a new List of song IDs with no consecutive duplicate artists.

**Example Input:**
```python
playlist = [101, 102, 103, 104, 105]
song_artists = {
    101: "Taylor Swift",
    102: "Taylor Swift",
    103: "Ed Sheeran",
    104: "Taylor Swift",
    105: "Ed Sheeran"
}
```

**Example Output:**
```python
[101, 103, 104, 105]
```
*(Song 102 is removed because Taylor Swift played right before it)*

---

### **Scenario 10: Category-Based Product Filter (Dictionary + Set)**

An online store needs to filter products based on customer preferences. The customer specifies which categories they're interested in and which brands they want to avoid.

**Given:**
- `products`: A Dictionary mapping Product Name -> Dictionary with `"category"` and `"brand"`.
- `preferred_categories`: A Set of category names the customer likes.
- `blocked_brands`: A Set of brand names the customer wants to avoid.

**Task:** Write a function `filter_products(products, preferred_categories, blocked_brands)` that returns a **List** of product names that match the preferred categories AND are NOT from blocked brands.

**Example Input:**
```python
products = {
    "iPhone": {"category": "Electronics", "brand": "Apple"},
    "Galaxy": {"category": "Electronics", "brand": "Samsung"},
    "Shirt": {"category": "Clothing", "brand": "Nike"}
}
preferred_categories = {"Electronics"}
blocked_brands = {"Apple"}
```

**Example Output:**
```python
["Galaxy"]
```
*(iPhone is Electronics but blocked brand. Shirt is not preferred category)*

---

### **Scenario 11: Student Performance Trend (List + Dictionary)**

A teacher tracks student performance across multiple assessments. A student is flagged as "Critically Declining" if:
1. **Every score** is strictly less than the previous score (complete declining trend)
2. The difference between the **first and last score** is at least 20 points

**Note:** Students can have different numbers of assessments (e.g., some have 3 scores, others have 5).

**Given:**
- `records`: A List of dictionaries. Each dictionary contains `"name"` (string) and `"scores"` (list of integers with at least 2 elements).

**Task:** Write a function `flag_critical_students(records)` that returns a **Set** of student names who are critically declining.

**Example Input:**
```python
records = [
    {"name": "Ali", "scores": [90, 75, 60, 50]},
    {"name": "Sara", "scores": [80, 70, 65]},
    {"name": "Bob", "scores": [70, 75, 80]},
    {"name": "Dana", "scores": [100, 95, 90, 85, 60]}
]
```

**Example Output:**
```python
{"Ali", "Dana"}
```

---

### **Scenario 12: Contact Deduplicator with Phone Normalization (List + Set)**

A contact system has duplicate entries with phone numbers in different formats. Before deduplication, normalize all phone numbers by:
1. Removing all non-digit characters (dashes, spaces, etc.)
2. If the number starts with "60" (Malaysia code), keep it as is
3. Otherwise, add "60" as a prefix

Then deduplicate based on normalized phone OR email.

**Given:**
- `contacts`: A List `[{"name": str, "phone": str, "email": str}]`

**Task:** Write a function `clean_contacts(contacts)` that returns deduplicated contacts with normalized phones.

**Example Input:**
```python
contacts = [
    {"name": "Ali", "phone": "012-345-6789", "email": "ali@x.com"},
    {"name": "Ahmad", "phone": "60123456789", "email": "ahmad@x.com"}
]
```

**Example Output:**
```python
[{"name": "Ali", "phone": "60123456789", "email": "ali@x.com"}]
```

---
