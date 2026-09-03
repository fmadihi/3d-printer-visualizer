# 🖨️ 3D Printer Visualizer

<div align="center">

  <p>An interactive 3D printer configuration dashboard for visualizing build volume, thermal settings, and printer profiles in real time, powered by React, TypeScript, and Vite.</p>

  [![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://3d-printer-visualizer.vercel.app/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColorlogo=react&logoColor=black)](https://react.dev/)
  [![Typeields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

  <br />

  <a href="https://3d-printer-visualizer.vercel.app/"><strong>Explore the Live Demo »</strong></a>

</div>

---

>

---

## ✨ Features

- **Interactive Build Volume Visualization:** Realometric preview of the printer's build volume based on the configured dimensions.
- **Dynamic Printer Dimensions:**
  - 📏 **Width:** Configure the X-axis build dimension.
  - ↔️ **Depth:** Configure the Y-axis build dimension.
  - ↕️ **Height:** Configure the Z-axis build dimension.
- **Thermal Configuration:**
  - 🔥 **Nozzle Temperature:** Set the target printing temperature.
  - 🌡️ **Heated Bed Temperature:** Configure the heated bed temperature.
  - 📊 **Temperature Status:** View the current thermal configuration in a clear dashboard interface.
- **Material Presets:** Select common printing materials, such as PLA, with predefined temperature values.
- **Filament Color Customization:** Personalize the visual preview by selecting a custom filament color.
- **Printer Configuration Export:** Generate a structured JSON configuration based on the selected printer settings.
- **Start Script Preview:** View a generated printer start script based on the current configuration.
- **Responsive Dashboard:** Clean, dark-themed interface optimized for desktop and smaller screens.
- **Type-Safe Architecture:** Built with strict TypeScript types and reusable React components.

---

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🖥️ How It Works

1. Configure the printer's build volume by entering the desired width, depth, and height.
2. Select a printing material from, and height.
2. Select a printing material from the available presets.
3. Adjust nozzle used in the visualization.
5. Review the updated isometric printer preview.
6. Inspect or export the generated printer configuration and start script.

---

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (`v18.0.0` or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/fmadihi/3d-printer-visualizer.git
cd 3d-printer-visualizer
npm install
npm run dev
```

---

## 📂 Project Structure
```text
3d-printer-visualizer/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and project assets
│   ├── components/         # Reusable UI components
│   ├── data/               # Material presets and configuration data
│   ├── types/              # TypeScript interfaces and type definitions
│   ├── App.tsx             # Main application layout and state management
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### 👩‍💻 Author
Fatemeh Madihi
