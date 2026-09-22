# Phase 3: Project Design

## Workflow & Logic Flow

1. **UI Policy Architecture (`High Impact Control`):**
   - **Condition:** `Impact IS 1 - High`
   - **Actions:**
     - `Assignment group` $\rightarrow$ `Mandatory = True`
     - `Urgency` $\rightarrow$ `Read-only = True`
   - **Reverse if false:** `True`

2. **Client Script Execution Logic:**

   - **`onChange` (Impact Field):**
     - Trigger: `Impact` field value changes to `1`.
     - Action: Set `urgency` to `1` using `g_form.setValue()`; display banner using `g_form.addInfoMessage()`.

   - **`onSubmit` (Form Submission):**
     - Trigger: User clicks Submit/Update.
     - Action: Check if `impact == '1'` AND `assigned_to == ''`. If true, trigger `g_form.showErrorBox()` and return `false` to block save.

   - **`onCellEdit` (List View):**
     - Trigger: User attempts inline editing on the `State` column in list view.
     - Action: Trigger browser `alert()` and invoke `callback(false)` to cancel the edit.
