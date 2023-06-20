const normalizedData = {
  "1": { id: "1", name: "John Doe" },
  "2": { id: "2", name: "Jane Smith" },
  "3": { id: "3", name: "Alice Johnson" },
};

// Convertir datos normalizados en un arreglo
const dataArray = Array.from(Object.values(normalizedData));

console.log(dataArray);
