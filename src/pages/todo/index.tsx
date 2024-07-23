import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Tooltip } from 'antd';
import TodoGrid from './comp/Grid';
// 
// import { TODO_CONTENT } from './content';
import { TODO_CONTENT, groupByYearAndMonth,ITodoItem } from '/todoContent.ts';


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
      {/* <ul>
        {TODO_CONTENT.map((item,index) => {
          return (
            <li key={index} >
              {
                item.state === 'done' 
                  ? (
                    <>
                      <Tooltip placement='bottom' title={'完成时间: ' + item.doneTime}>
                        ✔
                      </Tooltip>
                      <Tooltip placement='right' title={'todo时间: ' + item.time}>
                        <del>{item.title}</del>
                      </Tooltip>
                    </>
                  ) 
                  : (
                    <Tooltip placement='right' title={'todo时间: ' + item.time}>
                      {item.title}
                    </Tooltip>
                  )
              }
            </li>
          )
        })}
      </ul> */}
      <TodoGrid groupedTodos={groupedTodos} />
      
    </Layout>
  );
}
