# Resultats d'aprenentatge i criteris d'avaluació

Curs 2026-2027.

## RA1 · Models d'intel·ligència artificial { #ra1 }

> Caracteritza i selecciona els models d'intel·ligència artificial adequats per a la seva integració en entorns i desenvolupaments software, relacionant-los amb la millora de l'eficiència operativa de les organitzacions i les empreses.

**Hores:** 12 h · **Bloc:** [BA1](../ba1/index.md)

| CA | Descripció |
|----|------------|
| 1.1 | Identifica els principis fonamentals dels sistemes intel·ligents. |
| 1.2 | Recopila informació sobre camps on s'aplica la intel·ligència artificial. |
| 1.3 | Identifica les tècniques bàsiques que cal utilitzar a l'entorn de la IA. |
| 1.4 | Identifica noves formes d'interaccions als negocis que milloren l'eficiència operativa. |

## RA2 · Prompt engineering { #ra2 }

> Aplica tècniques de *prompt engineering* per a la generació, depuració, optimització i documentació de components web en entorns client i servidor, verificant la integritat del codi i complint estàndards de ciberseguretat i bones pràctiques.

**Hores:** 15 h · **Bloc:** [BA1](../ba1/index.md)

| CA | Descripció |
|----|------------|
| 2.1 | S'han dissenyat i aplicat tècniques de *prompt engineering* efectives per a la generació i documentació de components web, cobrint tant l'entorn client com el servidor amb precisió. |
| 2.2 | S'han emprat estratègies de *prompting* per a la depuració, refactorització i optimització del codi de components web, millorant-ne el rendiment i la qualitat tècnica. |
| 2.3 | S'ha verificat la integritat i el funcionament correcte del codi generat, comprovant que s'integra adequadament en l'arquitectura client-servidor prevista. |
| 2.4 | S'ha validat el compliment dels estàndards de ciberseguretat i les bones pràctiques de programació en tot el codi obtingut mitjançant la intel·ligència artificial. |

??? note "Criteris alternatius del RA2 (models d'aprenentatge automàtic)"
    El document de RA inclou també una versió del RA2 orientada a l'aprenentatge automàtic (*Machine Learning*), amb la mateixa numeració:

    | CA | Descripció |
    |----|------------|
    | 2.1 | Distingeix els diferents paradigmes d'aprenentatge automàtic: supervisat, no supervisat i per reforç. |
    | 2.2 | Identifica les diferents fases del cicle de vida d'un model de ML (recol·lecció de dades, neteja, entrenament, avaluació i desplegament). |
    | 2.3 | Executa processos d'ajust fi (*fine-tuning*) o adaptació eficient (PEFT/LoRA) sobre models existents per especialitzar-los en una tasca concreta. |
    | 2.4 | Utilitza eines i entorns de programació (Notebooks, Python, PyTorch/TensorFlow o Hugging Face) per carregar i provar models. |
    | 2.5 | Interpreta el comportament del model identificant fenòmens com l'*overfitting*, l'*underfitting* i les al·lucinacions. |

## RA3 · Consum d'APIs i explotació de serveis d'IA { #ra3 }

> Integra serveis i eines d'IA en aplicacions web mitjançant el consum d'APIs i SDKs de proveïdors d'IA.

**Hores:** 18 h · **Bloc:** [BA2](../ba2/index.md)

| CA | Descripció |
|----|------------|
| 3.1 | Utilitza SDKs i APIs REST de proveïdors d'IA (OpenAI, Anthropic, Ollama, Hugging Face, etc.) des d'un entorn de desenvolupament web (Node.js, Python, PHP, etc.). |
| 3.2 | Implementa mecanismes de gestió d'autenticació, claus d'API i control de costos i ràtio de peticions (*rate-limiting*) de manera segura. |
| 3.3 | Processa respostes estructurades (JSON, *Function Calling* / *Tool Use*) generades pels models per integrar-les en la lògica de negoci de l'aplicació. |
| 3.4 | Desenvolupa interfícies web adaptades a respostes en temps real utilitzant tècniques com l'*streaming* de dades (*Server-Sent Events* o *WebSockets*). |
| 3.5 | Integra eines d'assistència al desenvolupament de codi (GitHub Copilot, Cursor, etc.) per optimitzar el propi flux de treball de programació. |

## RA4 · Arquitectures de dades per a IA i RAG { #ra4 }

> Dissenya i implementa solucions basades en la generació augmentada per recuperació (*Retrieval-Augmented Generation*, RAG) i bases de dades vectorials.

**Hores:** 15 h · **Bloc:** [BA2](../ba2/index.md)

| CA | Descripció |
|----|------------|
| 4.1 | Entén i genera *embeddings* de text i multimèdia per a la representació vectorial de la informació. |
| 4.2 | Selecciona, configura i utilitza bases de dades vectorials (Pinecone, Chroma, Qdrant, pgvector, etc.) per a la cerca per similitud. |
| 4.3 | Implementa la canonada (*pipeline*) d'ingestió de documents: extracció, fragmentació (*chunking*), generació d'*embeddings* i emmagatzematge. |
| 4.4 | Construeix un sistema RAG complet interconnectant la cerca vectorial amb un LLM per respondre consultes basades en informació corporativa o privada. |
| 4.5 | Avalua la qualitat de les respostes del sistema RAG mitjançant mètriques de rellevància, fidelitat i recuperació (*recall* / *precision*). |

## RA5 · Ètica sobre l'ús de la IA i tractament de dades { #ra5 }

> Analitza l'impacte ètic, legal, la seguretat i la privacitat de dades en la implementació de solucions basades en IA.

**Hores:** 6 h · **Bloc:** [BA3](../ba3/index.md)

| CA | Descripció |
|----|------------|
| 5.1 | Identifica els biaixos de gènere, culturals o socioeconòmics presents en les dades d'entrenament i en les respostes dels models. |
| 5.2 | Aplica la normativa de protecció de dades (RGPD) en la recollida, l'enviament i el tractament de dades d'usuaris cap a serveis d'IA externs. |
| 5.3 | Avalua els riscos de seguretat específics de la IA, com la *prompt injection*, la fuita de dades (*data leakage*) i l'enverinament de dades (*data poisoning*). |
| 5.4 | Coneix el marc regulador vigent (com l'AI Act de la Unió Europea) i classifica les aplicacions segons el seu nivell de risc. |
| 5.5 | Garanteix la transparència en les aplicacions desenvolupades, informant l'usuari quan interacciona amb un sistema automatitzat o contingut generat per IA. |
