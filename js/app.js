(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	const vm = new Vue({
		el: '.todoapp',
		// 1.准备数据,渲染页面
		data : {
			list:[
				{ id : 1 , name : '春天' ,done : true},
				{ id : 2 , name : '长裙' ,done : false},
				{ id : 3 , name : '樱花' ,done : true}
			]
		},
		methods :{
			// 2.删除任务
			destodo(id){
				console.log(id);
				// 方法一:过滤
				this.list = this.list.filter(item => item.id != id)
				// console.log(this.list);	
			}
			// 3.添加任务
			// 4.修改任务
			// 5.隐藏底部
		}


	})


})(window);
