/**
 * diff 函数
 */
function diff(oldTree, newTree) {
    var index = 0; // 当前节点的标志
    var patchs = {}; // 用来记录每个节点差异的对象

}

/**
 * 对两棵树进行深度优先遍历
 * @param {*} oldNode
 * @param {*} newNode
 * @param {*} index
 * @param {*} patchs
 */
function dfsWalk(oldNode, newNode, index, patchs) {
    patchs[index] = [];

}

/**
 * 遍历子节点
 * @param {*} oldChildren
 * @param {*} newChildren
 * @param {*} index
 * @param {*} patchs
 */
function diffChildren(oldChildren, newChildren, index, patchs) {
    var leftNode = null;
    var currentNodeIndex = index;   // 当前节点的标志
    oldChildren.forEach(function (child, i) {
        var newChild = newChildren[i];
        currentNodeIndex = (leftNode && leftNode.count)
    });
}