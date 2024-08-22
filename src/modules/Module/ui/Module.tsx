import { Header } from "./Header/Header";
import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";

const Module = () => {
  return (
    <Layout header={<Header />} main={<Main />} footer={<div>Footer</div>} />
  );
};

export { Module };
