import React, { useState } from 'react';
import './index.css'; // Import the main CSS

const ConfigurePage = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [teacherName, setTeacherName] = useState('');

    const addStudent = () => {
        if (studentName) {
            setStudents([...students, studentName]);
            setStudentName('');
        }
    };

    const addTeacher = () => {
        if (teacherName) {
            setTeachers([...teachers, teacherName]);
            setTeacherName('');
        }
    };

    return (
        <div className="configure-page">
            <h1>Configure Students and Teachers</h1>
            <div className="form-container">
               
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button onClick={addStudent} style={{marginRight:"20px"}}>Add Student</button>

           
                <input
                    type="text"
                    placeholder="Teacher Name"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                />
                <button onClick={addTeacher}>Add Teacher</button>
            </div>

            <div className="list-container">
       
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

         
                <table>
                    <thead>
                        <tr>
                            <th>Teacher Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher, index) => (
                            <tr key={index}>
                                <td>{teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConfigurePage;
