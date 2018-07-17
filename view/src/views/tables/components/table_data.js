export const table1Columns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '名称',
        align: 'center',
        key: 'name',
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        key: 'work',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const table1Data = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    }
];

export const editInlineColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '名称',
        align: 'center',
        key: 'name',
        width: 90,
        editable: true
    },
    {
        title: '详情',
        align: 'center',
        key: 'sex'
    },
    {
        title: '标题',
        align: 'center',
        key: 'work',
        width: 150,
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    }
];

export const editIncellColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 120,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 160,
        key: 'work',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const editIncellData = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    }
];

export const editInlineAndCellColumn = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '商品名称',
        align: 'center',
        key: 'shopName',
        width: 200,
        editable: true
    },
     {
        title: '商品图片',
        align: 'center',
        key: 'shopImg',
        width: 200,
        render: (h, params) => {
        return h('div', [
            h('img', {
                attrs: {
                    src: params.row.shopImg
                },
                style: {
                    width: '60px',
                    height: '50px'
                }
            }),
        ]);
    }
    },
    {
        title: '商品详情',
        align: 'center',
        key: 'shopDetail'
    },
    {
        title: '商品简介',
        align: 'center',
        width: 300,
        key: 'shopTip',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 200,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineAndCellData = [
    {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },
    {
        shopName: '高科新农-高新-S40单旋翼电动农用无人机',
        shopDetail: '具有任意航线规划、断点续喷、变量喷洒、低液压报警、作业参数实时显示、统计存储等功能；机身模块化设计，节省维修时间',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041618487252.jpg!w640qm.jpg',
        shopTip: '智能电池和智能充电系统'
    },
    {
         shopName: '高科新农HY-B-15L单旋翼电动农用无人机',
        shopDetail: '单旋翼无人机旋翼相对较长，飞行中产生的下旋气流，可将药液喷洒到植物的根茎部。雾滴分布均匀、沉降效果好，植保效率超过人工施药效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2016/12/201612081650529267.jpg!w640qm.jpg',
        shopTip: '连续作业能力强,载荷大、航时长'
    },
     {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },
    {
        shopName: '高科新农-高新-S40单旋翼电动农用无人机',
        shopDetail: '具有任意航线规划、断点续喷、变量喷洒、低液压报警、作业参数实时显示、统计存储等功能；机身模块化设计，节省维修时间',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041618487252.jpg!w640qm.jpg',
        shopTip: '智能电池和智能充电系统'
    },
    {
         shopName: '高科新农HY-B-15L单旋翼电动农用无人机',
        shopDetail: '单旋翼无人机旋翼相对较长，飞行中产生的下旋气流，可将药液喷洒到植物的根茎部。雾滴分布均匀、沉降效果好，植保效率超过人工施药效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2016/12/201612081650529267.jpg!w640qm.jpg',
        shopTip: '连续作业能力强,载荷大、航时长'
    },
     {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },
    {
        shopName: '高科新农-高新-S40单旋翼电动农用无人机',
        shopDetail: '具有任意航线规划、断点续喷、变量喷洒、低液压报警、作业参数实时显示、统计存储等功能；机身模块化设计，节省维修时间',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041618487252.jpg!w640qm.jpg',
        shopTip: '智能电池和智能充电系统'
    },
    {
         shopName: '高科新农HY-B-15L单旋翼电动农用无人机',
        shopDetail: '单旋翼无人机旋翼相对较长，飞行中产生的下旋气流，可将药液喷洒到植物的根茎部。雾滴分布均匀、沉降效果好，植保效率超过人工施药效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2016/12/201612081650529267.jpg!w640qm.jpg',
        shopTip: '连续作业能力强,载荷大、航时长'
    },
     {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },
    {
        shopName: '高科新农-高新-S40单旋翼电动农用无人机',
        shopDetail: '具有任意航线规划、断点续喷、变量喷洒、低液压报警、作业参数实时显示、统计存储等功能；机身模块化设计，节省维修时间',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041618487252.jpg!w640qm.jpg',
        shopTip: '智能电池和智能充电系统'
    },
    {
         shopName: '高科新农HY-B-15L单旋翼电动农用无人机',
        shopDetail: '单旋翼无人机旋翼相对较长，飞行中产生的下旋气流，可将药液喷洒到植物的根茎部。雾滴分布均匀、沉降效果好，植保效率超过人工施药效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2016/12/201612081650529267.jpg!w640qm.jpg',
        shopTip: '连续作业能力强,载荷大、航时长'
    },
     {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },
    {
        shopName: '高科新农-高新-S40单旋翼电动农用无人机',
        shopDetail: '具有任意航线规划、断点续喷、变量喷洒、低液压报警、作业参数实时显示、统计存储等功能；机身模块化设计，节省维修时间',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041618487252.jpg!w640qm.jpg',
        shopTip: '智能电池和智能充电系统'
    },
    {
         shopName: '高科新农HY-B-15L单旋翼电动农用无人机',
        shopDetail: '单旋翼无人机旋翼相对较长，飞行中产生的下旋气流，可将药液喷洒到植物的根茎部。雾滴分布均匀、沉降效果好，植保效率超过人工施药效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2016/12/201612081650529267.jpg!w640qm.jpg',
        shopTip: '连续作业能力强,载荷大、航时长'
    },
     {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    },  {
        shopName: '高科新农-高新—M23',
        shopDetail: '半对称喷洒系统大直径碳纤旋翼以及独有喷头布置，下压风场大，6米有效喷幅，提升喷洒效果',
        shopImg: 'https://a.img.s105.cn/UploadFiles/product/2017/5/201705041742237598.jpg!w640qm.jpg',
        shopTip: '纳米技术三防设计'
    }   

];

export const showCurrentColumns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '商品名称',
        align: 'center',
        key: 'name',
        width: 300,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 300,
        key: 'work',
        editable: true
    }
];

const tableData = {
    table1Columns: table1Columns,
    table1Data: table1Data,
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData,
    editIncellColumns: editIncellColumns,
    editIncellData: editIncellData,
    editInlineAndCellColumn: editInlineAndCellColumn,
    editInlineAndCellData: editInlineAndCellData,
    showCurrentColumns: showCurrentColumns
};

export default tableData;
