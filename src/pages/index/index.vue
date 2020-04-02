<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title" @click="toGoods">{{title}}111111</text>
		</view>
		<div class="test"> 
			<span>你好111</span>
			<span class="aa">haha</span>
		</div>
		<div class="bb">oo</div>
		<div class="cc">aaaaaa</div>
		<button>按钮111</button>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toGoods() {
				uni.navigateTo({url: '/pages/index/goods'});
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}
	button{
		line-height: 1;
		margin:0;
		button::after{
			border:none;
		}
	}
</style>
