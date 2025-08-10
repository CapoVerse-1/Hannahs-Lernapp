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
  { id: "c4-1", section_id: "4-1", front_md: "Aktionspotenzial", back_md: "Depolarisation, Overshoot, Repolarisation.", order_index: 1 },
  { id: "c4-2", section_id: "4-1", front_md: "Synapse", back_md: "Transmitter, exzitatorisch vs. inhibitorisch.", order_index: 2 },
  { id: "c4-3", section_id: "4-1", front_md: "Hirnlappen", back_md: "Frontal, Parietal, Temporal, Okzipital.", order_index: 3 },
  { id: "c4-4", section_id: "4-1", front_md: "Gliazellen", back_md: "Müller-, Amakrin-, Ganglien-, Horizontalzellen.", order_index: 4 },
  { id: "c5-1", section_id: "5-1", front_md: "Wahrnehmung", back_md: "Bottom-up & Top-down.", order_index: 1 },
  { id: "c5-2", section_id: "5-1", front_md: "Gedächtnis", back_md: "Sensorisch, KZG, LZG.", order_index: 2 },
  { id: "c5-3", section_id: "5-1", front_md: "Klassisches Konditionieren", back_md: "Pawlow: CS, US, CR.", order_index: 3 },
  { id: "c5-4", section_id: "5-1", front_md: "Operantes Konditionieren", back_md: "Verstärkung & Bestrafung.", order_index: 4 },
  { id: "c6-1", section_id: "6-1", front_md: "Piaget", back_md: "Stadienentwicklung.", order_index: 1 },
  { id: "c6-2", section_id: "6-1", front_md: "Erikson", back_md: "Krisen über Lebensspanne.", order_index: 2 },
  { id: "c6-3", section_id: "6-1", front_md: "Bindung", back_md: "Sicher vs. unsicher.", order_index: 3 },
  { id: "c6-4", section_id: "6-1", front_md: "Spracherwerb", back_md: "Meilensteine.", order_index: 4 },
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


