<style scoped lang='stylus'>
	
</style>
<template>
	<div>
		<!-- 这个router-view 表示 你login里面的内容将要呈递在这个容器里面 -->
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>