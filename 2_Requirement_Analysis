# Phase 2: Requirement Analysis

## Functional Requirements
1. **Dynamic Field Controls (UI Policy):**
   - When Incident Impact is set to `1 - High`, the `Assignment group` field must become mandatory.
   - When Incident Impact is set to `1 - High`, the `Urgency` field must become read-only.
   - If Impact is changed away from `1 - High`, these rules must revert automatically.

2. **Automated Urgency Update (onChange Client Script):**
   - Automatically set `Urgency` to `1 - High` and display an info message when `Impact` changes to `1 - High`.

3. **Form Save Validation (onSubmit Client Script):**
   - Prevent saving or submitting an Incident if `Impact` is `1 - High` and the `Assigned To` field is left blank. Display a field error box.

4. **List Editing Restriction (onCellEdit Client Script):**
   - Prevent users from changing the Incident `State` field directly from the list view. Display an alert directing them to open the form.

## Technical Specifications
- **Platform:** ServiceNow Developer Instance
- **Table:** `Incident [incident]`
- **Components:** 1 UI Policy, 2 UI Policy Actions, 3 Client Scripts (`onChange`, `onSubmit`, `onCellEdit`)
