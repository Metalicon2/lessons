import { AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { StyledSider } from "components/Layout/StyledSider";
import "index.css";
import logo from "lesson_avatar.png";
import { FC } from "react";
import { StyledFooter } from "./StyledFooter";
import { StyledLogo } from "./StyledLogo";

interface ILayoutProvider {
  children?: JSX.Element | JSX.Element[];
}

export const LayoutProvider: FC<ILayoutProvider> = ({ children }) => (
  <Layout hasSider>
    <StyledSider>
      <StyledLogo src={logo} alt="Logo" size="large" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={[
          {
            key: 0,
            icon: <AppstoreOutlined />,
            label: "Lesson 1",
          },
        ]}
      />
    </StyledSider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Layout.Header
        className="site-layout-background"
        style={{ padding: 0 }}
      />
      <Layout.Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          {children}
        </div>
      </Layout.Content>
      <StyledFooter>Guitar Lessons™ 2022</StyledFooter>
    </Layout>
  </Layout>
);
