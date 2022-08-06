import { getLessons, Lesson } from "api/getLessons";
import { LayoutProvider } from "components/Layout/LayoutProvider";
import { LessonList } from "components/LessonList";
import { SkeletonLoader } from "components/SkeletonLoader";
import { useEffect, useState } from "react";

const App = () => {
  const [lessons, setLessons] = useState<Lesson[]>();

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const lessons = await getLessons();

    setLessons(lessons);
  };

  const loadLessons = () => {
    if (!lessons) {
      return <SkeletonLoader />;
    }
    return <LessonList lessons={lessons} />;
  };

  return <LayoutProvider>{loadLessons()}</LayoutProvider>;
};

export default App;
