# Behaviours

Shared interaction engines that more than one component composes.

A behaviour sits between `src/utils` and `src/components`:

- **`src/utils`** — generic helpers that know nothing about our markup
  (`animate`, `aria`, `cookies`, `dom`, `icons`, `storage`, `string`, `timing`,
  `url`). Reusable in any project.
- **`src/behaviours`** — reusable interaction machinery that _does_ know QLD
  conventions (class names, analytics events, `data-` attribute contracts), but
  is not owned by a single component.
  - `collapsible.js` — the height-animated open/close engine behind the
    accordion, the breadcrumb overflow menu and the mega main navigation.
  - `popover/` — the anchored content-box engine behind the tool tip and the
    toggle tip.
- **`src/components/<name>`** — a single component's markup, styles and
  behaviour.

If a module reaches for a `qld__*` class, a `dataLayer` event, or component
semantics, it is a behaviour, not a util. If it does none of those and is only
used by one component, it belongs in that component.
