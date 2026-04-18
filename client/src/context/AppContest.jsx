import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

export default AppContext;

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  // fetch all courses and set in state
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  // function to create average rating of course
  const calculateRating = (course) => {
    const ratings = course.CourseRatings ?? course.courseRatings ?? [];
    if (ratings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    ratings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / ratings.length;
  };

  const formatMinutes = (totalMinutes) => {
    const minutes = Number(totalMinutes) || 0;
    if (minutes <= 0) return "0 minutes";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return remainingMinutes > 0
        ? `${hours}h ${remainingMinutes}m`
        : `${hours}h`;
    }
    return `${remainingMinutes} minutes`;
  };

  // function to calculate course chapter time
  const calculateChapterTime = (chapter) => {
    const totalMinutes = (chapter?.chapterContent ?? []).reduce(
      (sum, lecture) => {
        const duration = Number(lecture?.lectureDuration);
        return sum + (Number.isFinite(duration) ? duration : 0);
      },
      0,
    );
    return formatMinutes(totalMinutes);
  };

  // function to calculate course duration
  const calculateCourseDuration = (course) => {
    const totalMinutes = (course?.courseContent ?? []).reduce(
      (courseSum, chapter) => {
        const chapterMinutes = (chapter?.chapterContent ?? []).reduce(
          (chapterSum, lecture) => {
            const duration = Number(lecture?.lectureDuration);
            return chapterSum + (Number.isFinite(duration) ? duration : 0);
          },
          0,
        );
        return courseSum + chapterMinutes;
      },
      0,
    );
    return formatMinutes(totalMinutes);
  };
  // function to calculate total no of lectures in a course

  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  // fetch enrolled courses

  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,
    fetchUserEnrolledCourses,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
