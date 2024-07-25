/**
 * 类型声明
 */
export interface ITodoItem {
  title:string;
  time: string;
  refer?: any[];
  state?: 'done';
  doneTime?: string;
  children?: ITodoItem[];
}
export interface IGroupedTodos {
  [year: string]: {
    [month: string]: ITodoItem[];
  };
}

// 所有todo
export const TODO_CONTENT: ITodoItem[] = [
  {
    title: 'ArcGISServer/GeoServer切片服务规则',
    time:'2024-7-21',
    refer: [
      'ArcGISServer/GeoServer切片服务规则：https://blog.csdn.net/mxy2572185/article/details/86691005',
      '瓦片地图原理：https://segmentfault.com/a/1190000011276788',
      '瓦片(Tile)地图原理: https://xcsf.github.io/blog/2020/06/12/%E7%93%A6%E7%89%87Tile%E5%9C%B0%E5%9B%BE%E5%8E%9F%E7%90%86/'
    ]
  },
  {
    title: 'arcgis/core css 本地化',
    time:'2024-7-22',
    state: 'done',
    doneTime: '2024-7-23'
    // // import '@arcgis/core/assets/esri/themes/light/main.css';
    // import '/public/arcgis-assets/assets/esri/themes/light/main.css';

  },
  {
    title: 'vue vite public 资源的使用(img,css,js,json...)',
    time:'2024-7-22',
    // https://blog.csdn.net/wallace_yang/article/details/128471176
  },
  {
    title: 'arcgis切片，通过nginx转发，项目里访问（要改WebTileLayer源码）',
    time:'2024-7-22',
    state: 'done',
    doneTime: '2024-7-23'
  },
  {
    title: '为什么我把mapview保存到pinia中，然后我拿出来用加了个popup，我去拿pinia里的view它里面没有。。。',
    time:'2024-7-22',
  },
  {
    title:'离线使用arcgis/core，会碰到很多用到在线资源的情况，',
    time:'2024-7-22',
    state: 'done',
    doneTime: '2024-7-23'
  },
  {
    title: 'arcgis/core popup若干问题',
    time:'2024-7-24',
    children: [
      {
        title: 'moveable popups',
        time:'2024-7-24',
        state: 'done',
        doneTime: '2024-7-24'
        // https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/is-it-possible-to-make-the-infowindow-pop-up/m-p/253400#M23440
        //3.x https://jsfiddle.net/goldenlimit/gaz8ao8n/
      },
      {
        title: 'popup collapse',
        time:'2024-7-24',
        //https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/popup-functionality-in-mobile-view/td-p/562752
      },
      {
        title: 'popup style',
        time:'2024-7-24',
        // https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/4-28-popup-styling-not-working/m-p/1362431
        // visibleElements
        // https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/popup-header-can-t-be-removed-in-arcgis-javascript/m-p/1351058/highlight/true#M82813
        // https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/popup-button-focus-color/m-p/1379690
        // change popup size 
      },
    ]
  },
  {
    title: 'vue外部修改#shadow-root (open)的样式',
    time:'2024-7-24',
    // https://blog.csdn.net/qq_44376306/article/details/128552574
    // https://juejin.cn/post/7157010755814948900#heading-1
  },
  //  -----------------------------
];

// 按年按月分组
export const groupByYearAndMonth = ( todos: ITodoItem[]) => {
  const grouped: IGroupedTodos = {};
  todos.forEach((item) => {
    const [year, month] = item.time.split('-');

    if(!grouped[year]){
      grouped[year] = {}
    }
    if(!grouped[year][month]) {
      grouped[year][month] = []
    }

    grouped[year][month].push(item)
  })

  return grouped
}