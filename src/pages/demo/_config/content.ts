/**
 * 类型声明
 */
export interface IDemoItem {
  title:string;
  time: string;
  refer?: any[];
  state?: 'done';
  doneTime?: string;
  link?: string;
  // children?: IDemoItem[];
}
export interface IGroupedDemos {
  [type: string]: IDemoItem[];
}

// 所有todo
export const GROUPED_DEMOS: IGroupedDemos = {
  gis: [
    {
      title: 'test',
      time:'2024-7-21',
      refer: [
        'ArcGISServer/GeoServer切片服务规则：https://blog.csdn.net/mxy2572185/article/details/86691005',
        '瓦片地图原理：https://segmentfault.com/a/1190000011276788',
        '瓦片(Tile)地图原理: https://xcsf.github.io/blog/2020/06/12/%E7%93%A6%E7%89%87Tile%E5%9C%B0%E5%9B%BE%E5%8E%9F%E7%90%86/'
      ]
    },
  ],
  three: [
    {
      title: 'test',
      time:'2024-7-21',
    },
  ]
};

export const DEMO_TYPES = Object.keys(GROUPED_DEMOS);
