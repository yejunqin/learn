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