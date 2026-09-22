# Servicenow-UI-Policy-Client-Script
# Implement Client Script & UI Policy (Incident)

## 📌 Project Overview
This project demonstrates the implementation of ServiceNow client-side controls (UI Policies and Client Scripts) on the Incident table to enforce data integrity, automate dynamic field behavior, and prevent unauthorized field changes.

---

## 📂 Project Structure & Deliverables

- **`1_Brainstorming_and_Ideation/`**: Problem statement and project objectives.
- **`2_Requirement_Analysis/`**: Functional and technical requirement specifications.
- **`3_Project_Design/`**: Architecture, field logic flow, and script triggers.
- **`4_Project_Planning/`**: Implementation schedule and phase milestones.
- **`5_Project_Development/`**: UI Policy setup details and source JavaScript code files.
- **`6_Project_Testing/`**: Test cases and execution screenshots for validation.
- **`7_Project_Documentation/`**: Configuration guide and setup documentation.
- **`8_Project_Demonstration/`**: Contains the public Google Drive demo video link.

---

## 🛠️ Key Technical Components Implemented

1. **UI Policy (`High Impact Control`):**
   - Triggers when `Impact = 1 - High`.
   - Makes `Assignment group` mandatory.
   - Sets `Urgency` to Read-Only.
   - Automatically reverts when conditions are false (`Reverse if false = true`).

2. **Client Scripts:**
   - **`onChange` (Impact):** Automatically updates `Urgency` to `1 - High` and displays an informative banner when `Impact` changes to `High`.
   - **`onSubmit`:** Validates that `Assigned To` is populated before submitting high-impact incidents, blocking submission if blank.
   - **`onCellEdit` (State):** Blocks inline list editing on the `State` field and alerts users to open the record directly.
