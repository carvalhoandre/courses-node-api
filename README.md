# Backend Learning Project

Backend learning project built during the **Origamid Node.js course**, covering REST APIs, authentication, file uploads, Docker, rate limiting, and production deployment.

## About

This project was developed as part of the Origamid Node.js course, with the goal of exploring modern backend development practices and deployment workflows.

The application focuses on building a production-ready backend architecture, including API development, authentication, file management, containerization, security measures, and deployment.

## Features

* REST API development
* Authentication and authorization
* File upload handling
* PDF generation
* Docker containerization
* Docker Compose orchestration
* Rate limiting and API protection
* Environment-based configuration
* Secret management
* Production deployment setup
* Reverse proxy with Caddy

## Tech Stack

### Backend

* Node.js
* TypeScript

### Infrastructure

* Docker
* Docker Compose
* Caddy

### Libraries

* jsPDF

## Project Structure

```text
.
├── src/
├── front/
├── files/
├── secrets/
├── docker-compose.yml
├── Caddyfile
├── package.json
├── tsconfig.json
└── README.md
```

## Docker Services

### Node

The application container responsible for:

* Running the backend
* Persisting database data
* Managing uploaded files
* Loading environment variables
* Reading Docker secrets

### Caddy

The reverse proxy responsible for:

* HTTP and HTTPS traffic
* Automatic TLS certificates
* Static file serving
* Proxying requests to the backend

## Persistent Volumes

The following Docker volumes are used:

| Volume         | Purpose                         |
| -------------- | ------------------------------- |
| `db`           | Database persistence            |
| `files`        | Uploaded files storage          |
| `caddy_data`   | TLS certificates and Caddy data |
| `caddy_config` | Caddy configuration data        |

## Secrets

Sensitive values are managed through Docker Secrets:

```text
secrets/
├── email_key.txt
└── pepper.txt
```

These secrets are mounted inside the container at runtime and are not exposed through environment variables.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=3000
DOMAIN=your-domain.com
```

Adjust the variables according to your environment.

## Running with Docker Compose

Build and start the containers:

```bash
docker compose up --build -d
```

Stop the containers:

```bash
docker compose down
```

View logs:

```bash
docker compose logs -f
```

## Development

Install dependencies:

```bash
npm install
```

Run the TypeScript compiler:

```bash
npx tsc
```

## Dependencies

### Production

* jsPDF

### Development

* TypeScript
* @types/node

## Security

This project includes several production-oriented security practices:

* Docker Secrets
* Environment variable isolation
* Reverse proxy architecture
* HTTPS support through Caddy
* Rate limiting
* Secure file handling

## Learning Goals

This project was created to practice:

* API design
* Authentication flows
* File uploads and storage
* PDF generation
* Docker and containerization
* Reverse proxies
* Production deployment
* Backend security concepts

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
