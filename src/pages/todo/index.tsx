import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// 
import { TODO_CONTENT } from './content.ts';



export default function Test(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      {/* <main>
      </main> */}
      <ul>
        {TODO_CONTENT.map((item,index) => {
          return (
            <li key={index} >
              {item.title}
            </li>
          )
        })}
      </ul>
    </Layout>
  );
}
