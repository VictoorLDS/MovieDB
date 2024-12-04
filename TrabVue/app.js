new Vue({
    el: "#app",
    data: {
      apiKey: "cb3dbef042c49e1541724a965550514d",
      currentPage: "home",
      searchQuery: "",
      movies: [],
      loading: false,
      url: ""
    },
    methods: {
      fetchMovies() {
        this.loading = true;
        if (this.searchQuery === "") {
          axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
              api_key: this.apiKey
            },
          })
          .then(response => {
            this.movies = response.data.results
            this.loading = false
          })
          } else {
            axios.get(`https://api.themoviedb.org/3/search/movie`, {
              params: {
                api_key: this.apiKey,
                query: this.searchQuery,
              },
            })
            .then(response => {
              this.movies = response.data.results;
              this.loading = false;
            })
          }
      },
  }});
  