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

    const handleChange = ({ target }) => {
        setCourse({ ...course, [target.name]: target.value });
    };

    return (
        <>
            <h2>Manage Courses</h2>
            <CourseForm course={course} onChange={handleChange}></CourseForm>
        </>
    );
};

export default ManageCoursePage;
