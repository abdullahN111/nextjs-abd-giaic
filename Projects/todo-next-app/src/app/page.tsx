import type { NextPage } from "next";
import React from "react";
import TodoList from "./components/TodoList";

const Home: NextPage = () => {
  return (
    <>
    
      <TodoList></TodoList>
    </>
  );
};

export default Home;
