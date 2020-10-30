import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    useEffect(() => {
        const slug = props.match.params.slug;
        if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
    }, [props.match.params.slug]);

    const handleChange = ({ target }) => {
        setCourse({ ...course, [target.name]: target.value }); // from the path '/courses/:slug'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved!!!");
        });
    };

    const formIsValid = () => {
        const _errros = {};

        if (!course.title) _errros.title = "Tilte is required";
        if (!course.authorId) _errros.authorId = "Author ID is required";
        if (!course.category) _errros.category = "Category is required";

        setErrors(_errros);

        //Form is valid if error object has no properties
        return Object.keys(_errros).length === 0;
    };

    return (
        <>
            <h2>Manage Courses</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors}></CourseForm>
        </>
    );
};

export default ManageCoursePage;
