# Phase 5: Project Development

## ServiceNow Configurations and Scripts

This document details all UI Policies and Client Scripts configured for the Incident form logic and list view rules.

---

### 1. Mandatory Check Logic (UI Policy)
* **Target Table:** Incident (`incident`)
* **Condition:** `Impact` IS `1 - High`
* **Execution:** Makes the `Assigned to` field mandatory on the incident form.

```javascript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Assigned to: Mandatory = true

```
<img width="1366" height="768" alt="1_Mandatory_Check_Test" src="https://github.com/user-attachments/assets/a62885ca-9222-4aed-bd40-aad77615565c" />

### 2. Auto-Set Urgency to High (UI Policy and Action)
* **Target Table:** Incident (`incident`)
* **Condition:** `Impact` IS `1 - High`
* **Execution:** Sets `Urgency` to `1 - High` automatically and locks the field.

```javascript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Urgency: Set Value = 1 - High, Read-Only = true

```
<img width="1366" height="768" alt="2_Auto_Urgency" src="https://github.com/user-attachments/assets/024f7bd4-c6b9-4ed3-97fc-c0cc142521e4" />

### 3. Reverse Condition Logic (onChange Client Script)
* **Target Table:** Incident (`incident`)
* **Type:** `onChange`
* **Field Name:** `Impact`
* **Execution:** Re-enables the `Urgency` field when `Impact` is changed back to `2 - Medium`.

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue == '2') {
        g_form.setReadOnly('urgency', false);
    }
}

```
<img width="1366" height="768" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/725bf0ab-1a5e-4637-9438-034ecaf36e4a" />

### 4. Prevent List Editing on State Field (onCellEdit Client Script)
* **Target Table:** Incident (`incident`)
* **Type:** `onCellEdit`
* **Field Name:** `State`
* **Execution:** Prevents inline list editing of the `State` field and triggers a popup alert instructing users to open the record.

```javascript
function onCellEdit(sysID, table, oldValues, newValue, callback) {
    var saveSuccess = false;
    alert("State cannot be updated using list editing. Please open the Incident.");
    callback(saveSuccess);
}
```
<img width="1366" height="768" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/a849fa10-0fe4-4462-ae76-722f6220fe0c" />

