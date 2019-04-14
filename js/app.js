(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	const vm = new Vue({
		el: '.todoapp',
		// 1.准备数据,渲染页面
		data : {
			list:[
				// { id : 1 , name : '春天' ,done : true},
				// { id : 2 , name : '长裙' ,done : false},
				// { id : 3 , name : '樱花' ,done : true}
			],
			todoName :'',
			editId  : -1,
			// computed
		},
		computed : {
			isShow(){
				console.log('cx');
				return  this.list.length > 0
			}
		},
		methods :{
			// 2.删除任务
			destodo(id){
				console.log(id);
				// 方法一:过滤
				this.list = this.list.filter(item => item.id != id)
				// console.log(this.list);	
			},
			// 3.添加任务
			addTodo(){
				const id = this.list.length == 0 ? 1 : this.list[this.list.length-1].id+1
				this.list.push({
					id : id,
					name : this.todoName ,
					done : false 
				})
				this.todoName = ''
				
			},
			// 4.修改任务
			ShowEdit(id){
				console.log(id);
				this.editId = id
				
			},
			hideEdit(){
				this.editId = -1
			}

			// 5.隐藏底部

		}


	})


})(window);
