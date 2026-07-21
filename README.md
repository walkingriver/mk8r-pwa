# Mario Kart Randomizer (MK8R)

Sample application for [*Developing Progressive Web Applications with Angular*](https://gum.co/pwa-angular) by Michael D. Callaghan.

This is an unofficial fan utility for Mario Kart 8 (Wii U). It is not affiliated with Nintendo.

## Quick start

```bash
git clone https://github.com/walkingriver/mk8r-pwa.git
cd mk8r-pwa
nvm use          # requires Node 22.22.3+ (see .nvmrc)
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

Production build:

```bash
npm run build
```

Output is written to `www/`.

## Requirements

- Node.js **22.22.3+** (Angular 22 CLI requirement)
- npm 10+

Use [nvm](https://github.com/nvm-sh/nvm) if needed: `nvm install` in the project root reads `.nvmrc`.

## Branches

| Branch | Use when |
|--------|----------|
| `no-pwa` | Following the book from hosting onward — app **without** PWA/service worker |
| `main` | Finished sample — PWA, manifest, service worker, and in-app update prompts |

If you are working through the PWA chapters, start on `no-pwa`:

```bash
git checkout no-pwa
npm install
npm start
```

## Related links

- Book (DRM-free): https://gum.co/pwa-angular
- Video course: https://gum.co/angular-pwa
- Kindle: https://amzn.to/3teSRxf

## License

See repository license. Mario Kart is a trademark of Nintendo. This project uses fan-created assets only.
