PUT _template/filebeat
{
  "order": 1,
  "index_patterns": [
    "filebeat-*"
  ],
  "settings": {
    "index": {
      "mapping": {
        "total_fields": {
          "limit": "10000"
        }
      },
      "refresh_interval": "5s",
      "number_of_routing_shards": "30",
      "number_of_shards": "3"
    }
  },
  "mappings": {
    "doc": {
      "_meta": {
        "version": "6.1.3"
      },
      "date_detection": false,
      "dynamic_templates": [
        {
          "fields": {
            "mapping": {
              "type": "keyword"
            },
            "match_mapping_type": "string",
            "path_match": "fields.*"
          }
        },
        {
          "strings_as_keyword": {
            "mapping": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "match_mapping_type": "string"
          }
        }
      ],
      "properties": {
        "@timestamp": {
          "type": "date"
        },
        "beat": {
          "properties": {
            "hostname": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "name": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "timezone": {
              "ignore_above": 1024,
              "type": "keyword"
            },
            "version": {
              "ignore_above": 1024,
              "type": "keyword"
            }
          }
        },
        "error": {
          "properties": {
            "code": {
              "type": "long"
            },
            "message": {
              "norms": false,
              "type": "text"
            },
            "type": {
              "ignore_above": 1024,
              "type": "keyword"
            }
          }
        },
        "fields": {
          "type": "object"
        },
        "message": {
          "norms": false,
          "type": "text"
        },
        "offset": {
          "type": "long"
        },
        "read_timestamp": {
          "ignore_above": 1024,
          "type": "keyword"
        },
        "source": {
          "ignore_above": 1024,
          "type": "keyword"
        },
        "tags": {
          "ignore_above": 1024,
          "type": "keyword"
        }
      }
    }
  },
  "aliases": {}
}