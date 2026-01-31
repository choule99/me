// CV Template for Claude Houle — Modern Design

#let data = json(sys.inputs.at("data-file"))
#let photo-path = sys.inputs.at("photo", default: none)

#set document(title: data.name + " — " + data.title)
#set page(paper: "us-letter", margin: (top: 0.5in, bottom: 0.4in, left: 0.5in, right: 0.5in))
#set text(font: "Helvetica Neue", size: 9pt, fill: rgb("#2d2d2d"))
#set par(justify: true, leading: 0.5em)

#let accent = rgb("#1a3a5c")
#let accent-light = rgb("#e8eef4")
#let warm = rgb("#d4a853")
#let text-secondary = rgb("#555555")

// ── Header Banner (bleeds into margins on page 1) ──
#pad(top: -0.5in, x: -0.5in)[
  #block(
    width: 100% + 1in,
    inset: (x: 24pt + 0.5in, top: 22pt, bottom: 16pt),
    fill: accent,
  )[
    #grid(
      columns: (60pt, 1fr),
      column-gutter: 14pt,
      {
        if photo-path != none {
          box(
            clip: true,
            radius: 6pt,
            width: 60pt,
            height: 60pt,
            image(photo-path, width: 60pt),
          )
        }
      },
      [
        #text(size: 20pt, weight: "bold", fill: white, tracking: 0.5pt, data.name)
        #v(-2pt)
        #text(size: 11pt, fill: warm, weight: "medium", data.title)
        #v(1pt)
        #text(size: 8pt, fill: rgb("#b0c4d8"))[
          #data.email #h(6pt) | #h(6pt) #data.location #h(6pt) | #h(6pt) #data.web
        ]
      ],
    )
  ]
]

#v(4pt)

// ── Helpers ──
#let section-heading(title) = {
  v(5pt)
  block(width: 100%, inset: (x: 6pt, y: 3pt), fill: accent-light, radius: 3pt)[
    #text(size: 10pt, weight: "bold", fill: accent, tracking: 0.8pt, upper(title))
  ]
  v(3pt)
}

#let skill-tag(label) = {
  box(
    inset: (x: 4pt, y: 2pt),
    radius: 3pt,
    fill: rgb("#f0f0f0"),
    stroke: 0.4pt + rgb("#d0d0d0"),
    text(size: 7.5pt, fill: rgb("#333333"), label),
  )
}

#let padded(body) = pad(x: 4pt, body)

// ── Section heading labels (with English fallbacks) ──
#let sections = data.at("sections", default: (:))
#let s-profile = sections.at("profile", default: "Profile")
#let s-accomplishments = sections.at("accomplishments", default: "Key Accomplishments")
#let s-skills = sections.at("skills", default: "Technical Skills")
#let s-experience = sections.at("experience", default: "Professional Experience")
#let s-education = sections.at("education", default: "Education")

// ── Summary ──
#section-heading(s-profile)
#padded[
  #text(size: 9pt, fill: text-secondary, style: "italic", data.summary)
]

// ── Accomplishments ──
#section-heading(s-accomplishments)

#padded[
  #for item in data.accomplishments {
    grid(
      columns: (12pt, 1fr),
      gutter: 0pt,
      align(center, text(size: 8pt, fill: warm, "-")),
      text(size: 8.5pt, item),
    )
    v(1pt)
  }
]

// ── Skills ──
#section-heading(s-skills)

#padded[
  #for (i, group) in data.skills.enumerate() {
    grid(
      columns: (74pt, 1fr),
      column-gutter: 6pt,
      text(weight: "bold", size: 8pt, fill: accent, group.label),
      {
        for item in group.items {
          skill-tag(item)
          h(2pt)
        }
      },
    )
    if i < data.skills.len() - 1 {
      v(2.5pt)
    }
  }
]

// ── Experience ──
#section-heading(s-experience)

#for (i, exp) in data.experience.enumerate() {
  padded[
    #grid(
      columns: (1fr, auto),
      [
        #text(weight: "bold", size: 10pt, fill: accent, exp.company)
        #h(6pt)
        #text(size: 8.5pt, fill: text-secondary, style: "italic", exp.title)
      ],
      align(right, text(size: 8.5pt, fill: text-secondary, weight: "medium", exp.dates)),
    )

    #if exp.at("description", default: none) != none {
      v(0.5pt)
      text(size: 8pt, fill: text-secondary, exp.description)
    }

    #v(1.5pt)

    #for bullet in exp.bullets {
      grid(
        columns: (12pt, 1fr),
        gutter: 0pt,
        align(center, text(size: 8pt, fill: warm, "-")),
        text(size: 8.5pt, bullet),
      )
      v(0.5pt)
    }
  ]

  if i == 0 {
    pagebreak()
  } else if i < data.experience.len() - 1 {
    line(start: (4pt, 0pt), length: 100% - 8pt, stroke: 0.3pt + rgb("#e0e0e0"))
    v(3pt)
  }
}

// ── Education ──
#let edu = data.at("education", default: (
  degree: "Computer Science Technology",
  school: "Cégep Édouard-Montpetit, Longueuil, QC",
  dates: "Sept 2000 — May 2003",
  description: "Three-year practice-oriented diploma covering C, C++, Java, SQL, Linux, and applied computing — comparable to a U.S. associate degree in computer science.",
))
#section-heading(s-education)

#padded[
  #grid(
    columns: (1fr, auto),
    [
      #text(weight: "bold", size: 10pt, fill: accent, edu.degree)
      #h(6pt)
      #text(style: "italic", size: 8.5pt, fill: text-secondary, edu.school)
    ],
    align(right, text(size: 8.5pt, fill: text-secondary, weight: "medium", edu.dates)),
  )
  #v(1pt)
  #text(size: 8.5pt, edu.description)
]
