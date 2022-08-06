import { Avatar, Divider, List } from "antd";
import { Lesson } from "api/getLessons";
import logo from "lesson_avatar.png";
import { FC } from "react";
import styled from "styled-components";

interface ILessonList {
  lessons: Lesson[];
}

const ListItem = styled(List.Item.Meta)`
  text-align: left;
`;

export const LessonList: FC<ILessonList> = ({ lessons }) => {
  return (
    <>
      <Divider orientation="left">Lessons</Divider>
      <List
        bordered
        dataSource={lessons}
        renderItem={(lesson) => (
          <List.Item>
            <ListItem
              avatar={<Avatar src={logo} />}
              title={<a href={lesson.content.link}>{lesson.name}</a>}
              description={lesson.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};
