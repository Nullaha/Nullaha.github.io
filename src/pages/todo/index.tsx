import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TodoGrid from './_comp/todoGrid';

import styles from './index.module.css';
// 

import { TODO_CONTENT, groupByYearAndMonth,ITodoItem } from './_config/todoContent';


export default function Todo(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const groupedTodos = groupByYearAndMonth(TODO_CONTENT)

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      {/* <main>
      </main> */}
      <div className={styles.todoBox}>
        <TodoGrid groupedTodos={groupedTodos} />
      </div>
      
    </Layout>
  );
}
