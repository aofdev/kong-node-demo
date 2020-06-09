# kong-node-demo

## Prerequisite

```sh
docker-compose up
```

## Demo (on postman)

import file to postman your

```sh
Kong.postman_collection.json
```

### Example enabled plugins rate-limiting

```sh
curl -X POST http://localhost:8001/services/api-v1-customers/plugins \
--data "name=rate-limiting" \
--data "config.minute=2" \
--data "config.hour=100"
```
