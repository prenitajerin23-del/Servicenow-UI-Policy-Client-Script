# Phase 5: Project Development

## UI Policy Details
- **Name:** High Impact Control
- **Table:** Incident `[incident]`
- **Condition:** Impact is 1 - High
- **Actions:** 
  - Assignment group -> Mandatory: true
  - Urgency -> Read-only: true

## Client Scripts Included
1. `onChange_auto_urgency.js` (Type: onChange)
2. `onSubmit_assigned_to_validation.js` (Type: onSubmit)
3. `onCellEdit_block_state.js` (Type: onCellEdit)
