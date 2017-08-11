/**
 * 通过 JS 对象来表示 DOM
 * @param {*} tagName 标签名
 * @param {*} props 属性
 * @param {*} children 子节点 
 */
function Element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

/**
 * 在原型上添加 render 方法
 * @return {dom}
 */
Element.prototype.render = function () {
    var el = document.createElement(this.tagName); // 通过标签名创建元素
    var props = this.props;

    for (var propName in props) { // 根据 props 设置元素的属性
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    var children = this.children || []; // 获得子节点

    children.forEach(function (child) {
        var childEl = (child instanceof Element) ?
            child.render() : // 如果子节点也是虚拟 DOM，递归构建 DOM 节点
            document.createTextNode(child); // 如果子节点是字符串，只构建文本节点
        el.appendChild(childEl); // 添加子节点
    });

    return el;
}

module.exports = function (tagName, props, children) {
    return new Element(tagName, props, children);
}