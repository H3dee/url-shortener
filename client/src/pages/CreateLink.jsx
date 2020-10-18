import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from '../context/AuthContext'
import { useHistory} from 'react-router-dom'
import "../scss/Create.scss";

export const CreateLink = () => {
  const [link, setLink] = useState("");
  const { request } = useHttp();
  const auth = useContext(AuthContext)
  const history = useHistory()

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
            const data = await request('/api/link/generate', 'POST', {from: link}, {
                  Authorization: `Bearer ${auth.token}`
            })
            history.push(`/detail/${data.link._id}`)
      } catch (err) {}
    }
  };

  return (
    <div className="Wrapper">
      <div className="content">
        <div className="container">
          <div className="content__row">
            <div className="content__create-title">Enter reference:</div>
            <div className="content__create-input">
              <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                onKeyPress={pressHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
