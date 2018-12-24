#define  MaxVertexNum 100 // 假设最大定点数是100
#define InFINITY 65535    // 设为双字节无符号整数最大值为 655535
typedef int Vertex;       // 用顶点下标表示顶点，为整型
typedef int WeightType;   // 边的权值为 整型
typedef char DataType;    // 顶点存储的数据类型为 字符型

// 边的定义
typedef struct ENode *PtrToENode; // 给 ENode 结构体起别名
struct ENode {
    Vertex V1, V2; // 有向边 <V1, V2>
    WeightType Weight; // 权重
}
typedef PtrToENode Edge;  

typedef struct GNode *PtrToGNode;
struct GNode {
    int Nv; // 顶点数
    int Ne; // 边数
    WeightType G[MaxVertexNum][MaxVertexNum]; // 邻接矩阵
    DataType Data[MaxVertexNum]; // 存顶点的数据
}
typedef PtrToGNode MGraph;  /* 以邻接矩阵存储的图类型 */



MGraph CreateGraph(int VertexNum)
{
	// 初始化一个有 vertexNm 个顶点但没有边的图
	Vertex V, W;
	MGraph Graph;

	Graph = (MGraph)malloc(sizeof(struct GNode)); // 建立图
	Graph->Nv = VertexNum;
	Graph->Ne = 0;
	// 初始化邻接矩阵
	for(V=0; V < Graph->Nv; V++) {
		for(W=0; W < Graph->Nv; W++) {
			Graph->G[V][M] = InFINITY;
		}
	}
	return Graph;
}

void INsertEdge(MGraph Graph, Edge E)
{
	Graph->G[E->V1][E->V2] = E->Weight;
	//  如果是无向图，还要插入边
	Graph->G[E->V2][E->V1] = E->Weight;
}

MGraph BuildGraph()
{
	MGraph Graph;
	Edge E;
	Vertex V;
	int Nv, i;
	scanf("%d", %Nv); // 读取顶点个数
	Graph = CreateGraph(Nv);
	scanf("%d", &(Graph->Ne)); // 读入边数

	if(Graph->Ne != 0) { // 如果有边
		E = (Edge)malloc(sizeof (struct ENode)); /* 建立边结点 */ 
		/* 读入边，格式为"起点 终点 权重"，插入邻接矩阵 */
		for(i = 0; i < Graph->Ne; i++) {
			scanf("%d %d %d", &E->V1, &E->V2, &E->Weight);
			INsertEdge(Graph, E);
		}
	}
/* 如果顶点有数据的话，读入数据 */
	for(V=0; V < Graph->Nv; V++) {
		scanf(" %c ",&(Graph->Data[V]));
	}
	return Graph;
}

