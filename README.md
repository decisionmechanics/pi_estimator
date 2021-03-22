# Naive PI estimation web service

Naive PI REST service written in express.js. Designed for Docker demos.

## Build Docker image

```
docker build -t pi-estimator https://github.com/decisionmechanics/pi_estimator.git#main
```

As the build context is in the root of the main branch no sub folder is required. If the build context was in a "docker" folder the command would be

```
docker build -t pi-estimator https://github.com/decisionmechanics/pi_estimator.git#main:docker
```

## Run Docker container

```
docker run -d -p 8080:8080 --name --rm pi-estimator pi-estimator
```

This exposes the service on port 8080.

## Estimate PI

To obtain an estimate of PI use

```
curl "http://localhost:8080/?iterations=100"
```

Specify more iterations to increase the accuracy.
