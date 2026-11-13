// Resolves a story's authorId to a person (the founder lives apart from the team list).
export function getAuthor(t, id) {
  if (id === "aarti") return { id, name: t.founder.name, role: t.founder.role, photo: "/images/aarti-singh.jpg", text: t.founder.bio };
  return t.people.find((p) => p.id === id) ?? { id: "team", name: t.brand.name, role: "", photo: "/images/logo.png" };
}
