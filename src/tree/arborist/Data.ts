export const initialTreeData = [
  { id: "0", name: "Unread" },
  { id: "1", name: "Threads" },
  {
    id: "2",
    name: "Chat Rooms",
    children: [
      { id: "2-0", name: "General" },
      { id: "2-1", name: "Random" },
      { id: "2-2", name: "Open Source Projects" },
    ],
  },
  {
    id: "3",
    name: "Direct Messages",
    children: [
      { id: "3-0", name: "Alice" },
      { id: "3-1", name: "Bob" },
      { id: "3-2", name: "Charlie" },
    ],
  },
];
