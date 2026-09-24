# Phase 7: Project Documentation

## Technical Configuration Summary

| Feature / Artifact | Type | Target Table | Target Field | Key Logic / Action |
| :--- | :--- | :--- | :--- | :--- |
| **High Impact Control** | UI Policy | `incident` | `Impact` | Triggers when `Impact = 1 - High`. Sets `urgency` to Read-only and `assignment_group` to Mandatory. |
| **Auto set urgency** | Client Script (`onChange`) | `incident` | `Impact` | Sets `urgency` value to `1` and adds an Info Message banner on High Impact selection. |
| **Prevent save if Assigned To missing** | Client Script (`onSubmit`) | `incident` | Form Level | Cancels submission (`return false`) and shows an error under `assigned_to` if empty on High Impact. |
| **Prevent state change via list edit** | Client Script (`onCellEdit`) | `incident` | `State` | Cancels inline list edit (`callback(false)`) and alerts user to open the Incident record. |

---

## System Configuration Details

### 1. Instance Details
- **Instance URL:** `dev425939.service-now.com`
- **Application Scope:** Global
- **Target Table:** Incident `[incident]`

---

### 2. UI Policy Setup
- **Policy Name:** `High Impact Control`
- **Conditions:** `Impact IS 1 - High`
- **Reverse if false:** `true`

![UI Policy Setup](./Screenshot%20(8).png)
![UI Policy Actions](./Screenshot%20(9).png)

---

### 3. Client Scripts Setup

#### A. onChange Client Script
- **Name:** Auto set urgency for high impact
- **Type:** `onChange` | **Field Name:** `Impact`

![onChange Script Setup](./Screenshot%20(7).png)

#### B. onSubmit Client Script
- **Name:** Prevent save if Assigned To missing
- **Type:** `onSubmit`

![onSubmit Script Setup](./Screenshot%20(6).png)

#### C. onCellEdit Client Script
- **Name:** Prevent state change via list edit
- **Type:** `onCellEdit` | **Field Name:** `State`

![onCellEdit Script Setup](./Screenshot%20(5).png)shots directly into this folder.
