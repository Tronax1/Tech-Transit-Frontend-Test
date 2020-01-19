import React from 'react'
import CourseCard from '../Courses/CourseCard'
import axios from 'axios';
import {useState, useEffect} from 'react'

import '../../styles/CoursePage.scss'

export default function CoursePage() {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const allCourses = await axios.get('https://cors-anywhere.herokuapp.com/https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=')
            setCourses(allCourses.data.items);
        }
        fetchData();
    }, []);
    console.log(courses);

    return (
        <div className = "Courses-Structure">
            {courses.map((item, i) =>(
                <CourseCard key={i} />
            ))}
        </div>
    )
}
