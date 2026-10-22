// Edit this file to update the Education & Certifications section.
// Do not add grades, certificate IDs, issuing bodies or dates that are not confirmed.
//
// kind: "certification" | "ongoing" | "completed" | "future"  (controls marker shape and tag)
// Items display in the order listed.

export const kindLabels = {
  certification: "Certification",
  ongoing: "In progress",
  completed: "Completed",
  future: "Planned · Upcoming",
};

export const education = [
  {
    id: "accai",
    kind: "certification",
    title: "Diploma in ACCAI",
    meta: ["2025", "1 Year"],
  },
  {
    id: "adse",
    kind: "ongoing",
    title: "ADSE / Web Development Diploma",
    institution: "Aptech Learning Centre, Gulshan II",
  },
  {
    id: "intermediate",
    kind: "completed",
    title: "Intermediate — Pre-Engineering",
    institution: "Shaheed-e-Millat Degree College",
  },
  {
    id: "matriculation",
    kind: "completed",
    title: "Matriculation — Computer Science",
    institution: "Practical Schooling System",
  },
  {
    id: "graduation",
    kind: "future",
    title: "Upcoming Graduation",
    institution: "Planned field: Computer Science / Information Technology / Software Engineering",
    note: "A future academic goal. University, start date and graduation year are not confirmed yet.",
  },
];
