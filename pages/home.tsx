import { Editor } from "../components/Editor";
import { Layout } from "../components/Layout";
import dynamic from "next/dynamic";
import React from "react";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Editor/EditorContainer"),
  { ssr: false }
);

const Home = () => {
  return (
    <Layout>
      <div style={{ width: "85%" }} id="editor"></div>

      <DynamicComponentWithNoSSR />
    </Layout>
  );
};

export default Home;
