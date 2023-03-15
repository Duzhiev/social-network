import React, { useEffect } from "react";
import { fetchUser } from "../features/usersSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";

const MainPage = () => {
  const dispatch = useAppDispatch();

  const users = useTypedSelector((state) => state.users.users);
  const error = useTypedSelector((state) => state.users.error);
  const loading = useTypedSelector((state) => state.users.loading);

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
