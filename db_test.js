require('./db')

var Course = require('./app/model/course')
// console.log(Course)

Course.create({
    name: "系统掌握深度学习，从入门到精通实战", //课程名称
    category: "/首页/人工智能/系统掌握深度学习",
    price: 2999, //价格
    picture: "https://new.stuq.org/files/default/2017/08-08/120213522984724939.jpg" ,//头图
    status: "更新中", //状态标签：更新中、直播课程、不可用
    plan: "教学计划：系统掌握深度学习，从...", //教学计划：系统掌握深度学习，从...
    effect_duration: "学习有效期：365 天（随到随学）", //学习有效期：365 天（随到随学）
    prompt: "课程原价 4999 元，现在限名额优惠，报名请尽快扫码咨询课程小助手", //课程提示： 课程原价 4999 元...
    target: "让学员掌握机器学习、深度学习基本原理", //课程目标
    target_user: "有一定编程基础，对深度学习有浓厚兴趣", //适合人群
    student_trend: [], //学员动态：（5条，xxx加入学习）
    evaluation_count: 103, //当评价表增加新数据，异步更新
    evaluation_average_number: 4.9, //当评价表增加新数据，异步更新
    latest_students: [], //最新学员（多个，最多20）
    toc: [], //目录
})

Course.create({
    name: "TensorFlow实战——基础班", //课程名称
    category: "/首页/人工智能/TensorFlow实战——基础班",
    price: 1999, //价格
    picture: "https://new.stuq.org/files/default/2017/08-07/171053d85903252716.jpg" ,//头图
    status: "更新中", //状态标签：更新中、直播课程、不可用
    plan: "暂无", //教学计划：系统掌握深度学习，从...
    effect_duration: "开始：2017-09-02   截止：2018-09-02", //学习有效期：365 天（随到随学）
    prompt: "课程原价：2599元，“1024”活动价：1799元，扫码立即购买。", //课程提示： 课程原价 4999 元...
    target: " 此课程将深入浅出的介绍深度学习的基本概念和常用模型，并给出使用TensorFlow实现这些模型和算法的最佳实践。", //课程目标
    target_user: "基础的编程能力，可以读懂基本的python代码", //适合人群
    student_trend: [], //学员动态：（5条，xxx加入学习）
    evaluation_count: 103, //当评价表增加新数据，异步更新
    evaluation_average_number: 4.9, //当评价表增加新数据，异步更新
    latest_students: [], //最新学员（多个，最多20）
    toc: [], //目录
})
