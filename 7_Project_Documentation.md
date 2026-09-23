# Phase 7: Project Documentation

## Project Overview
This project delivers custom client-side automation and data validation controls for the **Incident (`incident`)** table in ServiceNow. The solution ensures accurate data capture during high-impact events and prevents unintended status updates from list views.

---

## Technical Artifacts & Components Summary

| Component Name | Artifact Type | Target Table | Trigger / Condition | Primary Action |
| :--- | :--- | :--- | :--- | :--- |
| **Mandatory Owner Check** | UI Policy | `Incident` | `Impact` IS `1 - High` | Sets `Assigned to` field as Mandatory. |
| **Auto-Set High Urgency** | UI Policy & Action | `Incident` | `Impact` IS `1 - High` | Sets `Urgency` to `1 - High` and makes it Read-Only. |
| **Unlock Urgency Logic** | Client Script (`onChange`) | `Incident` | `Impact` changes to `2 - Medium` | Re-enables editing on the `Urgency` field. |
| **State List Edit Protection** | Client Script (`onCellEdit`) | `Incident` | Editing `State` in List View | Cancels inline save and displays warning alert. |

---

## Code Implementations

### 1. Re-enable Urgency Field (`onChange` Client Script)
* **Script Type:** `onChange`
* **Field Name:** `Impact`
* **Table:** `Incident [incident]`

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    // Unlocks Urgency field when Impact transitions to Medium
    if (newValue == '2') {
        g_form.setReadOnly('urgency', false);
    }
}
```
### 2. Auto-Set Urgency to High (UI Policy and Action)
* **Target Table:** Incident (`incident`)
* **Condition:** `Impact` IS `1 - High`
* **Execution:** Sets `Urgency` to `1 - High` automatically and locks the field.

```javascript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Urgency: Set Value = 1 - High, Read-Only = true
```
## Maintenance & Administration Guidelines

1. **Update Sets:** Ensure all UI Policies and Client Scripts are captured within a dedicated ServiceNow Update Set before migrating across instances (Dev $\rightarrow$ Test $\rightarrow$ Prod).
2. **Execution Order:** Verify that UI Policy order values do not conflict with pre-existing global form rules on the `incident` table.
3. **Role Restrictions:** The list editing block currently applies to all users. If administrative roles require an exception, modify the `onCellEdit` script to check user roles:
   ```javascript
   if (g_user.hasRole('admin')) {
       callback(true); // Allow edit for admins
       return;
   } 
