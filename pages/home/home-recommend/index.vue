<template>
	<view>
		<!-- 推荐 开始 -->
		<view class="recommed_wrap">
			<view class="recommed_item" v-for="item in recommeds" :key="item.id">
				<image mode="widthFix" :src="item.thumb"></image>
			</view>
		</view>
		<!-- 推荐 结束 -->
		<!-- 月份 开始 -->
		<view class="moneths_wrap">
			<view class="moneths_title">
				<view class="moneth_title_info">
					<view class="moneths_info">
						<text>{{moneths.DD}} /</text>
						{{moneths.MM}}月
					</view>
					<view class="moneths_text">你负责美丽就好</view>
				</view>
				<view class="moneth_title_more">更多 ></view>
			</view>
			<view class="moneths_content"> </view>
		</view>
		<!-- 月份 结束 -->
	</view>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				recommeds: [],
				moneths:{}
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
				console.log(result);
				//推荐模块
				this.recommeds = result.res.homepage[1].items
				this.moneths  = result.res.homepage[2]
				this.moneths.MM=moment(this.moneths.stime).format("MM")
				this.moneths.DD=moment(this.moneths.stime).format("DD")
				console.log(this.moneths)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.recommed_wrap {
		display: flex;
		flex-wrap: wrap;
		.recommed_item {
			width: 50%;
			border: 5rpx solid #fff;
		}
	}

	view.moneths_wrap {
		view.moneths_title {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;

			.moneth_title_info {
				font-size: 30rpx;
				color: $color;
				font-weight: 600;

				view.moneths_info {
					text {
						font-size: 36rpx;
					}
				}

				view.moneths_text {
					font-size: 34rpx;
					color: #666;
					margin-left: 30rpx;
				}
			}

			view.moneth_title_more {
				font-size: 24rpx;
				color: $color;
			}
		}

		view.moneths_content {}
	}
</style>
