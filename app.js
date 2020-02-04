new Vue({
	el: '#app',
	data: {
		posts: [],
		users: [],
		comments: [],
		isVisible: true,
		searchName: '',
		searchBody: ''
	},
	computed: {
		filteredPosts() {
			return this.users.filter(user => {
				return user.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
			}) ||
			this.posts.filter(post => {
				return post.body.toLowerCase().indexOf(this.searchBody.toLowerCase()) > -1
			})
		}
	},
    created() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.posts = json
            });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.users = json
            });
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.comments = json
            });
    }

})