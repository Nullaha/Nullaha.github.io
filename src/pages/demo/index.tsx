import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs, ConfigProvider } from 'antd';
import DemoGrid from './_comp/demoGrid';
// hooks
import useAntdTheme from '@site/src/hooks/useAntdTheme';
// config
import { GROUPED_DEMOS, DEMO_TYPES } from './_config/content';
// style
import styles from './index.module.css';


export default function Demo(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {curTheme} = useAntdTheme();

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      {/* <main>
      </main> */}
      <ConfigProvider theme={{algorithm: curTheme}}>
        <div className={styles.demoBox}>
          <Tabs
            defaultActiveKey="2"
            tabPosition="left"
            onChange={onChange}
            type="card"
            items={DEMO_TYPES.map((name, i) => {
              return {
                key: name,
                label: name,
                children: (<DemoGrid name={name} demos={GROUPED_DEMOS[name] || []} />),
                // icon: <Icon />,
              };
            })}
          />
        </div>
      </ConfigProvider>
    </Layout>
  );
}
