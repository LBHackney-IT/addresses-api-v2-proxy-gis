# GitHub Repository Template

## About

This is a serverless function that calls the Addresses API, to keep the API token secure. 
It can pass the following query parameters:

- postcode
- UPRN
- usage_primary
- address_status
- query (full text search)
- page

It only allows cross-domain requests from the Hackney website and Hackney GIS pages.

## Build/Setup

Deployed in Circle-CI

## Setting Up Git

```bash
command run
```

## Branching

Notes on GitFlow and links to docs

## Git Secrets
Secrets are defined in CircleCI env variables:
- Addresses API token 
- Whitelist of Allowed Origin Requests (CORS) with the following format : ['origin1.gov.uk','origin2.gov.uk']

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
