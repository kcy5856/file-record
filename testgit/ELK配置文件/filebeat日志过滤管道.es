PUT _ingest/pipeline/test-pipeline
{
    "description": "test-pipeline",
    "processors": [
      {
        "grok": {
          "field": "message",
          "patterns": [
            "%{DATA:logTime} %{DATA:logLevel} %{DATA:userCode} %{IP:clientIp} %{DATA:clientId} %{IP:serverIp} %{DATA:reqUrl} %{DATA:mainTitle} %{GREEDYDATA:msg}"
          ],
          "ignore_missing": true
        }
      },
      {
        "remove": {
          "field": "message"
        }
      },
      {
        "date": {
          "field": "logTime",
          "formats": [
            "yyyy-MM-dd-HH:mm:ss"
          ]
        }
      }
    ]
  }