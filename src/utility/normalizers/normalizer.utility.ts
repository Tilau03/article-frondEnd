export const normalize = <A extends Record<keyof A, any>>(
  array: A[],
  nameId: keyof A
) => {
  const normalizeArray = array.reduce(
    (acc: Record<A[keyof A], A>, element: A) => {
      acc[element[nameId]] = element;

      return acc;
    },
    {}
  );

  return normalizeArray;
};

/* const array = [
  {
    _id: "sdfsdfsdfsdfsdf",
    name: "Juna",
  },
  {
    _id: "sdfsdsasasasasfsdfsdfsdf",
    name: "Maria",
  },
];

////RESULTADO
const object = {
  sdfsdfsdfsdfsdf: {
    _id: "sdfsdfsdfsdfsdf",
    name: "Juna",
  },
  sdfsdsasasasasfsdfsdfsdf: {
    _id: "sdfsdsasasasasfsdfsdfsdf",
    name: "Maria",
  },
};
const data = normalize<{ _id: string; name: string }>(array, "_id");

console.log(data);
 */
