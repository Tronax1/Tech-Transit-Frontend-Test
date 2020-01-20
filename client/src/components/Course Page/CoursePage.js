import React from 'react'
import CourseCard from '../Courses/CourseCard'
import axios from 'axios';
import {useState, useEffect} from 'react'

import '../../styles/CoursePage.scss'

export default function CoursePage() {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            let allCourses = [];
            
            let url = '/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name='
            do{
                const pageCourses = await axios.get(`https://cors-anywhere.herokuapp.com/https://test.mytablemesa.com${url}`);
                url = pageCourses.data.next;
                console.log(url)
                allCourses = allCourses.concat(pageCourses.data.items);
                console.log(allCourses);
            }while(url != null);

            setCourses(allCourses);
        }
        fetchData();
    }, []);
    console.log(courses);

    return (
        <div className = "Courses-Structure">
            {courses.map((item, i) =>(
                <CourseCard key={i} title={item.name} author={item.provider.name} 
                price={item.price} credits={item.maximumCredits} stars={item.rating} />
            ))}
        </div>
    )
}
