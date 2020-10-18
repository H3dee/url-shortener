import React from "react";
import { Link } from "react-router-dom";

const LinksList = (props) => {
  if (!props.links.length) {
    return (
      <h2 className="center" style={{ fontSize: "30px" }}>
        There are not references yet
      </h2>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Shorted</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {props.links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td> {link.to} </td>
              <td>
                <Link to={`/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LinksList;
