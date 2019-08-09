const products=[
    {id:'111',name:'朱一龙手绳',price:98,img:'https://img.alicdn.com/bao/uploaded/i2/2225037995/O1CN01yqeVeO28vl5jNi8b5_!!0-item_pic.jpg'},
    {id:'222',name:'朱一龙海报',price:18,img:'https://img.alicdn.com/bao/uploaded/i1/2457592194/TB246KaEXuWBuNjSszbXXcS7FXa_!!2457592194-0-item_pic.jpg'},
    {id:'333',name:'朱一龙抱枕',price:28,img:'https://img.alicdn.com/bao/uploaded/i4/2251215244/TB1c4XvuYorBKNjSZFjXXc_SpXa_!!0-item_pic.jpg'},
    {id:'444',name:'朱一龙手链',price:38,img:'https://img.alicdn.com/bao/uploaded/i3/1761328837/O1CN01YV1SnR2F9OXTopK7m_!!0-item_pic.jpg'},
    {id:'555',name:'朱一龙手绳',price:98,img:'https://img.alicdn.com/bao/uploaded/i2/2225037995/O1CN01yqeVeO28vl5jNi8b5_!!0-item_pic.jpg'},
    {id:'666',name:'朱一龙海报',price:18,img:'https://img.alicdn.com/bao/uploaded/i1/2457592194/TB246KaEXuWBuNjSszbXXcS7FXa_!!2457592194-0-item_pic.jpg'},
    {id:'777',name:'朱一龙抱枕',price:28,img:'https://img.alicdn.com/bao/uploaded/i4/2251215244/TB1c4XvuYorBKNjSZFjXXc_SpXa_!!0-item_pic.jpg'},
    {id:'888',name:'朱一龙手链',price:38,img:'https://img.alicdn.com/bao/uploaded/i3/1761328837/O1CN01YV1SnR2F9OXTopK7m_!!0-item_pic.jpg'},
];


const productDetails = {
    "111": {
        name:'朱一龙手绳',
        price:98,
        items: [
            {name: '品牌', value: 'other/其他'},
            {name: '适用对象', value: '青年'},
            {name: '款式', value: '鸭舌帽'},
            {name: '帽檐款式', value: '大檐'},
            {name: '檐形', value: '卷边'},
            {name: '主要材质', value: '棉麻'},
            {name: '人群', value: '通用'},
            {name: '风格', value: '街头'},
            {name: '款式细节', value: '刺绣'},
            {name: '适用季节', value: '春季 夏季 秋季 冬季'},
            {name: '尺码', value: '尺码'},
            {name: '颜色分类', value: '白色 黑色'},
        ],
        imgs: [
            'https://img.alicdn.com/imgextra/i1/813808592/TB2Vo2mXlTH8KJjy0FiXXcRsXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2ZGfmXcLJ8KJjy0FnXXcFDpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2jh_rXgvD8KJjSsplXXaIEFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2srrmXcnI8KJjSsziXXb8QpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2oE6nXgfH8KJjy1zcXXcTzpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2UsboXf6H8KJjSspmXXb2WXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2dsfoXf6H8KJjSspmXXb2WXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2cpTrXgnD8KJjy1XdXXaZsVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2GI6nXmYH8KJjSspdXXcRgVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2VZrmXnnI8KJjy0FfXXcdoVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2HEHnXf2H8KJjy0FcXXaDlFXa_!!813808592.jpg',
        ]
    },
    "222": {
         name:'朱一龙海报',
         price:18,
        items: [
            {name: '品牌', value: 'other/其他'},
            {name: '厚薄', value: '常规'},
            {name: '品牌类型', value: '短袖'},
            {name: '袖长', value: '短袖'},
            {name: '领型', value: '领型'},
            {name: '面料分类', value: '棉毛布'},
            {name: '款式细节', value: '绣标'},
            {name: '服饰工艺', value: '服饰工艺'},
            {name: '袖型', value: '常规'},
            {name: '花型图案', value: '条纹'},
            {name: '版型', value: '修身'},
            {name: '材质', value: '棉'},
            {name: '适用季节', value: '夏季'},
            {name: '上市时间', value: '2017年'},
            {name: '适用场景', value: '适用场景'},
            {name: '适用对象', value: '青少年'},
            {name: '基础风格', value: '青春流行'},
            {name: '细分风格', value: '日系复古'},
            {name: '颜色', value: '灰色 黑色 蓝色'},
            {name: '灰色 黑色 蓝色', value: 'M L XL 2XL'},
        ],
        imgs: [
            'https://img.alicdn.com/imgextra/i4/813808592/TB2GZ8rpb0kpuFjy0FjXXcBbVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2tlcVo3JkpuFjSszcXXXfsFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2IlcVo3JkpuFjSszcXXXfsFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2Ub8zphXkpuFjy0FiXXbUfFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB21n0OpbJkpuFjy1zcXXa5FFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2gQXVpm0jpuFjy0FlXXc0bpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2zddHpbFlpuFjy0FgXXbRBVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB27d5kpa8lpuFjy0FpXXaGrpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2lRp7pl0kpuFjSsppXXcGTXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2nJBvpbXlpuFjSszfXXcSGXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2VLBspl0lpuFjSszdXXcdxFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB242E_o30kpuFjSspdXXX4YXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB28_ygpbFkpuFjy1XcXXclapXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB27X7lrYJmpuFjSZFwXXaE4VXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2yl72rZtnpuFjSZFvXXbcTpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2VBg4r0RopuFjSZFtXXcanpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2z_kWr4xmpuFjSZFNXXXrRXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2hR3Vr4BmpuFjSZFDXXXD8pXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2nxM5r4hmpuFjSZFyXXcLdFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2hzo9r9FmpuFjSZFrXXayOXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2ipRpshlmpuFjSZPfXXc9iXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2wchXdrBmpuFjSZFuXXaG_XXa_!!813808592.jpg',
        ]
    },
    "333": {
        name:'朱一龙抱枕',
        price:28,
        items: [
            {name: '品牌', value: '其它/other'},
            {name: '品牌类型:', value: '设计师品牌'},
            {name: '品牌类型:', value: '棉毛布'},
            {name: '袖型', value: '常规'},
            {name: '材质: ', value: '棉'},
            {name: '适用场景', value: '其他休闲'},
            {name: '细分风格', value: '其他休闲'},
            {name: '印花主题', value: '海魂'},
            {name: '袖长', value: '海魂'},
            {name: '款式细节:', value: '绣标'},
            {name: '花型图案', value: '条纹'},
            {name: '适用季节', value: '夏季'},
            {name: '适用对象', value: '青少年'},
            {name: '颜色', value: '白色 红色 黄色'},
            {name: '厚薄', value: '常规'},
            {name: '领型', value: '圆领'},
            {name: '服饰工艺', value: '免烫处理'},
            {name: '版型', value: '宽松'},
            {name: '基础风格', value: '2017年'},
            {name: '基础风格', value: '青春流行'},
            {name: '尺码', value: 'M L XL'},
        ],
        imgs: [
            'https://img.alicdn.com/imgextra/i3/813808592/TB2xskFrrlmpuFjSZFlXXbdQXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2kv1loNXlpuFjSsphXXbJOXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2.6WMoHJkpuFjy1zcXXa5FFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2zTTcoHFkpuFjy1XcXXclapXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2GL2VoMxlpuFjy0FoXXa.lXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i3/813808592/TB2hvLFaSB0XKJjSZFsXXaxfpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB22xa9oSFjpuFjSspbXXXagVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB24lssrtFopuFjSZFHXXbSlXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2Ix.KrxhmpuFjSZFyXXcLdFXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB23TABrxBmpuFjSZFDXXXD8pXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2mEQ6rt4opuFjSZFLXXX8mXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2mEQ6rt4opuFjSZFLXXX8mXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2okgirElnpuFjSZFjXXXTaVXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2ogAwryRnpuFjSZFCXXX2DXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2BWZbrCVmpuFjSZFFXXcZApXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i1/813808592/TB2HUU6rt4opuFjSZFLXXX8mXXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i2/813808592/TB2l3QHrstnpuFjSZFvXXbcTpXa_!!813808592.jpg',
            'https://img.alicdn.com/imgextra/i4/813808592/TB2wchXdrBmpuFjSZFuXXaG_XXa_!!813808592.jpg',
        ]
    }
};

module.exports = {
    getProducts(size, offset) {
        let page = products.slice(offset, offset + size);
        return page;
    },
    getProductDetail(product_id) {
        return productDetails[product_id];
    }
};