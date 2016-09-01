// 交换两个位置的值
function swap(arr, p1, p2){
	var temp = arr[p1]
	arr[p1] = arr[p2]
	arr[p2] = temp
}

//冒泡排序
function sort_bubble(arr){
	var len = arr.length
	for(var i = 0; i < len; i++){
		for(var j = 0; j < len - 1 - i; j++){
			if(arr[j] > arr[j + 1]){
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}

//选择排序
function sort_selection(arr){
	var len = arr.length
	var min
	for(var i=0;i<len-1;i++){
		min = i
		for(var j=i+1;j<len;j++){
			if(arr[min] > arr[j]){
				min = j
			}
		}
		swap(arr, i, min)
	}
	return arr
}
//插入排序
function sort_insertion(arr){
	var len = arr.length,
		value,//当前比较的值
		i,//未排序部分的当前位置
		j//已排序部分的当前位置
	for(i=0;i<len;i++){
		value = arr[i]
		for(j= i-1; j > -1 && arr[j] > value; j--){
			arr[j+1] = arr[j]
		}
		arr[j + 1] = value
	}
	return arr
}