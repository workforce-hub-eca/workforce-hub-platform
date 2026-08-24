# Backend Platform (Infrastructure Layer) 🏗️

| | |
|---|---|
| **Student** | L.K.H. Manuth Lakdiw |
| **Student Number** | 241722018 |
| **Batch** | GDSE-72 |
| **GCP Project** | `workforce-hub-cloud` |

## Project Description

This repository houses the core infrastructure foundation that enables the WorkForceHub microservices ecosystem to operate. It contains three Git submodules — the API Gateway, Config Server and Eureka Discovery Server — which together provide centralized configuration, service discovery and unified API routing for all business-layer microservices.

## 📦 Submodule Structure

| Submodule | Path | Purpose |
|---|---|---|
| API Gateway | `api-gateway/` | Routes all external traffic into the internal microservice network |
| Config Server | `config-server/` | Provides unified YAML configurations to all microservices at startup |
| Eureka Server | `eureka-server/` | Netflix Eureka registry for dynamic service discovery |

## 🛠️ Technology Stack

- **Java**: 25
- **Spring Boot**: 4.1.0
- **Spring Cloud**: 2025.1.2
- **Spring Cloud Gateway** (WebMVC)
- **Spring Cloud Config Server**
- **Netflix Eureka Server**

## 🚀 Getting Started

### Clone with submodules

```bash
git clone --recurse-submodules https://github.com/workforce-hub-eca/workforce-hub-platform.git
```

If already cloned without submodules:

```bash
git submodule update --init --recursive
```

### Local startup order

Start the services in the following order:

1. **Config Server** — Port `8888`
2. **Eureka Server** — Port `8761`
3. **API Gateway** — Port `8080`

Each service must be fully healthy before starting the next.

## ☁️ Production Deployment

- **Runtime**: Regional Managed Instance Group (`workforce-hub-backend-mig`)
- **Template**: `workforce-hub-backend-template-v2`
- **Region**: `asia-south1`
- **Zones**: `asia-south1-a` and `asia-south1-b`
- **Autoscaling**: Minimum 2, maximum 4 instances
- **Process Manager**: PM2 with systemd automatic startup and recovery
- **Load Balancers**:
  - `lb-workforce-hub-api-gateway` — Public traffic to the API Gateway
  - `lb-workforce-hub-config-server` — Internal traffic to the Config Server

Each MIG instance runs a complete backend stack (Config Server, Eureka Server, API Gateway and all business microservices) managed by PM2. Backend availability across zones is provided by the regional MIG autoscaler.
