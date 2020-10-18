import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import '../scss/Create.scss'

const CreateLink = () => {
    const [link, setLink] = useState('')
    const {request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)

    const pressHandler = async(event) => {
        if(event.key === 'Enter'){
            try{
                const data = await request('/api/link/generate', "POST", {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/${data.link._id}`)
            }
            catch(err){

            }
        }
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__title">
                    Enter reference
                </div>
                <div className="content__input">
                    <input 
                      type="text"
                      onChange={e => setLink(e.target.value)}
                      onKeyPress={pressHandler}
                      value={link}
                     />
                </div>
            </div>
        </div>
    )
}

export default CreateLink