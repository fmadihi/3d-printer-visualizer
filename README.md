# 🖨️ 3D Printer Visualizer

An interactive, browser-based control studio for configuring 3D printer settings — bed dimensions, filament materials, thermal profiles, and G-code generation — with a live isometric preview.

🔗 **Live Demo:** [3d-printer-visualizer.vercel.app](https://3d-printer-visualizer.vercel.app/)

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 📸 Screenshots

<!-- Add your screenshot(s) below -->
<p align="center">
  <img src="./Pic01.png" alt="3D Printer Visualizer preview" width="800" />
</p>
<p align="center">
  <img src="./Pic02.png" alt="3D Printer Visualizer preview" width="800" />
</p>
## ✨ Features

- **Isometric Bed Preview** — Real-time 3D-style visualization of the print bed with dynamic dimensions, center/origin markers, and a sample cube rendered in the selected filament color.
- **Material Presets** — Quick selection of common filaments (PLA, ABS, PETG) with pre-configured safe temperature ranges.
- **Manual Controls** — Fine-tune bed dimensions (X/Y/Z), nozzle temperature, and heated bed temperature.
- **Thermal Safety Monitoring** — Live status badge ("Optimal", warnings, etc.) when nozzle/bed temperatures fall outside the safe range for the selected material.
- **Filament Color Swatches** — Color palette instantly reflected on the 3D preview.
- **Export Panel**
  - Export full printer configuration as JSON
  - Auto-generate a starter G-code script (`M140`, `M104`, `M190`, `M109`, `G28`, `G29`, `G92`, `G1`)
  - One-click copy to clipboard

## 🛠️ Tech Stack

| Category   | Tools |
|------------|-------|
| Framework  | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling    | Tailwind CSS 3 |
| Tooling prefixer |
| Depl, Autoprefixer |
| Deployment | Vercel |

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone <your-repo-url>
cd 3d-printer-visualizer
npm install

### Development

bash
npm run dev

Opens the app locally with hot-reload via Vite.

### Production Build

bash
npm run build

Type-checks with `tsc` then builds an optimized bundle via Vite.

### Preview Production Build

bash
npm run preview

## 📁 Project Structure


src/
├── components/
│   ├── ControlPanel.tsx     # Material, dimension, and temperature controls
│   ├── PrintBed3D.tsx       # Isometric bed/print preview
│   ├── OutputPanel.tsx      # JSON + G-code export
│   ├── ThermalBadge.tsx     # Safe temperature range warnings
│   └── FilamentSwatch.tsx   # Color palette selector
├── data/
│   └── materials.ts         # Material presets (PLA, ABS, PETG)
├── hooks/
│   └── usePrinterState.ts   # Central printer state logic
├── types/
│   └── printer.ts           # Shared TypeScript types
└── App.tsx

## 📄 License

MIT


فایل رو هم در [sandbox:/mnt/data/README.md](https://gapgpt.app/api/v1/code_interpreter/18083467/1892a65a-e243-4131-85a4-b6b334aa9975/eyJ1c2VyX2lkIjoxODA4MzQ2NywiY2hhdF90b2tlbiI6IjE4OTJhNjVhLWUyNDMtNDEzMS04NWE0LWI2YjMzNGFhOTk3NSIsImZpbGVfcGF0aCI6IlJFQURNRS5tZCJ9:1wzY7o:cV29eioXZlIMT6HmxPTu33lE58-ciwotajIc_CvE73s/README.md) ساختم. تصویر رو در پوشه `screenshots/preview.png` کنار پروژه بگذار (یا مسیر رو در فایل عوض کن) تا در گیت‌هاب نمایش داده شود.
