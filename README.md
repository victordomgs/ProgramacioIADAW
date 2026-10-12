# M0617 · Programació Assistida per IA

Material didàctic del mòdul optatiu **M0617 Programació Assistida per IA** del 2n curs del CFGS de **Desenvolupament d'Aplicacions Web (DAW)** de l'Institut Sabadell. Curs 2026-2027.

🌐 **Web del mòdul:** <https://victordomgs.github.io/ProgramacioIADAW/>

## Estructura del repositori

```
.
├── docs/                         # Contingut publicat a GitHub Pages
│   ├── index.md                  # Portada
│   ├── modul/                    # Programació didàctica: RA, temporització, avaluació
│   ├── ba1/                      # BA1 · RA1 + RA2 (27 h)
│   │   └── aeaXX-nom/            # Una carpeta per activitat (AEA)
│   │       ├── index.md          # Fitxa i desenvolupament de l'activitat
│   │       ├── fitxers/          # PDF, diapositives, imatges…
│   │       └── codi/             # Exemples i solucions de codi
│   ├── ba2/                      # BA2 · RA3 + RA4 (33 h)
│   ├── ba3/                      # BA3 · RA5 (6 h)
│   ├── recursos/                 # Glossari, eines, bibliografia
│   └── assets/                   # CSS i imatges comunes
├── plantilles/                   # Plantilles per crear noves activitats i pràctiques
├── mkdocs.yml                    # Configuració del lloc i menú de navegació
├── requirements.txt              # Dependències (MkDocs Material)
└── .github/workflows/            # Desplegament automàtic a GitHub Pages
```

## Com afegir una activitat nova

1. Copia `plantilles/plantilla-activitat.md` a `docs/baN/aeaXX-nom-curt/index.md`.
2. Omple la fitxa (hores, RA, CA, instruments d'avaluació) i el contingut.
3. Desa els materials a `fitxers/` i el codi a `codi/` dins la mateixa carpeta.
4. Afegeix l'entrada al bloc `nav:` de `mkdocs.yml`.
5. Fes *commit* i *push* a `main`: el lloc es publica automàticament.

## Treballar en local

```bash
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve                   # http://127.0.0.1:8000
```

## Publicació

El *workflow* `.github/workflows/desplegament.yml` construeix el lloc amb `mkdocs build --strict` i el publica a cada *push* a `main`.
Cal tenir activat **Settings → Pages → Source: GitHub Actions** al repositori.

## Autoria

Víctor García · Departament d'Informàtica · Institut Sabadell
