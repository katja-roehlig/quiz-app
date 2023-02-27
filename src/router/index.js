import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "@/views/QuizesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuizesView,
    },
  ],
});
export default router;
