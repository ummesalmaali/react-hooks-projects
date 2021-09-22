import React, { useEffect, useState } from "react";
import GitHubUsers from "./Forms/UseEffects/GitHubUsers";
import Loading from "./Forms/UseEffects/Loading";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setLoading(false);
      console.log("the problem is you cant type properly hahahaha", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <GitHubUsers users={users} />
    </div>
  );
};

export default UseEffectApi;
