# AEA2 · Modernització d'un SaaS

<div class="fitxa-aea" markdown>

| | |
|---|---|
| **Durada** | 2 h aprox. |
| **Resultats d'aprenentatge** | [RA1](../../modul/resultats-aprenentatge.md#ra1), [RA2](../../modul/resultats-aprenentatge.md#ra2) |
| **Criteris d'avaluació** | 1.2, 1.3, 1.4, 2.1 |
| **Instruments d'avaluació** | Examen |
| **Modalitat** | En parelles |
| **Teoria relacionada** | [2. IA a l'ecosistema web](../teoria/presentacions/02-ia-ecosistema-web.html){ target=_blank } |

</div>

Aplicar solucions pràctiques basades en intel·ligència artificial i patrons d'arquitectura web per resoldre problemes reals d'un entorn de comerç electrònic.

[:material-file-word: Descarrega el document de l'activitat (.docx)](fitxers/DAW_M0617_BA1-AEA2_Modernitzacio_dun_SaaS_2026-27.docx){ .md-button .md-button--primary }

## Enunciat

***PC-Express*** és un comerç electrònic d'informàtica i maquinari amb més de 15.000 referències en catàleg i un trànsit creixent. Actualment pateixen dos colls d'ampolla crítics:

1. **El cercador** fa servir consultes SQL clàssiques. Si un usuari escriu *"portàtil per a edició de vídeo que no superi els 1.000 €"* o s'equivoca en una lletra (*"tageta grafica"*), la base de dades retorna 0 resultats o productes completament irrellevants.

2. **L'atenció al client** rep uns 300 tiquets diaris. El 60 % són consultes repetitives (*"Quin és l'estat de la meva comanda?"*, *"Aquesta RAM és compatible amb la meva placa?"*) i algunes queixes inclouen llenguatge inapropiat o spam que s'ha de filtrar manualment abans que arribi als agents humans.

## Exercici 1

Es demana que identifiquis els problemes existents i intentis solucionar-los **en parelles**. Has d'investigar diferents tecnologies que poden solucionar-los i **justificar amb les teves paraules** per què has triat una cosa o una altra.

## Exercici 2

Fent servir algun sistema tipus [draw.io](https://app.diagrams.net/){ target=_blank }, dibuixa l'esquema d'interacció tenint en compte la solució que has proposat per a un dels problemes especificats a l'enunciat.

## Exercici 3

!!! warning "Sense cercar a internet (ho comentarem a classe)"

Per què no hem de fer mai la crida a l'API d'IA directament des del *frontend*?

## Exercici 4

!!! warning "Sense cercar a internet (ho comentarem a classe)"

Completa la petició i la resposta següents (`___`) tenint en compte el que consideris correcte. Quina interacció està passant?

=== "Petició"

    ```json
    {
      "model": "text-classification-v2",
      "input": {
        "ticket_id": ___,
        ___
      },
      "tasks": ["sentiment_analysis", ___, ___]
    }
    ```

=== "Resposta"

    ```json
    {
      "status": ___,
      "data": {
        "category": ___,
        "sentiment": ___,
        "urgency_level": ___,
        "detected_entities": {
          ___
          ___
        },
        "suggested_priority": 1
      },
      "usage": {
        "tokens_processed": 42,
        "latency_ms": 210
      }
    }
    ```

**Pregunta extra:** què creus que és el *sentiment*?
