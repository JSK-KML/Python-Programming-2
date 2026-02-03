---
title: Integrated Data Structures - Tutorial 1 Answers
outline: deep
---

# Integrated Data Structures - Tutorial 1 Answers

## **Exercise 1: Real-World Scenarios**

---

### **Scenario 1: The Potluck Planner**

```python
def check_missing_categories(required_categories, signups):
    # 1. Collect all categories currently covered by signups
    covered_categories = set(signups.values())
    
    # 2. Find the difference (Required - Covered)
    missing = required_categories - covered_categories
    
    return missing

# Test Data
req = {"Main", "Dessert", "Drink", "Side"}
current = {"Ali": "Main", "Sara": "Dessert"}

print(check_missing_categories(req, current))
# Output: {'Drink', 'Side'}
```

---

### **Scenario 2: Student Grade Book Transformer**

```python
def generate_report_card(students):
    report_card = {}
    
    for student in students:
        name = student["name"]
        scores = student["scores"]
        
        # Calculate Average
        if not scores:
            average = 0
        else:
            average = sum(scores) / len(scores)
            
        # Determine Grade
        if average >= 90:
            grade = "A"
        elif average >= 80:
            grade = "B"
        elif average >= 70:
            grade = "C"
        else:
            grade = "F"
            
        report_card[name] = grade
        
    return report_card

# Test Data
data = [
    {"name": "Ali", "scores": [80, 85, 90]}, # Avg 85 -> B
    {"name": "Sara", "scores": [60, 65, 70]}  # Avg 65 -> F
]

print(generate_report_card(data))
# Output: {'Ali': 'B', 'Sara': 'F'}
```

---

### **Scenario 3: Marathon Lap Analyzer**

```python
def analyze_pace(lap_times):
    if not lap_times:
        return False
        
    fastest = min(lap_times)
    slowest = max(lap_times)
    
    diff = slowest - fastest
    
    # Consistent if difference is <= 10
    return diff <= 10

# Test Data
times = (120, 122, 119, 125) # Max 125, Min 119, Diff 6
print(analyze_pace(times))
# Output: True
```

---

### **Scenario 4: E-Commerce Order Validator**

```python
def verify_purchase(order_history, target_item):
    for order in order_history:
        items = order["items"]
        
        # Check if target is in this order's item list
        if target_item in items:
            return True
            
    # If we check all orders and don't find it
    return False

# Test Data
history = [
    {"order_id": 101, "items": ["Laptop", "Mouse"]},
    {"order_id": 102, "items": ["Monitor", "HDMI Cable"]}
]

print(verify_purchase(history, "Mouse"))      # Output: True
print(verify_purchase(history, "Keyboard"))   # Output: False
```

---

### **Scenario 5: Daily Temperature Trend**

```python
def count_temperature_drops(temperatures):
    if len(temperatures) < 2:
        return 0
        
    drops = 0
    
    # Iterate from the second element
    for i in range(1, len(temperatures)):
        current_temp = temperatures[i]
        previous_temp = temperatures[i-1]
        
        if current_temp < previous_temp:
            drops += 1
            
    return drops

# Test Data
temps = (30.5, 31.0, 29.5, 28.0)
# 30.5 -> 31.0 (No)
# 31.0 -> 29.5 (Yes)
# 29.5 -> 28.0 (Yes)
print(count_temperature_drops(temps))
# Output: 2
```

---

### **Scenario 6: Library Overdue Checker**

```python
def find_overdue_users(loans, current_date):
    overdue_users = []
    
    for email, due_dates in loans.items():
        is_user_overdue = False
        
        # Check all books for this user
        for date in due_dates:
            if date < current_date:
                is_user_overdue = True
                break # Found one overdue book, mark user and move on
        
        if is_user_overdue:
            overdue_users.append(email)
            
    return overdue_users

# Test Data
loans_data = {
    "ali@email.com": [45, 50, 55], # 45 is < 48 (Overdue)
    "sara@email.com": [40, 42]     # Both < 48 (Overdue)
}
curr_date = 48

print(find_overdue_users(loans_data, curr_date))
# Output: ['ali@email.com', 'sara@email.com']
```

---

### **Scenario 7: Discount Code Validator**

```python
def apply_discount(cart, discount_code, codes):
    # Step 1: Calculate total cart value
    cart_total = 0
    for item in cart:
        item_total = item["price"] * item["qty"]
        cart_total += item_total
    
    # Step 2: Check if code exists
    if discount_code not in codes:
        return round(cart_total, 2)
    
    # Step 3: Get code requirements
    code_info = codes[discount_code]
    min_purchase = code_info["min_purchase"]
    discount_rate = code_info["discount"]
    
    # Step 4: Apply discount if qualified
    if cart_total >= min_purchase:
        final_total = cart_total * (1 - discount_rate)
    else:
        final_total = cart_total
    
    return round(final_total, 2)

# Test Data
cart = [
    {"name": "Laptop", "price": 1000, "qty": 1},
    {"name": "Mouse", "price": 50, "qty": 2}
]
code = "SAVE10"
codes_db = {
    "SAVE10": {"min_purchase": 500, "discount": 0.10},
    "SAVE20": {"min_purchase": 2000, "discount": 0.20}
}

print(apply_discount(cart, code, codes_db))
# Output: 990.0
```

---

### **Scenario 8: Playlist Artist Filter**

```python
def remove_consecutive_artists(playlist, song_artists):
    if not playlist:
        return []
    
    # Always keep the first song
    filtered = [playlist[0]]
    
    # Check each subsequent song
    for i in range(1, len(playlist)):
        current_song_id = playlist[i]
        last_kept_song_id = filtered[-1]
        
        # Get artist names
        current_artist = song_artists.get(current_song_id)
        last_artist = song_artists.get(last_kept_song_id)
        
        # Only keep if different artist
        if current_artist != last_artist:
            filtered.append(current_song_id)
    
    return filtered

# Test Data
playlist = [101, 102, 103, 104, 105]
artists = {
    101: "Taylor Swift",
    102: "Taylor Swift",
    103: "Ed Sheeran",
    104: "Taylor Swift",
    105: "Ed Sheeran"
}

print(remove_consecutive_artists(playlist, artists))
# Output: [101, 103, 104, 105]
```

---

### **Scenario 10: Category-Based Product Filter**

```python
def filter_products(products, preferred_categories, blocked_brands):
    result = []
    
    for product_name, details in products.items():
        category = details["category"]
        brand = details["brand"]
        
        # Check if category matches and brand is not blocked
        if category in preferred_categories and brand not in blocked_brands:
            result.append(product_name)
    
    return result

# Test Data
products = {
    "iPhone": {"category": "Electronics", "brand": "Apple"},
    "Galaxy": {"category": "Electronics", "brand": "Samsung"},
    "Shirt": {"category": "Clothing", "brand": "Nike"}
}
prefs = {"Electronics"}
blocked = {"Apple"}

print(filter_products(products, prefs, blocked))
# Output: ['Galaxy']
```

---

### **Scenario 11: Student Performance Trend**

```python
def flag_critical_students(records):
    critical = set()
    
    for student in records:
        name = student["name"]
        scores = student["scores"]
        
        # Check if strictly declining (every score < previous)
        is_declining = True
        for i in range(1, len(scores)):
            if scores[i] >= scores[i-1]:
                is_declining = False
                break
        
        # Calculate drop
        drop = scores[0] - scores[-1]
        
        # Flag if both conditions met
        if is_declining and drop >= 20:
            critical.add(name)
    
    return critical

# Test Data
records = [
    {"name": "Ali", "scores": [90, 75, 60, 50]},       # Declining, drop=40
    {"name": "Sara", "scores": [80, 70, 65]},          # Declining, drop=15
    {"name": "Bob", "scores": [70, 75, 80]},           # Improving
    {"name": "Dana", "scores": [100, 95, 90, 85, 60]}  # Declining, drop=40
]

print(flag_critical_students(records))
# Output: {'Ali', 'Dana'}
```

---

### **Scenario 12: Contact Deduplicator with Phone Normalization**

```python
def clean_contacts(contacts):
    seen_phones = set()
    seen_emails = set()
    unique = []
    
    for contact in contacts:
        # Normalize phone: remove non-digits
        digits = ''.join(c for c in contact["phone"] if c.isdigit())
        
        # Add prefix if needed
        if not digits.startswith("60"):
            digits = "60" + digits
        
        email = contact["email"]
        
        # Check duplicates
        if digits in seen_phones or email in seen_emails:
            continue
        
        seen_phones.add(digits)
        seen_emails.add(email)
        
        # Add with normalized phone
        unique.append({
            "name": contact["name"],
            "phone": digits,
            "email": email
        })
    
    return unique

# Test Data
contacts = [
    {"name": "Ali", "phone": "012-345-6789", "email": "ali@x.com"},
    {"name": "Ahmad", "phone": "60123456789", "email": "ahmad@x.com"}
]

print(clean_contacts(contacts))
# Output: [{'name': 'Ali', 'phone': '60123456789', 'email': 'ali@x.com'}]
```

