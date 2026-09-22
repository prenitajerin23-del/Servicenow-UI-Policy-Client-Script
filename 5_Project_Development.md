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

### 2. Auto-Set Urgency to High (UI Policy and Action)
* **Target Table:** Incident (`incident`)
* **Condition:** `Impact` IS `1 - High`
* **Execution:** Sets `Urgency` to `1 - High` automatically and locks the field.

```javascript
// UI Policy Condition: Impact == 1
// Field Actions:
// - Urgency: Set Value = 1 - High, Read-Only = true
