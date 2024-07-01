export const initialExtent = {
  xmin: -180,
  ymin: -90,
  xmax: 180,
  ymax: 90,
  spatialReference: {
      wkid: 4490,
  }
};

export const fullExtent = {
  xmin: -180,
  ymin: -90,
  xmax: 180,
  ymax: 90,
  spatialReference: {
      wkid: 4490,
  }
};

export const lods = [
  {
      level: 0,
      resolution: 0.3515625,
      scale: 139770566.00717944
  },
  {
      level: 1,
      resolution: 0.17578125,
      scale: 69885283.00358972
  },
  {
      level: 2,
      resolution: 0.087890625,
      scale: 34942641.50179486
  },
  {
      level: 3,
      resolution: 0.0439453125,
      scale: 17471320.75089743
  },
  {
      level: 4,
      resolution: 0.02197265625,
      scale: 8735660.375448715
  },
  {
      level: 5,
      resolution: 0.010986328125,
      scale: 4367830.1877243575
  },
  {
      level: 6,
      resolution: 0.0054931640625,
      scale: 2183915.0938621787
  },
  {
      level: 7,
      resolution: 0.00274658203125,
      scale: 1091957.5469310894
  },
  {
      level: 8,
      resolution: 0.001373291015625,
      scale: 545978.7734655447
  },
  {
      level: 9,
      resolution: 0.0006866455078125,
      scale: 272989.38673277234
  },
  {
      level: 10,
      resolution: 0.0003433227539062,
      scale: 136494.69336636632
  },
  {
      level: 11,
      resolution: 0.0001716613769531,
      scale: 68247.34668318316
  },
  {
      level: 12,
      resolution: 0.0000858306884766,
      scale: 34123.67334161145
  },
  {
      level: 13,
      resolution: 0.0000429153442383,
      scale: 17061.836670805726
  },
  {
      level: 14,
      resolution: 0.0000214576721191,
      scale: 8530.918335382985
  },
  {
      level: 15,
      resolution: 0.0000107288360596,
      scale: 4265.45916771137
  },
  {
      level: 16,
      resolution: 0.0000053644180298,
      scale: 2132.729583855685
  },
  {
      level: 17,
      resolution: 0.0000026822090149,
      scale: 1066.3647919278426
  },
  {
      level: 18,
      resolution: 0.0000013411045074,
      scale: 533.1823959440429
  },
  {
      level: 19,
      resolution: 0.0000006705522537,
      scale: 266.59119797202146
  },
  {
      level: 20,
      resolution: 0.0000003352761269,
      scale: 133.2955990058892
  },
  {
      level: 21,
      resolution: 0.0000001676380634,
      scale: 66.64779948306612
  },
  {
      level: 22,
      resolution: 0.0000000838190317,
      scale: 33.32389974153306
  },
];

export default {
  dpi: 96,
  rows: 512,
  cols: 512,
  compressionQuality: 0,
  origin: {
      x: -180,
      y: 90,
  },
  spatialReference: {
      wkid: 4490
  },
  lods,
};