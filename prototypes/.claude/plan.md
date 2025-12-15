# Date Range Card Refactoring Plan

## Goal
Replace custom styled date range cards with proper SUI components matching production patterns.

## Production Analysis
From production HTML, the structure is:
- Simple list item with flex layout (no SmCard)
- SmDatePicker with visible label ("Excluded date range")
- Two text buttons inline: Clear (type="text") and Delete (type="text-warning")

## Current vs Target Structure

### Current (Custom)
```vue
<div class="date-range-item">
  <div class="date-range-header">
    <span class="date-range-label">Date range</span>
    <div class="date-range-actions">
      <button class="date-range-action-btn clear-btn">Clear</button>
      <button class="date-range-action-btn delete-btn">Delete</button>
    </div>
  </div>
  <SmDatePicker :label-hidden="true" />
</div>
```

### Target (SUI)
```vue
<div class="date-range-item">
  <SmDatePicker label="Date range" />
  <SmButton type="text" size="large">Clear</SmButton>
  <SmButton type="text-warning" size="large">Delete</SmButton>
</div>
```

## Implementation Steps

### 1. Update Slide1.vue (5 instances)
Replace all date range card structures:
- Included stay dates (lines 161-179)
- Excluded stay dates (lines 205-223)
- Included advertised dates (lines 249-267)
- Excluded advertised dates (lines 286-304)
- Seasonal override date ranges (lines 455-469)

Changes per instance:
- Remove `.date-range-header`, `.date-range-label`, `.date-range-actions` divs
- Change SmDatePicker from `:label-hidden="true"` to `label="Date range"`
- Replace custom button elements with SUI SmButton components:
  - Clear: `<SmButton type="text" size="large" @click="...">Clear</SmButton>`
  - Delete: `<SmButton type="text-warning" size="large" @click="...">Delete</SmButton>`

### 2. Update form-utilities.scss
Replace `.form-card-item` styling with flex layout for new structure:
```scss
.form-card-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
```

Remove unused styles:
- `.form-card-header`
- `.form-card-label`
- `.form-card-actions`
- `.action-btn` and its modifiers (`.clear-btn`, `.delete-btn`)

### 3. Update slide-layout.scss
Remove backwards compatibility aliases:
- `.date-range-header`
- `.date-range-label`
- `.date-range-actions`
- `.date-range-action-btn`

Keep `.date-range-item` alias that extends `.form-card-item`.

## Files to Modify
1. `/Users/robert.stclair/repos/ux-prototypes-sui/prototypes/src/prototypes/dynamic-form/slides/Slide1.vue`
2. `/Users/robert.stclair/repos/ux-prototypes-sui/prototypes/src/shared/styles/form-utilities.scss`
3. `/Users/robert.stclair/repos/ux-prototypes-sui/prototypes/src/prototypes/dynamic-form/styles/slide-layout.scss`

## Expected Outcome
- Date range cards use proper SUI components
- Simplified flat structure matching production
- No custom button styling
- Cleaner, more maintainable code
