# Phase 5: Project Development

## Overview
This phase details the implementation of client-side logic on the ServiceNow Incident (`[incident]`) table, including the setup of a UI Policy and three custom Client Scripts to enforce data integrity and user interaction guidelines.

---

## 1. UI Policy Configuration
- **Policy Name:** High Impact Control
- **Table:** Incident `[incident]`
- **Execution Condition:** `Impact IS 1 - High`
- **Reverse if false:** `true`

### UI Policy Actions
1. **Assignment Group (`assignment_group`):** `Mandatory` set to **True**.
2. **Urgency (`urgency`):** `Read-only` set to **True**.

---

## 2. Client Scripts

### A. `onChange` Client Script
- **Name:** Auto set urgency for high impact
- **Type:** `onChange`
- **Field Name:** `Impact`
- **Purpose:** Automatically sets `Urgency` to `1 - High` and displays an informative banner whenever the `Impact` field is set to `1 - High`.

```javascript
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    if (newValue == '1') {
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage('Urgency set to High for High impact incident.');
    }
}
```
### 3. `onSubmit` Client Script
- **Name:** Prevent save if Assigned To missing
- **Type:** `onSubmit`
- **Table:** Incident `[incident]`
- **Description:** Validates form input before saving. If the Incident `Impact` is set to `1 - High` and the `Assigned To` field is left empty, the script cancels form submission and displays an error box.

```javascript
function onSubmit() {
    if (g_form.getValue('impact') == '1' && g_form.getValue('assigned_to') == '') {
        g_form.showErrorBox('assigned_to', 'Assigned To is mandatory for High impact incidents.');
        return false;
    }
    return true;
}
```
### 4. `onCellEdit` Client Script

- **Script Name:** Prevent state change via list edit
- **Table:** Incident `[incident]`
- **Script Type:** `onCellEdit`
- **Field Name:** `State`
- **Description:** Prevents users from modifying the `State` field directly from the Incident list view using list editing. It displays a pop-up alert instructing the user to open the Incident record, then cancels the edit.

```javascript
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    alert('State cannot be updated using list editing. Please open the Incident.');
    callback(false);
}
