const foodlyImages = import.meta.glob("../../assets/projects/foodly/*.png", {
  eager: true,
});
const mailAIImages = import.meta.glob("../../assets/projects/mailAI/*.png", {
  eager: true,
});
const touchTimeImages = import.meta.glob(
  "../../assets/projects/touchTime/*.png",
  {
    eager: true,
  }
);

export const ProjectsImages = {
  foodly: Object.values(foodlyImages).map((img) => img.default),
  mailAI: Object.values(mailAIImages).map((img) => img.default),
  touchTime: Object.values(touchTimeImages).map((img) => img.default),
};
