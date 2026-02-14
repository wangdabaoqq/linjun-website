# Dashboard Overview

> Version: v1.0.0+
> Updated: 2024-02-13

## Overview

The Dashboard is LinJun's core monitoring page, providing real-time request traffic, token usage, and success rate statistics.

## Key Metrics

### Request Statistics

- **Total Requests**: Total API requests in the time period
- **Successful Requests**: Number of requests with successful status
- **Failed Requests**: Number of error or timeout requests
- **Success Rate**: Percentage of successful requests

### Token Usage

- **Input Tokens**: Number of tokens sent to AI
- **Output Tokens**: Number of tokens returned by AI
- **Total Tokens**: Input + Output combined

### Response Time

- **Average Response Time**: Average request duration
- **P95 Response Time**: 95th percentile response time
- **Max Response Time**: Slowest request duration

## Provider Efficiency Table

The table shows detailed statistics per provider:

| Field | Description |
|-------|-------------|
| Provider | Provider name |
| Requests | Total request count |
| Success Rate | Success percentage |
| Avg Latency | Average response time |
| Tokens | Token usage |

### Provider Name Display Rules

- **Standard providers**: Shows service name (e.g., `claude`, `gemini`)
- **Custom providers**: Shows as `custom · name`
- **Unrecognized**: Rarely shows `unknown`

## Time Range

Supported time range filters:

- Last 1 hour
- Last 24 hours
- Last 7 days
- Last 30 days

## Real-time Updates

Dashboard automatically refreshes data for real-time monitoring. You can also click the refresh button to update manually.

## Next Steps

- [Quota Monitoring](./quota)
- [View Request Logs](./logs)
