# Security policy

Report a suspected vulnerability privately to the repository maintainer through GitHub's **Report a vulnerability** feature (if enabled), rather than posting sensitive material in a public issue. Do not attach personal health records or raw DNA data.

The calculator currently runs as static HTML; do not add third-party trackers, server submissions, unsafe dynamic dependencies or credential-bearing source files. CI should use minimal job permissions. Deployment tokens, if ever added, belong in GitHub Actions secrets or a trusted OIDC flow, **never** in HTML, JavaScript or committed workflow values.

Changes affecting input handling, DOM rendering, dependencies, or GitHub Actions require security review. Clinical accuracy and scientific evidence are separate from information-security claims; the MIT license does not certify either.

No response-time guarantee or bug-bounty program is currently offered. Do not use this project for treatment or medication decisions.

