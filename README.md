# ZEN-LYF AI

ZEN-LYF AI is an innovative healthcare platform providing personalized, AI-driven post-operative and wellness care. Our solution integrates wearable technology, automated AI medical analysis, and continuous wellness guidance for seamless hospital-to-home recovery.

## Project Structure

This project uses a hybrid monorepo approach:

```
zen-lyf/                     # Main repository
├── packages/                # Shared packages
│   ├── ui/                  # Shared UI components
│   ├── api-client/          # API client libraries
│   ├── data-models/         # Shared data models
│   └── utils/               # Shared utilities
└── docs/                    # Documentation
```

Additional repositories:
- zen-lyf-web: Web application
- zen-lyf-mobile: Mobile application
- zen-lyf-api: Backend API
- zen-lyf-infrastructure: Infrastructure as code

## Features

- AI-Powered Health & Fitness Tracking
- Smart Post-Op Recovery & AI-Powered Care
- Mental Wellness & Cognitive Training
- Wearables & Smart Home Integration
- Emergency Response & Fall Detection
- AI-Powered Medical Report Processing & Analysis

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Yarn (v1.22 or later)
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ssoundspro1/zen-lyf.git
   cd zen-lyf
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Build all packages:
   ```
   yarn build
   ```

## Development

Each package can be developed independently. Navigate to the package directory and run:

```
cd packages/[package-name]
yarn dev
```

## License

This project is proprietary and confidential.

## Contact

For any inquiries, please contact the project maintainers. 