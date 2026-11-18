# GHAS Explained

A practical, unofficial GitHub Advanced Security guide: **understand, enable, use, fix**.

Published URL (unchanged): https://onurpiskin.github.io/ghas-explained/

## Contents

- Ten feature guides with expandable setup/use instructions and nearby official sources.
- First-repository checklist, three independently controlled AI Scan capabilities, and separate organization rollout guidance.
- Code, secret and dependency remediation examples; incoming SARIF/external CI and outgoing webhook/API integrations.
- Licensing, AI-credit usage and Actions costs, including the rolling **90-day pushed-commit** activity window.

Targets GitHub.com / Enterprise Cloud. GHES availability must be checked against version-specific documentation. AI behavior, billing and public USD license list prices were verified on **18 November 2026**. Preview features and prices can change. This is not a quote; recheck [official pricing](https://github.com/security/plans) and [billing documentation](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security) before enablement.

## Local preview

No build step, dependencies, account connection or external assets. From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. `index.html` holds all content, `guide.css` provides responsive dark/light styling, and `guide.js` enhances theme selection and checklist progress. Content, links and native expandable panels work without JavaScript. Theme preference is stored locally; checklist progress is only a page-session planning aid and never changes GitHub settings.

## Review before publication

Check desktop and narrow mobile layouts, all navigation anchors, keyboard-operated Setup/Use panels, theme switching and persistence, checklist progress, and pricing-table scrolling. Confirm no horizontal page overflow and no browser errors. Keep illustrative data labeled and never use real credentials in examples.

The existing GitHub Pages URL is preserved. Local changes do not publish themselves; deployment remains a separate decision.
