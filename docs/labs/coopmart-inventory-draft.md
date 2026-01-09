# COOPMART Inventory Management

## Situation
COOPMART is a small grocery store that currently tracks their inventory manually on paper. The store manager wants a simple console program to help staff add new items, remove discontinued products, check stock levels, and view all inventory. Your task is to build this program.

## Requirements
- Show a menu that repeats until the user selects **Exit**.
- **Add item** – prompt for an item name and a quantity. If the item already exists, add the new quantity to the existing one.
- **Delete item** – prompt for an item name to remove.
- **Search item** – prompt for an item name and display its quantity.
- **Show inventory** – list all stored items with their quantities.
- **Exit** – terminate the program with a goodbye message.
- **Assume the user always enters a numeric value for the menu choice** (no need to handle non‑numeric input).
- Validate input:
  - Menu choice must be a number 1‑5.
  - Quantity must be a non‑negative integer.
  - If an operation cannot be performed, display the exact error messages listed below.

## Exact Error Messages 
- **Invalid menu choice**: `Error: Invalid choice. Please enter a number between 1 and 5.`
- **Negative quantity**: `Error: Quantity cannot be negative.`
- **Item not found (delete/search)**: `Error: Item '<item_name>' not found.`
- **Duplicate add** (item already exists): `Item '<item_name>' already exists. Quantity updated to <new_quantity>.`
- **Empty inventory**: `Inventory is empty.`

## Sample Interactions

### Sample 1: Basic Workflow
```
=== COOPMART INVENTORY SYSTEM ===
1. Add item
2. Delete item
3. Search item
4. Show inventory
5. Exit
Enter choice (1-5): 4
Inventory is empty.

Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 50
Item 'Apple' added.

Enter choice (1-5): 1
Enter item name: Banana
Enter quantity: 20
Item 'Banana' added.

Enter choice (1-5): 3
Enter item name: Apple
Quantity of 'Apple': 50

Enter choice (1-5): 4
Inventory:
Apple   50
Banana  20

Enter choice (1-5): 1
Enter item name: Cherry
Enter quantity: 15
Item 'Cherry' added.

Enter choice (1-5): 4
Inventory:
Apple   50
Banana  20
Cherry  15

Enter choice (1-5): 2
Enter item name: Banana
Item 'Banana' removed.

Enter choice (1-5): 4
Inventory:
Apple   50
Cherry  15

Enter choice (1-5): 5
Goodbye!
```

### Sample 2: Updates and Error Handling
```
Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 20
Item 'Apple' added.

Enter choice (1-5): 1
Enter item name: Apple
Enter quantity: 10
Item 'Apple' already exists. Quantity updated to 30.

Enter choice (1-5): 1
Enter item name: Orange
Enter quantity: -5
Error: Quantity cannot be negative.

Enter choice (1-5): 3
Enter item name: Mango
Error: Item 'Mango' not found.

Enter choice (1-5): 2
Enter item name: Banana
Error: Item 'Banana' not found.

Enter choice (1-5): 7
Error: Invalid choice. Please enter a number between 1 and 5.

Enter choice (1-5): 5
Goodbye!
```
