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
// const DEMO_LINK_BASE = 'https://nullaha.github.io/deploy-repo/'
const DEMO_LINK_BASE = '/deploy-repo/'
export const GROUPED_DEMOS: IGroupedDemos = {
  gis: [
    {
      title: 'arcgis4-vue3',
      time:'2024-7-25',
      link: `${DEMO_LINK_BASE}arcgis-demo`
      
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
