import type { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'React & TypeScript Masterclass',
    description: 'Master React and TypeScript to build modern, type-safe web applications',
    longDescription: 'A comprehensive course covering React hooks, TypeScript fundamentals, component architecture, state management, and best practices for building scalable applications.',
    instructor: 'Sarah Johnson',
    duration: '40 hours',
    level: 'Intermediate',
    price: 580,
    category: 'Web Development',
    topics: ['React Hooks', 'TypeScript', 'Component Design', 'State Management', 'Testing']
  },
  {
    id: '2',
    title: 'Full-Stack Development Bootcamp',
    description: 'Complete web development course covering frontend and backend technologies',
    longDescription: 'Learn to build complete web applications from scratch using modern technologies including React, Node.js, databases, and deployment strategies.',
    instructor: 'Michael Chen',
    duration: '12 weeks',
    level: 'Beginner',
    price: 499,
    category: 'Web Development',
    topics: ['React', 'Node.js', 'MongoDB', 'Express', 'Deployment', 'Git']
  },
  {
    id: '3',
    title: 'Cloud Computing with AWS',
    description: 'Learn cloud infrastructure and services using Amazon Web Services',
    longDescription: 'Deep dive into AWS services including EC2, S3, Lambda, and more. Learn to architect scalable and secure cloud solutions.',
    instructor: 'David Rodriguez',
    duration: '6 weeks',
    level: 'Intermediate',
    price: 399,
    category: 'Cloud & DevOps',
    topics: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM', 'Cloud Architecture']
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Master Python and data analysis with pandas, numpy, and machine learning',
    longDescription: 'Learn Python programming for data analysis, visualization, and machine learning. Work with real datasets and build predictive models.',
    instructor: 'Emily Watson',
    duration: '10 weeks',
    level: 'Beginner',
    price: 349,
    category: 'Data Science',
    topics: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter']
  },
  {
    id: '5',
    title: 'Advanced JavaScript Patterns',
    description: 'Deep dive into advanced JavaScript concepts and design patterns',
    longDescription: 'Explore advanced JavaScript features including closures, prototypes, async/await, design patterns, and performance optimization techniques.',
    instructor: 'James Anderson',
    duration: '5 weeks',
    level: 'Advanced',
    price: 249,
    category: 'Web Development',
    topics: ['Closures', 'Prototypes', 'Async/Await', 'Design Patterns', 'Performance']
  },
  {
    id: '6',
    title: 'DevOps & CI/CD Pipeline',
    description: 'Build automated deployment pipelines with Docker, Kubernetes, and Jenkins',
    longDescription: 'Learn DevOps practices including containerization with Docker, orchestration with Kubernetes, and setting up CI/CD pipelines for automated deployments.',
    instructor: 'Lisa Park',
    duration: '7 weeks',
    level: 'Intermediate',
    price: 379,
    category: 'Cloud & DevOps',
    topics: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Monitoring']
  },
  {
    id: '7',
    title: 'MS Excel, Word, Internet & Windows Basics',
    titleSk: 'MS Excel, Word, Internet a Windows základy',
    description: 'Master essential computer skills including MS Office applications, internet browsing, email, and Windows operating system',
    descriptionSk: 'Ovládnite základné počítačové zručnosti vrátane aplikácií MS Office, prehliadania internetu, emailu a operačného systému Windows',
    longDescription: `A comprehensive beginner course covering essential computer skills for everyday work:

MS Excel:
• Zoom in/out and display settings, toolbars
• Data entry: numbers, dates, text
• Sorting data by criteria
• Find and replace functionality
• Selecting cells, ranges, entire worksheets
• Working with rows and columns
• Copy, move, delete content within and between worksheets/workbooks
• Auto-fill and data series
• Number, date, currency, percentage formatting
• Cell formatting: font size, font types
• Copy formatting with Format Painter
• Text wrapping and cell alignment
• Formulas with cell references and arithmetic operators
• Functions: SUM, AVERAGE, MIN, MAX, COUNT
• Nested functions
• Sorting and filtering
• Conditional formatting
• SUBTOTAL, SUMIF, COUNTIF, VLOOKUP functions
• Logical functions: IF, AND, OR
• Creating and modifying charts and graphs
• Pivot tables
• Page setup: margins, page size, orientation
• Headers and footers: page numbers, date, time, filename
• Print preview

MS Word:
• Saving documents
• Using MS Word templates
• Document creation best practices
• Text input and keyboard layout
• Working with non-printing characters
• Text formatting
• Spell checking
• Headers and footers
• Working with bullet points
• Inserting images, shapes, diagrams, special characters
• Working with text boxes
• Working with tables
• Mail merge
• Document layout settings
• Print settings

Internet:
• Web searching (Google)
• Working with multiple browser tabs
• Bookmarks and favorites
• Saving images
• Copying images, text, and links

Email:
• Replying to emails
• Sending new messages
• Forwarding messages
• Attaching files (images, documents)
• Sending web links

OS Windows:
• Using File Explorer (This PC)
• Different folder views
• Creating folders and subfolders
• Saving files (images, documents)
• Copy, move, and delete files
• Connecting PC and mobile device

Perfect for beginners or anyone looking to strengthen their foundational computer and office productivity skills.`,
    longDescriptionSk: `Komplexný začiatočnícky kurz pokrývajúci základné počítačové zručnosti pre každodennú prácu:

MS Excel:
✓ Zväčšovanie a zmenšovanie mierky zobrazenia zošita.
✓ Zobrazovanie, skrývanie zabudovaných panelov s nástrojmi.
✓ Vkladanie údajov- číslo, dátum, text do bunky.
✓ Usporiadanie údajov v oblasti buniek podľa jedného kritéria,
✓ Vyhľadávanie a nahrádzanie konkrétneho obsahu v pracovnom liste
✓ Vyberanie buniek , súvislej, nesúvislej oblasti buniek, celý pracovný list
✓ Práca s riadkami a stĺpcami
✓ Kopírovanie, presúvanie, vymazávanie obsahu bunky, oblasti buniek v rámci pracovného listu, medzi pracovnými listami, medzi otvorenými zošitmi
✓ Používanie nástroja automatického vkladania dát, pre kopírovanie dát.
✓ Presúvanie obsahu buniek, oblasti buniek v rámci pracovného listu, medzi pracovnými listami, medzi otvorenými zošitmi.
✓ Používanie rôznych formátov čísla, dátumu, meny, percent, desatinných miest
✓ Zmena vzhľadu obsahu bunky: veľkosť písma, typy písma.
✓ Kopírovanie formátu z jednej bunky alebo oblasti buniek na inú bunku alebo oblasť buniek.
✓ Zalamovanie, zarovnávanie buniek
✓ Vytváranie vzorcov využívajúcich referencie na bunky a aritmetické operátory
✓ Vytváranie vzorcov využívajúcich funkcie súčet, priemer, minimum, maximum, početnosť,
✓ Vnáranie funkcií
✓ zoradenie a filtrovanie
✓ podmienené formátovanie
✓ funkcia SUBTOTAL, SUMIF, COUNTIF, VLOOKUP a ďalších podľa zamerania
✓ logická funkcia IF, AND, OR
✓ Vytváranie, zmena rozličných typov diagramov/ grafov z údajov v zošite:
✓ Kontingenčná tabuľka
✓ Zmena okrajov v pracovnom liste: horný, dolný, ľavý, pravý, veľkosti strany, orientácie pracovného listu na strane:
✓ Prispôsobenie vzhľadu strany obsahu pracovného listu len na jednej strane, na určenom počte strán (page setup).
✓ Pridávanie do hlavičiek a piet polia: číslo strany, dátum, čas, názov súboru, názov hárku
✓ Zobrazovanie ukážky pracovného listu pred tlačou.

MS Word:
✓ Ukladanie dokumentu
✓ Používanie šablón MS Word
✓ Pravidlá tvorby dokumentu
✓ Písanie textu- rozvrhnutie klávesnice
✓ Práca s „netlačiteľnými" znakmi
✓ Úprava textu (formátovanie)
✓ Oprava pravopisu v dokumente
✓ Hlavička a päta v dokumente
✓ Práca s odrážkami
✓ Vkladanie obrázkov, tvarov, diagramov, špeciálnych znakov
✓ Práca s textovým polom
✓ Práca s tabuľkou
✓ Hromadná korešpondencia
✓ Nastavenie rozloženia dokumentu
✓ Nastavenie tlače dokumentu

Internet:
✓ Vyhľadávanie na internete (Google)
✓ Práca na viac kartách v internetovom prehliadači
✓ Odkladanie odkazov na neskoršie použitie, obľúbené položky
✓ Ukladanie obrázkov
✓ Kopírovanie obrázkov, textu a odkazu na stránku

E-mail:
✓ Odpovedanie na email
✓ Posielanie novej správy
✓ Preposielanie správy
✓ Priloženie prílohy (obrázok, dokument)
✓ Posielanie odkazu na webstránku

OS Windows:
✓ Používanie prieskumníka (Tento počítač)
✓ Používanie rôznych zobrazení priečinkov
✓ Vytváranie priečinkov a podpriečinkov
✓ Ukladanie súborov (obrázky, dokumenty)
✓ Kopírovanie, presúvanie a mazanie súborov
✓ Prepojenie PC a mobilu

Ideálne pre začiatočníkov alebo pre tých, ktorí si chcú posilniť základné počítačové a kancelárske zručnosti.`,
    instructor: 'Peter Novák',
    duration: '8 weeks',
    level: 'Beginner',
    price: 199,
    category: 'Office & Basics',
    categorySk: 'Kancelárske programy & základy',
    topics: [
      'MS Excel: Formulas & Functions',
      'Excel: Charts & Pivot Tables',
      'MS Word: Documents & Formatting',
      'Word: Mail Merge & Templates',
      'Internet Browsing & Search',
      'Email Management',
      'Windows File Management',
      'Office Productivity Skills'
    ],
    topicsSk: [
      'MS Excel: Vzorce a funkcie',
      'Excel: Grafy a kontingenčné tabuľky',
      'MS Word: Dokumenty a formátovanie',
      'Word: Hromadná korešpondencia a šablóny',
      'Prehliadanie internetu a vyhľadávanie',
      'Správa emailov',
      'Správa súborov vo Windows',
      'Kancelárske zručnosti'
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

