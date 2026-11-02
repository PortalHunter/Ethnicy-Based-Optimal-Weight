# Privacy and data minimization

**Intended design:** Static local execution, without a user account, remote calculation API, analytics, remote telemetry or browser storage. The original implementation uses local form inputs for calculations. The research preview is read-only, and no real medical or genomic inputs are accepted.

**Not a promise about hosting:** If a file is hosted on a third-party web service, that host may log visitors' IP addresses and ordinary HTTP access metadata. Citation links open external publishers that have their own privacy policies.

**No health-data collection without review:** Do not add logging, error-report uploads, persistent browser storage, genetics uploads, cookie identifiers, condition questionnaires that transmit data, or external analytics without a documented purpose, explicit consent model where needed, retention/deletion rules, security review, and applicable legal assessment. Tests must contain only fictional/synthetic examples.

For local/offline use, open the HTML from disk. Questions about host-level logs should be directed to the website operator.

