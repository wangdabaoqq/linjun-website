# Logs

> Version: v1.0.0+
> Updated: 2024-02-13

## What You'll Accomplish

- View and filter request logs
- Diagnose failed request causes

## Prerequisites

- Proxy service is running
- Have request records

## Overview

The Logs page provides complete API request history, supporting high-performance browsing for large datasets (virtualized table and incremental polling).

## Steps

### View Logs

1. Click the **Logs** menu on the left
2. Logs display in reverse chronological order
3. Table supports virtual scrolling for smooth browsing of large log volumes

### Filter Logs

Supported filter conditions:

- **Time Range**: Select start and end time
- **Provider**: Filter by specific provider
- **Status**: Success/Failed
- **Keyword**: Search request content

### View Details

Click any log row to expand and view:

- Complete request headers
- Request body
- Response status
- Error message (if any)
- Token usage

## Log Field Descriptions

| Field | Description |
|-------|-------------|
| Time | Request timestamp |
| Provider | Target provider |
| Account | Account used |
| Model | Model used |
| Status | HTTP status code |
| Latency | Total request duration |
| Tokens | Token usage |

## Performance Optimization

LinJun optimizes for large log volumes:

- **Virtualized Table**: Only renders visible area, supports smooth scrolling for tens of thousands of logs
- **Incremental Polling**: Only fetches new logs, reduces data transfer

## Verification

- **Expected**: Log list shows request records
- **If not**: Confirm proxy is running and has requests passing through

## Common Issues

### Logs are empty

- Confirm proxy service is started
- Confirm CLI tool is correctly configured with proxy address (`http://localhost:8310`)
- Send a test request

### Can't find specific request

- Expand time range
- Use keyword search
- Check provider filter condition

### Logs loading slowly

- Narrow time range to reduce data
- Use filters to locate specific logs

## Next Steps

- [Dashboard Overview](./overview)
- [Quota Monitoring](./quota)
