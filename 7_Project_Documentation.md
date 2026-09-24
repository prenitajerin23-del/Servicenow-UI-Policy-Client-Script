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

<img width="1366" height="768" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/ab2f3bf1-082e-4800-9db5-6bb0296f1fc7" />

<img width="1366" height="768" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/a54b8e43-0460-4329-ba14-5d432346f2b4" />


---

### 3. Client Scripts Setup

#### A. onChange Client Script
- **Name:** Auto set urgency for high impact
- **Type:** `onChange` | **Field Name:** `Impact`

<img width="1366" height="768" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/c841fcd2-3c75-4030-84a4-97637950774f" />


#### B. onSubmit Client Script
- **Name:** Prevent save if Assigned To missing
- **Type:** `onSubmit`

<img width="1366" height="768" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/9d29050a-ac58-4e35-a75f-82842f21a925" />


#### C. onCellEdit Client Script
- **Name:** Prevent state change via list edit
- **Type:** `onCellEdit` | **Field Name:** `State`
  
<img width="1366" height="768" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/b01358c3-54a2-4b7a-86c5-3700e0cd059e" />

