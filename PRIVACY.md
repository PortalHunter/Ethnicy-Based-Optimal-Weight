# Privacy and data minimization

**Intended design:** Static local execution, without a user account, remote calculation API, analytics, remote telemetry or browser storage. The original implementation uses local form inputs for calculations. The research preview is read-only, and no real medical or genomic inputs are accepted.

**Not a promise about hosting:** If a file is hosted on a third-party web service, that host may log visitors' IP addresses and ordinary HTTP access metadata. Citation links open external publishers that have their own privacy policies.

**No health-data collection without review:** Do not add logging, error-report uploads, persistent browser storage, genetics uploads, cookie identifiers, condition questionnaires that transmit data, or external analytics without a documented purpose, explicit consent model where needed, retention/deletion rules, security review, and applicable legal assessment. Tests must contain only fictional/synthetic examples.

For local/offline use, open the HTML from disk. Questions about host-level logs should be directed to the website operator.


## Optional lab entry (educational prototype)

The lab-entry section holds values in page memory only. It does not store entries in localStorage, cookies, databases or external services, and it does not send them to the maintainer. Clearing entries or reloading the page discards them. The site does not currently parse or accept uploaded reports.

The public hosting provider may still receive ordinary page requests and IP/access metadata (as described above), but the lab form does not transmit result values. Do not post personal lab reports or sensitive records to public GitHub issues.
