# Phase 7: Project Documentation

## System Configuration Overview

This document provides technical documentation and configuration details for the ServiceNow client-side customizations on the Incident (`[incident]`) table.

---

### 1. Instance Details
- **Instance URL:** `dev425939.service-now.com`
- **Application Scope:** Global
- **Target Table:** Incident `[incident]`

---

### 2. UI Policy Details
- **Policy Name:** `High Impact Control`
- **Table:** Incident `[incident]`
- **Conditions:** `Impact IS 1 - High`
- **Reverse if false:** `true`
- **Actions:**
  - `assignment_group` -> Mandatory: **True**
  - `urgency` -> Read-only: **True**

![UI Policy Setup](./Screenshot%20(8).png)
![UI Policy Actions](./Screenshot%20(9).png)

---

### 3. Client Scripts Setup Details

#### A. onChange Client Script
- **Name:** Auto set urgency for high impact
- **Type:** `onChange`
- **Field Name:** `Impact`
- **Logic:** Evaluates impact change and sets urgency to 1 with an info message banner.

![onChange Script Setup](./Screenshot%20(7).png)

#### B. onSubmit Client Script
- **Name:** Prevent save if Assigned To missing
- **Type:** `onSubmit`
- **Logic:** Intercepts save event; checks if impact is high and assigned_to is blank, cancelling submission if true.

![onSubmit Script Setup](./Screenshot%20(6).png)

#### C. onCellEdit Client Script
- **Name:** Prevent state change via list edit
- **Type:** `onCellEdit`
- **Field Name:** `State`
- **Logic:** Intercepts list view cell edit attempt and triggers alert dialog blocking the change.

![onCellEdit Script Setup](./Screenshot%20(5).png)
