import React from "react";

const LinkCard = ({ link }) => {
  return (
    <React.Fragment>
      <h2>Reference:</h2>
      <p>
        Your reference:
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        From:
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Дата создания:{" "}
        <strong> {new Date(link.date).toLocaleDateString()} </strong>
      </p>
    </React.Fragment>
  );
};

export default LinkCard;
