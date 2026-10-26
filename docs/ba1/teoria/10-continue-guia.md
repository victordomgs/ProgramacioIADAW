# Guia: sabIA a Visual Studio Code amb Continue

Aquesta guia explica com instal·lar **Continue**, una extensió lliure (*open source*) per a Visual Studio Code, i com connectar-la a **sabIA**, la intel·ligència artificial de l'Institut Sabadell. Així tindràs un assistent de programació semblant a GitHub Copilot dins de l'editor, amb un model que funciona **als servidors de l'institut**: el teu codi no surt del centre.

## Què necessites

| Dada | Valor |
|---|---|
| **Visual Studio Code** | Instal·lat i actualitzat ([code.visualstudio.com](https://code.visualstudio.com)) |
| **Adreça de l'API** (*base URL*) | `https://sabia.ies-sabadell.cat/llm/v1` |
| **Model** | `gemma-4-31B-it-API-alumnos` |
| **Clau** | La teva clau personal, que comença per `sk-`. Te la donarà el teu professorat. |

!!! important "La clau és personal i secreta" 
    No la posis mai dins del `config.yaml` ni la pugis a GitHub. En aquesta guia la desarem en un fitxer `.env` a part.

## Instal·lar les extensions

1. Obre VS Code i ves a la vista d'**Extensions**.
2. Cerca **Continue** i instal·la la de l'editor oficial **Continue** (continue.dev).
3. Cerca **YAML** i instal·la la de **Red Hat**.

!!! warning "L'extensió YAML és necessària" 
    Sense ella, Continue no llegeix bé el fitxer de configuració i no mostra cap error visible.

Quan acabis, recarrega VS Code: `Ctrl+Shift+P` → escriu **Reload Window** → `Enter`.

## Obrir Continue

- Fes clic a la icona de **Continue** a la barra lateral.

Si no veus la icona, pot ser que el panell s'hagi obert a la **barra lateral dreta**
(`Ctrl+Alt+B` per mostrar-la). També pots fer clic dret a la barra d'icones de l'esquerra i
comprovar que **Continue** està marcat.

La primera vegada, Continue et proposarà iniciar sessió al seu servei. **No cal**: tria l'opció de
saltar-ho o de configurar els teus propis models.

## Desar la clau

Continue llegeix les claus d'un fitxer `.env` dins de la carpeta `.continue` del teu usuari.

!!! important "Variable d'entorn" 
    `SABIA_API_KEY` **no serveix** per a l'extensió de VS Code: Continue només llegeix el fitxer `.env`.

**Linux / macOS**

```bash
mkdir -p ~/.continue
echo "SABIA_API_KEY=sk-la-teva-clau" > ~/.continue/.env
```

**Windows (PowerShell)**

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.continue" | Out-Null
Set-Content -Path "$env:USERPROFILE\.continue\.env" -Value "SABIA_API_KEY=sk-la-teva-clau" -NoNewline
```

Normes del fitxer `.env`:

- El format és `NOM=valor`, **sense cometes** al voltant de la clau.
- A Windows, si l'edites a mà, el fitxer ha de tenir finals de línia **LF**, no CRLF. A VS Code ho
  pots canviar a la barra inferior, on posa `CRLF`.
- Si mai poses un `.env` dins d'un projecte, afegeix-lo al `.gitignore`.

## Configurar el model

1. Al panell de Continue, a dalt de tot, hi ha un desplegable de configuració. Tria la
   configuració **local** (pot aparèixer com *Local Config* o *Local Agent*).
2. Fes clic a l'**engranatge ⚙️** que hi ha al costat. S'obrirà el fitxer `config.yaml`:
   - Linux / macOS: `~/.continue/config.yaml`
   - Windows: `%USERPROFILE%\.continue\config.yaml`
3. **Esborra tot el contingut** i enganxa-hi això:

```yaml
name: sabIA
version: 1.0.0
schema: v1

models:
  - name: sabIA
    provider: openai
    model: gemma-4-31B-it-API-alumnos
    apiBase: https://sabia.ies-sabadell.cat/llm/v1
    apiKey: ${{ secrets.SABIA_API_KEY }}
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use
    defaultCompletionOptions:
      contextLength: 30000
      maxTokens: 2048
```

4. Desa amb `Ctrl+S` i recarrega VS Code (`Ctrl+Shift+P` → **Reload Window**).
5. Al desplegable de la configuració hauria d'aparèixer **sabIA**. Sota el quadre de text del xat,
   comprova que el model seleccionat també és **sabIA**.

Què vol dir cada línia:

| Camp | Significat |
|---|---|
| `provider: openai` | L'API de sabIA és compatible amb OpenAI |
| `apiKey: ${{ secrets.SABIA_API_KEY }}` | Llegeix la clau del fitxer `.env` |
| `roles` | Fem servir el model per al xat i per editar codi |
| `contextLength` / `maxTokens` | Mantenen cada petició dins del límit de ~32.000 tokens |

## Desactivar l'autocompletat

Continue també pot suggerir codi mentre escrius (*autocompletat*, el text gris). **Amb sabIA no
el facis servir**: cada pausa mentre escrius és una petició, i superaries el límit de
**10 peticions per minut** en pocs segons.

La configuració anterior no defineix cap model d'autocompletat. Per evitar avisos, desactiva'l:
fes clic al botó **Continue** de la barra d'estat inferior i desmarca **Enable Tab Autocomplete**.
També ho pots fer a la configuració de VS Code: cerca "Continue" i desmarca l'opció.

## Com es fa servir

| Acció | Com |
|---|---|
| **Fer preguntes** | Obre el xat (`Ctrl+L`) i escriu |
| **Preguntar sobre un tros de codi** | Selecciona el codi i prem `Ctrl+L`: s'afegeix al xat |
| **Editar codi** | Selecciona el codi, prem `Ctrl+I` i descriu el canvi. Accepta'l o rebutja'l |
| **Afegir un fitxer al context** | Escriu `@` al xat i tria el fitxer |
| **Aplicar codi del xat** | Botó **Apply** a sobre del bloc de codi de la resposta |

### Modes: Chat, Plan i Agent

Al costat del selector de model pots triar el mode. **Fes servir Chat.**

El mode **Agent** pot llegir fitxers i executar ordres pel seu compte, però fa moltes peticions
seguides. Amb els límits de sabIA (10 peticions i 20.000 tokens per minut) rebràs errors **429**
molt aviat. Reserva'l per a tasques petites.

## Comprovar que funciona

1. Obre el xat i escriu: `Explica què és una API en una frase.`
2. Si respon, ja està.
3. Per veure quants tokens has gastat, consulta el teu consum:

```bash
curl https://sabia.ies-sabadell.cat/llm/key/info \
  -H "Authorization: Bearer $SABIA_API_KEY"
```

Camps importants de la resposta (dins de `info`):

| Camp | Significat |
|---|---|
| `spend` | Consum acumulat del període. **1,0 = 1.000.000 de tokens** (p. ex. `0.0431` ≈ 43.100 tokens) |
| `max_budget` | Quota del període (`1.0` = 1M tokens) |
| `budget_reset_at` | Quan es torna a posar el consum a zero |
| `rpm_limit` / `tpm_limit` | Límits per minut |
| `expires` | Data de caducitat de la clau |

## Errors habituals

| Símptoma | Causa probable | Què fer |
|---|---|---|
| **401** / *Unauthorized* | Continue no troba la clau | Revisa el `.env`: nom `SABIA_API_KEY`, sense cometes, finals de línia LF. Recarrega VS Code |
| **403** | Nom de model incorrecte | Ha de ser exactament `gemma-4-31B-it-API-alumnos` |
| **429** | Massa peticions o tokens en un minut | Espera un minut. Comprova que l'autocompletat està desactivat i que no fas servir el mode Agent |
| **400** (*budget exceeded*) | Has esgotat la quota del període | Espera a la data de renovació (`budget_reset_at`) |
| **400** (context) | La conversa és massa llarga | Obre un xat nou (botó **+**) o afegeix menys fitxers amb `@` |
| Els canvis al `config.yaml` no s'apliquen | Cal recarregar | `Ctrl+Shift+P` → **Reload Window** |
| No apareix el model **sabIA** | Error de format al YAML | Revisa que l'extensió YAML de Red Hat està instal·lada i que el sagnat és correcte (espais, no tabuladors) |
| No veus el panell de Continue | Està a l'altra barra lateral | `Ctrl+Alt+B` o `Ctrl+L` |

## 10. Bones pràctiques

- **Obre un xat nou per a cada tema**: cada missatge torna a enviar tot l'historial i gasta més tokens.
- **Afegeix només els fitxers necessaris** amb `@`, no tot el projecte.
- **Llegeix i entén el codi** que et proposa abans d'aplicar-lo. El model es pot equivocar.
- No enviïs **dades personals** d'altres persones ni contrasenyes que hi hagi al teu codi.
- Segueix les normes de cada mòdul sobre quan es pot fer servir la IA (per exemple, en exàmens).
