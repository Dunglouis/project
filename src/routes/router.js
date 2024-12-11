import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/pagenotfound";
import { HomePage } from "../pages/home";
import { ComingSoon } from "../pages/commingsoon";
import { StudyPlant } from "../pages/studyplant";
import { FrontEnd } from "../pages/studyfrontend";
import { BackEnd } from "../pages/studyBackEnd";
import { Blog } from "../pages/blog";
import { Courses } from "../pages/courses";
import { FlashCard } from "../pages/flashcard";
import { QuestionFlashCard } from "../pages/formflashcard";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/singup";
import { ResetPassword } from "../pages/auth/resetpassword";
import { DetailsCourse } from "../pages/detailscourse";
import { FormStudy } from "../pages/formstudy/formstudy";
import { Practice } from "../pages/formpractice";
import { Product } from "../pages/product";
import { FormBlog } from "../pages/formblog/formblog";
import { Personal } from "../pages/personal";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/studyplant" element={<StudyPlant />}></Route>
      <Route path="/studyplant/frontEnd" element={<FrontEnd />}></Route>
      <Route path="/studyplant/backEnd" element={<BackEnd />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/courses/details-course" element={<DetailsCourse />}></Route>
      <Route path="/courses/form-practice" element={<Practice />}></Route>
      <Route path="/courses/form-study" element={<FormStudy />}></Route>
      <Route path="/courses/form-blog" element={<FormBlog />}></Route>
      <Route path="/courses/form-blog/*" element={<FormBlog />}></Route>
      <Route path="/flashcard" element={<FlashCard />}></Route>
      <Route path="/labcode" element={<ComingSoon />}></Route>
      <Route path="/link" element={<Product />}></Route>
      <Route path="/user" element={<ComingSoon />}></Route>
      <Route path="/mycourses" element={<ComingSoon />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/resetpassword" element={<ResetPassword />}></Route>
      {/* Phan flash card  */}
      <Route
        path="/studyplant/frontEnd/flashcard_htmlcss"
        element={<QuestionFlashCard />}
      ></Route>
      <Route
        path="/studyplant/frontEnd/flashcard_reactjs"
        element={<QuestionFlashCard />}
      ></Route>
      <Route
        path="/studyplant/frontEnd/flashcard_javascript"
        element={<QuestionFlashCard />}
      ></Route>
      <Route path="/personal" element={<Personal />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoute;
