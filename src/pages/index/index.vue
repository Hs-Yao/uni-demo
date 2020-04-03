<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title" @click="toGoods">{{title}}111111</text>
		</view>
		<div class="test"> 
			<span>你好111</span>
			<span class="aa">haha222</span>
		</div>
		<div class="bb">oo</div>
		<div class="cc">aaaaaa</div>
		<button @click="add">按钮111</button>
		<global></global>
		<div>
			<i class="iconfont icontouxiang- touXiang"></i>
			<div>123</div>
			<van-button type="default">默认按钮</van-button>
		</div>
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
			console.log(this.$store.state.num);
		},
		methods: {
			toGoods() {
				uni.navigateTo({url: '/pages/goods/goods'});
			},
			add() {
				this.$store.dispatch('addNumSync',3);
				console.log(this.$store.state.num);
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
	.touXiang {
		font-size: 21px;
	}
</style>
