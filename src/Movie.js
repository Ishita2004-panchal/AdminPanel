import React from 'react'
import MovieManagement from './MovieManagment'

function Movie({ isSidebarOpen, theme }) {
    return (
        <div className='moviesmain'>
            <MovieManagement isSidebarOpen={isSidebarOpen} theme={theme} />
        </div>
    )
}

export default Movie