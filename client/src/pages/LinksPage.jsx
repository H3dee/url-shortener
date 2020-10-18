import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import LinksList from '../components/LinksList'
import Loader from '../components/Loader'

const LinksPage = () => {
    const [links, setLinks] = useState([])
    const { loading, request } = useHttp()
    const {token} = useContext(AuthContext)

    const getLinks = useCallback(async () => {
        try{
            const fetchedLinks = await request('/api/link', "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetchedLinks)
        }
        catch(e){}
    }, [request, token])

    useEffect(() => {
        getLinks()
    }, [getLinks])

    if(loading){
        return <Loader />
    }

    return (
        <div className="content">
            <div className="container">
                {!loading && <LinksList links={links}/>}
            </div>
        </div>
    )
}

export default LinksPage