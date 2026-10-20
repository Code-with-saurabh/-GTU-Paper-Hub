// GTU CSE BE data - generated from GTU syllabus (synced Oct 2026) + GTU Question Paper Archive API.
// snapshot: subject_code -> sessions where a paper PDF exists in the GTU archive.
window.GTU_CSE = {
  apiBase: "https://www.gtu.ac.in",
  sessions: ["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019","S2019","W2018","S2018","W2017","W2016"],
  snapshot: {"2180703":["S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019","S2019","W2018","S2018","W2017"],"2180706":[],"2180709":["S2024","W2023","S2023","W2022","S2022","W2021","W2019","S2019","W2018","S2018","W2017"],"2180710":["S2022","W2019","S2019","W2018","S2018","W2017"],"2180711":["S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019","S2019","W2018","S2018","W2017"],"2180712":["W2023","W2022","S2022","W2021","W2020","W2019","S2019","W2018","S2018","W2017"],"2180713":["W2022","S2021","W2019","S2019","W2018","S2018","W2017"],"2180714":["W2019","S2019","W2018","S2018","W2017"],"2180715":["W2019","S2019","W2018","S2018","W2017"],"3110001":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","W2020","W2019","S2019","W2018"],"3110002":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2020","W2019","S2019","W2018"],"3110003":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2020","W2019","S2019","W2018"],"3110005":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2020","W2019","S2019","W2018"],"3110006":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","W2020","S2020","W2019","S2019","W2018"],"3110007":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","S2020","W2019","S2019"],"3110012":[],"3110013":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2020","W2019","S2019","W2018"],"3110014":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","W2020","W2019","S2019","W2018"],"3110015":["S2026","S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2020","W2019","S2019"],"3110016":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2019","S2019","W2018"],"3110017":[],"3110018":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","W2020","W2019","S2019","W2018"],"3130004":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3130006":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3130007":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3130008":[],"3130702":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3130703":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3130704":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020","W2019"],"3140005":[],"3140702":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3140705":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020"],"3140707":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020"],"3140708":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020"],"3140709":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020","S2020"],"3150001":[],"3150004":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150005":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150703":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150709":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150710":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150711":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150712":["S2026","W2025","S2025","W2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150713":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3150714":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021","S2021","W2020"],"3160001":[],"3160002":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160003":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160704":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160707":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160712":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160713":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160714":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160715":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022"],"3160716":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3160717":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022"],"3170001":[],"3170701":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170710":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170716":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170717":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170718":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170719":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170720":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170721":["W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170722":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170723":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170724":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170725":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3170726":["S2026","W2025","S2025","W2024","S2024","W2023","S2023","W2022","S2022","W2021"],"3180701":[],"BE01R00011":[],"BE01R00021":["S2026","W2025"],"BE01R00031":["S2026","W2025"],"BE01R00051":["S2026","W2025"],"BE01RR0021":[],"BE01R00041":["S2026","W2025"],"BE01R00121":["S2026","W2025"],"BE01R00071":[],"BE01R00141":["S2026","W2025"],"BE01R00111":["S2026","W2025"],"BE01R00061":["S2026","W2025"],"BE01R00081":["S2026","W2025"],"BE01R00151":["S2026","W2025"],"BE01R00181":[],"BE01R00161":["S2026","W2025"],"BE01000031":["S2026","W2025","S2025","W2024"],"BE01000011":[],"BE01000021":["S2026","W2025","S2025","W2024"],"BE01000041":["S2026","W2025","S2025","W2024"],"BE01000051":["S2026","W2025","S2025","W2024"],"BE01000141":["S2026","W2025","S2025","W2024"],"BE01000071":[],"BE01000081":["S2026","W2025","S2025","W2024"],"BE01000061":["S2026","W2025","S2025","W2024"],"BE01000121":["S2026","W2025","S2025","W2024"],"BE01000111":["S2026","W2025","S2025","W2024"],"BE01000151":["S2025","W2024"],"BE01000161":["S2026","W2025","S2025","W2024"],"BE01000181":[],"BE02R00021":["S2026"],"BE02R00031":["S2026"],"BE02R00011":["S2026"],"BE02R00061":["S2026"],"BE02000031":["S2026","W2025","S2025"],"BE02R00041":["S2026"],"BE02R00071":[],"BE02000011":["S2026","W2025","S2025"],"BE02000021":["S2026","W2025","S2025"],"BE03000071":["S2026","W2025"],"BE03R00241":[],"BE03000051":["S2026","W2025"],"BE02000061":["S2026","W2025","S2025"],"BE03000061":["S2026","W2025"],"BE02000041":["S2026","W2025","S2025"],"BE03000081":["S2026","W2025"],"BE03000251":["S2026","W2025"],"BE03000091":["S2026","W2025"],"BE04000221":["S2026"],"BE04000231":["S2026"],"BE04000101":["S2026"],"BE04000251":["S2026"],"BE04000241":["S2026"],"BE05000011":[],"BE04000261":["S2026"],"BE05000131":[],"BE05000171":[],"BE05000281":[],"BE05000441":[],"BE05000261":[],"BE05000181":[],"BE05000431":[],"BE05000231":[],"BE05000471":[],"BE05000451":[],"BE05000541":[],"BE05000521":[],"BE05000481":[],"BE05000531":[],"BE05000491":[],"BE05000501":[],"BE05000551":[],"noc26-mg139":[],"BE05000571":[],"BE05000561":[],"noc26-cs136":[],"noc26-mg122":[],"noc26-cs186":[],"noc26-cs158":[],"noc26-bt86":[],"BE07000191":[],"BE07000201":[],"BE07000181":[],"BE07000161":[],"BE07000171":[],"BE07000151":[],"noc26-cs138":[],"noc26-cs188":[],"noc26-cs150":[]},
  semesters: [
  {
    "sem": 1,
    "label": "Semester 1",
    "level": "First Year",
    "effFrom": "2026-27",
    "batch": "Batch 2026",
    "subjects": [
      {
        "name": "Student Induction Program with Essence of Indian Knowledge System",
        "code": "BE01R00011",
        "kind": "audit",
        "codes": [
          "BE01R00011",
          "BE01000011"
        ]
      },
      {
        "name": "Physics",
        "code": "BE01RR0021",
        "kind": "core",
        "codes": [
          "BE01RR0021",
          "BE01R00021",
          "BE01000021",
          "3110018"
        ]
      },
      {
        "name": "Chemistry",
        "code": "BE01R00031",
        "kind": "core",
        "codes": [
          "BE01R00031",
          "BE01000031",
          "3110001"
        ]
      },
      {
        "name": "Mathematics - I",
        "code": "BE01R00041",
        "kind": "core",
        "codes": [
          "BE01R00041",
          "BE01000041",
          "3110014"
        ]
      },
      {
        "name": "Basic Electrical Engineering",
        "code": "BE01R00051",
        "kind": "core",
        "codes": [
          "BE01R00051",
          "BE01000051",
          "3110005"
        ]
      },
      {
        "name": "Engineering Graphics & Design",
        "code": "BE01R00061",
        "kind": "core",
        "codes": [
          "BE01R00061",
          "BE01000061",
          "3110013"
        ]
      },
      {
        "name": "Design Thinking",
        "code": "BE01R00071",
        "kind": "audit",
        "codes": [
          "BE01R00071",
          "BE01000071"
        ]
      },
      {
        "name": "Basic Mechanical Engineering",
        "code": "BE01R00081",
        "kind": "core",
        "codes": [
          "BE01R00081",
          "BE01000081",
          "3110006"
        ]
      },
      {
        "name": "Basic Electronics Engineering",
        "code": "BE01R00111",
        "kind": "core",
        "codes": [
          "BE01R00111",
          "BE01000111",
          "3110016"
        ]
      },
      {
        "name": "Programming for Problem Solving",
        "code": "BE01R00121",
        "kind": "core",
        "codes": [
          "BE01R00121",
          "BE01000121",
          "3110003"
        ]
      },
      {
        "name": "Universal Human Values",
        "code": "BE01R00141",
        "kind": "core",
        "codes": [
          "BE01R00141",
          "BE01000141"
        ]
      },
      {
        "name": "Contributor Personality Development Program",
        "code": "BE01R00151",
        "kind": "core",
        "codes": [
          "BE01R00151",
          "BE01000151"
        ]
      },
      {
        "name": "Integrated Personality Development Course",
        "code": "BE01R00161",
        "kind": "core",
        "codes": [
          "BE01R00161",
          "BE01000161"
        ]
      },
      {
        "name": "Digital Fabrication Workshop",
        "code": "BE01R00181",
        "kind": "audit",
        "codes": [
          "BE01R00181",
          "BE01000181"
        ]
      }
    ]
  },
  {
    "sem": 2,
    "label": "Semester 2",
    "level": "First Year",
    "effFrom": "2025-26",
    "batch": "Batch 2026",
    "subjects": [
      {
        "name": "Mathematics - 2",
        "code": "BE02R00011",
        "kind": "core",
        "codes": [
          "BE02R00011",
          "BE02000011"
        ]
      },
      {
        "name": "English for Technical Communication",
        "code": "BE02R00021",
        "kind": "core",
        "codes": [
          "BE02R00021",
          "BE02000021"
        ]
      },
      {
        "name": "Intellectual Property Rights",
        "code": "BE02R00031",
        "kind": "elective",
        "codes": [
          "BE02R00031",
          "BE02000031"
        ]
      },
      {
        "name": "Fundamental of AI",
        "code": "BE02R00041",
        "kind": "elective",
        "codes": [
          "BE02R00041",
          "BE02000041"
        ]
      },
      {
        "name": "Industrial Safety and Standards",
        "code": "BE02R00061",
        "kind": "elective",
        "codes": [
          "BE02R00061",
          "BE02000061"
        ]
      },
      {
        "name": "Standardization and Quality Ecosystem",
        "code": "BE02R00071",
        "kind": "elective",
        "codes": [
          "BE02R00071"
        ]
      }
    ]
  },
  {
    "sem": 3,
    "label": "Semester 3",
    "level": "Second Year",
    "effFrom": "2026-27",
    "batch": "Batch 2025",
    "subjects": [
      {
        "name": "Indian Knowledge System for Engineering",
        "code": "BE03R00241",
        "kind": "audit",
        "codes": [
          "BE03R00241"
        ]
      },
      {
        "name": "Professional Communication and Ethics",
        "code": "BE03000051",
        "kind": "core",
        "codes": [
          "BE03000051",
          "3130004"
        ]
      },
      {
        "name": "Indian Constitution",
        "code": "BE03000061",
        "kind": "audit",
        "codes": [
          "BE03000061",
          "3130007"
        ]
      },
      {
        "name": "Digital Fundamentals",
        "code": "BE03000071",
        "kind": "core",
        "codes": [
          "BE03000071",
          "3130704"
        ]
      },
      {
        "name": "Data Structures",
        "code": "BE03000081",
        "kind": "core",
        "codes": [
          "BE03000081",
          "3130702"
        ]
      },
      {
        "name": "Database Management System",
        "code": "BE03000091",
        "kind": "core",
        "codes": [
          "BE03000091",
          "3130703"
        ]
      },
      {
        "name": "Probability and Statistics",
        "code": "BE03000251",
        "kind": "core",
        "codes": [
          "BE03000251",
          "3130006"
        ]
      }
    ]
  },
  {
    "sem": 4,
    "label": "Semester 4",
    "level": "Second Year",
    "effFrom": "2025-26",
    "batch": "Batch 2025",
    "subjects": [
      {
        "name": "Environmental Science, Sustainability and Renewable Energy",
        "code": "BE04000101",
        "kind": "core",
        "codes": [
          "BE04000101",
          "3110007"
        ]
      },
      {
        "name": "Operating System",
        "code": "BE04000221",
        "kind": "core",
        "codes": [
          "BE04000221",
          "3140702"
        ]
      },
      {
        "name": "Object Oriented Programming",
        "code": "BE04000231",
        "kind": "core",
        "codes": [
          "BE04000231",
          "3140705"
        ]
      },
      {
        "name": "Analysis and Design of Algorithms",
        "code": "BE04000241",
        "kind": "core",
        "codes": [
          "BE04000241",
          "3150703"
        ]
      },
      {
        "name": "Computer Organization & Architecture",
        "code": "BE04000251",
        "kind": "core",
        "codes": [
          "BE04000251",
          "3140707"
        ]
      },
      {
        "name": "Discrete Mathematics and Graph Theory",
        "code": "BE04000261",
        "kind": "core",
        "codes": [
          "BE04000261",
          "3140708"
        ]
      }
    ]
  },
  {
    "sem": 5,
    "label": "Semester 5",
    "level": "Third Year",
    "effFrom": "2026-27",
    "batch": "Batch 2024",
    "subjects": [
      {
        "name": "Societal Internship",
        "code": "BE05000011",
        "kind": "project",
        "codes": [
          "BE05000011"
        ]
      },
      {
        "name": "Advanced Java Programming",
        "code": "BE05000131",
        "kind": "core",
        "codes": [
          "BE05000131",
          "3160707"
        ]
      },
      {
        "name": "Computer Networks",
        "code": "BE05000171",
        "kind": "core",
        "codes": [
          "BE05000171",
          "3150710"
        ]
      },
      {
        "name": "Data Mining Techniques",
        "code": "BE05000181",
        "kind": "core",
        "codes": [
          "BE05000181",
          "3160714"
        ]
      },
      {
        "name": "Python for Data Science",
        "code": "BE05000231",
        "kind": "core",
        "codes": [
          "BE05000231",
          "3150713"
        ]
      },
      {
        "name": "System Software",
        "code": "BE05000261",
        "kind": "core",
        "codes": [
          "BE05000261",
          "3160715"
        ]
      },
      {
        "name": "Web Application Development",
        "code": "BE05000281",
        "kind": "core",
        "codes": [
          "BE05000281",
          "3160713"
        ]
      },
      {
        "name": "Energy Audit and Management",
        "code": "BE05000431",
        "kind": "elective",
        "codes": [
          "BE05000431"
        ]
      },
      {
        "name": "Application of Remote Sensing and GIS in Engineering",
        "code": "BE05000441",
        "kind": "elective",
        "codes": [
          "BE05000441"
        ]
      },
      {
        "name": "Occupational Health & Safety Management",
        "code": "BE05000451",
        "kind": "elective",
        "codes": [
          "BE05000451"
        ]
      },
      {
        "name": "Oil Hydraulics and Pneumatics",
        "code": "BE05000471",
        "kind": "elective",
        "codes": [
          "BE05000471"
        ]
      },
      {
        "name": "Project Management",
        "code": "BE05000481",
        "kind": "elective",
        "codes": [
          "BE05000481"
        ]
      },
      {
        "name": "Introduction to Biomedical Technology",
        "code": "BE05000491",
        "kind": "elective",
        "codes": [
          "BE05000491"
        ]
      },
      {
        "name": "Instrumentation and Measurement Techniques",
        "code": "BE05000501",
        "kind": "elective",
        "codes": [
          "BE05000501"
        ]
      },
      {
        "name": "Sustainability and Circularity in Textile Industry",
        "code": "BE05000521",
        "kind": "elective",
        "codes": [
          "BE05000521"
        ]
      },
      {
        "name": "Textile for Engineering Application",
        "code": "BE05000531",
        "kind": "elective",
        "codes": [
          "BE05000531"
        ]
      },
      {
        "name": "Fundamental of Power Electronics",
        "code": "BE05000541",
        "kind": "elective",
        "codes": [
          "BE05000541"
        ]
      },
      {
        "name": "Microprocessor and Interfacing",
        "code": "BE05000551",
        "kind": "elective",
        "codes": [
          "BE05000551",
          "3160712"
        ]
      },
      {
        "name": "Sustainable Energy Technology",
        "code": "BE05000561",
        "kind": "elective",
        "codes": [
          "BE05000561"
        ]
      },
      {
        "name": "Sustainable Polymers: Materials, Safety and Circular Economy",
        "code": "BE05000571",
        "kind": "elective",
        "codes": [
          "BE05000571"
        ]
      },
      {
        "name": "The Joy of Computing using Python",
        "code": "noc26-cs136",
        "kind": "mooc",
        "codes": [
          "noc26-cs136"
        ]
      },
      {
        "name": "Advanced R Programming for Data Analytics in Business",
        "code": "noc26-mg122",
        "kind": "mooc",
        "codes": [
          "noc26-mg122"
        ]
      },
      {
        "name": "Digital Marketing in the AI era - Part 1",
        "code": "noc26-mg139",
        "kind": "mooc",
        "codes": [
          "noc26-mg139"
        ]
      }
    ]
  },
  {
    "sem": 6,
    "label": "Semester 6",
    "level": "Third Year",
    "effFrom": "Dec 2020",
    "batch": "Batch 2024",
    "subjects": [
      {
        "name": "Design Engineering - II B",
        "code": "3160001",
        "kind": "project",
        "codes": [
          "3160001"
        ]
      },
      {
        "name": "Theory of Computation",
        "code": "3160704",
        "kind": "core",
        "codes": [
          "3160704"
        ]
      },
      {
        "name": "Microprocessor and Interfacing",
        "code": "3160712",
        "kind": "core",
        "codes": [
          "3160712"
        ]
      },
      {
        "name": "Contributor Personality Development Program",
        "code": "3160002",
        "kind": "elective",
        "codes": [
          "3160002"
        ]
      },
      {
        "name": "Integrated Personality Development Course",
        "code": "3160003",
        "kind": "elective",
        "codes": [
          "3160003"
        ]
      },
      {
        "name": "Advanced Java Programming",
        "code": "3160707",
        "kind": "elective",
        "codes": [
          "3160707"
        ]
      },
      {
        "name": "Web Programming",
        "code": "3160713",
        "kind": "elective",
        "codes": [
          "3160713"
        ]
      },
      {
        "name": "Data Mining",
        "code": "3160714",
        "kind": "elective",
        "codes": [
          "3160714"
        ]
      },
      {
        "name": "System Software",
        "code": "3160715",
        "kind": "elective",
        "codes": [
          "3160715"
        ]
      },
      {
        "name": "IoT and Applications",
        "code": "3160716",
        "kind": "elective",
        "codes": [
          "3160716"
        ]
      },
      {
        "name": "Data Visualization",
        "code": "3160717",
        "kind": "elective",
        "codes": [
          "3160717"
        ]
      },
      {
        "name": "Computer Vision",
        "code": "noc26-cs158",
        "kind": "mooc",
        "codes": [
          "noc26-cs158"
        ]
      },
      {
        "name": "Mobile Virtual Reality and Artificial Intelligence",
        "code": "noc26-cs186",
        "kind": "mooc",
        "codes": [
          "noc26-cs186"
        ]
      },
      {
        "name": "Next Generation Sequencing Technologies Data Analysis and Applications",
        "code": "noc26-bt86",
        "kind": "mooc",
        "codes": [
          "noc26-bt86"
        ]
      }
    ]
  },
  {
    "sem": 7,
    "label": "Semester 7",
    "level": "Final Year",
    "effFrom": "June 2021",
    "batch": "Batch 2023",
    "subjects": [
      {
        "name": "Summer Internship",
        "code": "3170001",
        "kind": "project",
        "codes": [
          "3170001"
        ]
      },
      {
        "name": "Compiler Design",
        "code": "3170701",
        "kind": "core",
        "codes": [
          "3170701"
        ]
      },
      {
        "name": "Artificial Intelligence",
        "code": "3170716",
        "kind": "core",
        "codes": [
          "3170716"
        ]
      },
      {
        "name": "Mobile Computing and Wireless Communication",
        "code": "3170710",
        "kind": "elective",
        "codes": [
          "3170710"
        ]
      },
      {
        "name": "Cloud Computing",
        "code": "3170717",
        "kind": "elective",
        "codes": [
          "3170717"
        ]
      },
      {
        "name": "Information Retrieval",
        "code": "3170718",
        "kind": "elective",
        "codes": [
          "3170718"
        ]
      },
      {
        "name": "Distributed System",
        "code": "3170719",
        "kind": "elective",
        "codes": [
          "3170719"
        ]
      },
      {
        "name": "Information Security",
        "code": "3170720",
        "kind": "elective",
        "codes": [
          "3170720"
        ]
      },
      {
        "name": "Parallel and Distributed Computing",
        "code": "3170721",
        "kind": "elective",
        "codes": [
          "3170721"
        ]
      },
      {
        "name": "Big Data Analytics",
        "code": "3170722",
        "kind": "elective",
        "codes": [
          "3170722"
        ]
      },
      {
        "name": "Natural Language Processing",
        "code": "3170723",
        "kind": "elective",
        "codes": [
          "3170723"
        ]
      },
      {
        "name": "Machine Learning",
        "code": "3170724",
        "kind": "elective",
        "codes": [
          "3170724"
        ]
      },
      {
        "name": "Digital Forensics",
        "code": "3170725",
        "kind": "elective",
        "codes": [
          "3170725"
        ]
      },
      {
        "name": "Mobile Application Development",
        "code": "3170726",
        "kind": "elective",
        "codes": [
          "3170726"
        ]
      },
      {
        "name": "Deep Learning",
        "code": "noc26-cs138",
        "kind": "mooc",
        "codes": [
          "noc26-cs138"
        ]
      },
      {
        "name": "Cloud Computing",
        "code": "noc26-cs150",
        "kind": "mooc",
        "codes": [
          "noc26-cs150"
        ]
      },
      {
        "name": "Programming with Generative AI",
        "code": "noc26-cs188",
        "kind": "mooc",
        "codes": [
          "noc26-cs188"
        ]
      }
    ]
  },
  {
    "sem": 8,
    "label": "Semester 8",
    "level": "Final Year",
    "effFrom": "Dec 2017",
    "batch": "Batch 2023",
    "subjects": [
      {
        "name": "Internship/Project",
        "code": "3180701",
        "kind": "project",
        "codes": [
          "3180701"
        ]
      },
      {
        "name": "Project (Phase-II)",
        "code": "2180706",
        "kind": "project",
        "codes": [
          "2180706"
        ]
      },
      {
        "name": "Artificial Intelligence",
        "code": "2180703",
        "kind": "core",
        "codes": [
          "2180703"
        ]
      },
      {
        "name": "IoT and Applications",
        "code": "2180709",
        "kind": "elective",
        "codes": [
          "2180709"
        ]
      },
      {
        "name": "Big Data Analytics",
        "code": "2180710",
        "kind": "elective",
        "codes": [
          "2180710"
        ]
      },
      {
        "name": "Python Programming",
        "code": "2180711",
        "kind": "elective",
        "codes": [
          "2180711"
        ]
      },
      {
        "name": "Cloud Infrastructure and Services",
        "code": "2180712",
        "kind": "elective",
        "codes": [
          "2180712"
        ]
      },
      {
        "name": "Web Data Management",
        "code": "2180713",
        "kind": "elective",
        "codes": [
          "2180713"
        ]
      },
      {
        "name": "iOS Programming",
        "code": "2180714",
        "kind": "elective",
        "codes": [
          "2180714"
        ]
      },
      {
        "name": "Android Programming",
        "code": "2180715",
        "kind": "elective",
        "codes": [
          "2180715"
        ]
      }
    ]
  }
]
};
