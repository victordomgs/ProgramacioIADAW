# Pràctica · Programació assistida amb GitHub Copilot

!!! info "Dades de la pràctica"
    - **Activitat:** AEA5
    - **RA / CA:** RA1 · 1.3 / RA2 · 2.1, 2.2, 2.3, 2.4
    - **Modalitat:** individual
    - **Durada orientativa:** 6 h (Part 1: 1 h · Part 2: 3 h · Part 3: 2 h)
    - **Data de lliurament:** dd/mm/2026
    - **Via de lliurament:** enllaç al repositori de GitHub i memòria en PDF a la tasca de l'aula virtual
    - **Ús d'IA permès:** **Sí**, amb GitHub Copilot. Les respostes teòriques de la memòria les has de redactar tu.

## Context

L'equip de la **Botiga Copilot**, una petita botiga en línia de productes de marxandatge, t'ha contractat per mantenir i millorar la seva aplicació web. El projecte ja funciona: té un frontend en HTML, CSS i JavaScript i una API en Node.js amb Express i una base de dades SQLite.

L'empresa vol que treballis amb **GitHub Copilot** per anar més ràpid, però sense renunciar a la qualitat ni a la seguretat. Hauràs de demostrar que saps fer servir l'assistent **i** que saps verificar el que genera.

[:material-folder-zip: Descarrega el projecte inicial (.zip)](fitxers/botiga-copilot.zip){ .md-button .md-button--primary }

### Requisits previs

- [ ] Compte de GitHub amb el benefici de **GitHub Education** actiu (inclou Copilot Pro).
- [ ] **Visual Studio Code** amb les extensions **GitHub Copilot** i **GitHub Pull Requests**.
- [ ] **Git** instal·lat i configurat (`git config --global user.name` i `user.email`).
- [ ] **Node.js 22.13 o superior**. Comprova-ho amb `node --version`.

### Com documentar la pràctica

Al llarg de l'enunciat trobaràs dos tipus de requadres:

!!! example "📸 Evidència"
    Indica una captura de pantalla o un resultat que has d'incloure a la memòria.

!!! question "Pregunta"
    Indica una pregunta que has de respondre a la memòria amb les teves paraules.

Fes **un commit per a cada pas** amb un missatge descriptiu. L'historial de commits forma part de l'avaluació.

---

## Part 1 · GitHub i l'agent de Copilot al núvol

En aquesta part prepararàs el repositori del projecte i delegaràs la primera tasca a l'**agent de Copilot al núvol**. L'agent treballa als servidors de GitHub, no al teu ordinador, i et retorna el resultat com un *pull request*.

### 1.1 Comprova l'accés a Copilot

1. Entra a [github.com/settings/copilot](https://github.com/settings/copilot) i comprova que tens un pla de Copilot actiu.
2. A VS Code, obre el panell de xat (`Ctrl` + `Alt` + `I`) i comprova que hi has iniciat la sessió amb el mateix compte.

!!! warning "Sense pla de pagament no hi ha agent al núvol"
    L'agent al núvol requereix un pla de pagament de Copilot. GitHub Education t'hi dona accés gratuït un cop verificat el teu estat d'estudiant. Si la verificació encara està pendent, avisa el professor.

### 1.2 Crea el repositori

1. A GitHub, fes clic a **+** → **New repository**.
2. Omple el formulari:
    - **Repository name:** `botiga-copilot`
    - **Visibility:** *Private*
    - **No marquis** les opcions *Add a README*, *.gitignore* ni *license*. El projecte ja té aquests fitxers i, si les marques, tindràs conflictes en pujar-lo.
3. Fes clic a **Create repository** i copia l'URL del repositori (`https://github.com/<usuari>/botiga-copilot.git`).
4. A **Settings** → **Collaborators**, afegeix el professor com a col·laborador.

### 1.3 Puja el projecte des de VS Code

1. Descomprimeix `botiga-copilot.zip` i obre la carpeta a VS Code (**File** → **Open Folder**).
2. Puja el projecte al repositori que acabes de crear. Pots fer-ho de dues maneres:

    === "Amb la terminal"

        Obre la terminal integrada (`Ctrl` + `ñ`) i executa:

        ```bash
        git init
        git add .
        git commit -m "Projecte inicial"
        git branch -M main
        git remote add origin https://github.com/<usuari>/botiga-copilot.git
        git push -u origin main
        ```

    === "Amb la interfície de VS Code"

        1. Al panell **Source Control** (`Ctrl` + `Maj` + `G`), fes clic a **Initialize Repository**.
        2. Escriu el missatge `Projecte inicial` i fes clic a **Commit**. Si et pregunta si vols preparar (*stage*) tots els canvis, respon **Yes**.
        3. Obre la paleta d'ordres (`Ctrl` + `Maj` + `P`), executa **Git: Add Remote...**, enganxa l'URL del repositori i posa-li el nom `origin`.
        4. Fes clic a **Publish Branch**.

3. Recarrega la pàgina del repositori a GitHub i comprova que hi apareixen tots els fitxers.

!!! tip "I si el repositori ja existís?"
    Per treballar en un repositori que ja és a GitHub, el procés és l'invers: a VS Code, executa **Git: Clone**, enganxa l'URL i tria una carpeta. És el que faràs quan t'incorporis a un projecte existent.

### 1.4 Crea dos *issues*

Un *issue* és una tasca, un error o una proposta de millora del projecte. Un bon *issue* és, en el fons, **un bon prompt**: té un objectiu clar, context i criteris per saber quan està acabat.

1. Al repositori, ves a la pestanya **Issues** → **New issue**.
2. Crea el primer *issue*:

    ```markdown title="Títol: Afegir un peu de pàgina a la botiga"
    ## Descripció
    La pàgina principal no té peu de pàgina. Volem afegir-ne un amb informació bàsica de la botiga.

    ## Criteris d'acceptació
    - [ ] Hi ha un element `<footer>` al final de `public/index.html`.
    - [ ] Mostra el text "© ANY Botiga Copilot", on ANY és l'any actual calculat amb JavaScript.
    - [ ] Inclou un enllaç de correu a contacte@botiga.example.com.
    - [ ] Els estils es defineixen a `public/styles.css` i fan servir les variables CSS de `:root`.
    - [ ] No es modifica cap fitxer de `src/`.
    ```

3. Afegeix-hi l'etiqueta (*label*) `enhancement` i desa'l.
4. Crea el segon *issue*. Aquest el resoldràs tu a la Part 2:

    ```markdown title="Títol: Mostrar la puntuació mitjana de cada producte"
    ## Descripció
    A les targetes de producte volem mostrar la puntuació mitjana de les ressenyes (per exemple, "★ 4,0 (2 ressenyes)").

    ## Criteris d'acceptació
    - [ ] L'endpoint `GET /api/productes` retorna, per a cada producte, els camps `mitjana` (arrodonida a 1 decimal) i `numRessenyes`.
    - [ ] Si un producte no té ressenyes, `mitjana` és `null` i `numRessenyes` és `0`.
    - [ ] La targeta mostra la mitjana o el text "Sense ressenyes".
    - [ ] Hi ha tests que comproven els dos casos.
    ```

!!! question "Pregunta 1"
    Relaciona les parts d'aquests *issues* amb els components d'una instrucció del [tema 5](../teoria/05-estrategia-prompting.md). Per què els criteris d'acceptació són especialment útils quan qui resol l'*issue* és un agent d'IA?

### 1.5 Assigna el primer *issue* a Copilot

Pots assignar l'*issue* des de GitHub o des de VS Code:

=== "Des de github.com"

    1. Obre l'*issue* "Afegir un peu de pàgina a la botiga".
    2. A la columna de la dreta, a **Assignees**, selecciona **Copilot**.
    3. Si apareix un quadre per afegir instruccions addicionals, pots deixar-lo buit: l'*issue* ja és prou complet.

=== "Des de VS Code"

    1. Obre la vista **GitHub Pull Requests** a la barra lateral.
    2. A la secció **Issues**, busca l'*issue*.
    3. Fes-hi clic amb el botó dret i selecciona **Assign to Copilot**.

Al cap de pocs segons:

- Copilot obre un **pull request** associat a l'*issue*. Al principi té un commit buit; és normal.
- Des del *pull request*, fes clic a **View session** per veure en temps real què fa l'agent: quins fitxers llegeix, quines ordres executa i quins canvis fa.
- Quan acaba, et demana una revisió.

!!! example "📸 Evidència 1"
    Captura del registre de la sessió de l'agent on es vegin les accions que ha fet.

### 1.6 Revisa i itera el *pull request*

No acceptis el *pull request* directament. Revisa'l com si l'hagués fet un company:

1. Obre la pestanya **Files changed** i llegeix tots els canvis.
2. Comprova cada criteri d'acceptació de l'*issue*. Ha modificat algun fitxer de `src/`?
3. Demana almenys **un canvi** escrivint un comentari al *pull request* que mencioni `@copilot`. Per exemple:

    > @copilot Fes que l'enllaç de correu tingui el text "Contacta'ns" i que el peu de pàgina quedi centrat.

4. Espera que l'agent faci el canvi i torna a revisar-lo.
5. Quan tot sigui correcte, fes clic a **Ready for review** (si cal) i després a **Merge pull request**. L'*issue* es tancarà automàticament.
6. A VS Code, baixa els canvis:

    ```bash
    git pull
    ```

!!! example "📸 Evidència 2"
    Captura del *pull request* amb el teu comentari a `@copilot` i la resposta de l'agent.

!!! question "Pregunta 2"
    Quines diferències hi ha entre treballar amb el mode Agent de VS Code i amb l'agent al núvol? Per a quin tipus de tasques faries servir cadascun?

---

## Part 2 · Flux de treball a VS Code

En aquesta part treballaràs en local amb VS Code i practicaràs el flux de treball complet del [tema 8](../teoria/08-copilot-prompting-flux.md).

### 2.1 Instal·la i executa el projecte

```bash
npm install
npm start
```

Obre <http://localhost:3000>. Prova la botiga: filtra per categoria, afegeix productes al carret i obre les ressenyes d'un producte.

Atura el servidor (`Ctrl` + `C`) i executa els tests:

```bash
npm test
```

Un dels tests **falla**. És intencionat: el corregiràs al pas 2.4.

!!! tip "Treballa amb dues terminals"
    Mantén el servidor en marxa en una terminal amb `npm run dev`, que el reinicia automàticament quan modifiques el codi, i fes servir una segona terminal per als tests i per a Git.

### 2.2 Entén el projecte amb el mode Ask

Obre el panell de xat en mode **Ask** i fes preguntes per entendre el codi abans de modificar-lo. Per exemple:

> *#codebase Explica'm l'arquitectura d'aquest projecte: quines capes té, com es comunica el frontend amb l'API i on es guarden les dades.*

> *#codebase Fes una taula amb tots els endpoints de l'API: mètode, ruta, paràmetres i què retornen.*

Comprova les respostes obrint tu mateix els fitxers. Copilot s'ha deixat res o s'ha inventat algun endpoint?

!!! example "📸 Evidència 3"
    La taula d'endpoints, revisada i corregida per tu si cal.

### 2.3 Crea les instruccions del projecte

Crea el fitxer `.github/copilot-instructions.md` amb les normes del projecte. Fes servir aquesta base i completa-la:

```markdown title=".github/copilot-instructions.md"
# Botiga Copilot

## Stack
- Backend: Node.js amb Express i SQLite (mòdul `node:sqlite`), amb mòduls ES (`import`/`export`).
- Frontend: HTML, CSS i JavaScript sense frameworks.
- Tests: runner integrat de Node.js (`node:test` i `node:assert/strict`).

## Convencions
- Noms de variables, funcions i missatges en català, en camelCase.
- ...

## Arquitectura
- ...

## No facis
- No afegeixis dependències noves sense demanar-ho.
- ...
```

Afegeix com a mínim **tres normes més** que tinguin sentit per a aquest projecte. Fes un commit.

Per comprovar que Copilot les aplica, obre un xat nou, fes-li una pregunta i desplega la secció **References** de la resposta. Hi ha d'aparèixer `copilot-instructions.md`.

### 2.4 Depura el test que falla

1. Executa `npm test` i copia el missatge d'error **complet**.
2. En mode **Ask**, demana primer una hipòtesi, no la solució:

    > *En executar `npm test` obtinc aquest error: [enganxa l'error]. Explica'm quina és la causa a #file:src/utils/carret.js abans de proposar cap canvi.*

3. Comprova que l'explicació té sentit. Fes el càlcul a mà amb els valors del test.
4. Selecciona la funció, obre el xat en línia (`Ctrl` + `I`) i demana la correcció.
5. Torna a executar `npm test`. Han de passar **tots** els tests.
6. Fes un commit: `Corregeix el càlcul del descompte percentual`.

!!! question "Pregunta 3"
    Per què és millor demanar una hipòtesi abans de demanar la correcció? Què hauria pogut passar si haguessis escrit només *"arregla el test"*?

### 2.5 Implementa l'*issue* #2 amb Plan i Agent

Ara implementaràs tu el segon *issue*, amb l'ajuda de l'assistent.

1. Canvia al mode **Plan** i demana un pla:

    > *Vull implementar l'issue "Mostrar la puntuació mitjana de cada producte". Els criteris d'acceptació són: [enganxa'ls]. Proposa un pla indicant quins fitxers modificaràs i com calcularàs la mitjana. Fes-ho amb una sola consulta SQL, sense una consulta per producte.*

2. Revisa el pla. Si no t'agrada alguna decisió, corregeix-la abans de continuar.
3. Fes un commit de seguretat i canvia al mode **Agent** perquè l'implementi.
4. Mentre treballa:
    - **Llegeix cada ordre** de terminal abans d'aprovar-la.
    - Revisa els **diffs** de cada fitxer abans d'acceptar-los.
5. Comprova-ho manualment al navegador i amb la URL <http://localhost:3000/api/productes>.
6. Si l'agent no ha creat tests, demana'ls:

    > *Escriu tests a #file:test/api.test.js que comprovin la mitjana d'un producte amb ressenyes i d'un producte sense ressenyes.*

7. Executa `npm test`. Comprova que l'agent no ha modificat cap test existent perquè passi.
8. Fes un commit que tanqui l'*issue* automàticament en pujar-lo:

    ```bash
    git add .
    git commit -m "Afegeix la puntuació mitjana dels productes (closes #2)"
    git push
    ```

!!! example "📸 Evidència 4"
    Captura del pla proposat en mode Plan i de l'*issue* #2 tancat a GitHub.

### 2.6 Crea un prompt reutilitzable

Crea el fitxer `.github/prompts/endpoint.prompt.md` per generar endpoints nous seguint sempre les mateixes normes:

```markdown title=".github/prompts/endpoint.prompt.md"
---
description: Crea un endpoint nou de l'API amb el seu test
agent: agent
---
Crea l'endpoint **${input:endpoint:mètode i ruta, p. ex. GET /api/categories}**.

Funcionalitat: ${input:funcionalitat:què ha de fer l'endpoint}

1. Segueix l'estructura de [productes.js](../../src/routes/productes.js).
2. Fes servir sempre consultes preparades.
3. Retorna errors en JSON amb el codi HTTP adequat.
4. Afegeix almenys dos tests a la carpeta `test/`.
5. Executa `npm test` i assegura't que tots els tests passen.
6. Al final, mostra una llista dels fitxers creats o modificats.
```

Fes-lo servir escrivint `/endpoint` al xat per crear l'endpoint `GET /api/categories`. Aquest endpoint ha de retornar les categories que existeixen, amb el nombre de productes de cadascuna.

Opcionalment, modifica el frontend perquè el desplegable de categories es generi a partir d'aquest endpoint.

Fes un commit amb el *prompt file* i l'endpoint.

### 2.7 Integra la documentació d'un proveïdor

L'empresa ha contractat el servei de transport **Enviaments Express**, que ha facilitat la seva documentació a `docs/proveidor-enviaments.md`.

1. En mode **Agent**, demana:

    > *Modifica l'endpoint `POST /api/carret/total` perquè també calculi el cost d'enviament seguint les tarifes de #file:docs/proveidor-enviaments.md. La resposta ha de tenir el format que indica la documentació. Actualitza el frontend perquè mostri el subtotal, l'enviament i el total, i afegeix tests.*

2. Revisa **amb molta atenció** tots els canvis abans d'acceptar-los. Anota qualsevol cosa que et sembli estranya.
3. Executa `npm test`, prova-ho al navegador i fes un commit.

!!! example "📸 Evidència 5"
    Captura dels diffs que ha proposat l'agent.

### 2.8 Documenta el projecte

1. Selecciona les funcions principals de `src/routes/` i demana documentació JSDoc amb `/doc` o amb el xat en línia.
2. Demana a Copilot que actualitzi el `README.md` amb els endpoints nous i com executar els tests. **Revisa'l**: tot el que diu és cert?
3. Fes el commit generant el missatge amb el botó ✨ del panell **Source Control**. Edita'l si no descriu bé els canvis.
4. Puja els canvis amb `git push`.

---

## Part 3 · Seguretat del codi

El projecte inicial conté **vulnerabilitats intencionades**, de les que treballes al [tema 9](../teoria/09-copilot-verificacio-seguretat.md). En aquesta part les detectaràs, les explotaràs en local per entendre'n l'impacte, les corregiràs i verificaràs la correcció.

!!! danger "Només en el teu entorn local"
    Fes les proves d'aquesta part **exclusivament** contra el teu servidor a `localhost`. Atacar sistemes sense autorització és il·legal.

### 3.1 Revisió amb un agent revisor

Abans de buscar les vulnerabilitats tu mateix, crea un agent especialitzat a `.github/agents/revisor.agent.md`:

```markdown title=".github/agents/revisor.agent.md"
---
description: Revisa codi buscant vulnerabilitats sense modificar-lo
tools: ['search/codebase']
---
Ets un auditor de seguretat d'aplicacions web.

- No editis cap fitxer: només analitza i informa.
- Revisa el backend i el frontend buscant vulnerabilitats de l'OWASP Top 10,
  secrets al codi i validacions absents.
- Per a cada problema indica: fitxer, línia, tipus de vulnerabilitat,
  gravetat (crítica, alta, mitjana o baixa) i una proposta de solució.
- Presenta el resultat en una taula.
```

Selecciona l'agent **revisor** al selector de modes del xat i demana-li una auditoria de `#codebase`. Desa'n la resposta: la compararàs amb la teva anàlisi al final.

!!! question "Pregunta 4"
    Per què l'agent revisor només té l'eina `search/codebase`? Quin risc hi hauria si pogués editar fitxers o executar ordres?

### 3.2 Injecció SQL

1. Amb el servidor en marxa, obre aquesta URL al navegador:

    ```text
    http://localhost:3000/api/productes?categoria=' UNION SELECT id, email, contrasenya, rol, 0 FROM usuaris--
    ```

2. Observa el resultat.

!!! question "Pregunta 5"
    a) Quina informació has obtingut? Quina gravetat tindria en una botiga real?

    b) Indica el fitxer i la línia vulnerables i explica per què l'entrada de l'usuari s'executa com a codi SQL.

    c) Per què les sentències preparades eviten aquest problema?

    d) Hi ha un segon problema de seguretat en la manera com es guarden les dades de la taula `usuaris`. Quin és?

Ara corregeix-la:

1. Corregeix la vulnerabilitat amb Copilot.
2. Afegeix un test que comprovi que la URL anterior retorna una llista buida, i executa `npm test`.

### 3.3 *Cross-Site Scripting* (XSS)

1. Obre les ressenyes d'un producte i publica'n una amb aquest text:

    ```html
    <img src="x" onerror="alert('XSS: ' + document.cookie)">
    ```

2. Tanca i torna a obrir les ressenyes.

!!! question "Pregunta 6"
    a) Què ha passat? Per què aquest atac afecta **tots** els usuaris que obren les ressenyes, i no només tu?

    b) Indica la línia vulnerable de `public/app.js`.

    c) Hi ha altres llocs de `app.js` on es fa servir `innerHTML` amb dades que venen de l'API? Són vulnerables? Raona-ho.

Corregeix totes les vulnerabilitats XSS del frontend i comprova que la ressenya maliciosa ara es mostra com a text.

### 3.4 Validació al servidor

El formulari de ressenyes valida que la puntuació sigui entre 1 i 5. Comprova si l'API també ho fa enviant la petició directament, sense passar pel formulari:

=== "Linux / macOS / Git Bash"

    ```bash
    curl -X POST http://localhost:3000/api/ressenyes \
      -H "Content-Type: application/json" \
      -d '{"producteId": 999, "autor": "", "text": "", "puntuacio": 99}'
    ```

=== "Windows (PowerShell)"

    ```powershell
    Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/ressenyes `
      -ContentType "application/json" `
      -Body '{"producteId": 999, "autor": "", "text": "", "puntuacio": 99}'
    ```

!!! question "Pregunta 7"
    a) Què respon l'API? Per què la validació del formulari HTML no protegeix el servidor?

    b) Enumera totes les validacions que hauria de fer l'endpoint `POST /api/ressenyes`.

Demana a Copilot que afegeixi aquestes validacions i que retorni un error `400` amb un missatge clar. Afegeix tests per als casos invàlids.

### 3.5 Secrets al codi

Obre `src/config.js`.

!!! question "Pregunta 8"
    a) Quin problema hi ha en aquest fitxer? Per què és greu encara que el repositori sigui privat?

    b) Si elimines la clau en un commit nou, la clau desapareix del repositori? Comprova-ho amb `git log -p -- src/config.js`.

    c) GitHub té un servei d'escaneig de secrets. Per què creus que no ha detectat aquesta clau?

    d) Què hauria de fer l'empresa amb aquesta clau, a més de treure-la del codi?

Corregeix-ho:

1. Fes que la clau es llegeixi de la variable d'entorn `ENVIAMENTS_API_KEY`.
2. Copia `.env.example` a `.env` i posa-hi la clau. Comprova que `.env` és al `.gitignore`.
3. Modifica els scripts de `package.json` perquè Node carregui el fitxer `.env` amb l'opció `--env-file-if-exists=.env`.

### 3.6 Injecció de prompts

Obre `docs/proveidor-enviaments.md` **com a codi font** (no amb la previsualització de Markdown) i llegeix-lo sencer.

!!! question "Pregunta 9"
    a) Què has trobat? Per què no es veu a la previsualització?

    b) Què faria el codi que demana afegir? Quines dades enviaria i a qui?

    c) Al pas 2.7, l'agent va llegir aquest fitxer. Va seguir la instrucció? Comprova-ho amb `git log -p -- src/index.js` i amb els diffs que vas capturar.

    d) Quines mesures del tema 9 t'haurien protegit si l'agent l'hagués seguit?

Si l'agent va afegir el codi, elimina'l i fes un commit que expliqui per què.

### 3.7 Dependències

1. Executa:

    ```bash
    npm audit
    ```

2. Al xat, demana a Copilot: *"Quin paquet de npm em recomanes per validar les dades d'entrada a Express?"*. Abans d'instal·lar res, **verifica** el paquet a [npmjs.com](https://www.npmjs.com/).

!!! question "Pregunta 10"
    a) Quin resultat dona `npm audit`?

    b) Què és el *slopsquatting*? Quines dades has comprovat a npmjs.com per decidir si el paquet recomanat és de confiança?

    c) Per a aquest projecte, val la pena afegir aquesta dependència o és millor validar sense llibreries? Justifica-ho.

### 3.8 Conclusions

Torna a executar l'agent revisor sobre el codi corregit.

!!! question "Pregunta 11"
    a) Compara l'informe inicial del revisor amb les vulnerabilitats que has trobat tu. Quines va detectar? Quines no? Va informar d'algun problema que no existia?

    b) Després d'aquesta pràctica, quin paper creus que han de tenir els assistents d'IA en la seguretat del codi?

!!! example "📸 Evidència 6"
    Resultat final de `npm test` amb tots els tests en verd.

---

## Requisits mínims

- [ ] El repositori és a GitHub, és privat i el professor hi té accés.
- [ ] L'*issue* #1 s'ha resolt amb l'agent al núvol i s'ha iterat amb almenys un comentari a `@copilot`.
- [ ] L'*issue* #2 està tancat per un commit.
- [ ] Hi ha `.github/copilot-instructions.md`, `.github/prompts/endpoint.prompt.md` i `.github/agents/revisor.agent.md`.
- [ ] Totes les vulnerabilitats de la Part 3 estan corregides.
- [ ] `npm test` s'executa sense errors.
- [ ] L'historial té un commit per pas, amb missatges descriptius.

## Lliurables

- **Enllaç al repositori** de GitHub.
- **Memòria en PDF** amb:
    - Les evidències 📸 1 a 6.
    - Les respostes a les preguntes 1 a 11, redactades amb les teves paraules.
    - Un apartat final de **valoració personal**: què t'ha aportat Copilot, on t'ha fet perdre temps i en quins casos l'has hagut de corregir.

## Rúbrica d'avaluació

| Criteri | CA | Excel·lent (9-10) | Notable (7-8) | Suficient (5-6) | Insuficient (0-4) | Pes |
|---------|----|-------------------|---------------|-----------------|-------------------|----:|
| GitHub i agent al núvol (Part 1) | 2.1 | Issues complets amb criteris d'acceptació; PR revisat i iterat amb criteri. | Issues correctes i PR iterat. | Issues creats i PR fusionat sense revisió aparent. | No s'ha fet o està incomplet. | 15 % |
| Ús del context i personalització (2.2, 2.3, 2.6) | 2.1 | Instruccions i *prompt file* útils, específics i comprovats. | Correctes, amb alguna norma genèrica. | Creats però poc adaptats al projecte. | Absents o no funcionals. | 15 % |
| Depuració, implementació i verificació (2.4, 2.5, 2.7, 2.8) | 2.2, 2.3 | Funcionalitats correctes, tests rellevants, diffs revisats i commits clars. | Funcionalitats correctes amb tests bàsics. | Funciona, però amb poca verificació o pocs tests. | No funciona o no s'ha verificat. | 25 % |
| Seguretat (Part 3) | 2.4 | Totes les vulnerabilitats explotades, entenent-ne l'impacte, corregides i amb tests. | Totes corregides; alguna explicació superficial. | La majoria corregides. | Vulnerabilitats sense corregir. | 30 % |
| Memòria i respostes teòriques | 1.3, 2.4 | Respostes precises, raonades i amb vocabulari tècnic. | Respostes correctes. | Respostes incompletes. | Absents o copiades. | 15 % |

!!! danger "Recordatori"
    Les respostes de la memòria s'han de redactar personalment. Qualsevol còpia, plagi o ús no autoritzat d'un LLM es qualifica amb un 0. Has de poder explicar qualsevol línia del codi que lliuris.
