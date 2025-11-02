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
    title: 'JavaScript Fundamentals',
    description: 'Deep dive into JavaScript concepts and design patterns',
    longDescription: 'Explore advanced JavaScript features including closures, prototypes, async/await, design patterns, and performance optimization techniques.',
    instructor: 'Peter Novak',
    duration: '60 hours',
    level: 'Beginner',
    price: 650,
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
    longDescription: `🎯 **Transform Your Digital Skills - Master Essential Office Tools**

A comprehensive beginner-friendly course designed to equip you with essential computer skills for professional success. Learn everything you need to work efficiently with modern office software and digital tools.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 **MS EXCEL - Data Management & Analysis**

**📐 Worksheet Fundamentals**
• Navigate and customize your workspace (zoom, toolbars, display settings)
• Master cell selection techniques (single, ranges, non-contiguous areas, entire worksheets)
• Efficiently work with rows, columns, and multiple worksheets

**✍️ Data Entry & Formatting**
• Input different data types: numbers, dates, text
• Apply professional formatting (currency, percentages, decimals, date formats)
• Enhance visual appeal with font styles, sizes, and cell appearance
• Use Format Painter for consistent styling
• Text wrapping and cell alignment for polished presentations

**🔧 Data Manipulation**
• Sort and filter data by multiple criteria
• Find and replace content efficiently
• Copy, move, and delete data across worksheets and workbooks
• Auto-fill and create data series automatically

**⚡ Formulas & Functions**
• Create formulas using cell references and arithmetic operators (+, -, *, /)
• Master essential functions: SUM, AVERAGE, MIN, MAX, COUNT
• Advanced functions: SUBTOTAL, SUMIF, COUNTIF, VLOOKUP
• Logical functions: IF, AND, OR for complex decision-making
• Build nested functions for powerful calculations

**📈 Data Visualization**
• Create professional charts and graphs from your data
• Design pivot tables for dynamic data analysis
• Apply conditional formatting to highlight important information

**🖨️ Professional Presentation**
• Configure page setup (margins, size, orientation)
• Add headers and footers with dynamic fields (page numbers, dates, filenames)
• Preview and print your workbooks professionally

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **MS WORD - Document Creation & Design**

**📄 Document Management**
• Save and organize documents efficiently
• Leverage professional templates for faster work
• Follow best practices for document creation

**✍️ Content Creation**
• Master keyboard layout and text input
• Work with non-printing characters for precise editing
• Apply professional text formatting
• Use spell checking and grammar tools

**🎨 Advanced Formatting**
• Create headers and footers
• Work with bullet points and numbering
• Insert visual elements: images, shapes, diagrams, special characters
• Design layouts with text boxes
• Build professional tables

**📧 Productivity Features**
• Master mail merge for bulk document creation
• Configure document layout settings
• Prepare documents for printing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 **INTERNET & EMAIL - Digital Communication**

**🔍 Web Navigation**
• Efficient web searching with Google
• Manage multiple browser tabs
• Organize bookmarks and favorites
• Save and copy web content (images, text, links)

**📧 Email Mastery**
• Reply to emails professionally
• Compose and send new messages
• Forward communications effectively
• Attach files (images, documents)
• Share web links and resources

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 **OS WINDOWS - File Management**

• Navigate using File Explorer (This PC)
• Switch between different folder views
• Create and organize folders and subfolders
• Save files (images, documents) efficiently
• Copy, move, and delete files with confidence
• Connect and sync PC with mobile devices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ **Perfect For:**
• Complete beginners starting their digital journey
• Professionals looking to strengthen foundational skills
• Anyone seeking to improve office productivity
• Career changers entering modern workplaces

🎓 **What You'll Achieve:**
By the end of this course, you'll confidently handle everyday office tasks, create professional documents, analyze data effectively, and navigate the digital workspace with ease.`,
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
    duration: '40 hours',
    level: 'Beginner',
    price: 600,
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

