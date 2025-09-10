const stacks = import.meta.glob("../../assets/stacks/*.png", {
  eager: true,
});

//Transform into object
export const StacksImages = Object.fromEntries(
  Object.entries(stacks).map(([path, module]) => {
    const fileName = path.split("/").pop().replace(".png", ""); // pega só o nome do arquivo
    return [fileName, module.default];
  })
);
