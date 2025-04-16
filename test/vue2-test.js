import * as sass from 'sass';

const config = {
	files:{
		//region /app.vue
		'/app.vue':`
			<template>
				<div>
					<div class="test">app-{{index}}</div>
					<button @click="clickFn">app-增加</button>
					<page1/>
				</div>
			</template>
			<script setup lang="ts">
			import {
				shallowRef,
			} from 'vue';
			import page1 from '/page1.vue';
			
			const index = shallowRef<number>(0);
			function clickFn(){
				++index.value;
			}
			</script>
			<style scoped lang="scss">
			.test{
				color:red;
			}
			</style>
		`,
		//endregion
		//region /page1.vue
		'/page1.vue':`
			<template>
				<div>
					<div class="page1">page1-{{index}}</div>
					<button @click="clickFn">page1-增加</button>
				</div>
			</template>
			<script>
			export default {
				data(){
					return {
						index:0,
					};
				},
				methods:{
					clickFn(){
						++this.index;
					},
				},
			};
			</script>
			<style>
			.page1{
				color:green;
			}
			</style>
			`,
		//endregion
	},
};

const options = {
	moduleCache:{
		vue:Vue,
	},
	processStyles(srcRaw, lang, filename, options){
		if(lang === 'scss'){
			return sass.compileString(srcRaw).css;
		}
		return srcRaw;
	},
	getFile(url){
		return config.files[url];
	},
	async handleModule(type, getContentData, path, options){
		console.log('handleModule', {
			type,
			getContentData,
			path,
			options,
		});
		if(type === '.svg'){
			return getContentData(false);
		}
	},
	addStyle(textContent, scopeId){
		const style = Object.assign(
			document.createElement('style'),
			{
				textContent
			},
		);
		document.head.appendChild(style);
	},
	log(type, ...args){
		console[type](...args);
	},
};

window['vue2-sfc-loader']
	.loadModule('/app.vue', options)
	.then((app) => {
		new Vue(app).$mount('#app');
	});