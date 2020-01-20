import React from 'react'
import CourseCard from '../Courses/CourseCard'
import axios from 'axios';
import {useState, useEffect} from 'react'

import '../../styles/CoursePage.scss'

export default function CoursePage() {
    const [courses, setCourses] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(()=>{
        async function fetchData() {
            let allCourses = [];
            let url = '/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name='
            
            do{
                const pageCourses = await axios.get(`https://cors-anywhere.herokuapp.com/https://test.mytablemesa.com${url}`);
                url = pageCourses.data.next;
                allCourses = allCourses.concat(pageCourses.data.items);
            }while(url != null);

            setCourses(allCourses);
        }
        fetchData();
    }, []);

    return (
        <>
            <input type = "text" onChange={e => setFilterText(e.target.value)} value = {filterText}/>
            <div className = "Courses-Structure">
                {courses.filter(name => {
                        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                    }).map((item, i) =>(
                    <CourseCard key={i} title={item.name} author={item.provider.name} 
                    price={item.price} credits={item.maximumCredits} stars={item.rating} />
                ))}
            </div>
        </>
    )
}
