// CV Template for Claude Houle — Modern Design

#let data = json(sys.inputs.at("data-file"))

#set document(title: data.name + " — " + data.title)
#set page(paper: "us-letter", margin: (top: 0.45in, bottom: 0.38in, left: 0.5in, right: 0.5in))
#set text(font: "Helvetica Neue", size: 11pt, fill: rgb("#2d2d2d"))
#set par(justify: true, leading: 0.6em)

// ── Color Palette ──
#let accent = rgb("#1a3a5c")
#let text-secondary = rgb("#555555")
#let text-light = rgb("#777777")

// ── Section heading labels (with English fallbacks) ──
#let sections = data.at("sections", default: (:))
#let s-profile = sections.at("profile", default: "Profile")
#let s-accomplishments = sections.at("accomplishments", default: "Key Accomplishments")
#let s-skills = sections.at("skills", default: "Technical Skills")
#let s-experience = sections.at("experience", default: "Professional Experience")
#let s-education = sections.at("education", default: "Education")

// ── Helpers ──

#let section-heading(title) = {
  v(16pt)
  block(breakable: false)[
    #text(size: 13pt, weight: "bold", fill: accent, title)
    #v(-4pt)
    #line(length: 40pt, stroke: 2.5pt + accent)
  ]
  v(2pt)
}

#let skill-tag(label) = {
  text(size: 9pt, fill: rgb("#333333"), label)
}

#let bullet-item(content) = {
  grid(
    columns: (12pt, 1fr),
    gutter: 0pt,
    align(center + top, text(size: 8pt, fill: accent, "●")),
    text(size: 10pt, content),
  )
  v(0.5pt)
}

// ── Header ──
#block(breakable: false)[
  #text(size: 27pt, weight: "bold", fill: accent, data.name)
  #v(-8pt)
  #text(size: 14pt, fill: text-secondary, data.title)
  #v(-1pt)
  #text(size: 10pt, fill: text-light)[
    #data.email #h(5pt) #sym.bullet #h(5pt) #data.location #h(5pt) #sym.bullet #h(5pt) #data.web
  ]
  #v(2pt)
  #line(length: 100%, stroke: 3pt + accent)
]

#v(2pt)

// ── Summary ──
#section-heading(s-profile)
#text(size: 10.5pt, fill: text-secondary, style: "italic", data.summary)

// ── Accomplishments ──
#section-heading(s-accomplishments)

#for item in data.accomplishments {
  bullet-item(item)
  v(1pt)
}

// ── Skills ──
#section-heading(s-skills)

#{
  set par(leading: 0.25em, spacing: 0.7em)
  for entry in data.skills {
    if entry.at("section", default: none) != none {
      v(6pt)
      text(weight: "bold", size: 10pt, fill: accent, entry.section)
      v(1pt)
    } else {
      grid(
        columns: (80pt, 1fr),
        column-gutter: 4pt,
        align(right, text(weight: "medium", size: 9pt, fill: text-secondary, entry.label + ":")),
        {
          for (j, item) in entry.items.enumerate() {
            skill-tag(item)
            if j < entry.items.len() - 1 {
              text(size: 9pt, fill: text-light, ",")
              h(2pt)
            }
          }
        },
      )
      v(0.5pt)
    }
  }
}

// ── Experience ──
// Group heading with first entry to prevent orphaned heading
#{
  section-heading(s-experience)

  for (i, exp) in data.experience.enumerate() {
    block(breakable: false, inset: (left: 8pt), stroke: (left: 3pt + accent))[
      #grid(
        columns: (1fr, auto),
        [
          #text(weight: "bold", size: 12pt, fill: accent, exp.company)
        ],
        align(right, text(size: 10pt, fill: text-light, weight: "medium", exp.dates)),
      )
      #v(-2pt)
      #text(size: 10.5pt, weight: "medium", fill: text-secondary, exp.title)

      #if exp.at("description", default: none) != none {
        v(2pt)
        text(size: 10pt, fill: text-secondary, exp.description)
      }

      #v(2pt)

      #for bullet in exp.bullets {
        bullet-item(bullet)
      }
    ]

    if i < data.experience.len() - 1 {
      v(6pt)
    }
  }
}

// ── Education ──
#let edu = data.at("education", default: (
  degree: "Computer Science Technology",
  school: "Cégep Édouard-Montpetit, Longueuil, QC",
  dates: "2003",
  description: "Three-year practice-oriented diploma covering C, C++, Java, SQL, Linux, and applied computing.",
  capstone: "Capstone project: End-to-end development of an e-commerce website for an SMB.",
))
#section-heading(s-education)

#block(breakable: false, inset: (left: 8pt), stroke: (left: 3pt + accent))[
  #grid(
    columns: (1fr, auto),
    [
      #text(weight: "bold", size: 12pt, fill: accent, edu.degree)
      #h(6pt)
      #text(style: "italic", size: 10pt, fill: text-secondary, edu.school)
    ],
    align(right, text(size: 10pt, fill: text-light, weight: "medium", edu.dates)),
  )
  #v(1pt)
  #text(size: 10pt, edu.description)
  #if edu.at("capstone", default: none) != none {
    v(1pt)
    text(size: 10pt, style: "italic", edu.capstone)
  }
]
