import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import Search from '../components/Search'
import { useParams } from 'react-router-dom'

const Main = () => {
    const params = useParams();
    const [normal, setNormal] = useState(true)
    const [movName, setMovName] = useState('')
    useEffect(() => {
        if (params.length !== 0) {
            setNormal(false)
            if (params.movName) {
                setMovName(params.movName)
            }
        }
    }, [params])

    if (normal) {
        return (
            <div>
                <Search />
                <h2 style={{ textAlign: 'center' }}>IN THEATERS</h2>
                <Home />
            </div>
        )
    } else {
        return (
            <div>
                <Search query={movName} />
                <h2 style={{ textAlign: 'center' }}>IN THEATERS</h2>
                <Home />
            </div>
        )
    }
    
}

export default Main
