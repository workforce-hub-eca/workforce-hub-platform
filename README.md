# Backend Platform (Infrastructure Layer) 🏗️

This repository houses the core infrastructure foundation that enables the WorkForceHub microservices ecosystem to operate synchronously and securely.

## 📦 Services Overview
1. **API Gateway (`api-gateway/`)**: The frontline proxy routing all external traffic into the internal network. Driven by the new Spring Boot 4 WebMVC Gateway, it implements a native Servlet `CorsFilter` to intercept and manage frontend preflight traffic.
2. **Config Server (`config-server/`)**: The central nervous system for configuration. It provides unified properties across all microservices, ensuring settings like MongoDB URIs and routing rules can be updated centrally.
3. **Discovery Server (`eureka-server/`)**: The Netflix Eureka registry allowing dynamic, ID-based routing for inter-service communication via `@LoadBalanced` RestTemplates.

## 🚀 Startup Order
When spinning up the platform locally, order matters:
1. `config-server` (Port 8888)
2. `eureka-server` (Port 8761)
3. `api-gateway` (Port 8080)
