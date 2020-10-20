import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    const handleTitleChange = (event) => {
        const updatedCourse = { ...course, title: event.target.value };
        setCourse(updatedCourse);
    };

    return (
        <>
            <h2>Manage Courses</h2>
            <CourseForm course={course} onTitleChange={handleTitleChange}></CourseForm>
        </>
    );
};

export default ManageCoursePage;
