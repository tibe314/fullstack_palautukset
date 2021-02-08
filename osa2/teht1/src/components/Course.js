import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
        <h2>{course.name}</h2>
            {course.parts.map(x =>
                <p key={x.id}>
                    {x.name} {x.exercises}
                </p>
            )}
            <p><b> Number of exercises {course.parts.reduce(function(sum, x) {
            return sum + x.exercises
        }, 0)}
        </b></p>
        </div>
    )
}

export default Course