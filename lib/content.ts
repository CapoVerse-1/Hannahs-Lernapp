import { ChapterT, SectionT, CardT, QuestionT } from "./schemas"

export const chapters: ChapterT[] = [
  { id: 1, title: "Was ist Psychologie?", eta_minutes: 90, order_index: 1 },
  { id: 2, title: "Geschichte der Psychologie", eta_minutes: 90, order_index: 2 },
  { id: 3, title: "Forschungsmethodik", eta_minutes: 90, order_index: 3 },
  { id: 4, title: "Biologische Psychologie", eta_minutes: 90, order_index: 4 },
  { id: 5, title: "Allgemeine Psychologie", eta_minutes: 90, order_index: 5 },
  { id: 6, title: "Entwicklungspsychologie", eta_minutes: 90, order_index: 6 },
  { id: 7, title: "Sozialpsychologie", eta_minutes: 90, order_index: 7 },
  { id: 8, title: "Differentielle & Persönlichkeitspsychologie", eta_minutes: 90, order_index: 8 }
]

export const sections: SectionT[] = [
  { id: "1-1", chapter_id: 1, title: "Definition & Ziele", order_index: 1 },
  { id: "1-2", chapter_id: 1, title: "Grundlagenfächer", order_index: 2 },
  { id: "1-3", chapter_id: 1, title: "Zentrale Ansätze", order_index: 3 },
  { id: "1-4", chapter_id: 1, title: "Methodenüberblick", order_index: 4 },
  { id: "2-1", chapter_id: 2, title: "Von der Philosophie zur Wissenschaft", order_index: 1 },
  { id: "2-2", chapter_id: 2, title: "Wurzeln: Seele, Antike, Mittelalter", order_index: 2 },
  { id: "2-3", chapter_id: 2, title: "Aufklärung: Rationalismus vs. Empirismus", order_index: 3 },
  { id: "2-4", chapter_id: 2, title: "Neubegründung & Labore: Herbart–Wundt", order_index: 4 },
  { id: "2-5", chapter_id: 2, title: "Paradigmen/Schulen (20. Jh.)", order_index: 5 },
  { id: "2-6", chapter_id: 2, title: "NS‑Zeit, Emigration, Wiederaufbau", order_index: 6 },
  { id: "2-7", chapter_id: 2, title: "Kognitive Wende, Kybernetik, Konnektionismus", order_index: 7 },
  { id: "3-1", chapter_id: 3, title: "Variablen & Operationalisierung", order_index: 1 },
  { id: "4-1", chapter_id: 4, title: "Neuron, Synapse, Aktionspotenzial", order_index: 1 },
  { id: "5-1", chapter_id: 5, title: "Wahrnehmung, Gedächtnis, Lernen", order_index: 1 },
  { id: "6-1", chapter_id: 6, title: "Stufen & Prozesse", order_index: 1 },
  { id: "7-1", chapter_id: 7, title: "Gruppen & Einfluss", order_index: 1 },
  { id: "8-1", chapter_id: 8, title: "Big Five & Unterschiede", order_index: 1 }
]

export const cards: CardT[] = [
  { id: "c1", section_id: "1-1", front_md: "Was ist die Psychologie?", back_md: "Wissenschaft vom Erleben und Verhalten in Kontext von Umwelt und Kultur.", hint_md: "Kapitel 1 Überblick.", order_index: 1 },
  { id: "c2", section_id: "1-1", front_md: "Welche vier Ziele verfolgt die Psychologie?", back_md: "Beschreiben, Erklären, Vorhersagen, Verändern/Anwenden.", hint_md: "Vier-Ziele-Schema.", order_index: 2 },
  { id: "c3", section_id: "1-1", front_md: "Worin unterscheiden sich Grundlagen- und Angewandte Psychologie?", back_md: "Grundlagen: Gesetzmäßigkeiten. Angewandt: praktische Lösung.", order_index: 3 },
  { id: "c4", section_id: "1-2", front_md: "Womit befasst sich die Biologische Psychologie?", back_md: "Neuronale/physische Grundlagen psychischer Phänomene.", hint_md: "Kapitel 4.", order_index: 4 },
  { id: "c5", section_id: "1-2", front_md: "Welche Themen umfasst die Allgemeine Psychologie?", back_md: "Wahrnehmung, Lernen, Gedächtnis, Sprache, Emotion, Motivation.", order_index: 5 },
  { id: "c6", section_id: "1-2", front_md: "Worum geht es in der Entwicklungspsychologie?", back_md: "Veränderungen über die Lebensspanne.", order_index: 6 },
  { id: "c7", section_id: "1-2", front_md: "Was untersucht die Sozialpsychologie?", back_md: "Einfluss anderer und Kontexte auf Verhalten.", order_index: 7 },
  { id: "c8", section_id: "1-2", front_md: "Womit befasst sich die Differentielle & Persönlichkeitspsychologie?", back_md: "Individuelle Unterschiede, Big Five.", order_index: 8 },
  { id: "c9", section_id: "1-3", front_md: "Worin besteht die Kernidee des Behaviorismus?", back_md: "Fokus auf beobachtbares Verhalten; Konditionierung.", order_index: 9 },
  { id: "c10", section_id: "1-3", front_md: "Was ist die Kernidee der Psychoanalyse?", back_md: "Unbewusste Prozesse; frühe Kindheit.", order_index: 10 },
  { id: "c11", section_id: "1-3", front_md: "Was betont die Humanistische Psychologie?", back_md: "Selbstverwirklichung, Wachstum.", order_index: 11 },
  { id: "c12", section_id: "1-3", front_md: "Was kennzeichnet die kognitive Wende?", back_md: "Informationsverarbeitung; kognitive Neurowissenschaft.", order_index: 12 },
  { id: "c2-1", section_id: "2-1", front_md: "Wie entwickelten sich die antiken Wurzeln zur empirischen Psychologie?", back_md: "Seelenkunde → empirische Psychologie.", order_index: 1 },
  { id: "c2-2", section_id: "2-1", front_md: "Worin unterscheiden sich Psychoanalyse und Behaviorismus?", back_md: "Unbewusst vs. Beobachtbares.", order_index: 2 },
  { id: "c2-3", section_id: "2-1", front_md: "Was kennzeichnet die kognitive Wende in der Psychologie?", back_md: "Mentale Modelle.", order_index: 3 },
  { id: "c2-4", section_id: "2-1", front_md: "Was betont die humanistische Psychologie?", back_md: "Selbst & Wachstum.", order_index: 4 },
  { id: "c2-5", section_id: "2-2", front_md: "Was ist ein psychologisches Paradigma?", back_md: "Vorherrschendes Denkmuster inkl. Grundannahmen und akzeptierten Methoden; steuert, was als gültig gilt und wie Realität wissenschaftlich ausgelegt wird.", order_index: 5 },
  { id: "c2-6", section_id: "2-2", front_md: "Welche Kernannahmen über Leib und Seele vertraten die Orphiker?", back_md: "Dualismus: Körper (Diesseits, unvollkommen) vs. unsterbliche Seele (Jenseits, vollkommen); Seelenwanderung; Körper als ‚Gefängnis‘ der Seele.", order_index: 6 },
  { id: "c2-7", section_id: "2-2", front_md: "Wie gliedert Platon die Seele und welche Sicht vertritt er?", back_md: "Begehrende (Unterleib), zielstrebige (Brust, Emotion), denkende (Kopf) Seele; idealistischer Dualismus, Seele über dem Körper.", order_index: 7 },
  { id: "c2-8", section_id: "2-2", front_md: "Wie versteht Aristoteles das Verhältnis von Seele und Körper (Hylomorphismus)?", back_md: "Seele und Körper untrennbar; Seelentypen: vegetativ, sensitiv, intellektiv; Seele verleiht Organen Zweck (z. B. Auge → Sehen).", order_index: 8 },
  { id: "c2-9", section_id: "2-2", front_md: "Worin bestehen Theophrasts Charakterskizzen und ihre Bedeutung?", back_md: "Frühe Beschreibung von Persönlichkeitstypen (z. B. der Geizige, der Taktlose) – Vorläufer typologischer Ansätze.", order_index: 9 },
  { id: "c2-10", section_id: "2-2", front_md: "Wie verbindet Galen die Vier‑Säfte‑Lehre mit Persönlichkeit (Temperamente)?", back_md: "Vier‑Säfte‑Lehre auf Persönlichkeit übertragen: Sanguiniker, Phlegmatiker, Choleriker, Melancholiker. Historisch, heute widerlegt.", order_index: 10 },
  { id: "c2-11", section_id: "2-2", front_md: "Wie beschreibt Augustinus das Verhältnis von Körper und Seele?", back_md: "Körper = äußerer, Seele/Geist = innerer Mensch; Nervensystem als Vermittler; Seele im ganzen Körper gegenwärtig.", order_index: 11 },
  { id: "c2-12", section_id: "2-2", front_md: "Wie integriert Thomas von Aquin Aristoteles’ Seelenlehre in die Scholastik?", back_md: "Aristoteles + christliche Lehre; Seelenarten (vegetativ/sensitiv/intellektiv); Geistseele nicht an Materie gebunden, überdauert den Tod.", order_index: 12 },
  { id: "c2-13", section_id: "2-3", front_md: "Welche Kernideen des Rationalismus formulierte Descartes?", back_md: "Wissen durch Vernunft; Dualismus res extensa vs. res cogitans; Zirbeldrüse als Kopplungsort; mechanistisches Menschenbild.", order_index: 13 },
  { id: "c2-14", section_id: "2-3", front_md: "Wie unterscheiden sich Dualismus und Monismus im Leib‑Seele‑Problem?", back_md: "Dualismus: Leib & Seele unabhängig (Descartes). Monismus: Einheit (z. B. Spinoza).", order_index: 14 },
  { id: "c2-15", section_id: "2-3", front_md: "Welche Erkenntnisquellen unterscheidet John Locke und wie entsteht Wissen?", back_md: "Geist als tabula rasa; Erkenntnis durch Sensation (Sinnesdaten) und Reflexion (Selbstbeobachtung); Abstraktion → Sprache → Diskurs.", order_index: 15 },
  { id: "c2-16", section_id: "2-3", front_md: "Welche Rolle spielen Ähnlichkeit und Kontiguität bei Humes Assoziationstheorie?", back_md: "Geistige Ordnung durch Ähnlichkeit und Kontiguität; Beginn der Assoziationstheorie.", order_index: 16 },
  { id: "c2-17", section_id: "2-3", front_md: "Wie verbindet Kant Sinnesdaten und Verstand, und was kritisiert er an der Psychologie?", back_md: "Sinneseindrücke + Verstandeskategorien → Erkenntnis; forderte Exaktheit; hielt Psychologie für schwer ‚mathematisierbar‘ (später relativiert).", order_index: 17 },
  { id: "c2-18", section_id: "2-4", front_md: "Welche Bedeutung hat Karl Philipp Moritz’ Magazin für Erfahrungsseelenkunde?", back_md: "Erste dt. psychologische Zeitschrift; Rubriken: Natur‑, Zeichen‑, Krankheits‑, Heilkunde. Wegbereiter populärer & wissenschaftlicher Psychologie.", order_index: 18 },
  { id: "c2-19", section_id: "2-4", front_md: "Was behaupten Physiognomik und Phrenologie, und warum gelten sie heute als überholt?", back_md: "Lavater: Charakter aus Gesicht (historisch). Gall: Schädel ↔ Fähigkeiten (falsch), aber frühe Idee funktionaler Spezialisierung.", order_index: 19 },
  { id: "c2-20", section_id: "2-4", front_md: "Welche Forderungen stellt der Positivismus an wissenschaftliche Psychologie?", back_md: "Nur überprüfbare Tatsachen; Theorien aus Beobachtung; Messung/Zählung; beeinflusst behavioristische Methodik.", order_index: 20 },
  { id: "c2-21", section_id: "2-4", front_md: "Wie beeinflusste Darwins Evolutionstheorie die Psychologie?", back_md: "Variation/Selektion → Anpassung; Mensch‑Tier‑Kontinuität → Vergleichende Psychologie, Tierversuch.", order_index: 21 },
  { id: "c2-22", section_id: "2-4", front_md: "Wie trug Herbart zur Mathematisierung psychischer Prozesse bei?", back_md: "Vorstellungen mit kraftähnlichem Charakter; Statik/Mechanik mentaler Inhalte; empirisches Fundament der Psychologie.", order_index: 22 },
  { id: "c2-23", section_id: "2-4", front_md: "Welche Beiträge leistete Helmholtz zur Sinnesphysiologie und Messung?", back_md: "Physiologische Optik, Farbwahrnehmung, Nervenleitgeschwindigkeit; Beobachtung ist erfahrungsabhängig.", order_index: 23 },
  { id: "c2-24", section_id: "2-4", front_md: "Was untersucht die Psychophysik (Fechner) und welche Methoden nutzte er?", back_md: "Äußere/innere Psychophysik; Grenzmethode, ebenmerkliche Unterschiede; Schwellen, unbewusste Wahrnehmung.", order_index: 24 },
  { id: "c2-25", section_id: "2-4", front_md: "Warum gilt Wundt als Begründer des ersten psychologischen Labors und was erforschte er?", back_md: "1879 Leipzig; Reaktionszeiten, Aufmerksamkeitszentrierung; zwei Stränge: experimentell und Völkerpsychologie.", order_index: 25 },
  { id: "c2-26", section_id: "2-4", front_md: "Welche Strömung und Schüler:innen sind mit Wundts Labor verbunden?", back_md: "Strukturalismus (mit Titchener). Schüler: Cattell (Tests), Külpe (Würzburg), Meumann (Pädagogik), Münsterberg (A&O), Witmer (Klinik).", order_index: 26 },
  { id: "c2-27", section_id: "2-4", front_md: "Wofür ist Ebbinghaus bekannt und wie untersuchte er Gedächtnis?", back_md: "Sinnlose Silben; Lern‑/Vergessenskurven; methodische Strenge.", order_index: 27 },
  { id: "c2-28", section_id: "2-4", front_md: "Welche Beiträge leistete William James und was ist Funktionalismus?", back_md: "Funktion des Bewusstseins, Emotion, ‚I/Me‘‑Selbst; Etablierung der US‑Psychologie.", order_index: 28 },
  { id: "c2-29", section_id: "2-4", front_md: "Worin unterscheidet sich Diltheys verstehende Psychologie vom erklärenden Ansatz?", back_md: "Hermeneutik: Sinn/Motivation statt Kausalreduktion; Kontroverse mit Ebbinghaus/Wundt.", order_index: 29 },
  { id: "c2-30", section_id: "2-4", front_md: "Welche Institutionen und Zeitschriften etablierten die Psychologie um 1900?", back_md: "APA 1892, DGP 1904; frühe Fachjournale (ab 1881): Philosophische Studien, AJP, Zeitschrift für Psychologie, Psychological Review.", order_index: 30 },
  { id: "c2-31", section_id: "2-5", front_md: "Wie untersuchte die Würzburger Schule höheres Denken?", back_md: "Külpe: kontrollierte Introspektion für Denkprozesse; Denksportaufgaben; Kritik aus Leipzig.", order_index: 31 },
  { id: "c2-32", section_id: "2-5", front_md: "Was ist die Grundidee der Gestaltpsychologie?", back_md: "Ganzes ist etwas Anderes als die Summe der Teile; Ordnungsprinzipien (Gestaltgesetze).", order_index: 32 },
  { id: "c2-33", section_id: "2-5", front_md: "Welche Gestaltgesetze strukturieren Wahrnehmung?", back_md: "Nähe, Ähnlichkeit, gute Fortsetzung, Geschlossenheit; Kontext formt Wahrnehmung.", order_index: 33 },
  { id: "c2-34", section_id: "2-5", front_md: "Wie erklärt Lewins Feldtheorie Verhalten und was sind Valenzen?", back_md: "Verhalten = f(Person, Umwelt); Lebensraum, Valenzen/Aufforderungscharaktere; Anwendung in Pädagogik, Klinik, Organisation.", order_index: 34 },
  { id: "c2-35", section_id: "2-5", front_md: "Welche Kernelemente prägen den Behaviorismus und Neobehaviorismus?", back_md: "Watson: beobachtbares Verhalten; Pawlow: klassisches Konditionieren; Thorndike: Law of Effect; Skinner: operantes Konditionieren; Hull: Neobehaviorismus.", order_index: 35 },
  { id: "c2-36", section_id: "2-5", front_md: "Welche Kerngedanken vertreten Freud, Adler und Jung?", back_md: "Freud: Psychoanalyse (Ich/Es/Über‑Ich, Abwehr, Träume); Adler: Individualpsychologie; Jung: Analytische Psychologie (kollektives Unbewusstes, Archetypen).", order_index: 36 },
  { id: "c2-37", section_id: "2-6", front_md: "Welche Auswirkungen hatte die NS‑Zeit auf Psychologie und Institutionen?", back_md: "Diskriminierung, Emigration (z. B. Wertheimer, Lewin, Freud); Rassenpsychologie; Diagnostik in Wehrmacht; Curricula politisiert.", order_index: 37 },
  { id: "c2-38", section_id: "2-6", front_md: "Wie erfolgte der institutionelle Wiederaufbau nach 1945?", back_md: "Nach 1945 DGP neu in Zonen; 1946 Berufsverband deutscher Psychologen; ÖGP 1993 (wissenschaftliche Vertretung in Österreich).", order_index: 38 },
  { id: "c2-39", section_id: "2-7", front_md: "Warum gilt 1956 als Meilenstein der kognitiven Wende?", back_md: "MIT‑Symposium: Miller (7±2), Chomsky (generative Grammatik), Newell/Simon (Logiktheorie‑Maschine). Mentale Repräsentationen/Informationsverarbeitung im Zentrum.", order_index: 39 },
  { id: "c2-40", section_id: "2-7", front_md: "Was besagen Broadbents Filtermodell und das TOTE‑Modell?", back_md: "Broadbent: Filter, Kapazität; Miller et al.: TOTE (Test‑Operate‑Test‑Exit) – Modell zielgerichteten Handelns.", order_index: 40 },
  { id: "c2-41", section_id: "2-7", front_md: "Was kennzeichnet konnektionistische Modelle (PDP)?", back_md: "Rumelhart & McClelland (1986): parallele, verteilte Verarbeitung (Units/Verbindungen/Schichten); Bedeutung in kognitiver Neuropsychologie.", order_index: 41 },
  { id: "c2-42", section_id: "2-7", front_md: "Welche Entwicklungslinien verbinden die historischen Stationen der Psychologie?", back_md: "Von Seele (Antike) → Empirie (Aufklärung) → Labore (Wundt) → Schulen → Kognitive Wende. Prüfe dich: Begriffe, Personen, Meilensteine, Stärken/Schwächen der Ansätze.", order_index: 42 },
  { id: "c3-1", section_id: "3-1", front_md: "Operationalisierung", back_md: "Messbare Indikatoren.", order_index: 1 },
  { id: "c3-2", section_id: "3-1", front_md: "Reliabilität", back_md: "Zuverlässigkeit.", order_index: 2 },
  { id: "c3-3", section_id: "3-1", front_md: "Validität", back_md: "Misst, was es soll.", order_index: 3 },
  { id: "c3-4", section_id: "3-1", front_md: "Experiment vs. Korrelation", back_md: "Ursache vs. Zusammenhang.", order_index: 4 },
  { id: "c3-5", section_id: "3-1", front_md: "Alltags- vs. wissenschaftliche Psychologie", back_md: "Alltag: erfahrungsbasiert/heuristisch; Wissenschaft: systematische Prüfung, replizierbare Evidenz.", order_index: 5 },
  { id: "c3-6", section_id: "3-1", front_md: "Heuristik – Definition", back_md: "Schnelle Faustregel unter Unsicherheit; nützlich, aber fehleranfällig.", order_index: 6 },
  { id: "c3-7", section_id: "3-1", front_md: "Repräsentativitätsheuristik – Beispiel", back_md: "K–K–K–K–K und K–Z–Z–K–Z sind gleich wahrscheinlich; ‚typisch‘ ist nicht wahrscheinlicher.", order_index: 7 },
  { id: "c3-8", section_id: "3-1", front_md: "Rückschaufehler (Hindsight Bias)", back_md: "Im Nachhinein erscheint der Ausgang ‚klar‘ → überschätzt Vorhersehbarkeit.", order_index: 8 },
  { id: "c3-9", section_id: "3-1", front_md: "Bestätigungsfehler (Confirmation Bias)", back_md: "Suche/gewichte bestätigende Infos stärker als widersprechende.", order_index: 9 },
  { id: "c3-10", section_id: "3-1", front_md: "Kritisches Denken – Kernfragen", back_md: "Quelle? Bedeutung? Evidenz? Alternativerklärungen?", order_index: 10 },
  { id: "c3-11", section_id: "3-1", front_md: "Wissenschaftliche Methode", back_md: "Verfahren/Techniken für präzise, fehlerarme Aussagen; Methodenlehre zeigt Einsatz.", order_index: 11 },
  { id: "c3-12", section_id: "3-1", front_md: "Vier Standards der Wissenschaftlichkeit", back_md: "Forschungsproblem; passender Prozess; Ethik; vollständige Dokumentation/Replikation.", order_index: 12 },
  { id: "c3-13", section_id: "3-1", front_md: "Replikation & Open Science", back_md: "Direkt/konzeptionell; Replikationskrise → Transparenz (Präregistrierung, Daten teilen).", order_index: 13 },
  { id: "c3-14", section_id: "3-1", front_md: "Qualitätskriterien einer Studie", back_md: "Relevanz, methodische/ethische Strenge, Präsentationsqualität.", order_index: 14 },
  { id: "c3-15", section_id: "3-1", front_md: "Quantitativ vs. qualitativ", back_md: "Quantitativ: Messen/Statistik; Qualitativ: sinnverstehend; passend zur Frage wählen.", order_index: 15 },
  { id: "c3-16", section_id: "3-1", front_md: "Hypothesenprozess (Kurz)", back_md: "Frage → Theorie/Hypothesen → Operationalisierung → Erhebung → Analyse → Interpretation → Publikation.", order_index: 16 },
  { id: "c3-17", section_id: "3-1", front_md: "Theorie vs. Hypothese", back_md: "Theorie: breites Erklärmodell; Hypothese: konkrete, prüfbare Vorhersage.", order_index: 17 },
  { id: "c3-18", section_id: "3-1", front_md: "Gute Hypothesen – Kriterien", back_md: "Präzise, widerspruchsfrei, falsifizierbar, operationalisierbar, begründet.", order_index: 18 },
  { id: "c3-19", section_id: "3-1", front_md: "Hypothesentyp: Unterschied", back_md: "Gruppenvergleich; ungerichtet vs. gerichtet (Richtung spezifiziert).", order_index: 19 },
  { id: "c3-20", section_id: "3-1", front_md: "Hypothesentyp: Zusammenhang", back_md: "Kovariation zweier Variablen; positiv vs. negativ; Korrelation ≠ Kausalität.", order_index: 20 },
  { id: "c3-21", section_id: "3-1", front_md: "Hypothesentyp: Veränderung", back_md: "Gleiche Personen über Zeit; un-/gerichtet (z. B. Symptomatik sinkt).", order_index: 21 },
  { id: "c3-22", section_id: "3-1", front_md: "Kausalität – 3 Bedingungen", back_md: "Kovariation; zeitliche Vorordnung; Ausschluss Alternativerklärungen.", order_index: 22 },
  { id: "c3-23", section_id: "3-1", front_md: "Latent vs. manifest", back_md: "Latent: nicht direkt messbar (z. B. Stress); manifest: beobachtbar (Puls, Skala).", order_index: 23 },
  { id: "c3-24", section_id: "3-1", front_md: "Variable & Operationalisierung", back_md: "Festlegen, was und wie gemessen wird; Indikatoren + Messinstrumente.", order_index: 24 },
  { id: "c3-25", section_id: "3-1", front_md: "Gütekriterien: Objektivität", back_md: "Ergebnis unabhängig von Durchführenden/Auswertung/Interpretation.", order_index: 25 },
  { id: "c3-26", section_id: "3-1", front_md: "Gütekriterien: Reliabilität", back_md: "Zuverlässige Wiederholung bei unverändertem Objekt.", order_index: 26 },
  { id: "c3-27", section_id: "3-1", front_md: "Gütekriterien: Validität", back_md: "Misst das intendierte Konstrukt (nicht Störfaktoren).", order_index: 27 },
  { id: "c3-28", section_id: "3-1", front_md: "Skalen: Nominal (dichotom)", back_md: "Kategorien, Gleichheit/Verschiedenheit; z. B. Erkrankung ja/nein, Nationalität.", order_index: 28 },
  { id: "c3-29", section_id: "3-1", front_md: "Skalen: Ordinal", back_md: "Rangordnung ohne definierte Abstände; z. B. Bildungsabschluss, Schulnoten.", order_index: 29 },
  { id: "c3-30", section_id: "3-1", front_md: "Skalen: Intervall", back_md: "Rang + Abstände, kein natürlicher Nullpunkt; z. B. °C, psych. Traits.", order_index: 30 },
  { id: "c3-31", section_id: "3-1", front_md: "Skalen: Verhältnis (Ratio)", back_md: "Rang + Abstände + Nullpunkt; Verhältnisse interpretierbar; z. B. Reaktionszeit, Kelvin.", order_index: 31 },
  { id: "c3-32", section_id: "3-1", front_md: "Diskret vs. kontinuierlich", back_md: "Diskret: abzählbare Kategorien; kontinuierlich: beliebige Werte; Antwortformat beeinflusst.", order_index: 32 },
  { id: "c3-33", section_id: "3-1", front_md: "Population, Stichprobe, Repräsentativität", back_md: "Stichprobe als Miniatur der Population; Voraussetzung externer Validität.", order_index: 33 },
  { id: "c3-34", section_id: "3-1", front_md: "Zufalls- vs. Gelegenheitsstichprobe", back_md: "Zufall ideal; Gelegenheitsstichprobe praktisch, aber Selection Bias möglich.", order_index: 34 },
  { id: "c3-35", section_id: "3-1", front_md: "Stichprobengröße – Daumenregel", back_md: "Genug für stabile Schätzung, aber ressourcenschonend; Ausreißer weniger wirkmächtig.", order_index: 35 },
  { id: "c3-36", section_id: "3-1", front_md: "Labor vs. Feld", back_md: "Labor: Kontrolle → interne Validität; Feld: Alltagsnähe → externe Validität.", order_index: 36 },
  { id: "c3-37", section_id: "3-1", front_md: "Experiment: UV/AV", back_md: "UV manipulieren, AV messen; Störvariablen kontrollieren/balancieren.", order_index: 37 },
  { id: "c3-38", section_id: "3-1", front_md: "Between vs. Within", back_md: "Between: Gruppenvergleich; Within: gleiche Personen in allen Bedingungen.", order_index: 38 },
  { id: "c3-39", section_id: "3-1", front_md: "Randomisierung & Parallelisieren", back_md: "Zufallszuteilung kontrolliert viele Störvariablen; Parallelisieren bei kleinem N gezielt.", order_index: 39 },
  { id: "c3-40", section_id: "3-1", front_md: "Reaktivität (Hawthorne)", back_md: "Beobachtetwerden verändert Verhalten; Gegenmaßnahmen: Coverstory, schwer verfälschbare Maße.", order_index: 40 },
  { id: "c3-41", section_id: "3-1", front_md: "Placebo/Nocebo", back_md: "Erwartungen bewirken (un-)erwünschte Effekte; Kontrolle via Blindversuch.", order_index: 41 },
  { id: "c3-42", section_id: "3-1", front_md: "Rosenthal-Effekt", back_md: "Erwartungen der Leitung beeinflussen Ergebnisse; Doppelblind minimiert.", order_index: 42 },
  { id: "c3-43", section_id: "3-1", front_md: "Deskriptive Statistik: Häufigkeiten", back_md: "Absolut/relativ/prozentual; bei kontinuierlichen Variablen Klassen bilden; Histogramm.", order_index: 43 },
  { id: "c3-44", section_id: "3-1", front_md: "Zentrale Tendenz", back_md: "Modalwert, Median (ausreißerrobust), arithm. Mittel (ab Intervall).", order_index: 44 },
  { id: "c3-45", section_id: "3-1", front_md: "Streuung", back_md: "Interquartilsabstand (Q3−Q1), Varianz, Standardabweichung.", order_index: 45 },
  { id: "c3-46", section_id: "3-1", front_md: "Korrelation r – Deutung", back_md: "r ∈ [−1,1]; Stärke/Richtung linearer Zusammenhang; kein Kausalitätsbeweis.", order_index: 46 },
  { id: "c4-1", section_id: "4-1", front_md: "Aktionspotenzial", back_md: "Depolarisation, Overshoot, Repolarisation.", order_index: 1 },
  { id: "c4-2", section_id: "4-1", front_md: "Synapse", back_md: "Transmitter, exzitatorisch vs. inhibitorisch.", order_index: 2 },
  { id: "c4-3", section_id: "4-1", front_md: "Hirnlappen", back_md: "Frontal, Parietal, Temporal, Okzipital.", order_index: 3 },
  { id: "c4-4", section_id: "4-1", front_md: "Gliazellen", back_md: "Müller-, Amakrin-, Ganglien-, Horizontalzellen.", order_index: 4 },
  { id: "c4-5", section_id: "4-1", front_md: "Biologische Psychologie – Was untersucht sie?", back_md: "Körperliche/physiologische Grundlagen psychischer Phänomene; Beziehungen zwischen physischen Merkmalen/Prozessen und psychischen Zuständen.", order_index: 5 },
  { id: "c4-6", section_id: "4-1", front_md: "Warum braucht Psychologie Biologie?", back_md: "Psychische Prozesse beruhen auf neuronalen/hormonellen Mechanismen; Grundlagen für Verstehen von Wahrnehmung, Lernen, Emotion, Störungen, Pharmakawirkung.", order_index: 6 },
  { id: "c4-7", section_id: "4-1", front_md: "Biopsychologie, Neurowissenschaften, Psychobiologie – Abgrenzung", back_md: "Biopsychologie = synonym Biologische Psychologie. Neurowissenschaften: übergeordnet, interdisziplinär. Psychobiologie: Teilgebiet der Biologie – psychologische Auswirkungen biologischer Prozesse.", order_index: 7 },
  { id: "c4-8", section_id: "4-1", front_md: "Hauptbereiche – Überblick", back_md: "Physiologische Psychologie; Neuropsychologie; Psychophysiologie; Kognitive Neurowissenschaft; Psychopharmakologie; Vergleichende Psychologie.", order_index: 8 },
  { id: "c4-9", section_id: "4-1", front_md: "Physiologische Psychologie – Kennzeichen", back_md: "Direkte Manipulation (Stimulation/Chirurgie), oft Tiermodelle; kausale Tests neuronaler Mechanismen des Verhaltens.", order_index: 9 },
  { id: "c4-10", section_id: "4-1", front_md: "Neuropsychologie – Fokus", back_md: "Auswirkungen umschriebener Hirnschädigungen beim Menschen; Diagnostik, Rehabilitationsmaßnahmen, Inferenz auf Funktionslokalisation.", order_index: 10 },
  { id: "c4-11", section_id: "4-1", front_md: "Psychophysiologie – typische Maße", back_md: "EEG (Gehirnaktivität), EMG (Muskelspannung), EOG (Augenbewegungen), EKG/Herzrate; Themen: Stress, Emotion, Rhythmen.", order_index: 11 },
  { id: "c4-12", section_id: "4-1", front_md: "Kognitive Neurowissenschaft – Methoden", back_md: "fMRT/MRT (funktionell/strukturell), MEG/EEG (zeitlich hochauflösend), TMS (kausale Perturbation).", order_index: 12 },
  { id: "c4-13", section_id: "4-1", front_md: "Psychopharmakologie – Ziel", back_md: "Wirkung von Medikamenten/Drogen auf Nervensystem/Verhalten; Entwicklung neuer Wirkstoffe; interdisziplinär.", order_index: 13 },
  { id: "c4-14", section_id: "4-1", front_md: "Vergleichende Psychologie – Nutzen", back_md: "Vergleich von Spezies → Evolution, Genetik, adaptive Funktionen von Verhalten; Tiermodelle als Brücke zum Menschen.", order_index: 14 },
  { id: "c4-15", section_id: "4-1", front_md: "Fall Phineas Gage – Lehre", back_md: "Läsion im linken vorderen Frontallappen → Persönlichkeits-/Impulskontrollveränderungen bei intakter Sprache/Intelligenz → Beitrag zur Rolle des Präfrontalcortex.", order_index: 15 },
  { id: "c4-16", section_id: "4-1", front_md: "Patient ‚Tan‘ (Broca) – Befund", back_md: "Läsion links frontal (Broca‑Areal) → gestörte Sprachproduktion bei relativ erhaltenem Verständnis (Broca‑Aphasie) → Funktionsspezialisierung.", order_index: 16 },
  { id: "c4-17", section_id: "4-1", front_md: "Neuron – Hauptteile & Funktion", back_md: "Soma (Zellkern, Organellen), Dendriten (Empfang), Axon (Weiterleitung), Terminals/Synapsen (Übertragung).", order_index: 17 },
  { id: "c4-18", section_id: "4-1", front_md: "Neurontypen – Beispiele", back_md: "Sensorische Neurone (Input), Interneurone (Verschaltung), Motoneurone (Output an Muskel/Drüse).", order_index: 18 },
  { id: "c4-19", section_id: "4-1", front_md: "Gliazellen – Typen & Aufgaben", back_md: "Astrozyten (Stoffwechsel, Blut‑Hirn‑Schranke), Oligodendrozyten/Schwann‑Zellen (Myelin), Mikroglia (Immunabwehr), Müller‑Zellen (Retina, Lichtleitung).", order_index: 19 },
  { id: "c4-20", section_id: "4-1", front_md: "Myelin & Ranvier‑Schnürringe", back_md: "Isolierung ↑ Leitungsgeschwindigkeit; saltatorische Erregungsleitung: AP wird an Schnürringen regeneriert.", order_index: 20 },
  { id: "c4-21", section_id: "4-1", front_md: "Multiple Sklerose – Kerneffekt", back_md: "Autoimmun‑Demyelinisierung im ZNS → Leitungsstörungen (Sehen, Sensibilität, Motorik), oft schubförmig.", order_index: 21 },
  { id: "c4-22", section_id: "4-1", front_md: "Ruhepotenzial – Ursachen (≈ −70 mV)", back_md: "Ionengradienten (Na+ außen, K+ innen, Cl− außen), selektive Permeabilität, Na+/K+‑Pumpe (3 Na+ raus/2 K+ rein).", order_index: 22 },
  { id: "c4-23", section_id: "4-1", front_md: "EPSP vs. IPSP", back_md: "EPSP: Depolarisation, ↑ Feuern; IPSP: Hyperpolarisation, ↓ Feuern. Summation am Axonhügel entscheidet über AP.", order_index: 23 },
  { id: "c4-24", section_id: "4-1", front_md: "Schwelle & Alles‑oder‑Nichts", back_md: "AP bei ca. −55 mV; unterschritten → kein AP; ausgelöst → immer gleichförmiges AP (Zelltyp‑spezifisch).", order_index: 24 },
  { id: "c4-25", section_id: "4-1", front_md: "Aktionspotenzial – Phasen", back_md: "Na+‑Aufstrich/Overshoot → Na+‑Inaktivierung → K+‑Ausstrom/Repola → Nachpotenzial (Hyperpolarisation).", order_index: 25 },
  { id: "c4-26", section_id: "4-1", front_md: "Refraktär – absolut vs. relativ", back_md: "Absolut: kein neues AP (Na+ inaktiviert). Relativ: AP nur bei stärkerem Reiz (bis Ende Nachpotenzial).", order_index: 26 },
  { id: "c4-27", section_id: "4-1", front_md: "Fortleitung: unmyelinisiert vs. myelinisiert", back_md: "Kontinuierlich vs. saltatorisch; Myelin ermöglicht schnelle, energieeffiziente Weiterleitung.", order_index: 27 },
  { id: "c4-28", section_id: "4-1", front_md: "Chemische Synapse – Ablauf", back_md: "AP → Ca2+‑Einstrom → Vesikel‑Exozytose → Transmitter bindet Rezeptoren → Ionenkanäle öffnen → EPSP/IPSP → Abbau/Rückaufnahme/Glia.", order_index: 28 },
  { id: "c4-29", section_id: "4-1", front_md: "Elektrische vs. chemische Synapsen", back_md: "Elektrisch: Gap Junctions, sehr schnell, oft bidirektional. Chemisch: Transmittervermittelt, modulär, im ZNS vorherrschend.", order_index: 29 },
  { id: "c4-30", section_id: "4-1", front_md: "Neurotransmitter – zentrale Beispiele", back_md: "Glutamat (exzitatorisch, Lernen); GABA (inhibitorisch; Benzodiazepine); Dopamin (Belohnung/Motorik; Parkinson↓); Serotonin (Emotion; SSRI); Acetylcholin (Motorik, Kognition/Schlaf); Noradrenalin (Erregung/Alertness).", order_index: 30 },
  { id: "c4-31", section_id: "4-1", front_md: "ZNS vs. PNS; somatisch vs. autonom", back_md: "ZNS: Gehirn/Rückenmark. PNS: außerhalb von Schädel/Wirbelsäule. Somatisch: Sinnesinput↔Skelettmuskeln. Autonom: Organe/Drüsen (Sympathikus/Parasympathikus).", order_index: 31 },
  { id: "c4-32", section_id: "4-1", front_md: "Rückenmark – graue/weiße Substanz & Reflexe", back_md: "Graue Substanz: H‑Form (Hinter-/Vorderhörner). Weiße Substanz: auf-/absteigende Bahnen. Dermatome, Spinalganglion. Reflexe (z. B. Patellarsehne).", order_index: 32 },
  { id: "c4-33", section_id: "4-1", front_md: "Gehirn – Entwicklungsaufteilung", back_md: "Prosencephalon (→ Tel-/Diencephalon), Mesencephalon, Rhombencephalon (→ Met-/Myelencephalon).", order_index: 33 },
  { id: "c4-34", section_id: "4-1", front_md: "Vier Lappen – Kernfunktionen", back_md: "Frontal (Planung, Sprache, Impulskontrolle, Motorik), Parietal (Somatosensorik, Raum/Aufmerksamkeit), Temporal (Hören, Gedächtnis, Amygdala/Hippocampus), Okzipital (Sehen).", order_index: 34 },
  { id: "c4-35", section_id: "4-1", front_md: "Autonomes NS – Sympathikus vs. Parasympathikus", back_md: "Sympathikus: Aktivierung (Puls/Atmung↑, Verdauung↓). Parasympathikus: Erholung/Normalbetrieb (Puls↓, Verdauung↑).", order_index: 35 },
  { id: "c4-36", section_id: "4-1", front_md: "Auge – Cornea, Iris, Pupille, Linse", back_md: "Cornea lichtdurchlässig; Iris regelt Pupillendurchmesser; Linse akkommodiert (nahe/ferne Objekte). Glaskörper, Sehnerv (blinder Fleck).", order_index: 36 },
  { id: "c4-37", section_id: "4-1", front_md: "Retina – Photorezeptoren & Fovea", back_md: "Stäbchen/Zapfen in äußerer Schicht; Fovea: maximale Sehschärfe (viele Zapfen). Retina‑Schichten sind lichtdurchlässig; Müller‑Glia leitet Licht.", order_index: 37 },
  { id: "c4-38", section_id: "4-1", front_md: "Stäbchen vs. Zapfen – Unterschiede", back_md: "Stäbchen: sehr lichtempfindlich, Dämmerungssehen, keine Farbe. Zapfen: Farb‑/Detailsehen bei Helligkeit; drei Typen (blau/grün/rot).", order_index: 38 },
  { id: "c4-39", section_id: "4-1", front_md: "Farbwahrnehmung & Farbfehlsichtigkeit (kurz)", back_md: "Farbe aus relativer Aktivität dreier Zapfentypen. Rot‑Grün‑Schwäche: Verschiebung/Fehlen von Zapfentypen; X‑chromosomal häufiger bei Männern.", order_index: 39 },
  { id: "c4-40", section_id: "4-1", front_md: "Retina‑Netzwerk & rezeptive Felder", back_md: "Photorezeptoren → Bipolar → Ganglion (Axone = Sehnerv); Horizontal/Amakrin modulieren. Rezeptives Feld: Retinafläche, die eine Zelle beeinflusst.", order_index: 40 },
  { id: "c4-41", section_id: "4-1", front_md: "Sehbahn – Chiasma, CGL, V1", back_md: "Nasale Fasern kreuzen im Chiasma (kontralateral). Rechtes CGL: linkes Gesichtsfeld; linkes CGL: rechtes. Retinotope Organisation; V1 im Okzipitallappen.", order_index: 41 },
  { id: "c4-42", section_id: "4-1", front_md: "V1 – spezialisierte Neurone", back_md: "Orientierungs‑ und richtungssensitive Zellen (Hubel & Wiesel); retinotope Karten; weitere Areale (V2, V3 …) für komplexe Verarbeitung.", order_index: 42 },
  { id: "c4-43", section_id: "4-1", front_md: "Anatomische Richtungen (Beispiele)", back_md: "Dorsal/Ventral; Anterior/Posterior; Superior/Inferior; Medial/Lateral; Ipsi-/Kontralateral – wichtig für Lagebeschreibung (z. B. Sehbahn).", order_index: 43 },
  { id: "c5-1", section_id: "5-1", front_md: "Wahrnehmung", back_md: "Bottom-up & Top-down.", order_index: 1 },
  { id: "c5-2", section_id: "5-1", front_md: "Gedächtnis", back_md: "Sensorisch, KZG, LZG.", order_index: 2 },
  { id: "c5-3", section_id: "5-1", front_md: "Klassisches Konditionieren", back_md: "Pawlow: CS, US, CR.", order_index: 3 },
  { id: "c5-4", section_id: "5-1", front_md: "Operantes Konditionieren", back_md: "Verstärkung & Bestrafung.", order_index: 4 },
  { id: "c5-5", section_id: "5-1", front_md: "Allgemeine Psychologie – präzise Definition und Abgrenzung", back_md: "Untersucht grundlegende, universelle psychische Funktionen bei gesunden Erwachsenen. Abgrenzung: nicht Differenzielle (Unterschiede), nicht Entwicklungspsychologie (Veränderungen), nicht Sozialpsychologie (Einfluss anderer).", order_index: 5 },
  { id: "c5-6", section_id: "5-1", front_md: "Kognitive Psychologie – warum dominierend seit der kognitiven Wende?", back_md: "Erklärt mentale Prozesse (Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken) mit Theorien/Experimenten als Gegenreaktion zum Behaviorismus, der innere Prozesse ausblendete.", order_index: 6 },
  { id: "c5-7", section_id: "5-1", front_md: "Input‑Verarbeitung – welche Stationen umfasst sie (Abbildung 5.2)?", back_md: "Sinnesreize → Aufmerksamkeit/Selektion → Einbettung in Vorwissen/Erwartungen (mentale Modelle) → Emotion/Motivation → Klassifikation/Urteilen/Entscheiden → Handlung; Sprache als Ausdruck.", order_index: 7 },
  { id: "c5-8", section_id: "5-1", front_md: "Wahrnehmung – dreistufiges Modell (Benennen und kurz erläutern)", back_md: "(1) Sensorische Empfindung (Transduktion über Rezeptoren) (2) Wahrnehmung im engeren Sinne (Perzept: mentales Abbild durch Integration) (3) Klassifikation (Zuordnung zu Kategorien).", order_index: 8 },
  { id: "c5-9", section_id: "5-1", front_md: "Psychophysik – was sind Absolute und Unterschiedsschwelle?", back_md: "Absolutschwelle: kleinste Reizintensität für Entdeckung. Unterschiedsschwelle (ebenmerklicher Unterschied): minimaler Differenzbetrag zur Unterscheidung, abhängig von Ausgangsintensität.", order_index: 9 },
  { id: "c5-10", section_id: "5-1", front_md: "Grenz‑ vs. Konstanzmethode – wie wird die Schwelle bestimmt?", back_md: "Grenzmethode: Intensität auf/absteigend, Detektion ja/nein. Konstanzmethode: zufällige Intensitäten, psychometrische Funktion; Schwelle ≈ Intensität mit 50% Entdeckungen.", order_index: 10 },
  { id: "c5-11", section_id: "5-1", front_md: "Signalentdeckungstheorie – zwei Komponenten der Entscheidung", back_md: "(1) Sensitivität (Sensorik, Störreize) (2) Entscheidungskriterium/Antworttendenz (Ja/Nein‑Bias). Vier Ausgänge: Treffer, Verpasser, falscher Alarm, korrekte Zurückweisung.", order_index: 11 },
  { id: "c5-12", section_id: "5-1", front_md: "Unaufmerksamkeitsblindheit (‚Gorilla‘) – Kernaussage für Aufmerksamkeit", back_md: "Fokus bindet Verarbeitungskapazität: Nichtbeachtete, unerwartete Ereignisse bleiben oft unbemerkt – Aufmerksamkeit bestimmt stark, was bewusst wird.", order_index: 12 },
  { id: "c5-13", section_id: "5-1", front_md: "Endogene vs. exogene Aufmerksamkeit – definieren und Beispiel nennen", back_md: "Endogen: willentlich, wissens-/erwartungsgetrieben (z. B. Pfeilhinweis). Exogen: reizgetrieben, abrupt (peripheres Aufleuchten).", order_index: 13 },
  { id: "c5-14", section_id: "5-1", front_md: "Cueing (Posner) – Valid/neutral/invalid und SOA‑Unterschiede", back_md: "Valid < Neutral < Invalid in RT. Endogen wirksam ab ~200 ms (länger anhaltend), exogen schon ~50 ms (kürzer anhaltend).", order_index: 14 },
  { id: "c5-15", section_id: "5-1", front_md: "Selektive Aufmerksamkeit – Cocktailparty‑Effekt prägnant erklären", back_md: "Selektives Folgen eines Gesprächs trotz Störkulisse; eigenes Name‑Vorkommen zieht Aufmerksamkeit auf anderen Kanal (Salienz).", order_index: 15 },
  { id: "c5-16", section_id: "5-1", front_md: "Dichotisches Hören & Split‑Span – zentraler Befund", back_md: "Beschattete Seite wird erinnert, unbeschattete Inhalte kaum. Split‑Span: Wiedergabe ohrweise (lokalitätsbasiert) leichter als paarweise.", order_index: 16 },
  { id: "c5-17", section_id: "5-1", front_md: "Farbwahrnehmung – Dreifarbentheorie (Young–Helmholtz) kurz", back_md: "Drei Zapfentypen mit unterschiedlichen spektralen Empfindlichkeiten; jede Farbe als Mischung dreier Grundaktivitäten; erklärt Farbmischung & Formen von Farbfehlsicht.", order_index: 17 },
  { id: "c5-18", section_id: "5-1", front_md: "Gegenfarbentheorie (Hering) – welche Paare und welches Phänomen?", back_md: "Rot–Grün, Blau–Gelb, Schwarz–Weiß (Helligkeit). Gegensätzliche Reaktionen erklären u. a. Komplementär‑Nachbilder und Unmöglichkeit ‚grünlichen Rot‘.", order_index: 18 },
  { id: "c5-19", section_id: "5-1", front_md: "Monokulare Tiefenhinweise – nennen Sie vier typische Cues", back_md: "Linienperspektive, relative Größe, Verdeckung, atmosphärische Perspektive (Sättigung/Bläue).", order_index: 19 },
  { id: "c5-20", section_id: "5-1", front_md: "Binokulare Hinweise – welche drei und wie entstehen sie?", back_md: "Konvergenz (Augenstellung), Akkommodation (Linsenwölbung, nah), Querdisparation (retinale Bildunterschiede) → Stereotiefe (z. B. Autostereogramme).", order_index: 20 },
  { id: "c5-21", section_id: "5-1", front_md: "Ames‑Raum – was wird manipuliert und welche Illusion entsteht?", back_md: "Tiefenhinweise (Linienperspektive) so verzerrt, dass gleiche Entfernung vorgetäuscht wird → Personen erscheinen unplausibel groß/klein.", order_index: 21 },
  { id: "c5-22", section_id: "5-1", front_md: "Zwei visuelle Pfade – ‚Was/Wo‘ vs. ‚Perception/Action‘ erklären", back_md: "Ursprünglich: ventral ‚Was‘ (Objekterkennung), dorsal ‚Wo‘ (Ort/Raum). Goodale & Milner: ventral ‚Vision for Perception‘, dorsal ‚Vision for Action‘ (Greifen).", order_index: 22 },
  { id: "c5-23", section_id: "5-1", front_md: "Lernen – psychologische Definition (klar abgrenzen)", back_md: "Durch Erfahrung entstandene, relativ überdauernde Verhaltensänderung/‑potenzial (nicht Reifung/Ermüdung/Drogen). Auftreten probabilistisch, Kontextabhängigkeit.", order_index: 23 },
  { id: "c5-24", section_id: "5-1", front_md: "Nicht‑assoziatives Lernen – Habituation vs. Sensitivierung", back_md: "Habituation: Reaktionsabnahme auf wiederholten, irrelevanten Reiz. Sensitivierung: Reaktionszunahme v. a. bei aversiven/schmerzhaften Reizen.", order_index: 24 },
  { id: "c5-25", section_id: "5-1", front_md: "Klassische Konditionierung – Begriffe korrekt zuordnen (UCS/CS/UCR/CR)", back_md: "UCS → UCR (vor Kond.). CS+UCS gepaart → CS allein → CR. Beispiel: Glocke (CS) + Futter (UCS) → Speichel (CR).", order_index: 25 },
  { id: "c5-26", section_id: "5-1", front_md: "Erwerb, Löschung, Spontanremission – was passiert?", back_md: "Erwerb: CS–UCS‑Paarung stärkt CR. Löschung: CS ohne UCS → CR schwächt/verschwindet. Spontanremission: gelöschte CR erholt sich vorübergehend.", order_index: 26 },
  { id: "c5-27", section_id: "5-1", front_md: "Generalisierung vs. Diskrimination – definieren Sie mit Beispiel", back_md: "Generalisierung: ähnlicher Reiz → CR (Little Albert: Felltiere). Diskrimination: unterscheidungslernend nur spezifischer Reiz → CR (Diskriminationstraining).", order_index: 27 },
  { id: "c5-28", section_id: "5-1", front_md: "Operante Konditionierung – Gesetz des Effekts (Thorndike)", back_md: "Handlungen mit befriedigenden Konsequenzen treten häufiger auf; S‑R‑Verbindungen werden durch Konsequenzen gestärkt (Problemkäfig).", order_index: 28 },
  { id: "c5-29", section_id: "5-1", front_md: "Skinner‑Box – wozu dient sie und was ist ein Operandum?", back_md: "Operante Kammer zur systematischen Analyse; Operandum (Hebel/Taste) löst Konsequenz aus. Basisrate → Verstärkungsphase → Verhaltensänderung.", order_index: 29 },
  { id: "c5-30", section_id: "5-1", front_md: "Verstärkung/Bestrafung – vier Fälle klar unterscheiden (mit Beispiel)", back_md: "Pos. Verst.: Angenehmes hinzu (Lob). Neg. Verst.: Unangenehmes weg (Haushalt entfällt). Pos. Bestraf.: Unangenehmes hinzu (Zusatzdienst). Neg. Bestraf.: Angenehmes weg (Hausarrest).", order_index: 30 },
  { id: "c5-31", section_id: "5-1", front_md: "Primäre vs. sekundäre Verstärker – Unterschied erläutern", back_md: "Primär: biologisch (Nahrung, Wasser). Sekundär: erlernt/ konditioniert (Geld, Token, soziale Anerkennung).", order_index: 31 },
  { id: "c5-32", section_id: "5-1", front_md: "Operante Löschung & Spontanerholung – Kerngedanke", back_md: "Ohne Verstärkung fällt Verhalten auf Ausgangsniveau; nach Pause spontane Wiederkehr möglich (kurz), erneute Verstärkung beschleunigt Wiederaufbau.", order_index: 32 },
  { id: "c5-33", section_id: "5-1", front_md: "Beobachtungslernen (Bandura) – zentrales Ergebnis der Bobo‑Doll‑Studien", back_md: "Kinder ahmen beobachtete (insb. belohnte) Aggression nach; stellvertretende Konsequenzen steuern Imitation (Belohnung > Tadel).", order_index: 33 },
  { id: "c5-34", section_id: "5-1", front_md: "Gedächtnisprozess – drei Phasen und Störquellen je Phase", back_md: "Enkodierung (Aufmerksamkeit, Tiefe), Speicherung (Dauer, Konsolidierung), Abruf (Hinweise, Zustand). Fehler auf jeder Stufe möglich.", order_index: 34 },
  { id: "c5-35", section_id: "5-1", front_md: "Drei‑Speicher‑Modell – benennen und Kernannahmen", back_md: "Sensorischer Speicher (ikonisch/echoisch, extrem kurz), Kurzzeit‑/Arbeitsbereich (sekunden), Langzeit (dauerhaft). Kritik: strikte Stufentrennung zu simpel.", order_index: 35 },
  { id: "c5-36", section_id: "5-1", front_md: "Arbeitsgedächtnis (Baddeley) – vier Komponenten und Funktionen", back_md: "Zentrale Exekutive (Aufmerksamkeitssteuerung), phonologische Schleife (sprachlich), visuo‑räuml. Notizblock (visuell/raum), episodischer Puffer (Bindeglied, Multimodalität).", order_index: 36 },
  { id: "c5-37", section_id: "5-1", front_md: "Millersche Zahl & Chunking – was folgt daraus fürs Merken?", back_md: "Kapazität ≈ 7±2 Einheiten; durch Chunking (Gruppieren) mehr Information pro Einheit (z. B. 1‑9‑4‑5 → ‚1945‘).", order_index: 37 },
  { id: "c5-38", section_id: "5-1", front_md: "Langzeitgedächtnis – explizit vs. implizit mit je zwei Beispielen", back_md: "Explizit: semantisch (Fakten), episodisch (Ereignisse). Implizit: prozedural (Fertigkeiten), Konditionierung/Priming/Habituierung.", order_index: 38 },
  { id: "c5-39", section_id: "5-1", front_md: "Enkodierspezifität – wie verbessert Passung die Erinnerung?", back_md: "Abruf gelingt besser, wenn Abrufkontext (extern/intern) der Enkodiersituation ähnelt (z. B. Taucher unter Wasser vs. an Land; stimmungsabhängig).", order_index: 39 },
  { id: "c5-40", section_id: "5-1", front_md: "Serieller Positionseffekt – Primacy vs. Recency erklären", back_md: "Anfang (Rehearsal/Einbettung) und Ende (KZG/zeitliche Diskriminierbarkeit) einer Liste werden besser erinnert als Mitte.", order_index: 40 },
  { id: "c5-41", section_id: "5-1", front_md: "Vergessenskurve (Ebbinghaus) – zentraler Verlauf und Implikation", back_md: "Starker frühzeitiger Abfall, danach langsamer; Ersparnismethode zeigt Restspuren → Wiederauffrischen/Spacing sinnvoll.", order_index: 41 },
  { id: "c5-42", section_id: "5-1", front_md: "Interferenz – proaktiv vs. retroaktiv mit Alltagsbeispiel", back_md: "Proaktiv: Alt stört Neu (Spanisch → Italienisch). Retroaktiv: Neu stört Alt (Chemie nach Physiklernen erschwert Physikabruf).", order_index: 42 },
  { id: "c5-43", section_id: "5-1", front_md: "Arbeitsgedächtnis‑Nachweis – was zeigen Dual‑Task‑Befunde?", back_md: "Gleichzeitige Aufgaben stören selektiv passende Subsysteme (z. B. visuo‑räumliche Zusatzaufgabe verschlechtert Schachzüge stärker als artikulatorische Suppression).", order_index: 43 },
  { id: "c5-44", section_id: "5-1", front_md: "H.M. und Amnesie – was sagt der Fall über Gedächtnissysteme?", back_md: "Schwere anterograde Amnesie (explizit) bei intakten prozeduralen Lernleistungen → Dissoziation explizit/implizit; Hippocampus essenziell für neue explizite Erinnerungen.", order_index: 44 },
  { id: "c6-1", section_id: "6-1", front_md: "Piaget", back_md: "Stadienentwicklung.", order_index: 1 },
  { id: "c6-2", section_id: "6-1", front_md: "Erikson", back_md: "Krisen über Lebensspanne.", order_index: 2 },
  { id: "c6-3", section_id: "6-1", front_md: "Bindung", back_md: "Sicher vs. unsicher.", order_index: 3 },
  { id: "c6-4", section_id: "6-1", front_md: "Spracherwerb", back_md: "Meilensteine.", order_index: 4 },
  { id: "c6-5", section_id: "6-1", front_md: "Entwicklungspsychologie – präzise Definition & Spannweite", back_md: "Untersucht Veränderungen über die gesamte Lebensspanne (biologisch, kognitiv, sprachlich, sozial). Nicht nur Kindheit/Jugend, sondern auch Erwachsenen‑ und hohes Alter.", order_index: 5 },
  { id: "c6-6", section_id: "6-1", front_md: "Lebensspannen‑Phasen (nach Tabelle 6.1) – aufzählen", back_md: "Pränatal; Säuglingsalter (0–1); frühe Kindheit/Kleinkind (1–3); mittlere/späte Kindheit (3–11); Pubertät/Adoleszenz (11–20); frühes EA (20–40); mittleres EA (40–65); hohes EA (65+).", order_index: 6 },
  { id: "c6-7", section_id: "6-1", front_md: "Anlage vs. Umwelt; Stufen vs. Kontinuität – Kerndebatten", back_md: "Entwicklung durch Gene, Umwelt oder Interaktion? Verläuft sie diskontinuierlich in Stufen (z. B. Piaget) oder kontinuierlich/gradient? Moderne Sicht: Interaktion; Mischformen.", order_index: 7 },
  { id: "c6-8", section_id: "6-1", front_md: "Pränatale Entwicklung – drei Phasen (benennen + Kern)", back_md: "Germinal (Befruchtung–2. Woche): Zygote, Zellteilung, Einnistung. Embryonal (3.–8. Woche): Spezialisierung, Organanlagen, erster Herzschlag. Fötal (ab 9. Woche bis Geburt): Wachstum/Ausreifung, Schlaf‑Wach, Bewegungen.", order_index: 8 },
  { id: "c6-9", section_id: "6-1", front_md: "Neuroentwicklung pränatal/früh – zentrale Prozesse", back_md: "Massive Neurogenese (bis ca. 250k Neurone/Minute), Axon-/Dendritenwachstum; in den ersten 2 Jahren: Überproduktion + synaptic pruning (Skulptur‑Prinzip: Rohmasse → Feinform durch Beschneidung).", order_index: 9 },
  { id: "c6-10", section_id: "6-1", front_md: "Teratogene – Definition & Beispiele", back_md: "Externe Schädiger in der Schwangerschaft (biologisch, physikalisch, chemisch). Beispiele: Infektionen, Luftverschmutzung, ionisierende Strahlung, Alkohol/Drogen, bestimmte Medikamente (z. B. Thalidomid).", order_index: 10 },
  { id: "c6-11", section_id: "6-1", front_md: "Fetales Alkoholsyndrom (FAS/FASD) – Folgen", back_md: "Spektrum pränataler Alkoholeffekte: Wachstumsstörungen, Gesichtsfehlbildungen, Herzfehler, Bewegungs‑/kognitive Störungen (Konzentration, Lernen). Risiko steigt mit Dosis/Dauer; sensible Phasen besonders gefährdet.", order_index: 11 },
  { id: "c6-12", section_id: "6-1", front_md: "Sozioökonomie/Stress pränatal – Auswirkungen", back_md: "Niedriger SES, Mangelernährung, Obdachlosigkeit, chronischer Stress/Trauma → ungünstige fetale Umgebung, Risiko für Angst/Depression/AD‑Symptome beim Kind erhöht; Bedeutung pränataler Diagnostik/Interventionen.", order_index: 12 },
  { id: "c6-13", section_id: "6-1", front_md: "Frühkindliche Reflexe – Such‑ & Saugreflex (Funktion)", back_md: "Automatische, unwillkürliche Reaktionen zur Nahrungsaufnahme: Suchreflex (Berührung Wange → Orientierung zur Quelle), Saugreflex (Aufnahme). Frühkindlich transiente Reflexe (vs. lebenslange z. B. Patellarsehne).", order_index: 13 },
  { id: "c6-14", section_id: "6-1", front_md: "Frühe Sinnesleistungen & Präferenzen (Mutter)", back_md: "Präferenz für Mutterstimme (Herzrate steigt), Muttergesicht, Muttergeruch; Muttermilchgeruch beruhigt stärker. Visuell: Präferenz für Muster, Bewegung, 3D, Neues, Gesichter (ggü. gesichtsunähnlich).", order_index: 14 },
  { id: "c6-15", section_id: "6-1", front_md: "Tiefenwahrnehmung – Visuelle Klippe (Befund)", back_md: "Kinder (6–14 Monate) meiden den scheinbaren Abgrund trotz Glasbrücke → frühes Tiefenverständnis. Krabbel‑Erfahrung moduliert Verhalten.", order_index: 15 },
  { id: "c6-16", section_id: "6-1", front_md: "Deprivation & Gehirn – Entwicklungsfolgen", back_md: "Langandauernde Vernachlässigung/Mangel an Stimulation → verändertes Hirnwachstum, reduzierte kognitive Werte (z. B. IQ). Aktive Interaktion/Anregung fördert Entwicklung.", order_index: 16 },
  { id: "c6-17", section_id: "6-1", front_md: "Adoleszenz – Hormone & Reifung (Kernpunkte)", back_md: "Mädchen: Östrogen/Progesteron, Menarche (~12 J.). Jungen: Testosteron, Spermache; sekundäre Geschlechtsmerkmale; Wachstumsschübe; psychische Belastbarkeit/Selbstwert teils herausgefordert.", order_index: 17 },
  { id: "c6-18", section_id: "6-1", front_md: "Erwachsenenalter – körperliche/kognitive Veränderungen", back_md: "Allgemein langsamer Abbau (Reaktionszeit/Muskelkraft); Inflammaging (niedriggradige Entzündung). Frauen: Menopause (~50 J.). Männer: Testosteronabnahme; Libido/Erektion ↓. Fitness/Ernährung/Training puffern vieles ab.", order_index: 18 },
  { id: "c6-19", section_id: "6-1", front_md: "Postformales Denken – was ist gemeint?", back_md: "Reflektiertes Abwägen, Antizipation von Konsequenzen, Umgang mit Ambiguität/Widersprüchen; assoziiert mit Kreativität und Verständnis von Metaphern/Ironie.", order_index: 19 },
  { id: "c6-20", section_id: "6-1", front_md: "Piaget – Grundideen (Schemata, Assimilation, Akkommodation)", back_md: "Kinder als kleine Wissenschaftler: konstruieren Wissen; Assimilation = neue Info in bestehende Schemata einordnen; Akkommodation = Schemata anpassen; Entwicklung teils in qualitativ unterschiedlichen Stadien.", order_index: 20 },
  { id: "c6-21", section_id: "6-1", front_md: "Piaget – vier Stadien (mit Kernerrungenschaften)", back_md: "Sensumotorisch (0–2): Objektpermanenz. Präoperational (2–7): Sprache, Repräsentationen (Animismus/Realismus möglich). Konkret‑operational (7–11): Logik über Konkretes, Reversibilität, Erhaltung. Formal‑operational (11+): abstraktes/hypothetisches Denken.", order_index: 21 },
  { id: "c6-22", section_id: "6-1", front_md: "Objektpermanenz – klassische & moderne Befunde", back_md: "Klassisch: Erwerb ~8 Monate; neuere Paradigmen (Blickdauer) zeigen Anzeichen ab ~3,5 Monaten → frühere Kompetenzen, aber motorische Limitierungen erklären Verhaltensdefizite.", order_index: 22 },
  { id: "c6-23", section_id: "6-1", front_md: "Erhaltung (Invarianz) – Flüssigkeitsaufgabe (Erklärung)", back_md: "Vor konkret‑operationalem Stadium wird Höhe überbewertet → ‚mehr Wasser‘ im schmal‑hohen Glas; im konkret‑operationalen Stadium Verständnis: Menge bleibt trotz Formwechsel gleich.", order_index: 23 },
  { id: "c6-24", section_id: "6-1", front_md: "Theory of Mind – False‑Belief‑Aufgabe (Maxi)", back_md: "Ab ~4–6 Jahren gelingen explizite False‑Belief‑Tests (Maxi sucht dort, wo er es glaubt – grüner Schrank); jüngere orientieren sich am Eigenwissen (blauer Schrank).", order_index: 24 },
  { id: "c6-25", section_id: "6-1", front_md: "Kohlberg – Moralentwicklung (3 Niveaus/6 Stufen)", back_md: "Präkonventionell (Strafe/Belohnung, instrumentell); konventionell (Beziehungen/soziales System); postkonventionell (Kontrakt/Rechte, universelle Prinzipien). Fokus auf Begründungen (Heinz‑Dilemma).", order_index: 25 },
  { id: "c6-26", section_id: "6-1", front_md: "Kohlberg – zentrale Kritikpunkte", back_md: "Geschlechterperspektive (Gilligan: Fürsorge vs. Gerechtigkeit – Unterschiede klein); Kulturübertragbarkeit begrenzt (westlich geprägte Instrumente); nicht jede Person erreicht hohe Stufe.", order_index: 26 },
  { id: "c6-27", section_id: "6-1", front_md: "Bindung – Strange Situation (Ainsworth) & Typen", back_md: "A: unsicher‑vermeidend (äußerlich ruhig, aber hohes Cortisol); B: sicher (weinen bei Trennung, gut tröstbar); C: unsicher‑ambivalent (sucht Trost, nimmt ihn nicht an); D: unsicher‑desorganisiert (konfuse Reaktionen, oft Trauma).", order_index: 27 },
  { id: "c6-28", section_id: "6-1", front_md: "Bindung – Kerneinflüsse & Generalisierbarkeit", back_md: "Elterliche Sensitivität zentral; Bindung generationenübergreifend; kulturübergreifend beobachtet; Bindungsperson ≠ zwingend Mutter (auch Vater/Großeltern/Betreuer).", order_index: 28 },
  { id: "c6-29", section_id: "6-1", front_md: "Erikson – psychosoziale Krisen (Überblick)", back_md: "0–1: Urvertrauen vs. Misstrauen; 1–3: Autonomie vs. Zweifel; 3–6: Initiative vs. Schuld; 6–Pub.: Kompetenz vs. Minderwertigkeit; Adol.: Identität vs. Rollenkonfusion; frühes EA: Intimität vs. Isolation; mittleres EA: Generativität vs. Stagnation; hohes EA: Ich‑Integrität vs. Verzweiflung.", order_index: 29 },
  { id: "c6-30", section_id: "6-1", front_md: "Identitätsstatus (Marcia) – vier Kategorien", back_md: "Diffus (keine Exploration/Commitment), Foreclosure/übernommen (Commitment ohne Exploration), Moratorium/kritisch (Exploration ohne Commitment), Achievement/erarbeitet (Exploration → Commitment).", order_index: 30 },
  { id: "c6-31", section_id: "6-1", front_md: "Pränatale Diagnostik – Ziel & Beispiele", back_md: "Früherkennung von Risiken/Fehlbildungen: Nackenfaltenmessung, Organscreening, Fruchtwasserbiopsie; ergänzt Standard‑Untersuchungen (Blut, Ultraschall).", order_index: 31 },
  { id: "c6-32", section_id: "6-1", front_md: "Konzept sensible Phasen – was bedeutet es?", back_md: "Zeitfenster erhöhter Verletzbarkeit oder Plastizität (z. B. rasches Wachstum). Teratogene wirken besonders stark; auch Lernen hat sensible Perioden.", order_index: 32 },
  { id: "c6-33", section_id: "6-1", front_md: "Kinder als aktive Mitgestalter – Entwicklungsumwelt", back_md: "Kinder gestalten Lernumwelten aktiv (Exploration, Spiel, soziale Interaktion). Eltern fördern Entwicklung durch anregende, sichere Kontexte.", order_index: 33 },
  { id: "c6-34", section_id: "6-1", front_md: "Erhaltung weiterer Größen (über Flüssigkeit hinaus)", back_md: "Im konkret‑operationalen Stadium: Erhaltung von Zahl, Länge, Masse, Gewicht; verstehen Reversibilität (X+X=Y → Y−X=X).", order_index: 34 },
  { id: "c6-35", section_id: "6-1", front_md: "Kognitive Alterung – Muster & Prävention", back_md: "65+: stärkere Korrelationen zwischen Fähigkeiten; genereller Abfall, aber variabel. Gesundheit, Bewegung, kognitives Training und soziale Einbindung puffern; Erkrankungen (Alzheimer/Parkinson) nehmen zu.", order_index: 35 },
  { id: "c6-36", section_id: "6-1", front_md: "Kontrollfragen – Anlage/Umwelt & Stufen/Gradient", back_md: "Kann ich Beispiele nennen, wo Gene/Umwelt erkennbar sind (FASD, Deprivation)? Welche Befunde stützen Stufen vs. Kontinuität (Piaget‑Revisionen)?", order_index: 36 },
  { id: "c7-1", section_id: "7-1", front_md: "Konformität", back_md: "Asch-Paradigma.", order_index: 1 },
  { id: "c7-2", section_id: "7-1", front_md: "Gehorsam", back_md: "Milgram.", order_index: 2 },
  { id: "c7-3", section_id: "7-1", front_md: "Minimalgruppen", back_md: "Tajfel.", order_index: 3 },
  { id: "c7-4", section_id: "7-1", front_md: "Rollen", back_md: "Stanford Prison.", order_index: 4 },
  { id: "c8-1", section_id: "8-1", front_md: "Big Five", back_md: "O, C, E, A, N.", order_index: 1 },
  { id: "c8-2", section_id: "8-1", front_md: "Messung", back_md: "Skalen/Fragebögen.", order_index: 2 },
  { id: "c8-3", section_id: "8-1", front_md: "Stabilität", back_md: "Rangordnung.", order_index: 3 },
  { id: "c8-4", section_id: "8-1", front_md: "Anwendung", back_md: "Prognose von Outcomes.", order_index: 4 }
  ,
  // Ergänzende Kapitel-1-Karten (Ziel: ~25 Minuten Lernzeit)
  { id: "c13", section_id: "1-1", front_md: "Leitfragen des Fachs (Kap. 1)", back_md: "Wie entstehen Denken & Handeln? Wie verändert sich Wahrnehmung/Denken? Wie lernen wir Sprache? Warum vergessen wir? Wie wirken Beziehungen auf Wohlbefinden? Wie beeinflussen Hirnschädigungen Erleben/Verhalten? Wie misst man Persönlichkeit (z. B. Gewissenhaftigkeit)?", order_index: 13 },
  { id: "c14", section_id: "1-1", front_md: "Wortherkunft Psychologie", back_md: "Griechisch: psyche = Seele/Gemüt; logos = Kunde/Wissenschaft → wörtlich Seelenkunde (vgl. Kap. 2.1.1).", order_index: 14 },
  { id: "c15", section_id: "1-1", front_md: "Arbeitsdefinition Psychologie", back_md: "Empirische Wissenschaft vom Erleben und Verhalten des Menschen inklusive kognitiver Prozesse (Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken, Problemlösen).", order_index: 15 },
  { id: "c16", section_id: "1-1", front_md: "Kognition – Kerndefinition", back_md: "Aufnahme, Verarbeitung, Speicherung von Information: Aufmerksamkeit, Wahrnehmung, Gedächtnis, Schlussfolgern, Denken, Problemlösen (Neisser, 2014).", order_index: 16 },
  { id: "c17", section_id: "1-2", front_md: "Psychologie als Schnittstelle", back_md: "Vereint Geistes‑, Sozial‑ und Naturwissenschaften; naturwissenschaftlicher Fokus nimmt zu (kognitive Neurowissenschaft).", order_index: 17 },
  { id: "c18", section_id: "1-2", front_md: "Methodenfächer – Überblick", back_md: "Ethik, Wissenschaftstheorie, Methodenlehre, Statistik – bilden das Grundgerüst psychologischer Forschung und Lehre.", order_index: 18 },
  { id: "c19", section_id: "1-2", front_md: "Anwendungsfächer – Beispiele (1)", back_md: "Pädagogische Psychologie (Lernmotivation, Wissensvermittlung); AOW‑Psychologie (Personalauswahl, Organisationsentwicklung, Marktverhalten).", order_index: 19 },
  { id: "c20", section_id: "1-2", front_md: "Anwendungsfächer – Beispiele (2)", back_md: "Klinische Psychologie (Störungen: Prävention, Diagnostik, Behandlung, Rehabilitation); Gesundheitspsychologie (Prävention/Verhaltensänderung: Ernährung, Bewegung, Rauchen/Alkohol, Stress).", order_index: 20 },
  { id: "c21", section_id: "1-2", front_md: "Psychologische Diagnostik – Sonderrolle", back_md: "Querschnitts‑Fertigkeit: überprüft Fragestellungen in vielen Feldern (z. B. Legasthenie? Eignung? Klinische Diagnose?).", order_index: 21 },
  { id: "c22", section_id: "1-2", front_md: "Zwei‑Stufen‑Modell", back_md: "Grundlagenforschung → Anwendung. Auch Anwendungsfelder forschen (z. B. Therapieevaluation: Wirksamkeit von Methoden).", order_index: 22 },
  { id: "c23", section_id: "1-2", front_md: "Überschneidungen der Fächer", back_md: "Phänomene sind oft mehreren Fächern zuzuordnen (z. B. Wahrnehmung: Bio/Allg./Entw./Sozial/Diff. – je anderer Fokus).", order_index: 23 },
  { id: "c24", section_id: "1-3", front_md: "Psychodynamischer Ansatz – Kern", back_md: "Unbewusste Prozesse; innere Kräfte/Triebe; Konflikt Bedürfnisse ↔ soziale Erfordernisse; Freud als prominenter Vertreter.", order_index: 24 },
  { id: "c25", section_id: "1-3", front_md: "Behaviorismus – Kern", back_md: "Verhalten über Reize, Reaktionen, Konsequenzen erklärbar; Fokus auf Beobachtbarem; Lernprinzipien (klassisch/operant).", order_index: 25 },
  { id: "c26", section_id: "1-3", front_md: "Humanistische Psychologie – Kern", back_md: "Mensch als aktives, wachstumsorientiertes Wesen; Selbstverwirklichung; holistische Sicht inkl. sozialer/kultureller Faktoren.", order_index: 26 },
  { id: "c27", section_id: "1-3", front_md: "Kognitiver Ansatz – Kern", back_md: "Mentale Repräsentationen & Informationsverarbeitung: Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken, Entscheiden.", order_index: 27 },
  { id: "c28", section_id: "1-3", front_md: "Biologisch‑neurowiss. Ansatz – Kern", back_md: "Psychische Phänomene auf biochemische/körperliche Vorgänge rückführbar (Gene, Nerven‑, Hormonsystem).", order_index: 28 },
  { id: "c29", section_id: "1-3", front_md: "Eklektischer Ansatz", back_md: "Mehrere Perspektiven ergänzen sich; Wahl je nach Phänomen/Fragestellung (z. B. Therapieansätze).", order_index: 29 },
  { id: "c30", section_id: "1-4", front_md: "Vier Ziele – Überblick", back_md: "Beschreiben, Erklären, Vorhersagen, Verändern – greifen ineinander; gelten in Forschung und Anwendung.", order_index: 30 },
  { id: "c31", section_id: "1-4", front_md: "Beschreiben – Methoden", back_md: "Beobachtung, Befragung, Tests, Experimente; Ziel: systematische, objektive Datenerhebung (unabhängig von Vorannahmen).", order_index: 31 },
  { id: "c32", section_id: "1-4", front_md: "Operationalisierung", back_md: "Nicht direkt Sichtbares (z. B. Angst, Einstellung, Intelligenz) über Indikatoren messbar machen; Messinstrumente entwickeln/prüfen.", order_index: 32 },
  { id: "c33", section_id: "1-4", front_md: "Erklären – Faktoren", back_md: "Dispositionale (Gene, Fähigkeiten, Motive) und situative Faktoren (Verhalten anderer, Normen, Wetter/Umwelt) wirken zusammen.", order_index: 33 },
  { id: "c34", section_id: "1-4", front_md: "Vorhersagen – Anforderungen", back_md: "Präzise, prüfbare Aussagen (Falsifizierbarkeit); Anwendung z. B. in Personalauswahl (Passung Eigenschaften ↔ Anforderungen).", order_index: 34 },
  { id: "c35", section_id: "1-4", front_md: "Verändern – Ethik", back_md: "Interventionen (Therapie/Prävention/Training) nur zum Wohl der Person; Auftrag nötig; Wirkung evaluieren.", order_index: 35 },
  { id: "c36", section_id: "1-4", front_md: "Ethik (APA) – 5 Prinzipien", back_md: "(1) Wohltätigkeit/Nicht‑Schaden, (2) Loyalität/Verantwortung, (3) Integrität, (4) Gerechtigkeit, (5) Respekt (Privatsphäre, Vertraulichkeit, Diversität).", order_index: 36 },
  { id: "c37", section_id: "1-4", front_md: "Ethik – historische Lehre", back_md: "Z. B. Milgram (1963) wäre heute in ursprünglicher Form unzulässig; Ethikkommissionen sichern Standards vor Studienbeginn.", order_index: 37 },
  { id: "c38", section_id: "1-2", front_md: "Wahrnehmung als Querschnitt (Tabelle 1.1)", back_md: "Eine Frage, viele Perspektiven: Bio (Verankerung im Gehirn), Allg. (Prozesse), Entw. (Wann/Wie), Sozial (Einfluss anderer), Diff. (Unterschiede).", order_index: 38 },
  { id: "c39", section_id: "1-1", front_md: "Kapitel 1 – Nutzen fürs Studium", back_md: "Begriffe & Landkarte für die ersten Semester; motivierende Leitfragen; Brücke zu Kap. 2 (Geschichte) & Kap. 3 (Methodik).", order_index: 39 }
]

export const questions: QuestionT[] = [
  {
    id: "q1",
    chapter_id: 1,
    stem_md: "Welche Ziele verfolgt die Psychologie?",
    options: [
      { id: "a", label: "a", md: "Beschreiben", isCorrect: true },
      { id: "b", label: "b", md: "Erklären", isCorrect: true },
      { id: "c", label: "c", md: "Vorhersagen", isCorrect: true },
      { id: "d", label: "d", md: "Verändern/Anwenden", isCorrect: true }
    ],
    explanation_md: "Vier Ziele: Beschreiben, Erklären, Vorhersagen, Verändern.",
    tags: ["definition"]
  },
  // Kapitel 2 – Geschichte der Psychologie (hochwertige MCQs, multi-correct, keine Teilpunkte)
  {
    id: "q2-101",
    chapter_id: 2,
    stem_md: "Was beschreibt ein psychologisches Paradigma korrekt?",
    options: [
      { id: "a", label: "a", md: "Vorherrschendes Denkmuster mit Grundannahmen und akzeptierten Methoden", isCorrect: true },
      { id: "b", label: "b", md: "Eine einzelne Studie mit hoher Stichprobengröße", isCorrect: false },
      { id: "c", label: "c", md: "Ein Standardsatz an Fragebögen für alle Themen", isCorrect: false },
      { id: "d", label: "d", md: "Orientierung, was als gültige Erkenntnis gilt", isCorrect: true }
    ],
    explanation_md: "Paradigma = Denkmuster + Methodenrahmen; es lenkt Fragestellungen und Gültigkeitskriterien.",
    tags: ["paradigma"]
  },
  {
    id: "q2-102",
    chapter_id: 2,
    stem_md: "Welche Kernaussagen treffen auf die orphische Lehre zu?",
    options: [
      { id: "a", label: "a", md: "Dualismus von Körper (Diesseits) und unsterblicher Seele (Jenseits)", isCorrect: true },
      { id: "b", label: "b", md: "Seele benötigt zwingend einen Körper, um zu existieren", isCorrect: false },
      { id: "c", label: "c", md: "Seelenwanderung als Kreislauf von Leben und Tod", isCorrect: true },
      { id: "d", label: "d", md: "Körper als ‚Gefängnis‘ der Seele", isCorrect: true }
    ],
    explanation_md: "Orphiker: unsterbliche Seele, Seelenwanderung, Körper als Gefängnis; Seele kann unabhängig existieren.",
    tags: ["antike","seele"]
  },
  {
    id: "q2-103",
    chapter_id: 2,
    stem_md: "Platon – was gehört zu seiner Drei‑Teil‑Seele und Grundhaltung?",
    options: [
      { id: "a", label: "a", md: "Begehrende, zielstrebige, denkende Seele", isCorrect: true },
      { id: "b", label: "b", md: "Monistische Einheit von Leib und Seele", isCorrect: false },
      { id: "c", label: "c", md: "Idealistischer Dualismus mit Vorrang der Seele", isCorrect: true },
      { id: "d", label: "d", md: "Seele lokalisiert ausschließlich im Herzen", isCorrect: false }
    ],
    explanation_md: "Platon teilt die Seele in drei Teile und vertritt einen idealistischen Dualismus.",
    tags: ["platon","seele"]
  },
  {
    id: "q2-104",
    chapter_id: 2,
    stem_md: "Aristoteles’ Hylomorphismus – welche Aussagen passen?",
    options: [
      { id: "a", label: "a", md: "Seele und Körper sind untrennbar (Form–Stoff‑Einheit)", isCorrect: true },
      { id: "b", label: "b", md: "Es gibt vegetative, sensitive und intellektive Seelenfunktionen", isCorrect: true },
      { id: "c", label: "c", md: "Seele verleiht Organen Zweck (Teleologie)", isCorrect: true },
      { id: "d", label: "d", md: "Seele existiert unabhängig vom Körper als eigenständige Substanz", isCorrect: false }
    ],
    explanation_md: "Aristoteles: Seele als Form des lebendigen Körpers; funktionale Abstufungen und Zweckmäßigkeit.",
    tags: ["aristoteles","hylomorphismus"]
  },
  {
    id: "q2-105",
    chapter_id: 2,
    stem_md: "Welche Aussagen zu Galens Temperamenten sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Sanguiniker – Blut; freudvoll, schnell erregbar", isCorrect: true },
      { id: "b", label: "b", md: "Phlegmatiker – Schleim; langsam, freundlich", isCorrect: true },
      { id: "c", label: "c", md: "Choleriker – gelbe Galle; schnell erregbar", isCorrect: true },
      { id: "d", label: "d", md: "Melancholiker – schwarze Galle; schwermütig", isCorrect: true }
    ],
    explanation_md: "Vier‑Säfte‑Lehre auf Persönlichkeit übertragen: historisch prägend, heute überholt.",
    tags: ["galen","temperament"]
  },
  {
    id: "q2-106",
    chapter_id: 2,
    stem_md: "Augustinus’ Sicht – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Körper = äußerer, Seele/Geist = innerer Mensch", isCorrect: true },
      { id: "b", label: "b", md: "Seele ist in einem spezifischen Organ lokalisiert", isCorrect: false },
      { id: "c", label: "c", md: "Nervensystem als Vermittler der Wirksamkeit der Seele", isCorrect: true },
      { id: "d", label: "d", md: "Seele hat geringere Wertigkeit als der Körper", isCorrect: false }
    ],
    explanation_md: "Seele/Geist hat höhere Wertigkeit; Nervensystem vermittelt Einwirkungen.",
    tags: ["augustinus"]
  },
  {
    id: "q2-107",
    chapter_id: 2,
    stem_md: "Thomas von Aquin – welche Kombinationen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Integration aristotelischer Seelenlehre in die Scholastik", isCorrect: true },
      { id: "b", label: "b", md: "Unterscheidung vegetativer, sensitiver und intellektiver Seele", isCorrect: true },
      { id: "c", label: "c", md: "Geistseele ist an Materie gebunden und vergeht mit dem Körper", isCorrect: false },
      { id: "d", label: "d", md: "Geistseele überdauert den Tod", isCorrect: true }
    ],
    explanation_md: "Aquin übernimmt aristotelische Unterscheidungen und postuliert Unsterblichkeit der Geistseele.",
    tags: ["aquin","scholastik"]
  },
  {
    id: "q2-108",
    chapter_id: 2,
    stem_md: "Rationalismus vs. Empirismus – was ist richtig?",
    options: [
      { id: "a", label: "a", md: "Rationalismus: Wissen durch Vernunft, Empfindungen als unsichere Quelle", isCorrect: true },
      { id: "b", label: "b", md: "Empirismus: Wissen primär durch Sinneserfahrung und Reflexion", isCorrect: true },
      { id: "c", label: "c", md: "Rationalismus: Tabula‑rasa‑Modell des Geistes", isCorrect: false },
      { id: "d", label: "d", md: "Empirismus: Ablehnung des Experiments", isCorrect: false }
    ],
    explanation_md: "Descartes vs. Locke/Hume: Vernunft vs. Erfahrung; Empirie schließt Beobachtung/Experiment ein.",
    tags: ["rationalismus","empirismus"]
  },
  {
    id: "q2-109",
    chapter_id: 2,
    stem_md: "Descartes – welche Aussagen passen?",
    options: [
      { id: "a", label: "a", md: "Dualismus von res extensa und res cogitans", isCorrect: true },
      { id: "b", label: "b", md: "Zirbeldrüse als hypothetischer Kopplungsort", isCorrect: true },
      { id: "c", label: "c", md: "Monistische Identitätstheorie", isCorrect: false },
      { id: "d", label: "d", md: "Mechanistisches Menschenbild (Körper als Maschine)", isCorrect: true }
    ],
    explanation_md: "Descartes prägte den Dualismus und vermutete die Zirbeldrüse als Schnittstelle.",
    tags: ["descartes"]
  },
  {
    id: "q2-110",
    chapter_id: 2,
    stem_md: "Locke und Hume – welche Zuordnungen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Locke: Sensation und Reflexion als Erkenntnisquellen", isCorrect: true },
      { id: "b", label: "b", md: "Locke: Tabula‑rasa‑Metapher", isCorrect: true },
      { id: "c", label: "c", md: "Hume: Assoziation über Ähnlichkeit und Kontiguität", isCorrect: true },
      { id: "d", label: "d", md: "Hume: Erkenntnis ausschließlich durch Intuition", isCorrect: false }
    ],
    explanation_md: "Locke formuliert Sensation/Reflexion; Hume systematisiert Assoziationsprinzipien.",
    tags: ["locke","hume"]
  },
  {
    id: "q2-111",
    chapter_id: 2,
    stem_md: "Kants Position zur Psychologie – was stimmt?",
    options: [
      { id: "a", label: "a", md: "Erkenntnis entsteht durch Verknüpfung von Sinnesdaten und Verstand", isCorrect: true },
      { id: "b", label: "b", md: "Psychologie sei schwer exakt/mathematisch zu fassen", isCorrect: true },
      { id: "c", label: "c", md: "Psychologie sei rein geisteswissenschaftlich und müsse Introspektion ablehnen", isCorrect: false },
      { id: "d", label: "d", md: "Seine Skepsis wurde später z. B. durch Herbart relativiert", isCorrect: true }
    ],
    explanation_md: "Kant sah Grenzen der Exaktheit; Herbart/Fechner führten Mess‑/Modellierung ein.",
    tags: ["kant"]
  },
  {
    id: "q2-112",
    chapter_id: 2,
    stem_md: "Welche Aussagen zu Moritz’ Magazin für Erfahrungsseelenkunde sind richtig?",
    options: [
      { id: "a", label: "a", md: "Erste deutschsprachige psychologische Zeitschrift", isCorrect: true },
      { id: "b", label: "b", md: "Rubriken u. a. Seelennatur‑, Seelenzeichen‑, Seelenkrankheits‑, Seelenheilkunde", isCorrect: true },
      { id: "c", label: "c", md: "Primär Anekdoten ohne empirischen Anspruch", isCorrect: false },
      { id: "d", label: "d", md: "Wegbereiter populärer und wissenschaftlicher Psychologie", isCorrect: true }
    ],
    explanation_md: "Das Magazin bündelte empirische Beiträge und strukturierte Themenfelder der Psychologie.",
    tags: ["moritz"]
  },
  {
    id: "q2-113",
    chapter_id: 2,
    stem_md: "Physiognomik und Phrenologie – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Physiognomik: Charakterdiagnose aus Gesichtszügen (historisch)", isCorrect: true },
      { id: "b", label: "b", md: "Phrenologie: Schädel → Fähigkeiten (falsch), jedoch frühe Spezialisierungsidee", isCorrect: true },
      { id: "c", label: "c", md: "Beide gelten heute als valide wissenschaftliche Theorien", isCorrect: false },
      { id: "d", label: "d", md: "Bezug zur modernen funktionellen Spezialisierung (Broca) nur scheinbar", isCorrect: false }
    ],
    explanation_md: "Beide Lehren sind überholt; die Idee lokaler Spezialisierung wurde später neurologisch belegt.",
    tags: ["physiognomik","phrenologie"]
  },
  {
    id: "q2-114",
    chapter_id: 2,
    stem_md: "Welche Forderungen des Positivismus prägten die Psychologie besonders?",
    options: [
      { id: "a", label: "a", md: "Fokus auf überprüfbare Tatsachen und Messung", isCorrect: true },
      { id: "b", label: "b", md: "Metaphysische Deutungen als wissenschaftlich zulässig", isCorrect: false },
      { id: "c", label: "c", md: "Theorienableitung aus Beobachtungen", isCorrect: true },
      { id: "d", label: "d", md: "Ablehnung quantitativer Methoden", isCorrect: false }
    ],
    explanation_md: "Positivismus forderte Messbarkeit/Überprüfbarkeit; im Behaviorismus deutlich sichtbar.",
    tags: ["positivismus"]
  },
  {
    id: "q2-115",
    chapter_id: 2,
    stem_md: "Darwinismus – welche psychologischen Konsequenzen folgten?",
    options: [
      { id: "a", label: "a", md: "Aufwertung von Tier‑Mensch‑Vergleichen", isCorrect: true },
      { id: "b", label: "b", md: "Entstehung der Vergleichenden Psychologie", isCorrect: true },
      { id: "c", label: "c", md: "Tierversuch als irrelevant für Psychologie", isCorrect: false },
      { id: "d", label: "d", md: "Selektion als Erklärung für Anpassungsleistungen", isCorrect: true }
    ],
    explanation_md: "Evolutionärer Rahmen motivierte Vergleichsstudien und Tierversuch.",
    tags: ["darwinismus"]
  },
  {
    id: "q2-116",
    chapter_id: 2,
    stem_md: "Herbart/Helmholtz/Fechner – welche Zuordnungen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Herbart: Statik/Mechanik der Vorstellungen (Mathematisierung)", isCorrect: true },
      { id: "b", label: "b", md: "Helmholtz: Nervenleitgeschwindigkeit, Farbwahrnehmung", isCorrect: true },
      { id: "c", label: "c", md: "Fechner: Psychophysik, Grenzmethode, ebenmerkliche Unterschiede", isCorrect: true },
      { id: "d", label: "d", md: "Helmholtz: Ablehnung physiologischer Messungen", isCorrect: false }
    ],
    explanation_md: "Alle drei verankern die Psychologie naturwissenschaftlich; Messung und Modellierung im Zentrum.",
    tags: ["herbart","helmholtz","fechner"]
  },
  {
    id: "q2-117",
    chapter_id: 2,
    stem_md: "Wundts Programm – was gehört dazu?",
    options: [
      { id: "a", label: "a", md: "Erstes Labor (1879), Reaktionszeitmessungen", isCorrect: true },
      { id: "b", label: "b", md: "Apperzeption als Aufmerksamkeitszentrierung", isCorrect: true },
      { id: "c", label: "c", md: "Völkerpsychologie für komplexe kulturelle Phänomene", isCorrect: true },
      { id: "d", label: "d", md: "Ausschließliche Ablehnung der Introspektion", isCorrect: false }
    ],
    explanation_md: "Wundt nutzte kontrollierte Introspektion für elementare Prozesse, Völkerpsychologie für Kultur.",
    tags: ["wundt"]
  },
  {
    id: "q2-118",
    chapter_id: 2,
    stem_md: "Welche Zuordnungen (Person → Beitrag) sind richtig?",
    options: [
      { id: "a", label: "a", md: "Cattell → Testpsychologie", isCorrect: true },
      { id: "b", label: "b", md: "Külpe → Würzburger Schule (Denken)", isCorrect: true },
      { id: "c", label: "c", md: "Meumann → Pädagogische Psychologie", isCorrect: true },
      { id: "d", label: "d", md: "Witmer → erste psychologische Klinik (USA)", isCorrect: true }
    ],
    explanation_md: "Alles sind Schülerbeispiele aus dem Wundt‑Umfeld.",
    tags: ["wundt","schueler"]
  },
  {
    id: "q2-119",
    chapter_id: 2,
    stem_md: "Ebbinghaus – was kennzeichnet sein Vorgehen?",
    options: [
      { id: "a", label: "a", md: "Sinnlose Silben zur Kontrolle von Vorwissen", isCorrect: true },
      { id: "b", label: "b", md: "Logarithmische Lern‑/Vergessenskurven", isCorrect: true },
      { id: "c", label: "c", md: "Verzicht auf Experimente zugunsten von Hermeneutik", isCorrect: false },
      { id: "d", label: "d", md: "Hohe methodische Strenge", isCorrect: true }
    ],
    explanation_md: "Ebbinghaus’ Experimentalprogramm prägte Gedächtnisforschung grundlegend.",
    tags: ["ebbinghaus"]
  },
  {
    id: "q2-120",
    chapter_id: 2,
    stem_md: "William James und Funktionalismus – was passt zusammen?",
    options: [
      { id: "a", label: "a", md: "Funktion des Bewusstseins statt Struktur seiner Elemente", isCorrect: true },
      { id: "b", label: "b", md: "Theorie des Selbst (I/Me)", isCorrect: true },
      { id: "c", label: "c", md: "Ablehnung von Emotionsthemen", isCorrect: false },
      { id: "d", label: "d", md: "Etablierung des Fachs an US‑Universitäten", isCorrect: true }
    ],
    explanation_md: "James verschob die Perspektive auf Funktionen und prägte die US‑Psychologie.",
    tags: ["james","funktionalismus"]
  },
  {
    id: "q2-121",
    chapter_id: 2,
    stem_md: "Dilthey vs. Experimentalpsychologie – welche Aussagen stimmen?",
    options: [
      { id: "a", label: "a", md: "Dilthey: Verstehen durch Sinn‑/Motivationszusammenhänge (Hermeneutik)", isCorrect: true },
      { id: "b", label: "b", md: "Ebbinghaus: Verteidigt erklärende/experimentelle Psychologie", isCorrect: true },
      { id: "c", label: "c", md: "Beide Positionen waren vollständig kompatibel", isCorrect: false },
      { id: "d", label: "d", md: "Debatte markiert eine Spaltung in der deutschsprachigen Psychologie", isCorrect: true }
    ],
    explanation_md: "Es handelte sich um eine grundlegende methodische Kontroverse.",
    tags: ["dilthey","methoden"]
  },
  {
    id: "q2-122",
    chapter_id: 2,
    stem_md: "Welche Institutionalisierungen um 1900 sind korrekt zugeordnet?",
    options: [
      { id: "a", label: "a", md: "APA → 1892 (Hall)", isCorrect: true },
      { id: "b", label: "b", md: "DGP → 1904", isCorrect: true },
      { id: "c", label: "c", md: "Philosophische Studien → 1881", isCorrect: true },
      { id: "d", label: "d", md: "Psychological Review → 1994", isCorrect: false }
    ],
    explanation_md: "Die genannten Gründungen/Journale verankerten die Disziplin dauerhaft.",
    tags: ["apa","dgp","journale"]
  },
  {
    id: "q2-123",
    chapter_id: 2,
    stem_md: "Würzburger Schule – was kennzeichnet die Methode?",
    options: [
      { id: "a", label: "a", md: "Kontrollierte Introspektion für höhere Denkprozesse", isCorrect: true },
      { id: "b", label: "b", md: "Ausschließlich Verhalten ohne Selbstberichte", isCorrect: false },
      { id: "c", label: "c", md: "Denksportaufgaben/Redensarten zur Analyse des Denkwegs", isCorrect: true },
      { id: "d", label: "d", md: "Volle Zustimmung Wundts", isCorrect: false }
    ],
    explanation_md: "Külpe dehnte Introspektion methodisch auf Denken aus; Leipzig kritisierte dies.",
    tags: ["wuerzburg"]
  },
  {
    id: "q2-124",
    chapter_id: 2,
    stem_md: "Gestaltpsychologie – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Das Ganze ist etwas Anderes als die Summe seiner Teile", isCorrect: true },
      { id: "b", label: "b", md: "Gestaltgesetze: Nähe, Ähnlichkeit, gute Fortsetzung, Geschlossenheit", isCorrect: true },
      { id: "c", label: "c", md: "Kontext beeinflusst Wahrnehmungsorganisation", isCorrect: true },
      { id: "d", label: "d", md: "Fokus ausschließlich auf Reiz‑Reaktions‑Ketten", isCorrect: false }
    ],
    explanation_md: "Gestalt legt die Organisation der Wahrnehmung und Kontextwirkungen offen.",
    tags: ["gestalt"]
  },
  {
    id: "q2-125",
    chapter_id: 2,
    stem_md: "Lewins Feldtheorie – was gehört dazu?",
    options: [
      { id: "a", label: "a", md: "Verhalten = f(Person, Umwelt)", isCorrect: true },
      { id: "b", label: "b", md: "Lebensraum und Valenzen (Aufforderungscharaktere)", isCorrect: true },
      { id: "c", label: "c", md: "Anwendungen in Pädagogik, Klinik, Organisation", isCorrect: true },
      { id: "d", label: "d", md: "Verneinung sozialer Kräfte im Verhalten", isCorrect: false }
    ],
    explanation_md: "Lewin integrierte Person‑ und Umweltfaktoren in einem dynamischen Feldmodell.",
    tags: ["lewin"]
  },
  {
    id: "q2-126",
    chapter_id: 2,
    stem_md: "Behaviorismus/Neobehaviorismus – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Watson: Fokus auf beobachtbares Verhalten", isCorrect: true },
      { id: "b", label: "b", md: "Pawlow: klassisches Konditionieren", isCorrect: true },
      { id: "c", label: "c", md: "Skinner: operantes Konditionieren (Verstärkung/Bestrafung)", isCorrect: true },
      { id: "d", label: "d", md: "Hull: Organismusvariablen in allgemeiner Verhaltenstheorie", isCorrect: true }
    ],
    explanation_md: "Die Linie reicht von Reiz‑Reaktion zu Modellen mit Organismusvariablen (Neobehaviorismus).",
    tags: ["behaviorismus"]
  },
  {
    id: "q2-127",
    chapter_id: 2,
    stem_md: "Tiefenpsychologie – welche Zuordnungen stimmen?",
    options: [
      { id: "a", label: "a", md: "Freud: Ich/Es/Über‑Ich, Abwehrmechanismen, Träume", isCorrect: true },
      { id: "b", label: "b", md: "Adler: Überkompensation, Geltungsstreben, Gemeinschaftsgefühl", isCorrect: true },
      { id: "c", label: "c", md: "Jung: kollektives Unbewusstes, Archetypen", isCorrect: true },
      { id: "d", label: "d", md: "Hume: Trieblehre", isCorrect: false }
    ],
    explanation_md: "Kernzuordnungen der großen tiefenpsychologischen Richtungen.",
    tags: ["tiefenpsychologie"]
  },
  {
    id: "q2-128",
    chapter_id: 2,
    stem_md: "NS‑Zeit – welche Effekte auf die Psychologie sind belegt?",
    options: [
      { id: "a", label: "a", md: "Emigration zahlreicher Forscher:innen (z. B. Lewin, Wertheimer, Freud)", isCorrect: true },
      { id: "b", label: "b", md: "Stärkung der Rassenpsychologie in Curricula", isCorrect: true },
      { id: "c", label: "c", md: "Rückgang diagnostischer Testentwicklung", isCorrect: false },
      { id: "d", label: "d", md: "Politisierung und Ausschlüsse in Fachgesellschaften", isCorrect: true }
    ],
    explanation_md: "Diskriminierung, Politisierung und Emigration prägten die Zeit stark.",
    tags: ["nszeit"]
  },
  {
    id: "q2-129",
    chapter_id: 2,
    stem_md: "Wiederaufbau nach 1945 – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Neugründung der DGP in Besatzungszonen ab 1947", isCorrect: true },
      { id: "b", label: "b", md: "Gründung des Berufsverbands deutscher Psychologen 1946", isCorrect: true },
      { id: "c", label: "c", md: "ÖGP 1993 als Vertretung der wissenschaftlichen Psychologie in Österreich", isCorrect: true },
      { id: "d", label: "d", md: "Verbot psychologischer Forschung bis 1970", isCorrect: false }
    ],
    explanation_md: "Institutioneller Wiederaufbau und nationale Verbände stärkten die Disziplin.",
    tags: ["wiederaufbau"]
  },
  {
    id: "q2-130",
    chapter_id: 2,
    stem_md: "Kognitive Wende – warum gilt 1956 als Schlüsseljahr?",
    options: [
      { id: "a", label: "a", md: "Miller: 7±2 – Kapazitätsgrenzen des KZG", isCorrect: true },
      { id: "b", label: "b", md: "Chomsky: generative Grammatik/Universalgrammatik", isCorrect: true },
      { id: "c", label: "c", md: "Newell/Simon: Logiktheorie‑Maschine", isCorrect: true },
      { id: "d", label: "d", md: "Skinner: Veröffentlichung zur operanten Konditionierung", isCorrect: false }
    ],
    explanation_md: "Das MIT‑Symposium markiert die Wende zu Informationsverarbeitung und mentalen Repräsentationen.",
    tags: ["kognitive_wende"]
  },
  {
    id: "q2-131",
    chapter_id: 2,
    stem_md: "Kybernetik und TOTE‑Modell – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Broadbent: Filter/Begrenzung, selektive Aufmerksamkeit", isCorrect: true },
      { id: "b", label: "b", md: "TOTE: Test–Operate–Test–Exit als Schema zielgerichteten Handelns", isCorrect: true },
      { id: "c", label: "c", md: "Kybernetik: Regelkreise, Ziele, Pläne, Speicher", isCorrect: true },
      { id: "d", label: "d", md: "Kybernetik lehnt Modelle der Informationsverarbeitung ab", isCorrect: false }
    ],
    explanation_md: "Kybernetik liefert Rahmen für Regelkreise; TOTE formt Handlungszyklus ab.",
    tags: ["kybernetik","tote"]
  },
  {
    id: "q2-132",
    chapter_id: 2,
    stem_md: "Konnektionismus (PDP) – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Verteilte Repräsentation über Einheiten und Verbindungen", isCorrect: true },
      { id: "b", label: "b", md: "Parallele Verarbeitung in Schichten (Netzwerke)", isCorrect: true },
      { id: "c", label: "c", md: "Volle Verdrängung klassischer Modelle seit 1986", isCorrect: false },
      { id: "d", label: "d", md: "Nutzen u. a. in kognitiver Neuropsychologie (Störungsbilder)", isCorrect: true }
    ],
    explanation_md: "PDP ergänzt, ersetzt jedoch nicht vollständig klassische Ansätze; nützlich für Modellierung.",
    tags: ["konnektionismus"]
  },
  {
    id: "q2-133",
    chapter_id: 2,
    stem_md: "Welche Aussagen zur Universitätsentwicklung (19. Jh.) sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Humboldt‑Modell: Einheit von Forschung und Lehre, akademische Freiheit", isCorrect: true },
      { id: "b", label: "b", md: "Ausdifferenzierung in Spezialdisziplinen statt Universalgelehrter", isCorrect: true },
      { id: "c", label: "c", md: "Geringere Bedeutung mathematischer Methoden in Naturwissenschaften", isCorrect: false },
      { id: "d", label: "d", md: "Internationale Vernetzung und Laborexpansion", isCorrect: true }
    ],
    explanation_md: "Das Universitätsmodell förderte Spezialisierung und methodischen Fortschritt.",
    tags: ["universitaet"]
  },
  {
    id: "q2-134",
    chapter_id: 2,
    stem_md: "Welche Aussagen zu Gestaltgesetzen sind richtig?",
    options: [
      { id: "a", label: "a", md: "Nähe: räumlich benachbarte Elemente werden gruppiert", isCorrect: true },
      { id: "b", label: "b", md: "Ähnlichkeit: ähnliche Merkmale werden zusammengefasst", isCorrect: true },
      { id: "c", label: "c", md: "Gute Fortsetzung: Linien folgen möglichst glatten Verläufen", isCorrect: true },
      { id: "d", label: "d", md: "Geschlossenheit: geschlossene Formen werden bevorzugt wahrgenommen", isCorrect: true }
    ],
    explanation_md: "Die vier klassischen Gesetze strukturieren Wahrnehmung und Gruppierung.",
    tags: ["gestaltgesetze"]
  },
  {
    id: "q2-135",
    chapter_id: 2,
    stem_md: "Welche Kombinationen (Schule ↔ Fokus) sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Strukturalismus ↔ Aufbau des Geistes (Elemente/Struktur)", isCorrect: true },
      { id: "b", label: "b", md: "Funktionalismus ↔ Zweck/Funktion mentaler Prozesse", isCorrect: true },
      { id: "c", label: "c", md: "Behaviorismus ↔ innere Repräsentationen und Ziele im Zentrum", isCorrect: false },
      { id: "d", label: "d", md: "Kognitivismus ↔ Informationsverarbeitung & Repräsentationen", isCorrect: true }
    ],
    explanation_md: "Struktur vs. Funktion vs. Verhalten vs. Kognition – vier charakteristische Perspektiven.",
    tags: ["schulen"]
  },
  {
    id: "q2-136",
    chapter_id: 2,
    stem_md: "Welche Aussagen zur Psychophysik (Fechner) treffen zu?",
    options: [
      { id: "a", label: "a", md: "Beziehung Reizstärke ↔ Empfindung (äußere Psychophysik)", isCorrect: true },
      { id: "b", label: "b", md: "Beziehung Körpererregung ↔ Empfindung (innere Psychophysik)", isCorrect: true },
      { id: "c", label: "c", md: "Schwellenmessung über Grenzmethode/ebenmerkliche Unterschiede", isCorrect: true },
      { id: "d", label: "d", md: "Ablehnung mathematischer Quantifizierung", isCorrect: false }
    ],
    explanation_md: "Fechners Programm verband Physik/Physiologie mit subjektiver Empfindung quantitativ.",
    tags: ["psychophysik"]
  },
  {
    id: "q2-137",
    chapter_id: 2,
    stem_md: "Welche Aussagen zu Dilthey/Ebbinghaus/Wundt sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Dilthey: verstehende (geisteswiss.) Psychologie", isCorrect: true },
      { id: "b", label: "b", md: "Ebbinghaus: Kritik an Dilthey, Verteidigung der experimentellen Erklärung", isCorrect: true },
      { id: "c", label: "c", md: "Wundt: Völkerpsychologie als experimenteller Kern", isCorrect: false },
      { id: "d", label: "d", md: "Wundt: Multiperspektivität (Labor + Kulturanalyse)", isCorrect: true }
    ],
    explanation_md: "Ebbinghaus positionierte sich contra rein verstehender Psychologie; Wundt kombinierte Ansätze.",
    tags: ["dilthey","wundt","ebbinghaus"]
  },
  {
    id: "q1-11",
    chapter_id: 1,
    stem_md: "Welche Aussage beschreibt den Gegenstand der Psychologie am besten?",
    options: [
      { id: "a", label: "a", md: "Wissenschaft vom Erleben und Verhalten", isCorrect: true },
      { id: "b", label: "b", md: "Lehre von sozialen Normen ohne Empirie", isCorrect: false },
      { id: "c", label: "c", md: "Ausschließlich die Erforschung des Gehirns", isCorrect: false },
      { id: "d", label: "d", md: "Nur die Beschreibung ohne Erklärung", isCorrect: false }
    ],
    explanation_md: "Psychologie = empirische Wissenschaft vom Erleben und Verhalten in Kontexten.",
    tags: ["definition"]
  },
  {
    id: "q1-12",
    chapter_id: 1,
    stem_md: "Welche Zuordnung zu Grundlagenfächern ist FALSCH?",
    options: [
      { id: "a", label: "a", md: "Allgemeine Psychologie ↔ Wahrnehmung", isCorrect: true },
      { id: "b", label: "b", md: "Biologische Psychologie ↔ Neuronale Prozesse", isCorrect: true },
      { id: "c", label: "c", md: "Sozialpsychologie ↔ Gruppenprozesse", isCorrect: true },
      { id: "d", label: "d", md: "Differentielle Psychologie ↔ Hirnlappen", isCorrect: false }
    ],
    explanation_md: "Hirnlappen ist biol. Psychologie; Differentielle behandelt Unterschiede/Persönlichkeit.",
    tags: ["felder"]
  },
  {
    id: "q1-13",
    chapter_id: 1,
    stem_md: "Welche Kombinationen sind typisch für die kognitive Wende?",
    options: [
      { id: "a", label: "a", md: "Informationsverarbeitung & mentale Modelle", isCorrect: true },
      { id: "b", label: "b", md: "Ablehnung von Experimenten", isCorrect: false },
      { id: "c", label: "c", md: "Brücke zur kognitiven Neurowissenschaft", isCorrect: true },
      { id: "d", label: "d", md: "Fokus ausschließlich auf Verhalten", isCorrect: false }
    ],
    explanation_md: "Kognitive Wende betrachtet mentale Prozesse; Experimente bleiben zentral.",
    tags: ["ansaetze"]
  },
  {
    id: "q2",
    chapter_id: 1,
    stem_md: "Welche Fächer zählen zu den Grundlagenfächern?",
    options: [
      { id: "a", label: "a", md: "Biologische Psychologie", isCorrect: true },
      { id: "b", label: "b", md: "Allgemeine Psychologie", isCorrect: true },
      { id: "c", label: "c", md: "Entwicklungspsychologie", isCorrect: true },
      { id: "d", label: "d", md: "Sozialpsychologie", isCorrect: true },
      { id: "e", label: "e", md: "Differentielle & Persönlichkeit", isCorrect: true }
    ],
    explanation_md: "Im Skript als Grundlagenfächer benannt.",
    tags: ["felder"]
  },
  {
    id: "q3",
    chapter_id: 1,
    stem_md: "Behaviorismus: welche Aussagen treffen zu?",
    options: [
      { id: "a", label: "a", md: "Fokus auf beobachtbares Verhalten", isCorrect: true },
      { id: "b", label: "b", md: "Betont Unbewusstes", isCorrect: false },
      { id: "c", label: "c", md: "Konditionierung zentral", isCorrect: true },
      { id: "d", label: "d", md: "Begründete kognitive Neurowissenschaft", isCorrect: false }
    ],
    explanation_md: "Watson/Skinner: Verhalten & Konditionierung.",
    tags: ["ansaetze"]
  },
  {
    id: "q4",
    chapter_id: 1,
    stem_md: "Kognitive Wende: was zeichnet sie aus?",
    options: [
      { id: "a", label: "a", md: "Verzicht auf Theorien", isCorrect: false },
      { id: "b", label: "b", md: "Informationsverarbeitung", isCorrect: true },
      { id: "c", label: "c", md: "Brücke zur Neurowissenschaft", isCorrect: true },
      { id: "d", label: "d", md: "Ablehnung der Empirie", isCorrect: false }
    ],
    explanation_md: "Mentale Prozesse als Informationsverarbeitung.",
    tags: ["ansaetze"]
  },
  {
    id: "q5",
    chapter_id: 1,
    stem_md: "Welche Zuordnungen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Freud ↔ Psychoanalyse", isCorrect: true },
      { id: "b", label: "b", md: "Watson ↔ Behaviorismus", isCorrect: true },
      { id: "c", label: "c", md: "Maslow/Rogers ↔ Humanistisch", isCorrect: true },
      { id: "d", label: "d", md: "Pawlow ↔ Operantes Konditionieren", isCorrect: false }
    ],
    explanation_md: "Pawlow = klassisches Konditionieren.",
    tags: ["zuordnung"]
  },
  {
    id: "q1-14",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur Definition von Psychologie treffen zu?",
    options: [
      { id: "a", label: "a", md: "Sie untersucht Erleben und Verhalten wissenschaftlich.", isCorrect: true },
      { id: "b", label: "b", md: "Sie verzichtet grundsätzlich auf Empirie und Experimente.", isCorrect: false },
      { id: "c", label: "c", md: "Kognitive Prozesse (z. B. Denken) gehören zum Gegenstand.", isCorrect: true },
      { id: "d", label: "d", md: "Sie befasst sich ausschließlich mit Tierverhalten.", isCorrect: false }
    ],
    explanation_md: "Psychologie ist die empirische Wissenschaft vom Erleben und Verhalten; Kognition ist eingeschlossen.",
    tags: ["definition"]
  },
  {
    id: "q1-15",
    chapter_id: 1,
    stem_md: "Welche Zuordnungen zum Begriff Kognition sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Aufmerksamkeit, Wahrnehmung, Gedächtnis", isCorrect: true },
      { id: "b", label: "b", md: "Schlussfolgern, Denken, Problemlösen", isCorrect: true },
      { id: "c", label: "c", md: "Ausschließlich motorische Reflexe", isCorrect: false },
      { id: "d", label: "d", md: "Nur unbewusste Triebkonflikte", isCorrect: false }
    ],
    explanation_md: "Kognition umfasst Aufnahme, Verarbeitung und Speicherung von Informationen; motorische Reflexe/Triebe sind nicht Kern der Kognitionsdefinition.",
    tags: ["kognition"]
  },
  {
    id: "q1-16",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur Schnittstellen‑Natur der Psychologie sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Sie verbindet Natur‑, Sozial‑ und Geisteswissenschaften.", isCorrect: true },
      { id: "b", label: "b", md: "Der naturwissenschaftliche Fokus nahm mit der kognitiven Neurowissenschaft zu.", isCorrect: true },
      { id: "c", label: "c", md: "Sozial‑ und Kulturfaktoren sind in der Psychologie irrelevant.", isCorrect: false },
      { id: "d", label: "d", md: "Psychologie ist ausschließlich Philosophie.", isCorrect: false }
    ],
    explanation_md: "Beides gilt: interdisziplinär und stärker naturwissenschaftlich, ohne soziale/kulturelle Faktoren auszublenden.",
    tags: ["schnittstelle"]
  },
  {
    id: "q1-17",
    chapter_id: 1,
    stem_md: "Welche Fächer sind Anwendungsfächer (keine Grundlagenfächer)?",
    options: [
      { id: "a", label: "a", md: "Pädagogische Psychologie", isCorrect: true },
      { id: "b", label: "b", md: "Arbeits‑, Organisations‑ und Wirtschaftspsychologie", isCorrect: true },
      { id: "c", label: "c", md: "Klinische und Gesundheitspsychologie", isCorrect: true },
      { id: "d", label: "d", md: "Allgemeine Psychologie", isCorrect: false }
    ],
    explanation_md: "Allgemeine Psychologie ist ein Grundlagenfach; die übrigen sind typische Anwendungsfelder.",
    tags: ["anwendung"]
  },
  {
    id: "q1-18",
    chapter_id: 1,
    stem_md: "Was beschreibt die Rolle der Psychologischen Diagnostik korrekt?",
    options: [
      { id: "a", label: "a", md: "Sie ist eine Querschnitts‑Fertigkeit in vielen Feldern.", isCorrect: true },
      { id: "b", label: "b", md: "Sie wird nur in der Klinischen Psychologie verwendet.", isCorrect: false },
      { id: "c", label: "c", md: "Sie dient fundierten Entscheidungen (z. B. Eignung, Störung, Förderung).", isCorrect: true },
      { id: "d", label: "d", md: "Sie ersetzt Statistik und Methodenlehre.", isCorrect: false }
    ],
    explanation_md: "Diagnostik unterstützt Entscheidungen in vielen Bereichen; sie ergänzt, nicht ersetzt Methoden/Statistik.",
    tags: ["diagnostik"]
  },
  {
    id: "q1-19",
    chapter_id: 1,
    stem_md: "Welche Aussage zum Zwei‑Stufen‑Modell trifft zu?",
    options: [
      { id: "a", label: "a", md: "Erkenntnisse aus Grundlagenforschung fließen in die Anwendung.", isCorrect: true },
      { id: "b", label: "b", md: "In Anwendungsfeldern wird keine Forschung betrieben.", isCorrect: false },
      { id: "c", label: "c", md: "Therapieevaluation ist ein Beispiel für Forschung in der Anwendung.", isCorrect: true },
      { id: "d", label: "d", md: "Das Modell schließt Überschneidungen zwischen Fächern aus.", isCorrect: false }
    ],
    explanation_md: "Grundlagen → Anwendung, aber auch in der Praxis wird (z. B. evaluativ) geforscht; Überschneidungen bleiben.",
    tags: ["modell"]
  },
  {
    id: "q1-20",
    chapter_id: 1,
    stem_md: "Welche Zuordnungen zur Tabelle 1.1 (Wahrnehmung quer) sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Biologische Psychologie ↔ Verankerung im Gehirn", isCorrect: true },
      { id: "b", label: "b", md: "Allgemeine Psychologie ↔ Prozesse der Wahrnehmung", isCorrect: true },
      { id: "c", label: "c", md: "Entwicklungspsychologie ↔ Wann/Wie Wahrnehmung entsteht", isCorrect: true },
      { id: "d", label: "d", md: "Sozialpsychologie ↔ Wahrnehmung ist unabhängig von anderen", isCorrect: false }
    ],
    explanation_md: "Alle bis auf d sind typische Zuordnungen; die Sozialpsychologie fragt u. a. nach Einflüssen anderer auf Wahrnehmung.",
    tags: ["tabelle"]
  },
  {
    id: "q1-21",
    chapter_id: 1,
    stem_md: "Welche Aussagen zum psychodynamischen Ansatz treffen zu?",
    options: [
      { id: "a", label: "a", md: "Unbewusste Prozesse beeinflussen Verhalten.", isCorrect: true },
      { id: "b", label: "b", md: "Verhalten ist Versuch, Konflikte zwischen Bedürfnissen und sozialen Erfordernissen zu lösen.", isCorrect: true },
      { id: "c", label: "c", md: "Nur beobachtbare Reize zählen.", isCorrect: false },
      { id: "d", label: "d", md: "Er wurde nie weiterentwickelt.", isCorrect: false }
    ],
    explanation_md: "Kernideen: Unbewusstes, Triebe, Konflikte; behavioristische Reduktion auf Beobachtbares gilt hier nicht.",
    tags: ["ansaetze"]
  },
  {
    id: "q1-22",
    chapter_id: 1,
    stem_md: "Welche Aussagen zum behavioristischen Ansatz sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Analyse von Reiz–Reaktion–Konsequenz‑Beziehungen", isCorrect: true },
      { id: "b", label: "b", md: "Mentale Prozesse stehen im Zentrum der Erklärung.", isCorrect: false },
      { id: "c", label: "c", md: "Lernen über klassische und operante Konditionierung", isCorrect: true },
      { id: "d", label: "d", md: "Beobachtbarkeit ist unwichtig.", isCorrect: false }
    ],
    explanation_md: "Im Behaviorismus stehen Beobachtbarkeit und Konditionierungsprozesse im Fokus; mentale Prozesse sind klassisch außen vor.",
    tags: ["ansaetze"]
  },
  {
    id: "q1-23",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur humanistischen Psychologie treffen zu?",
    options: [
      { id: "a", label: "a", md: "Der Mensch strebt nach positiver Entwicklung (Selbstverwirklichung).", isCorrect: true },
      { id: "b", label: "b", md: "Sie betrachtet den Menschen holistisch (Körper‑Psyche‑Soziales).", isCorrect: true },
      { id: "c", label: "c", md: "Sie negiert soziale/kulturelle Einflüsse.", isCorrect: false },
      { id: "d", label: "d", md: "Carl Rogers und Abraham Maslow sind zentrale Vertreter.", isCorrect: true }
    ],
    explanation_md: "Zentral sind Wachstum, Ressourcen und ganzheitliche Sicht; soziale/kulturelle Faktoren werden explizit einbezogen.",
    tags: ["ansaetze"]
  },
  {
    id: "q1-24",
    chapter_id: 1,
    stem_md: "Wodurch zeichnet sich der kognitive Ansatz aus?",
    options: [
      { id: "a", label: "a", md: "Zentrum: mentale Repräsentationen und Informationsverarbeitung.", isCorrect: true },
      { id: "b", label: "b", md: "Verhalten ist ausschließlich Resultat externer Reize.", isCorrect: false },
      { id: "c", label: "c", md: "Verbindung zur kognitiven Neurowissenschaft.", isCorrect: true },
      { id: "d", label: "d", md: "Ablehnung empirischer Methoden.", isCorrect: false }
    ],
    explanation_md: "Mentale Prozesse stehen im Mittelpunkt; Experimente und Neurowissenschaften sind zentrale Werkzeuge.",
    tags: ["ansaetze"]
  },
  {
    id: "q1-25",
    chapter_id: 1,
    stem_md: "Welche Aussagen zu den vier Zielen der Psychologie sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Beschreiben ist Grundlage für Erklären/Vorhersagen.", isCorrect: true },
      { id: "b", label: "b", md: "Vorhersagen müssen exakt und prüfbar formuliert sein.", isCorrect: true },
      { id: "c", label: "c", md: "Verändern steht im Widerspruch zu Ethik.", isCorrect: false },
      { id: "d", label: "d", md: "Die Ziele gelten nur in der Forschung, nicht in der Anwendung.", isCorrect: false }
    ],
    explanation_md: "Die Ziele gelten in Forschung und Anwendung; Interventionen sind ethisch abzusichern.",
    tags: ["ziele"]
  },
  {
    id: "q1-26",
    chapter_id: 1,
    stem_md: "Welche Beispiele illustrieren das Ziel ‚Beschreiben‘?",
    options: [
      { id: "a", label: "a", md: "Beobachtung und systematische Erfassung des Ist‑Zustands", isCorrect: true },
      { id: "b", label: "b", md: "Entwicklung eines Instruments zur Messung von Angst", isCorrect: true },
      { id: "c", label: "c", md: "Interpretation unbewusster Triebe ohne Daten", isCorrect: false },
      { id: "d", label: "d", md: "Hypothesenprüfung mit Falsifikation", isCorrect: false }
    ],
    explanation_md: "Beschreiben umfasst Datenerhebung/Operationalisierung; Hypothesenprüfung gehört eher zu Erklären/Vorhersagen.",
    tags: ["ziele"]
  },
  {
    id: "q1-27",
    chapter_id: 1,
    stem_md: "Welche Aussagen zu Objektivität der Verhaltensbeschreibung sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Beschreibungen sollen unabhängig von Erwartungen sein.", isCorrect: true },
      { id: "b", label: "b", md: "Zwei Beobachter sollten auf Basis desselben Verhaltens zu gleichen Beschreibungen kommen.", isCorrect: true },
      { id: "c", label: "c", md: "Subjektive Eindrücke sind ausreichend.", isCorrect: false },
      { id: "d", label: "d", md: "Daten sind im psychologischen Kontext entbehrlich.", isCorrect: false }
    ],
    explanation_md: "Objektivität bedeutet Erwartungsunabhängigkeit und intersubjektive Übereinstimmung.",
    tags: ["methoden"]
  },
  {
    id: "q1-28",
    chapter_id: 1,
    stem_md: "Welche Beispiele zeigen Operationalisierung nicht direkt beobachtbarer Konstrukte?",
    options: [
      { id: "a", label: "a", md: "Intelligenz über standardisierte Tests messbar machen", isCorrect: true },
      { id: "b", label: "b", md: "Einstellung über validierten Fragebogen erfassen", isCorrect: true },
      { id: "c", label: "c", md: "Gefühle ausschließlich intuitiv deuten", isCorrect: false },
      { id: "d", label: "d", md: "Angst durch physiologische Parameter (z. B. Puls) ergänzen", isCorrect: true }
    ],
    explanation_md: "Operationalisierung verlangt messbare Indikatoren; reine Intuition genügt nicht.",
    tags: ["methoden"]
  },
  {
    id: "q1-29",
    chapter_id: 1,
    stem_md: "Welche Aussagen zu Ethik in Psychologie sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Wohltätigkeit/Nicht‑Schaden – Nutzen maximieren, Schaden minimieren.", isCorrect: true },
      { id: "b", label: "b", md: "Integrität – Ehrlichkeit, Genauigkeit, keine Täuschung.", isCorrect: true },
      { id: "c", label: "c", md: "Gerechtigkeit – faire Teilhabe, Kompetenzgrenzen kennen.", isCorrect: true },
      { id: "d", label: "d", md: "Respekt – Privatsphäre, Vertraulichkeit, Diversität achten.", isCorrect: true }
    ],
    explanation_md: "Die vier genannten APA‑Prinzipien sind Kernbestandteile (neben Loyalität/Verantwortung).",
    tags: ["ethik"]
  },
  {
    id: "q1-30",
    chapter_id: 1,
    stem_md: "Welche Aussage zu historischen Experimenten ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Das Milgram‑Experiment wäre heute in ursprünglicher Form nicht zulässig.", isCorrect: true },
      { id: "b", label: "b", md: "Ethikkommissionen spielen für Studien keine Rolle.", isCorrect: false },
      { id: "c", label: "c", md: "Täuschung ist allgemein unproblematisch.", isCorrect: false },
      { id: "d", label: "d", md: "Ethik betrifft nur die Forschung, nicht die Praxis.", isCorrect: false }
    ],
    explanation_md: "Ethikkommissionen sichern Standards; Milgram (1963) illustriert Grenzen historischer Praktiken.",
    tags: ["ethik"]
  },
  {
    id: "q1-31",
    chapter_id: 1,
    stem_md: "Welche Aussagen zum Vorhersage‑Ziel sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Vorhersagen basieren auf geprüften Erklärungen.", isCorrect: true },
      { id: "b", label: "b", md: "Vorhersagen müssen so formuliert sein, dass sie testbar/falsifizierbar sind.", isCorrect: true },
      { id: "c", label: "c", md: "In der Praxis (z. B. Personalauswahl) spielen Vorhersagen keine Rolle.", isCorrect: false },
      { id: "d", label: "d", md: "Erklärungen sind entbehrlich für Vorhersagen.", isCorrect: false }
    ],
    explanation_md: "Vorhersagen leiten sich aus Erklärungen ab und erfordern Präzision und Testbarkeit.",
    tags: ["ziele"]
  },
  {
    id: "q1-32",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur Anwendungsorientierung sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Anwendungsfächer setzen psychologisches Wissen in Praxisfelder um.", isCorrect: true },
      { id: "b", label: "b", md: "In Anwendungsfeldern findet keine Forschung statt.", isCorrect: false },
      { id: "c", label: "c", md: "Therapieevaluation ist Forschung in der Praxis.", isCorrect: true },
      { id: "d", label: "d", md: "Anwendungsfächer widersprechen Grundlagenfächern grundsätzlich.", isCorrect: false }
    ],
    explanation_md: "Anwendungsfächer forschen ebenfalls (Evaluation); sie stehen nicht im Widerspruch zu Grundlagenfächern.",
    tags: ["anwendung"]
  },
  {
    id: "q1-33",
    chapter_id: 1,
    stem_md: "Welche Zuordnungen sind korrekt (Fach ↔ Beispiel)?",
    options: [
      { id: "a", label: "a", md: "Biologische Psychologie ↔ neuronale Grundlagen der Wahrnehmung", isCorrect: true },
      { id: "b", label: "b", md: "Allgemeine Psychologie ↔ Prozesse des Gedächtnisses", isCorrect: true },
      { id: "c", label: "c", md: "Sozialpsychologie ↔ Einfluss der Anwesenheit anderer", isCorrect: true },
      { id: "d", label: "d", md: "Differentielle Psychologie ↔ ausschließlich Hirnlappen", isCorrect: false }
    ],
    explanation_md: "Differentielle befasst sich mit Unterschieden/Traits; Hirnlappen ist Thema der biologischen Perspektive.",
    tags: ["felder"]
  },
  {
    id: "q1-34",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur Generalität der Allgemeinen Psychologie sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Sie sucht Gesetzmäßigkeiten, die für alle Menschen gelten.", isCorrect: true },
      { id: "b", label: "b", md: "Sie ist identisch mit Persönlichkeitspsychologie.", isCorrect: false },
      { id: "c", label: "c", md: "Sie beinhaltet Wahrnehmung, Lernen, Gedächtnis u. a.", isCorrect: true },
      { id: "d", label: "d", md: "Sie ignoriert Emotion und Motivation.", isCorrect: false }
    ],
    explanation_md: "Allgemeine Psychologie umfasst zahlreiche Grundprozesse (inkl. Emotion/Motivation) und sucht generelle Regeln.",
    tags: ["felder"]
  },
  {
    id: "q1-35",
    chapter_id: 1,
    stem_md: "Welche Beispiele illustrieren das Ziel ‚Verändern‘ unter ethischen Leitplanken?",
    options: [
      { id: "a", label: "a", md: "Therapie zur Reduktion zwanghaften Verhaltens mit Einwilligung", isCorrect: true },
      { id: "b", label: "b", md: "Gesundheitsintervention zur Bewegungsförderung", isCorrect: true },
      { id: "c", label: "c", md: "Versteckte Täuschung ohne Aufklärung in jeder Studie", isCorrect: false },
      { id: "d", label: "d", md: "Intervention ohne Auftrag der betroffenen Person", isCorrect: false }
    ],
    explanation_md: "Verändern verlangt Auftrag, Nutzen‑Schaden‑Abwägung und ethische Standards.",
    tags: ["ziele","ethik"]
  },
  {
    id: "q1-36",
    chapter_id: 1,
    stem_md: "Welche Aussagen zur Rolle sozialer Einflüsse sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Sozialpsychologie untersucht Wirkung der Interaktion auf Erleben/Verhalten.", isCorrect: true },
      { id: "b", label: "b", md: "Wahrnehmung kann durch Anwesenheit anderer beeinflusst werden.", isCorrect: true },
      { id: "c", label: "c", md: "Soziale Faktoren sind für psychische Prozesse irrelevant.", isCorrect: false },
      { id: "d", label: "d", md: "Zwischenmenschliche Beziehungen haben keinen Bezug zum Wohlbefinden.", isCorrect: false }
    ],
    explanation_md: "Kapitel 1 betont soziale Einflüsse; Beziehungen/Wohlbefinden sind klassische sozialpsychologische Themen.",
    tags: ["sozial"]
  }
  ,
  // Kapitel 3 – Forschungsmethodik (36 MCQs, multi-correct, keine Teilpunkte)
  {
    id: "q3-101",
    chapter_id: 3,
    stem_md: "Was unterscheidet Alltagspsychologie von wissenschaftlicher Psychologie?",
    options: [
      { id: "a", label: "a", md: "Alltagspsychologie beruht auf individuellen Erfahrungen und Heuristiken.", isCorrect: true },
      { id: "b", label: "b", md: "Wissenschaftliche Psychologie prüft Aussagen systematisch mit Methoden.", isCorrect: true },
      { id: "c", label: "c", md: "Alltagspsychologie ist grundsätzlich fehlerfrei.", isCorrect: false },
      { id: "d", label: "d", md: "Wissenschaftliche Psychologie verzichtet auf Replikation.", isCorrect: false }
    ],
    explanation_md: "Alltag nutzt Heuristiken; Wissenschaft nutzt methodische, replizierbare Prüfungen.",
    tags: ["alltag","wissenschaft"]
  },
  {
    id: "q3-102",
    chapter_id: 3,
    stem_md: "Welche Aussagen zu Heuristiken sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Heuristiken sind nützliche Faustregeln für schnelle Entscheidungen.", isCorrect: true },
      { id: "b", label: "b", md: "Heuristiken führen nie zu Fehlern.", isCorrect: false },
      { id: "c", label: "c", md: "Repräsentativitätsheuristik überschätzt ‚typische‘ Sequenzen.", isCorrect: true },
      { id: "d", label: "d", md: "Heuristiken sind identisch mit wissenschaftlichen Methoden.", isCorrect: false }
    ],
    explanation_md: "Heuristiken sind ökonomisch, aber fehleranfällig; Repräsentativitätstäuschung ist ein Beispiel.",
    tags: ["heuristik"]
  },
  {
    id: "q3-103",
    chapter_id: 3,
    stem_md: "Welche Verzerrungen sind korrekt zugeordnet?",
    options: [
      { id: "a", label: "a", md: "Hindsight Bias: Ausgang wirkt im Nachhinein vorhersehbar.", isCorrect: true },
      { id: "b", label: "b", md: "Confirmation Bias: Widerlegende Informationen werden bevorzugt.", isCorrect: false },
      { id: "c", label: "c", md: "Confirmation Bias: Bestätigende Informationen werden übergewichtet.", isCorrect: true },
      { id: "d", label: "d", md: "Hindsight Bias: Zukunftsprognosen werden exakter.", isCorrect: false }
    ],
    explanation_md: "Rückschau verzerrt Vorhersage; Bestätigungsfehler bevorzugt kongruente Evidenz.",
    tags: ["bias"]
  },
  {
    id: "q3-104",
    chapter_id: 3,
    stem_md: "Kritisches Denken umfasst typischerweise…",
    options: [
      { id: "a", label: "a", md: "Prüfung der Quelle und Aussagepräzision.", isCorrect: true },
      { id: "b", label: "b", md: "Bewertung der Evidenzstärke.", isCorrect: true },
      { id: "c", label: "c", md: "Ignorieren alternativer Erklärungen.", isCorrect: false },
      { id: "d", label: "d", md: "Ausschließliches Vertrauen auf Intuition.", isCorrect: false }
    ],
    explanation_md: "Quelle, Präzision, Evidenz und Alternativen sind Kernfragen.",
    tags: ["kritik"]
  },
  {
    id: "q3-105",
    chapter_id: 3,
    stem_md: "Welche Standards der Wissenschaftlichkeit nach Döring (2023) sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Tragfähiges Forschungsproblem (empirisch/theoretisch).", isCorrect: true },
      { id: "b", label: "b", md: "Methodisch passender Forschungsprozess.", isCorrect: true },
      { id: "c", label: "c", md: "Verzicht auf Ethik zur Wahrung der Objektivität.", isCorrect: false },
      { id: "d", label: "d", md: "Vollständige Dokumentation zur Nachvollziehbarkeit/Replikation.", isCorrect: true }
    ],
    explanation_md: "Ethik ist Voraussetzung, nicht Optional; alle vier Standards gelten.",
    tags: ["standards"]
  },
  {
    id: "q3-106",
    chapter_id: 3,
    stem_md: "Wozu dienen Replikationsstudien?",
    options: [
      { id: "a", label: "a", md: "Überprüfung der Robustheit früherer Befunde.", isCorrect: true },
      { id: "b", label: "b", md: "Bestimmung von Generalisierbarkeit/Spezifität (konzeptionell).", isCorrect: true },
      { id: "c", label: "c", md: "Ersetzen den Originalbericht und machen Dokumentation überflüssig.", isCorrect: false },
      { id: "d", label: "d", md: "Sind nur in der Psychologie relevant.", isCorrect: false }
    ],
    explanation_md: "Direkte/konzeptionelle Replikation prüfen Robustheit und Gültigkeitsbereich.",
    tags: ["replikation"]
  },
  {
    id: "q3-107",
    chapter_id: 3,
    stem_md: "Welche Qualitätskriterien charakterisieren eine gute Studie?",
    options: [
      { id: "a", label: "a", md: "Inhaltliche Relevanz/Beitrag.", isCorrect: true },
      { id: "b", label: "b", md: "Methodische Strenge und Regelkonformität.", isCorrect: true },
      { id: "c", label: "c", md: "Ethische Strenge.", isCorrect: true },
      { id: "d", label: "d", md: "Unstrukturierte, schwer lesbare Berichte.", isCorrect: false }
    ],
    explanation_md: "Relevanz, Methode, Ethik und Präsentation tragen gemeinsam zur Qualität bei.",
    tags: ["qualität"]
  },
  {
    id: "q3-108",
    chapter_id: 3,
    stem_md: "Quantitativ vs. qualitativ – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Quantitativ: Messung/Statistik, Hypothesenprüfung.", isCorrect: true },
      { id: "b", label: "b", md: "Qualitativ: sinnverstehend/interpretativ, offene Antworten.", isCorrect: true },
      { id: "c", label: "c", md: "Wahl hängt nicht von Fragestellung ab.", isCorrect: false },
      { id: "d", label: "d", md: "Quantitative Forschung interessiert sich nur für Einzelfälle.", isCorrect: false }
    ],
    explanation_md: "Paradigma/Frage bestimmen die Methode; quantitativ zielt auf Gruppen/Schätzung.",
    tags: ["methoden"]
  },
  {
    id: "q3-109",
    chapter_id: 3,
    stem_md: "Ordnen Sie die Schritte des hypothesenprüfenden Prozesses zu.",
    options: [
      { id: "a", label: "a", md: "Operationalisierung & Untersuchungsplanung.", isCorrect: true },
      { id: "b", label: "b", md: "Interpretation/Diskussion nach Analyse.", isCorrect: true },
      { id: "c", label: "c", md: "Publikation/Präsentation gehört nicht dazu.", isCorrect: false },
      { id: "d", label: "d", md: "Datenerhebung vor Hypothesenformulierung.", isCorrect: false }
    ],
    explanation_md: "Hypothesen werden vor der Erhebung formuliert; Publikation gehört dazu.",
    tags: ["prozess"]
  },
  {
    id: "q3-110",
    chapter_id: 3,
    stem_md: "Theorie vs. Hypothese – was ist richtig?",
    options: [
      { id: "a", label: "a", md: "Theorien erklären und prognostizieren Phänomene auf höherer Abstraktion.", isCorrect: true },
      { id: "b", label: "b", md: "Hypothesen sind konkrete, prüfbare Vorhersagen.", isCorrect: true },
      { id: "c", label: "c", md: "Hypothesen werden erst nach der Datensammlung formuliert.", isCorrect: false },
      { id: "d", label: "d", md: "Theorien lassen sich nie weiterentwickeln.", isCorrect: false }
    ],
    explanation_md: "Hypothesen werden aus Theorien abgeleitet und vorab formuliert; Theorien werden iterativ verbessert.",
    tags: ["theorie","hypothese"]
  },
  {
    id: "q3-111",
    chapter_id: 3,
    stem_md: "Gute wissenschaftliche Hypothesen …",
    options: [
      { id: "a", label: "a", md: "sind präzise und widerspruchsfrei.", isCorrect: true },
      { id: "b", label: "b", md: "sind prinzipiell widerlegbar (falsifizierbar).", isCorrect: true },
      { id: "c", label: "c", md: "müssen operationalisierbar sein.", isCorrect: true },
      { id: "d", label: "d", md: "dürfen ohne Bezug zum Forschungsstand formuliert werden.", isCorrect: false }
    ],
    explanation_md: "Präzision, Widerspruchsfreiheit, Falsifizierbarkeit, Operationalisierbarkeit und Begründung sind nötig.",
    tags: ["hypothese"]
  },
  {
    id: "q3-112",
    chapter_id: 3,
    stem_md: "Unterschieds‑, Zusammenhangs‑, Veränderungshypothesen – was passt?",
    options: [
      { id: "a", label: "a", md: "Unterschied: Gruppenvergleich eines Merkmals.", isCorrect: true },
      { id: "b", label: "b", md: "Zusammenhang: Kovariation zweier Variablen (positiv/negativ).", isCorrect: true },
      { id: "c", label: "c", md: "Veränderung: gleiches Merkmal bei verschiedenen Personen zu einem Zeitpunkt.", isCorrect: false },
      { id: "d", label: "d", md: "Veränderung: gleiche Personen über Zeit (mehrere Messzeitpunkte).", isCorrect: true }
    ],
    explanation_md: "Veränderungen benötigen Längsschnitt in denselben Personen.",
    tags: ["hypothesentypen"]
  },
  {
    id: "q3-113",
    chapter_id: 3,
    stem_md: "Operationalisierung – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Latente Merkmale benötigen manifeste Indikatoren.", isCorrect: true },
      { id: "b", label: "b", md: "Die Wahl des Messinstruments gehört zur Operationalisierung.", isCorrect: true },
      { id: "c", label: "c", md: "Operationalisierung ist für direkte Maße entbehrlich.", isCorrect: false },
      { id: "d", label: "d", md: "Das operationalisierte Merkmal heißt Variable.", isCorrect: true }
    ],
    explanation_md: "Operationalisierung definiert Indikatoren und Messung – auch für manifeste Variablen relevant.",
    tags: ["operationalisierung"]
  },
  {
    id: "q3-114",
    chapter_id: 3,
    stem_md: "Psychometrische Gütekriterien – welche Zuordnung stimmt?",
    options: [
      { id: "a", label: "a", md: "Objektivität: Ergebnis unabhängig von Durchführenden/Auswertung.", isCorrect: true },
      { id: "b", label: "b", md: "Reliabilität: Messgenauigkeit/Zuverlässigkeit.", isCorrect: true },
      { id: "c", label: "c", md: "Validität: misst, was es messen soll.", isCorrect: true },
      { id: "d", label: "d", md: "Validität ist ohne Objektivität und Reliabilität immer hoch.", isCorrect: false }
    ],
    explanation_md: "Objektivität und Reliabilität sind Voraussetzungen für interpretierbare Validität.",
    tags: ["gütekriterien"]
  },
  {
    id: "q3-115",
    chapter_id: 3,
    stem_md: "Skalenniveaus – welche Beispiele passen?",
    options: [
      { id: "a", label: "a", md: "Nominal: Nationalität; dichotom: Erkrankung ja/nein.", isCorrect: true },
      { id: "b", label: "b", md: "Ordinal: Bildungsabschluss, Schulnoten.", isCorrect: true },
      { id: "c", label: "c", md: "Intervall: °C, psychologische Traits.", isCorrect: true },
      { id: "d", label: "d", md: "Verhältnis: Reaktionszeit, Kelvin (natürlicher Nullpunkt).", isCorrect: true }
    ],
    explanation_md: "Beispiele ordnen die vier Niveaus korrekt zu.",
    tags: ["skalen"]
  },
  {
    id: "q3-116",
    chapter_id: 3,
    stem_md: "Diskrete vs. kontinuierliche Variablen – richtig ist…",
    options: [
      { id: "a", label: "a", md: "Nominal/Ordinal werden typischerweise diskret erhoben.", isCorrect: true },
      { id: "b", label: "b", md: "Intervall/Ratio sind kontinuierlich – abhängig vom Erhebungsformat.", isCorrect: true },
      { id: "c", label: "c", md: "Antwortformate können Quantität diskret machen (Kategorien).", isCorrect: true },
      { id: "d", label: "d", md: "Kontinuierliche Variablen haben immer nur zwei Ausprägungen.", isCorrect: false }
    ],
    explanation_md: "Erhebungsformat beeinflusst Diskretheit; kontinuierliche Variablen haben viele Werte.",
    tags: ["variablen"]
  },
  {
    id: "q3-117",
    chapter_id: 3,
    stem_md: "Population/Stichprobe – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Stichprobe ist eine Teilmenge der Population.", isCorrect: true },
      { id: "b", label: "b", md: "Repräsentativität erhöht externe Validität.", isCorrect: true },
      { id: "c", label: "c", md: "Eine nicht-repräsentative Stichprobe verzerrt Generalisierungen.", isCorrect: true },
      { id: "d", label: "d", md: "Population = nur die tatsächlich Teilnehmenden.", isCorrect: false }
    ],
    explanation_md: "Repräsentative Stichproben sichern Übertragbarkeit.",
    tags: ["stichprobe"]
  },
  {
    id: "q3-118",
    chapter_id: 3,
    stem_md: "Sampling – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Zufallsstichprobe: gleiche Chance für alle Populationselemente.", isCorrect: true },
      { id: "b", label: "b", md: "Gelegenheitsstichprobe: praktisch, aber anfällig für Selection Bias.", isCorrect: true },
      { id: "c", label: "c", md: "Selection Bias kann Mittelwerte systematisch verzerren.", isCorrect: true },
      { id: "d", label: "d", md: "Zufallsstichproben sind in Studien unmöglich.", isCorrect: false }
    ],
    explanation_md: "Praktikabilität vs. Verzerrung ist abzuwägen; Zufall ist ideal, aber nicht immer machbar.",
    tags: ["sampling"]
  },
  {
    id: "q3-119",
    chapter_id: 3,
    stem_md: "Stichprobengröße – was ist eine sinnvolle Überlegung?",
    options: [
      { id: "a", label: "a", md: "Größer → stabilere Schätzungen, weniger Ausreißereffekt.", isCorrect: true },
      { id: "b", label: "b", md: "Unendlich große Stichproben sind immer realistisch.", isCorrect: false },
      { id: "c", label: "c", md: "Ressourcen begrenzen die Größe; Powerplanung ist hilfreich.", isCorrect: true },
      { id: "d", label: "d", md: "Kleine N sind grundsätzlich valider.", isCorrect: false }
    ],
    explanation_md: "Trade‑off zwischen Genauigkeit und Ressourcen; Power beachten.",
    tags: ["stichprobe"]
  },
  {
    id: "q3-120",
    chapter_id: 3,
    stem_md: "Labor vs. Feld – welche Zuordnung ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Labor: hohe Kontrolle → interne Validität.", isCorrect: true },
      { id: "b", label: "b", md: "Feld: Alltagsnähe → externe Validität.", isCorrect: true },
      { id: "c", label: "c", md: "Felduntersuchungen sind grundsätzlich unmöglich.", isCorrect: false },
      { id: "d", label: "d", md: "Laborstudien sind immer besser generalisierbar.", isCorrect: false }
    ],
    explanation_md: "Kontrolle vs. Übertragbarkeit ist ein klassischer Trade‑off.",
    tags: ["design"]
  },
  {
    id: "q3-121",
    chapter_id: 3,
    stem_md: "Experiment – Kernelemente?",
    options: [
      { id: "a", label: "a", md: "UV wird manipuliert; AV gemessen.", isCorrect: true },
      { id: "b", label: "b", md: "Störvariablen werden konstant gehalten oder balanciert.", isCorrect: true },
      { id: "c", label: "c", md: "Keine Kovariation erforderlich.", isCorrect: false },
      { id: "d", label: "d", md: "Zeitliche Vorordnung ist für Kausalität irrelevant.", isCorrect: false }
    ],
    explanation_md: "Kovariation, Vorordnung und Ausschluss von Alternativen sind nötig.",
    tags: ["experiment"]
  },
  {
    id: "q3-122",
    chapter_id: 3,
    stem_md: "Between‑ vs. Within‑Subjects – was passt?",
    options: [
      { id: "a", label: "a", md: "Between: verschiedene Gruppen je Bedingung.", isCorrect: true },
      { id: "b", label: "b", md: "Within: dieselben Personen in allen Bedingungen.", isCorrect: true },
      { id: "c", label: "c", md: "Within minimiert personengebundene Störvariablen.", isCorrect: true },
      { id: "d", label: "d", md: "Between erfordert nie Randomisierung.", isCorrect: false }
    ],
    explanation_md: "Within parallelisiert Personen; Between sollte randomisieren.",
    tags: ["design"]
  },
  {
    id: "q3-123",
    chapter_id: 3,
    stem_md: "Randomisierung/Parallelisieren – korrekte Aussagen?",
    options: [
      { id: "a", label: "a", md: "Randomisierung balanciert (bei großem N) bekannte und unbekannte Störvariablen.", isCorrect: true },
      { id: "b", label: "b", md: "Parallelisieren ordnet gezielt nach gemessenen Störvariablen zu.", isCorrect: true },
      { id: "c", label: "c", md: "Ohne Randomisierung ist es kein Experiment (sondern Quasi‑Experiment).", isCorrect: true },
      { id: "d", label: "d", md: "Randomisierung ist nur bei Feldstudien erlaubt.", isCorrect: false }
    ],
    explanation_md: "Randomisierung ist zentrales Kriterium; Parallelisieren hilft bei kleinem N.",
    tags: ["kontrolle"]
  },
  {
    id: "q3-124",
    chapter_id: 3,
    stem_md: "Erwartungseffekte – Zuordnung richtig?",
    options: [
      { id: "a", label: "a", md: "Reaktivität/Hawthorne: Beobachtetwerden verändert Verhalten.", isCorrect: true },
      { id: "b", label: "b", md: "Placebo: positive Wirkung durch Erwartung/Kontext.", isCorrect: true },
      { id: "c", label: "c", md: "Rosenthal: Erwartungen der Versuchsleitung beeinflussen Ergebnisse.", isCorrect: true },
      { id: "d", label: "d", md: "Doppelblind reduziert sowohl Placebo‑ als auch Leitungserwartungen.", isCorrect: true }
    ],
    explanation_md: "Alle vier Definitionen sind korrekt zugeordnet.",
    tags: ["erwartung"]
  },
  {
    id: "q3-125",
    chapter_id: 3,
    stem_md: "Deskriptive Statistik – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Beschreibt Stichprobendaten (Häufigkeiten, Lage, Streuung).", isCorrect: true },
      { id: "b", label: "b", md: "Histogramme visualisieren Verteilungen (klassiert).", isCorrect: true },
      { id: "c", label: "c", md: "Sie schließt mittels Wahrscheinlichkeit direkt auf die Population.", isCorrect: false },
      { id: "d", label: "d", md: "Angabe absoluter vs. relativer Häufigkeit sollte klar sein.", isCorrect: true }
    ],
    explanation_md: "Deskriptive Statistik fasst Daten zusammen; Inferenz übernimmt der Schluss auf Population.",
    tags: ["deskriptiv"]
  },
  {
    id: "q3-126",
    chapter_id: 3,
    stem_md: "Zentrale Tendenz – passend ist…",
    options: [
      { id: "a", label: "a", md: "Modalwert: häufigster Wert (für nominal sinnvoll).", isCorrect: true },
      { id: "b", label: "b", md: "Median: robust gegen Ausreißer.", isCorrect: true },
      { id: "c", label: "c", md: "Arithmetisches Mittel: erst ab Intervallskala sinnvoll.", isCorrect: true },
      { id: "d", label: "d", md: "Median ist empfindlicher für Ausreißer als das Mittel.", isCorrect: false }
    ],
    explanation_md: "Median ist ausreißerrobust; Mittel benötigt mindestens Intervallniveau.",
    tags: ["lage"]
  },
  {
    id: "q3-127",
    chapter_id: 3,
    stem_md: "Streuungsmaße – korrekte Paare?",
    options: [
      { id: "a", label: "a", md: "IQA = Q3 − Q1 (mittlere 50%).", isCorrect: true },
      { id: "b", label: "b", md: "Varianz = mittlere quadrierte Abweichung vom Mittel.", isCorrect: true },
      { id: "c", label: "c", md: "Standardabweichung = Wurzel der Varianz.", isCorrect: true },
      { id: "d", label: "d", md: "IQA setzt Nominalskala voraus.", isCorrect: false }
    ],
    explanation_md: "IQA ab Ordinal; Varianz/SD ab Intervallniveau.",
    tags: ["streuung"]
  },
  {
    id: "q3-128",
    chapter_id: 3,
    stem_md: "Korrelation r – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "r ist standardisierte Kovarianz, skalenunabhängig.", isCorrect: true },
      { id: "b", label: "b", md: "r ∈ [−1, 1]; Richtung und Stärke eines linearen Zusammenhangs.", isCorrect: true },
      { id: "c", label: "c", md: "Hohe Korrelation beweist Kausalität.", isCorrect: false },
      { id: "d", label: "d", md: "r = 0 schließt jeden (auch nichtlinearen) Zusammenhang aus.", isCorrect: false }
    ],
    explanation_md: "r quantifiziert lineare Beziehung; Kausalität erfordert weitere Bedingungen.",
    tags: ["korrelation"]
  },
  {
    id: "q3-129",
    chapter_id: 3,
    stem_md: "Welche Aussagen zur Kausalität sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Für Kausalität braucht es Kovariation.", isCorrect: true },
      { id: "b", label: "b", md: "Zeitliche Vorordnung der Ursache vor der Wirkung ist notwendig.", isCorrect: true },
      { id: "c", label: "c", md: "Ausschluss plausibler Alternativen gehört dazu.", isCorrect: true },
      { id: "d", label: "d", md: "Korrelation allein reicht aus.", isCorrect: false }
    ],
    explanation_md: "Alle drei Bedingungen sind nötig – Korrelation allein genügt nicht.",
    tags: ["kausal"]
  },
  {
    id: "q3-130",
    chapter_id: 3,
    stem_md: "Welche Maßnahmen kontrollieren Störvariablen?",
    options: [
      { id: "a", label: "a", md: "Konstanthalten von Rahmenbedingungen (Raum/Zeit/Instruktion).", isCorrect: true },
      { id: "b", label: "b", md: "Randomisierte Zuteilung zu Bedingungen.", isCorrect: true },
      { id: "c", label: "c", md: "Bewusste Ungleichverteilung der Motivation.", isCorrect: false },
      { id: "d", label: "d", md: "Balancieren (z. B. Alter gleich verteilt).", isCorrect: true }
    ],
    explanation_md: "Konstanthalten, Balancieren und Randomisieren sind zentrale Kontrollen.",
    tags: ["störvariablen"]
  },
  {
    id: "q3-131",
    chapter_id: 3,
    stem_md: "Blind‑/Doppelblind – wofür sind sie nützlich?",
    options: [
      { id: "a", label: "a", md: "Reduktion von Placebo‑/Nocebo‑Effekten.", isCorrect: true },
      { id: "b", label: "b", md: "Reduktion von Erwartungseffekten der Versuchsleitung (Rosenthal).", isCorrect: true },
      { id: "c", label: "c", md: "Ersetzen randomisierte Zuteilung vollständig.", isCorrect: false },
      { id: "d", label: "d", md: "Sind nur in Tierstudien sinnvoll.", isCorrect: false }
    ],
    explanation_md: "Blind reduziert Erwartungen; Randomisierung bleibt dennoch erforderlich.",
    tags: ["blind"]
  },
  {
    id: "q3-132",
    chapter_id: 3,
    stem_md: "Häufigkeiten – richtige Aussagen?",
    options: [
      { id: "a", label: "a", md: "Absolute Häufigkeit = Zählwert pro Kategorie.", isCorrect: true },
      { id: "b", label: "b", md: "Relative Häufigkeit = Anteil an allen Beobachtungen.", isCorrect: true },
      { id: "c", label: "c", md: "Prozente = relative Häufigkeiten × 100.", isCorrect: true },
      { id: "d", label: "d", md: "Angaben können ohne Benennung (absolut/relativ) nicht fehlinterpretiert werden.", isCorrect: false }
    ],
    explanation_md: "Art der Häufigkeit muss klar benannt werden, um Fehlinterpretation zu vermeiden.",
    tags: ["häufigkeiten"]
  },
  {
    id: "q3-133",
    chapter_id: 3,
    stem_md: "Streudiagramm/Korrelation – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Streudiagramme visualisieren bivariate Zusammenhänge.", isCorrect: true },
      { id: "b", label: "b", md: "Ein enger elliptischer Punktwolkenverlauf deutet auf hohe |r| hin.", isCorrect: true },
      { id: "c", label: "c", md: "Nichtlineare Zusammenhänge werden durch r stets perfekt erfasst.", isCorrect: false },
      { id: "d", label: "d", md: "r ist ein Maß für den Mittelwert.", isCorrect: false }
    ],
    explanation_md: "r misst lineare Stärke; Streudiagramme geben erste Hinweise.",
    tags: ["korrelation"]
  },
  {
    id: "q3-134",
    chapter_id: 3,
    stem_md: "Zuordnung: Merkmal → passendes Messinstrument/Format",
    options: [
      { id: "a", label: "a", md: "Körpergröße → Maßband (Ratio).", isCorrect: true },
      { id: "b", label: "b", md: "Aktuelles Stressempfinden → 0–10‑Skala (manifest).", isCorrect: true },
      { id: "c", label: "c", md: "Latenter Trait ohne Indikatoren → valide direkte Messung.", isCorrect: false },
      { id: "d", label: "d", md: "Intelligenz → psychologischer Test (Intervallannahme).", isCorrect: true }
    ],
    explanation_md: "Latente Merkmale benötigen Indikatoren; physische Maße sind direkt.",
    tags: ["messung"]
  },
  {
    id: "q3-135",
    chapter_id: 3,
    stem_md: "Externe vs. interne Validität – richtig ist…",
    options: [
      { id: "a", label: "a", md: "Externe Validität: Übertragbarkeit auf andere Personen/Situationen.", isCorrect: true },
      { id: "b", label: "b", md: "Interne Validität: eindeutiger Kausalschluss im Experiment.", isCorrect: true },
      { id: "c", label: "c", md: "Externe Validität steigt bei streng kontrolliertem Labor immer automatisch.", isCorrect: false },
      { id: "d", label: "d", md: "Interne Validität erfordert Randomisierung/ Kontrolle.", isCorrect: true }
    ],
    explanation_md: "Interne Validität fokussiert Kausalität; externe die Generalisierbarkeit.",
    tags: ["validität"]
  },
  {
    id: "q3-136",
    chapter_id: 3,
    stem_md: "Welche Aussagen zu Konfundierung sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Konfundierung liegt vor, wenn eine Störvariable mit UV und AV zusammenhängt.", isCorrect: true },
      { id: "b", label: "b", md: "Konfundierungen lassen sich durch Balancierung/Randomisierung reduzieren.", isCorrect: true },
      { id: "c", label: "c", md: "Konfundierungen sind nur in Feldstudien möglich.", isCorrect: false },
      { id: "d", label: "d", md: "Motivation als Störvariable kann Gruppenunterschiede vortäuschen.", isCorrect: true }
    ],
    explanation_md: "Konfundierung bedroht interne Validität und muss kontrolliert werden.",
    tags: ["konfundierung"]
  },
  // Kapitel 4 – Biologische Psychologie (40 MCQs, multi-correct, keine Teilpunkte)
  {
    id: "q4-101",
    chapter_id: 4,
    stem_md: "Was ist Gegenstand der Biologischen Psychologie?",
    options: [
      { id: "a", label: "a", md: "Beziehungen zwischen physischen Merkmalen/Prozessen und psychischen Zuständen.", isCorrect: true },
      { id: "b", label: "b", md: "Ausschließlich soziale Normen und Kulturkonflikte.", isCorrect: false },
      { id: "c", label: "c", md: "Neuronale, hormonelle und physiologische Grundlagen psychischer Phänomene.", isCorrect: true },
      { id: "d", label: "d", md: "Nur subjektive Introspektion ohne Messung.", isCorrect: false }
    ],
    explanation_md: "BioPsy untersucht körperliche/neurale Mechanismen psychischer Prozesse und deren Beziehung zu Erleben/Verhalten.",
    tags: ["definition"]
  },
  {
    id: "q4-102",
    chapter_id: 4,
    stem_md: "Begriffsabgrenzung – was passt?",
    options: [
      { id: "a", label: "a", md: "Biopsychologie = synonym zu Biologischer Psychologie.", isCorrect: true },
      { id: "b", label: "b", md: "Neurowissenschaften: übergeordnetes, interdisziplinäres Feld (u. a. Psychologie, Medizin).", isCorrect: true },
      { id: "c", label: "c", md: "Psychobiologie ist ein Teilgebiet der Biologie mit Fokus auf psychologische Auswirkungen biologischer Prozesse.", isCorrect: true },
      { id: "d", label: "d", md: "Neurowissenschaften sind ein Teilgebiet der Biologischen Psychologie.", isCorrect: false }
    ],
    explanation_md: "Biopsychologie wird synonym verwendet; Neurowissenschaften rahmen disziplinübergreifend; Psychobiologie gehört zur Biologie.",
    tags: ["begriffe"]
  },
  {
    id: "q4-103",
    chapter_id: 4,
    stem_md: "Ordnen Sie Teilgebiete der Biologischen Psychologie den Beschreibungen zu.",
    options: [
      { id: "a", label: "a", md: "Physiologische Psychologie: kausale Tests über Stimulation/Chirurgie, oft Tiermodelle.", isCorrect: true },
      { id: "b", label: "b", md: "Neuropsychologie: Folgen umschriebener Hirnschädigungen beim Menschen.", isCorrect: true },
      { id: "c", label: "c", md: "Psychophysiologie: nicht‑invasive Messungen (EEG, EMG, EOG, EKG) bei Menschen.", isCorrect: true },
      { id: "d", label: "d", md: "Kognitive Neurowissenschaft: lehnt Bildgebung ab.", isCorrect: false }
    ],
    explanation_md: "Alle außer d sind korrekt. Kognitive Neurowissenschaft nutzt u. a. MRT/fMRT, MEG/EEG, TMS.",
    tags: ["teilgebiete"]
  },
  {
    id: "q4-104",
    chapter_id: 4,
    stem_md: "Welche Aussagen zur Physiologischen Psychologie treffen zu?",
    options: [
      { id: "a", label: "a", md: "Direkte Eingriffe erlauben kausale Schlüsse zu neuronalen Mechanismen.", isCorrect: true },
      { id: "b", label: "b", md: "Tierversuche dienen der Theorieprüfung mit hoher internen Validität.", isCorrect: true },
      { id: "c", label: "c", md: "Sie untersucht ausschließlich Persönlichkeitstests.", isCorrect: false },
      { id: "d", label: "d", md: "Sie ist identisch mit Psychophysiologie.", isCorrect: false }
    ],
    explanation_md: "Kausalprüfungen über Stimulation/Chirurgie sind typisch; Psychophysiologie misst nicht‑invasiv beim Menschen.",
    tags: ["physiologisch"]
  },
  {
    id: "q4-105",
    chapter_id: 4,
    stem_md: "Neuropsychologie – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Analysiert kognitive/behaviorale Folgen umschriebener Läsionen.", isCorrect: true },
      { id: "b", label: "b", md: "Zielt auch auf Diagnostik/Rehabilitation.", isCorrect: true },
      { id: "c", label: "c", md: "Verzichtet auf Patient:innenuntersuchungen.", isCorrect: false },
      { id: "d", label: "d", md: "Erlaubt Rückschlüsse auf Funktionslokalisation.", isCorrect: true }
    ],
    explanation_md: "Neuropsychologie arbeitet patientennah und leitet Struktur‑Funktion‑Bezüge ab.",
    tags: ["neuropsychologie"]
  },
  {
    id: "q4-106",
    chapter_id: 4,
    stem_md: "Psychophysiologie – welche Maße/Aussagen passen?",
    options: [
      { id: "a", label: "a", md: "EEG zur Messung kortikaler Aktivität.", isCorrect: true },
      { id: "b", label: "b", md: "EMG/EOG/Herzrate als weitere Indikatoren.", isCorrect: true },
      { id: "c", label: "c", md: "Nur invasive Messungen am Tier.", isCorrect: false },
      { id: "d", label: "d", md: "Anwendungsfelder: Stress, Emotion, Rhythmen.", isCorrect: true }
    ],
    explanation_md: "Psychophysiologie misst nicht‑invasiv am Menschen; typische Domänen sind Stress/Emotion/Rhythmik.",
    tags: ["psychophysiologie"]
  },
  {
    id: "q4-107",
    chapter_id: 4,
    stem_md: "Kognitive Neurowissenschaft – Methoden/Schwerpunkte?",
    options: [
      { id: "a", label: "a", md: "fMRT/MRT zur funktionellen/strukturellen Bildgebung.", isCorrect: true },
      { id: "b", label: "b", md: "MEG/EEG für hohe zeitliche Auflösung.", isCorrect: true },
      { id: "c", label: "c", md: "TMS zur kausalen Störung/Modulation kortikaler Areale.", isCorrect: true },
      { id: "d", label: "d", md: "Verzichtet auf die Untersuchung von Kognition (Wahrnehmung/Gedächtnis/Sprache).", isCorrect: false }
    ],
    explanation_md: "Methodenvielfalt zur Aufklärung neuronaler Grundlagen kognitiver Prozesse.",
    tags: ["kogn_neuro"]
  },
  {
    id: "q4-108",
    chapter_id: 4,
    stem_md: "Psychopharmakologie – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Untersucht Wirkungen von Medikamenten/Drogen auf Nervensystem/Verhalten.", isCorrect: true },
      { id: "b", label: "b", md: "Zielt u. a. auf die Entwicklung neuer Wirkstoffe.", isCorrect: true },
      { id: "c", label: "c", md: "Ist rein psychologisch, ohne ärztliche/pharmakologische Beteiligung.", isCorrect: false },
      { id: "d", label: "d", md: "Greift in Neurotransmittersysteme ein (z. B. SSRI, Benzodiazepine).", isCorrect: true }
    ],
    explanation_md: "Interdisziplinär; pharmaka greifen gezielt in Transmittersysteme ein.",
    tags: ["psychopharm"]
  },
  {
    id: "q4-109",
    chapter_id: 4,
    stem_md: "Vergleichende Psychologie – wofür ist sie wichtig?",
    options: [
      { id: "a", label: "a", md: "Vergleich von Spezies zur Untersuchung von Evolution/Genetik/adaptivem Verhalten.", isCorrect: true },
      { id: "b", label: "b", md: "Lieferte Impulse für Tiermodelle menschlicher Funktionen.", isCorrect: true },
      { id: "c", label: "c", md: "Hat keinen Bezug zur Biologischen Psychologie.", isCorrect: false },
      { id: "d", label: "d", md: "Erlaubt Rückschlüsse auf universelle Mechanismen.", isCorrect: true }
    ],
    explanation_md: "Zwischenartliche Vergleiche begründen Modelle und evolutionspsychologische Hypothesen.",
    tags: ["vergleichend"]
  },
  {
    id: "q4-110",
    chapter_id: 4,
    stem_md: "Phineas Gage – was lehrt der Fall?",
    options: [
      { id: "a", label: "a", md: "Läsion im linken vorderen Frontallappen → Persönlichkeits-/Impulskontrollveränderungen.", isCorrect: true },
      { id: "b", label: "b", md: "Sprache/Intelligenz blieben bemerkenswert intakt.", isCorrect: true },
      { id: "c", label: "c", md: "Zeigt frühe Evidenz für Funktionslokalisation (präfrontal).", isCorrect: true },
      { id: "d", label: "d", md: "Belegt, dass das Kleinhirn Sitz der Persönlichkeit ist.", isCorrect: false }
    ],
    explanation_md: "Der Fall stützt die Rolle des Präfrontalcortex in Planung/Impulskontrolle.",
    tags: ["fälle"]
  },
  {
    id: "q4-111",
    chapter_id: 4,
    stem_md: "Patient ‚Tan‘ (Broca) – korrekte Aussagen?",
    options: [
      { id: "a", label: "a", md: "Läsion links frontal (Broca‑Areal) → Aphasiesyndrom mit gestörter Sprachproduktion.", isCorrect: true },
      { id: "b", label: "b", md: "Sprachverständnis weitgehend erhalten.", isCorrect: true },
      { id: "c", label: "c", md: "Belegt Spezialisierung sprachlicher Funktionen.", isCorrect: true },
      { id: "d", label: "d", md: "Lokalisationseffekte gibt es ausschließlich rechts temporal.", isCorrect: false }
    ],
    explanation_md: "Broca zeigte frühe Evidenz funktionaler Spezialisierung der linken Hemisphäre.",
    tags: ["fälle","sprache"]
  },
  {
    id: "q4-112",
    chapter_id: 4,
    stem_md: "Neuron – welcher Aufbau/Funktion stimmt?",
    options: [
      { id: "a", label: "a", md: "Dendriten: Eingang; Axon: Ausgang/Leitung; Soma: Stoffwechsel/Zellkern.", isCorrect: true },
      { id: "b", label: "b", md: "Axonterminale: synaptische Übertragung.", isCorrect: true },
      { id: "c", label: "c", md: "Dendriten leiten ausschließlich weg vom Soma.", isCorrect: false },
      { id: "d", label: "d", md: "Axon entsteht typischerweise am Axonhügel.", isCorrect: true }
    ],
    explanation_md: "Klassischer Aufbau: Soma, Dendriten (Empfang), Axon (Weiterleitung), Terminale (Synapse).",
    tags: ["neuron"]
  },
  {
    id: "q4-113",
    chapter_id: 4,
    stem_md: "Neurontypen – richtige Zuordnung?",
    options: [
      { id: "a", label: "a", md: "Sensorische Neurone: wandeln externe Reize in neuronale Signale um.", isCorrect: true },
      { id: "b", label: "b", md: "Interneurone: Verschaltung/Integration im ZNS.", isCorrect: true },
      { id: "c", label: "c", md: "Motoneurone: steuern Muskeln/Drüsen.", isCorrect: true },
      { id: "d", label: "d", md: "Interneurone verlassen das ZNS und innervieren Muskeln.", isCorrect: false }
    ],
    explanation_md: "Sensorisch → Input; Interneurone → interne Verschaltung; Motoneurone → Output.",
    tags: ["neuron"]
  },
  {
    id: "q4-114",
    chapter_id: 4,
    stem_md: "Gliazellen – was gehört zu ihren Aufgaben?",
    options: [
      { id: "a", label: "a", md: "Stoffwechselunterstützung, Müllentsorgung, Leitung von Transmittern/Ionenregulation.", isCorrect: true },
      { id: "b", label: "b", md: "Blut‑Hirn‑Schranke (Astrozyten).", isCorrect: true },
      { id: "c", label: "c", md: "Myelinbildung (Oligodendrozyten/Schwann‑Zellen).", isCorrect: true },
      { id: "d", label: "d", md: "Alle Glia sind rein passiv und ohne Einfluss auf neuronale Kommunikation.", isCorrect: false }
    ],
    explanation_md: "Glia sind aktiv in Stoffwechsel, Schutz, Myelinisierung und Signalumgebung.",
    tags: ["glia"]
  },
  {
    id: "q4-115",
    chapter_id: 4,
    stem_md: "Blut‑Hirn‑Schranke – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Astrozyten umhüllen Gefäße; Barriere für nicht‑fettlösliche Toxine/Erreger.", isCorrect: true },
      { id: "b", label: "b", md: "Schützt Neurone vor vielen Substanzen aus dem Blut.", isCorrect: true },
      { id: "c", label: "c", md: "Ermöglicht ungehinderten Durchtritt aller Moleküle.", isCorrect: false },
      { id: "d", label: "d", md: "Ist Teil des peripheren Nervensystems.", isCorrect: false }
    ],
    explanation_md: "BBB ist zentrale Schutzstruktur des ZNS; selektiv permeabel.",
    tags: ["bbb","glia"]
  },
  {
    id: "q4-116",
    chapter_id: 4,
    stem_md: "Myelin & saltatorische Erregungsleitung – richtig ist…",
    options: [
      { id: "a", label: "a", md: "Myelin erhöht Leitungsgeschwindigkeit durch segmentierte Isolation.", isCorrect: true },
      { id: "b", label: "b", md: "Aktive Regeneration des AP an Ranvier‑Schnürringen.", isCorrect: true },
      { id: "c", label: "c", md: "Ionenaustausch findet in Myelinsegmenten maximal statt.", isCorrect: false },
      { id: "d", label: "d", md: "Ohne Ranvier‑Schnürringe gäbe es keine AP‑Weiterleitung in Myelinschnitten.", isCorrect: true }
    ],
    explanation_md: "In myelinisierten Abschnitten passiv; an Schnürringen hohe Na+‑Kanaldichte → saltatorisch.",
    tags: ["myelin"]
  },
  {
    id: "q4-117",
    chapter_id: 4,
    stem_md: "Multiple Sklerose (MS) – welche Aussagen treffen zu?",
    options: [
      { id: "a", label: "a", md: "Autoimmun bedingte Demyelinisierung im ZNS.", isCorrect: true },
      { id: "b", label: "b", md: "Folgen: Sehstörungen, Missempfindungen, Muskelschwäche bis Lähmungen.", isCorrect: true },
      { id: "c", label: "c", md: "Verlauf häufig schubförmig; Remissionen möglich.", isCorrect: true },
      { id: "d", label: "d", md: "Heilung durch Placebos zuverlässig möglich.", isCorrect: false }
    ],
    explanation_md: "MS zerstört Myelin; Symptome variieren; Therapien reduzieren Schubfrequenz/‑schwere, heilen aber nicht.",
    tags: ["ms"]
  },
  {
    id: "q4-118",
    chapter_id: 4,
    stem_md: "Ruhepotenzial – welche Faktoren stabilisieren es?",
    options: [
      { id: "a", label: "a", md: "Ionengradienten (Na+ außen, K+ innen, Cl− außen).", isCorrect: true },
      { id: "b", label: "b", md: "Selektive Permeabilität (v. a. K+; Na+ gering im Ruhe).", isCorrect: true },
      { id: "c", label: "c", md: "Na+/K+‑Pumpe (3 Na+ raus, 2 K+ rein).", isCorrect: true },
      { id: "d", label: "d", md: "Gleichmäßige Verteilung aller Ionen innen/außen.", isCorrect: false }
    ],
    explanation_md: "Ungleiche Verteilungen + Permeabilitäten + Pumpenaktivität erzeugen/halten ca. −70 mV.",
    tags: ["ruhepotenzial"]
  },
  {
    id: "q4-119",
    chapter_id: 4,
    stem_md: "Welche Aussage zu Na+, K+, Cl− im Ruhe ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Na+ hohe Konzentration außen; starker elektrochemischer Drang nach innen.", isCorrect: true },
      { id: "b", label: "b", md: "K+ hohe Konzentration innen; Nettobewegung wird durch Permeabilität und Gradienten bestimmt.", isCorrect: true },
      { id: "c", label: "c", md: "Cl− ist innen deutlich höher konzentriert als außen.", isCorrect: false },
      { id: "d", label: "d", md: "Die Pumpe transportiert Na+ in die Zelle hinein.", isCorrect: false }
    ],
    explanation_md: "Na+ außen↑, K+ innen↑, Cl− außen↑; Pumpe hält Gradienten (Na+ raus, K+ rein).",
    tags: ["ionen"]
  },
  {
    id: "q4-120",
    chapter_id: 4,
    stem_md: "EPSP/IPSP – welche Zuordnungen stimmen?",
    options: [
      { id: "a", label: "a", md: "EPSP: Depolarisation, erhöht Feuerrate.", isCorrect: true },
      { id: "b", label: "b", md: "IPSP: Hyperpolarisation, senkt Feuerrate.", isCorrect: true },
      { id: "c", label: "c", md: "Summation am Axonhügel entscheidet über AP.", isCorrect: true },
      { id: "d", label: "d", md: "EPSP und IPSP sind identisch.", isCorrect: false }
    ],
    explanation_md: "Nettoeffekt am Axonhügel (räumlich/zeitlich) bestimmt, ob die Schwelle überschritten wird.",
    tags: ["synapse"]
  },
  {
    id: "q4-121",
    chapter_id: 4,
    stem_md: "Alles‑oder‑Nichts & Schwelle – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "AP entsteht bei Überschreiten einer Schwelle (≈ −55 mV).", isCorrect: true },
      { id: "b", label: "b", md: "Subschwellige Depolarisationen lösen kein AP aus.", isCorrect: true },
      { id: "c", label: "c", md: "AP‑Amplitude variiert kontinuierlich mit Reizstärke.", isCorrect: false },
      { id: "d", label: "d", md: "APs sind für eine Zelle stereotyp (zelltypspezifisch).", isCorrect: true }
    ],
    explanation_md: "Amplituden sind nicht analog zur Reizstärke; Reizintensität kodiert v. a. über Feuerrate.",
    tags: ["aktionspotenzial"]
  },
  {
    id: "q4-122",
    chapter_id: 4,
    stem_md: "AP‑Phasen – Zuordnungen korrekt?",
    options: [
      { id: "a", label: "a", md: "Aufstrich/Overshoot: Öffnen spannungsabhängiger Na+‑Kanäle → Na+‑Einstrom.", isCorrect: true },
      { id: "b", label: "b", md: "Repolarisation: verzögertes Öffnen von K+‑Kanälen → K+‑Ausstrom.", isCorrect: true },
      { id: "c", label: "c", md: "Na+‑Kanäle inaktivieren kurz nach Öffnung.", isCorrect: true },
      { id: "d", label: "d", md: "Nachpotenzial = starke Depolarisation über +50 mV.", isCorrect: false }
    ],
    explanation_md: "Nachpotenzial ist hyperpolarisiert unter Ruhe; Overshoot ist positive Spitze.",
    tags: ["aktionspotenzial"]
  },
  {
    id: "q4-123",
    chapter_id: 4,
    stem_md: "Refraktärphasen – welche Aussagen stimmen?",
    options: [
      { id: "a", label: "a", md: "Absolute Refraktärphase: kein AP möglich (Na+‑Kanäle inaktiviert).", isCorrect: true },
      { id: "b", label: "b", md: "Relative Refraktärphase: AP nur bei stärkerem Reiz.", isCorrect: true },
      { id: "c", label: "c", md: "Erklären u. a. die unidirektionale Fortleitung.", isCorrect: true },
      { id: "d", label: "d", md: "Refraktärphasen treten nur in Dendriten auf.", isCorrect: false }
    ],
    explanation_md: "Nach Aktivierung folgt Inaktivierung/Erholung; verhindert Rücklauf des APs.",
    tags: ["aktionspotenzial"]
  },
  {
    id: "q4-124",
    chapter_id: 4,
    stem_md: "Leitung – unmyelinisiert vs. myelinisiert: korrekt ist…",
    options: [
      { id: "a", label: "a", md: "Unmyelinisiert: kontinuierliche, langsamere Fortleitung.", isCorrect: true },
      { id: "b", label: "b", md: "Myelinisiert: saltatorische Leitung mit schnellerer Weitergabe.", isCorrect: true },
      { id: "c", label: "c", md: "Myelinisierte Axone benötigen keine Na+‑Kanäle.", isCorrect: false },
      { id: "d", label: "d", md: "In Myelinsegmenten findet keine aktive Regeneration statt.", isCorrect: true }
    ],
    explanation_md: "Aktive Regeneration an Schnürringen; Segmente leiten passiv.",
    tags: ["leitung"]
  },
  {
    id: "q4-125",
    chapter_id: 4,
    stem_md: "Chemische Synapse – Ablauf korrekt?",
    options: [
      { id: "a", label: "a", md: "AP in Terminale → Öffnen spannungsabhängiger Ca2+‑Kanäle.", isCorrect: true },
      { id: "b", label: "b", md: "Ca2+‑Einstrom → Vesikel‑Exozytose → Transmitter im Spalt.", isCorrect: true },
      { id: "c", label: "c", md: "Transmitter binden Rezeptoren → Ionenkanäle öffnen → EPSP/IPSP.", isCorrect: true },
      { id: "d", label: "d", md: "Transmitter bleiben dauerhaft im Spalt.", isCorrect: false }
    ],
    explanation_md: "Nach Rezeptoraktivierung werden Transmitter abgebaut, wiederaufgenommen oder von Glia entfernt.",
    tags: ["synapse"]
  },
  {
    id: "q4-126",
    chapter_id: 4,
    stem_md: "Elektrische Synapse (gap junction) – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Sehr schnelle Übertragung kleiner Moleküle/Ionen.", isCorrect: true },
      { id: "b", label: "b", md: "Meist bidirektional.", isCorrect: true },
      { id: "c", label: "c", md: "Im ZNS deutlich häufiger als chemische Synapsen.", isCorrect: false },
      { id: "d", label: "d", md: "Kommt ganz ohne Zellkontakt aus.", isCorrect: false }
    ],
    explanation_md: "Elektrische Synapsen koppeln Zellen direkt; im ZNS dominieren dennoch chemische Synapsen.",
    tags: ["synapse"]
  },
  {
    id: "q4-127",
    chapter_id: 4,
    stem_md: "Neurotransmitter – korrekte Paare?",
    options: [
      { id: "a", label: "a", md: "Glutamat: wichtigster exzitatorischer Transmitter; Lernen/Gedächtnis.", isCorrect: true },
      { id: "b", label: "b", md: "GABA: wichtigster inhibitorischer Transmitter; Benzodiazepine wirken anxiolytisch.", isCorrect: true },
      { id: "c", label: "c", md: "Dopamin: Motivation/Belohnung, Motorik; M. Parkinson = Dopaminmangel.", isCorrect: true },
      { id: "d", label: "d", md: "Acetylcholin: ausschließlich peripher, ohne kognitive Funktionen.", isCorrect: false }
    ],
    explanation_md: "ACh wirkt an motorischer Endplatte und zentral (Kognition/Schlaf). Serotonin/NA ergänzen das Bild.",
    tags: ["transmitter"]
  },
  {
    id: "q4-128",
    chapter_id: 4,
    stem_md: "ZNS vs. PNS; somatisches vs. autonomes NS – was stimmt?",
    options: [
      { id: "a", label: "a", md: "ZNS: Gehirn und Rückenmark; Integration/Koordination.", isCorrect: true },
      { id: "b", label: "b", md: "PNS: außerhalb von Schädel/Wirbelsäule; somatisch (Sinnesinput↔Skelettmuskeln).", isCorrect: true },
      { id: "c", label: "c", md: "Autonomes NS: Organe/Drüsen (Sympathikus/Parasympathikus).", isCorrect: true },
      { id: "d", label: "d", md: "Somatisches NS steuert Drüsenautoregulation.", isCorrect: false }
    ],
    explanation_md: "Somatisch = willkürlich/motorisch/sensorisch; autonom = vegetativ (Sympathikus/Parasympathikus).",
    tags: ["zns","pns"]
  },
  {
    id: "q4-129",
    chapter_id: 4,
    stem_md: "Rückenmark – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Graue Substanz H‑förmig (Hinterhörner sensorisch, Vorderhörner motorisch).", isCorrect: true },
      { id: "b", label: "b", md: "Weiße Substanz: aufsteigende/absteigende Bahnen.", isCorrect: true },
      { id: "c", label: "c", md: "Spinalganglion enthält Zellkörper sensorischer Neurone.", isCorrect: true },
      { id: "d", label: "d", md: "Reflexe benötigen zwingend die Großhirnrinde.", isCorrect: false }
    ],
    explanation_md: "Reflexe können auf Rückenmarksebene verschaltet sein (z. B. Patellarsehne).",
    tags: ["rückenmark"]
  },
  {
    id: "q4-130",
    chapter_id: 4,
    stem_md: "Dermatome – richtige Aussagen?",
    options: [
      { id: "a", label: "a", md: "Jeder Spinalnerv versorgt ein Hautareal (Dermatom), überlappende Innervation inklusive.", isCorrect: true },
      { id: "b", label: "b", md: "Schädigung eines Spinalnervs führt nie zu Sensibilitätsveränderungen.", isCorrect: false },
      { id: "c", label: "c", md: "Dermatome veranschaulichen die somatotopische Organisation peripherer Innervation.", isCorrect: true },
      { id: "d", label: "d", md: "Dermatome existieren nur an den Beinen.", isCorrect: false }
    ],
    explanation_md: "Überlappungen verhindern den totalen Ausfall, doch Sensibilität kann beeinträchtigt sein.",
    tags: ["dermatom"]
  },
  {
    id: "q4-131",
    chapter_id: 4,
    stem_md: "Entwicklungsaufteilung des Gehirns – was passt?",
    options: [
      { id: "a", label: "a", md: "Prosencephalon → Telencephalon (Großhirn) und Diencephalon (Zwischenhirn).", isCorrect: true },
      { id: "b", label: "b", md: "Rhombencephalon → Metencephalon (Hinterhirn) und Myelencephalon (Nachhirn).", isCorrect: true },
      { id: "c", label: "c", md: "Mesencephalon = Mittelhirn.", isCorrect: true },
      { id: "d", label: "d", md: "Prosencephalon entwickelt sich zum Rückenmark.", isCorrect: false }
    ],
    explanation_md: "Die drei primären Hirnbläschen differenzieren in die genannten Strukturen.",
    tags: ["entwicklung"]
  },
  {
    id: "q4-132",
    chapter_id: 4,
    stem_md: "Lappenfunktionen – welche Zuordnungen stimmen?",
    options: [
      { id: "a", label: "a", md: "Frontal: Planung, Sprache, Sozialverhalten, Motorik.", isCorrect: true },
      { id: "b", label: "b", md: "Parietal: Somatosensorik, räumliche Orientierung/Aufmerksamkeit.", isCorrect: true },
      { id: "c", label: "c", md: "Temporal: Hören, Gedächtnis (Hippocampus), Emotion (Amygdala), Objekterkennung.", isCorrect: true },
      { id: "d", label: "d", md: "Okzipital: primär auditorische Verarbeitung.", isCorrect: false }
    ],
    explanation_md: "Okzipital ist primär visuell; auditiv liegt v. a. temporal.",
    tags: ["cortex"]
  },
  {
    id: "q4-133",
    chapter_id: 4,
    stem_md: "Lateralisation & Split‑Brain – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Linke Hemisphäre ist typischerweise sprachdominant.", isCorrect: true },
      { id: "b", label: "b", md: "Split‑Brain zeigt Defizite beim Benennen links dargebotener Reize.", isCorrect: true },
      { id: "c", label: "c", md: "Rechte Hemisphäre ist oft stärker in räumlicher Verarbeitung.", isCorrect: true },
      { id: "d", label: "d", md: "Durchtrennung des Balkens führt zu totaler Handlungsunfähigkeit.", isCorrect: false }
    ],
    explanation_md: "Split‑Brain‑Patient:innen funktionieren erstaunlich gut, zeigen aber lateralitätsabhängige Defizite.",
    tags: ["lateralisation"]
  },
  {
    id: "q4-134",
    chapter_id: 4,
    stem_md: "Autonomes NS – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Sympathikus: Aktivierung (Puls/Atmung↑, Verdauung↓).", isCorrect: true },
      { id: "b", label: "b", md: "Parasympathikus: Erholung/Normalbetrieb (Puls↓, Verdauung↑).", isCorrect: true },
      { id: "c", label: "c", md: "Sympathikus/Parasympathikus wirken identisch.", isCorrect: false },
      { id: "d", label: "d", md: "Autonomes NS steuert ausschließlich Skelettmuskeln.", isCorrect: false }
    ],
    explanation_md: "Vegetatives System reguliert Organe/Drüsen; Sympathikus/Parasympathikus sind gegenspielerisch.",
    tags: ["ans"]
  },
  {
    id: "q4-135",
    chapter_id: 4,
    stem_md: "Auge – korrekte Aussagen?",
    options: [
      { id: "a", label: "a", md: "Cornea ist gefäßfrei und lichtdurchlässig.", isCorrect: true },
      { id: "b", label: "b", md: "Iris steuert Pupillendurchmesser (Blende).", isCorrect: true },
      { id: "c", label: "c", md: "Linse akkommodiert für Nah/Fern.", isCorrect: true },
      { id: "d", label: "d", md: "Blinder Fleck: Dichte an Photorezeptoren besonders hoch.", isCorrect: false }
    ],
    explanation_md: "Am blinden Fleck tritt der Sehnerv aus; dort fehlen Photorezeptoren.",
    tags: ["auge"]
  },
  {
    id: "q4-136",
    chapter_id: 4,
    stem_md: "Retina – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Signalweg: Photorezeptoren → Bipolarzellen → Ganglienzellen (Axone = Sehnerv).", isCorrect: true },
      { id: "b", label: "b", md: "Horizontal/Amakrinzellen modulieren die Verschaltung.", isCorrect: true },
      { id: "c", label: "c", md: "Müller‑Glia leitet Licht durch die Retina.", isCorrect: true },
      { id: "d", label: "d", md: "Photorezeptoren liegen direkt an der Glaskörperseite ohne weitere Schichten.", isCorrect: false }
    ],
    explanation_md: "Rezeptoren liegen retinal ‚außen‘; darüber transparente Zellschichten.",
    tags: ["retina"]
  },
  {
    id: "q4-137",
    chapter_id: 4,
    stem_md: "Stäbchen vs. Zapfen – richtige Zuordnung?",
    options: [
      { id: "a", label: "a", md: "Stäbchen: sehr lichtempfindlich, Dämmerungssehen, keine Farbe.", isCorrect: true },
      { id: "b", label: "b", md: "Zapfen: Farb‑/Detailsehen bei Helligkeit; drei Zapfentypen.", isCorrect: true },
      { id: "c", label: "c", md: "Fovea enthält besonders viele Zapfen.", isCorrect: true },
      { id: "d", label: "d", md: "Im Auge gibt es mehr Zapfen als Stäbchen.", isCorrect: false }
    ],
    explanation_md: "Stäbchen überwiegen zahlenmäßig; Fovea ist zapfenreich für maximale Schärfe.",
    tags: ["zapfen","stäbchen"]
  },
  {
    id: "q4-138",
    chapter_id: 4,
    stem_md: "Farbwahrnehmung & Rot‑Grün‑Schwäche – korrekt ist…",
    options: [
      { id: "a", label: "a", md: "Farbe resultiert aus relativer Aktivität von drei Zapfentypen.", isCorrect: true },
      { id: "b", label: "b", md: "Rot‑Grün‑Schwäche: Verschiebung/Fehlen von Zapfentypen; häufiger bei Männern (X‑chromosomal).", isCorrect: true },
      { id: "c", label: "c", md: "Betroffene sind vollständig farbenblind (immer).", isCorrect: false },
      { id: "d", label: "d", md: "Ishihara‑Tafeln geben Hinweise auf Rot‑Grün‑Schwäche.", isCorrect: true }
    ],
    explanation_md: "Die häufigste Farbfehlsichtigkeit betrifft Rot/Grün; vollständige Achromatopsie ist selten.",
    tags: ["farbe"]
  },
  {
    id: "q4-139",
    chapter_id: 4,
    stem_md: "Sehbahn – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Nasale Fasern kreuzen im Chiasma opticum (kontralateral).", isCorrect: true },
      { id: "b", label: "b", md: "Rechtes CGL erhält Information aus dem linken Gesichtsfeld beider Augen.", isCorrect: true },
      { id: "c", label: "c", md: "Retinotope Organisation ist im CGL erhalten.", isCorrect: true },
      { id: "d", label: "d", md: "Foveale Information ist im CGL proportional unterrepräsentiert.", isCorrect: false }
    ],
    explanation_md: "Fovea ist überproportional repräsentiert; retinotope Karten bleiben erhalten.",
    tags: ["sehbahn"]
  },
  {
    id: "q4-140",
    chapter_id: 4,
    stem_md: "Primärer visueller Cortex (V1) – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Lokalisation im Okzipitallappen; retinotop organisiert.", isCorrect: true },
      { id: "b", label: "b", md: "Orientierungs‑ und richtungssensitive Neurone (Hubel & Wiesel).", isCorrect: true },
      { id: "c", label: "c", md: "V1 verarbeitet nur auditorische Informationen.", isCorrect: false },
      { id: "d", label: "d", md: "Es existieren weitere visuelle Areale (V2, V3 …) für komplexere Verarbeitung.", isCorrect: true }
    ],
    explanation_md: "V1 ist das primäre visuelle Areal; höhere visuelle Areale verarbeiten komplexere Merkmale.",
    tags: ["v1","visuell"]
  },
  // Kapitel 6 – Entwicklungspsychologie (36 MCQs, multi-correct, keine Teilpunkte)
  {
    id: "q6-101",
    chapter_id: 6,
    stem_md: "Was umfasst die Entwicklungspsychologie in Abgrenzung zu anderen Fächern?",
    options: [
      { id: "a", label: "a", md: "Veränderungsprozesse über die gesamte Lebensspanne (pränatal → hohes Alter).", isCorrect: true },
      { id: "b", label: "b", md: "Nur biologische Reifung in der Kindheit.", isCorrect: false },
      { id: "c", label: "c", md: "Veränderungen auf biologischer, kognitiver, sprachlicher und sozialer Ebene.", isCorrect: true },
      { id: "d", label: "d", md: "Ausschließlich Unterschiede zwischen Personen (Differenzielle Psychologie).", isCorrect: false }
    ],
    explanation_md: "Entwicklungspsychologie betrachtet lebenslange Veränderungsprozesse in mehreren Domänen; sie ist nicht auf Kindheit beschränkt.",
    tags: ["definition","abgrenzung"]
  },
  {
    id: "q6-102",
    chapter_id: 6,
    stem_md: "Ordnen Sie die Lebensphasen korrekt zu (nach Tabelle 6.1).",
    options: [
      { id: "a", label: "a", md: "Pränatal → Empfängnis bis Geburt.", isCorrect: true },
      { id: "b", label: "b", md: "Säuglingsalter → Geburt bis Ende des 1. Jahres.", isCorrect: true },
      { id: "c", label: "c", md: "Adoleszenz → ca. 11–20 Jahre.", isCorrect: true },
      { id: "d", label: "d", md: "Mittleres Erwachsenenalter → ca. 20–40 Jahre.", isCorrect: false }
    ],
    explanation_md: "Mittleres Erwachsenenalter ≈ 40–65 Jahre; frühes Erwachsenenalter ≈ 20–40 Jahre.",
    tags: ["phasen"]
  },
  {
    id: "q6-103",
    chapter_id: 6,
    stem_md: "Anlage vs. Umwelt und Stufen vs. Kontinuität – was trifft die heutige Sicht?",
    options: [
      { id: "a", label: "a", md: "Entwicklung entsteht durch Interaktion von genetischen Anlagen und Umwelt.", isCorrect: true },
      { id: "b", label: "b", md: "Es gibt ausschließlich stufenartige Sprünge ohne graduelle Trends.", isCorrect: false },
      { id: "c", label: "c", md: "Je nach Bereich mischen sich stufige und kontinuierliche Veränderungen.", isCorrect: true },
      { id: "d", label: "d", md: "Umwelt trägt keinen eigenständigen Beitrag zur Entwicklung.", isCorrect: false }
    ],
    explanation_md: "Interaktionismus ist Konsens; einige Domänen zeigen Stufen (z. B. Piaget‑ähnliche Meilensteine), andere eher kontinuierliche Kurven.",
    tags: ["anlage","umwelt","stufen"]
  },
  {
    id: "q6-104",
    chapter_id: 6,
    stem_md: "Pränatale Entwicklung – ordnen Sie Phasen korrekt zu.",
    options: [
      { id: "a", label: "a", md: "Germinal (Befruchtung–2. Woche): Zygote, Zellteilung, Einnistung.", isCorrect: true },
      { id: "b", label: "b", md: "Embryonal (3.–8. Woche): Spezialisierung, Organanlagen, erster Herzschlag.", isCorrect: true },
      { id: "c", label: "c", md: "Fötal (ab 9. Woche): Wachstum/Ausreifung, Schlaf‑Wach, Bewegungen.", isCorrect: true },
      { id: "d", label: "d", md: "Embryonalphase endet mit Geburt.", isCorrect: false }
    ],
    explanation_md: "Die Fötalphase reicht bis zur Geburt; Embryonalphase endet um die 8. Woche.",
    tags: ["pränatal"]
  },
  {
    id: "q6-105",
    chapter_id: 6,
    stem_md: "Neuroentwicklung vor/nach Geburt – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Pränatal: enorme Neurogenese (bis ~250k Neurone/Minute).", isCorrect: true },
      { id: "b", label: "b", md: "Postnatal (0–2 Jahre): Überproduktion + synaptic pruning formen Netzwerke.", isCorrect: true },
      { id: "c", label: "c", md: "Nach der Geburt entstehen keine neuen Synapsen mehr.", isCorrect: false },
      { id: "d", label: "d", md: "Axon‑/Dendritenwachstum beginnt erst im Jugendalter.", isCorrect: false }
    ],
    explanation_md: "Synaptogenese und Pruning prägen frühe Entwicklung; Axon/Dendriten wachsen bereits pränatal weiter.",
    tags: ["neuro"]
  },
  {
    id: "q6-106",
    chapter_id: 6,
    stem_md: "Teratogene – Definition und Beispiele.",
    options: [
      { id: "a", label: "a", md: "Externe Schädiger in der Schwangerschaft (biologisch/physikalisch/chemisch).", isCorrect: true },
      { id: "b", label: "b", md: "Beispiele: Infektionen, Luftverschmutzung, ionisierende Strahlung, Alkohol/Drogen, Medikamente (z. B. Thalidomid).", isCorrect: true },
      { id: "c", label: "c", md: "Wirkung ist unabhängig von Dosis und Zeitpunkt.", isCorrect: false },
      { id: "d", label: "d", md: "Sensible Phasen erhöhen Verletzbarkeit stark.", isCorrect: true }
    ],
    explanation_md: "Einfluss hängt von Dosis, Dauer und Entwicklungsfenster ab; sensible Phasen sind besonders riskant.",
    tags: ["teratogene"]
  },
  {
    id: "q6-107",
    chapter_id: 6,
    stem_md: "Fetale Alkoholspektrumsstörungen (FASD) – was gehört dazu?",
    options: [
      { id: "a", label: "a", md: "Wachstumsstörungen, Gesichtsfehlbildungen, Herzfehler.", isCorrect: true },
      { id: "b", label: "b", md: "Motorisch‑kognitive Defizite (Aufmerksamkeit, Lernen).", isCorrect: true },
      { id: "c", label: "c", md: "Geringeres Risiko bei höherer Dosis und längerer Exposition.", isCorrect: false },
      { id: "d", label: "d", md: "FAS ist die ausgeprägte Form innerhalb des Spektrums.", isCorrect: true }
    ],
    explanation_md: "FASD umfasst eine Bandbreite von Beeinträchtigungen; Risiko steigt mit Dosis/Dauer.",
    tags: ["fasd"]
  },
  {
    id: "q6-108",
    chapter_id: 6,
    stem_md: "Pränatale Diagnostik – Ziele und Beispiele.",
    options: [
      { id: "a", label: "a", md: "Früherkennung genetischer/umweltbedingter Risiken oder Fehlbildungen.", isCorrect: true },
      { id: "b", label: "b", md: "Beispiele: Nackenfaltenmessung, Organscreening, Fruchtwasserbiopsie.", isCorrect: true },
      { id: "c", label: "c", md: "Dient dem Erkennen und der Einleitung unterstützender Maßnahmen.", isCorrect: true },
      { id: "d", label: "d", md: "Ersetzt alle Routineuntersuchungen der Mutter.", isCorrect: false }
    ],
    explanation_md: "Diagnostik ergänzt Standarduntersuchungen; Ziel sind Früherkennung und Unterstützung.",
    tags: ["diagnostik"]
  },
  {
    id: "q6-109",
    chapter_id: 6,
    stem_md: "Frühkindliche Reflexe und Sinnespräferenzen – welche Aussagen stimmen?",
    options: [
      { id: "a", label: "a", md: "Such‑ und Saugreflex unterstützen Nahrungsaufnahme direkt nach Geburt.", isCorrect: true },
      { id: "b", label: "b", md: "Frühkindliche Reflexe bleiben lebenslang erhalten.", isCorrect: false },
      { id: "c", label: "c", md: "Neugeborene zeigen Präferenzen für Mutterstimme/‑gesicht/‑geruch.", isCorrect: true },
      { id: "d", label: "d", md: "Visuell werden Muster, Bewegung und Gesichter bevorzugt.", isCorrect: true }
    ],
    explanation_md: "Viele frühe Reflexe sind transient; Präferenzen für Bezugsperson und strukturierte visuelle Reize sind gut belegt.",
    tags: ["reflexe","sinne"]
  },
  {
    id: "q6-110",
    chapter_id: 6,
    stem_md: "Visuelle Klippe (Gibson & Walk) – was folgt daraus?",
    options: [
      { id: "a", label: "a", md: "Krabbelnde Kinder meiden den scheinbaren Abgrund trotz Glasabsicherung.", isCorrect: true },
      { id: "b", label: "b", md: "Befund stützt ein frühes Tiefenverständnis.", isCorrect: true },
      { id: "c", label: "c", md: "Kinder werden vom Abgrund angezogen und krabbeln bevorzugt darüber.", isCorrect: false },
      { id: "d", label: "d", md: "Erfahrung (Krabbeln) moduliert Verhalten.", isCorrect: true }
    ],
    explanation_md: "Die Studie illustriert frühe Tiefenwahrnehmung; motorische Erfahrung beeinflusst das Verhalten.",
    tags: ["tiefe"]
  },
  {
    id: "q6-111",
    chapter_id: 6,
    stem_md: "Deprivation in der frühen Kindheit – typische Folgen?",
    options: [
      { id: "a", label: "a", md: "Verändertes Gehirnwachstum bei langandauernder Vernachlässigung.", isCorrect: true },
      { id: "b", label: "b", md: "Reduzierte kognitive Leistungen (z. B. IQ).", isCorrect: true },
      { id: "c", label: "c", md: "Deprivation wirkt sich ausschließlich positiv auf Lernchancen aus.", isCorrect: false },
      { id: "d", label: "d", md: "Anregung/Interaktion sind entwicklungsförderlich.", isCorrect: true }
    ],
    explanation_md: "Mangel an Stimulation schädigt Entwicklung; anregende Umgebungen fördern sie.",
    tags: ["deprivation"]
  },
  {
    id: "q6-112",
    chapter_id: 6,
    stem_md: "Adoleszenz – welche Zuordnungen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Mädchen: Östrogen/Progesteron; Jungen: Testosteron.", isCorrect: true },
      { id: "b", label: "b", md: "Menarche ≈ erste Menstruation; Spermache ≈ Beginn der Spermienproduktion.", isCorrect: true },
      { id: "c", label: "c", md: "Sekundäre Geschlechtsmerkmale: z. B. Brustentwicklung, Stimmbruch, Behaarung.", isCorrect: true },
      { id: "d", label: "d", md: "Psychische Belastungen sind in der Adoleszenz unmöglich.", isCorrect: false }
    ],
    explanation_md: "Pubertät geht mit hormonellen/körperlichen Veränderungen und psychischer Belastung einher; Ausprägung variiert.",
    tags: ["adoleszenz"]
  },
  {
    id: "q6-113",
    chapter_id: 6,
    stem_md: "Veränderungen im Erwachsenenalter – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Langsamer Abbau von Reaktionszeit/Muskelkraft bei vielen Personen.", isCorrect: true },
      { id: "b", label: "b", md: "Inflammaging: niedriggradige chronische Entzündung im Alter.", isCorrect: true },
      { id: "c", label: "c", md: "Menopause: Ende der Fruchtbarkeit, typische Symptome (z. B. Hitzewallungen).", isCorrect: true },
      { id: "d", label: "d", md: "Testosteron steigt beim Mann kontinuierlich im Alter.", isCorrect: false }
    ],
    explanation_md: "Testosteron sinkt; gesunde Lebensführung puffert körperlich/kognitiv.",
    tags: ["erwachsenenalter"]
  },
  {
    id: "q6-114",
    chapter_id: 6,
    stem_md: "Postformales Denken – Kennzeichen?",
    options: [
      { id: "a", label: "a", md: "Reflektiertes Abwägen, Antizipation von Konsequenzen.", isCorrect: true },
      { id: "b", label: "b", md: "Toleranz von Ambiguität/Widerspruch.", isCorrect: true },
      { id: "c", label: "c", md: "Verknüpfung mit Kreativität/Metaphern‑/Ironieverständnis (Befunde).", isCorrect: true },
      { id: "d", label: "d", md: "Reines Auswendiglernen ohne Kontext.", isCorrect: false }
    ],
    explanation_md: "Postformal betont flexible, kontextualisierte Urteile und den Umgang mit Mehrdeutigkeit.",
    tags: ["postformal"]
  },
  {
    id: "q6-115",
    chapter_id: 6,
    stem_md: "Piaget – Kernmechanismen des Lernens.",
    options: [
      { id: "a", label: "a", md: "Schemata als mentale Strukturen organisieren Erfahrung.", isCorrect: true },
      { id: "b", label: "b", md: "Assimilation: neue Information in bestehende Schemata einpassen.", isCorrect: true },
      { id: "c", label: "c", md: "Akkommodation: Schemata an neue Information anpassen.", isCorrect: true },
      { id: "d", label: "d", md: "Kinder sind passive Empfänger von Wissen.", isCorrect: false }
    ],
    explanation_md: "Piaget sieht Kinder als aktive Wissenskonstrukteure; Lernen = Wechselspiel von Assimilation/Akkommodation.",
    tags: ["piaget"]
  },
  {
    id: "q6-116",
    chapter_id: 6,
    stem_md: "Piaget – Stadien und typische Errungenschaften.",
    options: [
      { id: "a", label: "a", md: "Sensumotorisch: Objektpermanenz.", isCorrect: true },
      { id: "b", label: "b", md: "Präoperational: Sprache/mentale Repräsentationen, Animismus/Realismus möglich.", isCorrect: true },
      { id: "c", label: "c", md: "Konkret‑operational: Logik über Konkretes, Reversibilität, Erhaltung.", isCorrect: true },
      { id: "d", label: "d", md: "Formal‑operational: ausschließlich sensorische Erkundung.", isCorrect: false }
    ],
    explanation_md: "Formal‑operational = Abstraktion/Hypothesen; nicht sensorische Erkundung.",
    tags: ["piaget","stadien"]
  },
  {
    id: "q6-117",
    chapter_id: 6,
    stem_md: "Objektpermanenz – klassische vs. neue Befunde.",
    options: [
      { id: "a", label: "a", md: "Klassisch: sichtbares Suchverhalten zeigt Erwerb ~8 Monate.", isCorrect: true },
      { id: "b", label: "b", md: "Neue Paradigmen (Blickdauer) zeigen Anzeichen schon ~3,5 Monate.", isCorrect: true },
      { id: "c", label: "c", md: "Motorische Limitierungen können Verhaltensdefizite erklären.", isCorrect: true },
      { id: "d", label: "d", md: "Kinder erwerben Objektpermanenz erst im Jugendalter.", isCorrect: false }
    ],
    explanation_md: "Frühe Kompetenz kann durch Aufgabenanforderungen maskiert sein.",
    tags: ["objektpermanenz"]
  },
  {
    id: "q6-118",
    chapter_id: 6,
    stem_md: "Konkret‑operationales Denken – welches Beispiel passt?",
    options: [
      { id: "a", label: "a", md: "Erhaltung von Flüssigkeit trotz anderer Gefäßform.", isCorrect: true },
      { id: "b", label: "b", md: "Reversibilität (X+X=Y ⇒ Y−X=X).", isCorrect: true },
      { id: "c", label: "c", md: "Abstrakte Logik ohne Bezug zu konkreten Gegebenheiten.", isCorrect: false },
      { id: "d", label: "d", md: "Schlussfolgern über konkrete Situationen/Ereignisse.", isCorrect: true }
    ],
    explanation_md: "Abstraktion kennzeichnet eher formal‑operationales Denken.",
    tags: ["konkret"]
  },
  {
    id: "q6-119",
    chapter_id: 6,
    stem_md: "Theory of Mind – False‑Belief‑Aufgabe (Maxi). Was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Ab ~4–6 Jahren nennen Kinder typischerweise den grünen Schrank (Maxis Glaube).", isCorrect: true },
      { id: "b", label: "b", md: "Jüngere Kinder antworten oft aus eigenem Wissen (blauer Schrank).", isCorrect: true },
      { id: "c", label: "c", md: "Aufgabe misst Zuschreibung mentaler Zustände an andere.", isCorrect: true },
      { id: "d", label: "d", md: "ToM ist mit 2 Jahren vollständig wie bei Erwachsenen.", isCorrect: false }
    ],
    explanation_md: "Die False‑Belief‑Aufgabe prüft, ob Kinder Überzeugungen verstehen, die von der Realität abweichen.",
    tags: ["tom"]
  },
  {
    id: "q6-120",
    chapter_id: 6,
    stem_md: "Kohlberg – ordnen Sie die Niveaus/Stufen korrekt zu.",
    options: [
      { id: "a", label: "a", md: "Präkonventionell: Strafe/Belohnung; instrumentell (Eigennutz/Reziprozität).", isCorrect: true },
      { id: "b", label: "b", md: "Konventionell: Beziehungen/Erwartungen; soziales System/Ordnung.", isCorrect: true },
      { id: "c", label: "c", md: "Postkonventionell: sozialer Kontrakt/Rechte; universelle Prinzipien.", isCorrect: true },
      { id: "d", label: "d", md: "Präkonventionell: Orientierung an universellen ethischen Prinzipien.", isCorrect: false }
    ],
    explanation_md: "Die Niveaus beschreiben zunehmende Abstraktion in moralischer Begründung.",
    tags: ["kohlberg"]
  },
  {
    id: "q6-121",
    chapter_id: 6,
    stem_md: "Kohlberg – Fokus der Theorie ist…",
    options: [
      { id: "a", label: "a", md: "…nicht die Entscheidung (stehlen/nicht stehlen), sondern die Begründung.", isCorrect: true },
      { id: "b", label: "b", md: "…ausschließlich die Gesetzestreue unabhängig vom Kontext.", isCorrect: false },
      { id: "c", label: "c", md: "…kumulatives Durchlaufen von Stufen in gleicher Reihenfolge.", isCorrect: true },
      { id: "d", label: "d", md: "…dass jede Person sicher Stufe 6 erreicht.", isCorrect: false }
    ],
    explanation_md: "Reihenfolge der Stufen ist invariant; wenige erreichen dauerhaft postkonventionelle Stufen.",
    tags: ["kohlberg"]
  },
  {
    id: "q6-122",
    chapter_id: 6,
    stem_md: "Kohlberg – zentrale Kritikpunkte?",
    options: [
      { id: "a", label: "a", md: "Gender‑Perspektive (Gilligan): Fürsorge vs. Gerechtigkeit – Unterschiede eher klein.", isCorrect: true },
      { id: "b", label: "b", md: "Kulturelle Übertragbarkeit eingeschränkt (westliche Instrumente).", isCorrect: true },
      { id: "c", label: "c", md: "Empirie zeigt keinerlei Einschränkungen in jeder Kultur.", isCorrect: false },
      { id: "d", label: "d", md: "Theorie ist rein biologisch und ignoriert Kognition.", isCorrect: false }
    ],
    explanation_md: "Kritik betrifft v. a. kulturelle Prägung der Messinstrumente und die Betonung der Gerechtigkeitslogik.",
    tags: ["kohlberg","kritik"]
  },
  {
    id: "q6-123",
    chapter_id: 6,
    stem_md: "Bindung – Strange Situation: ordnen Sie Typen korrekt zu.",
    options: [
      { id: "a", label: "a", md: "A: unsicher‑vermeidend – äußerlich ruhig, sucht wenig Trost; Cortisol erhöht.", isCorrect: true },
      { id: "b", label: "b", md: "B: sicher – weint bei Trennung, lässt sich gut trösten/beruhigen.", isCorrect: true },
      { id: "c", label: "c", md: "C: unsicher‑ambivalent – sucht Trost, kann ihn aber nicht annehmen.", isCorrect: true },
      { id: "d", label: "d", md: "D: unsicher‑desorganisiert – konfus, ‚einfrieren‘, teils Aggression, oft Trauma.", isCorrect: true }
    ],
    explanation_md: "Bindungstyp B gilt als sicher; A/C/D als unsichere Muster.",
    tags: ["bindung"]
  },
  {
    id: "q6-124",
    chapter_id: 6,
    stem_md: "Bindung – was begünstigt sichere Bindung und Generalisierbarkeit?",
    options: [
      { id: "a", label: "a", md: "Elterliche Sensitivität (verlässliche, feinfühlige Reaktion).", isCorrect: true },
      { id: "b", label: "b", md: "Bindungsperson muss zwingend die Mutter sein.", isCorrect: false },
      { id: "c", label: "c", md: "Bindungsphänomene zeigen sich kulturübergreifend.", isCorrect: true },
      { id: "d", label: "d", md: "Bindungsmuster sind zufällig und generationell unabhängig.", isCorrect: false }
    ],
    explanation_md: "Bindung kann zu Vater/Großeltern/Betreuern aufgebaut werden; Muster zeigen generationelle Kontinuität und Kulturrobustheit.",
    tags: ["bindung"]
  },
  {
    id: "q6-125",
    chapter_id: 6,
    stem_md: "Erikson – ordnen Sie Phase/Krise korrekt zu.",
    options: [
      { id: "a", label: "a", md: "0–1: Urvertrauen vs. Misstrauen.", isCorrect: true },
      { id: "b", label: "b", md: "1–3: Autonomie vs. Selbstzweifel.", isCorrect: true },
      { id: "c", label: "c", md: "Adoleszenz: Identität vs. Rollenkonfusion.", isCorrect: true },
      { id: "d", label: "d", md: "Hohes Erwachsenenalter: Intimität vs. Isolation.", isCorrect: false }
    ],
    explanation_md: "Im hohen Erwachsenenalter: Ich‑Integrität vs. Verzweiflung; Intimität vs. Isolation gehört ins frühe Erwachsenenalter.",
    tags: ["erikson"]
  },
  {
    id: "q6-126",
    chapter_id: 6,
    stem_md: "Marcia – Identitätsstatus: Zuordnung und Kennzeichen.",
    options: [
      { id: "a", label: "a", md: "Diffus: keine Exploration, kein Commitment.", isCorrect: true },
      { id: "b", label: "b", md: "Foreclosure/übernommen: Commitment ohne Exploration (Übernahme elterlicher Werte).", isCorrect: true },
      { id: "c", label: "c", md: "Moratorium/kritisch: hohe Exploration, wenig Commitment.", isCorrect: true },
      { id: "d", label: "d", md: "Achievement/erarbeitet: nach Exploration Commitment zu Selbstbild/Werten.", isCorrect: true }
    ],
    explanation_md: "Marcia kreuzt Exploration × Commitment → vier Identitätsstatus.",
    tags: ["marcia","identität"]
  },
  {
    id: "q6-127",
    chapter_id: 6,
    stem_md: "Sensible Phasen – was ist gemeint?",
    options: [
      { id: "a", label: "a", md: "Zeitfenster erhöhter Plastizität oder Verletzbarkeit (z. B. rasches Wachstum).", isCorrect: true },
      { id: "b", label: "b", md: "Teratogeneffekte unabhängig vom Zeitpunkt.", isCorrect: false },
      { id: "c", label: "c", md: "Gilt auch im Lernen über sensible Perioden.", isCorrect: true },
      { id: "d", label: "d", md: "Sensible Phasen existieren nicht pränatal.", isCorrect: false }
    ],
    explanation_md: "Sensible Phasen erhöhen Wirkung von Störfaktoren, aber auch Lernchancen.",
    tags: ["sensibel"]
  },
  {
    id: "q6-128",
    chapter_id: 6,
    stem_md: "Kognitive Alterung – typische Muster/Prävention?",
    options: [
      { id: "a", label: "a", md: "65+: stärkere Korrelation zwischen kognitiven Domänen; generelle Abnahme im Mittel.", isCorrect: true },
      { id: "b", label: "b", md: "Gesundheit, Bewegung, kognitives Training und soziale Einbindung puffern Abbau.", isCorrect: true },
      { id: "c", label: "c", md: "Erkrankungen (z. B. Alzheimer) treten seltener auf als in der Jugend.", isCorrect: false },
      { id: "d", label: "d", md: "Variabilität zwischen Personen bleibt bestehen.", isCorrect: true }
    ],
    explanation_md: "Alter ist heterogen; Lebensstilfaktoren wirken protektiv; Erkrankungsrisiken steigen insgesamt.",
    tags: ["alterung"]
  },
  {
    id: "q6-129",
    chapter_id: 6,
    stem_md: "Welche Aussagen zur Rolle von Eltern/Umwelt in der frühen Entwicklung sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Aktivierender, feinfühliger Umgang und neue Erlebnisse fördern Entwicklung.", isCorrect: true },
      { id: "b", label: "b", md: "Kinder gestalten ihre Lernumwelt aktiv (Exploration, Spiel).", isCorrect: true },
      { id: "c", label: "c", md: "Elterliche Sensitivität trägt nichts zur Bindung bei.", isCorrect: false },
      { id: "d", label: "d", md: "Reizarme, deprivierende Umgebungen sind unproblematisch.", isCorrect: false }
    ],
    explanation_md: "Entwicklung ist ein Co‑Produkt aktiver Kinder und sinnvoller Umwelten; Sensitivität fördert Bindung.",
    tags: ["umwelt","eltern"]
  },
  {
    id: "q6-130",
    chapter_id: 6,
    stem_md: "Erhaltung (Invarianz) – welche Zuordnungen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Klein‑Kind vor konkret‑operationaler Phase: Fokus auf Höhe → ‚mehr Wasser‘.", isCorrect: true },
      { id: "b", label: "b", md: "Konkret‑operational: versteht, dass Menge trotz Formwechsel gleich bleibt.", isCorrect: true },
      { id: "c", label: "c", md: "Invarianzprinzip gilt nur für Flüssigkeit, nicht Zahl/Länge/Masse/Gewicht.", isCorrect: false },
      { id: "d", label: "d", md: "Reversibilität unterstützt das Verständnis von Erhaltung.", isCorrect: true }
    ],
    explanation_md: "Erhaltung erstreckt sich auf mehrere Größen; Reversibilität ist zentral.",
    tags: ["erhaltung"]
  },
  {
    id: "q6-131",
    chapter_id: 6,
    stem_md: "Animismus/Realismus in der Präoperationsphase – Beispiele?",
    options: [
      { id: "a", label: "a", md: "Animismus: Teddybär ist ‚traurig‘ – Zuschreibung lebendiger Eigenschaften an Objekte.", isCorrect: true },
      { id: "b", label: "b", md: "Realismus: Nicht‑Existentes (Träume) als extern real aufgefasst.", isCorrect: true },
      { id: "c", label: "c", md: "Beide Phänomene treten niemals bei Kindern auf.", isCorrect: false },
      { id: "d", label: "d", md: "Piagets Häufigkeitseinschätzungen wurden teils revidiert (Kinder können Realität/Vorstellung früher unterscheiden).", isCorrect: true }
    ],
    explanation_md: "Neuere Studien zeigen frühere Unterscheidungsfähigkeiten als von Piaget angenommen.",
    tags: ["animismus","realismus"]
  },
  {
    id: "q6-132",
    chapter_id: 6,
    stem_md: "Adoleszenz – welches Zeitfenster ist plausibel?",
    options: [
      { id: "a", label: "a", md: "Buben: Beginn ca. 10–17 Jahre.", isCorrect: true },
      { id: "b", label: "b", md: "Mädchen: Beginn ca. 9–14 Jahre.", isCorrect: true },
      { id: "c", label: "c", md: "Menarche durchschnittlich etwa mit 12 Jahren.", isCorrect: true },
      { id: "d", label: "d", md: "Spermache = Ende der Spermienproduktion.", isCorrect: false }
    ],
    explanation_md: "Spermache bezeichnet den Beginn der Produktion; Zeiträume variieren interindividuell.",
    tags: ["adoleszenz","zeitfenster"]
  },
  {
    id: "q6-133",
    chapter_id: 6,
    stem_md: "Menopause/Testosteronabfall – was ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Menopause: Zeitpunkt der letzten Blutung + ≥12 Monate keine Blutung.", isCorrect: true },
      { id: "b", label: "b", md: "Testosteron sinkt beim Mann ab ca. 40 Jahren langsam.", isCorrect: true },
      { id: "c", label: "c", md: "Männer bleiben häufig bis ins hohe Alter fruchtbar.", isCorrect: true },
      { id: "d", label: "d", md: "Menopause = plötzlicher Start der Fruchtbarkeit.", isCorrect: false }
    ],
    explanation_md: "Menopause beendet Fruchtbarkeit; beim Mann sinkt Testosteron, Fruchtbarkeit kann aber erhalten bleiben.",
    tags: ["menopause","testosteron"]
  },
  {
    id: "q6-134",
    chapter_id: 6,
    stem_md: "Piaget‑Revisionen – warum wurden Erwerbsalter teils nach unten korrigiert?",
    options: [
      { id: "a", label: "a", md: "Komplexe Aufgabenanforderungen maskierten vorhandene Kompetenzen.", isCorrect: true },
      { id: "b", label: "b", md: "Neue Methoden (z. B. Blickdauer) erfassen frühere Wissensaspekte.", isCorrect: true },
      { id: "c", label: "c", md: "Weil Kinder später anfangen zu denken.", isCorrect: false },
      { id: "d", label: "d", md: "Motorische Limitierungen erschweren manifeste Leistung bei klassischen Aufgaben.", isCorrect: true }
    ],
    explanation_md: "Methodische Anpassungen zeigen frühere kognitive Anzeichen als sichtbar im Verhalten.",
    tags: ["piaget","methoden"]
  },
  {
    id: "q6-135",
    chapter_id: 6,
    stem_md: "Eriksons Modell – was kennzeichnet die Logik der Stufen?",
    options: [
      { id: "a", label: "a", md: "Jede Stufe hat einen psychosozialen Konflikt (Krise).", isCorrect: true },
      { id: "b", label: "b", md: "Erfolgreiche Bewältigung erleichtert die nächste Stufe.", isCorrect: true },
      { id: "c", label: "c", md: "Konflikte verschwinden vollständig und sind später irrelevant.", isCorrect: false },
      { id: "d", label: "d", md: "Das Modell inspirierte viele Untersuchungen v. a. zur Adoleszenz/Identität.", isCorrect: true }
    ],
    explanation_md: "Konflikte bleiben als Themen präsent; Identität (Adoleszenz) wurde intensiv erforscht.",
    tags: ["erikson"]
  },
  {
    id: "q6-136",
    chapter_id: 6,
    stem_md: "Identitätsentwicklung – welche Paare sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Foreclosure: Commitment ohne Exploration (Übernahme elterlicher Werte).", isCorrect: true },
      { id: "b", label: "b", md: "Moratorium: hohe Exploration, wenig Commitment.", isCorrect: true },
      { id: "c", label: "c", md: "Achievement: Exploration abgeschlossen, stabiles Commitment.", isCorrect: true },
      { id: "d", label: "d", md: "Diffus: stabiles Commitment nach intensiver Exploration.", isCorrect: false }
    ],
    explanation_md: "Diffus = weder Exploration noch Commitment; Achievement = erarbeitetes Commitment.",
    tags: ["identität","marcia"]
  },
  // Kapitel 5 – Allgemeine Psychologie (36 MCQs, multi-correct, keine Teilpunkte)
  {
    id: "q5-101",
    chapter_id: 5,
    stem_md: "Was kennzeichnet die Allgemeine Psychologie (präzise Abgrenzung)?",
    options: [
      { id: "a", label: "a", md: "Untersucht grundlegende, universelle Funktionen bei gesunden Erwachsenen.", isCorrect: true },
      { id: "b", label: "b", md: "Fokussiert individuelle Unterschiede als Hauptziel.", isCorrect: false },
      { id: "c", label: "c", md: "Betont Gemeinsamkeiten statt Unterschiede.", isCorrect: true },
      { id: "d", label: "d", md: "Bezieht sich primär auf kindliche Entwicklung über die Lebensspanne.", isCorrect: false }
    ],
    explanation_md: "Allgemeine Psychologie sucht allgemeine Gesetzmäßigkeiten (Gemeinsamkeiten) bei gesunden Erwachsenen; Differenzielle/Entwicklungspsychologie fokussieren Unterschiede bzw. Veränderungen.",
    tags: ["definition","abgrenzung"]
  },
  {
    id: "q5-102",
    chapter_id: 5,
    stem_md: "Kognitive Wende – welche Aussagen treffen zu?",
    options: [
      { id: "a", label: "a", md: "Stellte mentale Repräsentationen/Informationsverarbeitung ins Zentrum.", isCorrect: true },
      { id: "b", label: "b", md: "War eine Gegenreaktion auf behavioristische Reduktion auf Beobachtbares.", isCorrect: true },
      { id: "c", label: "c", md: "Lehnte Experimente als Methode ab.", isCorrect: false },
      { id: "d", label: "d", md: "Verknüpfte Psychologie stärker mit Neurowissenschaften.", isCorrect: true }
    ],
    explanation_md: "Die kognitive Wende etablierte mentale Prozesse als Untersuchungsgegenstand und nutzte experimentelle/neurowissenschaftliche Methoden.",
    tags: ["kognitiv","wende"]
  },
  {
    id: "q5-103",
    chapter_id: 5,
    stem_md: "Prozesskette der Inputverarbeitung (Abb. 5.2) – welche Stationen gehören dazu?",
    options: [
      { id: "a", label: "a", md: "Aufnahme sensorischer Reize und Aufmerksamkeitsselektion.", isCorrect: true },
      { id: "b", label: "b", md: "Einbettung in Vorwissen/Erwartungen, Emotion/Motivation.", isCorrect: true },
      { id: "c", label: "c", md: "Klassifikation, Urteilen/Entscheiden und Handlung.", isCorrect: true },
      { id: "d", label: "d", md: "Reine Reflexbögen ohne kognitive Einflüsse.", isCorrect: false }
    ],
    explanation_md: "Die Kette umfasst sensorische Aufnahme → Aufmerksamkeit → Top‑down‑Einflüsse → Bewertung/Entscheidung → Handlung; Sprache erlaubt Ausdruck.",
    tags: ["prozess","aufmerksamkeit"]
  },
  {
    id: "q5-104",
    chapter_id: 5,
    stem_md: "Drei Stufen der Wahrnehmung – korrekte Zuordnung?",
    options: [
      { id: "a", label: "a", md: "Sensorische Empfindung: Transduktion über Sinnesrezeptoren.", isCorrect: true },
      { id: "b", label: "b", md: "Wahrnehmung i. e. S.: integriertes Perzept als mentales Abbild.", isCorrect: true },
      { id: "c", label: "c", md: "Klassifikation: Zuordnung zu bekannten Kategorien.", isCorrect: true },
      { id: "d", label: "d", md: "Klassifikation ist Teil der Biologischen und nicht der Allgemeinen Psychologie.", isCorrect: false }
    ],
    explanation_md: "Stufe 1 (sensorisch) ist eher bio‑psychologisch verankert; Stufe 2/3 sind Kern der Allgemeinen Psychologie.",
    tags: ["wahrnehmung"]
  },
  {
    id: "q5-105",
    chapter_id: 5,
    stem_md: "Top‑down‑Einflüsse auf Wahrnehmung – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Vorwissen, Erwartungen, Bewertungen und Emotionen lenken Aufmerksamkeit.", isCorrect: true },
      { id: "b", label: "b", md: "Wahrnehmung ist vollständig stimulusgetrieben (Bottom‑up only).", isCorrect: false },
      { id: "c", label: "c", md: "Angst kann Aufmerksamkeitsfokus auf bedrohliche Reize verengen.", isCorrect: true },
      { id: "d", label: "d", md: "Vorerfahrungen haben keinen Einfluss auf Klassifikation.", isCorrect: false }
    ],
    explanation_md: "Top‑down‑Signale (Vorwissen, Ziele, Emotion) prägen Selektion und Interpretation der Reize.",
    tags: ["aufmerksamkeit","topdown"]
  },
  {
    id: "q5-106",
    chapter_id: 5,
    stem_md: "Psychophysik – Schwellenkonzepte korrekt beschrieben?",
    options: [
      { id: "a", label: "a", md: "Absolutschwelle: kleinste Reizintensität, die entdeckt wird.", isCorrect: true },
      { id: "b", label: "b", md: "Unterschiedsschwelle: minimaler Intensitätsunterschied zur Differenzierung.", isCorrect: true },
      { id: "c", label: "c", md: "Unterschiedsschwelle ist unabhängig von Ausgangsintensität.", isCorrect: false },
      { id: "d", label: "d", md: "Schwellen werden oft über die psychometrische Funktion (50%‑Kriterium) bestimmt.", isCorrect: true }
    ],
    explanation_md: "Die Unterschiedsschwelle variiert mit der Ausgangsintensität; Schwellen werden probabilistisch (z. B. 50% erkannt) definiert.",
    tags: ["psychophysik","schwelle"]
  },
  {
    id: "q5-107",
    chapter_id: 5,
    stem_md: "Methoden der Schwellenmessung – was passt?",
    options: [
      { id: "a", label: "a", md: "Grenzmethode: auf‑/absteigende Reizfolgen, Detektion ja/nein.", isCorrect: true },
      { id: "b", label: "b", md: "Konstanzmethode: zufällige Reihenfolge vordefinierter Intensitäten.", isCorrect: true },
      { id: "c", label: "c", md: "Beide Methoden erlauben Schätzung der psychometrischen Funktion.", isCorrect: true },
      { id: "d", label: "d", md: "Konstanzmethode setzt stets Augenbewegungen als Maß ein.", isCorrect: false }
    ],
    explanation_md: "Beide Methoden erfassen Entdeckungswahrscheinlichkeiten; Konstanzmethode präsentiert Intensitäten randomisiert.",
    tags: ["psychophysik","methoden"]
  },
  {
    id: "q5-108",
    chapter_id: 5,
    stem_md: "Signalentdeckungstheorie – korrekte Aussagen?",
    options: [
      { id: "a", label: "a", md: "Detektion hängt von Sensitivität und Entscheidungskriterium ab.", isCorrect: true },
      { id: "b", label: "b", md: "Vier Ausgänge: Treffer, Verpasser, falscher Alarm, korrekte Zurückweisung.", isCorrect: true },
      { id: "c", label: "c", md: "Antworttendenzen (Ja/Nein‑Bias) beeinflussen Treffer/Falschalarme.", isCorrect: true },
      { id: "d", label: "d", md: "Die Theorie postuliert eine harte, absolute Schwelle ohne Subjektivität.", isCorrect: false }
    ],
    explanation_md: "SDT ersetzt harte Schwellen durch Sensitivität + Kriterium; Bias verschiebt die Entscheidung.",
    tags: ["sdt","aufmerksamkeit"]
  },
  {
    id: "q5-109",
    chapter_id: 5,
    stem_md: "Unaufmerksamkeitsblindheit – was wird damit gezeigt?",
    options: [
      { id: "a", label: "a", md: "Unerwartete Reize bleiben bei fokussierter Aufmerksamkeit oft unbemerkt.", isCorrect: true },
      { id: "b", label: "b", md: "Aufmerksamkeit bestimmt maßgeblich, was bewusst wird.", isCorrect: true },
      { id: "c", label: "c", md: "Ohne Aufmerksamkeit ist Sehen identisch mit Bewusstsein.", isCorrect: false },
      { id: "d", label: "d", md: "Das Phänomen lässt sich nicht experimentell demonstrieren.", isCorrect: false }
    ],
    explanation_md: "Das Gorilla‑Experiment illustriert, dass Fokus Verarbeitungskapazität bindet und Unerwartetes ausblendet.",
    tags: ["aufmerksamkeit"]
  },
  {
    id: "q5-110",
    chapter_id: 5,
    stem_md: "Endogene vs. exogene Aufmerksamkeit – richtige Zuordnung und Dynamik?",
    options: [
      { id: "a", label: "a", md: "Endogen: willentlich, wissens-/erwartungsgetrieben; wirkt ab ~200 ms und länger.", isCorrect: true },
      { id: "b", label: "b", md: "Exogen: reizgetrieben (peripheres Aufleuchten), wirkt bereits ~50 ms und kürzer.", isCorrect: true },
      { id: "c", label: "c", md: "Exogene Hinweise halten typischerweise länger an als endogene.", isCorrect: false },
      { id: "d", label: "d", md: "Endogene Hinweise benötigen Verarbeitung der Bedeutung (z. B. Pfeil).", isCorrect: true }
    ],
    explanation_md: "Exogen = früh/kurz; endogen = später/länger. Endogene Cues erfordern semantische Verarbeitung.",
    tags: ["aufmerksamkeit","cueing"]
  },
  {
    id: "q5-111",
    chapter_id: 5,
    stem_md: "Posners Cueing‑Paradigma – typische Befunde?",
    options: [
      { id: "a", label: "a", md: "Reaktionszeiten: valide < neutral < invalide.", isCorrect: true },
      { id: "b", label: "b", md: "Fixation verhindert, dass Augenbewegungen die Effekte erklären.", isCorrect: true },
      { id: "c", label: "c", md: "Hinweise beeinflussen Wahrnehmung nicht messbar.", isCorrect: false },
      { id: "d", label: "d", md: "Endogene Cues sind bei sehr kurzen SOAs (< 100 ms) maximal wirksam.", isCorrect: false }
    ],
    explanation_md: "Valide Cues beschleunigen, invalide verzögern Reaktionen; endogene Effekte brauchen hinreichende SOA und halten länger an.",
    tags: ["cueing","aufmerksamkeit"]
  },
  {
    id: "q5-112",
    chapter_id: 5,
    stem_md: "Selektive Aufmerksamkeit – was illustrieren Cocktailparty, dichotisches Hören, Split‑Span?",
    options: [
      { id: "a", label: "a", md: "Aufmerksamkeitsfokus ermöglicht Verfolgen eines Kanals trotz Störkulisse.", isCorrect: true },
      { id: "b", label: "b", md: "Nichtbeachtete Inhalte werden identisch gut erinnert wie beachtete.", isCorrect: false },
      { id: "c", label: "c", md: "Ohrweise Wiedergabe (Split‑Span) ist leichter als paarweise.", isCorrect: true },
      { id: "d", label: "d", md: "Eigener Name auf dem unbeachteten Kanal kann Aufmerksamkeit umreißen.", isCorrect: true }
    ],
    explanation_md: "Frühe Selektion nach physikalischen Merkmalen; Salienz (eigener Name) kann Filter durchbrechen.",
    tags: ["selektiv","hören"]
  },
  {
    id: "q5-113",
    chapter_id: 5,
    stem_md: "Farbtheorien – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Dreifarbentheorie: drei Zapfentypen mit unterschiedlichen Spektralsensitivitäten.", isCorrect: true },
      { id: "b", label: "b", md: "Gegenfarbentheorie: gegensätzliche Paare (Rot–Grün, Blau–Gelb, Schwarz–Weiß).", isCorrect: true },
      { id: "c", label: "c", md: "Gegenfarbentheorie erklärt Komplementär‑Nachbilder.", isCorrect: true },
      { id: "d", label: "d", md: "Beide Theorien widersprechen sich vollständig und können nicht koexistieren.", isCorrect: false }
    ],
    explanation_md: "Theorien ergänzen sich: Zapfenebene (Trichromasie) vs. nachgeschaltete opponentische Kodierung.",
    tags: ["farbe"]
  },
  {
    id: "q5-114",
    chapter_id: 5,
    stem_md: "Tiefenwahrnehmung – welche Hinweise sind korrekt zugeordnet?",
    options: [
      { id: "a", label: "a", md: "Monokular: Linienperspektive, relative Größe, Verdeckung, atmosphärische Perspektive.", isCorrect: true },
      { id: "b", label: "b", md: "Binokular: Querdisparation, Konvergenz; Akkommodation liefert vor allem Nahhinweise.", isCorrect: true },
      { id: "c", label: "c", md: "Autostereogramme beruhen auf Disparitätsauswertung.", isCorrect: true },
      { id: "d", label: "d", md: "Ames‑Raum nutzt unveränderte, korrekte Tiefenhinweise.", isCorrect: false }
    ],
    explanation_md: "Ames verzerrt Tiefenhinweise und erzeugt dadurch Größentäuschungen.",
    tags: ["tiefe","hinweise"]
  },
  {
    id: "q5-115",
    chapter_id: 5,
    stem_md: "Visuelle Pfade – ursprüngliches vs. Goodale‑&‑Milner‑Modell?",
    options: [
      { id: "a", label: "a", md: "Ursprünglich: ventral = Was (Objekterkennung), dorsal = Wo (Ort/Raum).", isCorrect: true },
      { id: "b", label: "b", md: "Goodale/Milner: ventral = Vision for Perception, dorsal = Vision for Action.", isCorrect: true },
      { id: "c", label: "c", md: "Empirie: doppelte Dissoziationen stützen die Aufgabentrennung.", isCorrect: true },
      { id: "d", label: "d", md: "Beide Modelle verneinen funktionale Spezialisierung vollständig.", isCorrect: false }
    ],
    explanation_md: "Daten aus Läsionen/Experimenten belegen Pfadunterschiede (Erkennen vs. Handlungssteuerung).",
    tags: ["visuell","pfade"]
  },
  {
    id: "q5-116",
    chapter_id: 5,
    stem_md: "Lernen – psychologische Definition korrekt abgegrenzt?",
    options: [
      { id: "a", label: "a", md: "Relativ überdauernde Verhaltensänderung/‑potenzial basierend auf Erfahrung.", isCorrect: true },
      { id: "b", label: "b", md: "Schließt Reifung/Ermüdung/Drogen als Ursache aus.", isCorrect: true },
      { id: "c", label: "c", md: "Ist deterministisch und zeigt sich sofort als Leistung.", isCorrect: false },
      { id: "d", label: "d", md: "Hängt vom Kontext ab und ist probabilistisch.", isCorrect: true }
    ],
    explanation_md: "Lernen erzeugt Potenziale; Leistung ist kontext‑ und zeitabhängig.",
    tags: ["lernen","definition"]
  },
  {
    id: "q5-117",
    chapter_id: 5,
    stem_md: "Nicht‑assoziatives Lernen – was trifft zu?",
    options: [
      { id: "a", label: "a", md: "Habituation: Reaktionsabnahme auf wiederholte, irrelevante Reize.", isCorrect: true },
      { id: "b", label: "b", md: "Sensitivierung: gesteigerte Reaktionsbereitschaft v. a. bei aversiven Reizen.", isCorrect: true },
      { id: "c", label: "c", md: "Beide benötigen die Verknüpfung von CS und UCS.", isCorrect: false },
      { id: "d", label: "d", md: "Beide gelten als nicht‑assoziativ, da keine Reizkopplung nötig ist.", isCorrect: true }
    ],
    explanation_md: "Habituation/Sensitivierung verändern Reaktionsstärke ohne CS–UCS‑Assoziation.",
    tags: ["lernen","nichtassoziativ"]
  },
  {
    id: "q5-118",
    chapter_id: 5,
    stem_md: "Klassische Konditionierung – Begriffe korrekt zuordnen (UCS/CS/UCR/CR)?",
    options: [
      { id: "a", label: "a", md: "UCS löst vor Konditionierung UCR aus.", isCorrect: true },
      { id: "b", label: "b", md: "CS gepaart mit UCS → CS allein löst CR aus.", isCorrect: true },
      { id: "c", label: "c", md: "CR = identisch mit UCR in jeder Hinsicht.", isCorrect: false },
      { id: "d", label: "d", md: "Ohne Paarung kann ein neutraler Reiz zum CS werden.", isCorrect: false }
    ],
    explanation_md: "Paarung transformiert neutralen Reiz zum CS; CR kann UCR ähneln, ist aber nicht per se identisch.",
    tags: ["konditionierung"]
  },
  {
    id: "q5-119",
    chapter_id: 5,
    stem_md: "Erwerb, Löschung, Spontanremission – richtige Aussagen?",
    options: [
      { id: "a", label: "a", md: "Erwerb: wiederholte CS–UCS‑Paarung stärkt CR.", isCorrect: true },
      { id: "b", label: "b", md: "Löschung: CS ohne UCS → Abschwächung/Verschwinden der CR.", isCorrect: true },
      { id: "c", label: "c", md: "Spontanremission: gelöschte CR kann nach Pause vorübergehend wieder erscheinen.", isCorrect: true },
      { id: "d", label: "d", md: "Löschung ist reines Vergessen der vorherigen Assoziation.", isCorrect: false }
    ],
    explanation_md: "Löschung gilt als neues Lernen (‚CS kündigt UCS nicht mehr an‘), nicht bloßes Vergessen.",
    tags: ["konditionierung"]
  },
  {
    id: "q5-120",
    chapter_id: 5,
    stem_md: "Generalisierung vs. Diskrimination – korrekt mit Beispiel?",
    options: [
      { id: "a", label: "a", md: "Generalisierung: ähnliche Reize lösen CR aus (z. B. Felltiere nach Konditionierung auf Ratte).", isCorrect: true },
      { id: "b", label: "b", md: "Diskrimination: nur spezieller Reiz löst CR aus (Training notwendig).", isCorrect: true },
      { id: "c", label: "c", md: "Diskrimination ist ohne Training spontan maximal ausgeprägt.", isCorrect: false },
      { id: "d", label: "d", md: "Generalisierung dient u. a. Sicherheit, da Reize in Natur variieren.", isCorrect: true }
    ],
    explanation_md: "Ähnlichkeit fördert Generalisierung; Diskrimination wird erlernt, wenn nur der spezifische Reiz kündigt.",
    tags: ["konditionierung"]
  },
  {
    id: "q5-121",
    chapter_id: 5,
    stem_md: "Operante Konditionierung – Gesetz des Effekts/Skinners Beiträge?",
    options: [
      { id: "a", label: "a", md: "Handlungen mit befriedigenden Konsequenzen treten häufiger auf (Thorndike).", isCorrect: true },
      { id: "b", label: "b", md: "Skinner analysierte Verhalten systematisch in der operanten Kammer.", isCorrect: true },
      { id: "c", label: "c", md: "Konsequenzen sind für Wiederauftreten eines Verhaltens irrelevant.", isCorrect: false },
      { id: "d", label: "d", md: "Basisrate und Verstärkungsphase sind typische Schritte der Prozedur.", isCorrect: true }
    ],
    explanation_md: "Operantes Lernen verknüpft Verhalten mit Konsequenzen; systematische Verstärkung formt Verhalten.",
    tags: ["operant","thorndike","skinner"]
  },
  {
    id: "q5-122",
    chapter_id: 5,
    stem_md: "Verstärkung und Bestrafung – welche Kombinationen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Positive Verstärkung: angenehmer Reiz hinzu → Verhalten ↑.", isCorrect: true },
      { id: "b", label: "b", md: "Negative Verstärkung: aversiver Reiz weg → Verhalten ↑.", isCorrect: true },
      { id: "c", label: "c", md: "Positive Bestrafung: aversiver Reiz hinzu → Verhalten ↓.", isCorrect: true },
      { id: "d", label: "d", md: "Negative Bestrafung: angenehmer Reiz weg → Verhalten ↓.", isCorrect: true }
    ],
    explanation_md: "Vier‑Felder‑Schema: Verstärkung erhöht, Bestrafung senkt Auftretenswahrscheinlichkeit; ‚positiv/negativ‘ bezieht sich auf Hinzufügen/Entfernen von Reizen.",
    tags: ["operant","verstärkung"]
  },
  {
    id: "q5-123",
    chapter_id: 5,
    stem_md: "Primäre vs. sekundäre Verstärker – was passt?",
    options: [
      { id: "a", label: "a", md: "Primär: befriedigen biologische Bedürfnisse (z. B. Nahrung, Wasser).", isCorrect: true },
      { id: "b", label: "b", md: "Sekundär: erlernte Bedeutung via Konditionierung (z. B. Geld, Token).", isCorrect: true },
      { id: "c", label: "c", md: "Sekundäre Verstärker sind ohne Lernvorgang wirksam.", isCorrect: false },
      { id: "d", label: "d", md: "Personen/Anerkennung können als Verstärker fungieren.", isCorrect: true }
    ],
    explanation_md: "Sekundäre Verstärker wirken über gelernte Verknüpfungen (z. B. Geld → Zugang zu Primärverstärkern).",
    tags: ["operant","verstärker"]
  },
  {
    id: "q5-124",
    chapter_id: 5,
    stem_md: "Operante Löschung & Spontanerholung – korrekte Aussagen?",
    options: [
      { id: "a", label: "a", md: "Ohne Verstärkung fällt Verhalten auf Ausgangsniveau zurück.", isCorrect: true },
      { id: "b", label: "b", md: "Nach Pause kann Verhalten kurzfristig wieder auftreten (Spontanerholung).", isCorrect: true },
      { id: "c", label: "c", md: "Spontanerholung ist ein dauerhafter Effekt ohne erneute Verstärkung.", isCorrect: false },
      { id: "d", label: "d", md: "Erneute Verstärkung beschleunigt Wiederaufbau des Verhaltens.", isCorrect: true }
    ],
    explanation_md: "Löschung senkt Auftretenswahrscheinlichkeit; Spontanerholung ist temporär; erneute Verstärkung stabilisiert erneut.",
    tags: ["operant"]
  },
  {
    id: "q5-125",
    chapter_id: 5,
    stem_md: "Beobachtungslernen (Bandura) – was zeigen die Bobo‑Doll‑Studien?",
    options: [
      { id: "a", label: "a", md: "Kinder imitieren beobachtetes Verhalten, v. a. wenn es belohnt wird.", isCorrect: true },
      { id: "b", label: "b", md: "Stellvertretende Konsequenzen (Belohnung/Tadel) steuern Imitation.", isCorrect: true },
      { id: "c", label: "c", md: "Ohne jeden Anlass zeigen Kinder nie modellähnliches Verhalten.", isCorrect: false },
      { id: "d", label: "d", md: "Lernen erfolgt auch ohne direkte Verstärkung am eigenen Verhalten.", isCorrect: true }
    ],
    explanation_md: "Modelllernen ist kognitiv/sozial eingebettet; Konsequenzen am Modell beeinflussen Ausführung.",
    tags: ["beobachtungslernen","bandura"]
  },
  {
    id: "q5-126",
    chapter_id: 5,
    stem_md: "Gedächtnisprozess – welche Phasen und Störquellen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Enkodierung: Aufnahme/Kodierung; Störung durch geringe Aufmerksamkeit/Tiefe.", isCorrect: true },
      { id: "b", label: "b", md: "Speicherung: Aufrechterhaltung/Konsolidierung über Zeit.", isCorrect: true },
      { id: "c", label: "c", md: "Abruf: Wiederauffinden; Kontext/Hinweise/Zustände beeinflussen Erfolg.", isCorrect: true },
      { id: "d", label: "d", md: "Störungen können nur beim Abruf auftreten.", isCorrect: false }
    ],
    explanation_md: "Fehlerquellen existieren auf allen drei Stufen; Müdigkeit/Kontextwechsel schaden dem Abruf.",
    tags: ["gedächtnis","prozess"]
  },
  {
    id: "q5-127",
    chapter_id: 5,
    stem_md: "Drei‑Speicher‑Modell – korrekte Aussagen/Kritik?",
    options: [
      { id: "a", label: "a", md: "Sensorischer Speicher (ikonisch/echoisch) ist extrem kurzlebig.", isCorrect: true },
      { id: "b", label: "b", md: "Kurzzeitbereich lässt sich allein über Wiederholung aufrechterhalten.", isCorrect: true },
      { id: "c", label: "c", md: "Strikte Trennung KZG/LZG ist unstrittig und empirisch gesichert.", isCorrect: false },
      { id: "d", label: "d", md: "Faktoren wie Wortfrequenz/Konkretheit sprechen für Wechselwirkung von KZG und LZG.", isCorrect: true }
    ],
    explanation_md: "Das Modell ist nützlich, aber zu simpel bzgl. KZG/LZG‑Wechselwirkung; Befunde zeigen direkte LZG‑Einflüsse auf kurzfristige Leistung.",
    tags: ["gedächtnis","drei-speicher"]
  },
  {
    id: "q5-128",
    chapter_id: 5,
    stem_md: "Arbeitsgedächtnis (Baddeley) – Komponenten/Funktionen korrekt?",
    options: [
      { id: "a", label: "a", md: "Zentrale Exekutive: Aufmerksamkeitssteuerung/Koordination.", isCorrect: true },
      { id: "b", label: "b", md: "Phonologische Schleife: sprachbasierte Informationen.", isCorrect: true },
      { id: "c", label: "c", md: "Visuell‑räumlicher Notizblock: visuelle/räumliche Informationen.", isCorrect: true },
      { id: "d", label: "d", md: "Episodischer Puffer: Bindeglied/Multimodalität zwischen Systemen.", isCorrect: true }
    ],
    explanation_md: "Vier Komponenten tragen unterschiedliche Inhalte; Doppelaufgaben belegen selektive Interferenzmuster.",
    tags: ["arbeitsgedächtnis"]
  },
  {
    id: "q5-129",
    chapter_id: 5,
    stem_md: "Dual‑Task‑Befunde – welche Schlussfolgerung ist korrekt?",
    options: [
      { id: "a", label: "a", md: "Gleichzeitige Aufgaben stören selektiv passende Subsysteme.", isCorrect: true },
      { id: "b", label: "b", md: "Artikulatorische Suppression beeinträchtigt v. a. visuell‑räumliche Aufgaben.", isCorrect: false },
      { id: "c", label: "c", md: "Visuell‑räumliche Zusatzaufgaben verschlechtern visuell‑räumliches Problemlösen.", isCorrect: true },
      { id: "d", label: "d", md: "Die zentrale Exekutive wird selten benötigt.", isCorrect: false }
    ],
    explanation_md: "Interferenzen sind modalitätsspezifisch; zentrale Exekutive ist bei komplexen Aufgaben/Koordination gefordert.",
    tags: ["arbeitsgedächtnis","dual-task"]
  },
  {
    id: "q5-130",
    chapter_id: 5,
    stem_md: "Millersche Zahl & Chunking – was folgt daraus?",
    options: [
      { id: "a", label: "a", md: "Typische Kapazität ≈ 7±2 Einheiten im Kurzzeit-/Arbeitsgedächtnis.", isCorrect: true },
      { id: "b", label: "b", md: "Chunking erhöht effektive Informationsmenge pro Einheit.", isCorrect: true },
      { id: "c", label: "c", md: "Chunking ist nur bei Zahlenfolgen möglich.", isCorrect: false },
      { id: "d", label: "d", md: "Kapazität ist fix und unveränderlich.", isCorrect: false }
    ],
    explanation_md: "Gruppierung reduziert Last pro Einheit; Kapazität variiert mit Material/Strategien.",
    tags: ["arbeitsgedächtnis","chunking"]
  },
  {
    id: "q5-131",
    chapter_id: 5,
    stem_md: "Langzeitgedächtnis – Systeme korrekt zugeordnet?",
    options: [
      { id: "a", label: "a", md: "Explizit: semantisch (Fakten) und episodisch (Ereignisse).", isCorrect: true },
      { id: "b", label: "b", md: "Implizit/non‑deklarativ: prozedural, Konditionierung, Priming, Habituation.", isCorrect: true },
      { id: "c", label: "c", md: "Explizit ist identisch mit prozeduralem Gedächtnis.", isCorrect: false },
      { id: "d", label: "d", md: "Fall H.M. zeigt Dissoziation: schwer gestörtes explizites Lernen bei intakten prozeduralen Lernleistungen.", isCorrect: true }
    ],
    explanation_md: "H.M. stützt Trennung von expliziten und impliziten Systemen (Hippocampus‑Abhängigkeit des Expliziten).",
    tags: ["lzg","hm"]
  },
  {
    id: "q5-132",
    chapter_id: 5,
    stem_md: "Enkodierspezifität – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Abruf gelingt besser, wenn Abrufkontext dem Enkodierkontext ähnelt.", isCorrect: true },
      { id: "b", label: "b", md: "Gilt für äußere Kontexte (Ort) und innere Zustände (Stimmung).", isCorrect: true },
      { id: "c", label: "c", md: "Passung ist irrelevant, wenn die Verarbeitungstiefe hoch war.", isCorrect: false },
      { id: "d", label: "d", md: "Effekt ist empirisch mit Taucher‑Studien belegt (Baddeley/Godden).", isCorrect: true }
    ],
    explanation_md: "Kontext wird mitkodiert und dient als Abrufhinweis; Passung verbessert Leistung.",
    tags: ["enkodierspezifität"]
  },
  {
    id: "q5-133",
    chapter_id: 5,
    stem_md: "Serieller Positionseffekt – Primacy/Recency korrekt erklärt?",
    options: [
      { id: "a", label: "a", md: "Wörter am Listenanfang/‑ende werden besser erinnert als in der Mitte.", isCorrect: true },
      { id: "b", label: "b", md: "Primacy: häufigeres Rehearsal/Einbettung begünstigt frühen Teil.", isCorrect: true },
      { id: "c", label: "c", md: "Recency: Elemente sind noch im Kurzzeitbereich/zeitlich diskriminierbarer.", isCorrect: true },
      { id: "d", label: "d", md: "Effekt ist nur bei sehr langen Listen zu beobachten.", isCorrect: false }
    ],
    explanation_md: "Beide Ränder profitieren aus unterschiedlichen Gründen; der Effekt ist robust.",
    tags: ["seriell","effekt"]
  },
  {
    id: "q5-134",
    chapter_id: 5,
    stem_md: "Vergessenskurve (Ebbinghaus) – zentrale Aussage/Implikation?",
    options: [
      { id: "a", label: "a", md: "Starker Abfall kurz nach dem Lernen, dann flacher Verlauf.", isCorrect: true },
      { id: "b", label: "b", md: "Ersparnismethode zeigt, dass Restspuren verbleiben.", isCorrect: true },
      { id: "c", label: "c", md: "Spacing/Wiederauffrischen sind sinnlos gegen Vergessen.", isCorrect: false },
      { id: "d", label: "d", md: "Kurve legt nahe, früh zu wiederholen und Wiederholungen zu verteilen.", isCorrect: true }
    ],
    explanation_md: "Frühe Auffrischung und verteiltes Üben stabilisieren Gedächtnisspuren.",
    tags: ["vergessen","ebbinghaus"]
  },
  {
    id: "q5-135",
    chapter_id: 5,
    stem_md: "Interferenz – proaktiv vs. retroaktiv korrekt unterschieden?",
    options: [
      { id: "a", label: "a", md: "Proaktiv: Altes stört Neues (Spanisch → Italienisch).", isCorrect: true },
      { id: "b", label: "b", md: "Retroaktiv: Neues stört Altes (Chemie nach Physiklernen stört Physikabruf).", isCorrect: true },
      { id: "c", label: "c", md: "Interferenzen sind keine relevante Ursache für Vergessen.", isCorrect: false },
      { id: "d", label: "d", md: "Beide Effekte sind in vielen Alltagssituationen beobachtbar.", isCorrect: true }
    ],
    explanation_md: "Interferenz ist ein Hauptgrund für Vergessen; Richtungsbezug (alt→neu vs. neu→alt) unterscheidet die Effekte.",
    tags: ["interferenz"]
  },
  {
    id: "q5-136",
    chapter_id: 5,
    stem_md: "Sprache im Prozess der Inputverarbeitung – welche Aussagen sind korrekt?",
    options: [
      { id: "a", label: "a", md: "Sprache dient der Versprachlichung/Kommunikation mentaler Prozesse.", isCorrect: true },
      { id: "b", label: "b", md: "Sie ist vollständig unabhängig von Wahrnehmung/Entscheidung.", isCorrect: false },
      { id: "c", label: "c", md: "Sie erlaubt es, Bewertungen/Entscheidungen mitzuteilen und zu koordinieren.", isCorrect: true },
      { id: "d", label: "d", md: "Im Modell (Abb. 5.2) kann Sprache als Output/Meta‑Prozess verortet werden.", isCorrect: true }
    ],
    explanation_md: "Sprache ist eng mit kognitiven Prozessen verschränkt und macht interne Verarbeitung sozial teilbar.",
    tags: ["sprache","prozess"]
  },
  ...[3,4,5,6,7,8].flatMap((cid) => {
    const base = (i: number) => ({
      id: `q${cid}-${i}`,
      chapter_id: cid,
      stem_md: `Kapitel ${cid}: Beispiel-Frage ${i}`,
      options: [
        { id: "a", label: "a", md: "Option A", isCorrect: i % 2 === 0 },
        { id: "b", label: "b", md: "Option B", isCorrect: i % 3 === 0 },
        { id: "c", label: "c", md: "Option C", isCorrect: false },
        { id: "d", label: "d", md: "Option D", isCorrect: i % 2 !== 0 }
      ],
      explanation_md: "Platzhalter. TODO: ersetzen.",
      tags: ["stub"]
    })
    return [base(1), base(2), base(3), base(4)]
  }) as unknown as QuestionT[]
]

// Schrittweise Zusammenfassung – Kapitel 1 (ca. 20 Steps ≈ 25 Minuten Lesedauer)
export const chapter1SummarySteps: { title: string; body: string }[] = [
  {
    title: "Überblick & Lernziele",
    body:
      "Kapitel 1 führt in die Psychologie als Wissenschaft ein. Leitfragen (wie im Skript): Was beeinflusst Denken und Handeln? Wie lernen wir Sprache? Warum vergessen wir? Wie wirken Beziehungen auf Wohlbefinden? Wie verändern Hirnschädigungen Erleben/Verhalten? Wie beschreibt/misst man Persönlichkeit? Du lernst Definitionen, die vier Ziele (Beschreiben, Erklären, Vorhersagen, Verändern), die Einordnung in Methoden‑/Grundlagen‑/Anwendungsfächer, zentrale Ansätze (psychodynamisch, behavioristisch, humanistisch, kognitiv, biologisch‑neurowiss.) und Ethik. Merke: Kapitel 1 liefert Sprache und Struktur für Kap. 2–8."
  },
  {
    title: "Was ist Psychologie?",
    body:
      "Psychologie ist die wissenschaftliche Untersuchung von Erleben und Verhalten des Menschen. Erleben umfasst innere, subjektive Prozesse (z. B. Gefühle, Gedanken), Verhalten umfasst beobachtbare Handlungen und Reaktionen. Hinzu kommen kognitive Prozesse (Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken, Problemlösen), die Erleben und Verhalten vermitteln. Psychologie arbeitet empirisch: Fragestellungen werden mit systematischen Methoden untersucht; Befunde sind überprüf‑ und replizierbar."
  },
  {
    title: "Kognition – ein Grundbegriff",
    body:
      "Kognition (von lat. cognoscere = erkennen) ist der Sammelbegriff für mentale Prozesse, mit denen Informationen aufgenommen, verarbeitet und gespeichert werden. Dazu zählen u. a. Aufmerksamkeit, Wahrnehmung, Gedächtnis, Schlussfolgern, Entscheiden und Problemlösen. Kognitive Prozesse sind Gegenstand vieler Grundlagenfächer (v. a. Allgemeine Psychologie) und werden zunehmend auch mit neurowissenschaftlichen Methoden untersucht."
  },
  {
    title: "Psychologie als Schnittstellenwissenschaft",
    body:
      "Psychologie ist bereichsübergreifend: Sie verbindet Ansätze aus Natur‑, Sozial‑ und Geisteswissenschaften. Der naturwissenschaftliche Fokus hat in den letzten Jahrzehnten zugenommen (kognitive Neurowissenschaft: Erklärung psychologischer Prozesse über neuronale Mechanismen). Gleichzeitig bleiben gesellschaftliche, kulturelle und individuelle Kontexte bedeutsam (Sozial‑, Kultur‑, Differenzielle Psychologie)."
  },
  {
    title: "Methoden‑, Grundlagen‑, Anwendungsfächer",
    body:
      "Methodenfächer: Ethik, Wissenschaftstheorie, Methodenlehre, Statistik – Gerüst der Forschung. Grundlagenfächer (Kap. 4–8): Biologische, Allgemeine, Entwicklungs‑, Sozial‑ sowie Differenzielle & Persönlichkeitspsychologie. Anwendungsfächer: Pädagogische Psychologie (z. B. Lernmotivation), AOW‑Psychologie (Personalauswahl, Marktverhalten), Klinische Psychologie (Störungen: Prävention, Diagnostik, Behandlung), Gesundheitspsychologie (Prävention/Verhaltensänderung). Psychologische Diagnostik nimmt eine Sonderrolle ein (Querschnitts‑Fertigkeit zur fundierten Entscheidung). Zwei‑Stufen‑Modell: Grundlagen → Anwendung; in der Praxis wird ebenfalls geforscht (z. B. Therapieevaluation). Themen überlappen (Wahrnehmung als Querschnitt in allen Fächern)."
  },
  {
    title: "Biologische Psychologie (Preview Kap. 4)",
    body:
      "Fragt nach körperlichen/neuronal‑biologischen Grundlagen psychischer Phänomene (Gene, Nerven‑ und Hormonsystem; neuronale Netzwerke). Beispiel: Wie werden Reize im visuellen System verarbeitet? Methoden: z. B. EEG, fMRT, Läsionsstudien."
  },
  {
    title: "Allgemeine Psychologie (Preview Kap. 5)",
    body:
      "Untersucht allgemeine Gesetzmäßigkeiten, die für alle Menschen gelten: Wahrnehmung, Aufmerksamkeit, Lernen, Gedächtnis, Sprache, Emotion, Motivation. Zentrale Fragen: Wie funktionieren diese Prozesse? Wie beeinflussen sie Handeln und Entscheidungen?"
  },
  {
    title: "Entwicklungspsychologie (Preview Kap. 6)",
    body:
      "Betrachtet Veränderungen psychischer Prozesse über die gesamte Lebensspanne. Fragt z. B.: Wann entstehen bestimmte kognitive Funktionen? Welche Faktoren beeinflussen Entwicklung (Gene, Umwelt, Erziehung, Kultur)?"
  },
  {
    title: "Sozialpsychologie (Preview Kap. 7)",
    body:
      "Analysiert, wie andere Menschen und Kontexte Erleben und Verhalten beeinflussen: Einstellungen, Konformität, Gehorsam, Stereotype, Gruppenprozesse, Intergroup‑Dynamiken. Beispiel‑frage: Beeinflusst die Anwesenheit anderer die visuelle Wahrnehmung?"
  },
  {
    title: "Differentielle & Persönlichkeitspsychologie (Preview Kap. 8)",
    body:
      "Untersucht stabile individuelle Unterschiede (z. B. Big Five) und intraindividuelle Variabilität. Themen: Messung von Persönlichkeitseigenschaften (Diagnostik, Skalen), genetische/umweltbedingte Einflüsse, Stabilität und Veränderung über die Zeit."
  },
  {
    title: "Ansätze – Übersicht",
    body:
      "Zentrale Perspektiven: psychodynamisch, behavioristisch, humanistisch, kognitiv, biologisch‑neurowissenschaftlich. Ansätze schließen sich nicht aus; ein eklektischer Zugang kombiniert Perspektiven passend zur Fragestellung. Viele Therapieschulen leiten sich aus diesen Ansätzen ab (z. B. Verhaltenstherapie, Gesprächstherapie)."
  },
  {
    title: "Psychodynamischer Ansatz",
    body:
      "Verhalten wird durch innere Kräfte/Triebe beeinflusst; oft unbewusste Konflikte zwischen Bedürfnissen und sozialen Anforderungen. Freud prägte den Ansatz; zentrale Konzepte: Unbewusstes, Abwehrmechanismen, psychosexuelle Entwicklung. Bedeutung: Betonung unbewusster Prozesse – bis heute wirkmächtig in Klinik und Forschung."
  },
  {
    title: "Behavioristischer Ansatz",
    body:
      "Erklärt Verhalten über beobachtbare Reize, Reaktionen und Konsequenzen. Mentale Prozesse bleiben (klassisch) außen vor. Lernprinzipien: Klassische Konditionierung (Pawlow), Operantes Konditionieren (Skinner). Stärken: Präzision, Experimentalfokus; Grenzen: Vernachlässigung interner Prozesse."
  },
  {
    title: "Humanistische Psychologie",
    body:
      "Betont die aktive, wachstumsorientierte Natur des Menschen (Selbstverwirklichung, Ressourcen, Sinn). Vertreter: Carl Rogers, Abraham Maslow. Holistische Sicht: Körper‑Psyche‑Soziales als Einheit. Relevanz in Beratung/Therapie, Pädagogik und Positiver Psychologie."
  },
  {
    title: "Kognitiver Ansatz & kognitive Wende",
    body:
      "Stellt mentale Repräsentationen und Informationsverarbeitung ins Zentrum: Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken, Entscheiden. Methodisch: Experimente + Modellierung; Verbindung zur kognitiven Neurowissenschaft (Gehirn‑Prozess‑Zuordnung). Heute dominierende Perspektive in vielen Bereichen."
  },
  {
    title: "Vier Ziele der Psychologie – Überblick",
    body:
      "Wissenschaftliche Psychologie verfolgt vier Ziele: Beschreiben (systematisch erheben), Erklären (Ursachen/Muster), Vorhersagen (Wahrscheinlichkeit künftigen Verhaltens), Verändern (Intervention/Evaluation). Die Ziele greifen ineinander: Erklärungen stützen Vorhersagen; Vorhersagen prüfen Erklärungen; Interventionen erfordern Ethik."
  },
  {
    title: "Ziel: Beschreiben",
    body:
      "Systematische, möglichst objektive Erfassung des Ist‑Zustands: Methoden wie Beobachtung, Befragung, Tests, Experimente. Herausforderung: Viele Phänomene sind nicht direkt sichtbar und müssen über Indikatoren messbar gemacht werden (Operationalisierung). Objektivität heißt: Beschreibungen sind unabhängig von Erwartungen/Vorannahmen."
  },
  {
    title: "Ziel: Erklären",
    body:
      "Warum tritt ein Verhalten auf? Erklärungen integrieren multiple Faktoren. Dispositionale Faktoren (z. B. genetische Ausstattung, Fähigkeiten, gelernte Schemata, Motive) vs. situative Faktoren (z. B. Verhalten anderer, Normen, Kontext). Teildisziplinen gewichten Faktoren unterschiedlich (z. B. Persönlichkeitspsychologie vs. Sozialpsychologie)."
  },
  {
    title: "Ziel: Vorhersagen",
    body:
      "Aussagen über Wahrscheinlichkeiten künftigen Verhaltens basierend auf gültigen Erklärungen. Vorhersagen müssen präzise formuliert und empirisch prüfbar sein (Falsifizierbarkeit). Anwendungen: Personalauswahl, Prognose klinischer Verläufe, Lern‑/Leistungsprognosen."
  },
  {
    title: "Ziel: Verändern",
    body:
      "Veränderung/Anwendung steht für Maßnahmen zur Verbesserung von Erleben/Verhalten (z. B. Therapie, Prävention, Trainings, Nudging). Hoher ethischer Anspruch: Nutzen maximieren, Schaden vermeiden; Interventionen erfordern Auftrag/Einsicht der betroffenen Person und Evaluation der Wirksamkeit."
  },
  {
    title: "Ethik – fünf Grundprinzipien (APA)",
    body:
      "(1) Wohltätigkeit & Nicht‑Schaden, (2) Loyalität & Verantwortung, (3) Integrität (Ehrlichkeit, Genauigkeit, keine Täuschung), (4) Gerechtigkeit (faire Teilhabe, Kompetenzgrenzen kennen), (5) Respekt für Rechte & Würde (Privatsphäre, Vertraulichkeit, Diversität). Ethikkommissionen prüfen Studien; historische Experimente (z. B. Milgram) wären heute in ursprünglicher Form nicht zulässig."
  },
  {
    title: "Big Picture & Transfer",
    body:
      "Kapitel 1 liefert Vokabular, Struktur und Perspektiven für das gesamte Skript. Merke: (a) Präzise Begriffe (Erleben, Verhalten, Kognition), (b) Vier Ziele als Prüfstein, (c) Fächerüberblick als Landkarte, (d) Ansätze als Perspektiv‑Werkzeugkasten, (e) Ethik als Leitplanke. Prüfe dich: Kann ich die vier Ziele erläutern und Beispiele nennen? Kann ich die Fächer voneinander abgrenzen und zusammenführen?"
  }
]

export const summaryByChapter: Record<number, { title: string; body: string }[]> = {
  1: chapter1SummarySteps
}

// Schrittweise Zusammenfassung – Kapitel 2 (≈ 22–26 Steps ≈ 25 Minuten Lesedauer)
export const chapter2SummarySteps: { title: string; body: string }[] = [
  {
    title: "Kompass & Überblick",
    body:
      "Kapitel 2 zeichnet die historische Entwicklung der Psychologie nach – von den philosophischen Wurzeln über naturwissenschaftliche Neubegründungen (Helmholtz, Fechner, Wundt) bis zu Schulen/Paradigmen (Würzburger Schule, Gestalt, Behaviorismus, Psychoanalyse) und der kognitiven Wende. Merke Ebbinghaus: ‚lange Vergangenheit, kurze Geschichte‘. Ziel: Linien, Wendepunkte und Begriffe verstehen, um aktuelle Ansätze einordnen zu können."
  },
  {
    title: "Paradigma – was ist das?",
    body:
      "Ein Paradigma ist ein vorherrschendes Denkmuster inklusive Grundannahmen und akzeptierten Methoden. Es lenkt, was als ‚gültig‘ gilt (Fragestellungen, Vorgehen, Interpretation). In der Geschichte der Psychologie kam es wiederholt zu Paradigmenwechseln (z. B. von Introspektion zu Behaviorismus, später zur Kognitionspsychologie)."
  },
  {
    title: "Frühe Seelenlehren – Orphiker",
    body:
      "Altes Griechenland (ca. 600 v. Chr.): Dualistische Sicht – stofflicher Körper vs. unstoffliche, unsterbliche Seele; Körper als ‚Gefängnis‘ der Seele; Seelenwanderung; Diesseits (unvollkommen) vs. Jenseits (vollkommen). Diese Vorstellungen prägten lange das Leib‑Seele‑Denken."
  },
  {
    title: "Platon: Drei‑Teil‑Seele",
    body:
      "Idealistischer Dualismus. Seele existiert unabhängig vom Körper. Drei Teilseelen: begehrend (Unterleib), zielstrebig/entschlossen (Brust, Emotion), denkend/vernünftig (Kopf). Vernunft soll Begierde/Temperament leiten."
  },
  {
    title: "Aristoteles: Hylomorphismus",
    body:
      "Abkehr vom strengen Dualismus. Seele und Körper sind untrennbar; Seele ‚vervollständigt‘ den lebendigen Körper. Seelentypen: vegetativ (Pflanze), sensitiv (Tier), intellektiv (Mensch). Seele gibt Organen Zweck (z. B. Auge → Sehen). Theophrast (aristotelische Schule) verfasst Charakterskizzen (z. B. der Geizige, der Taktlose) – frühe Typenlehre."
  },
  {
    title: "Temperamente: Hippokrates → Galen",
    body:
      "Vier‑Säfte‑Lehre mit Persönlichkeitsbezug (Galen, ca. 129–199 n. Chr.): Sanguiniker (Blut; freudvoll, schnell), Phlegmatiker (Schleim; langsam, freundlich), Choleriker (gelbe Galle; reizbar), Melancholiker (schwarze Galle; schwermütig). Historisch bedeutsam, wissenschaftlich überholt."
  },
  {
    title: "Spätantike & Mittelalter: Augustinus",
    body:
      "Körper (äußerer Mensch) vs. Seele/Geist (innerer Mensch). Seele im ganzen Körper gegenwärtig; Nervensystem als Vermittler. Wertigkeit der Seele über dem Körper, theologisch gerahmt."
  },
  {
    title: "Scholastik: Thomas von Aquin",
    body:
      "Integration von Aristoteles und christlicher Lehre. Drei Seelenarten (vegetativ, sensitiv, intellektiv). Geistseele von Gott geschaffen, nicht an Materie gebunden, überdauert den Tod. Universitäten bilden sich heraus; Philosophie wird in Teildisziplinen differenziert."
  },
  {
    title: "Aufklärung: Rationalismus (Descartes)",
    body:
      "Vernunft als Quelle des Wissens; Dualismus: res extensa (Körper) vs. res cogitans (Geist). ‚Cogito, ergo sum‘. Zirbeldrüse als hypothetischer Kopplungsort; mechanistisches Menschenbild; Misstrauen gegenüber Sinnen. Gegenposition: Monismus (Spinoza) – Einheit von Körper und Geist."
  },
  {
    title: "Aufklärung: Empirismus (Locke, Hume)",
    body:
      "Locke: Geist als tabula rasa; Erkenntnis durch Sensation (Sinnesdaten) und Reflexion. Hume: Assoziation als Ordnungsprinzip – Ähnlichkeit und Kontiguität verbinden Ideen. Basis für Assoziationstheorie."
  },
  {
    title: "Kant: Brücke und Skepsis",
    body:
      "Erkenntnis entsteht durch Verknüpfung von Sinneseindrücken und Verstandeskategorien. Forderte Eindeutigkeit/Beständigkeit. Urteilte: Psychologie sei schwer ‚mathematisierbar‘ → nur beschreibend. (Wurde später durch Herbart/Fechner relativiert.)"
  },
  {
    title: "Populär‑ und Fachpsychologie: K. P. Moritz",
    body:
      "Magazin für Erfahrungsseelenkunde (Ende 18. Jh.). Rubriken: Seelennatur‑/‑zeichen‑/‑krankheits‑/‑heilkunde. Wegbereiter fachlicher Zeitschriften und wissenschaftlicher Öffentlichkeit."
  },
  {
    title: "Physiognomik & Phrenologie",
    body:
      "Physiognomik (Lavater): Charakter aus Gesichts‑/Körpermerkmalen ableiten – historisch, heute verworfen. Phrenologie (Gall): Schädelstruktur ↔ geistige Fähigkeiten – falsch; aber frühe Idee der funktionalen Spezialisierung (heute: z. B. Broca‑Areal)."
  },
  {
    title: "Positivismus (Comte)",
    body:
      "Forderung: ausschl. überprüfbare Tatsachen; Metaphysik raus; Theorien aus Beobachtung ableiten; Wissenschaft unvollendet; Fokus auf Zählung/Messung. Einfluss auf behavioristische Methodik."
  },
  {
    title: "Darwinismus",
    body:
      "Variation, Mutation, Selektion → Anpassung. Konsequenz: Mensch‑Tier‑Kontinuität → Vergleichende Psychologie, Tierversuch. Evolutionärer Rahmen für Funktionserklärungen."
  },
  {
    title: "Medizin/Physiologie & Universitäten (19. Jh.)",
    body:
      "Zelltheorie, Röntgen, Humangenetik; Fortschritte zu Nerven‑/Hormon‑/Kreislauf‑System. Humboldt‑Modell: Einheit von Forschung & Lehre, akademische Freiheit, Spezialisierung statt Universalgelehrter."
  },
  {
    title: "Herbart: Mathematisierung des Geistigen",
    body:
      "Vorstellungen haben ‚kraftähnlichen‘ Charakter; lassen sich in Statik/Mechanik modellieren. Widerlegt Kants Skepsis gegenüber Exaktheit. Legt empirisches Fundament für eine wissenschaftliche Psychologie."
  },
  {
    title: "Helmholtz: Sinnesphysiologie",
    body:
      "Optik (Auge, Netzhaut, Sehnerven), Farbwahrnehmung; Messung der Nervenleitgeschwindigkeit. Erkennt: Beobachtung ist erfahrungsabhängig (Erwartungen/Vorerfahrung). Methodische Präzision, Apparate."
  },
  {
    title: "Fechner: Psychophysik",
    body:
      "Äußere Psychophysik: physikalischer Reiz ↔ Empfindung; innere Psychophysik: Körpererregung ↔ Empfindung. Grenzmethode/ebenmerkliche Unterschiede; Schwellen, unbewusste Wahrnehmung. Experimente als Ausgangspunkt für Theorie."
  },
  {
    title: "Wundt: Labor und Programm",
    body:
      "1879, Leipzig: erstes Labor für experimentelle Psychologie. Inhalte: Wahrnehmung, Reaktionszeiten, Apperzeption (Aufmerksamkeitszentrierung). Zwei Stränge: experimentelle Psychologie und Völkerpsychologie (Sprache, Kultur, Sitten – nicht experimentell). Mitbegründer des Strukturalismus. Bedeutende Schüler:innen: Cattell (Tests), Külpe (Würzburger Schule), Meumann (Pädagogische Psychologie), Münsterberg (A&O), Witmer (erste psychologische Klinik)."
  },
  {
    title: "Introspektion – kontrolliert",
    body:
      "Selbstbeobachtung als Methode: systematisch, trainiert, unter Laborbedingungen (kurze, klar definierte Inhalte). Grenzen: höhere Denkvorgänge schwer erfassbar; führte zu methodischen Debatten."
  },
  {
    title: "Zeitgenossen: Ebbinghaus & James",
    body:
      "Ebbinghaus: Gedächtnis, sinnlose Silben, Lern‑/Vergessenskurven. William James: Funktionalismus (Funktion des Bewusstseins), Emotion, ‚I/Me‘‑Selbst, Etablierung der US‑Psychologie."
  },
  {
    title: "Verstehen vs. Erklären: Dilthey",
    body:
      "Geisteswissenschaftliche Psychologie (Hermeneutik) betont Sinn‑/Motivationszusammenhänge (verstehend) statt Kausalreduktion (erklärend). Kontroverse mit Experimentalpsychologen (Ebbinghaus)."
  },
  {
    title: "Institutionalisierung",
    body:
      "Gründung der APA (1892) und DGP (1904); Fachzeitschriften (ab 1881 ff.). Internationale Vernetzung; Labore entstehen weltweit (Schüler Wundts)."
  },
  {
    title: "Psychologie im Nationalsozialismus",
    body:
      "Rassistische Politik an Unis; Emigration zahlreicher Forscher:innen (z. B. Wertheimer, Lewin, Freud). Diagnostik gewinnt an Bedeutung (Wehrmacht‑Auslese). Inhalte politisch verzerrt (Rassenpsychologie). Nach 1945: Wiederaufbau (DGP in Besatzungszonen), 1946 Berufsverband deutscher Psychologen; später Gründung der Österreichischen Gesellschaft für Psychologie (ÖGP, 1993)."
  },
  {
    title: "Würzburger Schule",
    body:
      "Oswald Külpe: Wie laufen Denkprozesse ab? Methodisch kontrollierte Introspektion auch für höheres Denken (Denksportaufgaben). Kritik aus Leipzig; Wegbereiter für Kognitionsforschung."
  },
  {
    title: "Gestaltpsychologie",
    body:
      "Wertheimer, Köhler, Koffka, Lewin: ‚Das Ganze ist etwas Anderes als die Summe seiner Teile.‘ Gestaltgesetze (Nähe, Ähnlichkeit, gute Fortsetzung, Geschlossenheit). Lewins Feldtheorie: Verhalten = f(Person, Umwelt); Lebensraum, Valenzen."
  },
  {
    title: "Behaviorismus",
    body:
      "Watson: Fokus auf beobachtbares Verhalten; Gegenreaktion auf Introspektion. Pawlow: klassisches Konditionieren. Thorndike: Law of Effect. Skinner: operantes Konditionieren (Verstärkung/Bestrafung). Hull: Neobehaviorismus (Organismusvariable). Stärken: Objektivität; Grenze: ‚Black Box‘."
  },
  {
    title: "Tiefenpsychologie",
    body:
      "Freud: Psychoanalyse – Unbewusstes, Triebe, Ich/Es/Über‑Ich, Abwehrmechanismen, Träume. Adler: Individualpsychologie (Geltungsstreben, Gemeinschaftsgefühl). Jung: Analytische Psychologie (Libido als Lebensenergie, kollektives Unbewusstes, Archetypen). Wirkung auf Klinik und Kultur."
  },
  {
    title: "Kognitive Wende (ab 1950er)",
    body:
      "Hixon‑Symposium (1948); 1956 MIT: Miller (7±2), Chomsky (generative Grammatik), Newell/Simon (Logiktheorie‑Maschine). Subjektive Innenwelt, Informationsverarbeitung, mentale Repräsentationen treten in den Fokus."
  },
  {
    title: "Kybernetik & Modelle",
    body:
      "Broadbent: Filter, begrenzte Kapazität; Mensch als Informationsverarbeiter. Miller et al.: TOTE‑Modell (Test‑Operate‑Test‑Exit) als Schema zielgerichteten Handelns. Internale Ziele + externe Bedingungen in Regelkreisen."
  },
  {
    title: "Konnektionismus",
    body:
      "Rumelhart & McClelland (1986): Parallele, verteilte Verarbeitung in Netzwerken (Units, Verbindungen, Schichten). Erklärt z. B. Muster/Fehler, Reorganisation nach Hirnschäden. Kein vollständiger Paradigmenwechsel, aber wichtige Modellierungs‑Methodik."
  },
  {
    title: "Zusammenführung & Transfer",
    body:
      "Historische Linien erklären heutige Vielfalt: Mehrere Perspektiven koexistieren und ergänzen sich. Prüfe dich: Kannst du Dualismus/Monismus, Empirismus/Rationalismus unterscheiden? Fechner/Wundt verorten? Gestaltgesetze benennen? Kernideen von Behaviorismus, Psychoanalyse, kognitiver Wende erklären?"
  }
]

// Map ergänzen
summaryByChapter[2] = chapter2SummarySteps

// Schrittweise Zusammenfassung – Kapitel 3 (≈ 24–26 Steps ≈ 25 Minuten Lesedauer)
export const chapter3SummarySteps: { title: string; body: string }[] = [
  {
    title: "Kompass & Überblick",
    body:
      "Kapitel 3 führt in Forschung und Methodenlehre ein: Unterschied Alltags- vs. Wissenschaftspsychologie, Standards der Wissenschaftlichkeit, Forschungsprozess (Fragen → Planung → Experiment/Erhebung → Statistik), Operationalisierung, Stichproben/Designs sowie Grundzüge des Experiments und der deskriptiven Statistik."
  },
  {
    title: "Alltag vs. Wissenschaft",
    body:
      "Alltagspsychologie stützt sich auf individuelle Erfahrungen und ‚Lebensweisheiten‘; die wissenschaftliche Psychologie prüft Aussagen systematisch mit Methoden, zielt auf prüfbare, replizierbare Befunde – häufig entgegen dem Bauchgefühl."
  },
  {
    title: "Heuristiken (Faustregeln)",
    body:
      "Heuristiken erlauben schnelle Urteile unter Zeit-/Informationsmangel (z. B. Repräsentativitätsheuristik). Nützlich, aber fehleranfällig: zwei Wurfserien K–K–K–K–K vs. K–Z–Z–K–Z sind gleich wahrscheinlich, obwohl eine ‚typischer‘ wirkt."
  },
  {
    title: "Kognitive Verzerrungen: Rückschaufehler",
    body:
      "Hindsight Bias: Im Nachhinein erscheint der Ausgang ‚vorhersehbar‘ (ich wusste es schon immer). Verzerrt Lernen aus Ergebnissen und überschätzt Sicherheit eigener Urteile."
  },
  {
    title: "Kognitive Verzerrungen: Confirmation Bias",
    body:
      "Bestätigungsfehler: Bevorzugtes Suchen/Deuten bestätigender Infos; widersprechende Hinweise werden abgewertet (z. B. selektive Lektüre zu Lieblingsfußballteam)."
  },
  {
    title: "Kritisches Denken",
    body:
      "Erster Schritt zur Wissenschaftlichkeit: systematisch fragen – Woher stammt die Info? Was ist genau gemeint? Welche Evidenz liegt vor? – statt Heuristiken/Intuition."
  },
  {
    title: "Wissenschaftliche Methode & Methodenlehre",
    body:
      "Methodenlehre liefert Regeln/Techniken, um präzise, möglichst fehlerarme Aussagen zu gewinnen und Alltagsfehler zu minimieren: passend wählen, korrekt anwenden, sauber dokumentieren."
  },
  {
    title: "Vier Standards der Wissenschaftlichkeit",
    body:
      "(1) Forschungsproblem empirisch/theoretisch tragfähig, (2) passender, methodenstrenger Forschungsprozess, (3) Ethik (keine Täuschung/Schädigung/Datenmanipulation), (4) vollständige, nachvollziehbare Dokumentation (Replizierbarkeit)."
  },
  {
    title: "Replikation & Open Science",
    body:
      "Direkte und konzeptionelle Replikationen prüfen Befunde; Replikationskrise → mehr Transparenz (Präregistrierung, Daten/Materialien teilen) zur Stärkung der Vertrauenswürdigkeit."
  },
  {
    title: "Qualitätskriterien einer Studie",
    body:
      "Relevanz (Erkenntnisgewinn/Anwendung), methodische Strenge (geeignete, regelkonforme Methoden), ethische Strenge, Präsentationsqualität (klare Berichte). Qualität entsteht im Zusammenspiel."
  },
  {
    title: "Quantitativ vs. qualitativ",
    body:
      "Quantitativ: Messung/Vergleich von Gruppen, Hypothesenprüfung, Statistik. Qualitativ: sinnverstehend/interpretativ, offene Antworten. Wahl abhängig von Paradigma und Fragestellung."
  },
  {
    title: "Hypothesenprüfender Prozess (7 Schritte)",
    body:
      "(1) Frage, (2) Theorie & Hypothesen, (3) Operationalisierung & Planung, (4) Erhebung, (5) Aufbereitung/Analyse, (6) Interpretation/Diskussion, (7) Publikation/Präsentation."
  },
  {
    title: "Theorien vs. Hypothesen",
    body:
      "Theorie: geordnete Begriffe/Aussagen zur Erklärung/Vorhersage. Hypothese: konkrete, prüfbare Vermutung (z. B. aus Piaget abgeleitet: ‚< 2 Jahre → keine Objektpermanenz‘). Zyklus: prüfen → Theorie weiterentwickeln oder anpassen."
  },
  {
    title: "Anforderungen an Hypothesen",
    body:
      "Präzise, widerspruchsfrei, prinzipiell widerlegbar (falsifizierbar), operationalisierbar und begründbar (Stand der Forschung). Vor der Datenerhebung formulieren."
  },
  {
    title: "Hypothesentypen: Unterschied",
    body:
      "Ungeri chtet: Gruppen unterscheiden sich. Gerichtet: Richtung spezifiziert (z. B. Linkshändigkeit häufiger bei Männern als Frauen)."
  },
  {
    title: "Hypothesentypen: Zusammenhang",
    body:
      "Kovariation zweier Variablen (positiv/negativ). Achtung: Korrelation ≠ Kausalität. Für Kausalität zusätzlich nötig: zeitliche Vorordnung und Ausschluss Alternativerklärungen."
  },
  {
    title: "Hypothesentypen: Veränderung",
    body:
      "Veränderung über Zeit (gleiche Personen, mehrere Messzeitpunkte), ungerichtet/gerichtet (z. B. Symptomatik sinkt nach Therapie)."
  },
  {
    title: "Operationalisierung: Merkmale → Variablen",
    body:
      "Latente Merkmale (nicht direkt messbar) benötigen manifeste Indikatoren und Messinstrumente. Beispiel Stress: subjektive Skala 0–10, Puls, Hormone. Festlegen WAS und WIE gemessen wird."
  },
  {
    title: "Messinstrumente & Gütekriterien",
    body:
      "Instrumentwahl (Fragebogen, Test, Apparatur). Güte: Objektivität (durchführungs-/auswertungs-/interpretationsunabhängig), Reliabilität (Zuverlässigkeit), Validität (misst, was es messen soll)."
  },
  {
    title: "Skalenniveaus (Informationsgehalt)",
    body:
      "Nominal (Kategorien, z. B. Nationalität), Ordinal (Rangordnung, z. B. Bildungsabschluss), Intervall (Abstände, z. B. °C, psych. Eigenschaften), Verhältnis/Ratio (Abstände + natürlicher Nullpunkt, z. B. Reaktionszeit, Kelvin)."
  },
  {
    title: "Diskret vs. kontinuierlich",
    body:
      "Diskret: abzählbare Kategorien (nominal/ordinal). Kontinuierlich: beliebige Werte auf Kontinuum (intervall/ratio). Antwortformat kann latente Quantität diskret machen (vorgegebene Kategorien) oder kontinuierlich (offene Zahl)."
  },
  {
    title: "Population, Stichprobe, Repräsentativität",
    body:
      "Population = Zielmenge; Stichprobe = untersuchte Teilmenge. Repräsentativität sichert Übertragbarkeit (externe Validität). Zufallsstichprobe ideal, Praxis oft Gelegenheitsstichprobe → Selection Bias möglich. Stichprobengröße: hinreichend, aber ressourcenschonend."
  },
  {
    title: "Studiendesigns & Settings",
    body:
      "Between- vs. Within-Subjects; Labor (Kontrolle) vs. Feld (Alltagsnähe). Interne Validität (kausal eindeutig) vs. externe Validität (Übertragbarkeit) – oft Trade-off."
  },
  {
    title: "Experiment: Kernelemente",
    body:
      "UV wird systematisch variiert (manipuliert), AV gemessen; Störvariablen kontrollieren/balancieren. Randomisierung (Zufallszuteilung) zentral; ohne Randomisierung → Quasi-Experiment. Parallelisieren bei kleinen N möglich."
  },
  {
    title: "Erwartungseffekte & Kontrolle",
    body:
      "Reaktivität/Hawthorne: Beobachtetwerden verändert Verhalten. Placebo/Nocebo: Erwartungen wirken. Rosenthal-Effekt: Erwartungen der Leitung. Gegenmittel: Coverstory (ethisch prüfen), schwer verfälschbare/implizite Maße, Blind-/Doppelblind-Designs."
  },
  {
    title: "Deskriptive Statistik: Häufigkeiten",
    body:
      "Absolute/relative/prozentuale Häufigkeiten (diskrete Variablen), Gruppierung bei kontinuierlichen Variablen, Histogramme. Immer angeben, welche Häufigkeitsart berichtet wird."
  },
  {
    title: "Zentral- & Streuungsmaße",
    body:
      "Modalwert, Median, arithm. Mittel (ab Intervall). Streuung: Interquartilsabstand, Varianz, Standardabweichung. Median robust gegen Ausreißer; Mittel nicht."
  },
  {
    title: "Zusammenhang: r richtig lesen",
    body:
      "Kovarianz → standardisiert zu r ∈ [−1,1]. r ≈ 0: kein linearer Zusammenhang; |r| hoch: starkerer linearer Trend. r quantifiziert Zusammenhang, belegt aber keine Kausalität."
  }
]

// Map ergänzen
summaryByChapter[3] = chapter3SummarySteps

// Kompakter Review (≈ 15 Minuten) – Kapitel 3
export const chapter3ReviewSteps: { title: string; body: string }[] = [
  { title: "Kompass: Warum Methodenlehre?", body: "Sie minimiert Alltagsfehler (Heuristiken/Verzerrungen) und ermöglicht prüfbare, replizierbare Erkenntnisse." },
  { title: "Alltag vs. Wissenschaft", body: "Alltag: erfahrungsbasiert, heuristisch. Wissenschaft: systematisch, theoriegeleitet, replizierbar." },
  { title: "Heuristiken & Verzerrungen", body: "Repräsentativitätstäuschung; Hindsight Bias; Confirmation Bias – nützlich, aber fehleranfällig." },
  { title: "Standards der Wissenschaftlichkeit", body: "(1) Tragfähiges Problem, (2) passender Prozess, (3) Ethik, (4) vollständige Dokumentation/Replikation." },
  { title: "Replikation & Qualität", body: "Direkt/konzeptionell; Replikationskrise → Transparenz. Qualität = Relevanz + method./eth. Strenge + klare Berichte." },
  { title: "Forschungsprozess (7 Schritte)", body: "Frage → Theorie/Hypothesen → Operationalisierung/Planung → Erhebung → Aufbereitung/Analyse → Interpretation → Publikation." },
  { title: "Hypothesen – Anforderungen", body: "Präzise, widerspruchsfrei, falsifizierbar, operationalisierbar, begründet (Stand der Forschung)." },
  { title: "Hypothesentypen", body: "Unterschied (Gruppen), Zusammenhang (Kovariation), Veränderung (Zeit; gleiche Personen)." },
  { title: "Kausalität – 3 Bedingungen", body: "Kovariation, Ursache zeitlich vor Wirkung, Ausschluss Alternativerklärungen (Kontrolle)." },
  { title: "Operationalisierung & Variablen", body: "Latent → manifeste Indikatoren + Messinstrument; Variable = operationalisiertes Merkmal." },
  { title: "Gütekriterien", body: "Objektivität (Unabhängigkeit), Reliabilität (Zuverlässigkeit), Validität (misst das intendierte Konstrukt)." },
  { title: "Skalen & Variablen", body: "Nominal/Ordinal/Intervall/Verhältnis; diskret vs. kontinuierlich; Antwortformat beeinflusst Messniveau." },
  { title: "Stichprobe & Repräsentativität", body: "Population vs. Stichprobe; Zufall ideal, Gelegenheitsstichprobe praktisch → Selection Bias möglich." },
  { title: "Design/Settings", body: "Between vs. Within; Labor (Kontrolle) vs. Feld (Alltagsnähe); interne vs. externe Validität." },
  { title: "Experiment & Kontrolle", body: "UV manipulieren, AV messen; Konstanthalten/Balancieren/Randomisieren; Blind/Doppelblind gegen Erwartungen." },
  { title: "Deskriptive Statistik", body: "Häufigkeiten; Lage (Modalwert, Median, Mittel); Streuung (IQA, Varianz, SD)." },
  { title: "Korrelation r", body: "r ∈ [−1,1]; Stärke/Richtung linearer Zusammenhang; beweist keine Kausalität." }
]

// Optional: Registry für kompakte Reviews
export const reviewSummaryByChapter: Record<number, { title: string; body: string }[]> = {
  3: chapter3ReviewSteps
}


// Schrittweise Zusammenfassung – Kapitel 4 (≈ 25 Minuten Lesedauer)
export const chapter4SummarySteps: { title: string; body: string }[] = [
  { title: "Kompass & Überblick", body: "Biologische Psychologie: erforscht körperliche/neurale Grundlagen psychischer Prozesse. Themen: Neuron/Glia, Ruhe-/Aktionspotenzial, Synapse/Transmitter, Aufbau ZNS/PNS, visuelles System." },
  { title: "Warum Biologie in Psychologie?", body: "Psychische Phänomene beruhen auf biologischen Prozessen (Gene, Nerven-, Hormon- und Immunsystem). Andere Teilgebiete (z. B. Klinische, Allgemeine) stützen sich darauf." },
  { title: "Leitfragen des Fachs (Beispiele)", body: "Wie gelangen Sinnesinfos ins Gehirn? Wie wirken Drogen? Was bewirken Hormone/Stress? Welche Prozesse ermöglichen Lernen/Gedächtnis? Wozu dienen Schlaf/Träume?" },
  { title: "Begriffe abgrenzen", body: "Biologische Psychologie = Biopsychologie (synonym). Teil der Neurowissenschaften (interdisziplinär). Psychobiologie: biologisches Teilgebiet mit Fokus auf psychologische Auswirkungen biologischer Prozesse." },
  { title: "Hauptbereiche (1): Physiologische Psychologie", body: "Direkte Eingriffe/Stimulationsmethoden (teils Tiermodelle), um neuronale Mechanismen des Verhaltens kausal zu prüfen." },
  { title: "Hauptbereiche (2): Neuropsychologie", body: "Folgen von Hirnschädigungen beim Menschen; Diagnostik, Reha; Ableitung von Funktions‑Lokalisation und kognitiven Architekturen." },
  { title: "Hauptbereiche (3): Psychophysiologie", body: "Nicht‑invasive Messung (EEG, EMG, EOG, EKG). Typische Themen: Stress, Emotion, Rhythmen. Körperreaktionen ↔ psychische Prozesse." },
  { title: "Hauptbereiche (4): Kognitive Neurowissenschaft", body: "Neuronale Grundlagen von Kognition (Wahrnehmung, Gedächtnis, Sprache) – v. a. Bildgebung (fMRT, MRT), auch MEG/EEG, TMS." },
  { title: "Hauptbereiche (5): Psychopharmakologie", body: "Medikamente/Drogen beeinflussen Aktivität/Verhalten; Entwicklung neuer Wirkstoffe; interdisziplinär (Psychologie, Medizin, Pharmakologie)." },
  { title: "Hauptbereiche (6): Vergleichende Psychologie", body: "Vergleich von Spezies → Evolution, Genetik, adaptive Verhaltensweisen; Tiermodelle als Brücke zum Menschen." },
  { title: "Fallstudie: Phineas Gage", body: "Stangenunfall (1848) zerstört linken vorderen Frontallappen → intakte Sprache/Intelligenz, aber massive Persönlichkeits‑/Impulskontrollprobleme → Beitrag zur Funktionsspezialisierung (Präfrontalcortex)." },
  { title: "Fallstudie: Patient ‚Tan‘ (Broca)", body: "Broca fand Läsion im linken Frontallappen (Broca‑Areal) bei Störung der Sprachproduktion (Broca‑Aphasie), Sprachverständnis weitgehend erhalten → Lokalisation sprachlicher Funktionen." },
  { title: "Neuron – Grundbaustein", body: "Soma (Zellkern/Organellen), Dendriten (Empfang), Axon (Weiterleitung), Axonterminale (Synapse). Typen: sensorisch, Inter‑, Motorneurone; Vielfalt in Form/Länge/Verzweigung." },
  { title: "Gliazellen – mehr als Stütze", body: "Astrozyten (Stoffwechsel, Blut‑Hirn‑Schranke), Oligodendrozyten/Schwann‑Zellen (Myelin), Mikroglia (Immunfunktion), Müller‑Zellen (Retina). Beeinflussen Signalumgebung, Transmitter, Ionenhaushalt." },
  { title: "Myelin & Ranvier‑Schnürringe", body: "Myelin isoliert Axone → schnellere saltatorische Leitung. Ranvier‑Schnürringe als ‚Sprungpunkte‘. MS: Autoimmun → Demyelinisierung, Leitungsstörungen (Sehen, Motorik, Sensibilität)." },
  { title: "Ruhepotenzial (≈ −70 mV)", body: "Ungleiche Ionenverteilung (Na+ außen, K+ innen, Cl− außen), selektive Permeabilität, Diffusions‑ und Potenzialgradient, Na+/K+‑Pumpe (3 Na+ raus/2 K+ rein) stabilisieren Ruhe." },
  { title: "Exzitation vs. Inhibition", body: "EPSP (Depolarisation Richtung Schwelle) ↑ Feuerrate; IPSP (Hyperpolarisation) ↓ Feuerrate. Summation am Axonhügel entscheidet über Aktionspotenzial (Alles‑oder‑Nichts, Schwelle ca. −55 mV)." },
  { title: "Aktionspotenzial – Phasen", body: "Spannungsgesteuerte Na+‑Kanäle öffnen → Aufstrich/Overshoot (~+50 mV); Na+ inaktiviert; verzögert öffnen K+‑Kanäle → Repolarisation; Nachpotenzial/relative Refraktärphase; Refraktär verhindert Rücklauf." },
  { title: "Fortleitung am Axon", body: "Kontinuierlich (unmyelinisiert) vs. saltatorisch (myelinisiert). In Myelinsegmenten passiv, an Schnürringen aktive Regeneration (viele Na+‑Kanäle). Abstand der Schnürringe begrenzt." },
  { title: "Synapse – chemische Übertragung", body: "AP in Terminale → spannungsabhängige Ca2+‑Kanäle öffnen → Exozytose aus Vesikeln → Transmitter in Spalt → postsynaptische Rezeptoren öffnen Kanäle → EPSP/IPSP → Abbau/Rückaufnahme/Glia‑Aufnahme." },
  { title: "Elektrische Synapsen", body: "Gap Junctions (kanalbildende Verbindungen) ermöglichen sehr schnelle, meist bidirektionale Übertragung kleiner Moleküle/Ionen; im ZNS seltener als chemische." },
  { title: "Neurotransmitter – Überblick", body: "Glutamat (exzitatorisch; Lernen/Gedächtnis), GABA (inhibitorisch; Anxiolyse via Benzodiazepine), Dopamin (Belohnung/Motivation, Motorik; M. Parkinson = Dopaminmangel), Serotonin (Emotion/SSRI), Acetylcholin (motorische Endplatte, Kognition/Schlaf), Noradrenalin (Erregung/Alertness)." },
  { title: "ZNS vs. PNS", body: "ZNS: Gehirn, Rückenmark (Integration/Koordination). PNS: außerhalb von Schädel/Wirbelsäule; somatisches (Sinnesinput ↔ Skelettmuskeln) und autonomes NS (Organe/Drüsen)." },
  { title: "Rückenmark – Aufbau & Reflexe", body: "Graue Substanz (H‑förmig: Hinter‑/Vorderhörner), weiße Substanz (auf‑/absteigende Bahnen). Spinalnerven/Dermatome. Reflexe (z. B. Patellarsehne) auch ohne Kortexbeteiligung." },
  { title: "Gehirn – Entwicklungsgliederung", body: "Aus Neuralrohr: Prosencephalon (→ Telencephalon/Diencephalon), Mesencephalon, Rhombencephalon (→ Metencephalon/Myelencephalon)." },
  { title: "Nachhirn/Medulla oblongata", body: "Zentrum lebenswichtiger Funktionen (Atmung, Herz, Blutdruck); Kreuzung vieler Bahnen (Kontralateralität). Läsionen oft letal." },
  { title: "Hinterhirn: Pons & Cerebellum", body: "Pons als Durchgang/Schaltstelle. Cerebellum koordiniert Motorik/Feinabstimmung (Eingänge aus RM, Gleichgewicht, Kortex)." },
  { title: "Mittelhirn – Tectum/Tegmentum", body: "Tectum: visuo‑/audit. Reflexe; Tegmentum: periaquäduktales Grau (Schmerz), Substantia nigra (Dopamin, Bewegung)." },
  { title: "Zwischenhirn – Thalamus/Hypothalamus", body: "Thalamus: sensorisches Relais (außer Geruch), CGL für Sehen. Hypothalamus: Homöostase, Hormone (Hypophyse), motivationale Steuerung (Essen, Schlaf, Sexualität)." },
  { title: "Großhirn – Cortex & Balken", body: "Telencephalon: zwei Hemisphären, verbunden via Corpus callosum; Cortex stark gefaltet (graue Substanz 2–5 mm)." },
  { title: "Vier Lappen – Kerndefinitionen", body: "Frontal (Planung, Sprache, Sozialverhalten, Motorik), Parietal (Somatosensorik, Raum/Aufmerksamkeit), Temporal (Hören, Objekterkennung; Hippocampus/Amygdala), Okzipital (Sehen)." },
  { title: "Lateralisation & Split‑Brain", body: "Hemisphären teilen Arbeit (Sprache oft links, Raum eher rechts); Split‑Brain zeigt getrennte Verarbeitung bei durchtrenntem Balken (z. B. Benennprobleme für links dargebotene Reize)." },
  { title: "Autonomes NS: Sympathikus/Parasympathikus", body: "Sympathikus: Aktivierung (‚fight/flight‘: Puls, Atmung ↑, Verdauung ↓). Parasympathikus: Erholung/Normalbetrieb (Puls ↓, Verdauung ↑)." },
  { title: "Visuelles System – Auge (Anatomie)", body: "Äußere/innere Häute: Cornea/Hornhaut (lichtdurchlässig), Iris/Pupille (Blende), Linse (Akkommodation), Glaskörper, Retina (Photorezeptoren), Sehnerv (Blinder Fleck)." },
  { title: "Retina – Zellschichten", body: "Photorezeptoren (Stäbchen/Zapfen) → Bipolarzellen → Ganglienzellen (Axone bilden Sehnerv); Horizontal-/Amakrinzellen modulieren. Müller‑Glia leitet Licht." },
  { title: "Stäbchen vs. Zapfen", body: "Stäbchen: sehr lichtempfindlich (Dämmerung), keine Farbe. Zapfen: Farb‑/Detailsehen bei Helligkeit; drei Typen (blau/grün/rot). Fovea: höchste Schärfe (viele Zapfen)." },
  { title: "Transduktion & Farbwahrnehmung", body: "Photopigmente im Außenglied → Licht → elektrische Antwort; Farbe aus relativer Aktivität von drei Zapfentypen. Farbfehlsichtigkeit: v. a. Rot‑Grün‑Schwäche (genetisch, häufiger bei Männern)." },
  { title: "Sehbahn – Chiasma & CGL", body: "Sehnerven vereinigen sich am Chiasma opticum; nasale Fasern kreuzen (kontralateral). Rechtes CGL: linkes Gesichtsfeld (beider Augen), linkes CGL: rechtes Gesichtsfeld. Retinotope Organisation, stärkere Repräsentation Fovea." },
  { title: "Primärer visueller Cortex (V1)", body: "Lokalisation im Okzipitallappen; retinotop, Schichten/Spalten; orientierungs‑ und richtungssensitive Neurone (Hubel & Wiesel). Weitere ‚höhere‘ Areale (V2, V3 …) für komplexere Verarbeitung." },
  { title: "Navigationsbegriffe (kurz)", body: "Anterior/posterior, dorsal/ventral, superior/inferior, medial/lateral, ipsi‑/kontralateral – wichtig für Lagebeschreibung (z. B. Sehbahn kreuzt kontralateral)." },
  { title: "Kernideen vernetzen", body: "Psychische Funktionen entstehen aus verteilten Netzwerken; Lokalisation ist relativ (Aufgaben nutzen viele Areale). Methodenvielfalt + Fallstudien + Bildgebung erklären Zusammenspiel." }
]

// Map ergänzen
summaryByChapter[4] = chapter4SummarySteps

// Schrittweise Zusammenfassung – Kapitel 5 (≈ 24–26 Steps ≈ 25 Minuten Lesedauer)
export const chapter5SummarySteps: { title: string; body: string }[] = [
  { title: "Kompass & Abgrenzung", body: "Allgemeine Psychologie: grundlegende, universelle psychische Funktionen bei gesunden Erwachsenen. Nicht Differenzielle (Unterschiede), nicht Entwicklungs‑ (Veränderungen), nicht Sozial‑ (Einfluss anderer)." },
  { title: "Kognitive Wende → Ansatz", body: "Kognitive Psychologie erklärt mentale Prozesse (Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken/Entscheiden) mit Theorien/Experimenten als Gegenreaktion zum Behaviorismus." },
  { title: "Prozesskette (Abbildung 5.2)", body: "Reizaufnahme → Aufmerksamkeit/Selektion → Einbettung in Vorwissen/Erwartungen (mentale Modelle) → Emotion/Motivation → Klassifikation/Urteil/Entscheidung → Handlung; Sprache als Ausdruck/Kommunikation." },
  { title: "Wahrnehmung – 3 Stufen", body: "(1) Sensorische Empfindung (Transduktion) (2) Wahrnehmung i. e. S. (Perzept als integriertes mentales Abbild) (3) Klassifikation in Kategorien (z. B. ‚Arzt/Ärztin‘)." },
  { title: "Einflussfaktoren", body: "Vorwissen, Vorerfahrung, Bewertungen, Erwartungen und Emotionen lenken Aufmerksamkeit und prägen Wahrnehmung (z. B. Spinnenangst)." },
  { title: "Psychophysik – Schwellen", body: "Absolutschwelle = kleinste Intensität für Detektion; Unterschiedsschwelle = minimaler Differenzbetrag; abhängig von Ausgangsintensität." },
  { title: "Methoden der Schwellenmessung", body: "Grenzmethode (auf/absteigend), Konstanzmethode (zufällige Intensitäten) → psychometrische Funktion; 50%‑Kriterium als Schwelle." },
  { title: "Signalentdeckungstheorie", body: "Detektion = Sensitivität + Entscheidungskriterium (Antworttendenz). Ausgänge: Treffer, Verpasser, falscher Alarm, korrekte Zurückweisung." },
  { title: "Unaufmerksamkeitsblindheit", body: "Fokus bindet Verarbeitung: Unerwartete, nicht beachtete Ereignisse (‚Gorilla‘) bleiben oft unbemerkt – selektive Aufmerksamkeit definiert Bewusstes." },
  { title: "Endogen vs. exogen", body: "Endogen: willentlich, wissens-/erwartungsbasiert. Exogen: reizgetrieben (peripheres Aufleuchten, Name). Beide modulieren Wahrnehmung." },
  { title: "Cueing – Zeitdynamik", body: "Valid < Neutral < Invalid (RT). Endogen wirksam ab ~200 ms, hält länger; exogen wirksam schon ~50 ms, klingt schneller ab." },
  { title: "Selektive Aufmerksamkeit – Cocktailparty", body: "Zielgerichtetes Folgen eines Kanals trotz Störkulisse; saliente Reize (eigener Name) reißen Aufmerksamkeit um – Kosten beim Rückwechsel." },
  { title: "Dichotisches Hören / Split‑Span", body: "Beschatteter Kanal wird erinnert, der andere kaum; ohrweise Reproduktion leichter als paarweise → frühe, physikalische Selektion/Trennung." },
  { title: "Farbe – Dreifarbentheorie", body: "Drei Zapfentypen (spektral sensitiv); jede Farbe aus Mischung; erklärt Farbmischung und viele Fehlsichtigkeiten." },
  { title: "Farbe – Gegenfarbentheorie", body: "Gegenpaare Rot–Grün, Blau–Gelb, Schwarz–Weiß; gegensinnige Reaktionen erklären Nachbilder und Unmöglichkeit ‚grünliches Rot‘." },
  { title: "Tiefenwahrnehmung – monokular", body: "Linienperspektive, relative Größe, Verdeckung, atmosphärische Perspektive – starke Hinweise in 2D‑Bildern." },
  { title: "Tiefenwahrnehmung – binokular", body: "Konvergenz, Akkommodation (nah), Querdisparation → Stereotiefe (Autostereogramme)." },
  { title: "Ames‑Raum", body: "Manipulierte Tiefenhinweise → falsche Entfernungsschätzung → Größentäuschung (‚Riese vs. Zwerg‘)." },
  { title: "Zwei visuelle Pfade", body: "Ventral = ‚Was‘ / Vision for Perception (Objekterkennen). Dorsal = ‚Wie‘ / Vision for Action (Greifen/Steuern). Evidenz: doppelte Dissoziationen." },
  { title: "Lernen – Definition", body: "Erfahrungsbasierte, relativ überdauernde Verhaltensänderung/‑potenzial (nicht Reifung/Ermüdung/Drogen); Auftreten probabilistisch, kontextabhängig." },
  { title: "Nicht‑assoziativ: Habituation/Sensitivierung", body: "Habituation: Reaktionsabnahme auf wiederholten irrelevanten Reiz. Sensitivierung: Zunahme v. a. bei aversiven Reizen (Alarmfunktion)." },
  { title: "Klassische Konditionierung – Ablauf", body: "UCS→UCR; CS+UCS‑Paarung → CS→CR. Erwerb; Löschung (CS ohne UCS); Spontanremission; Generalisierung vs. Diskrimination (Training)." },
  { title: "Operante Konditionierung – Kerne", body: "Gesetz des Effekts (Thorndike): Konsequenzen steuern Häufigkeit. Skinner‑Box: systematische Verstärkung/Bestrafung; Pläne/Signale möglich." },
  { title: "Verstärkung/Bestrafung – 4‑Feld", body: "Pos./Neg. Verstärkung erhöhen Verhalten (angenehm hinzu vs. unangenehm weg). Pos./Neg. Bestrafung senken Verhalten (unangenehm hinzu vs. angenehm weg)." },
  { title: "Beobachtungslernen (Bandura)", body: "Imitationslernen; stellvertretende Konsequenzen steuern Ausführung (Belohnung > Tadel). Aktiver Lerner: kognitiv/sozial eingebettet." },
  { title: "Gedächtnis – Prozess & Modelle", body: "Enkodierung → Speicherung → Abruf. Drei‑Speicher (sensorisch/KZG/LZG) als Rahmen; Arbeitsgedächtnis (Zentrale Exekutive, phonologische Schleife, visuo‑räuml. Notizblock, episodischer Puffer)." },
  { title: "LZG – Systeme & Effekte", body: "Explizit (semantisch/episodisch) vs. implizit (prozedural, Konditionierung, Priming). Enkodierspezifität (Kontext/Stimmung), serieller Positionseffekt, Vergessenskurve, Interferenz (pro/retro)." }
]

// Map ergänzen
summaryByChapter[5] = chapter5SummarySteps
 
// Schrittweise Zusammenfassung – Kapitel 6 (≈ 24–26 Steps ≈ 25 Minuten Lesedauer)
export const chapter6SummarySteps: { title: string; body: string }[] = [
  { title: "Kompass & Abgrenzung", body: "Entwicklungspsychologie untersucht Veränderungsprozesse über die gesamte Lebensspanne (pränatal → hohes Alter) auf biologischer, kognitiver, sprachlicher und sozialer Ebene. Fokus nicht nur Kindheit/Jugend; auch Erwachsenenalter relevant." },
  { title: "Lebensspannen‑Phasen (Tabelle 6.1)", body: "Pränatal; Säuglingsalter (0–1); frühe Kindheit (1–3); mittlere/späte Kindheit (3–11); Pubertät/Adoleszenz (11–20); frühes EA (20–40); mittleres EA (40–65); hohes EA (65+)." },
  { title: "Grunddebatten", body: "Anlage vs. Umwelt (Gene ↔ Erfahrungen) und Stufen vs. Kontinuität (diskontinuierliche Sprünge vs. graduelle Veränderungen). Moderne Sicht: wechselseitige Einflüsse; Mischung aus Stufen und kontinuierlichen Trends." },
  { title: "Pränatal I – germinal & embryonal", body: "Germinal (Befruchtung–2. Woche): Zygote, Zellteilung, Einnistung. Embryonal (3.–8. Woche): Zell‑Spezialisierung, Organanlagen; erster Herzschlag (~120–160/min). Erste Bewegungen (~7. Woche)." },
  { title: "Pränatal II – fötal & Gehirn", body: "Fötal (9. Woche–Geburt): massives Wachstum (Gewicht ~15 g → ~3,3 kg; Länge ~50 cm), Schlaf‑Wach, Bewegungen (ab ~16. Woche spürbar). Neurogenese (bis ~250k Neurone/min), Axon-/Dendritenwachstum; postnatal: Überproduktion + synaptic pruning." },
  { title: "Teratogene & sensible Phasen", body: "Externe Schädiger (biologisch/physikalisch/chemisch): Infektionen, Strahlung, Umweltgifte, Alkohol/Drogen, Medikamente (z. B. Thalidomid). Wirkung abhängig von Dosis, Dauer und Entwicklungsfenster (sensibel = hohes Wachstum)." },
  { title: "FAS/FASD & Umfeldfaktoren", body: "Fetale Alkoholeffekte: Gesichtsfehlbildungen, Wachstumsstörung, Herzfehler, motorisch‑kognitive Defizite (z. B. Aufmerksamkeit, Lernen). Niedriger SES, Mangelernährung, chronischer Stress/Missbrauch → erhöhte Risiken; pränatale Diagnostik unterstützt Früherkennung." },
  { title: "Frühe Kindheit – Reflexe & Sinne", body: "Such‑/Saugreflex dienen Nahrungsaufnahme; transiente frühkindliche Reflexe vs. lebenslange (Patellarsehne). Früh: Präferenz für Mutterstimme, ‑gesicht, ‑geruch; visuelle Präferenzen für Muster/Bewegung/Gesichter." },
  { title: "Tiefenwahrnehmung & Umwelt", body: "Visuelle Klippe (Gibson/Walk): Krabbelnde meiden scheinbare Tiefe → frühes Tiefenverständnis. Aktive Interaktion/Anregung fördern Entwicklung; Deprivation verändert Hirnwachstum und senkt kognitive Werte." },
  { title: "Adoleszenz – Reifung & Befinden", body: "Hormonumstellung (Östrogen/Progesteron; Testosteron); Menarche/Spermache; sekundäre Geschlechtsmerkmale, Wachstumsschübe. Psychisches Befinden (Selbstwert/Stress) teils belastet – große interindividuelle Varianz." },
  { title: "Erwachsenenalter – Körper & Kognition", body: "Langsamer Abbau (Reaktionszeit/Muskelkraft); Inflammaging (chronisch niedriggradige Entzündung) – Risiko für Erkrankungen. Menopause (~50 J.), Testosteronabfall. Schutzfaktoren: aktiv bleiben (Bewegung, Ernährung, kognitives Training)." },
  { title: "Postformales Denken", body: "Im frühen/mittleren EA: reflektiert‑abgewogen, antizipiert Folgen, toleriert Ambiguität; verknüpft mit Kreativität/Metaphern‑/Ironieverständnis. Reife Entscheidungen basieren auf Erfahrung + Emotionsregulation." },
  { title: "Piaget – Konstruktivismus & Schemata", body: "Kinder als aktive Wissenskonstrukteure: Schemata strukturieren Erfahrung. Assimilation: neue Info in Schema einpassen. Akkommodation: Schema anpassen. Lernen als Wechselspiel, motiviert durch Diskrepanzen." },
  { title: "Piaget – Stadien", body: "Sensumotorisch (0–2): Objektpermanenz. Präoperational (2–7): Sprache/Repräsentationen (Animismus/Realismus). Konkret‑operational (7–11): Logik über Konkretes, Reversibilität, Erhaltung. Formal‑operational (11+): Abstraktion, Hypothesenprüfung." },
  { title: "Piaget – Aktualisierungen", body: "Neuere Paradigmen (z. B. Blickdauer) deuten frühere Kompetenzen (Objektpermanenz ~3,5 Monate); Aufgabenkomplexität überschätzte teils Erwerbsalter; nicht alle Veränderungen klar stufig." },
  { title: "Theory of Mind", body: "Zuschreiben mentaler Zustände (Wünsche/Glauben). False‑Belief (Maxi): Ab ~4–6 Jahren korrekte Attribution der falschen Überzeugung (grüner Schrank), jüngere nutzen Eigenwissen (blauer Schrank)." },
  { title: "Moral – Kohlberg I", body: "Präkonventionell: Strafe/Belohnung; instrumentell (Eigennutz, Reziprozität)." },
  { title: "Moral – Kohlberg II", body: "Konventionell: zwischenmenschliche Erwartungen/Beziehungen; soziales System/Ordnung (internalisierte Normen)." },
  { title: "Moral – Kohlberg III", body: "Postkonventionell: sozialer Kontrakt/Rechte; universelle ethische Prinzipien über Gesetzen (wenige erreichen dauerhaft Stufe 5/6)." },
  { title: "Kohlberg – Kritik", body: "Fürsorge vs. Gerechtigkeit (Gilligan): Geschlechtsunterschiede gering. Kulturelle Generalisierbarkeit eingeschränkt (westliche Instrumente)." },
  { title: "Bindung – Strange Situation", body: "Typen: A (unsicher‑vermeidend: äußerlich ruhig, Cortisol hoch), B (sicher: weint bei Trennung, gut tröstbar), C (unsicher‑ambivalent: sucht Trost, nimmt ihn nicht an), D (unsicher‑desorganisiert: konfus, oft Trauma)." },
  { title: "Bindung – Wirkfaktoren & Transfer", body: "Elterliche Sensitivität zentral; Bindung über Generationen & Kulturen; Bindungsperson muss nicht Mutter sein (auch Vater/Großeltern/Betreuer)." },
  { title: "Erikson – psychosoziale Krisen", body: "Acht Krisen von Urvertrauen vs. Misstrauen bis Ich‑Integrität vs. Verzweiflung; erfolgreiche Bewältigung fördert nächste Stufe, Konflikte bleiben als Themen präsent." },
  { title: "Identität – Marcia", body: "Vier Status: diffus, übernommen (Foreclosure), moratorium (kritisch), erarbeitet (Achievement). Dimensionen: Exploration × Commitment; Ziel: kohärentes Selbst im Jugendalter." },
  { title: "Kognitive Alterung & Training", body: "65+: Leistungsrückgänge variieren; Fähigkeiten korrelieren stärker. Gesunde, aktive, geistig/sportlich eingebundene Ältere zeigen geringe Einbußen; Erkrankungen (Alzheimer/Parkinson) steigen im Risiko." },
  { title: "Transfer & Prüfe dich", body: "Kannst du Phasen benennen, Teratogene und sensible Perioden erklären, Piagets Kernkonzepte/Stadien skizzieren, False‑Belief erklären, Kohlberg/Erikson/Marcia zuordnen und Schutzfaktoren in der Alterung nennen?" }
]

// Map ergänzen
summaryByChapter[6] = chapter6SummarySteps

// Kompakter Review (≈ 15–18 Minuten) – Kapitel 5
export const chapter5ReviewSteps: { title: string; body: string }[] = [
  { title: "Worum geht’s (Abgrenzung)", body: "Allgemeine Psychologie untersucht grundlegende, universelle Funktionen bei gesunden Erwachsenen. Abgrenzung: nicht Differenziell (Unterschiede), nicht Entwicklungs‑ (Veränderungen), nicht Sozial‑ (Einfluss anderer)." },
  { title: "Kognitive Wende & Ansatz", body: "Mentale Repräsentationen & Informationsverarbeitung im Zentrum (Aufmerksamkeit, Wahrnehmung, Gedächtnis, Denken/Entscheiden). Experimente + Modelle; Anschluss an kognitive Neurowissenschaft." },
  { title: "Input‑Verarbeitung (Landkarte)", body: "Reizaufnahme → Aufmerksamkeit/Selektion → Top‑down‑Einbettung (Vorwissen/Erwartungen, Emotion/Motivation) → Klassifikation/Urteil/Entscheidung → Handlung; Sprache als Ausdruck/Koordination." },
  { title: "Wahrnehmung: 3 Stufen", body: "(1) Sensorische Empfindung (Transduktion über Rezeptoren) (2) Wahrnehmung i. e. S. (Perzept als integriertes mentales Abbild) (3) Klassifikation (Zuordnung zu Kategorien)." },
  { title: "Top‑down‑Einflüsse", body: "Vorwissen, Erwartungen, Bewertungen und Emotionen lenken Aufmerksamkeit & Interpretation (z. B. Angst → Bedrohungsfokus)." },
  { title: "Psychophysik – Schwellen/Methoden", body: "Absolutschwelle = kleinste Intensität für Detektion; Unterschiedsschwelle = minimaler Differenzbetrag (ausgangsabhängig). Grenz‑ vs. Konstanzmethode → psychometrische Funktion; 50%‑Kriterium als Schwelle." },
  { title: "Signalentdeckungstheorie (SDT)", body: "Detektion = Sensitivität + Entscheidungskriterium (Antworttendenz). Vier Ausgänge: Treffer, Verpasser, falscher Alarm, korrekte Zurückweisung. Ersetzt harte Schwelle durch probabilistische Entscheidung." },
  { title: "Aufmerksamkeit: Unaufmerksamkeitsblindheit", body: "Fokus bindet Verarbeitungskapazität: Unerwartete Ereignisse bleiben oft unbemerkt (‚Gorilla‘) → Aufmerksamkeit bestimmt, was bewusst wird." },
  { title: "Cueing (Posner)", body: "Valide < neutral < invalide Reaktionszeiten. Endogen (wissensgetrieben) wirkt ab ~200 ms und länger; exogen (reizgetrieben) wirkt schon ~50 ms, kürzer anhaltend. Fixation verhindert Augenbewegungs‑Konfundierung." },
  { title: "Selektive Aufmerksamkeit & Dichotisches Hören", body: "Cocktailparty‑Phänomen; beschatteter Kanal wird erinnert, unbeschatteter kaum. Split‑Span: ohrweise Reproduktion leichter als paarweise → frühe, physikalische Selektion." },
  { title: "Farbtheorien (Young‑Helmholtz & Hering)", body: "Trichromasie (3 Zapfentypen) erklärt Farbmischung/Fehlsichten; Gegenfarbentheorie (Rot‑Grün, Blau‑Gelb, Schwarz‑Weiß) erklärt u. a. Nachbilder. Ergänzende Ebenen der Verarbeitung." },
  { title: "Tiefe & Größe", body: "Monokulare Cues: Linienperspektive, relative Größe, Verdeckung, atmosphärische Perspektive. Binokular: Querdisparation, Konvergenz (Akkommodation für Nahes). Ames‑Raum: manipulierte Cues → Größentäuschung." },
  { title: "Zwei visuelle Pfade", body: "Ursprünglich: ventral = ‚Was‘, dorsal = ‚Wo‘. Goodale & Milner: ventral = Vision for Perception, dorsal = Vision for Action (Greifen/Steuern). Evidenz: doppelte Dissoziationen (Läsionsfälle)." },
  { title: "Lernen – Definition", body: "Durch Erfahrung entstandene, relativ überdauernde Verhaltensänderung/‑potenzial (nicht Reifung/Ermüdung/Drogen); Auftreten probabilistisch, kontextabhängig." },
  { title: "Nicht‑assoziativ: Habituation/Sensitivierung", body: "Habituation: Reaktionsabnahme auf wiederholte irrelevante Reize. Sensitivierung: Zunahme v. a. bei aversiven Reizen (Alarmfunktion)." },
  { title: "Klassische Konditionierung – Kerne", body: "UCS→UCR; CS+UCS‑Paarung → CS→CR. Erwerb; Löschung (CS ohne UCS); Spontanremission; Generalisierung (ähnliche Reize lösen CR aus) vs. Diskrimination (Training)." },
  { title: "Operante Konditionierung – Kerne", body: "Gesetz des Effekts (Thorndike). Skinner: operante Kammer, Basisrate → Verstärkung; Vier‑Felder: pos./neg. Verstärkung (Verhalten ↑), pos./neg. Bestrafung (Verhalten ↓); Löschung/Spontanerholung." },
  { title: "Beobachtungslernen (Bandura)", body: "Imitation ohne direkte eigene Verstärkung; stellvertretende Konsequenzen (Belohnung/Tadel) steuern Ausführung (Bobo‑Doll‑Studien)." },
  { title: "Gedächtnisprozess & Modelle", body: "Enkodierung → Speicherung → Abruf. Drei‑Speicher (sensorisch/KZG/LZG) als Rahmen; Arbeitsgedächtnis (Zentrale Exekutive, phonologische Schleife, visuo‑räuml. Notizblock, episodischer Puffer); Millersche Zahl & Chunking; Dual‑Task‑Interferenzen sind modalitätsspezifisch." },
  { title: "LZG‑Systeme & Effekte", body: "Explizit (semantisch/episodisch) vs. implizit/non‑deklarativ (prozedural, Konditionierung, Priming, Habituation). Fall H.M.: Dissoziation. Enkodierspezifität (Kontext/Stimmung), serieller Positionseffekt (Primacy/Recency), Vergessenskurve (früher Abfall → Spacing), Interferenz (proaktiv/retroaktiv)." }
]

// Registry ergänzen (Review-Sequenzen)
// Kapitel 6 soll Kapitel 5 wiederholen → stelle den Review-Eintrag für 5 bereit
;(reviewSummaryByChapter as any)[5] = chapter5ReviewSteps

// Kompakter Review (≈ 15 Minuten) – Kapitel 4
export const chapter4ReviewSteps: { title: string; body: string }[] = [
  { title: "Worum geht’s?", body: "Biologische Psychologie erklärt psychische Phänomene über neuronale/physiologische Mechanismen; Basis für viele Teilgebiete." },
  { title: "Teilgebiete kompakt", body: "Physiologisch (kausal via Eingriffe), Neuropsychologie (Läsionen/Diagnostik), Psychophysiologie (EEG, EMG, EKG), Kognitive Neurowiss. (fMRT/EEG/TMS), Psychopharmakologie (Wirkstoffe/Transmitter), Vergleichend (Evolution/Modelle)." },
  { title: "Schlüsselbefunde: Gage & Broca", body: "Gage: Präfrontal → Impulskontrolle/Planung. Broca: linkes Frontalareal → Sprachproduktion (Aphasie). Evidenz für Spezialisierung." },
  { title: "Neuron & Glia – Kernrollen", body: "Neuron: Soma, Dendrit, Axon, Terminale. Glia: Astrozyten (BBB/Metabolismus), Oligodendrozyten/Schwann (Myelin), Mikroglia (Immunschutz), Müller‑Zellen (Retina)." },
  { title: "Myelin & MS", body: "Myelin → schnelle saltatorische Leitung an Ranvier‑Schnürringen; MS = Demyelinisierung (Sehen/Sensibilität/Motorik), oft schubförmig." },
  { title: "Ruhepotenzial Essentials", body: "~ −70 mV durch Ionengradienten (Na+ außen, K+ innen, Cl− außen), selektive Permeabilität und Na+/K+‑Pumpe (3 Na+ raus/2 K+ rein)." },
  { title: "AP – Was passiert?", body: "Schwelle ~ −55 mV; Na+‑Aufstrich/Overshoot → Na+‑Inaktivierung → K+‑Repolarisation → Nachpotenzial; Refraktärphasen sichern Richtung." },
  { title: "Synapse – Chemisch vs. Elektrisch", body: "Chemisch: Ca2+‑getriggerte Exozytose → Rezeptoren → EPSP/IPSP → Abbau/Rückaufnahme/Glia. Elektrisch: gap junctions, sehr schnell, bidirektional (seltener im ZNS)." },
  { title: "Transmittersysteme – Überblick", body: "Glutamat (exzitatorisch; Lernen), GABA (inhibitorisch; Benzodiazepine), Dopamin (Belohnung/Motorik; Parkinson↓), Serotonin (Emotion; SSRI), ACh (Motorik/Kognition/Schlaf), NA (Erregung/Alertness)." },
  { title: "ZNS/PNS & Reflexe", body: "ZNS: Gehirn/Rückenmark. PNS: somatisch (Sinnesinput↔Skelettmuskeln) vs. autonom (Sympathikus/Parasympathikus). Reflexe auch spinale Verschaltung (Patellarsehne)." },
  { title: "Gehirn – Entwicklungslogik", body: "Prosencephalon → Telencephalon/Diencephalon; Mesencephalon; Rhombencephalon → Metencephalon/Myelencephalon." },
  { title: "Großhirn & Lappen", body: "Cortex (2–5 mm, gefurcht), Balken verbindet Hemisphären. Lappen: Frontal (Planung/Sprache/Motorik), Parietal (Somatosensorik/Raum), Temporal (Hören/Objekte; Hippocampus/Amygdala), Okzipital (Sehen)." },
  { title: "Lateralisation & Split‑Brain", body: "Sprache meist links; Raum oft rechts. Getrennter Balken → Benennprobleme links dargebotener Reize (rechte Hemisphäre)." },
  { title: "ANS – Gegenspieler", body: "Sympathikus: Aktivierung (Puls/Atmung↑, Verdauung↓). Parasympathikus: Erholung/Normalbetrieb (Puls↓, Verdauung↑)." },
  { title: "Auge – Optik & Retina", body: "Cornea (Licht), Iris/Pupille (Blende), Linse (Akkommodation), Retina (Photorezeptoren), blinder Fleck am Sehnerv." },
  { title: "Stäbchen/Zapfen & Farbe", body: "Stäbchen: Dämmerung, keine Farbe. Zapfen: Farb‑/Detailsehen (3 Typen); Fovea = Schärfe. Rot‑Grün‑Schwäche X‑chromosomal häufiger bei Männern." },
  { title: "Sehbahn & V1", body: "Nasale Fasern kreuzen (Chiasma); CGL retinotop, Fovea überrepräsentiert; V1 (Okzipital) mit orientierungs-/richtungssensitiven Neuronen; höhere Areale (V2+)." }
]

// (Registry bereits oben exportiert)

