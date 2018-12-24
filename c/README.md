### typedef 可以为一种数据类型定义新的一种名称：
如
```
typedef unsigned char BYTE;
BYTE  b1, b2;
```

### typedef struct 是为了方便使用结构体。
假设存在一个结构体
```
struct ENode {
    Vertex V1, V2; // 有向边 <V1, V2>
    WeightType Weight; // 权重
}
```
在声明该变量时，则需要 `struct ENode *node`
如果加上了 typedef
```
typedef struct strNode {
    Vertex V1, V2; // 有向边 <V1, V2>
    WeightType Weight; // 权重
} ENode
```
则声明该变量时，只需 `ENode *node` 即可。
不用写结构体名称了。

上面的代码实际上做了两步操作：

1. 新建结构体
```
struct strNode {
	Vertex V1, V2; // 有向边 <V1, V2>
    WeightType Weight; // 权重
}
```

2. 使用 typedef 为新结构起别名
```
typedef struct strNode Point;
```

### 深度优先 DFS
类似于数的先序遍历

用N表示顶点，E 表示边的话
1. 如果是邻接表，时间复杂度为 O(N+E)
2. 如果是邻接矩阵，时间复杂度为 O(N*2);

### 广度优先 BFS
用N表示顶点，E 表示边的话
1. 如果是邻接表，时间复杂度为 O(N+E)
2. 如果是邻接矩阵，时间复杂度为 O(N*2);




