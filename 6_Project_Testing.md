# Phase 6: Project Testing

## Overview
This document outlines the test cases, execution steps, and verification results for the UI Policies and Client Scripts configured on the Incident table.

---

## Unit Test Cases

### Test Case 1: Mandatory Assigned To Field Validation
* **Feature:** Mandatory "Assigned To" Field
* **Pre-condition:** Open a new or existing incident form (`incident.do`).
* **Test Steps:**
  1. Set `Impact` to `1 - High`.
  2. Leave the `Assigned to` field empty.
  3. Attempt to save or submit the form.
* **Expected Result:** The system blocks form submission and displays the red error message: *"Assigned To is mandatory for High impact incidents"*.
* **Status:** Passed

<img width="1366" height="768" alt="1_Mandatory_Check_Test" src="https://github.com/user-attachments/assets/bb0e66c4-729b-4c66-841b-c9af70fa0dfe" />


---

### Test Case 2: Auto-Set Urgency to High Validation
* **Feature:** Auto-Set Urgency & Read-Only Logic
* **Pre-condition:** Open an incident form where `Impact` is set to Medium or Low.
* **Test Steps:**
  1. Change `Impact` to `1 - High`.
* **Expected Result:** `Urgency` automatically changes to `1 - High` and becomes read-only.
* **Status:** Passed

<img width="1366" height="768" alt="2_Auto_Urgency" src="https://github.com/user-attachments/assets/6a6bf046-7901-4522-acc4-8eab2c014668" />


---

### Test Case 3: Reverse Condition Logic (Impact Change)
* **Feature:** `onChange` Client Script for Urgency Field
* **Pre-condition:** Incident `Impact` is currently set to `1 - High`.
* **Test Steps:**
  1. Change `Impact` from `1 - High` to `2 - Medium`.
* **Expected Result:** The `Urgency` field becomes editable again.
* **Status:** Passed

<img width="1366" height="768" alt="3_Reverse_Condition" src="https://github.com/user-attachments/assets/ab3591f3-748e-4c80-a12b-96ea06e996f9" />


---

### Test Case 4: Block List Editing on State Field
* **Feature:** `onCellEdit` Client Script on State Field
* **Pre-condition:** Navigate to the Incident list view (`incident.list`).
* **Test Steps:**
  1. Double-click the `State` cell for any incident in the list view.
  2. Attempt to edit the value.
* **Expected Result:** An alert popup appears stating *"State cannot be updated using list editing. Please open the Incident."* and the change is canceled.
* **Status:** Passed

<img width="1366" height="768" alt="4_List_Editing" src="https://github.com/user-attachments/assets/a32dfddc-69ae-4fe3-b92f-3f367754aa0b" />

### TEST CASE4.1: EDITING THROUGH FORM 
<img width="1366" height="768" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/2d790546-5f3a-4959-94b7-8d5d5056a1f7" />

### AFTER EDITING ON VIEW INCIDENT 
<img width="1366" height="768" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/3525187c-a412-48c1-94cb-4988b3e27bab" />



