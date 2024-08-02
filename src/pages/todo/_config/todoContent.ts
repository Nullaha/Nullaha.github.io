/**
 * 类型声明
 */
export interface ITodoItem {
  title:string;
  time: string;
  description?: string;
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
  {
    title: 'arcgis/core 本地化配置时，要加项目的BASE_URL',
    time:'2024-7-25',
    // 不能单纯的 esriConfig.xxx= '/public/arcgis-assets'
  },
  {
    title: 'arcgis4-vue3-demo',
    time:'2024-7-25',
    children: [
      {
        title: 'esri 本地化，配置ISOFFLINE',
        time: '2024-7-25'
      }
    ]
  },
  {
    title: 'style',
    time:'2024-7-30',
    children: [
      {
        title: 'flex: 1;min-height: 0;的作用?', 
        time:'2024-7-30', 
        description: `parent1是height:100%,flex. child-a是...child-b是flex: 1;min-height: 0;为什么加了min-height后parent0就不会出现滚动条了？`,

      },
    ]
  },
  {
    title: 'arcgis server发服务，怎么发？发什么服务？',
    time:'2024-8-02',
    // http://lbs.zjkelan.com/JSAPIBook/chapter2/3.1.html
    // http://zhihu.geoscene.cn/article/3468
    // https://desktop.arcgis.com/zh-cn/arcmap/latest/map/web-maps-and-services/adding-wmts-services.htm
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer?f=jsapi
    //   https://sampleserver6.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer?f=jsapi
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/FeatureServer/query
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/FeatureServer/1
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services
    // https://pro.arcgis.com/zh-cn/pro-app/latest/help/sharing/overview/configure-an-image-service.htm
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer?f=jsapi
    // https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer
    // https://www.jianshu.com/p/df66c0640de8
  },
  {
    title: 'ceisum的使用？',
    time:'2024-8-02',
    // https://www.cnblogs.com/onsummer/p/17299759.html
  },
  {
    title:'3dgs',
    time:'2024-8-02',
    // https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
    // https://github.com/amusi/CVPR2024-Papers-with-Code
  },
  {
    title:'全栈练习',
    time:'2024-8-02',
    // https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context
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
