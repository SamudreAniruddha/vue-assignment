new Vue({
	el: '#app',
	
	data: {
		searchQuery: '',
		products: [
			{name: 'foo', price: 10},
			{name: 'bar', price: 5},
			{name: 'baz', price: 8}
		]
	},
	 methods:{
       reset(searchQuery){
       this.searchQuery='';
        
       }
  },
	
	computed: {
		filteredProductsCount: function() {
			// @param Array | Array that is being search through
			// @param String | Search query
			return this.$options.filters.filterBy(this.products, this.searchQuery).length;
		}
	},
});