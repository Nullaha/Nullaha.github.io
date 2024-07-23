import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// 
// import { TODO_CONTENT } from './content';
const TODO_CONTENT = [
  {
    title: '我是todo',
  },
  {
    title: 'ArcGISServer/GeoServer切片服务规则',
    refer: [
      'ArcGISServer/GeoServer切片服务规则：https://blog.csdn.net/mxy2572185/article/details/86691005',
      '瓦片地图原理：https://segmentfault.com/a/1190000011276788',
      '瓦片(Tile)地图原理: https://xcsf.github.io/blog/2020/06/12/%E7%93%A6%E7%89%87Tile%E5%9C%B0%E5%9B%BE%E5%8E%9F%E7%90%86/'
    ]
  },
  {
    title: 'arcgis/core css 本地化',
    // // import '@arcgis/core/assets/esri/themes/light/main.css';
    // import '/public/arcgis-assets/assets/esri/themes/light/main.css';

  },
  {
    title: 'vue vite public 资源的使用(img,css,js,json...)'
  },
  {
    title: 'arcgis切片，通过nginx转发，项目里访问（要改WebTileLayer源码）'
  },
  {
    title: '为什么我把mapview保存到pinia中，然后我拿出来用加了个popup，我去拿pinia里的view它里面没有。。。'
  },
  {
    title:'离线使用arcgis/core，会碰到很多用到在线资源的情况，'
  }
]


export default function Todo(): JSX.Element {
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
