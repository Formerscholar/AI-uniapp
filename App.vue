<script>
export default {
	globalData: {
		settings: {}
	},
	onLaunch: () => {},
	onShow: function() {
		this.$api.get_settings('get').then(res => {
			getApp().globalData.settings = res.data;
		});
	},
	onHide: function() {}
};
</script>

<style lang="scss">
@import '@/static/css/rich_text.scss';
@import '@/static/css/style.scss';
</style>
