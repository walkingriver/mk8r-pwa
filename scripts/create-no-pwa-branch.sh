#!/usr/bin/env bash
# Creates or updates the no-pwa branch from a committed main branch.
# Usage: ./scripts/create-no-pwa-branch.sh
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Commit or stash changes on main before running this script." >&2
  exit 1
fi

git checkout main
git branch -D no-pwa 2>/dev/null || true
git checkout -b no-pwa

node <<'EOF'
const fs = require('fs');
const path = require('path');

const appModule = path.join('src/app/app.module.ts');
let moduleSource = fs.readFileSync(appModule, 'utf8');
moduleSource = moduleSource
  .replace(/import { ServiceWorkerModule } from '@angular\/service-worker';\n/, '')
  .replace(/import { environment } from '\.\.\/environments\/environment';\n/, '')
  .replace(/\s*ServiceWorkerModule\.register\([^)]+\)[^,]*,?\n/, '');
fs.writeFileSync(appModule, moduleSource);

const appComponent = path.join('src/app/app.component.ts');
fs.writeFileSync(appComponent, `import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Randomizer', url: '/slots', icon: 'shuffle' },
    { title: 'Settings', url: '/settings', icon: 'settings' }
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }
}
`);

let appHtml = fs.readFileSync(path.join('src/app/app.component.html'), 'utf8');
appHtml = appHtml.replace(/\s*<ion-item[\s\S]*?Check for Updates[\s\S]*?<\/ion-item>\n/, '\n');
fs.writeFileSync(path.join('src/app/app.component.html'), appHtml);

const angularJson = JSON.parse(fs.readFileSync('angular.json', 'utf8'));
const prod = angularJson.projects.app.architect.build.configurations.production;
delete prod.serviceWorker;
delete prod.ngswConfigPath;
const assets = angularJson.projects.app.architect.build.options.assets;
angularJson.projects.app.architect.build.options.assets = assets.filter((entry) => {
  if (typeof entry === 'string') {
    return !entry.includes('manifest.webmanifest');
  }
  return true;
});
const testAssets = angularJson.projects.app.architect.test.options.assets;
angularJson.projects.app.architect.test.options.assets = testAssets.filter((entry) => {
  if (typeof entry === 'string') {
    return !entry.includes('manifest.webmanifest');
  }
  return true;
});
fs.writeFileSync('angular.json', JSON.stringify(angularJson, null, 2) + '\n');

let indexHtml = fs.readFileSync(path.join('src/index.html'), 'utf8');
indexHtml = indexHtml
  .replace(/\s*<link rel="manifest" href="manifest\.webmanifest">\n/, '')
  .replace(/\s*<meta name="theme-color"[^>]*>\n/, '')
  .replace(/\s*<noscript>[\s\S]*?<\/noscript>\n/, '\n');
fs.writeFileSync(path.join('src/index.html'), indexHtml);

console.log('no-pwa branch files prepared.');
EOF

echo "Review changes, then: git add -A && git commit -m 'no-pwa starting point for book exercises'"
