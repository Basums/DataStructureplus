var app = new Vue({
	el: '#app',
	data: {
		searchText: '',
		timer: null,
		result:[]
	},
	watch: {
		searchText(val) {
			if (val) {
				clearTimeout(this.timer)
				this.result = []
				this.timer = setTimeout(() => {
					let keys = Object.keys(building)
					Object.keys(building).filter(x => {
						let bool = generReg(val).test(x)
						let boolch = generReg(val).test(building[x])
						if (bool||boolch) {
							this.result.push({a:x, b:building[x]})
						}
						return bool || boolch
					})
				}, 200)
			}
		}
	}
})

function generReg(val) {
	return new RegExp(`(.*)(${val.split('').join(')(.*)(')})(.*)`, 'i');
}