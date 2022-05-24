const util = {
    sum(a,b){
        return a + b;
    }
}

export default {   // 没给对象起名，在import时可以自定义名字
    threeSum(a,b,c){
        return a + b + c;
    }
}

export {util}   // export 导出util对象，让其他模块使用 ，如果导出时有名字，则在导入时必须用导出时的名字

// `export` 不仅可以导出对象，一切JS变量都可以导出。比如：基本数据类型、函数、数组、对象。