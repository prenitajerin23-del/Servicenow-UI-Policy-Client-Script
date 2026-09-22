# Phase 5: Project Development

## ServiceNow Configurations and Scripts

This document details all UI Policies and Client Scripts configured for the Incident form logic and list view rules.

---

 1. Mandatory Check Logic (UI Policy)
* **Target Table:** Incident (`incident`)
* **Condition:** `Impact` IS `1 - High`
* **Execution:** Makes the `Assigned to` field mandatory on the incident form.

```javascript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Assigned to: Mandatory = true

2. Auto-Set Urgency to High (UI Policy and Action)
Target Table: Incident (incident)

Condition: Impact IS 1 - High

Execution: Sets Urgency to 1 - High automatically and locks the field.

JavaScript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Urgency: Set Value = 1 - High, Read-Only = true

3. Reverse Condition Logic (onChange Client Script)
Target Table: Incident (incident)

Type: onChange

Field Name: Impact

Execution: Re-enables the Urgency field when Impact is changed back to 2 - Medium.

JavaScript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue == '2') {
        g_form.setReadOnly('urgency', false);
    }
}

4. Prevent List Editing on State Field (onCellEdit Client Script)
Target Table: Incident (incident)

Type: onCellEdit

Field Name: State

Execution: Prevents inline list editing of the State field and triggers a popup alert instructing users to open the record.

JavaScript
function onCellEdit(sysID, table, oldValues, newValue, callback) {
    var saveSuccess = false;
    alert("State cannot be updated using list editing. Please open the Incident.");
    callback(saveSuccess);
}
