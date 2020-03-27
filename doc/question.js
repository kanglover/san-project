var Panel = san.defineComponent({
    template: '<div><slot name="title"/></div>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-panel': Panel
    },

    template: ''
        + '<div>'
        + '    <x-panel>'
        + '        <b slot="title">{{name}}</b>'
        + '        <p>{{desc}}</p>'
        + '    </x-panel>'
        + '</div>'

});
/* MyComponent 渲染结果
<div>
    <b>San</b>
</div>*/

var MyComponent1 = san.defineComponent({
    components: {
        'x-panel': Panel
    },

    template: ''
        + '<x-panel>'
        + '    <b slot="title">{{name}}</b>'
        + '    <p>{{desc}}</p>'
        + '</x-panel>'
});

/* MyComponent 渲染结果
<x-panel>
    <b>San</b>
    <p>....</p>
</x-panel>*/


// fire 和自定义on-event和 dispatch message有区别吗?
// dispatch 一直向上传递 组件和非owner之间的传递

new Component({
    owner: this,
    source: this.detailSource
});
// source 中可以定义事件  比下面更好传递信息


// owner 是目标位于哪个组件的视图中
// parent 是目标对应的直接父元素
// 父组件及子组件都是单独动态创建的，因此父子组件之间实际上是没有父子关系的
// 所以使用 owner 和 parent 1.是定义父子组件的关系，方便实现消息传递 2.定义 props 的作用域范围
// 如果直接传入 data 设定 owner 和 parent 效果不大

//
// 指南->动态子组件给父元素传值
new Component({
    parent: this, //=> owner: this  效果一样
    data: this.data.get('')
 });
和
// components: {
//     'ui-component': component
// }
// 通过创建实例可以动态添加组件

// 获取子元素
// this.children

// 组件反解有什么作用？

// data 数据可以不用定义 在模板中声明后通过 this.data.get 获取
// route 对象也在 data 中，this.data.get('route')
// store 数据也在data中


// 如何实现嵌套子路由，类似https://github.com/baidu/san-router/issues/15 所讲
// 如何用动态组件的话，不仅需要很多判断，而且增加子组件时还要先把原来加的子组件先移除掉，非常麻烦

// san 没有自定义指令，有其他实现思路吗？
