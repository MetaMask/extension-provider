# Security hardening notes

Practical tips when integrating with a browser extension provider.

## Message validation

- Validate message origin and shape before acting on it.
- Reject unknown methods and unexpected payloads.

## Permissions

- Ask only for the minimum permissions required.
- Prefer opt-in features over implicit enablement.

## Logging

- Avoid logging secrets (tokens, signatures, private keys).
- Redact sensitive fields in debug output.

This doc is intentionally short—extend it as new risks are discovered.
