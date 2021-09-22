import React from "react";
import Image from "next/Image";
import { FcApproval, IconName } from "react-icons/fc";
const GitHubUsers = ({ users }) => {
  return (
    <div>
      <h2>List of GitHub Users</h2>

      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.slice(0, 9).map((curElem) => {
            const { id, name, thumbnailUrl, title, url } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <Image
                        src="/user.jpg"
                        className="rounded"
                        width="120"
                        height="155"
                        alt="image"
                      ></Image>
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {title} <FcApproval></FcApproval>
                      </h4>{" "}
                      <span className="textLeft">{url}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded stats text-white">
                        <div className="d-flex flex-column">
                          <span className="articles"></span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="flowers"></span>
                          <span className="number2">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating"></span>
                          <span className="number3">38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitHubUsers;
