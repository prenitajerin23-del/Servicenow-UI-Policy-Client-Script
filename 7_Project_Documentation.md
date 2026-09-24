# Phase 7: Project Documentation

## Setup & Configuration Guide

### 1. ServiceNow Instance & Navigation
- **Instance URL:** `dev425939.service-now.com`
- **Target Table:** Incident `[incident]`

---

### 2. UI Policy Implementation
- **Policy Name:** `High Impact Control`
- **Conditions:** `Impact IS 1 - High`
- **Reverse if false:** `True`
- **UI Policy Actions:**
  1. `Assignment group` -> `Mandatory: true`
  2. `Urgency` -> `Read-only: true`

---

### 3. Client Scripts Overview

1. **`onChange` Client Script:**
   - **Name:** Auto set urgency for high impact
   - **Field name:** `impact`
   - **Logic:** Automatically sets `urgency` to `1` and prints an informative message banner when impact is changed to `1`.

2. **`onSubmit` Client Script:**
   - **Name:** Prevent save if Assigned To missing
   - **Logic:** Evaluates form values prior to save. If impact is `1` and `assigned_to` is empty, displays a field error box and cancels submission (`return false`).

3. **`onCellEdit` Client Script:**
   - **Name:** Prevent state change via list edit
   - **Field name:** `state`
   - **Logic:** Triggers a browser alert informing the user that state cannot be updated via list editing and cancels the action (`callback(false)`).

---

## Configuration Screenshots
Upload UI Policy configuration, UI Policy Actions, and Client Script setup screenshots directly into this folder.
