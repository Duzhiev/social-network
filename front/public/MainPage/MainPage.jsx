import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../src/features/usersSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
};

export default MainPage;
