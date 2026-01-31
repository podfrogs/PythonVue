# PythonVue
Working Sample with Python Flask SSR + Vue + Tailwind + TS
# Flask + Vue + Tailwind + TypeScript (SSR Hybrid Sample)

A lightweight full-stack starter demonstrating how to combine Python Flask server-side rendering with modern frontend tooling using Vue, Tailwind CSS, and TypeScript.

Flask renders the initial HTML, Vue adds client-side interactivity, Tailwind provides styling, and TypeScript compiles to browser-ready JavaScript.

---

## Introduction

This project combines classic Flask SSR with modern frontend tools to create hybrid web applications without SPA complexity.

---

## Purpose

- Server-side rendering with Flask  
- Client-side enhancement with Vue  
- Utility-first styling with Tailwind  
- Typed frontend using TypeScript  

Designed for dashboards, MVPs, admin panels, and internal tools.

---

## Benefits

- SEO-friendly SSR  
- Progressive enhancement  
- Minimal build pipeline  
- Typed frontend logic  
- Simple deployment  

---

## Project Structure

```text
.
├── app.py
├── requirements.txt
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   ├── styles.css
    │   └── output.css
    └── js/
        ├── main.ts
        └── main.js


✔ Dockerfile + compose  
✔ Vite migration  
✔ Hot reload  
✔ Production nginx  
✔ Modular Flask layout  

```
## Requirements
- Python 3.9+
- Node.js 18+
- npm

## Backend Setup
```text
python -m venv venv
source venv/bin/activate
# Windows:
# venv\Scripts\activate
```
### Install Python dependencies:
```text
pip install -r requirements.txt
```
## Frontend Setup
```text
npm install
```
## Development

### Compile TypeScript:
```text
npx tsc

```
### Build Tailwind (watch mode):
```text
npx tailwindcss -i ./static/css/styles.css -o ./static/css/output.css --watch
```
### Run Flask:
```text
python app.py
```
### Open browser:
```text
http://localhost:5000

```
## Production Build
```text
npx tsc
npx tailwindcss -i ./static/css/styles.css -o ./static/css/output.css --minify
```
Run Server
```text
python app.py # DEV
gunicorn app:app #PROD

```
## License
```text
This one is structurally correct Markdown.

If this doesn’t render properly, GitHub itself is broken — not the README.
---



