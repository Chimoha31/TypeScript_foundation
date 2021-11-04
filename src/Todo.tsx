// import React from 'react';
import { TodoType } from "../src/types/todo";

export const Todo = (
  // props: Pick<TodoType, "userId" | "title" | "completed">
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title} (ユーザー: ${userId})`}</p>;
};
