<template>
	<view>
		<!-- 推荐 开始 -->
		<view class="recommed_wrap">
			<view class="recommed_item"
			v-for="item in recommeds"
			:key="item.id">
				<image mode="widthFix" :src="item.thumb"></image>
			</view>
		</view>
		<!-- 推荐 结束 -->
		<!-- 月份 开始 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommeds:[]
			}
		},
		mounted() {
			this.request({
				url: "http://157.122.54.189:9088/image/v3/homepage/vertical",
				data: {
					limit: 30,
					order: "hot",
					skip: 0
				}
			}).then(result => {
				// console.log(result);
				this.recommeds = result.res.homepage[1].items
			})
		}
	}
</script>

<style lang="scss" scoped>
	.recommed_wrap{
		display: flex;
		flex-wrap: wrap;
		.recommed_item{
			width: 50%;
			border: 5rpx solid #fff;
		}
	}
</style>
