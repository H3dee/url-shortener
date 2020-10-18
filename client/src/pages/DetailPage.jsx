import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Link from "../components/LinkCard";
import Loader from '../components/Loader'
import "../scss/LinkCard.scss";

const DetailPage = () => {
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;
  const { token } = useContext(AuthContext);

  const getLink = useCallback(async () => {
    try{
        const fetchedLink = await request(`/api/link/${linkId}`, "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          setLink(fetchedLink);
    }
    catch(e){}
  }, [linkId, token, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <div className="container">
        {!loading && link && <Link link={link} />}
      </div>
    </div>
  );
};

export default DetailPage;
