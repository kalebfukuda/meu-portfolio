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
const passGameImages = import.meta.glob(
  "../../assets/projects/password/*.png",
  {
    eager: true,
  }
);
const famisafeImages = import.meta.glob(
  "../../assets/projects/famiSafe/*.png",
  {
    eager: true,
  }
);

export const ProjectsImages = {
  foodly: Object.values(foodlyImages).map((img) => img.default),
  mailAI: Object.values(mailAIImages).map((img) => img.default),
  touchTime: Object.values(touchTimeImages).map((img) => img.default),
  passGame: Object.values(passGameImages).map((img) => img.default),
  famiSafe: Object.values(famisafeImages).map((img) => img.default),
};
