/**
 * let list =[
    {id: 0, name: 'root', parentId: null},
    {id:1,name:'部门A',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
  ];

  after ->

  {
    id: 0,
    name: 'root',
    parentId: null,
    children: [
      {
        id: 1,
        name: '部门A',
        parentId: 0,
        children: [
          {
            id:3,
            name:'部门C',
            parentId:1,
            children: [
              {
                id:6,
                name:'部门F',
                parentId:3
              },
        ]},
      {
        id:4,
        name:'部门D',
        parentId:1,
        children: [
          {
            id:8,
            name:'部门H',
            parentId:4
          }
        ]},
      ]},
    ]}
 */

/**
 * 平铺的数组转换成具有嵌套层级关系的对象
 * @param {array} list
 * @param {string} root
 */
function convert(list, root) {
  let copyList = JSON.parse(JSON.stringify(list));
  const listMap = {};
  copyList.map(item => {
    listMap[item.id] = item;
  });

  // root
  const rootValue = listMap[root];

  Object.entries(listMap).map(([id, item]) => {
    let parent = listMap[item.parentId];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  });
  return rootValue;
}
