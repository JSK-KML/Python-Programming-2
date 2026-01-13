---
title: Tuples - Tutorial 1
outline: deep
---

# Tuples - Tutorial 1



## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using tuples.**

---

### **Scenario 1: Coordinate Distance Calculator**

A mapping app uses coordinate tuples `(x, y)` to represent points.

**Given:**
- Point A: `(0, 0)`
- Point B: `(3, 4)`

**Task:** Write a function that takes two coordinate tuples and returns the distance between them.

**Test with:**
- `(0, 0)` to `(3, 4)` → Should return `5.0`
- `(1, 1)` to `(4, 5)` → Should return `5.0`

---

### **Scenario 2: Color Warmth Detector**

A graphics app uses color tuples `(red, green, blue)` where each value is 0-255.

A color is considered "warm" if red dominates (red > green AND red > blue). A color is "cool" if blue dominates (blue > red AND blue > green). Otherwise it's "neutral".

**Given:** `(200, 50, 80)`

**Task:** Write a function that takes a color tuple and returns `"Warm"`, `"Cool"`, or `"Neutral"`.

**Test with:**
- `(200, 50, 80)` → Should return `"Warm"`
- `(50, 50, 200)` → Should return `"Cool"`
- `(100, 100, 100)` → Should return `"Neutral"`

---

### **Scenario 3: Midpoint Finder**

A mapping app uses coordinate tuples `(x, y)`.

Given two endpoints of a line segment, find the midpoint.

**Given:**
- Point A: `(2, 4)`
- Point B: `(8, 10)`

**Task:** Write a function that takes two coordinate tuples and returns a new tuple representing the midpoint.

**Test with:**
- `(2, 4)` and `(8, 10)` → Should return `(5.0, 7.0)`
- `(0, 0)` and `(10, 10)` → Should return `(5.0, 5.0)`

---

### **Scenario 4: Rectangle Fit Checker**

A shipping system represents boxes as tuples `(width, height)`.

To ship a package, it must fit inside the shipping box. The package CAN be rotated 90 degrees to fit.

**Given:**
- Shipping box: `(10, 6)`
- Package: `(5, 8)`

Normal orientation: Package 5×8 does NOT fit in 10×6 (8 > 6)

Rotated orientation: Package 8×5 DOES fit in 10×6 (8 ≤ 10 AND 5 ≤ 6)

**Task:** Write a function that takes two tuples (box, package) and returns `True` if the package fits in either orientation, `False` otherwise.

**Test with:**
- Box `(10, 6)`, Package `(5, 8)` → Should return `True` (fits when rotated)
- Box `(10, 6)`, Package `(7, 7)` → Should return `False` (7 > 6, doesn't fit either way)

---

### **Scenario 5: Time Overlap Detector**

A meeting scheduler uses time tuples `(hour, minute)` in 24-hour format.

Two meetings overlap if one starts before the other ends AND ends after the other starts.

**Given:**
- Meeting A: Start `(9, 0)`, End `(10, 30)`
- Meeting B: Start `(10, 0)`, End `(11, 0)`

**Task:** Write a function that takes four time tuples (meeting_a_start, meeting_a_end, meeting_b_start, meeting_b_end) and returns `True` if they overlap, `False` otherwise.

**Test with:**
- A: `(9, 0)` to `(10, 30)`, B: `(10, 0)` to `(11, 0)` → Should return `True` (overlap 10:00-10:30)
- A: `(9, 0)` to `(9, 30)`, B: `(10, 0)` to `(11, 0)` → Should return `False` (no overlap)

---

### **Scenario 6: Triangle Area from Vertices**

A geometry app calculates the area of triangles using vertex coordinates. Each vertex is represented as a tuple `(x, y)`.

**Given:**
- Vertex A: `(0, 0)`
- Vertex B: `(4, 0)`
- Vertex C: `(2, 3)`

**Task:** Write a function that takes three coordinate tuples and returns the area of the triangle.

**Test with:**
- Vertices `(0, 0)`, `(4, 0)`, `(2, 3)` → Should return `6.0`
- Vertices `(0, 0)`, `(6, 0)`, `(3, 4)` → Should return `12.0`

---

### **Scenario 7: Quadrant Detector**

A coordinate system uses tuples `(x, y)` to represent points. The coordinate plane is divided into 4 quadrants:
- Quadrant 1: x > 0 and y > 0
- Quadrant 2: x < 0 and y > 0
- Quadrant 3: x < 0 and y < 0
- Quadrant 4: x > 0 and y < 0

If a point lies on an axis (x = 0 or y = 0), return `0`.

**Given:** `(5, -3)`

**Task:** Write a function that takes a coordinate tuple and returns which quadrant (1, 2, 3, or 4) or `0` if on an axis.

**Test with:**
- `(5, -3)` → Should return `4`
- `(-2, 5)` → Should return `2`
- `(0, 5)` → Should return `0`

---

### **Scenario 8: Point Inside Rectangle Checker**

A graphics system defines rectangles using a corner tuple `(left, bottom)`, width, and height.

**Given:**
- Corner: `(1, 1)`
- Width: `4`
- Height: `3`
- Point: `(3, 2)`

The rectangle spans from (1, 1) to (5, 4).

**Task:** Write a function that takes a corner tuple, width, height, and a point tuple. Returns `True` if point is inside (inclusive), `False` otherwise.

**Test with:**
- Corner `(1, 1)`, Width `4`, Height `3`, Point `(3, 2)` → Should return `True`
- Corner `(1, 1)`, Width `4`, Height `3`, Point `(6, 2)` → Should return `False`
- Corner `(0, 0)`, Width `10`, Height `10`, Point `(10, 10)` → Should return `True` (on edge)

---

### **Scenario 9: Auction Bid Validator**

An auction system validates incoming bids.

**Parameters:**
- `bids`: A list of bid amounts
- `min_bid`: The minimum acceptable bid amount

**Rules:**
- Remove all bids that are below the minimum bid amount
- Find the highest valid bid remaining
- Find the original position of that winning bid

**Return:** A tuple `(winning_bid, original_position)`. If no valid bids remain, return `(0, -1)`.

**Test with:**
- Bids `[500, 300, 480, 550, 200, 600]`, Min `400` → `(600, 5)`
- Bids `[100, 200, 150]`, Min `300` → `(0, -1)`

---

### **Scenario 10: Ticket Queue Resolver**

A ticketing system needs to track positions after sorting.

**Parameters:**
- `queue`: A list of ticket IDs (strings)
- `ticket_id`: The ticket to find

**Rules:**
- Sort the queue alphabetically
- Find the new position of the given ticket after sorting

**Return:** The new position (index) of the ticket. Return `-1` if not found.

**Test with:**
- Queue `["VIP-1", "REG-5", "VIP-2", "REG-3"]`, Ticket `"REG-5"` → `1`
- Queue `["VIP-1", "REG-5"]`, Ticket `"UNKNOWN"` → `-1`

---

### **Scenario 11: Anomaly Isolation**

A sensor system needs to detect and remove anomalies from readings.

**Parameters:**
- `readings`: A list of sensor values
- `lower_bound`: Minimum valid value
- `upper_bound`: Maximum valid value

**Rules:**
- Values outside the range are anomalies
- Record the position of each anomaly
- Remove all anomalies from the list
- Sort the remaining clean data and calculate the median

**Return:** A tuple `(list_of_anomaly_positions, median_of_clean_data)`. If no clean data remains, median is `0`.

**Test with:**
- Readings `[98, 102, 99, 250, 101, 100, 300, 97]`, Range `90-110` → `([3, 6], 99.5)`

---

### **Scenario 12: Roster Conflict Resolver**

A tournament system needs to resolve player conflicts between two teams.

**Parameters:**
- `team_a`: A list of player names
- `team_b`: A list of player names

**Rules:**
- Find players appearing in BOTH lists (conflicts)
- Remove conflicts from BOTH lists
- Sort both remaining lists alphabetically
- Determine which team has more players left

**Return:** A tuple `(winner, team_a_remaining, team_b_remaining)` where winner is `"Team A"`, `"Team B"`, or `"Tie"`.

**Test with:**
- Team A `["Ali", "Sara", "Ahmad", "Mei"]`, Team B `["Sara", "John", "Ahmad", "Lee"]` → `("Tie", ["Ali", "Mei"], ["John", "Lee"])`
