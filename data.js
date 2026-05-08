window.studyData = {
  sourceLinks: {
    nmsuClep: "https://records.nmsu.edu/students/transfer-credit-details/clep-credit.html",
    nmsuAs: "https://catalogs.nmsu.edu/grants/degree-certificate-programs/as/",
    nmsuGrad: "https://catalogs.nmsu.edu/grants/graduation-requirements/",
    faaHandbook: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/helicopter_flying_handbook",
    woft: "https://recruiting.army.mil/ISO/AWOR/Civilian_WOFT/"
  },
  clep: [
    {
      id: "college-composition",
      priority: "Priority 1",
      title: "College Composition",
      duration: "2 weeks",
      fit: "Strong fit for the A.S. because NMSU awards ENGL 1110G plus elective credit. It does not replace ENGL 2210G, so you still need the second communication course later.",
      credit: "NMSU equivalent: ENGL 1110G + elective, 6 credits",
      note: "Best first exam if you want quick degree progress and a lower math barrier.",
      resources: [
        {
          label: "REA CLEP Freshman College Composition",
          url: "https://archive.org/details/clepfreshmancoll0000rese"
        },
        {
          label: "REA College Composition upload",
          url: "https://archive.org/details/rea-clep-college-composition-college-composition-modular-book-with-2-free-rea-exam-test/page/119/mode/2up"
        },
        {
          label: "Official NMSU CLEP equivalencies",
          url: "https://records.nmsu.edu/students/transfer-credit-details/clep-credit.html"
        }
      ],
      tasks: [
        { title: "Diagnostic", detail: "Take one full REA diagnostic and mark grammar and essay weak spots." },
        { title: "Grammar core", detail: "Review sentence structure, punctuation, agreement, and clarity." },
        { title: "Essay structure", detail: "Practice thesis, topic sentences, transitions, and timed planning." },
        { title: "Timed writing", detail: "Complete 2 timed practice essays or modular writing drills." },
        { title: "Final review", detail: "Take one last full practice test and review only misses." }
      ]
    },
    {
      id: "college-algebra",
      priority: "Priority 2",
      title: "College Algebra",
      duration: "3 weeks",
      fit: "Direct match to the standard A.S. math option at NMSU Grants. It also overlaps heavily with SIFT math review.",
      credit: "NMSU equivalent: MATH 1220G, 3 credits",
      note: "Best dual-purpose exam because it helps both the degree and the SIFT.",
      resources: [
        {
          label: "REA CLEP College Algebra",
          url: "https://archive.org/details/clepcollegealgeb0000unse_e0x0/page/346/mode/1up"
        },
        {
          label: "Official NMSU A.S. requirements",
          url: "https://catalogs.nmsu.edu/grants/degree-certificate-programs/as/"
        }
      ],
      tasks: [
        { title: "Linear and factoring", detail: "Work linear equations, polynomials, factoring, and simplifying expressions." },
        { title: "Exponents and radicals", detail: "Review exponent rules, radicals, rational exponents, and operations." },
        { title: "Functions and graphs", detail: "Practice function notation, graph reading, and transformations." },
        { title: "Quadratics", detail: "Solve by factoring, formula, and graph interpretation." },
        { title: "Word problems", detail: "Drill rate, distance, mixture, and applied algebra problems." },
        { title: "Final timing", detail: "Take 2 timed practice tests and log error patterns." }
      ]
    },
    {
      id: "chemistry",
      priority: "Priority 3",
      title: "Chemistry",
      duration: "4 to 5 weeks",
      fit: "High-value exam for a science degree because NMSU awards CHEM 1215G and CHEM 1225G. This is one of the strongest credit returns in the CLEP table.",
      credit: "NMSU equivalent: CHEM 1215G & CHEM 1225G, 6 credits",
      note: "This is likely the most efficient science CLEP for the degree, but it is not a quick exam.",
      resources: [
        {
          label: "REA CLEP Chemistry",
          url: "https://archive.org/details/clepchemistry0000reel"
        },
        {
          label: "REA AP Chemistry",
          url: "https://archive.org/details/apchemistrycrash0000dale"
        },
        {
          label: "Official NMSU CLEP equivalencies",
          url: "https://records.nmsu.edu/students/transfer-credit-details/clep-credit.html"
        }
      ],
      tasks: [
        { title: "Atomic structure", detail: "Review atoms, periodic trends, isotopes, and electron arrangement." },
        { title: "Bonding and reactions", detail: "Study ionic/covalent bonding, balancing, and reaction types." },
        { title: "Stoichiometry", detail: "Work moles, molar mass, limiting reactants, and percent yield." },
        { title: "Gases and solutions", detail: "Cover gas laws, molarity, dilution, and solution behavior." },
        { title: "Acids and thermochemistry", detail: "Review pH, acids/bases, energy, and equilibrium basics." },
        { title: "Practice exams", detail: "Complete 2 full tests and revisit formula memory gaps." }
      ]
    },
    {
      id: "social-behavioral",
      priority: "Priority 4",
      title: "Area IV Social / Behavioral Science",
      duration: "1 to 2 weeks",
      fit: "The A.S. needs Area IV credit. Pick one exam first instead of spreading across several easier options.",
      credit: "NMSU equivalent: usually 3 credits, depending on exam",
      note: "Best first picks are Intro Psychology, Sociology, American Government, Macroeconomics, or Microeconomics.",
      resources: [
        {
          label: "REA CLEP Intro Psychology",
          url: "https://archive.org/details/clepintroductory0000shar"
        },
        {
          label: "REA CLEP Sociology",
          url: "https://archive.org/details/clepintroductory0000will"
        },
        {
          label: "CLEP American Government",
          url: "https://archive.org/details/besttestpreparat0000jone"
        },
        {
          label: "REA CLEP Macroeconomics",
          url: "https://archive.org/details/besttestpreparat0000satt"
        },
        {
          label: "REA CLEP Microeconomics",
          url: "https://archive.org/details/besttestpreparat0000satt_r1q6"
        }
      ],
      tasks: [
        { title: "Pick one exam", detail: "Choose one Area IV exam and ignore the rest until you pass it." },
        { title: "Diagnostic", detail: "Take a short practice set and note unfamiliar terms." },
        { title: "Core concepts", detail: "Review vocabulary, major theories, and recurring graphs/models if economics." },
        { title: "Recall loop", detail: "Make a one-page fact sheet and rehearse it daily." },
        { title: "Final drill", detail: "Take one timed practice run before scheduling." }
      ]
    },
    {
      id: "humanities-history",
      priority: "Priority 5",
      title: "Area V Humanities / History",
      duration: "1 to 2 weeks",
      fit: "Useful to cover the humanities side of the A.S. after communication, math, science, and one social science exam are moving.",
      credit: "NMSU equivalent: 3 to 6 credits depending on exam",
      note: "Best degree-oriented choices from your list are U.S. History I or Western Civilization I. Humanities and literature exams can be bigger credit dumps but may fit less cleanly.",
      resources: [
        {
          label: "REA CLEP U.S. History I",
          url: "https://archive.org/details/clep-us-history-of-the-united-states-1"
        },
        {
          label: "Western Civilization I",
          url: "https://archive.org/details/besttestpreparat0000ziom"
        },
        {
          label: "REA CLEP Humanities",
          url: "https://archive.org/details/clephumanitieswc00staf/mode/1up"
        },
        {
          label: "CLEP American Literature",
          url: "https://archive.org/details/besttestpreparat0000stra"
        },
        {
          label: "CLEP Analyzing & Interpreting Literature",
          url: "https://archive.org/details/besttestpreparat00reseclepanalyzing"
        }
      ],
      tasks: [
        { title: "Choose path", detail: "Pick history first if you want cleaner A.S. fit. Save literature-heavy exams for later." },
        { title: "Timeline pass", detail: "Build a short chronology or theme outline." },
        { title: "People and terms", detail: "Memorize major names, dates, and vocab clusters." },
        { title: "Reading speed", detail: "Practice quick passage reading or historical question triage." },
        { title: "Final check", detail: "Take one timed practice and review misses only." }
      ]
    },
    {
      id: "optional-cleps",
      priority: "Optional / Verify",
      title: "Optional CLEPs",
      duration: "As needed",
      fit: "Accepted by NMSU, but less efficient for a general A.S. unless your later major needs them or you need extra electives.",
      credit: "Examples: Biology, Human Growth & Development, Spanish, Business-related exams",
      note: "Biology only awards BIOL 2110G for 3 credits. Human Growth & Development is solid, but not as foundational as math, chemistry, or one Area IV exam.",
      resources: [
        {
          label: "REA CLEP Biology",
          url: "https://archive.org/details/besttestpreparat0000call_q1f3"
        },
        {
          label: "REA CLEP Human Growth & Development",
          url: "https://drive.google.com/file/d/1Hhm5X4fvVTWvFCLValGB9JfGlSuPHABl/view?usp=drivesdk"
        },
        {
          label: "REA CLEP Spanish",
          url: "https://archive.org/details/clepspanishlangu0000gyor"
        },
        {
          label: "CLEP Principles of Management",
          url: "https://archive.org/details/besttestpreparat00ogil"
        },
        {
          label: "CLEP Principles of Marketing",
          url: "https://archive.org/details/besttestpreparat0000finc"
        }
      ],
      tasks: [
        { title: "Check degree audit", detail: "Use these only after the core A.S. requirements are mapped." },
        { title: "Confirm applicability", detail: "Prefer exams that fill a specific area over generic elective credit." },
        { title: "Avoid low-return study", detail: "Skip College Mathematics, Precalculus, and business CLEPs unless you know why they help." }
      ]
    }
  ],
  sift: {
    overview: {
      duration: "4 weeks",
      summary: "Built around FAA helicopter fundamentals, math refresh, mechanical comprehension, and timed SIFT-style practice."
    },
    resources: [
      {
        label: "FAA Helicopter Flying Handbook",
        url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/helicopter_flying_handbook"
      },
      {
        label: "Army WOFT reference page",
        url: "https://recruiting.army.mil/ISO/AWOR/Civilian_WOFT/"
      },
      {
        label: "Reddit SIFT guide 1",
        url: "https://www.reddit.com/r/ArmyAviationApplicant/comments/py14t5/sift_advice_scored_7580/"
      },
      {
        label: "Reddit SIFT guide 2",
        url: "https://www.reddit.com/r/ArmyAviationApplicant/comments/s41b2v/my_sift_experience/"
      }
    ],
    weeks: [
      {
        id: "week-1",
        title: "Week 1",
        focus: "Baseline, helicopter basics, and math refresh",
        tasks: [
          { title: "FAA Chapter 1", detail: "Introduction to the Helicopter." },
          { title: "FAA Chapter 2", detail: "Aerodynamics of Flight, first pass." },
          { title: "Math review block", detail: "Algebra foundations, arithmetic fluency, fractions, ratios, percentages." },
          { title: "Mechanical block", detail: "Levers, pulleys, and mechanical advantage." },
          { title: "Timed visual block", detail: "Simple drawings and hidden figures practice for 15 minutes daily." },
          { title: "Baseline test", detail: "Take one full or near-full SIFT-style practice set by the end of the week." }
        ]
      },
      {
        id: "week-2",
        title: "Week 2",
        focus: "Controls, systems, and applied math",
        tasks: [
          { title: "FAA Chapter 3", detail: "Helicopter Flight Controls." },
          { title: "FAA Chapter 4", detail: "Components, Sections, and Systems. Added because it helps both aviation and mechanical reasoning." },
          { title: "Distance/rate/time", detail: "Drill travel problems, factoring, and equation setup." },
          { title: "Geometry and probability", detail: "Review shapes, angles, area/volume, and simple probability." },
          { title: "Mechanical block", detail: "Gears, springs, torque, and pressure basics." },
          { title: "Aviation sketching", detail: "Draw collective, cyclic, pedals, rotor disc, torque, and anti-torque relationships." }
        ]
      },
      {
        id: "week-3",
        title: "Week 3",
        focus: "Performance, procedures, and mechanical depth",
        tasks: [
          { title: "FAA Chapter 6", detail: "Weight and Balance." },
          { title: "FAA Chapter 7", detail: "Helicopter Performance." },
          { title: "FAA Chapter 8", detail: "Ground Procedures and Flight Preparations." },
          { title: "FAA Chapter 9", detail: "Basic Flight Maneuvers." },
          { title: "Mechanical depth", detail: "Hydraulics, electricity basics, force transfer, and rotating systems." },
          { title: "Midpoint test", detail: "Take another timed practice and write down the weakest 3 sections." }
        ]
      },
      {
        id: "week-4",
        title: "Week 4",
        focus: "Decision-making, speed, and test-mode reps",
        tasks: [
          { title: "FAA Chapter 13", detail: "Effective Aeronautical Decision-Making." },
          { title: "Reading comprehension", detail: "Practice answer elimination: contradiction, extrapolation, assumption." },
          { title: "Spatial apperception", detail: "Drill bank-angle and horizon orientation daily." },
          { title: "Timed mini-tests", detail: "Run one short timed section each day." },
          { title: "Final full practice", detail: "Take one full practice test 2 days before test day." },
          { title: "Light review", detail: "Review misses, rest, and avoid heavy cramming the final day." }
        ]
      }
    ],
    notes: [
      "Math and mechanical comprehension are the highest-risk sections if they are rusty. Do not let aviation reading crowd them out.",
      "The FAA handbook should be treated as the primary aviation source. Reddit and commercial books are secondary strategy aids.",
      "If College Algebra CLEP is part of the plan, do that before or alongside early SIFT prep so the math carries over."
    ]
  }
};
