import { Skeleton } from "antd";
import { FC } from "react";
import styled from "styled-components";

interface ISkeletonLoader {
  children?: JSX.Element | JSX.Element[];
}

const SkeletonButton = styled(Skeleton.Button)`
  margin-bottom: 5px;
`;

export const SkeletonLoader: FC<ISkeletonLoader> = ({ ...otherProps }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <SkeletonButton
            block
            active
            size="default"
            shape="round"
          ></SkeletonButton>
        </div>
      ))}
    </>
  );
};
